// Oberfläche: Startseite, Kurs, Vokabeltrainer, Gespräche, Wörter, Statistik, Einstellungen –
// und der Start von Lektionen, Trainer-Runden und Gesprächen.
(function () {
  const { esc, inline, icon, Speech, Listen, shuffle, lessonHTML, toast, t, LANG } = window.U;
  const St = window.Store;
  const Ex = window.Examples;
  const Talk = window.Talk;
  const app = document.getElementById('app');
  let tab = 'home';
  let session = null; // laufende Lektion, Trainer-Runde oder Gespräch
  let wordFilter = { q: '', f: 'all' };
  let ask = { q: '', res: undefined }; // „Situation schildern“: letzte Eingabe und Ergebnis
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
    const views = { home: viewHome, course: viewCourse, trainer: viewTrainer, talk: viewTalk, words: viewWords, stats: viewStats, settings: viewSettings };
    app.innerHTML = `<main class="page page-${tab}">${views[tab]()}</main>${SUBPAGES.includes(tab) ? '' : nav()}`;
    if (tab === 'words') bindWords();
    if (tab === 'talk') bindTalk();
    if (tab === 'settings') bindSettings();
    window.scrollTo(0, y);
  }

  function nav() {
    const item = (v, ic, label) =>
      `<button class="nav-item${tab === v ? ' active' : ''}" data-act="tab" data-v="${v}" aria-label="${label}">${icon(ic, 24)}<span>${label}</span></button>`;
    return `<nav class="tabbar">${item('home', 'home', t('Heute'))}${item('course', 'course', t('Kurs'))}${item('trainer', 'cards', t('Trainer'))}${item('talk', 'chat', t('Gespräche'))}${item('words', 'words', t('Wörter'))}</nav>`;
  }

  // Unterseiten ohne Tableiste, mit Zurück-Knopf
  const SUBPAGES = ['settings', 'stats'];
  function go(v) {
    if (SUBPAGES.includes(v)) history.pushState({ v }, '');
    tab = v;
    render();
  }

  // Mehrzahl: plural(3, 'Karte', 'Karten') → „3 Karten“ (in der Sprache der App)
  const plural = (n, one, many) => (n === 1 ? t('1 ' + one) : t('{n} ' + many, { n }));

  // ---------- Startseite ----------
  function greeting() {
    const h = new Date().getHours();
    if (h < 11) return ['Selamat pagi!', t('Guten Morgen')];
    if (h < 15) return ['Selamat siang!', t('Guten Tag')];
    if (h < 18) return ['Selamat sore!', t('Guten Nachmittag')];
    return ['Selamat malam!', t('Guten Abend')];
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
          <h2>${p.courseDone ? t('Kurs abgeschlossen!') : t('Geschafft für heute!')}</h2>
          <p class="muted">${p.courseDone ? t('Alle Kurswörter sind gelernt. Der Vokabeltrainer wiederholt sie weiter – und du kannst eigene Wörter hinzufügen.') : t('Morgen warten neue Wörter und die passenden Wiederholungen. Sampai besok!')}</p>
          <div class="btn-stack">
            ${p.courseDone ? '' : `<button class="btn primary block" data-act="more">${t('+5 neue Wörter')}</button>`}
            ${learnedAny ? `<button class="btn ghost block" data-act="extra">${t('Extra-Runde: schwache Wörter')}</button>` : ''}
          </div>
        </div>`;
    } else {
      // Zwei Schritte als Weg: 1. Lektion, 2. Vokabeln. Der aktuelle Schritt ist groß mit
      // deutlichem Knopf, der nächste kleiner, erledigte bekommen einen Haken.
      const lessonParts = [];
      if (p.newLeft) lessonParts.push(plural(p.newLeft, 'neue Karte', 'neue Karten'));
      if (p.learning) lessonParts.push(t('{n} im Lernen', { n: p.learning }));
      if (p.sentDue) lessonParts.push(plural(p.sentDue, 'Satz', 'Sätze'));
      const trainerN = p.wordDue + p.tLearning + p.tNew;
      const trainerText = trainerN
        ? `${plural(trainerN, 'Karte', 'Karten')}${p.tNew ? ` · ${t('{n} neu', { n: p.tNew })}` : ''}`
        : (vc.words ? t('alles wiederholt') : t('füllt sich mit jeder Lektion'));
      const current = !p.lessonDone ? 1 : !p.trainerDone ? 2 : 0;
      const step = (n, act, emoji, title, text, done) => {
        const state = done ? 'done' : current === n ? 'now' : 'next';
        return `
          <div class="step ${state}">
            <div class="step-card"${state === 'next' ? ` data-act="${act}" role="button" tabindex="0"` : ''}>
              <div class="step-head">
                <span class="step-ic">${emoji}</span>
                <span class="grow"><b>${title}</b><span class="muted">${done ? t('erledigt') : text}</span></span>
                ${done ? `<span class="task-check">${icon('check', 20)}</span>` : ''}
              </div>
              ${state === 'now' ? `<button class="btn primary block big" data-act="${act}">${t('Starten')}</button>` : ''}
            </div>
          </div>`;
      };
      today = `
        <div class="today-row">
          <div class="ring-wrap">${ring(p.progress)}<span>${Math.round(p.progress * 100)}%</span></div>
          <div>
            <h2>${t('Heute')}</h2>
            <p class="muted">${t('ca. {n} Min.', { n: p.minutes })}</p>
          </div>
        </div>
        <div class="steps-today">
          ${step(1, 'start', icon('book', 24), fresh ? t('Erste Lektion') : t('Lektion'), lessonParts.join(' · ') || t('erledigt'), p.lessonDone)}
          ${step(2, 'trainer', icon('cards', 24), t('Vokabeln wiederholen'), trainerText, p.trainerDone)}
        </div>`;
    }

    const banners = [];
    if (swWaiting) banners.push(`<div class="banner"><span>✨ ${t('Eine neue Version ist da.')}</span><button class="btn sm primary" data-act="sw-update">${t('Aktualisieren')}</button></div>`);
    if (Speech.missing && !S.ui.voiceHidden) {
      const step = S.ui.voiceStep || 0;
      banners.push(`<div class="banner"><span>🔈 <b>${t('Aussprache einrichten')}</b> – ${step ? t('weiter bei Schritt {n}', { n: step + 1 }) : t('einmalig, ca. 2 Minuten')}.</span><button class="btn sm primary" data-act="voice-help">${step ? t('Weiter') : t('Einrichten')}</button><button class="icon-btn sm" data-act="hide" data-v="voiceHidden" aria-label="${t('Ausblenden')}">${icon('x', 18)}</button></div>`);
    }
    if (!standalone() && !S.ui.installHidden) {
      banners.push(`<div class="banner"><span>📲 ${t('Leg die App auf deinen Homescreen – dann läuft sie wie eine echte App, auch offline.')}</span><button class="btn sm ghost" data-act="install-help">${t('Anleitung')}</button><button class="icon-btn sm" data-act="hide" data-v="installHidden" aria-label="${t('Ausblenden')}">${icon('x', 18)}</button></div>`);
    }

    const welcome = fresh && !S.ui.welcomed ? `
      <section class="card welcome">
        <h2>Selamat datang! 👋</h2>
        <p>${t("Willkommen bei deinem Indonesisch-Kurs. So funktioniert's:")}</p>
        <ul>
          <li>${t('<b>Jeden Tag ca. {n} Minuten.</b> Die App plant alles für dich.', { n: S.settings.minutes })}</li>
          <li>${t('<b>Wiederholung zur richtigen Zeit:</b> Was du sicher kannst, kommt seltener. Was schwerfällt, kommt öfter.')}</li>
          <li>${t('<b>Sie passt sich dir an:</b> Lernst du schnell, kommen mehr neue Wörter. Wird es zu viel, weniger.')}</li>
          <li>${t('<b>Grammatik in kleinen Häppchen</b>, immer dann, wenn sie gebraucht wird.')}</li>
          <li>${t('<b>Laut nachsprechen!</b> Tippe auf 🔊 – das macht dich am schnellsten sprechfähig.')}</li>
        </ul>
        <p class="muted">${t('Du kennst schon ein paar Wörter? Tippe bei neuen Wörtern einfach auf „Kenne ich schon“.')}</p>
        <div class="lang-pick"><span class="muted small">${t('Sprache der App')}:</span>${langSeg()}</div>
      </section>` : '';

    // Level 2 erreicht: einmal feiern
    const lp1 = St.levelProgress(1);
    const level2 = unit.level === 2 && lp1.done === lp1.total && !S.ui.level2Seen ? `
      <section class="card level-up">
        <div class="big-emoji">🎉</div>
        <h2>${t('Level 1 geschafft!')}</h2>
        <p>${t('Du hast alle {n} Karten der Grundlagen gelernt. Ab jetzt geht es mit <b>Level 2 – Fortgeschritten</b> weiter: Leben in Indonesien, Beruf, Umgangssprache und eigene Meinungen.', { n: lp1.total })}</p>
        <button class="btn primary block" data-act="hide" data-v="level2Seen">${t("Los geht's!")}</button>
      </section>` : '';

    // Gesprächsvorschlag, sobald ein paar Wörter sitzen
    const dlg = vc.words >= 15 && Talk ? Talk.recommend(1)[0] : null;
    const talkCard = dlg ? `
      <section class="card talk-now" data-act="dialog" data-v="${esc(dlg.id)}" role="button" tabindex="0">
        <div class="unit-icon">${esc(dlg.icon)}</div>
        <div class="grow">
          <div class="label">${t('Gespräch üben')}</div>
          <div class="unit-title">${esc(dlg.title)}</div>
          <div class="muted small">${esc(Talk.fill(dlg.goal, Talk.profile()))}</div>
        </div>
        <span class="chev">${icon('chat', 22)}</span>
      </section>` : '';

    const levelUnits = St.UNITS.filter(u => u.level === unit.level);
    const posInLevel = levelUnits.indexOf(unit) + 1;

    return `
      <header class="topbar">
        <div><div class="greet">${hi}</div><div class="muted">${hiDe}</div></div>
        <div class="topbar-actions">
          <button class="icon-btn" data-act="tab" data-v="stats" aria-label="${t('Statistik')}">${icon('stats', 24)}</button>
          <button class="icon-btn" data-act="tab" data-v="settings" aria-label="${t('Einstellungen')}">${icon('settings', 24)}</button>
        </div>
      </header>
      ${banners.join('')}
      ${level2}
      <section class="card today">${today}</section>
      ${welcome}
      <section class="stat-row">
        <div class="mini-stat"><span class="flame${streak ? ' on' : ''}">${icon('flame', 22)}</span><b>${streak}</b><span>${streak === 1 ? t('Tag Serie') : t('Tage Serie')}</span></div>
        <div class="mini-stat"><b>${vc.words}</b><span>${t('Wörter')}</span></div>
        <div class="mini-stat"><b>${lvl.code}</b><span>${lvl.name}</span></div>
      </section>
      <section class="card unit-now" data-act="unit" data-i="${unit.index}" role="button" tabindex="0">
        <div class="unit-icon">${esc(unit.icon)}</div>
        <div class="grow">
          <div class="label">${t('Level {l} · Thema {n} von {m}', { l: unit.level, n: posInLevel, m: levelUnits.length })}</div>
          <div class="unit-title">${esc(unit.title)}</div>
          <div class="bar"><i style="width:${(up.done / up.total) * 100}%"></i></div>
          <div class="muted small">${t('{a} von {b} gelernt', { a: up.done, b: up.total })}${lesson ? ` · 📘 ${esc(lesson.title)}` : ''}</div>
        </div>
      </section>
      ${talkCard}
    `;
  }

  // ---------- Vokabeltrainer ----------
  function viewTrainer() {
    const S = St.S;
    const p = St.planInfo();
    const today = St.today();
    let total = 0, tomorrow = 0, strong = 0;
    Object.keys(S.cards).forEach(id => {
      const c = S.cards[id], k = St.CARDS[id];
      if (!k || k.kind !== 'w') return;
      total++;
      if (c.st === 'R' && c.due === today + 1) tomorrow++;
      if (c.st === 'R' && c.s >= 21) strong++;
    });
    const ready = p.wordDue + p.tLearning + p.tNew;
    const hero = ready ? `
      <div class="deck"><span>${ready}</span></div>
      <h2>${ready === 1 ? t('1 Karte bereit') : t('{n} Karten bereit', { n: ready })}</h2>
      <p class="muted">${p.tNew ? t('davon {n} neu', { n: p.tNew }) + ' · ' : ''}${t('in Runden à 20 Karten')}</p>
      <button class="btn primary block big" data-act="trainer">${t('Trainer starten')}</button>` : `
      <div class="big-emoji">${total ? '✅' : '🃏'}</div>
      <h2>${total ? t('Alles wiederholt!') : t('Dein Trainer ist noch leer')}</h2>
      <p class="muted">${total ? (tomorrow === 1 ? t('Morgen ist <b>1</b> Karte dran.') : t('Morgen sind <b>{n}</b> Karten dran.', { n: tomorrow })) : t('Jedes Wort, das du in einer Lektion lernst, kommt automatisch hierher. Oder füge eigene Vokabeln hinzu.')}</p>
      ${total >= 5 ? `<button class="btn ghost block" data-act="extra">${t('Extra-Runde: schwache Wörter')}</button>` : ''}`;
    const customs = S.custom.slice().reverse();
    return `
      <header class="topbar"><h1>${t('Vokabeltrainer')}</h1><button class="icon-btn" data-act="addword" aria-label="${t('Eigene Vokabel hinzufügen')}">${icon('plus', 24)}</button></header>
      <section class="card trainer-hero">${hero}</section>
      <section class="stat-row">
        <div class="mini-stat"><b>${total}</b><span>${t('Karten')}</span></div>
        <div class="mini-stat"><b>${tomorrow}</b><span>${t('morgen')}</span></div>
        <div class="mini-stat"><b>${strong}</b><span>${t('sicher')}</span></div>
      </section>
      <section class="card">
        <div class="card-head"><h3>${t('Eigene Vokabeln')}</h3><button class="btn ghost sm" data-act="addword">${icon('plus', 16)} ${t('Hinzufügen')}</button></div>
        ${customs.length ? `<div class="word-list">${customs.map(c => wordRow(St.CARDS[c.id])).join('')}</div>`
          : `<p class="muted small">${t('Hast du unterwegs ein neues Wort gehört? Füge es hinzu – der Trainer zeigt es dir mit Sätzen aus Wörtern, die du schon kennst.')}</p>`}
      </section>
      <section class="card">
        <details>
          <summary><b>${t('So funktioniert der Trainer')}</b></summary>
          <div class="method">
            <p>${t('<b>Karteikarten:</b> Schau dir die Vorderseite an, sag die Antwort laut und dreh die Karte um. Dann wischst du sie <b>nach rechts</b>, wenn du es gewusst hast, oder <b>nach links</b>, wenn nicht. Alternativ tippst du auf die Knöpfe darunter.')}</p>
            <p>${t('<b>Beide Richtungen:</b> Mal siehst du das indonesische Wort, mal das deutsche – so lernst du verstehen <i>und</i> selbst sprechen.')}</p>
            <p>${t('<b>Automatisch befüllt:</b> Jedes Wort aus den Lektionen landet hier. Gekonnte Wörter kommen in immer größeren Abständen, vergessene schon bald wieder.')}</p>
            <p>${t('<b>Passende Beispielsätze:</b> Zu jeder Karte zeigt die App den Satz, den du mit deinem Wortschatz am besten verstehst. Unbekannte Wörter sind unterstrichen – antippen zeigt die Übersetzung.')}</p>
          </div>
        </details>
      </section>`;
  }

  // ---------- Kurs ----------
  function viewCourse() {
    const cur = St.currentUnit();
    const row = (u, n) => {
      const { done, total } = St.unitProgress(u);
      const state = done === total ? 'done' : u.index <= cur.index ? 'current' : 'later';
      const L = u.lesson && window.LESSONS[u.lesson];
      return `
        <button class="unit-row ${state}" data-act="unit" data-i="${u.index}">
          <span class="unit-num">${done === total ? icon('check', 18) : n}</span>
          <span class="grow">
            <span class="unit-title">${esc(u.icon)} ${esc(u.title)}</span>
            <span class="bar"><i style="width:${(done / total) * 100}%"></i></span>
            <span class="muted small">${done}/${total}${L ? ` · 📘 ${esc(L.title)}${St.S.lessons[u.lesson] || St.S.lessonsRead[u.lesson] ? ' ✓' : ''}` : ''}</span>
          </span>
        </button>`;
    };
    const LEVELS = [
      [1, t('Level 1 – Grundlagen'), t('A1–A2 · Alltag, Essen, Unterwegs, erste Gespräche')],
      [2, t('Level 2 – Fortgeschritten'), t('B1–B2 · Leben in Indonesien, Beruf, Umgangssprache, Meinungen')],
    ];
    const blocks = LEVELS.map(([lv, title, sub]) => {
      const units = St.UNITS.filter(u => u.level === lv);
      if (!units.length) return '';
      const lp = St.levelProgress(lv);
      const locked = lv > cur.level;
      return `
        <section class="level-block${locked ? ' later' : ''}">
          <div class="level-head">
            <div class="grow"><h2>${title}</h2><span class="muted small">${sub}</span></div>
            <span class="pill${lp.done === lp.total ? '' : ' accent'}">${Math.round(lp.done / lp.total * 100)} %</span>
          </div>
          ${locked ? `<p class="muted small level-note">${t('Startet automatisch nach Level 1 – du kannst schon reinschauen.')}</p>` : ''}
          <div class="unit-list">${units.map((u, k) => row(u, k + 1)).join('')}</div>
        </section>`;
    }).join('');
    const custom = St.S.custom.length ? `
      <div class="unit-list">
        <button class="unit-row" data-act="unit" data-i="-1">
          <span class="unit-num">★</span>
          <span class="grow"><span class="unit-title">${t('Eigene Wörter')}</span><span class="muted small">${plural(St.S.custom.length, 'Wort', 'Wörter')}</span></span>
        </button>
      </div>` : '';
    return `
      <header class="topbar"><h1>${t('Kurs')}</h1></header>
      <p class="muted intro-text">${t('{n} Themen in zwei Levels, vom Wichtigsten zum Spezielleren. Neue Wörter kommen automatisch in dieser Reihenfolge – du kannst trotzdem überall hineinschauen und jede Grammatik-Lektion lesen.', { n: St.UNITS.length })}</p>
      ${custom}${blocks}`;
  }

  function unitSheet(i) {
    const isCustom = i === -1;
    const u = isCustom ? { title: t('Eigene Wörter'), icon: '★', ids: St.customIds(), lesson: null } : St.UNITS[i];
    const L = u.lesson && window.LESSONS[u.lesson];
    const rows = u.ids.map(id => wordRow(St.CARDS[id])).join('');
    openSheet(`
      <div class="sheet-head"><h2>${esc(u.icon)} ${esc(u.title)}</h2>${closeBtn()}</div>
      ${L ? `<button class="lesson-link" data-act="lesson" data-v="${u.lesson}">${icon('book', 20)}<span>${t('Grammatik')}: ${esc(L.title)}</span>${St.S.lessons[u.lesson] || St.S.lessonsRead[u.lesson] ? `<span class="pill">${t('gelesen')}</span>` : `<span class="pill accent">${t('neu')}</span>`}</button>` : ''}
      <div class="word-list">${rows || `<p class="muted">${t('Noch keine Wörter.')}</p>`}</div>`);
  }

  function lessonSheet(key) {
    const L = window.LESSONS[key];
    openSheet(`
      <div class="sheet-head"><h2>📘 ${esc(L.title)}</h2>${closeBtn()}</div>
      <article class="lesson">${lessonHTML(L)}</article>`);
    if (!St.S.lessons[key] && !St.S.lessonsRead[key]) { St.S.lessonsRead[key] = Date.now(); St.save(); }
  }

  // „Level 2 · Thema 5“
  function unitLabel(u) {
    return t('Level {l} · Thema {n}', { l: u.level, n: St.UNITS.filter(x => x.level === u.level).indexOf(u) + 1 });
  }

  // ---------- Wörter ----------
  const STRENGTH = [t('neu'), t('lernt'), t('frisch'), t('gefestigt'), t('sicher')];
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
      return `<p class="muted empty">${wordFilter.q ? t('Nichts gefunden.') : Object.keys(St.S.cards).length ? t('Keine Wörter in dieser Auswahl.') : t('Hier erscheinen alle Wörter, die du gelernt hast. Starte deine erste Lerneinheit!')}</p>`;
    }
    const shown = ids.slice(0, 250).map(id => wordRow(St.CARDS[id])).join('');
    return shown + (ids.length > 250 ? `<p class="muted small center">${t('… und {n} weitere – nutze die Suche.', { n: ids.length - 250 })}</p>` : '');
  }

  function viewWords() {
    const chip = (f, label) => `<button class="chip-btn${wordFilter.f === f ? ' active' : ''}" data-act="filter" data-v="${f}">${label}</button>`;
    return `
      <header class="topbar"><h1>${t('Wörter')}</h1><button class="icon-btn" data-act="addword" aria-label="${t('Eigenes Wort hinzufügen')}">${icon('plus', 24)}</button></header>
      <div class="search">${icon('search', 20)}<input type="search" placeholder="${t('Suchen – Deutsch oder Indonesisch')}" value="${esc(wordFilter.q)}" aria-label="${t('Suchen')}"></div>
      <div class="chips">${chip('all', t('Alle'))}${chip('weak', t('Schwierig'))}${chip('strong', t('Sicher'))}${chip('sent', t('Sätze'))}${chip('custom', t('Eigene'))}</div>
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
    if (d <= 0) return t('heute');
    if (d === 1) return t('morgen');
    if (d < 30) return t('in {n} Tagen', { n: d });
    if (d < 60) return t('in ca. einem Monat');
    return t('in ca. {n} Monaten', { n: Math.round(d / 30) });
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
        ? `<p class="muted">${t('Kommt im nächsten Trainer-Durchgang dran.')}</p>`
        : `<p class="muted">${t('Noch nicht gelernt – kommt in {u} ({t}) dran.', { u: unitLabel(u), t: esc(u.title) })}</p>
           ${c.kind === 'w' ? `<button class="btn ghost block" data-act="pull" data-id="${esc(id)}">${icon('cards', 18)} ${t('Jetzt in den Vokabeltrainer holen')}</button>` : ''}`;
    } else if (st.st === 'L') info = `<p class="muted">${t('Gerade im Lernen.')}</p>`;
    else {
      const r = Srs.currentRecall(st, Date.now(), St.S.learner.m);
      info = `
        <div class="kv">
          <div><span>${t('Erinnerung jetzt')}</span><b>${Math.round(r * 100)} %</b></div>
          <div><span>${t('Nächste Wiederholung')}</span><b>${relDays(st.due)}</b></div>
          <div><span>${t('Wiederholt')}</span><b>${st.reps}×</b></div>
          <div><span>${t('Vergessen')}</span><b>${st.lapses || 0}×</b></div>
        </div>`;
    }
    // Wörter: Beispielsatz, den man mit dem aktuellen Wortschatz am besten versteht
    const example = c.kind === 'w' ? Ex.blockHTML(Ex.forCard(c)) : '';
    const posPicker = c.custom ? `
      <div class="field-label">${t('Wortart')} <small>– ${t('bestimmt die automatischen Beispielsätze')}</small></div>
      <div class="seg">${Object.keys(Ex.POS_LABEL).map(k =>
        `<button class="seg-btn${c.pos === k ? ' active' : ''}" data-act="pos" data-id="${esc(id)}" data-v="${k}">${Ex.POS_LABEL[k]}</button>`).join('')}</div>` : '';
    openSheet(`
      <div class="sheet-head"><span class="muted small">${u ? esc(u.icon + ' ' + u.title) : '★ ' + t('Eigenes Wort')}</span>${closeBtn()}</div>
      <div class="word-detail">
        <div class="intro-head"><div class="${c.kind === 's' ? 'big-sentence' : 'big-word'}">${esc(c.indo)}</div>
          <div class="speak-pair"><button class="speak-btn lg" data-say="${esc(c.indo)}" aria-label="${t('Vorlesen')}">${icon('speaker', 30)}</button><button class="speak-btn slow" data-say="${esc(c.indo)}" data-slow="1" aria-label="${t('Langsam vorlesen')}">${icon('turtle', 20)}</button></div></div>
        ${c.coll && set.colloquial ? `<div class="coll"><span>${t('Alltag')}</span> ${esc(c.coll)}</div>` : ''}
        <div class="meaning">${esc(c.de)}</div>
        ${c.note ? `<div class="note">💡 ${esc(c.note)}</div>` : ''}
        ${example}
        ${posPicker}
        ${info}
        <div class="btn-stack">
          ${st ? `<button class="btn ghost block" data-act="reset-card" data-id="${esc(id)}">${t('Neu lernen')}</button>` : ''}
          ${c.custom ? `<button class="btn danger block" data-act="delete-custom" data-id="${esc(id)}">${icon('trash', 18)} ${t('Wort löschen')}</button>` : ''}
        </div>
      </div>`);
  }

  const POS_HINT = {
    n: t('Ding, Ort oder Person – z. B. kelapa (Kokosnuss), pantai (Strand)'),
    v: t('Tätigkeit – Deutsch bitte in der Grundform, z. B. „schwimmen“'),
    a: t('Eigenschaft – z. B. segar (frisch), lucu (süß, lustig)'),
    x: t('Ausdruck oder Redewendung – Beispielsätze nur aus dem Kurs oder deinem eigenen Satz'),
  };

  function addWordSheet() {
    openSheet(`
      <div class="sheet-head"><h2>${t('Eigene Vokabel')}</h2>${closeBtn()}</div>
      <p class="muted">${t('Sie kommt sofort in den Vokabeltrainer – mit Beispielsätzen aus Wörtern, die du schon kennst.')}</p>
      <form class="form" id="add-form" autocomplete="off" novalidate>
        <label>${t('Indonesisch')}<input name="indo" required autocapitalize="off" autocorrect="off" spellcheck="false" placeholder="${t('z. B. kelapa')}"></label>
        <label>${t('Deutsch')}<input name="de" required placeholder="${t('z. B. Kokosnuss')}"></label>
        <div>
          <div class="field-label">${t('Wortart')}</div>
          <div class="seg" id="pos-seg">${Object.keys(Ex.POS_LABEL).map(k =>
            `<button type="button" class="seg-btn" data-pos="${k}">${Ex.POS_LABEL[k]}</button>`).join('')}</div>
          <p class="muted small pos-hint">${t('Wähle die Wortart – damit baut die App passende Beispielsätze.')}</p>
        </div>
        <div id="add-preview"></div>
        <details class="own-ex">
          <summary>${t('Eigenen Beispielsatz hinzufügen (optional)')}</summary>
          <label>${t('Beispielsatz')}<input name="ex" autocapitalize="off" spellcheck="false" placeholder="${t('z. B. Saya mau minum air kelapa.')}"></label>
          <label>${t('Übersetzung')}<input name="exde" placeholder="${t('z. B. Ich möchte Kokoswasser trinken.')}"></label>
        </details>
        <button class="btn primary block" type="submit">${t('Hinzufügen')}</button>
      </form>`, sheet => {
      const form = sheet.querySelector('#add-form');
      let pos = '';
      const preview = () => {
        const indo = form.indo.value.trim(), de = form.de.value.trim();
        const box = sheet.querySelector('#add-preview');
        if (!indo || !de || !pos) { box.innerHTML = ''; return; }
        const ex = Ex.forCard({ id: 'preview', kind: 'w', custom: true, indo, de, coll: '', pos, unit: St.CUSTOM });
        box.innerHTML = ex ? `<div class="field-label">${t('So könnte ein Beispielsatz aussehen')}</div>${Ex.blockHTML(ex)}` : '';
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
        if (!indo || !de) { toast(t('Bitte Indonesisch und Deutsch ausfüllen.')); return; }
        if (!pos) { toast(t('Bitte wähle die Wortart.')); return; }
        const key = St.norm(indo);
        if (St.S.custom.some(c => St.norm(c.indo) === key)) { toast(t('Dieses Wort hast du schon hinzugefügt.')); return; }
        // Gibt es das Wort schon im Kurs? Dann diese Karte verwenden.
        const course = St.ORDER.map(id => St.CARDS[id]).find(c => c.kind === 'w' && St.answersFor(c).some(a => St.norm(a) === key));
        if (course) {
          if (St.S.cards[course.id]) { toast(t('„{w}“ kennst du schon – es ist bereits im Trainer.', { w: course.indo })); return; }
          if (confirm(t('„{w}“ gibt es schon im Kurs ({d}). Diese Karte in den Trainer holen?', { w: course.indo, d: course.de }))) {
            St.pullToTrainer(course.id);
            closeSheet();
            toast('Kommt im nächsten Trainer-Durchgang.');
            render(true);
          }
          return;
        }
        St.addCustom(indo, de, form.ex.value.trim(), form.exde.value.trim(), pos);
        closeSheet();
        toast(t('Gespeichert – kommt im nächsten Trainer-Durchgang.'));
        render(true);
      };
    });
  }

  // ---------- Gespräche ----------
  const ASK_EXAMPLES = LANG === 'en'
    ? ['I got the wrong food at a restaurant', 'I need to see a doctor', 'Talking to the landlord about the rent', 'Difference between tidak and bukan', 'What is coconut in Indonesian?']
    : ['Im Restaurant kam das falsche Essen', 'Ich muss zum Arzt', 'Mit dem Vermieter über die Miete reden', 'Unterschied zwischen tidak und bukan', 'Was heißt Kokosnuss?'];
  const unitOf = d => St.UNITS.find(u => u.key === d.unit) || St.UNITS[0];

  function dialogRow(d) {
    const st = St.S.dialogs[d.id];
    const u = unitOf(d);
    const ready = u.index <= St.currentUnit().index + 1;
    const sub = st ? t('{n}× geübt', { n: st.n }) : ready ? t('passt zu deinem Stand') : t('Wörter dazu ab Thema {n}', { n: St.UNITS.filter(x => x.level === u.level).indexOf(u) + 1 });
    const pill = st ? `<span class="pill${st.best >= 0.8 ? '' : ' accent'}">${Math.round(st.best * 100)} %</span>`
      : ready ? `<span class="pill accent">${t('neu')}</span>` : '';
    return `
      <button class="dlg-row${ready || st ? '' : ' later'}" data-act="dialog" data-v="${esc(d.id)}">
        <span class="dlg-ic">${esc(d.icon)}</span>
        <span class="grow"><b>${esc(d.title)}</b><span class="muted small">${d.level === 2 ? 'Level 2 · ' : ''}${d.personal ? t('über dich') + ' · ' : ''}${sub}</span></span>
        ${pill}
      </button>`;
  }

  function askResultsHTML() {
    const r = ask.res;
    if (r === undefined) return '';
    const head = `<div class="card-head"><span class="muted small">${t('Zusammengestellt für <b>„{q}“</b>', { q: esc(ask.q) })}</span><button class="icon-btn sm" data-act="ask-clear" aria-label="${t('Schließen')}">${icon('x', 18)}</button></div>`;
    if (r === null) return `<section class="card ask-results">${head}<p class="muted">${t('Schreib ein paar Stichworte mehr – z. B. <i>„Im Restaurant kam das falsche Essen“</i>.')}</p></section>`;
    const parts = [];
    if (r.dialogs.length) parts.push(`<h3>${t('Passende Gespräche')}</h3><div class="dlg-list">${r.dialogs.map(dialogRow).join('')}</div>`);
    if (r.lessons.length) parts.push(`<h3>${t('Grammatik')}</h3>${r.lessons.map(l =>
      `<button class="lesson-link" data-act="lesson" data-v="${esc(l.key)}">${icon('book', 20)}<span>${esc(l.title)}</span></button>`).join('')}`);
    if (r.words.length) parts.push(`<h3>${t('Nützliche Wörter')}</h3><div class="word-list">${r.words.map(wordRow).join('')}</div>`);
    if (r.sentences.length) parts.push(`<h3>${t('Beispielsätze')}</h3><div class="sent-list">${r.sentences.map(s => `
      <div class="sent-row"><span class="grow"><b>${esc(s.indo)}</b><span class="muted">${esc(s.de)}</span></span>
        <button class="speak-btn" data-say="${esc(s.indo)}" aria-label="${t('Vorlesen')}">${icon('speaker', 20)}</button></div>`).join('')}</div>`);
    if (!parts.length) parts.push(`<p>${t('Dazu habe ich leider nichts Passendes gefunden.')}</p>
      <p class="muted small">${t('Versuch es mit anderen Wörtern – z. B. „Arzt“, „Wohnung mieten“, „Rechnung“ oder einem indonesischen Wort.')}</p>`);
    return `<section class="card ask-results">${head}${parts.join('')}</section>`;
  }

  function viewTalk() {
    const S = St.S;
    const hasProfile = !!(S.profile && S.profile.nama);
    const recent = (S.situations || []).slice(-6).reverse().map(s => s.q);
    const byUnit = (a, b) => unitOf(a).index - unitOf(b).index;
    const groups = window.DIALOG_GROUPS.map(g => {
      const list = window.DIALOGS.filter(d => d.group === g.key).sort(byUnit);
      return `
        <section class="card">
          <h3>${esc(g.icon)} ${esc(g.title)}</h3>
          <div class="dlg-list">${list.map(dialogRow).join('')}</div>
        </section>`;
    }).join('');
    return `
      <header class="topbar"><h1>${t('Gespräche')}</h1><button class="icon-btn" data-act="profile" aria-label="${t('Über mich')}">${icon('user', 24)}</button></header>
      ${hasProfile || S.ui.profileHidden ? '' : `
      <section class="card profile-callout">
        <b>${t('Erzähl der App von dir')} 👤</b>
        <p class="muted small">${t('Name, Herkunft, Beruf, Hobby – dann drehen sich die Gespräche um <i>dein</i> Leben. Alles bleibt nur auf deinem Handy.')}</p>
        <div class="btn-row"><button class="btn primary sm" data-act="profile">${t('Über mich ausfüllen')}</button><button class="btn ghost sm" data-act="hide" data-v="profileHidden">${t('Später')}</button></div>
      </section>`}
      <section class="card ask">
        <h3>${t('Was möchtest du üben oder wissen?')}</h3>
        <p class="muted small">${t('Schildere eine Situation oder stell eine Frage – die App stellt dir passende Gespräche, Wörter, Sätze und Grammatik zusammen.')}</p>
        <form class="ask-form" id="ask-form" autocomplete="off">
          <textarea name="q" rows="2" placeholder="${t('z. B. Im Restaurant kam das falsche Essen – wie beschwere ich mich?')}" aria-label="${t('Situation oder Frage')}">${esc(ask.q)}</textarea>
          <div class="ask-actions">
            ${Listen.supported ? `<button type="button" class="icon-btn mic" data-mic aria-label="${t('Auf Deutsch sprechen')}">${icon('mic', 22)}</button>` : ''}
            <button class="btn primary grow" type="submit">${t('Zusammenstellen')}</button>
          </div>
        </form>
        <div class="field-label">${recent.length ? t('Zuletzt & Beispiele') : t('Zum Beispiel')}</div>
        <div class="chips wrap">${recent.concat(ASK_EXAMPLES.filter(q => !recent.includes(q))).slice(0, Math.max(5, recent.length))
          .map(q => `<button class="chip-btn${recent.includes(q) ? ' recent' : ''}" data-act="ask" data-v="${esc(q)}">${recent.includes(q) ? '🕘 ' : ''}${esc(q)}</button>`).join('')}</div>
      </section>
      <div id="ask-results">${askResultsHTML()}</div>
      <section class="card">
        <h3>${t('Für dich empfohlen')}</h3>
        <div class="dlg-list">${Talk.recommend(3).map(dialogRow).join('')}</div>
      </section>
      ${groups}
      <section class="card">
        <details>
          <summary><b>${t('So funktioniert der Gesprächstrainer')}</b></summary>
          <div class="method">
            <p>${t('<b>Gespräche nachspielen:</b> Dein Gegenüber spricht (🔊), du antwortest auf Indonesisch – tippen oder mit 🎤 sprechen. Es gibt nicht nur eine richtige Antwort: Die App achtet auf die wichtigen Wörter und ist bei kleinen Tippfehlern großzügig.')}</p>
            <p>${t('<b>Hilfe, wenn du hängst:</b> Unten gibt es einen Tipp, eine Auswahl oder die Lösung. Tippe auf einen Satz deines Gegenübers, um die Übersetzung zu sehen – oder schalte oben „DE“ ein.')}</p>
            <p>${t('<b>Freihand-Modus 🎧:</b> Die App hört nach jedem Satz automatisch zu – wie ein echtes Gespräch, ganz ohne Tippen.')}</p>
            <p>${t('<b>Am Ende:</b> Du siehst, was gut lief, und kannst neue Wörter und schwierige Sätze mit einem Tipp in den Vokabeltrainer übernehmen.')}</p>
            <p>${t('<b>Über mich:</b> Deine Angaben (Name, Herkunft, Beruf …) werden in die Gespräche eingesetzt. Und was du oben schilderst, merkt sich die App für ihre Empfehlungen.')}</p>
          </div>
        </details>
      </section>`;
  }

  function bindTalk() {
    const form = app.querySelector('#ask-form');
    if (!form) return;
    const ta = form.q;
    ta.oninput = () => { ask.q = ta.value; };
    ta.onkeydown = e => { if (e.key === 'Enter' && !e.shiftKey) { e.preventDefault(); runAsk(ta.value); } };
    form.onsubmit = e => { e.preventDefault(); runAsk(ta.value); };
    const mic = form.querySelector('[data-mic]');
    if (mic) mic.onclick = () => {
      if (mic.classList.contains('listening')) { Listen.stop(); return; }
      const before = ta.value;
      mic.classList.add('listening');
      Listen.start({
        lang: LANG === 'en' ? 'en-US' : 'de-DE',
        onInterim: x => { if (x) ta.value = x; },
        onEnd: alts => {
          mic.classList.remove('listening');
          if (alts[0]) runAsk(alts[0]);
          else if (!ta.value.trim()) ta.value = before;
        },
        onError: code => {
          mic.classList.remove('listening');
          toast(code === 'not-allowed' || code === 'service-not-allowed' ? t('Bitte erlaube der App den Zugriff aufs Mikrofon.')
            : code === 'no-speech' ? t('Ich habe nichts gehört – nochmal?') : t('Spracherkennung gerade nicht möglich – bitte tippen.'));
        },
      });
    };
  }

  function runAsk(q) {
    q = (q || '').trim();
    if (!q) { toast(t('Schreib zuerst, was du üben oder wissen möchtest.')); return; }
    Listen.stop();
    const res = Talk.search(q);
    ask = { q, res };
    // Geschilderte Situationen merken – sie fließen in die Empfehlungen ein
    if (res && (res.dialogs.length || res.words.length || res.lessons.length)) {
      const S = St.S;
      S.situations = (S.situations || []).filter(s => St.norm(s.q) !== St.norm(q));
      S.situations.push({ q, ts: Date.now() });
      if (S.situations.length > 20) S.situations = S.situations.slice(-20);
      St.save();
    }
    render(true);
    const el = document.getElementById('ask-results');
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }

  // „Über mich“ – wird in die Gespräche eingesetzt (bleibt nur auf dem Gerät)
  function profileSheet(done) {
    const P = St.S.profile || {};
    const O = Talk.OPTIONS;
    const label = o => Talk.label(o).replace(/^der /, '').replace(/^den Niederlanden$/, 'Niederlande').replace(/^the Netherlands$/, 'Netherlands');
    const select = (name, list, val) => {
      const known = !val || list.some(([v]) => v === val);
      return `<select name="${name}">
        <option value="" ${val ? '' : 'selected'}>${t('– bitte wählen –')}</option>
        ${list.map(o => { const v = o[0]; return `<option value="${esc(v)}" ${v === val ? 'selected' : ''}>${esc(label(o))}${v.toLowerCase() === label(o).toLowerCase() ? '' : ` – ${esc(v)}`}</option>`; }).join('')}
        <option value="__other" ${known ? '' : 'selected'}>${t('Anderes …')}</option>
      </select>
      <input name="${name}Other" value="${known ? '' : esc(val)}" placeholder="${t('auf Indonesisch oder Deutsch')}" ${known ? 'hidden' : ''}>`;
    };
    let anrede = P.anrede || '';
    openSheet(`
      <div class="sheet-head"><h2>👤 ${t('Über mich')}</h2>${closeBtn()}</div>
      <p class="muted">${t('Diese Angaben setzt die App in die Gespräche ein – so übst du Sätze über <i>dein</i> Leben. Alles ist freiwillig und bleibt nur auf diesem Handy.')}</p>
      <form class="form" id="profile-form" autocomplete="off" novalidate>
        <label>${t('Dein Vorname')}<input name="nama" value="${esc(P.nama || '')}" placeholder="${t('Vorname')}" autocapitalize="words"></label>
        <div>
          <div class="field-label">${t('Wie sprechen dich Leute an?')}</div>
          <div class="seg">${O.anrede.map(o => `<button type="button" class="seg-btn${anrede === o[0] ? ' active' : ''}" data-anrede="${o[0]}">${esc(Talk.label(o).split(' – ')[0])}</button>`).join('')}</div>
          <p class="muted small anrede-hint">${esc(Talk.label(O.anrede.find(a => a[0] === anrede) || O.anrede[2]))}</p>
        </div>
        <label>${t('Woher kommst du?')}${select('asal', O.asal, P.asal)}</label>
        <label>${t('Wo bist du in Indonesien?')}<input name="kota" value="${esc(P.kota || '')}" placeholder="${t('z. B. Bali, Ubud, Jakarta')}" autocapitalize="words"></label>
        <label>${t('Was arbeitest du?')}${select('kerja', O.kerja, P.kerja)}</label>
        <label>${t('Dein liebstes Hobby')}${select('hobi', O.hobi, P.hobi)}</label>
        <div>
          <div class="field-label">${t('Partner(in)')} <small>– ${t('optional, für Gespräche über Familie')}</small></div>
          <div class="two-col">
            <input name="pasangan" value="${esc(P.pasangan || '')}" placeholder="${t('Name')}" autocapitalize="words" aria-label="${t('Name')}">
            <select name="pasanganRel" aria-label="${t('Beziehung')}">${O.pasanganRel.map(o => `<option value="${o[0]}" ${o[0] === (P.pasanganRel || 'pacar') ? 'selected' : ''}>${esc(Talk.label(o))} – ${o[0]}</option>`).join('')}</select>
          </div>
        </div>
        <button class="btn primary block" type="submit">${t('Speichern')}</button>
      </form>`, sheet => {
      const form = sheet.querySelector('#profile-form');
      sheet.querySelectorAll('[data-anrede]').forEach(b => {
        b.onclick = () => {
          anrede = b.dataset.anrede;
          sheet.querySelectorAll('[data-anrede]').forEach(x => x.classList.toggle('active', x === b));
          sheet.querySelector('.anrede-hint').textContent = Talk.label(O.anrede.find(a => a[0] === anrede));
        };
      });
      ['asal', 'kerja', 'hobi'].forEach(n => {
        form[n].onchange = () => {
          const other = form[n + 'Other'];
          other.hidden = form[n].value !== '__other';
          if (!other.hidden) other.focus();
        };
      });
      form.onsubmit = e => {
        e.preventDefault();
        const val = n => form[n].value.trim();
        const pickVal = (n, list) => {
          const v = val(n);
          if (v === '__other') { const o = val(n + 'Other'); return [o, o]; }
          const hit = list.find(([x]) => x === v);
          return hit ? [hit[0], hit[1]] : ['', ''];
        };
        const [asal, asalDe] = pickVal('asal', O.asal);
        const [kerja, kerjaDe] = pickVal('kerja', O.kerja);
        const [hobi, hobiDe] = pickVal('hobi', O.hobi);
        const [pasanganRel, pasanganRelDe] = pickVal('pasanganRel', O.pasanganRel);
        St.S.profile = {
          nama: val('nama'), anrede, asal, asalDe, kota: val('kota'), kerja, kerjaDe, hobi, hobiDe,
          pasangan: val('pasangan'), pasanganRel, pasanganRelDe,
        };
        St.save();
        closeSheet();
        toast(t('Gespeichert – die Gespräche nutzen jetzt deine Angaben.'));
        if (done) done(); else render(true);
      };
    });
  }

  function startDialog(id) {
    const d = (window.DIALOGS || []).find(x => x.id === id);
    if (!d) return;
    enterSession(root => new Talk.DialogRunner(root, {
      dialog: d,
      onExit: () => { exitSession(); render(); },
      onProfile: cb => profileSheet(cb),
    }));
  }

  // ---------- Statistik ----------
  const WD = LANG === 'en' ? ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'] : ['So', 'Mo', 'Di', 'Mi', 'Do', 'Fr', 'Sa'];
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
      ? t('Du liegst genau im Durchschnitt – die Abstände sind Standard.')
      : m > 1 ? t('Du behältst Wörter besser als erwartet – die App plant Wiederholungen <b>{n} % später</b>.', { n: pct })
        : t('Die App wiederholt etwas öfter (<b>{n} % kürzere Abstände</b>), damit nichts verloren geht.', { n: pct });
    const set = S.settings;
    const tempo = set.newMode === 'fixed' ? t('{n} pro Tag (fest eingestellt)', { n: set.newFixed }) : t('{n} heute · passt sich automatisch an', { n: St.plan().target });
    const total = buckets.reduce((a, b) => a + b, 0) || 1;

    return `
      <header class="topbar"><button class="icon-btn" data-act="back" aria-label="${t('Zurück')}">${icon('back', 26)}</button><h1>${t('Statistik')}</h1><span></span></header>
      <section class="stat-grid">
        <div class="tile-stat"><b>${St.streak()}</b><span>${t('Tage Serie')}</span></div>
        <div class="tile-stat"><b>${vc.words}</b><span>${t('Wörter')}</span></div>
        <div class="tile-stat"><b>${vc.sentences}</b><span>${t('Sätze')}</span></div>
        ${totalSecs < 3600
          ? `<div class="tile-stat"><b>${Math.round(totalSecs / 60)}</b><span>${t('Minuten gesamt')}</span></div>`
          : `<div class="tile-stat"><b>${LANG === 'en' ? (totalSecs / 3600).toFixed(1) : (totalSecs / 3600).toFixed(1).replace('.', ',')}</b><span>${t('Stunden gesamt')}</span></div>`}
      </section>

      <section class="card">
        <h3>${t('Behaltensquote (30 Tage)')}</h3>
        <div class="big-num">${r30 ? Math.round(ok30 / r30 * 100) + ' %' : '–'}</div>
        <p class="muted small">${t('Anteil der Wiederholungen, die du gewusst hast. Ziel: über 90 % – die App wiederholt lieber etwas öfter, damit nichts verloren geht.')}</p>
      </section>

      <section class="card">
        <h3>${t('Dein Lerntempo')}</h3>
        <p>${memText}</p>
        <p class="muted small">${t('Neue Wörter')}: ${tempo}</p>
      </section>

      <section class="card">
        <h3>${t('Letzte 14 Tage')}</h3>
        <div class="bars">${days14.map(d => `
          <div class="bar-col" title="${t('{a} neu, {b} wiederholt', { a: d.n, b: d.r })}">
            <div class="bar-stack" style="height:${((d.n + d.r) / max14) * 100}%">
              <i class="b-new" style="flex:${d.n}"></i><i class="b-rev" style="flex:${d.r}"></i>
            </div>
            <span>${d.label}</span>
          </div>`).join('')}</div>
        <div class="legend"><span><i class="b-new"></i>${t('neu')}</span><span><i class="b-rev"></i>${t('wiederholt')}</span></div>
      </section>

      <section class="card">
        <h3>${t('Wiederholungen nächste 7 Tage')}</h3>
        <div class="bars small-bars">${forecast.map((n, i) => `
          <div class="bar-col"><em>${n || ''}</em>
            <div class="bar-stack" style="height:${(n / maxF) * 100}%"><i class="b-rev" style="flex:1"></i></div>
            <span>${i === 0 ? t('heute') : WD[new Date((t0 + i) * St.DAY).getUTCDay()]}</span>
          </div>`).join('')}</div>
      </section>

      <section class="card">
        <h3>${t('Wie gut sitzen deine Wörter?')}</h3>
        <div class="stack-bar">
          <i class="sb0" style="flex:${buckets[0]}"></i><i class="sb1" style="flex:${buckets[1]}"></i><i class="sb2" style="flex:${buckets[2]}"></i><i class="sb3" style="flex:${buckets[3]}"></i>
        </div>
        <div class="legend wrap">
          <span><i class="sb0"></i>${t('im Lernen')} ${buckets[0]}</span>
          <span><i class="sb1"></i>${t('frisch')} ${buckets[1]}</span>
          <span><i class="sb2"></i>${t('gefestigt')} ${buckets[2]}</span>
          <span><i class="sb3"></i>${t('sicher')} ${buckets[3]}</span>
        </div>
        ${total > 1 ? '' : `<p class="muted small">${t('Sobald du lernst, siehst du hier, wie fest deine Wörter sitzen.')}</p>`}
      </section>

      ${hard.length ? `
      <section class="card">
        <h3>${t('Deine Stolpersteine')}</h3>
        <p class="muted small">${t('Diese Wörter vergisst du öfter. Tipp: Denk dir eine Eselsbrücke aus oder bilde einen eigenen Satz damit.')}</p>
        <div class="word-list">${hard.slice(0, 8).map(h => wordRow(St.CARDS[h[0]])).join('')}</div>
      </section>` : ''}`;
  }

  // ---------- Einstellungen ----------
  // Sprache der App: Deutsch oder Englisch (ein Wechsel lädt die App neu, der Lernstand bleibt)
  const langSeg = () => `<div class="seg">${[['de', 'Deutsch'], ['en', 'English']].map(([v, l]) =>
    `<button class="seg-btn${LANG === v ? ' active' : ''}" data-act="lang" data-v="${v}">${l}</button>`).join('')}</div>`;

  function viewSettings() {
    const S = St.S;
    const set = S.settings;
    const seg = (name, val, label) => `<button class="seg-btn${String(set[name]) === String(val) ? ' active' : ''}" data-act="set" data-k="${name}" data-v="${val}">${label}</button>`;
    const toggle = (name, label, sub) => `
      <label class="toggle-row"><span><b>${label}</b>${sub ? `<small>${sub}</small>` : ''}</span>
        <input type="checkbox" data-toggle="${name}" ${set[name] ? 'checked' : ''}><i class="switch"></i></label>`;
    const voices = Speech.voices;
    return `
      <header class="topbar"><button class="icon-btn" data-act="back" aria-label="${t('Zurück')}">${icon('back', 26)}</button><h1>${t('Einstellungen')}</h1><span></span></header>

      <section class="card">
        <h3>${t('Sprache der App')} · ${LANG === 'en' ? 'Sprache' : 'Language'}</h3>
        ${langSeg()}
        <p class="muted small lang-note">${t('Karten, Lektionen, Gespräche und Menüs in dieser Sprache. Dein Lernstand bleibt gleich.')}</p>
      </section>

      <section class="card">
        <h3>${t('Lernzeit pro Tag')}</h3>
        <div class="seg">${[10, 15, 20, 30, 45].map(n => seg('minutes', n, t('{n} Min', { n }))).join('')}</div>
        <h3 class="mt">${t('Neue Wörter pro Tag')}</h3>
        <div class="seg">${seg('newMode', 'auto', t('Automatisch'))}${seg('newMode', 'fixed', t('Feste Anzahl'))}</div>
        ${set.newMode === 'fixed' ? `
          <div class="stepper"><button class="icon-btn" data-act="newfixed" data-v="-1" aria-label="${t('Weniger')}">−</button><b>${set.newFixed}</b><button class="icon-btn" data-act="newfixed" data-v="1" aria-label="${t('Mehr')}">+</button></div>` :
        `<p class="muted small">${t('Die App startet mit {n} neuen Wörtern pro Tag. Lernst du sicher, werden es mehr. Häufen sich Fehler oder Wiederholungen, werden es weniger.', { n: St.baseForMinutes(set.minutes) })}</p>`}
      </section>

      <section class="card">
        <h3>${t('Übungen')}</h3>
        ${toggle('typing', t('Antworten eintippen'), t('Aktives Erinnern – am wirksamsten, aber etwas langsamer'))}
        ${toggle('colloquial', t('Alltagsformen zeigen'), t('z. B. tidak → nggak, sudah → udah'))}
      </section>

      <section class="card">
        <h3>${t('Aussprache')}</h3>
        ${voiceCardHTML()}
        ${toggle('autoplay', t('Automatisch vorlesen'), t('Neue Wörter und Antworten werden vorgesprochen'))}
        <label class="field-row"><span>${t('Sprechtempo')}</span><input type="range" min="0.6" max="1.2" step="0.05" value="${set.rate}" data-range="rate" aria-label="${t('Sprechtempo')}"></label>
        <div class="range-labels"><span>${t('langsamer')}</span><span>${t('schneller')}</span></div>
        ${voices.length > 1 ? `
          <label class="field-row"><span>${t('Stimme')}</span><select data-select="voice">${voices.map(v => `<option value="${esc(v.voiceURI)}" ${v === Speech.current ? 'selected' : ''}>${esc(v.name)}${v.localService ? '' : ' (online)'}</option>`).join('')}</select></label>` : ''}
        ${Speech.supported ? `
          <details class="advanced">
            <summary>${t('Erweitert')}</summary>
            ${manualPickerHTML()}
            <button class="btn ghost block" data-act="voice-help">${t('Einrichtungs-Assistent öffnen')}</button>
          </details>` : ''}
      </section>

      <section class="card">
        <h3>${t('Tägliche Erinnerung')}</h3>
        <p class="muted small">${t('Eine feste Zeit hilft enorm, dranzubleiben. Lege dir einen täglichen Kalendertermin an.')}</p>
        <div class="btn-row">
          <input type="time" value="${esc(set.reminder)}" data-time="reminder" aria-label="${t('Uhrzeit')}">
          <button class="btn ghost" data-act="reminder">${icon('bell', 18)} ${t('In Kalender eintragen')}</button>
        </div>
        <p class="muted small">${t('Alternativ: eine tägliche Erinnerung in der Uhr- oder Erinnerungen-App deines Handys.')}</p>
      </section>

      <section class="card">
        <h3>${t('Datensicherung')}</h3>
        <p class="muted small">${t('Dein Fortschritt ist nur auf diesem Gerät gespeichert. Sichere ihn ab und zu – z. B. vor einem Handywechsel.')}</p>
        <div class="btn-row">
          <button class="btn ghost" data-act="export">${icon('download', 18)} ${t('Sichern')}</button>
          <button class="btn ghost" data-act="import">${icon('upload', 18)} ${t('Wiederherstellen')}</button>
          <input type="file" accept="application/json,.json" id="import-file" hidden>
        </div>
      </section>

      <section class="card">
        <h3>${t('App installieren')}</h3>
        <button class="btn ghost block" data-act="install-help">${t('Anleitung für iPhone & Android')}</button>
      </section>

      <section class="card">
        <details>
          <summary><b>${t('So lernst du mit dieser App')}</b></summary>
          <div class="method">
            <p>${t('<b>Verteilte Wiederholung:</b> Jedes Wort hat ein eigenes „Gedächtnis-Modell“. Die App zeigt es dir genau dann wieder, wenn du es sonst bald vergessen würdest. Gekonnte Wörter kommen in immer größeren Abständen (Tage → Wochen → Monate), vergessene schon am nächsten Tag.')}</p>
            <p>${t('<b>Aktives Erinnern:</b> Statt nur zu lesen, holst du die Antwort selbst aus dem Gedächtnis – vom Wiedererkennen über Hören bis zum Eintippen und Sätze-Bauen. Je sicherer ein Wort sitzt, desto schwieriger die Übung.')}</p>
            <p>${t('<b>Anpassung an dich:</b> Die App vergleicht, wie oft du dich erinnerst, mit der Vorhersage, und stellt die Abstände für dich persönlich ein. Die Zahl neuer Wörter richtet sich nach deiner Trefferquote und deiner Tageszeit.')}</p>
            <p>${t('<b>Häufigstes zuerst:</b> Der Kurs beginnt mit den Wörtern und Sätzen, die man im Alltag am meisten braucht. Die Grammatik kommt in kleinen Portionen, genau dann, wenn sie im Kurs auftaucht.')}</p>
            <p>${t('<b>Tipps:</b> Lerne jeden Tag, lieber kurz als selten lang. Sprich alles laut nach. Sei ehrlich beim Wischen. Und nutze das Gelernte – schreib Freunden auf Indonesisch!')}</p>
          </div>
        </details>
      </section>

      <section class="card danger-zone">
        <h3>${t('Zurücksetzen')}</h3>
        <button class="btn danger block" data-act="reset-all">${t('Gesamten Fortschritt löschen')}</button>
      </section>
      <p class="muted small center">${t('Bahasa · Indonesisch lernen · {n} Lernkarten', { n: St.ORDER.length })}</p>`;
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
        if (!confirm(t('Aktuellen Fortschritt durch die Sicherung ersetzen?'))) return;
        try {
          St.importData(text);
          // Sicherung in der anderen Sprache? Dann App in dieser Sprache neu laden
          if (St.S.settings.lang && St.S.settings.lang !== LANG) { location.reload(); return; }
          toast(t('Fortschritt wiederhergestellt.'));
          render();
        } catch (e) { toast(t('Diese Datei ist keine gültige Sicherung.')); }
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
      'DURATION:PT15M', 'RRULE:FREQ=DAILY', 'SUMMARY:' + t('Indonesisch lernen') + ' 🇮🇩',
      'DESCRIPTION:' + t('Zeit für deine tägliche Lerneinheit. Sampai jumpa!'),
      'BEGIN:VALARM', 'ACTION:DISPLAY', 'DESCRIPTION:' + t('Indonesisch lernen'), 'TRIGGER:PT0M', 'END:VALARM',
      'END:VEVENT', 'END:VCALENDAR',
    ].join('\r\n');
  }

  // ---------- Hilfe-Blätter ----------
  function installSheet() {
    const canPrompt = !!installEvent;
    openSheet(`
      <div class="sheet-head"><h2>${t('App installieren')}</h2>${closeBtn()}</div>
      ${standalone() ? `<p>✅ ${t('Die App ist bereits installiert.')}</p>` : ''}
      ${canPrompt ? `<button class="btn primary block" data-act="install-now">${t('Jetzt installieren')}</button>` : ''}
      <h3>iPhone (Safari)</h3>
      <ol class="steps">
        <li>${t('Diese Seite in <b>Safari</b> öffnen.')}</li>
        <li>${t('Unten auf das <b>Teilen-Symbol</b> tippen (Quadrat mit Pfeil nach oben).')}</li>
        <li>${t('<b>„Zum Home-Bildschirm“</b> wählen (evtl. etwas nach unten scrollen) und <b>Hinzufügen</b> tippen.')}</li>
        <li>${t('Ab jetzt die App über das neue Symbol starten.')}</li>
      </ol>
      <h3>Android (Chrome)</h3>
      <ol class="steps">
        <li>${t('Diese Seite in <b>Chrome</b> öffnen.')}</li>
        <li>${t('Oben rechts auf <b>⋮</b> tippen.')}</li>
        <li>${t('<b>„App installieren“</b> oder <b>„Zum Startbildschirm hinzufügen“</b> wählen.')}</li>
      </ol>
      <p class="muted small">${t('Nach dem ersten Öffnen funktioniert die App auch ohne Internet.')}</p>`);
  }

  // ---------- Aussprache einrichten ----------
  // Statuskarte in den Einstellungen: entweder „bereit" mit Probe oder „einrichten" mit Knopf
  function voiceCardHTML() {
    const set = St.S.settings;
    const step = St.S.ui.voiceStep || 0;
    if (!Speech.supported) {
      return `<div class="voice-card warn"><span class="vc-ic">🔇</span><span class="grow"><b>${t('Vorlesen nicht möglich')}</b>
        <span>${t('Öffne die App in Chrome (Android) oder Safari (iPhone).')}</span></span></div>`;
    }
    if (Speech.available) {
      const v = Speech.current;
      return `<div class="voice-card ok"><span class="vc-ic">🔊</span><span class="grow"><b>${t('Aussprache bereit')}</b>
        <span>${t('Stimme')}: ${esc(v.name)}${v.localService ? '' : ' · ' + t('braucht Internet')}${set.voiceManual ? ' · ' + t('von Hand gewählt') : ''}</span></span>
        <button class="btn ghost sm" data-act="test-voice">${t('Probe')}</button></div>
        ${set.voiceManual ? `<button class="link-btn" data-act="voice-reset">${t('Stimme wieder automatisch wählen')}</button>` : ''}`;
    }
    if (Speech.missing) {
      return `<div class="voice-card warn"><span class="vc-ic">🔈</span><span class="grow"><b>${t('Aussprache einrichten')}</b>
        <span>${step ? t('Weiter bei Schritt {n}', { n: step + 1 }) : t('Einmalig, ca. 2 Minuten')}</span></span>
        <button class="btn primary sm" data-act="voice-help">${step ? t('Weiter') : t('Einrichten')}</button></div>`;
    }
    return `<div class="voice-card"><span class="vc-ic">⏳</span><span class="grow"><b>${t('Stimmen werden gesucht …')}</b></span></div>`;
  }

  // Notlösung: Stimme von Hand wählen, falls eine installierte Stimme nicht erkannt wird
  function manualPickerHTML() {
    if (!Speech.all.length) return '';
    return `
      <label class="field-row"><span>${t('Stimme von Hand')}</span><select data-select="manual"><option value="">${t('– wählen –')}</option>${Speech.all.map(v =>
        `<option value="${esc(v.voiceURI)}">${esc(v.name)} (${esc(v.lang)})</option>`).join('')}</select></label>
      <p class="muted small">${t('Nur nötig, wenn deine indonesische Stimme installiert ist, aber nicht erkannt wird.')}</p>`;
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
        <div class="sheet-head"><h2>${t('Aussprache')}</h2>${closeBtn()}</div>
        <div class="wiz">
          <div class="wiz-icon">✅</div>
          <h3>${t('Aussprache ist bereit')}</h3>
          <p>${t('Die App liest mit der Stimme <b>{v}</b> vor', { v: esc(v.name) })}${v.localService ? t(' – auch ohne Internet') : t(' (braucht Internet)')}.</p>
          <button class="btn primary block" data-act="test-voice">${icon('speaker', 18)} ${t('Probe hören')}</button>
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
      <div class="sheet-head"><h2>${t('Aussprache einrichten')}</h2>${closeBtn()}</div>
      <div class="dots" aria-hidden="true">${steps.map((_, k) => `<i class="${k < i ? 'done' : k === i ? 'on' : ''}"></i>`).join('')}</div>
      ${notFound ? `<div class="callout">${t('Noch keine indonesische Stimme gefunden. Meist hilft es, Chrome ganz zu schließen und die App neu zu öffnen. Prüfe sonst die Schritte davor.')}</div>` : ''}
      <div class="wiz">
        <div class="wiz-icon">${s.icon}</div>
        <div class="wiz-step">${t('Schritt {n} von {m}', { n: i + 1, m: steps.length })}</div>
        <h3>${t(s.title)}</h3>
        <p>${t(s.text)}</p>
        ${s.link ? `<a class="btn ghost block" href="${s.link[1]}" target="_blank" rel="noopener">${t(s.link[0])}</a>` : ''}
      </div>
      <div class="wiz-nav">
        ${i > 0 ? `<button class="btn ghost" data-act="voice-step" data-v="${i - 1}">${t('Zurück')}</button>` : '<span></span>'}
        ${s.check ? `<button class="btn primary" data-act="voice-recheck">${t('Jetzt prüfen')}</button>`
          : `<button class="btn primary" data-act="voice-step" data-v="${i + 1}">${t('Erledigt – weiter')}</button>`}
      </div>
      <div class="wiz-extra">
        ${s.check ? '' : `<button class="link-btn" data-act="voice-recheck">${t('Stimme schon installiert? Jetzt prüfen')}</button>`}
        ${Speech.all.length ? `<details class="advanced"><summary>${t('Stimme wird nicht erkannt?')}</summary>${manualPickerHTML()}</details>` : ''}
      </div>`, sheet => bindManualPicker(sheet));
  }

  // ---------- Sheet (Bottom-Sheet-Dialog) ----------
  const closeBtn = () => `<button class="icon-btn" data-act="close-sheet" aria-label="${t('Schließen')}">${icon('x', 22)}</button>`;
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
      toast(info.courseDone ? t('Alle Lektionen sind geschafft!') : t('Die Lektion für heute ist erledigt.'));
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
      if (St.weakWordIds(3).length < 3) { toast(t('Lerne zuerst ein paar Wörter.')); return; }
    } else {
      const p = St.planInfo();
      if (!(p.wordDue + p.tLearning + p.tNew)) { toast(t('Gerade ist keine Karte fällig.')); render(true); return; }
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
    if (SUBPAGES.includes(tab)) { tab = 'home'; render(); }
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
      case 'back': if (history.state && SUBPAGES.includes(history.state.v)) history.back(); else { tab = 'home'; render(); } break;
      case 'dialog': startDialog(v); break;
      case 'profile': profileSheet(); break;
      case 'ask': ask.q = v; runAsk(v); break;
      case 'ask-clear': ask = { q: '', res: undefined }; render(true); break;
      case 'lang':
        if (v !== LANG) { S.settings.lang = v; St.save(); location.reload(); }
        break;
      case 'start': startSession(); break;
      case 'more': St.addExtraNew(5); startSession(); break;
      case 'trainer': startTrainer('due'); break;
      case 'extra': startTrainer('extra'); break;
      case 'pull':
        St.pullToTrainer(a.dataset.id);
        closeSheet();
        toast(t('Kommt im nächsten Trainer-Durchgang.'));
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
        if (!Speech.supported) toast(t('Dieser Browser kann nicht vorlesen.'));
        else if (Speech.missing) { toast(t('Noch keine indonesische Stimme gefunden.')); if (!document.querySelector('.sheet-backdrop')) voiceSheet(); }
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
      case 'reminder': saveFile(LANG === 'en' ? 'indonesian-reminder.ics' : 'indonesisch-erinnerung.ics', reminderICS(), 'text/calendar'); break;
      case 'export': {
        const d = new Date();
        const name = `${LANG === 'en' ? 'indonesian-backup' : 'indonesisch-sicherung'}-${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, '0')}-${String(d.getDate()).padStart(2, '0')}.json`;
        saveFile(name, St.exportData(), 'application/json');
        break;
      }
      case 'import': document.getElementById('import-file').click(); break;
      case 'reset-all':
        if (confirm(t('Wirklich den gesamten Fortschritt löschen? Das kann nicht rückgängig gemacht werden.')) &&
          confirm(t('Ganz sicher? Alle gelernten Wörter und die Statistik werden gelöscht.'))) {
          St.resetAll();
          tab = 'home';
          render();
          toast(t('Fortschritt gelöscht.'));
        }
        break;
      case 'reset-card':
        if (confirm(t('Dieses Wort wieder als neu behandeln?'))) {
          St.resetCard(a.dataset.id);
          closeSheet();
          render(true);
        }
        break;
      case 'delete-custom':
        if (confirm(t('Dieses Wort löschen?'))) {
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
    toast(t('Keine indonesische Stimme – Anleitung unter Einstellungen → Aussprache.'));
  };
  let voiceState = '';
  Speech.listeners.push(() => {
    document.body.classList.toggle('no-voice', Speech.missing);
    // Assistent lief und die Stimme ist jetzt da → Erfolg melden
    if (St.S.ui.voiceWizard && Speech.available) {
      St.S.ui.voiceWizard = false;
      St.S.ui.voiceStep = 0;
      St.save();
      toast(t('✅ Indonesische Stimme gefunden – die Aussprache ist bereit!'));
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
