// Oberfläche: Startseite, Kurs, Vokabeltrainer, Wörter, Statistik, Einstellungen –
// und der Start von Lektionen und Trainer-Runden.
(function () {
  const { esc, inline, icon, Speech, shuffle, lessonHTML, toast } = window.U;
  const St = window.Store;
  const Ex = window.Examples;
  const app = document.getElementById('app');
  let tab = 'home';
  let session = null; // laufende Lektion oder Trainer-Runde
  let wordFilter = { q: '', f: 'all' };
  let installEvent = null;
  let swWaiting = null;

  const isAndroid = /Android/i.test(navigator.userAgent);
  // iPads melden sich als Mac – erkennbar an Touch-Unterstützung
  const isIOS = !isAndroid && (/iPad|iPhone|iPod/.test(navigator.userAgent) || (navigator.platform === 'MacIntel' && navigator.maxTouchPoints > 1));
  const standalone = () => window.matchMedia('(display-mode: standalone)').matches || navigator.standalone === true;

  // ---------- Navigation ----------
  function render(keepScroll) {
    if (session) return;
    const y = keepScroll ? window.scrollY : 0;
    const views = { home: viewHome, course: viewCourse, trainer: viewTrainer, words: viewWords, stats: viewStats, settings: viewSettings };
    app.innerHTML = `<main class="page page-${tab}">${views[tab]()}</main>${tab === 'settings' ? '' : nav()}`;
    if (tab === 'words') bindWords();
    if (tab === 'settings') bindSettings();
    window.scrollTo(0, y);
  }

  function nav() {
    const item = (t, ic, label) =>
      `<button class="nav-item${tab === t ? ' active' : ''}" data-act="tab" data-v="${t}" aria-label="${label}">${icon(ic, 24)}<span>${label}</span></button>`;
    return `<nav class="tabbar">${item('home', 'home', 'Heute')}${item('course', 'course', 'Kurs')}${item('trainer', 'cards', 'Trainer')}${item('words', 'words', 'Wörter')}${item('stats', 'stats', 'Statistik')}</nav>`;
  }

  function go(t) {
    if (t === 'settings') history.pushState({ v: 'settings' }, '');
    tab = t;
    render();
  }

  // ---------- Startseite ----------
  function greeting() {
    const h = new Date().getHours();
    if (h < 11) return ['Selamat pagi!', 'Guten Morgen'];
    if (h < 15) return ['Selamat siang!', 'Guten Tag'];
    if (h < 18) return ['Selamat sore!', 'Guten Nachmittag'];
    return ['Selamat malam!', 'Guten Abend'];
  }

  function ring(p) {
    const r = 34, c = 2 * Math.PI * r;
    return `<svg class="ring" viewBox="0 0 80 80" aria-hidden="true">
      <circle cx="40" cy="40" r="${r}" class="ring-bg"/>
      <circle cx="40" cy="40" r="${r}" class="ring-fg" stroke-dasharray="${c}" stroke-dashoffset="${c * (1 - p)}"/>
    </svg>`;
  }

  function viewHome() {
    const S = St.S;
    const p = St.planInfo();
    const vc = St.vocabCount();
    const lvl = St.level(vc.words);
    const streak = St.streak();
    const unit = St.currentUnit();
    const up = St.unitProgress(unit);
    const [hi, hiDe] = greeting();
    const fresh = Object.keys(S.cards).length === 0;
    const learnedAny = vc.words + vc.sentences >= 5;
    const lesson = unit.lesson && window.LESSONS[unit.lesson];

    let today;
    if (p.done) {
      today = `
        <div class="today-done">
          <div class="big-emoji">${p.courseDone ? '🏆' : '✅'}</div>
          <h2>${p.courseDone ? 'Kurs abgeschlossen!' : 'Geschafft für heute!'}</h2>
          <p class="muted">${p.courseDone ? 'Alle Kurswörter sind gelernt. Der Vokabeltrainer wiederholt sie weiter – und du kannst eigene Wörter hinzufügen.' : 'Morgen warten neue Wörter und die passenden Wiederholungen. Sampai besok!'}</p>
          <div class="btn-stack">
            ${p.courseDone ? '' : '<button class="btn primary block" data-act="more">+5 neue Wörter</button>'}
            ${learnedAny ? '<button class="btn ghost block" data-act="extra">Extra-Runde: schwache Wörter</button>' : ''}
          </div>
        </div>`;
    } else {
      // Empfehlung: erst wiederholen (Trainer), dann Neues (Lektion)
      const trainerFirst = !p.trainerDone && p.wordDue > 0;
      const lessonParts = [];
      if (p.newLeft) lessonParts.push(`${p.newLeft} neue ${p.newLeft === 1 ? 'Karte' : 'Karten'}`);
      if (p.learning) lessonParts.push(`${p.learning} im Lernen`);
      if (p.sentDue) lessonParts.push(`${p.sentDue} ${p.sentDue === 1 ? 'Satz' : 'Sätze'}`);
      const trainerN = p.wordDue + p.tLearning + p.tNew;
      const trainerText = trainerN
        ? `${trainerN} ${trainerN === 1 ? 'Karte' : 'Karten'}${p.tNew ? ` · ${p.tNew} neu` : ''}`
        : (vc.words ? 'alles wiederholt' : 'füllt sich mit jeder Lektion');
      const task = (act, emoji, title, text, done, primary) => `
        <div class="task${done ? ' done' : ''}">
          <span class="task-ic">${emoji}</span>
          <span class="grow"><b>${title}</b><span class="muted">${text}</span></span>
          ${done ? `<span class="task-check">${icon('check', 20)}</span>` : `<button class="btn ${primary ? 'primary' : 'ghost'} sm" data-act="${act}">Starten</button>`}
        </div>`;
      today = `
        <div class="today-row">
          <div class="ring-wrap">${ring(p.progress)}<span>${Math.round(p.progress * 100)}%</span></div>
          <div>
            <h2>Heute</h2>
            <p class="muted">ca. ${p.minutes} Min.</p>
          </div>
        </div>
        ${task('trainer', '🃏', 'Vokabeltrainer', trainerText, p.trainerDone, trainerFirst)}
        ${task('start', '📘', fresh ? 'Erste Lektion' : 'Lektion', lessonParts.join(' · ') || 'erledigt', p.lessonDone, !trainerFirst)}`;
    }

    const banners = [];
    if (swWaiting) banners.push(`<div class="banner"><span>✨ Eine neue Version ist da.</span><button class="btn sm primary" data-act="sw-update">Aktualisieren</button></div>`);
    if (Speech.missing && !S.ui.voiceHidden) {
      const step = S.ui.voiceStep || 0;
      banners.push(`<div class="banner"><span>🔈 <b>Aussprache einrichten</b> – ${step ? `weiter bei Schritt ${step + 1}` : 'einmalig, ca. 2 Minuten'}.</span><button class="btn sm primary" data-act="voice-help">${step ? 'Weiter' : 'Einrichten'}</button><button class="icon-btn sm" data-act="hide" data-v="voiceHidden" aria-label="Ausblenden">${icon('x', 18)}</button></div>`);
    }
    if (!standalone() && !S.ui.installHidden) {
      banners.push(`<div class="banner"><span>📲 Leg die App auf deinen Homescreen – dann läuft sie wie eine echte App, auch offline.</span><button class="btn sm ghost" data-act="install-help">Anleitung</button><button class="icon-btn sm" data-act="hide" data-v="installHidden" aria-label="Ausblenden">${icon('x', 18)}</button></div>`);
    }

    const welcome = fresh && !S.ui.welcomed ? `
      <section class="card welcome">
        <h2>Selamat datang! 👋</h2>
        <p>Willkommen bei deinem Indonesisch-Kurs. So funktioniert's:</p>
        <ul>
          <li><b>Jeden Tag ca. ${S.settings.minutes} Minuten.</b> Die App plant alles für dich.</li>
          <li><b>Wiederholung zur richtigen Zeit:</b> Was du sicher kannst, kommt seltener. Was schwerfällt, kommt öfter.</li>
          <li><b>Sie passt sich dir an:</b> Lernst du schnell, kommen mehr neue Wörter. Wird es zu viel, weniger.</li>
          <li><b>Grammatik in kleinen Häppchen</b>, immer dann, wenn sie gebraucht wird.</li>
          <li><b>Laut nachsprechen!</b> Tippe auf 🔊 – das macht dich am schnellsten sprechfähig.</li>
        </ul>
        <p class="muted">Du kennst schon ein paar Wörter? Tippe bei neuen Wörtern einfach auf „Kenne ich schon“.</p>
      </section>` : '';

    return `
      <header class="topbar">
        <div><div class="greet">${hi}</div><div class="muted">${hiDe}</div></div>
        <button class="icon-btn" data-act="tab" data-v="settings" aria-label="Einstellungen">${icon('settings', 24)}</button>
      </header>
      ${banners.join('')}
      <section class="card today">${today}</section>
      ${welcome}
      <section class="stat-row">
        <div class="mini-stat"><span class="flame${streak ? ' on' : ''}">${icon('flame', 22)}</span><b>${streak}</b><span>${streak === 1 ? 'Tag' : 'Tage'} Serie</span></div>
        <div class="mini-stat"><b>${vc.words}</b><span>Wörter</span></div>
        <div class="mini-stat"><b>${lvl.code}</b><span>${lvl.name}</span></div>
      </section>
      <section class="card unit-now" data-act="unit" data-i="${unit.index}" role="button" tabindex="0">
        <div class="unit-icon">${esc(unit.icon)}</div>
        <div class="grow">
          <div class="label">Aktuelles Thema · Einheit ${unit.index + 1} von ${St.UNITS.length}</div>
          <div class="unit-title">${esc(unit.title)}</div>
          <div class="bar"><i style="width:${(up.done / up.total) * 100}%"></i></div>
          <div class="muted small">${up.done} von ${up.total} gelernt${lesson ? ` · 📘 ${esc(lesson.title)}` : ''}</div>
        </div>
      </section>
    `;
  }

  // ---------- Vokabeltrainer ----------
  function viewTrainer() {
    const S = St.S;
    const p = St.planInfo();
    const t = St.today();
    let total = 0, tomorrow = 0, strong = 0;
    Object.keys(S.cards).forEach(id => {
      const c = S.cards[id], k = St.CARDS[id];
      if (!k || k.kind !== 'w') return;
      total++;
      if (c.st === 'R' && c.due === t + 1) tomorrow++;
      if (c.st === 'R' && c.s >= 21) strong++;
    });
    const ready = p.wordDue + p.tLearning + p.tNew;
    const hero = ready ? `
      <div class="deck"><span>${ready}</span></div>
      <h2>${ready} ${ready === 1 ? 'Karte' : 'Karten'} bereit</h2>
      <p class="muted">${p.tNew ? `davon ${p.tNew} neu · ` : ''}in Runden à 20 Karten</p>
      <button class="btn primary block big" data-act="trainer">Trainer starten</button>` : `
      <div class="big-emoji">${total ? '✅' : '🃏'}</div>
      <h2>${total ? 'Alles wiederholt!' : 'Dein Trainer ist noch leer'}</h2>
      <p class="muted">${total ? `Morgen ${tomorrow === 1 ? 'ist' : 'sind'} <b>${tomorrow}</b> ${tomorrow === 1 ? 'Karte' : 'Karten'} dran.` : 'Jedes Wort, das du in einer Lektion lernst, kommt automatisch hierher. Oder füge eigene Vokabeln hinzu.'}</p>
      ${total >= 5 ? '<button class="btn ghost block" data-act="extra">Extra-Runde: schwache Wörter</button>' : ''}`;
    const customs = S.custom.slice().reverse();
    return `
      <header class="topbar"><h1>Vokabeltrainer</h1><button class="icon-btn" data-act="addword" aria-label="Eigene Vokabel hinzufügen">${icon('plus', 24)}</button></header>
      <section class="card trainer-hero">${hero}</section>
      <section class="stat-row">
        <div class="mini-stat"><b>${total}</b><span>Karten</span></div>
        <div class="mini-stat"><b>${tomorrow}</b><span>morgen</span></div>
        <div class="mini-stat"><b>${strong}</b><span>sicher</span></div>
      </section>
      <section class="card">
        <div class="card-head"><h3>Eigene Vokabeln</h3><button class="btn ghost sm" data-act="addword">${icon('plus', 16)} Hinzufügen</button></div>
        ${customs.length ? `<div class="word-list">${customs.map(c => wordRow(St.CARDS[c.id])).join('')}</div>`
          : '<p class="muted small">Hast du unterwegs ein neues Wort gehört? Füge es hinzu – der Trainer zeigt es dir mit Sätzen aus Wörtern, die du schon kennst.</p>'}
      </section>
      <section class="card">
        <details>
          <summary><b>So funktioniert der Trainer</b></summary>
          <div class="method">
            <p><b>Karteikarten:</b> Schau dir die Vorderseite an, sag die Antwort laut und dreh die Karte um. Dann bewertest du dich ehrlich: <i>Nochmal</i>, <i>Schwer</i>, <i>Gut</i> oder <i>Leicht</i>. Unter jedem Knopf siehst du, wann die Karte wiederkommt.</p>
            <p><b>Beide Richtungen:</b> Mal siehst du das indonesische Wort, mal das deutsche – so lernst du verstehen <i>und</i> selbst sprechen.</p>
            <p><b>Automatisch befüllt:</b> Jedes Wort aus den Lektionen landet hier. Gekonnte Wörter kommen in immer größeren Abständen, vergessene schon bald wieder.</p>
            <p><b>Passende Beispielsätze:</b> Zu jeder Karte zeigt die App den Satz, den du mit deinem Wortschatz am besten verstehst. Unbekannte Wörter sind unterstrichen – antippen zeigt die Übersetzung.</p>
          </div>
        </details>
      </section>`;
  }

  // ---------- Kurs ----------
  function viewCourse() {
    const cur = St.currentUnit();
    const rows = St.UNITS.map(u => {
      const { done, total } = St.unitProgress(u);
      const state = done === total ? 'done' : u.index === cur.index ? 'current' : u.index < cur.index ? 'current' : 'later';
      const L = u.lesson && window.LESSONS[u.lesson];
      return `
        <button class="unit-row ${state}" data-act="unit" data-i="${u.index}">
          <span class="unit-num">${done === total ? icon('check', 18) : u.index + 1}</span>
          <span class="grow">
            <span class="unit-title">${esc(u.icon)} ${esc(u.title)}</span>
            <span class="bar"><i style="width:${(done / total) * 100}%"></i></span>
            <span class="muted small">${done}/${total}${L ? ` · 📘 ${esc(L.title)}${St.S.lessons[u.lesson] ? ' ✓' : ''}` : ''}</span>
          </span>
        </button>`;
    }).join('');
    const custom = St.S.custom.length ? `
      <button class="unit-row" data-act="unit" data-i="-1">
        <span class="unit-num">★</span>
        <span class="grow"><span class="unit-title">Eigene Wörter</span><span class="muted small">${St.S.custom.length} Wörter</span></span>
      </button>` : '';
    return `
      <header class="topbar"><h1>Kurs</h1></header>
      <p class="muted intro-text">${St.UNITS.length} Themen, vom Wichtigsten zum Spezielleren. Neue Wörter kommen automatisch in dieser Reihenfolge – du kannst trotzdem überall hineinschauen und jede Grammatik-Lektion lesen.</p>
      <div class="unit-list">${custom}${rows}</div>`;
  }

  function unitSheet(i) {
    const isCustom = i === -1;
    const u = isCustom ? { title: 'Eigene Wörter', icon: '★', ids: St.customIds(), lesson: null } : St.UNITS[i];
    const L = u.lesson && window.LESSONS[u.lesson];
    const rows = u.ids.map(id => wordRow(St.CARDS[id])).join('');
    openSheet(`
      <div class="sheet-head"><h2>${esc(u.icon)} ${esc(u.title)}</h2>${closeBtn()}</div>
      ${L ? `<button class="lesson-link" data-act="lesson" data-v="${u.lesson}">${icon('book', 20)}<span>Grammatik: ${esc(L.title)}</span>${St.S.lessons[u.lesson] ? '<span class="pill">gelesen</span>' : '<span class="pill accent">neu</span>'}</button>` : ''}
      <div class="word-list">${rows || '<p class="muted">Noch keine Wörter.</p>'}</div>`);
  }

  function lessonSheet(key) {
    const L = window.LESSONS[key];
    openSheet(`
      <div class="sheet-head"><h2>📘 ${esc(L.title)}</h2>${closeBtn()}</div>
      <article class="lesson">${lessonHTML(L)}</article>`);
    if (!St.S.lessons[key]) { St.S.lessons[key] = Date.now(); St.save(); }
  }

  // ---------- Wörter ----------
  const STRENGTH = ['neu', 'lernt', 'frisch', 'gefestigt', 'sicher'];
  function wordRow(c) {
    if (!c) return '';
    const s = St.strength(c.id);
    return `
      <button class="word-row" data-act="word" data-id="${esc(c.id)}">
        <span class="grow"><b>${esc(c.indo)}</b><span class="muted">${esc(c.de)}</span></span>
        <span class="strength s${s}" title="${STRENGTH[s]}"><i></i><i></i><i></i><i></i></span>
      </button>`;
  }

  function filteredWords() {
    const q = St.norm(wordFilter.q);
    const S = St.S;
    let ids;
    if (q) {
      ids = St.customIds().concat(St.ORDER).filter(id => {
        const c = St.CARDS[id];
        return c && (St.norm(c.indo).includes(q) || St.norm(c.de).includes(q) || (c.coll && St.norm(c.coll).includes(q)));
      });
    } else {
      ids = Object.keys(S.cards).filter(id => St.CARDS[id]).sort((a, b) => (S.cards[b].intro || S.cards[b].last || 0) - (S.cards[a].intro || S.cards[a].last || 0));
      if (wordFilter.f === 'custom') ids = St.customIds();
    }
    if (wordFilter.f === 'weak') ids = ids.filter(id => S.cards[id] && (St.strength(id) <= 2 || (S.cards[id].lapses || 0) >= 2));
    if (wordFilter.f === 'strong') ids = ids.filter(id => St.strength(id) === 4);
    if (wordFilter.f === 'sent') ids = ids.filter(id => St.CARDS[id].kind === 's');
    return ids;
  }

  function wordListHTML() {
    const ids = filteredWords();
    if (!ids.length) {
      return `<p class="muted empty">${wordFilter.q ? 'Nichts gefunden.' : Object.keys(St.S.cards).length ? 'Keine Wörter in dieser Auswahl.' : 'Hier erscheinen alle Wörter, die du gelernt hast. Starte deine erste Lerneinheit!'}</p>`;
    }
    const shown = ids.slice(0, 250).map(id => wordRow(St.CARDS[id])).join('');
    return shown + (ids.length > 250 ? `<p class="muted small center">… und ${ids.length - 250} weitere – nutze die Suche.</p>` : '');
  }

  function viewWords() {
    const chip = (f, label) => `<button class="chip-btn${wordFilter.f === f ? ' active' : ''}" data-act="filter" data-v="${f}">${label}</button>`;
    return `
      <header class="topbar"><h1>Wörter</h1><button class="icon-btn" data-act="addword" aria-label="Eigenes Wort hinzufügen">${icon('plus', 24)}</button></header>
      <div class="search">${icon('search', 20)}<input type="search" placeholder="Suchen – Deutsch oder Indonesisch" value="${esc(wordFilter.q)}" aria-label="Suchen"></div>
      <div class="chips">${chip('all', 'Alle')}${chip('weak', 'Schwierig')}${chip('strong', 'Sicher')}${chip('sent', 'Sätze')}${chip('custom', 'Eigene')}</div>
      <div class="word-list" id="word-list">${wordListHTML()}</div>`;
  }
  function bindWords() {
    const input = app.querySelector('.search input');
    input.oninput = () => {
      wordFilter.q = input.value;
      document.getElementById('word-list').innerHTML = wordListHTML();
    };
  }

  function relDays(n) {
    const d = n - St.today();
    if (d <= 0) return 'heute';
    if (d === 1) return 'morgen';
    if (d < 30) return `in ${d} Tagen`;
    if (d < 60) return 'in ca. einem Monat';
    return `in ca. ${Math.round(d / 30)} Monaten`;
  }

  function wordSheet(id) {
    const c = St.CARDS[id];
    if (!c) return;
    const st = St.S.cards[id];
    const set = St.S.settings;
    const u = St.UNITS[c.unit];
    let info;
    if (!st) {
      const pulled = St.S.pull.includes(id) || c.custom;
      info = pulled
        ? '<p class="muted">Kommt im nächsten Trainer-Durchgang dran.</p>'
        : `<p class="muted">Noch nicht gelernt – kommt in Einheit ${u.index + 1} (${esc(u.title)}) dran.</p>
           ${c.kind === 'w' ? `<button class="btn ghost block" data-act="pull" data-id="${esc(id)}">${icon('cards', 18)} Jetzt in den Vokabeltrainer holen</button>` : ''}`;
    } else if (st.st === 'L') info = '<p class="muted">Gerade im Lernen.</p>';
    else {
      const r = Srs.currentRecall(st, Date.now(), St.S.learner.m);
      info = `
        <div class="kv">
          <div><span>Erinnerung jetzt</span><b>${Math.round(r * 100)} %</b></div>
          <div><span>Nächste Wiederholung</span><b>${relDays(st.due)}</b></div>
          <div><span>Wiederholt</span><b>${st.reps}×</b></div>
          <div><span>Vergessen</span><b>${st.lapses || 0}×</b></div>
        </div>`;
    }
    // Wörter: Beispielsatz, den man mit dem aktuellen Wortschatz am besten versteht
    const example = c.kind === 'w' ? Ex.blockHTML(Ex.forCard(c)) : '';
    const posPicker = c.custom ? `
      <div class="field-label">Wortart <small>– bestimmt die automatischen Beispielsätze</small></div>
      <div class="seg">${Object.keys(Ex.POS_LABEL).map(k =>
        `<button class="seg-btn${c.pos === k ? ' active' : ''}" data-act="pos" data-id="${esc(id)}" data-v="${k}">${Ex.POS_LABEL[k]}</button>`).join('')}</div>` : '';
    openSheet(`
      <div class="sheet-head"><span class="muted small">${u ? esc(u.icon + ' ' + u.title) : '★ Eigenes Wort'}</span>${closeBtn()}</div>
      <div class="word-detail">
        <div class="intro-head"><div class="${c.kind === 's' ? 'big-sentence' : 'big-word'}">${esc(c.indo)}</div>
          <div class="speak-pair"><button class="speak-btn lg" data-say="${esc(c.indo)}" aria-label="Vorlesen">${icon('speaker', 30)}</button><button class="speak-btn slow" data-say="${esc(c.indo)}" data-slow="1" aria-label="Langsam">${icon('turtle', 20)}</button></div></div>
        ${c.coll && set.colloquial ? `<div class="coll"><span>Alltag</span> ${esc(c.coll)}</div>` : ''}
        <div class="meaning">${esc(c.de)}</div>
        ${c.note ? `<div class="note">💡 ${esc(c.note)}</div>` : ''}
        ${example}
        ${posPicker}
        ${info}
        <div class="btn-stack">
          ${st ? `<button class="btn ghost block" data-act="reset-card" data-id="${esc(id)}">Neu lernen</button>` : ''}
          ${c.custom ? `<button class="btn danger block" data-act="delete-custom" data-id="${esc(id)}">${icon('trash', 18)} Wort löschen</button>` : ''}
        </div>
      </div>`);
  }

  const POS_HINT = {
    n: 'Ding, Ort oder Person – z. B. kelapa (Kokosnuss), pantai (Strand)',
    v: 'Tätigkeit – Deutsch bitte in der Grundform, z. B. „schwimmen“',
    a: 'Eigenschaft – z. B. segar (frisch), lucu (süß, lustig)',
    x: 'Ausdruck oder Redewendung – Beispielsätze nur aus dem Kurs oder deinem eigenen Satz',
  };

  function addWordSheet() {
    openSheet(`
      <div class="sheet-head"><h2>Eigene Vokabel</h2>${closeBtn()}</div>
      <p class="muted">Sie kommt sofort in den Vokabeltrainer – mit Beispielsätzen aus Wörtern, die du schon kennst.</p>
      <form class="form" id="add-form" autocomplete="off" novalidate>
        <label>Indonesisch<input name="indo" required autocapitalize="off" autocorrect="off" spellcheck="false" placeholder="z. B. kelapa"></label>
        <label>Deutsch<input name="de" required placeholder="z. B. Kokosnuss"></label>
        <div>
          <div class="field-label">Wortart</div>
          <div class="seg" id="pos-seg">${Object.keys(Ex.POS_LABEL).map(k =>
            `<button type="button" class="seg-btn" data-pos="${k}">${Ex.POS_LABEL[k]}</button>`).join('')}</div>
          <p class="muted small pos-hint">Wähle die Wortart – damit baut die App passende Beispielsätze.</p>
        </div>
        <div id="add-preview"></div>
        <details class="own-ex">
          <summary>Eigenen Beispielsatz hinzufügen (optional)</summary>
          <label>Beispielsatz<input name="ex" autocapitalize="off" spellcheck="false" placeholder="z. B. Saya mau minum air kelapa."></label>
          <label>Übersetzung<input name="exde" placeholder="z. B. Ich möchte Kokoswasser trinken."></label>
        </details>
        <button class="btn primary block" type="submit">Hinzufügen</button>
      </form>`, sheet => {
      const form = sheet.querySelector('#add-form');
      let pos = '';
      const preview = () => {
        const indo = form.indo.value.trim(), de = form.de.value.trim();
        const box = sheet.querySelector('#add-preview');
        if (!indo || !de || !pos) { box.innerHTML = ''; return; }
        const ex = Ex.forCard({ id: 'preview', kind: 'w', custom: true, indo, de, coll: '', pos, unit: St.CUSTOM });
        box.innerHTML = ex ? `<div class="field-label">So könnte ein Beispielsatz aussehen</div>${Ex.blockHTML(ex)}` : '';
      };
      sheet.querySelectorAll('[data-pos]').forEach(b => {
        b.onclick = () => {
          pos = b.dataset.pos;
          sheet.querySelectorAll('[data-pos]').forEach(x => x.classList.toggle('active', x === b));
          sheet.querySelector('.pos-hint').textContent = POS_HINT[pos];
          preview();
        };
      });
      form.indo.oninput = preview;
      form.de.oninput = preview;
      form.onsubmit = e => {
        e.preventDefault();
        const indo = form.indo.value.trim(), de = form.de.value.trim();
        if (!indo || !de) { toast('Bitte Indonesisch und Deutsch ausfüllen.'); return; }
        if (!pos) { toast('Bitte wähle die Wortart.'); return; }
        const key = St.norm(indo);
        if (St.S.custom.some(c => St.norm(c.indo) === key)) { toast('Dieses Wort hast du schon hinzugefügt.'); return; }
        // Gibt es das Wort schon im Kurs? Dann diese Karte verwenden.
        const course = St.ORDER.map(id => St.CARDS[id]).find(c => c.kind === 'w' && St.answersFor(c).some(a => St.norm(a) === key));
        if (course) {
          if (St.S.cards[course.id]) { toast(`„${course.indo}“ kennst du schon – es ist bereits im Trainer.`); return; }
          if (confirm(`„${course.indo}“ gibt es schon im Kurs (${course.de}). Diese Karte in den Trainer holen?`)) {
            St.pullToTrainer(course.id);
            closeSheet();
            toast('Kommt im nächsten Trainer-Durchgang.');
            render(true);
          }
          return;
        }
        St.addCustom(indo, de, form.ex.value.trim(), form.exde.value.trim(), pos);
        closeSheet();
        toast('Gespeichert – kommt im nächsten Trainer-Durchgang.');
        render(true);
      };
    });
  }

  // ---------- Statistik ----------
  const WD = ['So', 'Mo', 'Di', 'Mi', 'Do', 'Fr', 'Sa'];
  function viewStats() {
    const S = St.S;
    const vc = St.vocabCount();
    const t0 = St.today();
    let totalSecs = 0, r30 = 0, ok30 = 0;
    Object.keys(S.days).forEach(k => { totalSecs += S.days[k].t; if (+k > t0 - 30) { r30 += S.days[k].r; ok30 += S.days[k].ok; } });
    const days14 = [];
    for (let i = 13; i >= 0; i--) {
      const d = St.dayRead(t0 - i);
      days14.push({ label: WD[new Date((t0 - i) * St.DAY).getUTCDay()], n: d.n, r: d.r, x: d.x });
    }
    const max14 = Math.max(10, ...days14.map(d => d.n + d.r));
    const forecast = [];
    for (let i = 0; i < 7; i++) forecast.push(0);
    let buckets = [0, 0, 0, 0];
    const hard = [];
    Object.keys(S.cards).forEach(id => {
      const c = S.cards[id];
      if (!St.CARDS[id]) return;
      if (c.st === 'R') {
        const k = Math.max(0, c.due - t0);
        if (k < 7) forecast[k]++;
        buckets[c.s < 4 ? 1 : c.s < 21 ? 2 : 3]++;
        if ((c.lapses || 0) >= 2) hard.push([id, c.lapses]);
      } else buckets[0]++;
    });
    const maxF = Math.max(10, ...forecast);
    hard.sort((a, b) => b[1] - a[1]);
    const m = S.learner.m;
    const pct = Math.round(Math.abs(m - 1) * 100);
    const memText = Math.abs(m - 1) < 0.05
      ? 'Du liegst genau im Durchschnitt – die Abstände sind Standard.'
      : m > 1 ? `Du behältst Wörter besser als erwartet – die App plant Wiederholungen <b>${pct} % später</b>.`
        : `Die App wiederholt etwas öfter (<b>${pct} % kürzere Abstände</b>), damit nichts verloren geht.`;
    const set = S.settings;
    const tempo = set.newMode === 'fixed' ? `${set.newFixed} pro Tag (fest eingestellt)` : `${St.plan().target} heute · passt sich automatisch an`;
    const total = buckets.reduce((a, b) => a + b, 0) || 1;

    return `
      <header class="topbar"><h1>Statistik</h1></header>
      <section class="stat-grid">
        <div class="tile-stat"><b>${St.streak()}</b><span>Tage Serie</span></div>
        <div class="tile-stat"><b>${vc.words}</b><span>Wörter</span></div>
        <div class="tile-stat"><b>${vc.sentences}</b><span>Sätze</span></div>
        ${totalSecs < 3600
          ? `<div class="tile-stat"><b>${Math.round(totalSecs / 60)}</b><span>Minuten gesamt</span></div>`
          : `<div class="tile-stat"><b>${(totalSecs / 3600).toFixed(1).replace('.', ',')}</b><span>Stunden gesamt</span></div>`}
      </section>

      <section class="card">
        <h3>Behaltensquote (30 Tage)</h3>
        <div class="big-num">${r30 ? Math.round(ok30 / r30 * 100) + ' %' : '–'}</div>
        <p class="muted small">Anteil der Wiederholungen, die du gewusst hast. Ziel: rund 90 % – genug Erfolg, aber trotzdem fordernd.</p>
      </section>

      <section class="card">
        <h3>Dein Lerntempo</h3>
        <p>${memText}</p>
        <p class="muted small">Neue Wörter: ${tempo}</p>
      </section>

      <section class="card">
        <h3>Letzte 14 Tage</h3>
        <div class="bars">${days14.map(d => `
          <div class="bar-col" title="${d.n} neu, ${d.r} wiederholt">
            <div class="bar-stack" style="height:${((d.n + d.r) / max14) * 100}%">
              <i class="b-new" style="flex:${d.n}"></i><i class="b-rev" style="flex:${d.r}"></i>
            </div>
            <span>${d.label}</span>
          </div>`).join('')}</div>
        <div class="legend"><span><i class="b-new"></i>neu</span><span><i class="b-rev"></i>wiederholt</span></div>
      </section>

      <section class="card">
        <h3>Wiederholungen nächste 7 Tage</h3>
        <div class="bars small-bars">${forecast.map((n, i) => `
          <div class="bar-col"><em>${n || ''}</em>
            <div class="bar-stack" style="height:${(n / maxF) * 100}%"><i class="b-rev" style="flex:1"></i></div>
            <span>${i === 0 ? 'heute' : WD[new Date((t0 + i) * St.DAY).getUTCDay()]}</span>
          </div>`).join('')}</div>
      </section>

      <section class="card">
        <h3>Wie gut sitzen deine Wörter?</h3>
        <div class="stack-bar">
          <i class="sb0" style="flex:${buckets[0]}"></i><i class="sb1" style="flex:${buckets[1]}"></i><i class="sb2" style="flex:${buckets[2]}"></i><i class="sb3" style="flex:${buckets[3]}"></i>
        </div>
        <div class="legend wrap">
          <span><i class="sb0"></i>im Lernen ${buckets[0]}</span>
          <span><i class="sb1"></i>frisch ${buckets[1]}</span>
          <span><i class="sb2"></i>gefestigt ${buckets[2]}</span>
          <span><i class="sb3"></i>sicher ${buckets[3]}</span>
        </div>
        ${total > 1 ? '' : '<p class="muted small">Sobald du lernst, siehst du hier, wie fest deine Wörter sitzen.</p>'}
      </section>

      ${hard.length ? `
      <section class="card">
        <h3>Deine Stolpersteine</h3>
        <p class="muted small">Diese Wörter vergisst du öfter. Tipp: Denk dir eine Eselsbrücke aus oder bilde einen eigenen Satz damit.</p>
        <div class="word-list">${hard.slice(0, 8).map(h => wordRow(St.CARDS[h[0]])).join('')}</div>
      </section>` : ''}`;
  }

  // ---------- Einstellungen ----------
  function viewSettings() {
    const S = St.S;
    const set = S.settings;
    const seg = (name, val, label) => `<button class="seg-btn${String(set[name]) === String(val) ? ' active' : ''}" data-act="set" data-k="${name}" data-v="${val}">${label}</button>`;
    const toggle = (name, label, sub) => `
      <label class="toggle-row"><span><b>${label}</b>${sub ? `<small>${sub}</small>` : ''}</span>
        <input type="checkbox" data-toggle="${name}" ${set[name] ? 'checked' : ''}><i class="switch"></i></label>`;
    const voices = Speech.voices;
    return `
      <header class="topbar"><button class="icon-btn" data-act="back" aria-label="Zurück">${icon('back', 26)}</button><h1>Einstellungen</h1><span></span></header>

      <section class="card">
        <h3>Lernzeit pro Tag</h3>
        <div class="seg">${[10, 15, 20, 30, 45].map(n => seg('minutes', n, n + ' Min')).join('')}</div>
        <h3 class="mt">Neue Wörter pro Tag</h3>
        <div class="seg">${seg('newMode', 'auto', 'Automatisch')}${seg('newMode', 'fixed', 'Feste Anzahl')}</div>
        ${set.newMode === 'fixed' ? `
          <div class="stepper"><button class="icon-btn" data-act="newfixed" data-v="-1" aria-label="Weniger">−</button><b>${set.newFixed}</b><button class="icon-btn" data-act="newfixed" data-v="1" aria-label="Mehr">+</button></div>` :
        `<p class="muted small">Die App startet mit ${St.baseForMinutes(set.minutes)} neuen Wörtern pro Tag. Lernst du sicher, werden es mehr. Häufen sich Fehler oder Wiederholungen, werden es weniger.</p>`}
      </section>

      <section class="card">
        <h3>Übungen</h3>
        ${toggle('typing', 'Antworten eintippen', 'Aktives Erinnern – am wirksamsten, aber etwas langsamer')}
        ${toggle('colloquial', 'Alltagsformen zeigen', 'z. B. tidak → nggak, sudah → udah')}
      </section>

      <section class="card">
        <h3>Aussprache</h3>
        ${voiceCardHTML()}
        ${toggle('autoplay', 'Automatisch vorlesen', 'Neue Wörter und Antworten werden vorgesprochen')}
        <label class="field-row"><span>Sprechtempo</span><input type="range" min="0.6" max="1.2" step="0.05" value="${set.rate}" data-range="rate" aria-label="Sprechtempo"></label>
        <div class="range-labels"><span>langsamer</span><span>schneller</span></div>
        ${voices.length > 1 ? `
          <label class="field-row"><span>Stimme</span><select data-select="voice">${voices.map(v => `<option value="${esc(v.voiceURI)}" ${v === Speech.current ? 'selected' : ''}>${esc(v.name)}${v.localService ? '' : ' (online)'}</option>`).join('')}</select></label>` : ''}
        ${Speech.supported ? `
          <details class="advanced">
            <summary>Erweitert</summary>
            ${manualPickerHTML()}
            <button class="btn ghost block" data-act="voice-help">Einrichtungs-Assistent öffnen</button>
          </details>` : ''}
      </section>

      <section class="card">
        <h3>Tägliche Erinnerung</h3>
        <p class="muted small">Eine feste Zeit hilft enorm, dranzubleiben. Lege dir einen täglichen Kalendertermin an.</p>
        <div class="btn-row">
          <input type="time" value="${esc(set.reminder)}" data-time="reminder" aria-label="Uhrzeit">
          <button class="btn ghost" data-act="reminder">${icon('bell', 18)} In Kalender eintragen</button>
        </div>
        <p class="muted small">Alternativ: eine tägliche Erinnerung in der Uhr- oder Erinnerungen-App deines Handys.</p>
      </section>

      <section class="card">
        <h3>Datensicherung</h3>
        <p class="muted small">Dein Fortschritt ist nur auf diesem Gerät gespeichert. Sichere ihn ab und zu – z. B. vor einem Handywechsel.</p>
        <div class="btn-row">
          <button class="btn ghost" data-act="export">${icon('download', 18)} Sichern</button>
          <button class="btn ghost" data-act="import">${icon('upload', 18)} Wiederherstellen</button>
          <input type="file" accept="application/json,.json" id="import-file" hidden>
        </div>
      </section>

      <section class="card">
        <h3>App installieren</h3>
        <button class="btn ghost block" data-act="install-help">Anleitung für iPhone & Android</button>
      </section>

      <section class="card">
        <details>
          <summary><b>So lernst du mit dieser App</b></summary>
          <div class="method">
            <p><b>Verteilte Wiederholung:</b> Jedes Wort hat ein eigenes „Gedächtnis-Modell“. Die App zeigt es dir genau dann wieder, wenn du es sonst bald vergessen würdest. Gekonnte Wörter kommen in immer größeren Abständen (Tage → Wochen → Monate), vergessene schon am nächsten Tag.</p>
            <p><b>Aktives Erinnern:</b> Statt nur zu lesen, holst du die Antwort selbst aus dem Gedächtnis – vom Wiedererkennen über Hören bis zum Eintippen und Sätze-Bauen. Je sicherer ein Wort sitzt, desto schwieriger die Übung.</p>
            <p><b>Anpassung an dich:</b> Die App vergleicht, wie oft du dich erinnerst, mit der Vorhersage, und stellt die Abstände für dich persönlich ein. Die Zahl neuer Wörter richtet sich nach deiner Trefferquote und deiner Tageszeit.</p>
            <p><b>Häufigstes zuerst:</b> Der Kurs beginnt mit den Wörtern und Sätzen, die man im Alltag am meisten braucht. Die Grammatik kommt in kleinen Portionen, genau dann, wenn sie im Kurs auftaucht.</p>
            <p><b>Tipps:</b> Lerne jeden Tag, lieber kurz als selten lang. Sprich alles laut nach. Bewerte dich ehrlich. Und nutze das Gelernte – schreib Freunden auf Indonesisch!</p>
          </div>
        </details>
      </section>

      <section class="card danger-zone">
        <h3>Zurücksetzen</h3>
        <button class="btn danger block" data-act="reset-all">Gesamten Fortschritt löschen</button>
      </section>
      <p class="muted small center">Bahasa · Indonesisch lernen · ${St.ORDER.length} Lernkarten</p>`;
  }

  function bindSettings() {
    app.querySelectorAll('[data-toggle]').forEach(el => {
      el.onchange = () => { St.S.settings[el.dataset.toggle] = el.checked; St.save(); };
    });
    const range = app.querySelector('[data-range="rate"]');
    range.onchange = () => { St.S.settings.rate = +range.value; St.save(); Speech.speak('Selamat pagi, apa kabar?'); };
    const sel = app.querySelector('[data-select="voice"]');
    if (sel) sel.onchange = () => { St.S.settings.voice = sel.value; St.save(); Speech.speak('Terima kasih banyak!'); };
    bindManualPicker(app);
    const time = app.querySelector('[data-time="reminder"]');
    time.onchange = () => { St.S.settings.reminder = time.value || '19:00'; St.save(); };
    const file = app.querySelector('#import-file');
    file.onchange = () => {
      const f = file.files[0];
      if (!f) return;
      f.text().then(text => {
        if (!confirm('Aktuellen Fortschritt durch die Sicherung ersetzen?')) return;
        try { St.importData(text); toast('Fortschritt wiederhergestellt.'); render(); }
        catch (e) { toast('Diese Datei ist keine gültige Sicherung.'); }
      });
      file.value = '';
    };
  }

  // ---------- Dateien ----------
  function saveFile(name, text, type) {
    const blob = new Blob([text], { type });
    const file = typeof File === 'function' ? new File([blob], name, { type }) : null;
    if (type === 'application/json' && file && navigator.canShare && navigator.canShare({ files: [file] })) {
      navigator.share({ files: [file], title: name }).catch(() => {});
      return;
    }
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = name;
    document.body.appendChild(a);
    a.click();
    a.remove();
    setTimeout(() => URL.revokeObjectURL(url), 4000);
  }

  function reminderICS() {
    const [h, m] = (St.S.settings.reminder || '19:00').split(':');
    const pad = n => String(n).padStart(2, '0');
    const d = new Date();
    d.setDate(d.getDate() + 1);
    const start = `${d.getFullYear()}${pad(d.getMonth() + 1)}${pad(d.getDate())}T${pad(h)}${pad(m)}00`;
    const stamp = new Date().toISOString().replace(/[-:]/g, '').replace(/\.\d+/, '');
    return [
      'BEGIN:VCALENDAR', 'VERSION:2.0', 'PRODID:-//Bahasa//Indonesisch lernen//DE', 'CALSCALE:GREGORIAN',
      'BEGIN:VEVENT', `UID:bahasa-${Date.now()}@bahasa-app`, `DTSTAMP:${stamp}`, `DTSTART:${start}`,
      'DURATION:PT15M', 'RRULE:FREQ=DAILY', 'SUMMARY:Indonesisch lernen 🇮🇩',
      'DESCRIPTION:Zeit für deine tägliche Lerneinheit. Sampai jumpa!',
      'BEGIN:VALARM', 'ACTION:DISPLAY', 'DESCRIPTION:Indonesisch lernen', 'TRIGGER:PT0M', 'END:VALARM',
      'END:VEVENT', 'END:VCALENDAR',
    ].join('\r\n');
  }

  // ---------- Hilfe-Blätter ----------
  function installSheet() {
    const canPrompt = !!installEvent;
    openSheet(`
      <div class="sheet-head"><h2>App installieren</h2>${closeBtn()}</div>
      ${standalone() ? '<p>✅ Die App ist bereits installiert.</p>' : ''}
      ${canPrompt ? '<button class="btn primary block" data-act="install-now">Jetzt installieren</button>' : ''}
      <h3>iPhone (Safari)</h3>
      <ol class="steps">
        <li>Diese Seite in <b>Safari</b> öffnen.</li>
        <li>Unten auf das <b>Teilen-Symbol</b> tippen (Quadrat mit Pfeil nach oben).</li>
        <li><b>„Zum Home-Bildschirm“</b> wählen (evtl. etwas nach unten scrollen) und <b>Hinzufügen</b> tippen.</li>
        <li>Ab jetzt die App über das neue Symbol starten.</li>
      </ol>
      <h3>Android (Chrome)</h3>
      <ol class="steps">
        <li>Diese Seite in <b>Chrome</b> öffnen.</li>
        <li>Oben rechts auf <b>⋮</b> tippen.</li>
        <li><b>„App installieren“</b> oder <b>„Zum Startbildschirm hinzufügen“</b> wählen.</li>
      </ol>
      <p class="muted small">Nach dem ersten Öffnen funktioniert die App auch ohne Internet.</p>`);
  }

  // ---------- Aussprache einrichten ----------
  // Statuskarte in den Einstellungen: entweder „bereit" mit Probe oder „einrichten" mit Knopf
  function voiceCardHTML() {
    const set = St.S.settings;
    const step = St.S.ui.voiceStep || 0;
    if (!Speech.supported) {
      return `<div class="voice-card warn"><span class="vc-ic">🔇</span><span class="grow"><b>Vorlesen nicht möglich</b>
        <span>Öffne die App in Chrome (Android) oder Safari (iPhone).</span></span></div>`;
    }
    if (Speech.available) {
      const v = Speech.current;
      return `<div class="voice-card ok"><span class="vc-ic">🔊</span><span class="grow"><b>Aussprache bereit</b>
        <span>Stimme: ${esc(v.name)}${v.localService ? '' : ' · braucht Internet'}${set.voiceManual ? ' · von Hand gewählt' : ''}</span></span>
        <button class="btn ghost sm" data-act="test-voice">Probe</button></div>
        ${set.voiceManual ? '<button class="link-btn" data-act="voice-reset">Stimme wieder automatisch wählen</button>' : ''}`;
    }
    if (Speech.missing) {
      return `<div class="voice-card warn"><span class="vc-ic">🔈</span><span class="grow"><b>Aussprache einrichten</b>
        <span>${step ? `Weiter bei Schritt ${step + 1}` : 'Einmalig, ca. 2 Minuten'}</span></span>
        <button class="btn primary sm" data-act="voice-help">${step ? 'Weiter' : 'Einrichten'}</button></div>`;
    }
    return '<div class="voice-card"><span class="vc-ic">⏳</span><span class="grow"><b>Stimmen werden gesucht …</b></span></div>';
  }

  // Notlösung: Stimme von Hand wählen, falls eine installierte Stimme nicht erkannt wird
  function manualPickerHTML() {
    if (!Speech.all.length) return '';
    return `
      <label class="field-row"><span>Stimme von Hand</span><select data-select="manual"><option value="">– wählen –</option>${Speech.all.map(v =>
        `<option value="${esc(v.voiceURI)}">${esc(v.name)} (${esc(v.lang)})</option>`).join('')}</select></label>
      <p class="muted small">Nur nötig, wenn deine indonesische Stimme installiert ist, aber nicht erkannt wird.</p>`;
  }
  function bindManualPicker(root) {
    const manual = root.querySelector('[data-select="manual"]');
    if (!manual) return;
    manual.onchange = () => {
      if (!manual.value) return;
      Object.assign(St.S.settings, { voice: manual.value, voiceManual: true });
      St.save();
      Speech.refresh();
      if (document.querySelector('.sheet-backdrop')) voiceSheet();
      render(true);
      Speech.speak('Selamat pagi! Apa kabar?');
    };
  }

  // Schritte des Assistenten – je Schritt nur eine Sache
  const VOICE_STEPS = {
    android: [
      { icon: '📲', title: 'Google-Sprachdienste holen',
        text: 'Dein Handy braucht die kostenlose App <b>„Sprachdienste von Google“</b>. Tippe auf den Knopf und im Play Store auf <b>Installieren</b> oder <b>Aktualisieren</b>. Steht dort nur „Öffnen“, ist schon alles da.',
        link: ['Play Store öffnen', 'https://play.google.com/store/apps/details?id=com.google.android.tts'] },
      { icon: '⚙️', title: 'Google als Sprachausgabe wählen',
        text: 'Öffne die <b>Einstellungen</b> deines Handys, tippe oben auf die <b>Suche 🔍</b> und gib <b>„Sprachausgabe“</b> ein (bei Samsung: <b>„Text-zu-Sprache“</b>). Wähle dort als bevorzugte Engine <b>„Sprachdienste von Google“</b>.' },
      { icon: '⬇️', title: 'Indonesisch herunterladen',
        text: 'Tippe auf derselben Seite neben „Sprachdienste von Google“ auf das <b>Zahnrad ⚙</b> → <b>Sprachdaten installieren</b> → <b>Indonesisch (Indonesien)</b> → herunterladen. Dann klappt die Aussprache auch ohne Internet.' },
      { icon: '🔄', title: 'Chrome neu starten',
        text: 'Öffne die Übersicht deiner offenen Apps und <b>wische Chrome und diese App weg</b>. Öffne die App dann wieder – sie prüft automatisch, ob die Stimme da ist.', check: true },
    ],
    ios: [
      { icon: '⚙️', title: 'Stimme laden',
        text: 'Öffne <b>Einstellungen → Bedienungshilfen → Gesprochene Inhalte → Stimmen</b>, wähle <b>Indonesisch</b> und lade die Stimme <b>Damayanti</b>.' },
      { icon: '🔄', title: 'App neu starten',
        text: 'Wische die App aus der App-Übersicht weg und öffne sie wieder – sie prüft automatisch, ob die Stimme da ist.', check: true },
    ],
  };

  function voiceSheet(step, notFound) {
    const S = St.S;
    if (Speech.available) {
      S.ui.voiceStep = 0;
      S.ui.voiceWizard = false;
      St.save();
      const v = Speech.current;
      openSheet(`
        <div class="sheet-head"><h2>Aussprache</h2>${closeBtn()}</div>
        <div class="wiz">
          <div class="wiz-icon">✅</div>
          <h3>Aussprache ist bereit</h3>
          <p>Die App liest mit der Stimme <b>${esc(v.name)}</b> vor${v.localService ? ' – auch ohne Internet' : ' (braucht Internet)'}.</p>
          <button class="btn primary block" data-act="test-voice">${icon('speaker', 18)} Probe hören</button>
        </div>`);
      return;
    }
    const steps = VOICE_STEPS[isIOS ? 'ios' : 'android'];
    const i = Math.max(0, Math.min(steps.length - 1, step != null ? step : (S.ui.voiceStep || 0)));
    S.ui.voiceStep = i;
    S.ui.voiceWizard = true; // die App merkt sich den Schritt, auch wenn du zwischendurch in die Einstellungen wechselst
    St.save();
    const s = steps[i];
    openSheet(`
      <div class="sheet-head"><h2>Aussprache einrichten</h2>${closeBtn()}</div>
      <div class="dots" aria-hidden="true">${steps.map((_, k) => `<i class="${k < i ? 'done' : k === i ? 'on' : ''}"></i>`).join('')}</div>
      ${notFound ? `<div class="callout">Noch keine indonesische Stimme gefunden. Meist hilft es, Chrome ganz zu schließen und die App neu zu öffnen. Prüfe sonst die Schritte davor.</div>` : ''}
      <div class="wiz">
        <div class="wiz-icon">${s.icon}</div>
        <div class="wiz-step">Schritt ${i + 1} von ${steps.length}</div>
        <h3>${s.title}</h3>
        <p>${s.text}</p>
        ${s.link ? `<a class="btn ghost block" href="${s.link[1]}" target="_blank" rel="noopener">${s.link[0]}</a>` : ''}
      </div>
      <div class="wiz-nav">
        ${i > 0 ? `<button class="btn ghost" data-act="voice-step" data-v="${i - 1}">Zurück</button>` : '<span></span>'}
        ${s.check ? '<button class="btn primary" data-act="voice-recheck">Jetzt prüfen</button>'
          : `<button class="btn primary" data-act="voice-step" data-v="${i + 1}">Erledigt – weiter</button>`}
      </div>
      <div class="wiz-extra">
        ${s.check ? '' : '<button class="link-btn" data-act="voice-recheck">Stimme schon installiert? Jetzt prüfen</button>'}
        ${Speech.all.length ? `<details class="advanced"><summary>Stimme wird nicht erkannt?</summary>${manualPickerHTML()}</details>` : ''}
      </div>`, sheet => bindManualPicker(sheet));
  }

  // ---------- Sheet (Bottom-Sheet-Dialog) ----------
  const closeBtn = () => `<button class="icon-btn" data-act="close-sheet" aria-label="Schließen">${icon('x', 22)}</button>`;
  function openSheet(html, onMount) {
    const replacing = !!document.querySelector('.sheet-backdrop');
    closeSheet(true);
    const el = document.createElement('div');
    el.className = 'sheet-backdrop' + (replacing ? ' open' : '');
    el.innerHTML = `<div class="sheet" role="dialog" aria-modal="true">${html}</div>`;
    el.addEventListener('click', e => { if (e.target === el) closeSheet(); });
    el.addEventListener('click', onAction);
    document.body.appendChild(el);
    document.body.classList.add('sheet-open');
    if (!replacing) {
      requestAnimationFrame(() => el.classList.add('open'));
      history.pushState({ v: 'sheet' }, ''); // ein bereits offenes Blatt nutzt seinen Verlaufseintrag weiter
    }
    if (onMount) onMount(el);
  }
  function closeSheet(silent) {
    const el = document.querySelector('.sheet-backdrop');
    if (!el) return;
    el.remove();
    document.body.classList.remove('sheet-open');
    if (!silent && history.state && history.state.v === 'sheet') historyBack();
  }

  // Eigenes history.back(), dessen popstate ignoriert wird
  let ignorePop = 0;
  function historyBack() { ignorePop++; history.back(); }

  // ---------- Lektion & Trainer starten ----------
  function enterSession(create) {
    if (!St.S.ui.welcomed) { St.S.ui.welcomed = true; St.save(); }
    closeSheet(true);
    document.body.classList.add('in-session');
    app.innerHTML = '';
    const root = document.createElement('div');
    root.className = 'session-root';
    app.appendChild(root);
    history.pushState({ v: 'session' }, '');
    window.scrollTo(0, 0);
    session = create(root);
  }
  function exitSession() {
    session = null;
    document.body.classList.remove('in-session');
    if (history.state && history.state.v === 'session') historyBack();
  }

  // Lektion: neue Kurskarten mit Lernschritten, Grammatik, Satz-Wiederholungen
  function startSession() {
    const info = St.planInfo();
    const learning = St.learningIds('lesson');
    const reviews = St.dueSentenceIds().slice(0, 100);
    const news = St.nextNewIds(info.newLeft);
    if (!learning.length && !reviews.length && !news.length) {
      toast(info.courseDone ? 'Alle Lektionen sind geschafft!' : 'Die Lektion für heute ist erledigt.');
      render();
      return;
    }
    enterSession(root => new window.Session(root, {
      mode: 'daily', reviews, learning, news,
      onExit: summary => {
        exitSession();
        if (summary && summary.more) {
          St.addExtraNew(5);
          setTimeout(startSession, 50);
        } else {
          tab = 'home';
          render();
        }
      },
    }));
  }

  // Vokabeltrainer: fällige Wörter als Karteikarten, oder Extra-Runde mit schwachen Wörtern
  function startTrainer(mode) {
    if (mode === 'extra') {
      if (St.weakWordIds(3).length < 3) { toast('Lerne zuerst ein paar Wörter.'); return; }
    } else {
      const p = St.planInfo();
      if (!(p.wordDue + p.tLearning + p.tNew)) { toast('Gerade ist keine Karte fällig.'); render(true); return; }
    }
    enterSession(root => new window.Trainer(root, {
      mode: mode || 'due',
      onExit: () => { exitSession(); render(); },
    }));
  }

  // Zurück-Taste (Android) schließt Dialoge statt die App
  window.addEventListener('popstate', () => {
    if (ignorePop) { ignorePop--; return; }
    if (document.querySelector('.sheet-backdrop')) { closeSheet(true); return; }
    if (session) { history.pushState({ v: 'session' }, ''); session.quit(); return; }
    if (tab === 'settings') { tab = 'home'; render(); }
  });

  // ---------- Aktionen ----------
  function onAction(e) {
    const say = e.target.closest('[data-say]');
    if (say) { Speech.speak(say.dataset.say, { slow: !!say.dataset.slow }); return; }
    const tok = e.target.closest('.tok');
    if (tok && !session) { Ex.onTokenClick(tok); return; }
    const a = e.target.closest('[data-act]');
    if (!a) return;
    const v = a.dataset.v;
    const S = St.S;
    switch (a.dataset.act) {
      case 'tab': go(v); break;
      case 'back': if (history.state && history.state.v === 'settings') history.back(); else { tab = 'home'; render(); } break;
      case 'start': startSession(); break;
      case 'more': St.addExtraNew(5); startSession(); break;
      case 'trainer': startTrainer('due'); break;
      case 'extra': startTrainer('extra'); break;
      case 'pull':
        St.pullToTrainer(a.dataset.id);
        closeSheet();
        toast('Kommt im nächsten Trainer-Durchgang.');
        render(true);
        break;
      case 'pos':
        St.updateCustom(a.dataset.id, { pos: v });
        wordSheet(a.dataset.id);
        break;
      case 'unit': unitSheet(+a.dataset.i); break;
      case 'lesson': lessonSheet(v); break;
      case 'word': wordSheet(a.dataset.id); break;
      case 'addword': addWordSheet(); break;
      case 'close-sheet': closeSheet(); break;
      case 'filter': wordFilter.f = v; render(true); break;
      case 'hide': S.ui[v] = true; St.save(); render(true); break;
      case 'install-help': installSheet(); break;
      case 'voice-help': voiceSheet(); break;
      case 'install-now':
        if (installEvent) { installEvent.prompt(); installEvent = null; closeSheet(); }
        break;
      case 'sw-update':
        if (swWaiting) swWaiting.postMessage('skipWaiting');
        break;
      case 'set': {
        const k = a.dataset.k;
        S.settings[k] = k === 'minutes' ? +v : v;
        if (k === 'minutes') S.learner.base = St.baseForMinutes(+v);
        if (k === 'minutes' || k === 'newMode') S.plan = null; // Tagesplan neu berechnen
        St.save();
        render(true);
        break;
      }
      case 'newfixed':
        S.settings.newFixed = Math.max(1, Math.min(40, S.settings.newFixed + +v));
        S.plan = null;
        St.save();
        render(true);
        break;
      case 'test-voice':
        if (!Speech.supported) toast('Dieser Browser kann nicht vorlesen.');
        else if (Speech.missing) { toast('Noch keine indonesische Stimme gefunden.'); if (!document.querySelector('.sheet-backdrop')) voiceSheet(); }
        else Speech.speak('Selamat pagi! Apa kabar?');
        break;
      case 'voice-step': voiceSheet(+v); break;
      case 'voice-recheck': {
        const wizard = S.ui.voiceWizard;
        Speech.refresh(); // meldet einen Erfolg im Assistenten selbst (siehe Speech.listeners)
        if (!Speech.available) voiceSheet(null, true);
        else {
          if (!wizard) voiceSheet();
          Speech.speak('Halo! Selamat belajar!');
        }
        break;
      }
      case 'voice-reset':
        Object.assign(S.settings, { voice: '', voiceManual: false });
        St.save();
        Speech.refresh();
        render(true);
        break;
      case 'reminder': saveFile('indonesisch-erinnerung.ics', reminderICS(), 'text/calendar'); break;
      case 'export': {
        const d = new Date();
        const name = `indonesisch-sicherung-${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, '0')}-${String(d.getDate()).padStart(2, '0')}.json`;
        saveFile(name, St.exportData(), 'application/json');
        break;
      }
      case 'import': document.getElementById('import-file').click(); break;
      case 'reset-all':
        if (confirm('Wirklich den gesamten Fortschritt löschen? Das kann nicht rückgängig gemacht werden.') &&
          confirm('Ganz sicher? Alle gelernten Wörter und die Statistik werden gelöscht.')) {
          St.resetAll();
          tab = 'home';
          render();
          toast('Fortschritt gelöscht.');
        }
        break;
      case 'reset-card':
        if (confirm('Dieses Wort wieder als neu behandeln?')) {
          St.resetCard(a.dataset.id);
          closeSheet();
          render(true);
        }
        break;
      case 'delete-custom':
        if (confirm('Dieses Wort löschen?')) {
          St.removeCustom(a.dataset.id);
          closeSheet();
          render(true);
        }
        break;
    }
  }
  app.addEventListener('click', onAction);
  app.addEventListener('keydown', e => {
    if ((e.key === 'Enter' || e.key === ' ') && e.target.matches('[role="button"][data-act]')) { e.preventDefault(); e.target.click(); }
  });

  // ---------- Start ----------
  Speech.init();
  // Fehlt die Stimme, sagt die App beim Antippen kurz Bescheid (höchstens alle 30 Sekunden)
  let lastMissingHint = 0;
  Speech.onMissing = () => {
    if (Date.now() - lastMissingHint < 30000) return;
    lastMissingHint = Date.now();
    toast('Keine indonesische Stimme – Anleitung unter Einstellungen → Aussprache.');
  };
  let voiceState = '';
  Speech.listeners.push(() => {
    document.body.classList.toggle('no-voice', Speech.missing);
    // Assistent lief und die Stimme ist jetzt da → Erfolg melden
    if (St.S.ui.voiceWizard && Speech.available) {
      St.S.ui.voiceWizard = false;
      St.S.ui.voiceStep = 0;
      St.save();
      toast('✅ Indonesische Stimme gefunden – die Aussprache ist bereit!');
      if (document.querySelector('.sheet-backdrop .wiz')) voiceSheet();
    }
    const now = `${Speech.loaded}|${Speech.voices.length}|${Speech.all.length}`;
    if (now === voiceState) return;
    voiceState = now;
    if (!session && (tab === 'home' || tab === 'settings')) render(true);
  });

  window.addEventListener('beforeinstallprompt', e => { e.preventDefault(); installEvent = e; });

  if ('serviceWorker' in navigator && location.protocol !== 'file:') {
    navigator.serviceWorker.register('sw.js').then(reg => {
      const onWaiting = w => { swWaiting = w; if (!session && tab === 'home') render(true); };
      if (reg.waiting && navigator.serviceWorker.controller) onWaiting(reg.waiting);
      reg.addEventListener('updatefound', () => {
        const w = reg.installing;
        w && w.addEventListener('statechange', () => {
          if (w.state === 'installed' && navigator.serviceWorker.controller) onWaiting(w);
        });
      });
      // Beim Zurückkehren in die App nach Updates schauen
      document.addEventListener('visibilitychange', () => { if (document.visibilityState === 'visible') reg.update().catch(() => {}); });
    }).catch(() => {});
    let reloading = false;
    navigator.serviceWorker.addEventListener('controllerchange', () => {
      if (reloading) return;
      reloading = true;
      location.reload();
    });
  }

  // Zurück in der App: neue Stimmen erkennen (z. B. nach dem Installieren) und
  // bei neuem Tag die Startseite aktualisieren
  document.addEventListener('visibilitychange', () => {
    if (document.visibilityState !== 'visible') return;
    Speech.refresh();
    if (!session && tab === 'home') render(true);
  });

  render();
})();
