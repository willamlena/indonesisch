// Gesprächstrainer (offline): Profil „Über mich“, Antwortprüfung, Gesprächsablauf mit
// Tippen oder Sprechen, Freihand-Modus, Auswertung – und die Suche „Situation schildern“,
// die passende Gespräche, Wörter, Beispielsätze und Grammatik zusammenstellt.
(function () {
  const { esc, norm, lev, shuffle, pick, Speech, Listen, icon, toast, selectThenCheck } = window.U;
  const St = () => window.Store;

  // ---------- Profil ----------
  const OPTIONS = {
    asal: [['Austria', 'Österreich'], ['Jerman', 'Deutschland'], ['Swiss', 'der Schweiz'], ['Belanda', 'den Niederlanden'],
      ['Italia', 'Italien'], ['Inggris', 'England'], ['Amerika', 'Amerika'], ['Australia', 'Australien']],
    kerja: [['karyawan kantor', 'Büroangestellte(r)'], ['manajer', 'Manager(in)'], ['guru', 'Lehrer(in)'], ['dokter', 'Arzt/Ärztin'],
      ['perawat', 'Pflegekraft'], ['insinyur', 'Ingenieur(in)'], ['desainer', 'Designer(in)'], ['arsitek', 'Architekt(in)'],
      ['pengusaha', 'Unternehmer(in)'], ['pegawai hotel', 'Hotelangestellte(r)'], ['mahasiswa', 'Student(in)'], ['pensiunan', 'im Ruhestand']],
    hobi: [['berenang', 'Schwimmen'], ['selancar', 'Surfen'], ['yoga', 'Yoga'], ['membaca', 'Lesen'], ['memasak', 'Kochen'],
      ['naik gunung', 'Bergwandern'], ['jalan-jalan', 'Reisen'], ['fotografi', 'Fotografieren'], ['menyanyi', 'Singen'],
      ['berkebun', 'Gärtnern'], ['menari', 'Tanzen'], ['olahraga', 'Sport']],
    pasanganRel: [['suami', 'Mann'], ['istri', 'Frau'], ['pacar', 'Partner(in)'], ['tunangan', 'Verlobte(r)']],
    anrede: [['perempuan', 'als Frau – „Bu“, „Mbak“'], ['laki-laki', 'als Mann – „Pak“, „Mas“'], ['', 'neutral – „Kak“']],
  };
  const FALLBACK = {
    nama: 'Anna', asal: 'Jerman', asalDe: 'Deutschland', kota: 'Bali', kerja: 'karyawan kantor', kerjaDe: 'Büroangestellte(r)',
    hobi: 'jalan-jalan', hobiDe: 'Reisen', pasangan: 'Budi', pasanganRel: 'pacar', pasanganRelDe: 'Partner(in)',
  };

  function profile() {
    const p = Object.assign({}, St().S.profile || {});
    const out = {};
    Object.keys(FALLBACK).forEach(k => { out[k] = (p[k] || '').trim() || FALLBACK[k]; });
    out.hasPartner = !!(p.pasangan || '').trim();
    out.hasName = !!(p.nama || '').trim();
    out.bu = p.anrede === 'perempuan' ? 'Bu' : p.anrede === 'laki-laki' ? 'Pak' : 'Kak';
    out.mbak = p.anrede === 'perempuan' ? 'Mbak' : p.anrede === 'laki-laki' ? 'Mas' : 'Kak';
    return out;
  }
  const fill = (s, prof) => String(s || '').replace(/\{(\w+)\}/g, (m, k) => (prof[k] != null ? prof[k] : m));

  // ---------- Antworten prüfen ----------
  const SUF = ['nya', 'lah', 'kah', 'ku', 'mu', 'pun'];
  const NUM_WORDS = new Set(['nol', 'kosong', 'satu', 'dua', 'tiga', 'empat', 'lima', 'enam', 'tujuh', 'delapan', 'sembilan', 'sepuluh', 'sebelas', 'belas', 'puluh', 'ratus', 'ribu', 'juta']);

  function parseKey(raw, prof) {
    let s = fill(raw, prof).trim();
    let optional = false;
    if (s.startsWith('?')) { optional = true; s = s.slice(1); }
    const [altsRaw, label] = s.split('::').map(x => x.trim());
    const alts = altsRaw.split('|').map(a => (a.trim() === '#num' ? '#num' : norm(a))).filter(Boolean);
    return { alts, label: label || altsRaw.split('|')[0], first: altsRaw.split('|')[0].trim(), optional };
  }

  function countNums(n) {
    let c = 0;
    n.trim().split(' ').forEach(t => {
      if (/^\d+$/.test(t)) c += t.length;
      else if (NUM_WORDS.has(t)) c++;
    });
    return c;
  }

  function matchAlt(n, alt) {
    if (alt === '#num') return countNums(n) >= 3;
    if (n.includes(' ' + alt + ' ')) return true;
    if (SUF.some(s => n.includes(' ' + alt + s + ' '))) return true;
    if (alt.length >= 5 && n.includes(' ' + alt)) return true;
    // kleine Tippfehler oder Hörfehler der Spracherkennung
    const tol = alt.length >= 9 ? 2 : alt.length >= 5 ? 1 : 0;
    if (!tol) return false;
    const toks = n.trim().split(' ');
    const k = alt.split(' ').length;
    const glued = alt.replace(/ /g, '');
    for (let i = 0; i + k <= toks.length; i++) {
      if (lev(toks.slice(i, i + k).join(' '), alt) <= tol) return true;
    }
    return toks.some(t => lev(t, glued) <= tol);
  }
  const matchGroup = (n, g) => !g.alts.length || g.alts.some(a => matchAlt(n, a));

  // Antworten, die zum Profil passen (when: 'pasangan' = nur mit Partner, '!pasangan' = nur ohne)
  function answersFor(step, prof) {
    const holds = w => {
      const key = w.replace('!', '');
      const v = key === 'pasangan' ? prof.hasPartner : !!prof[key];
      return w.startsWith('!') ? !v : v;
    };
    return (step.a || []).filter(a => !a.when || holds(a.when));
  }

  // Gibt {status: ok|partial|miss, answer, missing[], missingOpt[]} zurück
  function evaluate(step, texts, prof) {
    let best = null;
    answersFor(step, prof).forEach(ans => {
      const groups = ans.k.map(k => parseKey(k, prof));
      const req = groups.filter(g => !g.optional);
      texts.filter(Boolean).forEach(t => {
        const n = ' ' + norm(t) + ' ';
        const missing = req.filter(g => !matchGroup(n, g));
        const ratio = req.length ? (req.length - missing.length) / req.length : 1;
        const missingOpt = groups.filter(g => g.optional && !matchGroup(n, g));
        if (!best || ratio > best.ratio) best = { ans, ratio, missing, missingOpt, text: t };
      });
    });
    if (!best) return { status: 'miss', missing: [], missingOpt: [] };
    const status = best.ratio === 1 ? 'ok' : best.ratio >= 0.5 ? 'partial' : 'miss';
    return Object.assign(best, { status });
  }

  // ---------- Gesprächsablauf ----------
  const CONFUSED = ['Maaf, bagaimana?', 'Maaf, maksudnya?', 'Hmm, maaf, saya kurang mengerti.'];
  const CONFUSED_DE = { 'Maaf, bagaimana?': 'Entschuldigung, wie bitte?', 'Maaf, maksudnya?': 'Entschuldigung, was meinst du?', 'Hmm, maaf, saya kurang mengerti.': 'Hm, tut mir leid, das verstehe ich nicht ganz.' };

  class DialogRunner {
    // opts: { dialog, onExit(), onProfile() }
    constructor(root, opts) {
      this.root = root;
      this.d = opts.dialog;
      this.onExit = opts.onExit;
      this.onProfile = opts.onProfile;
      this.prof = profile();
      this.steps = this.d.steps;
      this.byId = {};
      this.steps.forEach((s, i) => { if (s.id) this.byId[s.id] = i; });
      this.results = [];
      const set = St().S.settings;
      this.handsFree = !!set.handsFree && Listen.supported;
      this.showDe = !!set.dialogDe;
      this.closed = false;
      this.onKey = e => { if (e.key === 'Escape') this.quit(); };
      document.addEventListener('keydown', this.onKey);
      root.innerHTML = `
        <div class="session talk">
          <div class="s-top">
            <button class="icon-btn" data-s="quit" aria-label="Beenden">${icon('x', 24)}</button>
            <div class="talk-title"><b>${esc(this.d.icon)} ${esc(this.d.title)}</b><span>${esc(fill(this.d.partner, this.prof))}</span></div>
            <button class="toggle-btn${this.showDe ? ' on' : ''}" data-s="de" aria-label="Übersetzung zeigen">DE</button>
            ${Listen.supported ? `<button class="toggle-btn${this.handsFree ? ' on' : ''}" data-s="hf" aria-label="Freihand-Modus">${icon('headphones', 18)}</button>` : ''}
          </div>
          <div class="s-body"><div class="chat${this.showDe ? ' show-de' : ''}"></div></div>
          <div class="s-foot"></div>
        </div>`;
      this.chat = root.querySelector('.chat');
      this.body = root.querySelector('.s-body');
      this.foot = root.querySelector('.s-foot');
      root.querySelector('[data-s="quit"]').onclick = () => this.quit();
      root.querySelector('[data-s="de"]').onclick = e => {
        this.showDe = !this.showDe;
        e.currentTarget.classList.toggle('on', this.showDe);
        this.chat.classList.toggle('show-de', this.showDe);
        St().S.settings.dialogDe = this.showDe;
        St().save();
      };
      const hf = root.querySelector('[data-s="hf"]');
      if (hf) hf.onclick = () => {
        this.handsFree = !this.handsFree;
        hf.classList.toggle('on', this.handsFree);
        St().S.settings.handsFree = this.handsFree;
        St().save();
        toast(this.handsFree ? 'Freihand-Modus an: Nach jedem Satz hört die App automatisch zu.' : 'Freihand-Modus aus.');
        if (this.handsFree && this.waitingFor) this.listen();
        if (!this.handsFree) Listen.stop();
      };
      this.chat.addEventListener('click', e => {
        const b = e.target.closest('.bubble.partner');
        if (b && !e.target.closest('button')) b.classList.toggle('reveal');
        const tok = e.target.closest('.tok');
        if (tok) window.Examples.onTokenClick(tok);
      });
      this.intro();
    }

    scroll() { requestAnimationFrame(() => { this.body.scrollTop = this.body.scrollHeight; }); }

    intro() {
      const d = this.d, p = this.prof;
      const needProfile = d.personal && !p.hasName;
      this.chat.innerHTML = `
        <div class="talk-intro">
          <div class="big-emoji">${esc(d.icon)}</div>
          <h2>${esc(d.title)}</h2>
          <p class="setting">${esc(fill(d.setting, p))}</p>
          <p class="goal"><b>Dein Ziel:</b> ${esc(fill(d.goal, p))}</p>
          ${needProfile ? `<div class="callout">Dieses Gespräch nutzt deine Angaben unter <b>Über mich</b> (Name, Herkunft, Beruf …). <button class="link-btn" data-s="profile">Jetzt ausfüllen</button></div>` : ''}
          <p class="muted small">Antworte auf Indonesisch – tippen oder 🎤 sprechen. Hilfe gibt es unten: Tipp, Auswahl oder Lösung. Tippe auf einen Satz deines Gegenübers für die Übersetzung.</p>
        </div>`;
      const pb = this.chat.querySelector('[data-s="profile"]');
      if (pb) pb.onclick = () => this.onProfile && this.onProfile(() => { this.prof = profile(); this.intro(); });
      this.foot.innerHTML = `<button class="btn primary block big" data-s="start">Gespräch starten</button>`;
      this.foot.querySelector('[data-s="start"]').onclick = () => { this.chat.innerHTML = ''; this.i = 0; this.started = Date.now(); this.play(); };
    }

    addBubble(cls, html) {
      const el = document.createElement('div');
      el.className = 'bubble ' + cls;
      el.innerHTML = html;
      this.chat.appendChild(el);
      this.scroll();
      return el;
    }

    partnerSays(id, de) {
      const ex = window.Examples;
      const text = ex.html(ex.analyseText(id));
      this.addBubble('partner', `
        <div class="who">${esc(fill(this.d.partner, this.prof))}</div>
        <div class="b-id">${text}</div>
        <div class="tok-info"></div>
        ${de ? `<div class="b-de">${esc(de)}</div>` : ''}
        <button class="speak-btn sm" data-say="${esc(id)}" aria-label="Vorlesen">${icon('speaker', 16)}</button>`);
    }

    play() {
      if (this.closed) return;
      Listen.stop();
      this.waitingFor = null;
      const step = this.steps[this.i];
      if (!step) return this.finish();
      const p = this.prof;
      if (step.n) this.addBubble('narration', esc(fill(step.n, p)));
      const said = fill(step.p, p);
      this.partnerSays(said, fill(step.pd, p));
      if (step.task) this.renderTask(step);
      else this.foot.innerHTML = '<div class="talk-wait">…</div>';
      Speech.speak(said, {
        onend: () => {
          if (this.closed || this.steps[this.i] !== step) return;
          if (step.end) return this.endReached();
          if (!step.task) { this.i++; setTimeout(() => this.play(), 400); return; }
          if (this.handsFree) this.listen();
        },
      });
    }

    renderTask(step) {
      const p = this.prof;
      this.waitingFor = step;
      this.attempts = 0;
      this.helped = false;
      this.foot.innerHTML = `
        <div class="task-card"><span class="label">Deine Aufgabe</span><div>${esc(fill(step.task, p))}</div></div>
        <div class="help-box" hidden></div>
        <form class="talk-input" autocomplete="off">
          <input type="text" placeholder="Antwort auf Indonesisch …" autocapitalize="off" autocorrect="off" spellcheck="false" enterkeyhint="send" aria-label="Antwort">
          ${Listen.supported ? `<button type="button" class="icon-btn mic" data-s="mic" aria-label="Sprechen">${icon('mic', 22)}</button>` : ''}
          <button type="submit" class="icon-btn send" aria-label="Senden">${icon('send', 20)}</button>
        </form>
        <div class="talk-help">
          <button type="button" class="chip-btn" data-s="tip">💡 Tipp</button>
          <button type="button" class="chip-btn" data-s="choices">Auswahl</button>
          <button type="button" class="chip-btn" data-s="solution">Lösung</button>
        </div>`;
      const form = this.foot.querySelector('form');
      const input = form.querySelector('input');
      this.input = input;
      this.lastAlts = null;
      form.onsubmit = e => {
        e.preventDefault();
        // Gesprochene Antwort: alle Varianten der Spracherkennung mitprüfen
        const alts = this.lastAlts && this.lastAlts[0] === input.value ? this.lastAlts : [];
        this.submit(input.value, alts);
      };
      const mic = form.querySelector('[data-s="mic"]');
      if (mic) mic.onclick = () => (Listen.active ? Listen.stop() : this.listen());
      this.foot.querySelector('[data-s="tip"]').onclick = () => this.showTip(step);
      this.foot.querySelector('[data-s="choices"]').onclick = () => this.showChoices(step);
      this.foot.querySelector('[data-s="solution"]').onclick = () => this.showSolution(step);
    }

    listen() {
      const step = this.waitingFor;
      if (!step || !Listen.supported) return;
      Speech.stop();
      const mic = this.foot.querySelector('[data-s="mic"]');
      if (mic) mic.classList.add('listening');
      const ok = Listen.start({
        lang: 'id-ID',
        onInterim: t => { if (this.input) this.input.value = t; },
        onEnd: alts => {
          if (mic) mic.classList.remove('listening');
          if (this.closed || this.waitingFor !== step) return;
          if (alts.length) {
            this.input.value = alts[0];
            this.lastAlts = alts;
            // Im Freihand-Modus direkt prüfen, sonst kannst du den Text erst ansehen und absenden
            if (this.handsFree) this.submit(alts[0], alts);
          }
        },
        onError: code => {
          if (mic) mic.classList.remove('listening');
          if (code === 'no-speech' || code === 'aborted') return;
          if (code === 'not-allowed' || code === 'service-not-allowed') toast('Das Mikrofon ist nicht erlaubt. Du kannst die Antwort auch tippen oder das Mikrofon der Tastatur nutzen.');
          else if (code === 'network') toast('Die Spracherkennung braucht hier Internet. Tippe die Antwort oder nutze das Mikrofon der Tastatur.');
          else if (code === 'language-not-supported') toast('Dein Handy erkennt kein Indonesisch. Nutze das Mikrofon der Tastatur.');
        },
      });
      if (!ok && mic) mic.classList.remove('listening');
    }

    showTip(step) {
      const p = this.prof;
      const box = this.foot.querySelector('.help-box');
      const ans = answersFor(step, p)[0];
      const words = ans ? ans.k.map(k => parseKey(k, p)).filter(g => !g.optional && g.alts[0] !== '#num').map(g => `<b>${esc(g.first)}</b> = ${esc(g.label)}`).join(' · ') : '';
      box.innerHTML = `💡 ${step.tip ? esc(fill(step.tip, p)) : words || 'Schau dir die Aufgabe noch einmal an.'}`;
      box.hidden = false;
    }

    showSolution(step, silent) {
      const p = this.prof;
      const ans = answersFor(step, p)[0];
      if (!ans) return;
      this.helped = true;
      const m = fill(ans.m, p);
      const box = this.foot.querySelector('.help-box');
      box.innerHTML = `
        <div class="sol"><b>${esc(m)}</b> <button class="speak-btn sm" data-say="${esc(m)}" aria-label="Vorlesen">${icon('speaker', 16)}</button></div>
        <div class="muted small">${esc(fill(ans.md, p))}</div>
        <button class="btn ghost sm" data-s="take">Übernehmen</button>`;
      box.hidden = false;
      box.querySelector('[data-s="take"]').onclick = () => { this.input.value = m; this.lastAlts = null; this.input.focus(); };
      if (!silent) Speech.speak(m);
    }

    showChoices(step) {
      const p = this.prof;
      this.helped = true;
      const right = answersFor(step, p).map(a => ({ label: fill(a.m, p), ok: true }));
      const others = [];
      this.steps.forEach(s => { if (s !== step) (s.a || []).forEach(a => { if (!a.when) others.push(fill(a.m, p)); }); });
      const wrong = shuffle(others.filter(o => !right.some(r => r.label === o))).slice(0, Math.max(1, 3 - right.length)).map(l => ({ label: l, ok: false }));
      const opts = shuffle(right.concat(wrong));
      const box = this.foot.querySelector('.help-box');
      box.innerHTML = `<div class="choice-list">${opts.map((o, i) => `<button type="button" class="opt" data-i="${i}">${esc(o.label)}</button>`).join('')}</div><div class="choice-check"></div>`;
      box.hidden = false;
      // Antippen markiert nur – erst „Prüfen“ wertet
      const list = box.querySelector('.choice-list');
      const arm = () => selectThenCheck(list, box.querySelector('.choice-check'), i => {
        const o = opts[i];
        if (o.ok) { this.submit(o.label, []); return; }
        const b = list.querySelectorAll('.opt')[i];
        b.classList.add('wrong');
        b.disabled = true;
        toast('Das passt hier nicht – versuch es noch einmal.');
        arm();
      });
      arm();
    }

    submit(text, alts) {
      const step = this.waitingFor;
      if (!step || !String(text).trim()) return;
      Listen.stop();
      Speech.stop();
      const p = this.prof;
      const res = evaluate(step, [text].concat(alts || []), p);
      const userEl = this.addBubble('user', `<div class="b-id">${esc(text)}</div>`);
      if (this.input) this.input.value = '';
      if (res.status === 'ok') {
        this.waitingFor = null;
        const model = fill(res.ans.m, p);
        const same = norm(model) === norm(res.text) || lev(norm(model), norm(res.text)) <= 2;
        const optTip = res.missingOpt.length ? `<div>Tipp: Mit <b>${esc(res.missingOpt[0].first)}</b> (${esc(res.missingOpt[0].label)}) klingt es noch natürlicher.</div>` : '';
        const fb = document.createElement('div');
        fb.className = 'fb-mini ok';
        fb.innerHTML = `<div>✓ ${this.helped ? 'Gut gemacht!' : pick(['Verstanden!', 'Bagus!', 'Sehr gut!', 'Mantap!'])}</div>
          ${same ? '' : `<div class="alt">Auch gut: <b>${esc(model)}</b> <button class="speak-btn sm" data-say="${esc(model)}" aria-label="Vorlesen">${icon('speaker', 14)}</button></div>`}
          ${optTip}`;
        userEl.appendChild(fb);
        this.results.push({ task: fill(step.task, p), said: text, model, md: fill(res.ans.md, p), status: this.helped ? 'help' : 'ok' });
        const next = res.ans.go != null ? this.byId[res.ans.go] : this.i + 1;
        this.foot.innerHTML = '<div class="talk-wait">…</div>';
        setTimeout(() => { this.i = next; this.play(); }, 900);
        this.scroll();
        return;
      }
      this.attempts++;
      const fb = document.createElement('div');
      fb.className = 'fb-mini ' + (res.status === 'partial' ? 'meh' : 'bad');
      fb.innerHTML = res.status === 'partial'
        ? `<div>Fast! Es fehlt noch: ${res.missing.map(g => `<b>${esc(g.label)}</b>`).join(', ')}</div>`
        : '<div>Das hat dein Gegenüber nicht verstanden.</div>';
      userEl.appendChild(fb);
      const conf = pick(CONFUSED);
      this.partnerSays(conf, CONFUSED_DE[conf]);
      if (this.attempts >= 2) {
        // Nach zwei Versuchen: Musterantwort zeigen – erst die Rückfrage, dann die Lösung vorlesen
        this.showSolution(step, true);
        const m = fill(answersFor(step, p)[0].m, p);
        Speech.speak(conf, { onend: () => { if (this.waitingFor === step) Speech.speak(m); } });
      } else {
        Speech.speak(conf, { onend: () => { if (this.handsFree && this.waitingFor === step) this.listen(); } });
      }
      this.scroll();
    }

    endReached() {
      this.foot.innerHTML = `<button class="btn primary block big" data-s="sum">Auswertung ansehen</button>`;
      this.foot.querySelector('[data-s="sum"]').onclick = () => this.finish();
    }

    finish() {
      if (this.closed) return;
      Listen.stop();
      Speech.stop();
      const S = St().S;
      const total = this.results.length || 1;
      const ok = this.results.filter(r => r.status === 'ok').length;
      const score = ok / total;
      const prev = S.dialogs[this.d.id] || { n: 0, best: 0 };
      S.dialogs[this.d.id] = { n: prev.n + 1, best: Math.max(prev.best || 0, score), last: score, ts: Date.now() };
      const d = St().day();
      d.x += this.results.length;
      d.t += Math.min(1200, (Date.now() - (this.started || Date.now())) / 1000);
      St().save();
      // Neue Wörter aus diesem Gespräch
      const ex = window.Examples;
      const K = ex.known();
      const seen = new Set();
      const fresh = [];
      const texts = this.steps.map(s => fill(s.p, this.prof)).concat(this.results.map(r => r.model));
      texts.join(' ').split(/\s+/).forEach(w => {
        const n = norm(w);
        if (!n || seen.has(n) || n.length < 3 || /\d/.test(n)) return;
        seen.add(n);
        if (n.split(' ').every(t => K.has(t))) return;
        const r = ex.lookup(w);
        if (r && !r.part && !S.cards[r.card.id] && !fresh.some(f => f.id === r.card.id)) fresh.push(r.card);
      });
      const hard = this.results.filter(r => r.status !== 'ok');
      const head = score >= 0.85 ? ['🎉', 'Bagus sekali!', 'Du hast das Gespräch super gemeistert.']
        : score >= 0.5 ? ['👏', 'Kerja bagus!', 'Gut gemacht – mit etwas Übung sitzt es bald.'] : ['💪', 'Tetap semangat!', 'Jedes Gespräch macht dich sicherer. Probier es gleich noch einmal!'];
      this.body.scrollTop = 0;
      this.chat.innerHTML = `
        <div class="summary">
          <div class="big-emoji">${head[0]}</div>
          <h2>${head[1]}</h2>
          <p class="muted">${head[2]}</p>
          <div class="sum-grid">
            <div class="tile-stat"><b>${ok}/${this.results.length}</b><span>selbst geschafft</span></div>
            <div class="tile-stat"><b>${Math.round(score * 100)} %</b><span>Ergebnis</span></div>
          </div>
          <div class="result-list">
            ${this.results.map(r => `
              <div class="res-row ${r.status}">
                <span class="res-ic">${r.status === 'ok' ? '✓' : r.status === 'help' ? '~' : '✗'}</span>
                <span class="grow">
                  <span class="muted small">${esc(r.task)}</span>
                  <span>Du: ${esc(r.said)}</span>
                  ${r.status === 'ok' && norm(r.said) === norm(r.model) ? '' : `<span class="model"><b>${esc(r.model)}</b> – ${esc(r.md)}</span>`}
                </span>
              </div>`).join('')}
          </div>
          ${fresh.length ? `
            <div class="wrong-list">
              <h3>Neue Wörter aus dem Gespräch</h3>
              ${fresh.slice(0, 8).map(c => `<div class="wl-row"><span><b>${esc(c.indo)}</b> – ${esc(c.de)}</span><button class="speak-btn sm" data-say="${esc(c.indo)}" aria-label="Vorlesen">${icon('speaker', 16)}</button></div>`).join('')}
              <button class="btn ghost block" data-s="pull">Diese Wörter in den Vokabeltrainer</button>
            </div>` : ''}
          ${hard.length ? `<button class="btn ghost block" data-s="hard">Schwierige Sätze im Trainer üben (${hard.length})</button>` : ''}
        </div>`;
      this.foot.innerHTML = `
        <div class="foot-row">
          <button class="btn ghost" data-s="again">Nochmal</button>
          <button class="btn primary" data-s="done">Fertig</button>
        </div>`;
      const pull = this.chat.querySelector('[data-s="pull"]');
      if (pull) pull.onclick = () => {
        fresh.slice(0, 8).forEach(c => (c.custom ? null : St().pullToTrainer(c.id)));
        pull.disabled = true;
        pull.textContent = '✓ Im Vokabeltrainer';
      };
      const hb = this.chat.querySelector('[data-s="hard"]');
      if (hb) hb.onclick = () => {
        let added = 0;
        hard.forEach(r => {
          if (S.custom.some(c => norm(c.indo) === norm(r.model))) return;
          St().addCustom(r.model, r.md, '', '', 'x');
          added++;
        });
        hb.disabled = true;
        hb.textContent = added ? `✓ ${added} ${added === 1 ? 'Satz' : 'Sätze'} im Vokabeltrainer` : '✓ Schon im Vokabeltrainer';
      };
      this.foot.querySelector('[data-s="again"]').onclick = () => { this.results = []; this.prof = profile(); this.chat.innerHTML = ''; this.i = 0; this.play(); };
      this.foot.querySelector('[data-s="done"]').onclick = () => this.close();
    }

    quit() {
      if (this.results.length && !confirm('Gespräch beenden?')) return;
      this.close();
    }
    close() {
      this.closed = true;
      Listen.stop();
      Speech.stop();
      document.removeEventListener('keydown', this.onKey);
      this.onExit && this.onExit();
    }
  }

  // ---------- „Situation schildern“: passende Inhalte zusammenstellen ----------
  const fold = s => s.replace(/[äöüß]/g, c => ({ ä: 'a', ö: 'o', ü: 'u', ß: 'ss' }[c]));
  const STOP = new Set(fold('ich du er sie es wir ihr der die das den dem des ein eine einen einem einer eines und oder aber wie was wo wann warum ' +
    'wer wen wem im in am an auf aus bei beim vom ins ans aufs mit nach von vor zu zum zur für über unter um bis ist bin bist sind war waren habe hast hat haben hatte ' +
    'wird werden würde kann könnte will möchte möchten muss soll sollte sage sagt sagen man mich mir dich dir sich mein meine meinen meinem dein ' +
    'deine kein keine keinen nicht nur auch noch schon sehr so dann denn wenn dass ob als mal heute gestern morgen hier da dort jetzt etwas ' +
    'alles viel ja nein bitte gern gerne richtig sprechen frage fragen indonesisch deutsch heißt bedeutet unterschied zwischen ' +
    'yang dan atau itu ini saya aku kamu untuk dengan dari pada juga apa').split(' '));
  const SYN = {
    reklam: ['beschw', 'falsch', 'kaputt'], beschw: ['reklam', 'falsch'], kalt: ['falsch', 'reklam'], falsch: ['reklam', 'fehler'],
    arzt: ['krank', 'schmer', 'gesund', 'doktor'], doktor: ['arzt'], krank: ['arzt', 'schmer', 'apothe'], schmer: ['krank', 'arzt'],
    polize: ['diebst', 'gestoh', 'notfal'], gestoh: ['diebst', 'polize'], diebst: ['polize', 'gestoh'], dieb: ['diebst', 'polize'],
    wohnun: ['miete', 'haus', 'vermie'], miete: ['wohnun', 'vermie', 'haus'], vermie: ['miete', 'wohnun'],
    schwie: ['famili', 'partne'], partne: ['famili', 'schwie'], freund: ['kennen', 'treffe'],
    chef: ['meetin', 'beruf', 'arbeit'], kolleg: ['arbeit', 'beruf', 'meetin'], arbeit: ['beruf', 'job'], job: ['beruf', 'bewerb', 'arbeit'],
    visum: ['behord', 'imigra', 'verlan'], amt: ['behord', 'visum'], behord: ['visum', 'formul'],
    taxi: ['ojek', 'fahren'], roller: ['motorr', 'mieten'], tanken: ['benzin', 'tanken'], strand: ['ojek', 'meer'],
    hotel: ['zimmer', 'rezept'], zimmer: ['hotel'], einkau: ['markt', 'preis', 'kaufen'], handel: ['markt', 'preis', 'billig'],
    teuer: ['preis', 'billig', 'handel'], restau: ['essen', 'bestel', 'warung'], kellne: ['restau', 'bestel'], essen: ['restau', 'warung', 'bestel'],
  };

  function stems(text) {
    return fold(norm(text)).split(' ').filter(w => w.length > 2 && !STOP.has(w)).map(w => (w.length > 6 ? w.slice(0, 6) : w));
  }
  // Deutsche Wörter dürfen sich im Wortanfang treffen (bestellt ~ bestellen),
  // indonesische nur exakt (sonst fände „bukan“ auch „buka“).
  const stemHit = (q, s, exact) => s === q || (!exact && q.length >= 4 && s.length >= 4 && (s.startsWith(q) || q.startsWith(s)));

  let index = null;
  function buildIndex() {
    const items = [];
    const add = (type, ref, parts) => {
      const terms = [];
      parts.forEach(([text, w, exact]) => stems(text).forEach(s => terms.push([s, w, !!exact])));
      if (terms.length) items.push({ type, ref, terms });
    };
    (window.DIALOGS || []).forEach(d => add('dialog', d, [[d.title, 3], [d.tags, 2], [d.setting + ' ' + d.goal, 1]]));
    Object.values(St().CARDS).forEach(c => {
      if (c.kind === 'w') add('word', c, [[c.de, 3], [c.indo, 3, true], [c.coll || '', 2, true]]);
    });
    const seen = new Set();
    Object.values(St().CARDS).forEach(c => {
      const pairs = c.kind === 's' ? [[c.indo, c.de]] : c.ex ? [[c.ex, c.exde]] : [];
      pairs.forEach(([id, de]) => {
        const k = norm(id);
        if (seen.has(k)) return;
        seen.add(k);
        add('sentence', { indo: id, de }, [[de, 1], [id, 1, true]]);
      });
    });
    Object.keys(window.LESSONS).forEach(k => {
      const L = window.LESSONS[k];
      add('lesson', { key: k, title: L.title }, [[L.title, 4], [L.body.replace(/[|=>#*:-]/g, ' '), 0.8]]);
    });
    index = { items, key: Object.keys(St().CARDS).length };
    return index;
  }

  function search(query) {
    if (!index || index.key !== Object.keys(St().CARDS).length) buildIndex();
    let q = stems(query);
    const extra = [];
    q.forEach(s => { Object.keys(SYN).forEach(k => { if (stemHit(k, s)) extra.push(...SYN[k]); }); });
    const qAll = [...new Set(q)].map(s => [s, 1]).concat([...new Set(extra)].filter(s => !q.includes(s)).map(s => [s, 0.5]));
    if (!qAll.length) return null;
    const scored = index.items.map(it => {
      let score = 0, hits = 0;
      qAll.forEach(([qs, qw]) => {
        let best = 0;
        it.terms.forEach(([s, w, exact]) => { if (w > best && stemHit(qs, s, exact)) best = w; });
        if (best) { score += best * qw; if (qw === 1) hits++; }
      });
      return { it, score, hits };
    }).filter(x => x.score > 0 && (x.hits > 0));
    const top = (type, n, min) => scored.filter(x => x.it.type === type && x.score >= (min || 0)).sort((a, b) => b.score - a.score).slice(0, n).map(x => x.it.ref);
    return {
      dialogs: top('dialog', 3, 2),
      words: top('word', 10, 2.5),
      sentences: top('sentence', 5, 1),
      lessons: top('lesson', 3, 1.5),
    };
  }

  // Empfehlungen: passend zum Stand, noch nicht (gut) geübt, passend zu deinen geschilderten Situationen
  function recommend(n) {
    const S = St().S;
    const cur = St().currentUnit().index;
    const recent = (S.situations || []).slice(-5).map(s => s.q).join(' ');
    const boost = recent ? search(recent) : null;
    const boosted = new Set(boost ? boost.dialogs.map(d => d.id) : []);
    return (window.DIALOGS || []).map(d => {
      const unitIdx = St().UNITS.findIndex(u => u.key === d.unit);
      const st = S.dialogs[d.id];
      let score = 0;
      if (unitIdx <= cur + 2) score += 3;
      if (!st) score += 2; else if (st.best < 0.8) score += 1.5; else score -= 2;
      if (boosted.has(d.id)) score += 3;
      if (d.personal && S.profile && S.profile.nama) score += 0.5;
      return [d, score];
    }).sort((a, b) => b[1] - a[1]).slice(0, n).map(x => x[0]);
  }

  window.Talk = { OPTIONS, profile, fill, evaluate, parseKey, answersFor, DialogRunner, search, recommend };
})();
