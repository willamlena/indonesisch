// Lernsitzung: mischt fällige Wiederholungen, neue Wörter (mit kurzen Lernschritten
// innerhalb der Sitzung) und Grammatik-Lektionen. Wählt je nach Festigkeit einer
// Karte passende Übungen – vom Wiedererkennen bis zum freien Eintippen.
(function () {
  const { esc, inline, shuffle, pick, norm, lev, escRe, Speech, icon, lessonHTML, selectThenCheck, t } = window.U;
  const St = window.Store;

  const speakBtn = (text, cls) =>
    `<button class="speak-btn ${cls || ''}" data-say="${esc(text)}" aria-label="${t('Vorlesen')}">${icon('speaker', cls === 'lg' ? 30 : 20)}</button>`;
  const slowBtn = text =>
    `<button class="speak-btn slow" data-say="${esc(text)}" data-slow="1" aria-label="${t('Langsam vorlesen')}">${icon('turtle', 20)}</button>`;

  const PRAISE = [t('Richtig!'), 'Bagus!', 'Benar!', 'Super!', 'Mantap!', t('Genau!')];

  class Session {
    // opts: { mode: 'daily' | 'practice', reviews, learning, news, onExit(summary|null) }
    constructor(root, opts) {
      this.root = root;
      this.mode = opts.mode || 'daily';
      this.revQ = opts.reviews || [];
      this.newQ = opts.news || [];
      this.pend = (opts.learning || []).map((id, i) => ({ id, phase: 'learn', step: 0, at: i * 2 }));
      this.onExit = opts.onExit;
      this.turn = 0;
      this.steps = 0;
      this.start = Date.now();
      this.stats = { reviews: 0, ok: 0, learned: 0, known: 0, answers: 0, correct: 0, wrong: new Set() };
      this.lastType = null;
      this.awaitNext = null;
      this.onKey = e => this.key(e);
      document.addEventListener('keydown', this.onKey);
      root.innerHTML = `
        <div class="session">
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
      // Vorlese-Knöpfe ([data-say]) behandelt der globale Klick-Handler in app.js
      this.loop();
    }

    remaining() {
      return this.revQ.length + this.newQ.length * 3 +
        this.pend.reduce((a, p) => a + (p.phase === 'learn' ? 2 - p.step : 1), 0);
    }
    updateProgress() {
      const rem = this.remaining();
      const pct = this.steps + rem ? (this.steps / (this.steps + rem)) * 100 : 100;
      this.bar.style.width = pct.toFixed(1) + '%';
      this.count.textContent = rem ? String(rem) : '';
    }

    // ---------- Ablaufsteuerung ----------
    next() {
      this.turn++;
      let best = -1;
      this.pend.forEach((p, i) => {
        if (p.at <= this.turn && (best < 0 || p.at < this.pend[best].at)) best = i;
      });
      if (best >= 0) return this.pend.splice(best, 1)[0];
      const canIntro = this.newQ.length > 0 && this.pend.length < 5;
      if (canIntro && (!this.revQ.length || this.turn % 3 === 0)) return this.introTask();
      if (this.revQ.length) return { id: this.revQ.shift(), phase: this.mode === 'practice' ? 'practice' : 'review', step: 0 };
      if (canIntro) return this.introTask();
      if (this.pend.length) {
        let e = 0;
        this.pend.forEach((p, i) => { if (p.at < this.pend[e].at) e = i; });
        return this.pend.splice(e, 1)[0];
      }
      if (this.newQ.length) return this.introTask();
      return null;
    }

    introTask() {
      const id = this.newQ[0];
      const card = St.CARDS[id];
      const unit = St.UNITS[card.unit];
      if (unit && unit.lesson && window.LESSONS[unit.lesson] && !St.S.lessons[unit.lesson]) {
        return { lesson: unit.lesson, unit };
      }
      this.newQ.shift();
      return { id, intro: true, newUnit: !!unit && unit.ids[0] === id };
    }

    loop() {
      Speech.stop();
      this.awaitNext = null;
      this.foot.innerHTML = '';
      this.updateProgress();
      const task = this.next();
      if (!task) return this.finish();
      this.shownAt = Date.now();
      this.root.querySelector('.session').scrollTop = 0;
      this.body.scrollTop = 0;
      if (task.lesson) return this.showLesson(task);
      const card = St.CARDS[task.id];
      if (!card) return this.loop();
      if (task.intro) return this.showIntro(card, task);
      this.showExercise(card, task);
    }

    key(e) {
      if (e.key === 'Enter' && this.awaitNext && !(e.target && e.target.tagName === 'INPUT')) {
        e.preventDefault();
        this.awaitNext();
      }
    }

    quit() {
      if (!confirm(t('Lerneinheit beenden? Dein Fortschritt ist gespeichert.'))) return;
      this.close(null);
    }
    close(summary) {
      Speech.stop();
      document.removeEventListener('keydown', this.onKey);
      this.onExit && this.onExit(summary);
    }

    addTime() {
      const d = St.day();
      d.t += Math.min(90, (Date.now() - this.shownAt) / 1000);
    }

    // ---------- Grammatik-Lektion ----------
    showLesson(task) {
      const L = window.LESSONS[task.lesson];
      const u = task.unit;
      this.body.innerHTML = `
        <div class="ex-kicker"><span class="chip">${esc(u.icon)} ${t('Neues Thema')}: ${esc(u.title)}</span><span class="chip accent">${t('Grammatik')}</span></div>
        <article class="lesson"><h2>${esc(L.title)}</h2>${lessonHTML(L)}</article>`;
      this.foot.innerHTML = `<button class="btn primary block" data-s="quiz">${t('Weiter zum Mini-Quiz')}</button>`;
      this.foot.querySelector('[data-s="quiz"]').onclick = () => this.lessonQuiz(task, L, 0, 0);
    }

    lessonQuiz(task, L, i, right) {
      if (i >= L.quiz.length) {
        this.addTime();
        St.S.lessons[task.lesson] = Date.now();
        St.save();
        this.body.innerHTML = `
          <div class="center-msg">
            <div class="big-emoji">${right === L.quiz.length ? '🎯' : '📘'}</div>
            <h2>${t('{a} von {b} richtig', { a: right, b: L.quiz.length })}</h2>
            <p class="muted">${t('Die Lektion findest du jederzeit wieder unter <b>Kurs</b>. Jetzt üben wir die neuen Wörter.')}</p>
          </div>`;
        this.foot.innerHTML = `<button class="btn primary block" data-s="go">${t("Los geht's")}</button>`;
        this.awaitNext = () => { this.steps++; this.loop(); };
        this.foot.querySelector('[data-s="go"]').onclick = this.awaitNext;
        return;
      }
      const [q, opts, ans, why] = L.quiz[i];
      const order = shuffle(opts.map((o, k) => k));
      this.body.innerHTML = `
        <div class="ex-kicker"><span class="chip accent">Quiz ${i + 1}/${L.quiz.length}</span></div>
        <div class="prompt-q">${inline(q)}</div>
        <div class="options">${order.map(k => `<button class="opt" data-k="${k}">${inline(opts[k])}</button>`).join('')}</div>`;
      this.foot.innerHTML = '';
      const box = this.body.querySelector('.options');
      selectThenCheck(box, this.foot, idx => {
        const b = box.querySelectorAll('.opt')[idx];
        const k = +b.dataset.k;
        const ok = k === ans;
        box.querySelectorAll('.opt').forEach(x => {
          x.disabled = true;
          if (+x.dataset.k === ans) x.classList.add('right');
        });
        if (!ok) b.classList.add('wrong');
        this.foot.innerHTML = `
          <div class="fb ${ok ? 'ok' : 'bad'}">
            <div class="fb-title">${ok ? icon('check') + ' ' + t('Richtig!') : t('Nicht ganz.')}</div>
            <div class="fb-text">${inline(why)}</div>
            <div class="fb-actions"><button class="btn primary" data-s="n">${t('Weiter')}</button></div>
          </div>`;
        this.awaitNext = () => this.lessonQuiz(task, L, i + 1, right + (ok ? 1 : 0));
        this.foot.querySelector('[data-s="n"]').onclick = this.awaitNext;
      }, fn => { this.awaitNext = fn; });
    }

    // ---------- Neues Wort / neuer Satz ----------
    showIntro(card, task) {
      const set = St.S.settings;
      const u = St.UNITS[card.unit];
      const isS = card.kind === 's';
      this.body.innerHTML = `
        <div class="ex-kicker">
          ${task.newUnit && u ? `<span class="chip">${esc(u.icon)} ${t('Neues Thema')}: ${esc(u.title)}</span>` : ''}
          <span class="chip accent">${isS ? t('Neuer Satz') : card.custom ? t('Dein Wort') : t('Neues Wort')}</span>
        </div>
        <div class="intro">
          <div class="intro-head">
            <div class="${isS ? 'big-sentence' : 'big-word'}">${esc(card.indo)}</div>
            <div class="speak-pair">${speakBtn(card.indo, 'lg')}${slowBtn(card.indo)}</div>
          </div>
          ${card.coll && set.colloquial ? `<div class="coll"><span>${t('Alltag')}</span> ${esc(card.coll)}</div>` : ''}
          <div class="meaning">${esc(card.de)}</div>
          ${card.note ? `<div class="note">💡 ${esc(card.note)}</div>` : ''}
          ${card.ex ? `
            <div class="example">
              <div class="ex-row"><div><div class="ex-id">${esc(card.ex)}</div><div class="ex-de">${esc(card.exde)}</div></div>${speakBtn(card.ex)}</div>
            </div>` : ''}
          <p class="hint">${isS ? t('Hör dir den Satz an und sprich ihn laut nach.') : t('Tippe auf 🔊 und sprich das Wort laut nach.')}</p>
        </div>`;
      this.foot.innerHTML = `
        <div class="foot-row">
          <button class="btn ghost" data-s="known">${t('Kenne ich schon')}</button>
          <button class="btn primary" data-s="next">${t('Weiter')}</button>
        </div>`;
      if (set.autoplay) setTimeout(() => Speech.speak(card.indo), 250);
      const go = () => {
        this.addTime();
        St.introduce(card.id);
        St.save();
        this.pend.push({ id: card.id, phase: 'learn', step: 0, at: this.turn + 2 });
        this.steps++;
        this.loop();
      };
      this.awaitNext = go;
      this.foot.querySelector('[data-s="next"]').onclick = go;
      this.foot.querySelector('[data-s="known"]').onclick = () => {
        this.addTime();
        St.markKnown(card.id);
        St.save();
        this.stats.known++;
        // Ersatz holen, damit das Tagesziel an neuen Wörtern trotzdem erreicht wird
        if (this.mode === 'daily') {
          const busy = new Set([...this.newQ, ...this.pend.map(p => p.id)]);
          this.newQ.push(...St.nextNewIds(1, busy));
        }
        this.loop();
      };
    }

    // ---------- Übungen ----------
    chooseType(card, task) {
      const set = St.S.settings;
      const voice = Speech.available;
      const st = St.S.cards[card.id];
      const s = (st && st.s) || 0;
      let pool;
      if (card.kind === 's') {
        if (task.phase === 'learn') pool = task.step === 0 ? ['tiles'] : ['tilesX', voice && 'sentListen'];
        else if (task.phase === 'relearn') pool = ['tiles'];
        else pool = ['tilesX', 'tilesX', 'sentMc', voice && 'sentListen', 'flip'];
      } else {
        const typeOk = set.typing && card.indo.length <= 32;
        const cloze = !!this.clozeMatch(card);
        if (task.phase === 'learn') pool = task.step === 0 ? ['mcIdDe', 'mcIdDe', voice && 'listen'] : [typeOk && 'type', typeOk && 'type', 'mcDeId'];
        else if (task.phase === 'relearn') pool = ['mcDeId'];
        else if (s < 4) pool = ['mcDeId', 'mcIdDe', voice && 'listen', typeOk && 'type', cloze && 'cloze'];
        else pool = [typeOk && 'type', typeOk && 'type', cloze && 'cloze', 'flip', voice && 'listen', 'mcDeId'];
      }
      pool = pool.filter(Boolean);
      if (pool.length > 1 && this.lastType) {
        const f = pool.filter(t => t !== this.lastType);
        if (f.length) pool = f;
      }
      return (this.lastType = pick(pool));
    }

    distractors(card, field, n) {
      const unitIds = card.unit === St.CUSTOM ? St.customIds() : ((St.UNITS[card.unit] || {}).ids || []);
      const near = [];
      [card.unit - 1, card.unit + 1, card.unit - 2].forEach(u => { if (St.UNITS[u]) near.push(...St.UNITS[u].ids); });
      const learned = Object.keys(St.S.cards);
      const out = [];
      const seenVals = new Set([norm(card[field])]);
      const tryIds = ids => {
        for (const id of ids) {
          if (out.length >= n) return;
          const c = St.CARDS[id];
          if (!c || c.id === card.id || c.kind !== card.kind) continue;
          const v = norm(c[field]);
          if (!v || seenVals.has(v) || norm(c.de) === norm(card.de)) continue;
          seenVals.add(v);
          out.push(c);
        }
      };
      tryIds(shuffle(unitIds));
      tryIds(shuffle(learned));
      tryIds(shuffle(near));
      if (out.length < n) tryIds(shuffle(St.ORDER));
      return out;
    }

    clozeMatch(card) {
      if (card.kind !== 'w' || !card.ex) return null;
      for (const a of St.answersFor(card)) {
        const re = new RegExp('(^|[^\\p{L}])(' + escRe(a) + ')(?=$|[^\\p{L}])', 'iu');
        const m = card.ex.match(re);
        if (m) return { start: m.index + m[1].length, text: m[2] };
      }
      return null;
    }

    showExercise(card, task) {
      const type = this.chooseType(card, task);
      this.current = { card, task, type };
      const fn = {
        mcIdDe: this.exMcIdDe, mcDeId: this.exMcDeId, listen: this.exListen, type: this.exType,
        cloze: this.exCloze, flip: this.exFlip, tiles: this.exTiles, tilesX: this.exTiles,
        sentMc: this.exSentMc, sentListen: this.exSentListen,
      }[type];
      fn.call(this, card, task, type);
    }

    kicker(text, card) {
      const u = St.UNITS[card.unit];
      return `<div class="ex-kicker"><span class="chip">${esc(t(text))}</span>${u ? `<span class="chip soft">${esc(u.icon)} ${esc(u.title)}</span>` : ''}</div>`;
    }

    // Multiple Choice; options: [{label, ok, say?}]
    // Antippen wählt nur aus – erst „Prüfen“ wertet (so passieren keine Vertipper)
    renderOptions(options, onPick) {
      const box = this.body.querySelector('.options');
      box.innerHTML = options.map((o, i) => `<button class="opt" data-i="${i}">${esc(o.label)}</button>`).join('');
      selectThenCheck(box, this.foot, i => {
        this.awaitNext = null;
        const o = options[i];
        box.querySelectorAll('.opt').forEach((x, k) => {
          x.disabled = true;
          if (options[k].ok) x.classList.add('right');
          else if (k === i) x.classList.add('wrong');
        });
        onPick(o.ok ? 3 : 1, o);
      }, fn => { this.awaitNext = fn; });
    }

    exMcIdDe(card, task) {
      this.body.innerHTML = `
        ${this.kicker('Was bedeutet das?', card)}
        <div class="prompt"><div class="big-word">${esc(card.indo)}</div>${speakBtn(card.indo)}</div>
        <div class="options"></div>`;
      if (St.S.settings.autoplay) setTimeout(() => Speech.speak(card.indo), 200);
      const opts = shuffle([{ label: card.de, ok: true }, ...this.distractors(card, 'de', 3).map(c => ({ label: c.de }))]);
      this.renderOptions(opts, g => this.grade(card, task, g));
    }

    exMcDeId(card, task) {
      this.body.innerHTML = `
        ${this.kicker('Wie sagt man das auf Indonesisch?', card)}
        <div class="prompt"><div class="big-de">${esc(card.de)}</div></div>
        <div class="options"></div>`;
      const opts = shuffle([{ label: card.indo, ok: true }, ...this.distractors(card, 'indo', 3).map(c => ({ label: c.indo }))]);
      this.renderOptions(opts, g => this.grade(card, task, g, { speak: true }));
    }

    exListen(card, task) {
      this.body.innerHTML = `
        ${this.kicker('Hör zu: Was bedeutet das?', card)}
        <div class="prompt listen">${speakBtn(card.indo, 'xl')}${slowBtn(card.indo)}</div>
        <div class="options"></div>`;
      setTimeout(() => Speech.speak(card.indo), 250);
      const opts = shuffle([{ label: card.de, ok: true }, ...this.distractors(card, 'de', 3).map(c => ({ label: c.de }))]);
      this.renderOptions(opts, g => this.grade(card, task, g));
    }

    exCloze(card, task) {
      const m = this.clozeMatch(card);
      const before = card.ex.slice(0, m.start), after = card.ex.slice(m.start + m.text.length);
      this.body.innerHTML = `
        ${this.kicker('Welches Wort fehlt?', card)}
        <div class="prompt cloze">
          <div class="cloze-text">${esc(before)}<span class="gap">?</span>${esc(after)}</div>
          <div class="ex-de">${esc(card.exde)}</div>
        </div>
        <div class="options"></div>`;
      // Optionen in Wörterbuch-Schreibweise, damit Großschreibung am Satzanfang nichts verrät
      const clean = s => s.split(' / ')[0].replace(/[?!.,]+$/, '');
      const right = clean(St.answersFor(card).find(a => a.toLowerCase() === m.text.toLowerCase()) || m.text);
      const opts = shuffle([{ label: right, ok: true }, ...this.distractors(card, 'indo', 3).map(c => ({ label: clean(c.indo) }))]);
      this.renderOptions(opts, g => {
        this.body.querySelector('.gap').textContent = m.text;
        this.body.querySelector('.gap').classList.add(g > 1 ? 'filled' : 'filled-bad');
        Speech.speak(card.ex);
        this.grade(card, task, g);
      });
    }

    exType(card, task) {
      const first = St.answersFor(card)[0];
      this.body.innerHTML = `
        ${this.kicker('Schreib es auf Indonesisch', card)}
        <div class="prompt"><div class="big-de">${esc(card.de)}</div></div>
        <form class="type-form" autocomplete="off">
          <input class="type-input" type="text" inputmode="text" autocapitalize="off" autocorrect="off" spellcheck="false" enterkeyhint="done" placeholder="${t('Antwort eintippen …')}" aria-label="${t('Antwort')}">
          <button type="button" class="link-btn" data-s="hint">${t('Tipp anzeigen')}</button>
          <div class="hint-text"></div>
        </form>`;
      this.foot.innerHTML = `
        <div class="foot-row">
          <button class="btn ghost" data-s="dunno">${t('Weiß ich nicht')}</button>
          <button class="btn primary" data-s="check">${t('Prüfen')}</button>
        </div>`;
      const input = this.body.querySelector('input');
      let hinted = false;
      setTimeout(() => input.focus(), 50);
      this.body.querySelector('[data-s="hint"]').onclick = () => {
        hinted = true;
        const words = first.split(' ');
        this.body.querySelector('.hint-text').textContent =
          words.map(w => w.slice(0, Math.max(1, Math.ceil(w.length / 3))) + '·'.repeat(Math.max(0, w.length - Math.ceil(w.length / 3)))).join(' ');
        input.focus();
      };
      const check = () => {
        const val = input.value;
        if (!val.trim()) { input.focus(); return; }
        input.blur();
        input.disabled = true;
        this.body.querySelector('[data-s="hint"]').hidden = true;
        const res = this.checkTyped(card, val);
        let g = res.g;
        // Mit Tipp richtig: zählt intern etwas schwächer, wird aber als richtig angezeigt
        const withHint = hinted && g === 3;
        if (withHint) g = 2;
        input.classList.add(g === 3 || withHint ? 'right' : g === 2 ? 'almost' : 'wrong');
        this.grade(card, task, g, { speak: true, typo: res.typo, typed: val, other: res.other, withHint });
      };
      this.body.querySelector('form').onsubmit = e => { e.preventDefault(); check(); };
      input.onkeydown = e => { if (e.key === 'Enter') { e.preventDefault(); check(); } };
      this.foot.querySelector('[data-s="check"]').onclick = check;
      this.foot.querySelector('[data-s="dunno"]').onclick = () => {
        input.disabled = true;
        this.body.querySelector('[data-s="hint"]').hidden = true;
        this.grade(card, task, 1, { speak: true });
      };
    }

    checkTyped(card, input) {
      const v = norm(input);
      const alts = St.answersFor(card).map(norm);
      if (alts.includes(v)) return { g: 3 };
      // Ein anderes Wort mit exakt derselben Bedeutung zählt auch
      const sameMeaning = Object.values(St.CARDS).find(c => c !== card && c.kind === 'w' &&
        norm(c.de) === norm(card.de) && St.answersFor(c).map(norm).includes(v));
      if (sameMeaning) return { g: 3 };
      let best = Infinity;
      alts.forEach(a => { best = Math.min(best, lev(a, v)); });
      const len = alts[0].length;
      const tol = len <= 3 ? 0 : len <= 7 ? 1 : 2;
      if (best <= tol) return { g: 2, typo: true };
      const other = Object.values(St.CARDS).find(c => c.kind === 'w' && St.answersFor(c).map(norm).includes(v));
      return { g: 1, other };
    }

    exFlip(card, task) {
      const isS = card.kind === 's';
      this.body.innerHTML = `
        ${this.kicker('Sag es laut auf Indonesisch', card)}
        <div class="prompt"><div class="${isS ? 'big-de sentence' : 'big-de'}">${esc(card.de)}</div></div>
        <div class="flip-answer" hidden>
          <div class="prompt"><div class="${isS ? 'big-sentence' : 'big-word'}">${esc(card.indo)}</div>${speakBtn(card.indo)}</div>
          ${card.ex && !isS ? `<div class="example"><div class="ex-row"><div><div class="ex-id">${esc(card.ex)}</div><div class="ex-de">${esc(card.exde)}</div></div>${speakBtn(card.ex)}</div></div>` : ''}
        </div>
        <p class="hint">${t('Sprich die Antwort zuerst laut aus – dann aufdecken.')}</p>`;
      this.foot.innerHTML = `<button class="btn primary block" data-s="reveal">${t('Aufdecken')}</button>`;
      const reveal = () => {
        this.body.querySelector('.flip-answer').hidden = false;
        this.body.querySelector('.hint').textContent = t('Hast du es gewusst?');
        Speech.speak(card.indo);
        this.foot.innerHTML = `
          <div class="known-row">
            <button class="btn known-no" data-g="1">${icon('x', 20)} ${t('Nicht gewusst')}</button>
            <button class="btn known-yes" data-g="3">${icon('check', 20)} ${t('Gewusst')}</button>
          </div>`;
        this.awaitNext = null;
        this.foot.querySelectorAll('[data-g]').forEach(b => {
          b.onclick = () => this.grade(card, task, +b.dataset.g, { silent: true });
        });
      };
      this.awaitNext = reveal;
      this.foot.querySelector('[data-s="reveal"]').onclick = reveal;
    }

    tokens(text) {
      return text.split(/\s+/).map(t => t.replace(/^[„“"']+/, '').replace(/[.,!?;:"„“”']+$/, '')).filter(Boolean);
    }

    exTiles(card, task, type) {
      const target = this.tokens(card.indo);
      let bank = target.map(t => ({ t }));
      if (type === 'tilesX' || (task.phase !== 'learn' && target.length < 4)) {
        const have = new Set(target.map(norm));
        const extra = [];
        for (const c of shuffle(Object.values(St.CARDS).filter(c => c.kind === 's'))) {
          for (const t of this.tokens(c.indo)) {
            if (extra.length >= 2) break;
            if (!have.has(norm(t))) { have.add(norm(t)); extra.push({ t }); }
          }
          if (extra.length >= 2) break;
        }
        bank = bank.concat(extra);
      }
      bank = shuffle(bank).map((b, i) => Object.assign(b, { i, used: false }));
      const chosen = [];
      this.body.innerHTML = `
        ${this.kicker('Bilde den Satz auf Indonesisch', card)}
        <div class="prompt"><div class="big-de sentence">${esc(card.de)}</div></div>
        <div class="tiles-answer" aria-live="polite"></div>
        <div class="tiles-bank"></div>`;
      this.foot.innerHTML = `<button class="btn primary block" data-s="check" disabled>${t('Prüfen')}</button>`;
      const ans = this.body.querySelector('.tiles-answer');
      const bk = this.body.querySelector('.tiles-bank');
      const checkBtn = this.foot.querySelector('[data-s="check"]');
      const draw = () => {
        ans.innerHTML = chosen.length
          ? chosen.map((b, k) => `<button class="tile" data-k="${k}">${esc(b.t)}</button>`).join('')
          : `<span class="tiles-placeholder">${t('Tippe die Wörter in der richtigen Reihenfolge an')}</span>`;
        bk.innerHTML = bank.map(b => `<button class="tile${b.used ? ' used' : ''}" data-i="${b.i}" ${b.used ? 'disabled' : ''}>${esc(b.t)}</button>`).join('');
        checkBtn.disabled = !chosen.length;
        ans.querySelectorAll('.tile').forEach(el => {
          el.onclick = () => { const b = chosen.splice(+el.dataset.k, 1)[0]; b.used = false; draw(); };
        });
        bk.querySelectorAll('.tile').forEach(el => {
          el.onclick = () => {
            const b = bank.find(x => x.i === +el.dataset.i);
            b.used = true;
            chosen.push(b);
            Speech.speak(b.t);
            draw();
          };
        });
      };
      draw();
      checkBtn.onclick = () => {
        const ok = norm(chosen.map(b => b.t).join(' ')) === norm(card.indo);
        ans.classList.add(ok ? 'right' : 'wrong');
        ans.querySelectorAll('.tile').forEach(t => { t.disabled = true; });
        bk.querySelectorAll('.tile').forEach(t => { t.disabled = true; });
        this.grade(card, task, ok ? 3 : 1, { speak: true });
      };
    }

    exSentMc(card, task) {
      this.body.innerHTML = `
        ${this.kicker('Was bedeutet der Satz?', card)}
        <div class="prompt"><div class="big-sentence">${esc(card.indo)}</div>${speakBtn(card.indo)}</div>
        <div class="options"></div>`;
      if (St.S.settings.autoplay) setTimeout(() => Speech.speak(card.indo), 200);
      const opts = shuffle([{ label: card.de, ok: true }, ...this.distractors(card, 'de', 3).map(c => ({ label: c.de }))]);
      this.renderOptions(opts, g => this.grade(card, task, g));
    }

    exSentListen(card, task) {
      this.body.innerHTML = `
        ${this.kicker('Hör zu: Was wurde gesagt?', card)}
        <div class="prompt listen">${speakBtn(card.indo, 'xl')}${slowBtn(card.indo)}</div>
        <div class="options"></div>`;
      setTimeout(() => Speech.speak(card.indo), 250);
      const opts = shuffle([{ label: card.de, ok: true }, ...this.distractors(card, 'de', 3).map(c => ({ label: c.de }))]);
      this.renderOptions(opts, g => this.grade(card, task, g));
    }

    // ---------- Bewertung & Planung ----------
    grade(card, task, g, info) {
      info = info || {};
      const d = St.day();
      d.x++;
      d.t += Math.min(60, (Date.now() - this.shownAt) / 1000);
      this.stats.answers++;
      if (g > 1) this.stats.correct++;
      let easy = null;
      const id = card.id;

      if (task.phase === 'learn') {
        const c = St.S.cards[id];
        if (g === 1) {
          c.err = (c.err || 0) + 1;
          c.step = 0;
          d.le = (d.le || 0) + 1;
          this.stats.wrong.add(id);
          this.pend.push({ id, phase: 'learn', step: 0, at: this.turn + 3 });
        } else {
          const need = (c.err || 0) >= 3 ? 1 : 2;
          const step = task.step + 1;
          if (step >= need) {
            const gg = c.err >= 2 ? 1 : c.err === 1 ? 2 : 3;
            St.graduate(id, gg);
            this.stats.learned++;
            if (gg === 3) easy = () => St.graduate(id, 4);
          } else {
            c.step = step;
            this.pend.push({ id, phase: 'learn', step, at: this.turn + 4 + Math.floor(Math.random() * 3) });
          }
        }
      } else if (task.phase === 'review') {
        const res = St.applyReview(id, g);
        this.stats.reviews++;
        if (g > 1) this.stats.ok++;
        if (g === 1) {
          this.stats.wrong.add(id);
          this.pend.push({ id, phase: 'relearn', step: 0, at: this.turn + 3 });
        } else if (g === 3) {
          easy = () => St.reapplyReview(id, res.before, res.now, 4);
        }
      } else if (g === 1) { // relearn / practice: so lange, bis es sitzt
        this.stats.wrong.add(id);
        this.pend.push({ id, phase: task.phase, step: 0, at: this.turn + 3 });
      }
      St.save();
      this.steps++;
      if (info.silent) return this.loop();
      this.feedback(card, g, info, easy);
    }

    feedback(card, g, info, easy) {
      const set = St.S.settings;
      const right = g >= 3 || info.withHint;
      const cls = right ? 'ok' : g === 2 ? 'meh' : 'bad';
      const title = right ? `${icon('check')} ${info.withHint ? t('Richtig! (mit Tipp)') : pick(PRAISE)}` : g === 2 ? t('Fast richtig – kleiner Tippfehler') : t('Nicht ganz – so ist es richtig:');
      const other = info.other && info.other.id !== card.id
        ? `<div class="fb-text">${t('„{a}“ heißt: {b}', { a: esc(info.typed.trim()), b: esc(info.other.de) })}</div>` : '';
      const showEx = !right && card.ex && card.kind === 'w';
      this.foot.innerHTML = `
        <div class="fb ${cls}">
          <div class="fb-title">${title}</div>
          <div class="fb-answer"><b>${esc(card.indo)}</b>${speakBtn(card.indo, 'sm')}<span class="fb-de">${esc(card.de)}</span></div>
          ${card.coll && set.colloquial && card.kind === 'w' ? `<div class="fb-text">${t('Alltag')}: ${esc(card.coll)}</div>` : ''}
          ${other}
          ${showEx ? `<div class="fb-text fb-ex">${esc(card.ex)} – <i>${esc(card.exde)}</i></div>` : ''}
          <div class="fb-actions">
            ${easy ? `<button class="btn ghost sm" data-s="easy">${t('War leicht')}</button>` : '<span></span>'}
            <button class="btn primary" data-s="next">${t('Weiter')}</button>
          </div>
        </div>`;
      if (info.speak && set.autoplay) Speech.speak(card.indo);
      const next = () => this.loop();
      this.awaitNext = next;
      this.foot.querySelector('[data-s="next"]').onclick = next;
      const eb = this.foot.querySelector('[data-s="easy"]');
      if (eb) eb.onclick = () => { easy(); St.save(); window.U.toast(t('Notiert – kommt später wieder.')); next(); };
      this.foot.querySelector('[data-s="next"]').focus({ preventScroll: true });
    }

    // ---------- Abschluss ----------
    finish() {
      Speech.stop();
      const st = this.stats;
      const secs = Math.round((Date.now() - this.start) / 1000);
      const acc = st.answers ? st.correct / st.answers : 1;
      const [head, sub] = acc >= 0.85 ? ['Bagus sekali!', t('Sehr gut gemacht!')]
        : acc >= 0.65 ? ['Kerja bagus!', t('Gute Arbeit!')] : ['Tetap semangat!', t('Bleib dran – Fehler gehören dazu!')];
      const wrong = [...st.wrong].map(id => St.CARDS[id]).filter(Boolean).slice(0, 8);
      const streak = St.streak();
      const moreAvailable = this.mode === 'daily' && St.nextNewIds(1).length > 0;
      try { navigator.storage && navigator.storage.persist && navigator.storage.persist(); } catch (e) { /* egal */ }
      this.bar.style.width = '100%';
      this.count.textContent = '';
      this.body.innerHTML = `
        <div class="summary">
          <div class="big-emoji">${acc >= 0.85 ? '🎉' : acc >= 0.65 ? '👏' : '💪'}</div>
          <h2>${head}</h2>
          <p class="muted">${sub}</p>
          <div class="sum-grid">
            <div class="tile-stat"><b>${Math.max(1, Math.round(secs / 60))}</b><span>${t('Minuten')}</span></div>
            <div class="tile-stat"><b>${st.learned}</b><span>${t('neu gelernt')}</span></div>
            <div class="tile-stat"><b>${st.reviews}</b><span>${t('wiederholt')}</span></div>
            <div class="tile-stat"><b>${Math.round(acc * 100)} %</b><span>${t('richtig')}</span></div>
          </div>
          ${streak ? `<div class="streak-line">${icon('flame', 20)} ${streak === 1 ? t('1 Tag in Folge') : t('{n} Tage in Folge', { n: streak })}</div>` : ''}
          ${wrong.length ? `
            <div class="wrong-list">
              <h3>${t('Diese kommen bald wieder')}</h3>
              ${wrong.map(c => `<div class="wl-row"><span><b>${esc(c.indo)}</b> – ${esc(c.de)}</span>${speakBtn(c.indo, 'sm')}</div>`).join('')}
            </div>` : ''}
        </div>`;
      this.foot.innerHTML = `
        <div class="foot-row">
          ${moreAvailable ? `<button class="btn ghost" data-s="more">${t('+5 neue Wörter')}</button>` : ''}
          <button class="btn primary" data-s="done">${t('Fertig')}</button>
        </div>`;
      const done = () => this.close({ more: false });
      this.awaitNext = done;
      this.foot.querySelector('[data-s="done"]').onclick = done;
      const mb = this.foot.querySelector('[data-s="more"]');
      if (mb) mb.onclick = () => this.close({ more: true });
    }
  }

  window.Session = Session;
})();
