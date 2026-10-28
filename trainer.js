// Vokabeltrainer: klassische Karteikarten in Runden à 20 Karten.
// Fragt abwechselnd Indonesisch → Deutsch und Deutsch → Indonesisch ab. Karte umdrehen, dann
// nach rechts wischen = gewusst, nach links = nicht gewusst. Gewusste Karten kommen seltener,
// vergessene öfter (gemeinsames Gedächtnis mit den Lektionen). Neue eigene Wörter werden kurz vorgestellt und dann zweimal geübt.
(function () {
  const { esc, shuffle, Speech, icon, t } = window.U;
  const St = window.Store;
  const Ex = window.Examples;
  const ROUND = 20;   // Karten pro Runde
  const MAX_NEW = 5;  // höchstens so viele neue Karten pro Runde

  const speakBtn = (text, cls) =>
    `<button class="speak-btn ${cls || ''}" data-say="${esc(text)}" aria-label="${t('Vorlesen')}">${icon('speaker', cls === 'lg' ? 30 : cls === 'sm' ? 16 : 20)}</button>`;

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
            <button class="icon-btn" data-s="quit" aria-label="${t('Beenden')}">${icon('x', 24)}</button>
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
      // Irgendwo auf den Bildschirm tippen = Karte umdrehen (außer auf Knöpfe und die obere Leiste)
      this.sess = root.querySelector('.session');
      this.sess.addEventListener('click', e => {
        if (!this.tapReveal || e.target.closest('button, a, .s-top, .tok')) return;
        this.tapReveal();
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
        main = shuffle(St.extraIds(ROUND)).map(id => ({ id, phase: 'extra' }));
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
      } else if (e.key === "ArrowRight" || e.key === "ArrowLeft") {
        const b = this.foot.querySelector(`[data-g="${e.key === "ArrowRight" ? 3 : 1}"]`);
        if (b) { e.preventDefault(); b.click(); }
      }
    }

    quit() {
      if (!confirm(t('Vokabeltrainer beenden? Dein Fortschritt ist gespeichert.'))) return;
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
          <span class="chip accent">${t('Neue Karte')}</span>
          <span class="chip soft">${card.custom ? '★ ' + t('Dein Wort') : esc(u.icon + ' ' + u.title)}</span>
        </div>
        <div class="fc">
          <div class="intro-head"><div class="big-word">${esc(card.indo)}</div>${speakBtn(card.indo, 'lg')}</div>
          ${card.coll && set.colloquial ? `<div class="coll"><span>${t('Alltag')}</span> ${esc(card.coll)}</div>` : ''}
          <div class="meaning">${esc(card.de)}</div>
          ${card.note ? `<div class="note">💡 ${esc(card.note)}</div>` : ''}
          ${exampleHTML(Ex.forCard(card))}
        </div>
        <p class="hint">${t('Sprich das Wort laut nach – gleich wird es zweimal abgefragt.')}</p>`;
      this.foot.innerHTML = `
        <div class="foot-row">
          <button class="btn ghost" data-s="known">${t('Kenne ich schon')}</button>
          <button class="btn primary" data-s="next">${t('Weiter')}</button>
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
      const label = { review: t('Wiederholung'), learn: t('Neu – üben'), relearn: t('Nochmal'), extra: t('Extra-Runde') }[task.phase];
      const front = dir === 'id'
        ? `<div class="fc-q"><div class="big-word">${esc(card.indo)}</div>${speakBtn(card.indo)}</div>
           <div class="fc-ask">${t('Was bedeutet das?')}</div>`
        : `<div class="fc-q"><div class="big-de">${esc(card.de)}</div></div>
           <div class="fc-ask">${t('Wie sagt man das auf {L}? Sag es laut!')}</div>`;
      const back = dir === 'id'
        ? `<div class="fc-a meaning">${esc(card.de)}</div>`
        : `<div class="fc-a"><span class="big-word">${esc(card.indo)}</span>${speakBtn(card.indo)}</div>`;
      this.body.innerHTML = `
        <div class="ex-kicker">
          <span class="chip">${dir === 'id' ? t('{L} → Deutsch') : t('Deutsch → {L}')}</span>
          <span class="chip soft">${label}</span>
        </div>
        <div class="fc fc-card">
          <div class="stamp yes">${t('Gewusst')}</div><div class="stamp no">${t('Nicht gewusst')}</div>
          ${front}
          <div class="fc-back" hidden>
            ${back}
            ${card.coll && set.colloquial ? `<div class="coll"><span>${t('Alltag')}</span> ${esc(card.coll)}</div>` : ''}
            ${card.note ? `<div class="note">💡 ${esc(card.note)}</div>` : ''}
            ${exampleHTML(Ex.forCard(card))}
          </div>
        </div>`;
      this.answered = false;
      this.foot.innerHTML = `<button class="btn primary block big" data-s="reveal">${t('Umdrehen')}</button>`;
      if (dir === 'id' && set.autoplay) setTimeout(() => Speech.speak(card.indo), 200);
      const reveal = () => {
        const back = this.body.querySelector('.fc-back');
        this.tapReveal = null;
        if (!back.hidden) return;
        back.hidden = false;
        this.body.querySelector('.fc-ask').hidden = true;
        if (dir === 'de' && set.autoplay) Speech.speak(card.indo);
        this.showGrades(card, task);
      };
      this.awaitNext = reveal;
      this.foot.querySelector('[data-s="reveal"]').onclick = reveal;
      this.tapReveal = reveal;
    }

    // Nach dem Umdrehen: nach rechts wischen = gewusst, nach links = nicht gewusst (oder die Knöpfe)
    showGrades(card, task) {
      this.foot.innerHTML = `
        <p class="swipe-hint">${t('← nicht gewusst · wischen · gewusst →')}</p>
        <div class="known-row">
          <button class="btn known-no" data-g="1">${icon("x", 20)} ${t('Nicht gewusst')}</button>
          <button class="btn known-yes" data-g="3">${icon("check", 20)} ${t('Gewusst')}</button>
        </div>`;
      this.awaitNext = null;
      this.foot.querySelectorAll("[data-g]").forEach(b => {
        b.onclick = () => this.answer(card, task, +b.dataset.g);
      });
      this.enableSwipe(card, task);
    }

    // Gewischt wird auf dem ganzen Bildschirm – die Karte bewegt sich mit
    enableSwipe(card, task) {
      const el = this.body.querySelector(".fc-card");
      const area = this.sess;
      let x0 = null, y0 = 0, dx = 0, pid = null, horizontal = false, t0 = 0;
      const reset = () => { el.style.transform = ""; el.classList.remove("lean-yes", "lean-no", "dragging"); };
      area.onpointerdown = e => {
        if (this.answered || e.target.closest("button, .s-top")) return;
        x0 = e.clientX; y0 = e.clientY; dx = 0; pid = e.pointerId; horizontal = false; t0 = Date.now();
      };
      area.onpointermove = e => {
        if (x0 === null || e.pointerId !== pid) return;
        dx = e.clientX - x0;
        if (!horizontal) {
          if (Math.abs(e.clientY - y0) > 12 && Math.abs(e.clientY - y0) > Math.abs(dx)) { x0 = null; return; } // senkrecht = scrollen
          if (Math.abs(dx) < 10) return;
          horizontal = true;
          el.classList.add("dragging");
          try { area.setPointerCapture(pid); } catch (err) { /* egal */ }
        }
        el.style.transform = `translateX(${dx}px) rotate(${dx / 18}deg)`;
        el.classList.toggle("lean-yes", dx > 50);
        el.classList.toggle("lean-no", dx < -50);
      };
      const end = () => {
        if (x0 === null) return;
        x0 = null;
        // weit genug gezogen – oder kurz und schnell geschnippt
      const far = Math.abs(dx) > Math.min(90, el.offsetWidth * 0.25);
      const flick = Math.abs(dx) > 40 && Math.abs(dx) / Math.max(1, Date.now() - t0) > 0.5;
      if (horizontal && (far || flick)) this.answer(card, task, dx > 0 ? 3 : 1);
        else reset();
      };
      area.onpointerup = end;
      area.onpointercancel = () => { x0 = null; reset(); };
    }

    // Karte wegfliegen lassen, dann werten
    answer(card, task, g) {
      if (this.answered) return;
      this.answered = true;
      const el = this.body.querySelector(".fc-card");
      el.classList.remove("dragging");
      el.classList.add(g > 1 ? "fly-right" : "fly-left");
          setTimeout(() => this.grade(card, task, g), 260);
    }

    grade(card, task, g) {
      if (this.sess) this.sess.onpointerdown = this.sess.onpointermove = this.sess.onpointerup = this.sess.onpointercancel = null;
      const d = St.day();
      d.x++;
      d.t += Math.min(60, (Date.now() - this.shownAt) / 1000);
      const id = card.id;
      if (!task.repeat) {
        this.round.cards++;
        if (g > 1) this.round.ok++;
      }
      if (g === 1) this.round.again.add(id);
      if (task.phase === 'extra' && !task.repeat) {
        St.extraDone(id);
        if (g === 1) St.extraForgot(id);
      }

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
      const today = St.today();
      const xi = this.mode === 'extra' ? St.extraInfo() : null;
      const more = this.mode === 'extra' ? 1
        : St.dueWordIds().length + St.trainerNewIds().length + St.learningIds('trainer').length;
      const tomorrow = Object.keys(St.S.cards).filter(id => {
        const c = St.S.cards[id];
        return c.st === 'R' && c.due === today + 1 && St.CARDS[id] && St.CARDS[id].kind === 'w';
      }).length;
      const acc = r.cards ? r.ok / r.cards : 1;
      const again = [...r.again].map(id => St.CARDS[id]).filter(Boolean).slice(0, 8);
      this.bar.style.width = '100%';
      this.count.textContent = '';
      this.body.innerHTML = `
        <div class="summary">
          <div class="big-emoji">${r.cards + r.learned === 0 ? '✅' : acc >= 0.85 ? '🎉' : acc >= 0.65 ? '👏' : '💪'}</div>
          <h2>${r.cards + r.learned === 0 ? t('Nichts mehr fällig') : acc >= 0.85 ? window.U.TL.great : acc >= 0.65 ? window.U.TL.good : window.U.TL.keep}</h2>
          <p class="muted">${r.cards + r.learned === 0 ? t('Im Moment gibt es keine Karten zu wiederholen.') : t('Runde geschafft.')}</p>
          ${r.cards + r.learned ? `
          <div class="sum-grid">
            <div class="tile-stat"><b>${r.cards}</b><span>${t('Karten')}</span></div>
            <div class="tile-stat"><b>${Math.round(acc * 100)} %</b><span>${t('gewusst')}</span></div>
            <div class="tile-stat"><b>${r.learned}</b><span>${t('neu gelernt')}</span></div>
            <div class="tile-stat"><b>${Math.max(1, Math.round((Date.now() - r.start) / 60000))}</b><span>${t('Minuten')}</span></div>
          </div>` : ''}
          ${xi ? `<p class="next-info">${xi.left ? t('Durchgang {s} von {m}: noch <b>{n}</b> Wörter.', { s: xi.stage, m: xi.stages, n: xi.left }) : t('Durchgang {s} von {m} geschafft! Als Nächstes kommen auch stärkere Wörter dazu.', { s: xi.stage, m: xi.stages })}</p>` : `<p class="next-info">${more ? (more === 1 ? t('Noch <b>1</b> Karte bereit.') : t('Noch <b>{n}</b> Karten bereit.', { n: more })) : (tomorrow === 1 ? t('Alles wiederholt! Morgen: <b>1</b> Karte.') : t('Alles wiederholt! Morgen: <b>{n}</b> Karten.', { n: tomorrow }))}</p>`}
          ${again.length ? `
            <div class="wrong-list">
              <h3>${t('Diese kommen bald wieder')}</h3>
              ${again.map(c => `<div class="wl-row"><span><b>${esc(c.indo)}</b> – ${esc(c.de)}</span>${speakBtn(c.indo, 'sm')}</div>`).join('')}
            </div>` : ''}
        </div>`;
      this.foot.innerHTML = `
        <div class="foot-row">
          <button class="btn ${more ? 'ghost' : 'primary'}" data-s="done">${t('Fertig')}</button>
          ${more ? `<button class="btn primary" data-s="again">${t('Nächste Runde')}</button>` : ''}
        </div>`;
      this.awaitNext = more ? () => this.startRound() : () => this.close();
      this.foot.querySelector('[data-s="done"]').onclick = () => this.close();
      const nb = this.foot.querySelector('[data-s="again"]');
      if (nb) nb.onclick = () => this.startRound();
    }
  }

  window.Trainer = Trainer;
})();
