// Linguara – kleine Helfer: welcher Kurs (Lernsprache), Sprache der Oberfläche, HTML-Escaping,
// Textvergleich, Sprachausgabe, Icons, Lektions-Markup.
(function () {
  // ---------- Kurse: welche Sprache wird gelernt? ----------
  // Der Lernstand gehört zur Lernsprache (eigener Speicher je Sprache) – egal, von welcher
  // Sprache aus man lernt. Gewählt wird in den Einstellungen; gemerkt in „linguara.app“.
  const APP_KEY = 'linguara.app';
  const TARGETS = {
    id: {
      code: 'id', bcp: 'id-ID', voice: /^(id|in)([-_]|$)/i, voiceName: /indones/i, flag: '🇮🇩',
      key: 'bahasa-indonesisch.v1', sources: ['de', 'en'],
      name: { de: 'Indonesisch', en: 'Indonesian' }, adj: { de: 'indonesisch', en: 'Indonesian' }, lfull: { de: 'Indonesisch (Indonesien)', en: 'Indonesian (Indonesia)' }, iosVoice: 'Damayanti',
      greet: ['Selamat pagi!', 'Selamat siang!', 'Selamat sore!', 'Selamat malam!'], welcome: 'Selamat datang! 👋',
      praise: ['Bagus!', 'Benar!', 'Mantap!'], great: 'Bagus sekali!', good: 'Kerja bagus!', keep: 'Tetap semangat!',
      sample: 'Selamat pagi! Apa kabar?', sample2: 'Terima kasih banyak!', hello: 'Halo! Selamat belajar!', bye: 'Sampai besok!', bye2: 'Sampai jumpa!',
    },
    en: {
      code: 'en', bcp: 'en-GB', voice: /^en([-_]|$)/i, voiceName: /english/i, prefer: /GB|UK|United Kingdom|Daniel|Kate|Serena|Arthur|Martha/i, flag: '🇬🇧',
      key: 'linguara-englisch.v1', sources: ['de'],
      name: { de: 'Englisch', en: 'English' }, adj: { de: 'englisch', en: 'English' }, lfull: { de: 'Englisch (Vereinigtes Königreich)', en: 'English (United Kingdom)' }, iosVoice: 'Daniel',
      greet: ['Good morning!', 'Good afternoon!', 'Good afternoon!', 'Good evening!'], welcome: 'Welcome! 👋',
      praise: ['Great!', 'Brilliant!', 'Lovely!'], great: 'Brilliant!', good: 'Nice work!', keep: 'Keep going!',
      // Oberflächentexte, die beim Englischkurs anders lauten (Schlüssel = deutscher Text im Code)
      override: {
        'Ding, Ort oder Person – z. B. kelapa (Kokosnuss), pantai (Strand)': 'Ding, Ort oder Person – z. B. coconut (Kokosnuss), beach (Strand)',
        'Eigenschaft – z. B. segar (frisch), lucu (süß, lustig)': 'Eigenschaft – z. B. fresh (frisch), cosy (gemütlich)',
        'Tätigkeit – Deutsch bitte in der Grundform, z. B. „schwimmen“': 'Tätigkeit – Englisch ohne „to“, z. B. swim (schwimmen)',
        'z. B. kelapa': 'z. B. coconut',
        'z. B. Saya mau minum air kelapa.': 'z. B. I love fresh coconut water.',
        'z. B. Ich möchte Kokoswasser trinken.': 'z. B. Ich liebe frisches Kokoswasser.',
        'Alltag': 'US',
        'Alltagsformen zeigen': 'Amerikanische Varianten zeigen',
        'z. B. tidak → nggak, sudah → udah': 'z. B. flat → apartment, holiday → vacation',
        'Wo bist du in Indonesien?': 'In welcher Stadt lebst du?',
        'z. B. Bali, Ubud, Jakarta': 'z. B. Wien, London, Sydney',
        'B1–B2 · Leben in Indonesien, Beruf, Umgangssprache, Meinungen': 'B1–B2 · Leben im Ausland, Beruf, Umgangssprache, Meinungen',
        'Du hast alle {n} Karten der Grundlagen gelernt. Ab jetzt geht es mit <b>Level 2 – Fortgeschritten</b> weiter: Leben in Indonesien, Beruf, Umgangssprache und eigene Meinungen.': 'Du hast alle {n} Karten der Grundlagen gelernt. Ab jetzt geht es mit <b>Level 2 – Fortgeschritten</b> weiter: Leben im Ausland, Beruf, Umgangssprache und eigene Meinungen.',
      },
      sample: 'Good morning! How are you?', sample2: 'Thank you very much!', hello: 'Hello! Happy learning!', bye: 'See you tomorrow!', bye2: 'See you soon!',
    },
  };
  const readJSON = k => { try { return JSON.parse(localStorage.getItem(k) || 'null'); } catch (e) { return null; } };
  const app0 = readJSON(APP_KEY) || {};
  const TARGET = TARGETS[app0.target] ? app0.target : 'id';
  const TL = TARGETS[TARGET];

  // ---------- Sprache der Oberfläche ----------
  // Englischkurs: immer Deutsch. Indonesischkurs: Deutsch oder Englisch (Einstellung im Kurs);
  // ohne Einstellung: bisherige Nutzer Deutsch, neue je nach Sprache des Handys.
  const LANG = (() => {
    if (TL.sources.length === 1) return TL.sources[0];
    const s = readJSON(TL.key);
    if (s && s.settings && TL.sources.includes(s.settings.lang)) return s.settings.lang;
    if (s && s.cards && Object.keys(s.cards).length) return 'de';
    const nav = typeof navigator !== 'undefined' ? ((navigator.languages && navigator.languages[0]) || navigator.language || '') : '';
    return !nav || /^de\b/i.test(nav) ? 'de' : 'en';
  })();

  // Kurs wechseln (Lernsprache und – beim Indonesischkurs – Ausgangssprache), danach neu laden
  function setCourse(target, source) {
    if (!TARGETS[target]) return;
    try {
      localStorage.setItem(APP_KEY, JSON.stringify(Object.assign({}, readJSON(APP_KEY), { target })));
      if (source && TARGETS[target].sources.length > 1) {
        const st = readJSON(TARGETS[target].key);
        if (st) { st.settings = Object.assign(st.settings || {}, { lang: source }); localStorage.setItem(TARGETS[target].key, JSON.stringify(st)); }
        else localStorage.setItem(TARGETS[target].key, JSON.stringify({ v: 1, settings: { lang: source } }));
      }
    } catch (e) { /* Speicher voll – egal, dann bleibt alles, wie es ist */ }
  }

  // Oberflächentexte: Schlüssel ist der deutsche Text, die englische Fassung steht in i18n.en.js.
  // {name}-Platzhalter werden mit vars gefüllt; {L} (Lernsprache), {adj}/{Adj} (indonesisch/englisch)
  // und {bye} gibt es immer.
  const BASEVARS = {
    L: TL.name[LANG], adj: TL.adj[LANG], Adj: TL.adj[LANG].charAt(0).toUpperCase() + TL.adj[LANG].slice(1),
    bye: TL.bye, bye2: TL.bye2, Lfull: TL.lfull[LANG], iosVoice: TL.iosVoice,
  };
  const t = (s, vars) => {
    if (TL.override && TL.override[s]) s = TL.override[s];
    let r = s;
    if (LANG === 'en') {
      const D = window.UI_EN || {};
      if (Object.prototype.hasOwnProperty.call(D, s)) r = D[s];
      else (window.__missingEN = window.__missingEN || new Set()).add(s);
    }
    const v = vars ? Object.assign({}, BASEVARS, vars) : BASEVARS;
    return r.replace(/\{(\w+)\}/g, (m, k) => (v[k] != null ? v[k] : m));
  };

  // Englischkurs: dessen Inhalte werden zum aktiven Kurs
  if (TARGET === 'en') {
    window.COURSE = window.COURSE_ENGLISH || [];
    window.LESSONS = window.LESSONS_ENGLISH || {};
    window.DIALOGS = window.DIALOGS_ENGLISH || [];
    window.DIALOG_GROUPS = window.DIALOG_GROUPS_ENGLISH || window.DIALOG_GROUPS;
  }

  // Lerninhalte auf Englisch umstellen (Karten, Lektionen, Gespräche) – vor dem Aufbau des Kurses
  function applyEnglishContent() {
    const EN = window.COURSE_EN || {};
    const cells = l => l.split('|').map(x => (x || '').trim());
    (window.COURSE || []).forEach(u => {
      const e = EN[u.key];
      if (!e) return;
      if (e.title) u.title = e.title;
      const map = {};
      e.items.split('\n').forEach(raw => {
        const l = raw.trim();
        if (!l || l.startsWith('#')) return;
        if (l.startsWith('>')) { const [indo, en, note] = cells(l.slice(1)); map['s:' + indo.toLowerCase()] = { en, note }; }
        else { const [indo, en, exen, note] = cells(l); map['w:' + indo.toLowerCase()] = { en, exen, note }; }
      });
      u.items = u.items.split('\n').map(raw => {
        const l = raw.trim();
        if (!l || l.startsWith('#')) return raw;
        if (l.startsWith('>')) {
          const f = cells(l.slice(1)), m = map['s:' + f[0].toLowerCase()];
          return m ? '> ' + [f[0], m.en, m.note || ''].join(' | ') : raw;
        }
        const f = cells(l), m = map['w:' + f[0].toLowerCase()];
        return m ? [f[0], m.en, f[2] || '', f[3] || '', f[3] ? (m.exen || '') : '', m.note || ''].join(' | ') : raw;
      }).join('\n');
    });
    const LE = window.LESSONS_EN || {};
    Object.keys(LE).forEach(k => { if (window.LESSONS && window.LESSONS[k]) Object.assign(window.LESSONS[k], LE[k]); });
    const DE = window.DIALOGS_EN || {};
    (window.DIALOGS || []).forEach(d => {
      const e = DE[d.id];
      if (!e) return;
      ['title', 'tags', 'setting', 'goal', 'partner'].forEach(f => { if (e[f]) d[f] = e[f]; });
      d.steps.forEach((s, i) => {
        const x = e.steps[i];
        if (!x) return;
        ['pd', 'n', 'task', 'tip'].forEach(f => { if (x[f]) s[f] = x[f]; });
        (s.a || []).forEach((a, j) => {
          const y = (x.a || [])[j];
          if (!y) return;
          if (y.md) a.md = y.md;
          if (y.l) a.k = a.k.map((k, z) => (y.l[z] ? k.replace(/::.*$/, ':: ' + y.l[z]) : k));
        });
      });
    });
    const GE = window.DIALOG_GROUPS_EN || {};
    (window.DIALOG_GROUPS || []).forEach(g => { if (GE[g.key]) g.title = GE[g.key]; });
  }
  if (TARGET === 'id' && LANG === 'en') applyEnglishContent();
  if (typeof document !== 'undefined' && document.documentElement) {
    document.documentElement.lang = LANG;
    document.title = 'Linguara – ' + t('{L} lernen');
  }
  const esc = s => String(s == null ? '' : s).replace(/[&<>"']/g, c =>
    ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));

  const shuffle = arr => {
    const a = arr.slice();
    for (let i = a.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
  };
  const pick = arr => arr[Math.floor(Math.random() * arr.length)];

  // Für Vergleiche: Kleinschreibung, keine Satzzeichen, Bindestrich = Leerzeichen
  const norm = s => String(s).toLowerCase().normalize('NFC')
    .replace(/[‘’`´]/g, "'")
    .replace(/[-‐–—]/g, ' ')
    .replace(/[.,!?;:"„“”()…¿¡]/g, ' ')
    .replace(/\s+/g, ' ')
    .trim();

  // Levenshtein-Distanz für „kleiner Tippfehler"
  function lev(a, b) {
    if (a === b) return 0;
    const m = a.length, n = b.length;
    if (!m) return n;
    if (!n) return m;
    let prev = Array.from({ length: n + 1 }, (_, i) => i);
    for (let i = 1; i <= m; i++) {
      const cur = [i];
      for (let j = 1; j <= n; j++) {
        cur[j] = Math.min(prev[j] + 1, cur[j - 1] + 1, prev[j - 1] + (a[i - 1] === b[j - 1] ? 0 : 1));
      }
      prev = cur;
    }
    return prev[n];
  }

  const escRe = s => s.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');

  // **fett** und ~~durchgestrichen~~ in bereits escapetem Text
  const inline = s => esc(s).replace(/\*\*(.+?)\*\*/g, '<b>$1</b>').replace(/~~(.+?)~~/g, '<s>$1</s>');

  // Text fürs Vorlesen: erste Alternative, ohne Klammern
  const speakable = s => String(s).split(' / ')[0].replace(/\([^)]*\)/g, '').replace(/…|\.\.\./g, ' ').trim();

  // ---------- Sprachausgabe (Text-to-Speech des Handys) ----------
  // Indonesisch hat den Sprachcode „id"; Android meldet teils noch den alten Code „in".
  // Stimme der Lernsprache (Indonesisch meldet Android teils als „in“)
  const isTarget = v => TL.voice.test(v.lang) || TL.voiceName.test(v.name);
  const voiceRank = v => (v.localService ? 2 : 0) + (TL.prefer && (TL.prefer.test(v.lang) || TL.prefer.test(v.name)) ? 1 : 0);

  const Speech = {
    supported: typeof window !== 'undefined' && 'speechSynthesis' in window,
    voices: [],   // Stimmen der Lernsprache (lokale zuerst, die funktionieren offline)
    all: [],      // alle Stimmen des Geräts
    loaded: false,
    listeners: [],
    onMissing: null,
    init() {
      if (!this.supported) return;
      const load = () => this.refresh();
      load();
      if (speechSynthesis.addEventListener) speechSynthesis.addEventListener('voiceschanged', load);
      else speechSynthesis.onvoiceschanged = load;
      // Manche Browser melden Stimmen erst verzögert
      setTimeout(() => { this.loaded = true; load(); }, 1500);
    },
    refresh() {
      if (!this.supported) return;
      const all = speechSynthesis.getVoices();
      if (all.length) this.loaded = true;
      this.all = all;
      const set = window.Store && window.Store.S.settings;
      const found = all.filter(isTarget).sort((a, b) => voiceRank(b) - voiceRank(a));
      // Von Hand gewählte Stimme zählt auch – falls eine Stimme nicht automatisch erkannt wird
      const manual = set && set.voiceManual && all.find(v => v.voiceURI === set.voice);
      if (manual && !found.includes(manual)) found.unshift(manual);
      this.voices = found;
      this.listeners.forEach(fn => fn());
    },
    get available() { return this.supported && this.voices.length > 0; },
    // Stimmen sind bekannt, aber keine indonesische dabei → Vorlesen würde falsch klingen
    get missing() { return this.supported && this.loaded && this.all.length > 0 && this.voices.length === 0; },
    get current() {
      const set = window.Store.S.settings;
      return this.voices.find(x => x.voiceURI === set.voice) || this.voices[0] || null;
    },
    // opts.slow: langsamer · opts.onend: wird genau einmal aufgerufen, wenn das Vorlesen vorbei ist
    // (auch wenn nicht vorgelesen werden kann – dann sofort)
    speak(text, opts) {
      opts = opts || {};
      let done = false;
      const finish = () => { if (!done) { done = true; if (opts.onend) opts.onend(); } };
      if (!this.supported || !text) { setTimeout(finish, 0); return; }
      if (this.missing) { if (this.onMissing) this.onMissing(); setTimeout(finish, 0); return; }
      const set = window.Store.S.settings;
      const clean = speakable(text);
      const u = new SpeechSynthesisUtterance(clean);
      const v = this.current;
      if (v) { u.voice = v; u.lang = v.lang.replace('_', '-'); } else u.lang = TL.bcp;
      u.rate = Math.max(0.4, set.rate * (opts.slow ? 0.7 : 1));
      u.onend = finish;
      u.onerror = finish;
      // Sicherheitsnetz: manche Handys melden das Ende nicht
      if (opts.onend) setTimeout(finish, 1500 + clean.length * 110 / u.rate);
      const go = () => speechSynthesis.speak(u);
      if (speechSynthesis.speaking || speechSynthesis.pending) {
        speechSynthesis.cancel();
        setTimeout(go, 80); // iOS verschluckt sonst manchmal die Ausgabe
      } else go();
    },
    stop() { if (this.supported) speechSynthesis.cancel(); },
  };

  // ---------- Spracherkennung (Mikrofon) ----------
  // Nutzt die Spracherkennung des Handys. Je nach Gerät braucht sie Internet.
  const Listen = {
    rec: null,
    active: false,
    get supported() {
      return typeof window !== 'undefined' && !!(window.SpeechRecognition || window.webkitSpeechRecognition);
    },
    // opts: { lang, onInterim(text), onEnd(alternativen[]), onError(code) }
    start(opts) {
      if (!this.supported) return false;
      this.stop();
      const R = window.SpeechRecognition || window.webkitSpeechRecognition;
      const rec = new R();
      rec.lang = opts.lang || TL.bcp;
      rec.interimResults = true;
      rec.continuous = false;
      rec.maxAlternatives = 3;
      let finals = [];
      rec.onresult = e => {
        let interim = '';
        for (let i = e.resultIndex; i < e.results.length; i++) {
          const r = e.results[i];
          if (r.isFinal) finals = Array.from(r).map(a => a.transcript.trim()).filter(Boolean);
          else interim += r[0].transcript;
        }
        if (opts.onInterim) opts.onInterim(finals[0] || interim);
      };
      rec.onerror = e => { if (opts.onError) opts.onError(e.error || 'error'); };
      rec.onend = () => {
        if (this.rec === rec) { this.rec = null; this.active = false; }
        if (opts.onEnd) opts.onEnd(finals);
      };
      try {
        rec.start();
        this.rec = rec;
        this.active = true;
        return true;
      } catch (err) {
        if (opts.onError) opts.onError('start');
        return false;
      }
    },
    stop() {
      if (this.rec) { try { this.rec.stop(); } catch (e) { /* schon beendet */ } }
      this.active = false;
    },
  };

  // ---------- Icons ----------
  const P = {
    home: '<path d="M3 10.5 12 3l9 7.5V20a1 1 0 0 1-1 1h-5v-6h-6v6H4a1 1 0 0 1-1-1z"/>',
    course: '<path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20V3H6.5A2.5 2.5 0 0 0 4 5.5z"/><path d="M4 19.5A2.5 2.5 0 0 0 6.5 22H20v-5"/>',
    words: '<path d="M8 6h13M8 12h13M8 18h13M3.5 6h.01M3.5 12h.01M3.5 18h.01"/>',
    cards: '<rect x="3" y="7" width="13" height="14" rx="2"/><path d="M8 3h11a2 2 0 0 1 2 2v12"/>',
    chat: '<path d="M21 12a8 8 0 0 1-11.6 7.1L4 21l1.9-5.4A8 8 0 1 1 21 12z"/>',
    mic: '<rect x="9" y="3" width="6" height="11" rx="3"/><path d="M5 11a7 7 0 0 0 14 0M12 18v3"/>',
    send: '<path d="M22 2 11 13M22 2l-7 20-4-9-9-4z"/>',
    user: '<circle cx="12" cy="8" r="4"/><path d="M4 21a8 8 0 0 1 16 0"/>',
    headphones: '<path d="M3 14v-2a9 9 0 0 1 18 0v2"/><path d="M21 14v3a2 2 0 0 1-2 2h-1v-6h3zM3 14v3a2 2 0 0 0 2 2h1v-6H3z"/>',
    stats: '<path d="M3 3v18h18"/><path d="M7.5 15v3M12 10v8M16.5 6v12"/>',
    settings: '<path d="M4 21v-7M4 10V3M12 21v-9M12 8V3M20 21v-5M20 12V3M1 14h6M9 8h6M17 16h6"/>',
    speaker: '<path d="M11 5 6 9H2v6h4l5 4z"/><path d="M15.5 8.5a5 5 0 0 1 0 7M19 5a10 10 0 0 1 0 14"/>',
    x: '<path d="M18 6 6 18M6 6l12 12"/>',
    back: '<path d="M15 18l-6-6 6-6"/>',
    plus: '<path d="M12 5v14M5 12h14"/>',
    check: '<path d="M20 6 9 17l-5-5"/>',
    flame: '<path d="M8.5 14.5A2.5 2.5 0 0 0 11 12c0-1.38-.5-2-1-3-1.07-2.14-.22-4.05 2-6 .5 2.5 2 4.9 4 6.5 2 1.6 3 3.5 3 5.5a7 7 0 1 1-14 0c0-1.15.43-2.29 1-3a2.5 2.5 0 0 0 2.5 2.5z"/>',
    search: '<circle cx="11" cy="11" r="7.5"/><path d="m21 21-4.3-4.3"/>',
    lock: '<rect x="5" y="11" width="14" height="10" rx="2"/><path d="M8 11V7a4 4 0 0 1 8 0v4"/>',
    download: '<path d="M12 3v12M7 10l5 5 5-5M5 21h14"/>',
    upload: '<path d="M12 15V3M7 8l5-5 5 5M5 21h14"/>',
    bell: '<path d="M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9"/><path d="M10.3 21a1.94 1.94 0 0 0 3.4 0"/>',
    turtle: '<path d="M4 15c0-4 3.6-7 8-7s8 3 8 7z"/><path d="M20 15h1.5a1.5 1.5 0 0 0 0-3H20M6 15l-1 3M18 15l1 3M9 15l-.5 2M15 15l.5 2"/>',
    book: '<path d="M2 4h6a4 4 0 0 1 4 4v13a3 3 0 0 0-3-3H2zM22 4h-6a4 4 0 0 0-4 4v13a3 3 0 0 1 3-3h7z"/>',
    trash: '<path d="M3 6h18M8 6V4h8v2M19 6l-1 14H6L5 6"/>',
  };
  const icon = (name, size) =>
    `<svg class="ic" width="${size || 22}" height="${size || 22}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${P[name] || ''}</svg>`;

  // ---------- Lektions-Markup → HTML ----------
  function lessonHTML(L) {
    const out = [];
    const lines = L.body.trim().split('\n');
    let i = 0;
    const speakBtn = x => `<button class="speak-btn sm" data-say="${esc(x)}" aria-label="${t('Vorlesen')}">${icon('speaker', 16)}</button>`;
    while (i < lines.length) {
      const line = lines[i].trim();
      if (!line) { i++; continue; }
      if (line.startsWith('## ')) { out.push(`<h3>${inline(line.slice(3))}</h3>`); i++; continue; }
      if (line.startsWith('> ')) {
        const buf = [];
        while (i < lines.length && lines[i].trim().startsWith('> ')) buf.push(lines[i++].trim().slice(2));
        out.push(`<div class="tip">${buf.map(inline).join('<br>')}</div>`);
        continue;
      }
      if (line.startsWith('= ')) {
        const rows = [];
        while (i < lines.length && lines[i].trim().startsWith('= ')) {
          const [id, de] = lines[i++].trim().slice(2).split(' :: ');
          rows.push(`<div class="ex-row"><div><div class="ex-id">${inline(id)}</div><div class="ex-de">${inline(de || '')}</div></div>${speakBtn(id)}</div>`);
        }
        out.push(`<div class="examples">${rows.join('')}</div>`);
        continue;
      }
      if (line.startsWith('|')) {
        const rows = [];
        while (i < lines.length && lines[i].trim().startsWith('|')) {
          rows.push(lines[i++].trim().replace(/^\||\|$/g, '').split('|').map(c => c.trim()));
        }
        const head = rows.shift();
        const hasHead = head.some(Boolean);
        out.push(`<div class="table-wrap"><table>${hasHead ? `<thead><tr>${head.map(c => `<th>${inline(c)}</th>`).join('')}</tr></thead>` : ''}<tbody>${(hasHead ? rows : rows).map(r => `<tr>${r.map(c => `<td>${inline(c)}</td>`).join('')}</tr>`).join('')}</tbody></table></div>`);
        continue;
      }
      if (line.startsWith('- ')) {
        const items = [];
        while (i < lines.length && lines[i].trim().startsWith('- ')) items.push(`<li>${inline(lines[i++].trim().slice(2))}</li>`);
        out.push(`<ul>${items.join('')}</ul>`);
        continue;
      }
      const buf = [];
      while (i < lines.length && lines[i].trim() && !/^(## |> |= |\||- )/.test(lines[i].trim())) buf.push(lines[i++].trim());
      out.push(`<p>${inline(buf.join(' '))}</p>`);
    }
    return out.join('');
  }

  // Kurze Einblendung am unteren Rand
  let toastTimer;
  function toast(msg) {
    let el = document.getElementById('toast');
    if (!el) {
      el = document.createElement('div');
      el.id = 'toast';
      el.setAttribute('role', 'status');
      document.body.appendChild(el);
    }
    el.textContent = msg;
    el.classList.add('show');
    clearTimeout(toastTimer);
    toastTimer = setTimeout(() => el.classList.remove('show'), 2600);
  }

  // Auswahlfragen: Antippen markiert nur, erst „Prüfen“ wertet – so passieren keine Vertipper.
  // onCheck(index) wertet aus; setEnter(fn) bekommt die Prüf-Funktion (für die Enter-Taste).
  function selectThenCheck(box, holder, onCheck, setEnter) {
    const opts = [...box.querySelectorAll(".opt")];
    let sel = -1;
    holder.innerHTML = `<button type="button" class="btn primary block big check-btn" data-check disabled>${t('Prüfen')}</button>`;
    const btn = holder.querySelector("[data-check]");
    const check = () => {
      if (sel < 0 || btn.disabled) return;
      btn.disabled = true;
      opts.forEach(x => x.classList.remove("selected"));
      onCheck(sel);
    };
    opts.forEach((b, i) => {
      b.onclick = () => {
        if (b.disabled) return;
        sel = i;
        opts.forEach(x => x.classList.toggle("selected", x === b));
        btn.disabled = false;
        if (setEnter) setEnter(check);
      };
    });
    btn.onclick = check;
  }

  window.U = { esc, shuffle, pick, norm, lev, escRe, inline, speakable, Speech, Listen, icon, lessonHTML, toast, selectThenCheck, t, LANG, TARGET, TL, TARGETS, setCourse };
})();
