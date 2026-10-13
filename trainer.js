// Vokabeltrainer: klassische Karteikarten in Runden à 20 Karten.
// Fragt abwechselnd Indonesisch → Deutsch und Deutsch → Indonesisch ab. Du bewertest dich
// selbst; gut gekonnte Karten kommen seltener, vergessene öfter (gemeinsames Gedächtnis
// mit den Lektionen). Neue eigene Wörter werden kurz vorgestellt und dann zweimal geübt.
(function () {
  const { esc, shuffle, Speech, icon } = window.U;
  const St = window.Store;
  const Ex = window.Examples;
  const ROUND = 20;   // Karten pro Runde
  const MAX_NEW = 5;  // höchstens so viele neue Karten pro Runde

  const speakBtn = (text, cls) =>
    `<button class="speak-btn ${cls || ''}" data-say="${esc(text)}" aria-label="Vorlesen">${icon('speaker', cls === 'lg' ? 30 : cls === 'sm' ? 16 : 20)}</button>`;

  function fmtDays(n) {
    if (n <= 0) return 'gleich';
    if (n === 1) return '1 Tag';
    if (n < 14) return `${n} Tage`;
    if (n < 60) return `${Math.round(n / 7)} Wo.`;
    if (n < 365) return `${Math.round(n / 30)} Mon.`;
    return `${(n / 365).toFixed(1).replace('.', ',')} J.`;
  }

  const exampleHTML = ex => Ex.blockHTML(ex);

  class Trainer {
    // opts: { mode: 'due' | 'extra', onExit() }
    constructor(root, opts) {
      this.root = root;
      this.mode = opts.mode || 'due';
      this.onExit = opts.onExit;
      this.awaitNext = null;
      this.onKey = e => this.key(e);
      document.addEventListener('keydown', this.onKey);
      root.innerHTML = `
        <div class="session trainer">
          <div class="s-top">
            <button class="icon-btn" data-s="quit" aria-label="Beenden">${icon('x', 24)}</button>
            <div class="progress" role="progressbar"><i></i></div>
            <div class="s-count"></div>
          </div>
          <div class="s-body"></div>
          <div class="s-foot"></div>
        </div>`;
      this.body = root.querySelector('.s-body');
      this.foot = root.querySelector('.s-foot');
      this.bar = root.querySelector('.progress i');
      this.count = root.querySelector('.s-count');
      root.querySelector('[data-s="quit"]').onclick = () => this.quit();
      this.body.addEventListener('click', e => {
        const t = e.target.closest('.tok');
        if (t) Ex.onTokenClick(t);
      });
      this.startRound();
    }

    startRound() {
      this.turn = 0;
      this.steps = 0;
      this.pend = [];
      this.round = { cards: 0, ok: 0, learned: 0, again: new Set(), start: Date.now() };
      let main;
      if (this.mode === 'extra') {
        main = shuffle(St.weakWordIds(ROUND)).map(id => ({ id, phase: 'extra' }));
      } else {
        const learning = St.learningIds('trainer').map(id => ({ id, phase: 'learn', step: St.S.cards[id].step || 0 }));
        const news = St.trainerNewIds().slice(0, Math.max(0, MAX_NEW - learning.length)).map(id => ({ id, phase: 'new' }));
        const due = St.dueWordIds().slice(0, Math.max(0, ROUND - news.length - learning.length)).map(id => ({ id, phase: 'review' }));
        // Neue Karten zwischen die Wiederholungen streuen
        main = learning.slice();
        const gap = news.length ? Math.max(1, Math.floor(due.length / (news.length + 1))) : 0;
        let ni = 0;
        due.forEach((t, i) => {
          if (ni < news.length && i > 0 && i % gap === 0) main.push(news[ni++]);
          main.push(t);
        });
        while (ni < news.length) main.push(news[ni++]);
      }
      this.main = main;
      this.loop();
    }

    remaining() { return this.main.length + this.pend.length; }
    updateProgress() {
      const rem = this.remaining();
      const pct = this.steps + rem ? (this.steps / (this.steps + rem)) * 100 : 100;
      this.bar.style.width = pct.toFixed(1) + '%';
      this.count.textContent = rem ? String(rem) : '';
    }

    next() {
      this.turn++;
      let best = -1;
      this.pend.forEach((p, i) => {
        if (p.at <= this.turn && (best < 0 || p.at < this.pend[best].at)) best = i;
      });
      if (best >= 0) return this.pend.splice(best, 1)[0];
      if (this.main.length) return this.main.shift();
      if (this.pend.length) {
        let e = 0;
        this.pend.forEach((p, i) => { if (p.at < this.pend[e].at) e = i; });
        return this.pend.splice(e, 1)[0];
      }
      return null;
    }

    loop() {
      Speech.stop();
      this.awaitNext = null;
      this.foot.innerHTML = '';
      this.updateProgress();
      const task = this.next();
      if (!task) return this.finish();
      const card = St.CARDS[task.id];
      if (!card) return this.loop();
      this.shownAt = Date.now();
      this.body.scrollTop = 0;
      if (task.phase === 'new') this.showNew(card, task);
      else this.showCard(card, task);
    }

    key(e) {
      if (e.target && /INPUT|TEXTAREA|SELECT/.test(e.target.tagName)) return;
      if ((e.key === ' ' || e.key === 'Enter') && this.awaitNext) {
        e.preventDefault();
        this.awaitNext();
      } else if (/^[1-4]$/.test(e.key)) {
        const b = this.foot.querySelector(`[data-g="${e.key}"]`);
        if (b) { e.preventDefault(); b.click(); }
      }
    }

    quit() {
      if (!confirm('Vokabeltrainer beenden? Dein Fortschritt ist gespeichert.')) return;
      this.close();
    }
    close() {
      Speech.stop();
      document.removeEventListener('keydown', this.onKey);
      this.onExit && this.onExit();
    }

    addTime() {
      St.day().t += Math.min(90, (Date.now() - this.shownAt) / 1000);
    }

    // ---------- Neue Karte vorstellen ----------
    showNew(card, task) {
      const set = St.S.settings;
      const u = St.UNITS[card.unit];
      this.body.innerHTML = `
        <div class="ex-kicker">
          <span class="chip accent">Neue Karte</span>
          <span class="chip soft">${card.custom ? '★ Dein Wort' : esc(u.icon + ' ' + u.title)}</span>
        </div>
        <div class="fc">
          <div class="intro-head"><div class="big-word">${esc(card.indo)}</div>${speakBtn(card.indo, 'lg')}</div>
          ${card.coll && set.colloquial ? `<div class="coll"><span>Alltag</span> ${esc(card.coll)}</div>` : ''}
          <div class="meaning">${esc(card.de)}</div>
          ${card.note ? `<div class="note">💡 ${esc(card.note)}</div>` : ''}
          ${exampleHTML(Ex.forCard(card))}
        </div>
        <p class="hint">Sprich das Wort laut nach – gleich wird es zweimal abgefragt.</p>`;
      this.foot.innerHTML = `
        <div class="foot-row">
          <button class="btn ghost" data-s="known">Kenne ich schon</button>
          <button class="btn primary" data-s="next">Weiter</button>
        </div>`;
      if (set.autoplay) setTimeout(() => Speech.speak(card.indo), 250);
      const go = () => {
        this.addTime();
        St.introduce(card.id, 'trainer');
        St.save();
        this.pend.push({ id: card.id, phase: 'learn', step: 0, repeat: true, at: this.turn + 2 });
        this.steps++;
        this.loop();
      };
      this.awaitNext = go;
      this.foot.querySelector('[data-s="next"]').onclick = go;
      this.foot.querySelector('[data-s="known"]').onclick = () => {
        this.addTime();
        St.markKnown(card.id);
        St.save();
        this.round.learned++;
        this.steps++;
        this.loop();
      };
    }

    // ---------- Karteikarte ----------
    showCard(card, task) {
      const set = St.S.settings;
      const st = St.S.cards[card.id];
      const dir = task.dir || (task.phase === 'learn'
        ? (task.step === 0 ? 'id' : 'de')
        : (((st && st.reps) || 0) % 2 === 0 ? 'id' : 'de'));
      task.dir = dir;
      const label = { review: 'Wiederholung', learn: 'Neu – üben', relearn: 'Nochmal', extra: 'Extra-Runde' }[task.phase];
      const front = dir === 'id'
        ? `<div class="fc-q"><div class="big-word">${esc(card.indo)}</div>${speakBtn(card.indo)}</div>
           <div class="fc-ask">Was bedeutet das?</div>`
        : `<div class="fc-q"><div class="big-de">${esc(card.de)}</div></div>
           <div class="fc-ask">Wie sagt man das auf Indonesisch? Sag es laut!</div>`;
      const back = dir === 'id'
        ? `<div class="fc-a meaning">${esc(card.de)}</div>`
        : `<div class="fc-a"><span class="big-word">${esc(card.indo)}</span>${speakBtn(card.indo)}</div>`;
      this.body.innerHTML = `
        <div class="ex-kicker">
          <span class="chip">${dir === 'id' ? 'Indonesisch → Deutsch' : 'Deutsch → Indonesisch'}</span>
          <span class="chip soft">${label}</span>
        </div>
        <div class="fc fc-card">
          ${front}
          <div class="fc-back" hidden>
            ${back}
            ${card.coll && set.colloquial ? `<div class="coll"><span>Alltag</span> ${esc(card.coll)}</div>` : ''}
            ${card.note ? `<div class="note">💡 ${esc(card.note)}</div>` : ''}
            ${exampleHTML(Ex.forCard(card))}
          </div>
        </div>`;
      this.foot.innerHTML = `<button class="btn primary block big" data-s="reveal">Umdrehen</button>`;
      if (dir === 'id' && set.autoplay) setTimeout(() => Speech.speak(card.indo), 200);
      const reveal = () => {
        const back = this.body.querySelector('.fc-back');
        if (!back.hidden) return;
        back.hidden = false;
        this.body.querySelector('.fc-ask').hidden = true;
        if (dir === 'de' && set.autoplay) Speech.speak(card.indo);
        this.showGrades(card, task);
      };
      this.awaitNext = reveal;
      this.foot.querySelector('[data-s="reveal"]').onclick = reveal;
      this.body.querySelector('.fc-card').addEventListener('click', e => { if (!e.target.closest('button')) reveal(); });
    }

    showGrades(card, task) {
      const st = St.S.cards[card.id];
      const m = St.S.learner.m;
      let hints = ['nochmal', '', '', ''];
      if (task.phase === 'review') {
        hints = [1, 2, 3, 4].map(g => fmtDays(Srs.previewInterval(st, g, Date.now(), m)));
      } else if (task.phase === 'learn') {
        const err = st.err || 0;
        const errGrade = err >= 2 ? 1 : err === 1 ? 2 : 3;
        const last = (task.step || 0) >= 1 || err >= 3;
        hints = [
          'gleich',
          last ? fmtDays(Srs.startInterval(Math.min(errGrade, 2), m)) : 'gleich',
          last ? fmtDays(Srs.startInterval(errGrade, m)) : 'gleich',
          err ? (last ? fmtDays(Srs.startInterval(errGrade, m)) : 'gleich') : fmtDays(Srs.startInterval(4, m)),
        ];
      }
      const names = [['Nochmal', 'g1'], ['Schwer', 'g2'], ['Gut', 'g3'], ['Leicht', 'g4']];
      this.foot.innerHTML = `
        <div class="grade-row">${names.map(([l, c], i) =>
          `<button class="btn grade ${c}" data-g="${i + 1}">${l}<small>${hints[i] || '&nbsp;'}</small></button>`).join('')}
        </div>`;
      this.awaitNext = null;
      this.foot.querySelectorAll('[data-g]').forEach(b => {
        b.onclick = () => this.grade(card, task, +b.dataset.g);
      });
    }

    grade(card, task, g) {
      const d = St.day();
      d.x++;
      d.t += Math.min(60, (Date.now() - this.shownAt) / 1000);
      const id = card.id;
      if (!task.repeat) {
        this.round.cards++;
        if (g > 1) this.round.ok++;
      }
      if (g === 1) this.round.again.add(id);

      if (task.phase === 'review') {
        St.applyReview(id, g);
        if (g === 1) this.pend.push({ id, phase: 'relearn', dir: task.dir, repeat: true, at: this.turn + 3 });
      } else if (task.phase === 'learn') {
        const c = St.S.cards[id];
        const err = c.err || 0;
        const errGrade = err >= 2 ? 1 : err === 1 ? 2 : 3;
        if (g === 1) {
          c.err = err + 1;
          c.step = 0;
          this.pend.push({ id, phase: 'learn', step: 0, repeat: true, at: this.turn + 3 });
        } else if (g === 4 && !err) {
          St.graduate(id, 4);
          this.round.learned++;
        } else {
          const step = (task.step || 0) + 1;
          if (step >= 2 || err >= 3) {
            St.graduate(id, Math.min(errGrade, g === 2 ? 2 : 3));
            this.round.learned++;
          } else {
            c.step = step;
            this.pend.push({ id, phase: 'learn', step, repeat: true, at: this.turn + 4 + Math.floor(Math.random() * 3) });
          }
        }
      } else if (g === 1) { // Nochmal / Extra-Runde: so lange, bis es sitzt
        this.pend.push({ id, phase: task.phase, dir: task.dir, repeat: true, at: this.turn + 3 });
      }
      St.save();
      this.steps++;
      this.loop();
    }

    // ---------- Rundenende ----------
    finish() {
      Speech.stop();
      const r = this.round;
      const t = St.today();
      const more = this.mode === 'extra' ? 0
        : St.dueWordIds().length + St.trainerNewIds().length + St.learningIds('trainer').length;
      const tomorrow = Object.keys(St.S.cards).filter(id => {
        const c = St.S.cards[id];
        return c.st === 'R' && c.due === t + 1 && St.CARDS[id] && St.CARDS[id].kind === 'w';
      }).length;
      const acc = r.cards ? r.ok / r.cards : 1;
      const again = [...r.again].map(id => St.CARDS[id]).filter(Boolean).slice(0, 8);
      this.bar.style.width = '100%';
      this.count.textContent = '';
      this.body.innerHTML = `
        <div class="summary">
          <div class="big-emoji">${r.cards + r.learned === 0 ? '✅' : acc >= 0.85 ? '🎉' : acc >= 0.65 ? '👏' : '💪'}</div>
          <h2>${r.cards + r.learned === 0 ? 'Nichts mehr fällig' : acc >= 0.85 ? 'Bagus sekali!' : acc >= 0.65 ? 'Kerja bagus!' : 'Tetap semangat!'}</h2>
          <p class="muted">${r.cards + r.learned === 0 ? 'Im Moment gibt es keine Karten zu wiederholen.' : 'Runde geschafft.'}</p>
          ${r.cards + r.learned ? `
          <div class="sum-grid">
            <div class="tile-stat"><b>${r.cards}</b><span>Karten</span></div>
            <div class="tile-stat"><b>${Math.round(acc * 100)} %</b><span>gewusst</span></div>
            <div class="tile-stat"><b>${r.learned}</b><span>neu gelernt</span></div>
            <div class="tile-stat"><b>${Math.max(1, Math.round((Date.now() - r.start) / 60000))}</b><span>Minuten</span></div>
          </div>` : ''}
          <p class="next-info">${more ? `Noch <b>${more}</b> ${more === 1 ? 'Karte' : 'Karten'} bereit.` : `Alles wiederholt! Morgen: <b>${tomorrow}</b> ${tomorrow === 1 ? 'Karte' : 'Karten'}.`}</p>
          ${again.length ? `
            <div class="wrong-list">
              <h3>Diese kommen bald wieder</h3>
              ${again.map(c => `<div class="wl-row"><span><b>${esc(c.indo)}</b> – ${esc(c.de)}</span>${speakBtn(c.indo, 'sm')}</div>`).join('')}
            </div>` : ''}
        </div>`;
      this.foot.innerHTML = `
        <div class="foot-row">
          <button class="btn ${more ? 'ghost' : 'primary'}" data-s="done">Fertig</button>
          ${more ? `<button class="btn primary" data-s="again">Nächste Runde</button>` : ''}
        </div>`;
      this.awaitNext = more ? () => this.startRound() : () => this.close();
      this.foot.querySelector('[data-s="done"]').onclick = () => this.close();
      const nb = this.foot.querySelector('[data-s="again"]');
      if (nb) nb.onclick = () => this.startRound();
    }
  }

  window.Trainer = Trainer;
})();
