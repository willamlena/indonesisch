// Kleine Helfer: HTML-Escaping, Textvergleich, Sprachausgabe, Icons, Lektions-Markup.
(function () {
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

  // **fett** in bereits escapetem Text
  const inline = s => esc(s).replace(/\*\*(.+?)\*\*/g, '<b>$1</b>');

  // Text fürs Vorlesen: erste Alternative, ohne Klammern
  const speakable = s => String(s).split(' / ')[0].replace(/\([^)]*\)/g, '').replace(/…|\.\.\./g, ' ').trim();

  // ---------- Sprachausgabe (Text-to-Speech des Handys) ----------
  // Indonesisch hat den Sprachcode „id"; Android meldet teils noch den alten Code „in".
  const isIndonesian = v => /^(id|in)([-_]|$)/i.test(v.lang) || /indones/i.test(v.name);

  const Speech = {
    supported: typeof window !== 'undefined' && 'speechSynthesis' in window,
    voices: [],   // indonesische Stimmen (lokale zuerst, die funktionieren offline)
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
      const found = all.filter(isIndonesian).sort((a, b) => (b.localService ? 1 : 0) - (a.localService ? 1 : 0));
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
    speak(text, opts) {
      if (!this.supported || !text) return;
      if (this.missing) { if (this.onMissing) this.onMissing(); return; }
      const set = window.Store.S.settings;
      const u = new SpeechSynthesisUtterance(speakable(text));
      const v = this.current;
      if (v) { u.voice = v; u.lang = v.lang.replace('_', '-'); } else u.lang = 'id-ID';
      u.rate = Math.max(0.4, set.rate * (opts && opts.slow ? 0.7 : 1));
      const go = () => speechSynthesis.speak(u);
      if (speechSynthesis.speaking || speechSynthesis.pending) {
        speechSynthesis.cancel();
        setTimeout(go, 80); // iOS verschluckt sonst manchmal die Ausgabe
      } else go();
    },
    stop() { if (this.supported) speechSynthesis.cancel(); },
  };

  // ---------- Icons ----------
  const P = {
    home: '<path d="M3 10.5 12 3l9 7.5V20a1 1 0 0 1-1 1h-5v-6h-6v6H4a1 1 0 0 1-1-1z"/>',
    course: '<path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20V3H6.5A2.5 2.5 0 0 0 4 5.5z"/><path d="M4 19.5A2.5 2.5 0 0 0 6.5 22H20v-5"/>',
    words: '<path d="M8 6h13M8 12h13M8 18h13M3.5 6h.01M3.5 12h.01M3.5 18h.01"/>',
    cards: '<rect x="3" y="7" width="13" height="14" rx="2"/><path d="M8 3h11a2 2 0 0 1 2 2v12"/>',
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
    const speakBtn = t => `<button class="speak-btn sm" data-say="${esc(t)}" aria-label="Vorlesen">${icon('speaker', 16)}</button>`;
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

  window.U = { esc, shuffle, pick, norm, lev, escRe, inline, speakable, Speech, icon, lessonHTML, toast };
})();
