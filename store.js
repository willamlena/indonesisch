// Datenhaltung: Kursaufbau aus vocab.js, Lernstand im localStorage des Handys,
// Tagesplanung und Anpassung an das persönliche Lerntempo.
(function () {
  const KEY = 'bahasa-indonesisch.v1';
  const DAY = 86400000;
  const ROLLOVER_H = 4; // ein Lerntag beginnt um 4 Uhr früh – Nachteulen zählen noch zum Vortag
  const { norm, t } = window.U;

  function hash(s) {
    let h = 5381;
    for (let i = 0; i < s.length; i++) h = ((h << 5) + h + s.charCodeAt(i)) | 0;
    return (h >>> 0).toString(36);
  }
  const slug = s => s.toLowerCase().normalize('NFD').replace(/[̀-ͯ]/g, '')
    .replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');

  // ---------- Kurs ----------
  const CARDS = {};   // id → Karte
  const ORDER = [];   // Lernreihenfolge aller Kurskarten
  const UNITS = [];
  const seen = new Set();

  window.COURSE.forEach((u, ui) => {
    const words = [], sents = [];
    u.items.split('\n').forEach(raw => {
      const line = raw.trim();
      if (!line || line.startsWith('#')) return;
      if (line.startsWith('>')) {
        const [indo, de, note] = line.slice(1).split('|').map(s => (s || '').trim());
        const k = 's:' + indo.toLowerCase();
        if (seen.has(k)) return;
        seen.add(k);
        sents.push({ id: `${u.key}:s${hash(indo)}`, unit: ui, kind: 's', indo, de, note: note || '' });
      } else {
        const [indo, de, coll, ex, exde, note] = line.split('|').map(s => (s || '').trim());
        const k = 'w:' + indo.toLowerCase();
        if (seen.has(k)) return;
        seen.add(k);
        words.push({ id: `${u.key}:${slug(indo)}`, unit: ui, kind: 'w', indo, de, coll: coll || '', ex: ex || '', exde: exde || '', note: note || '' });
      }
    });
    // Nach je vier Wörtern ein Übungssatz, damit Grammatik früh im Zusammenhang auftaucht
    const ids = [];
    let si = 0;
    words.forEach((w, i) => {
      ids.push(w.id);
      if ((i + 1) % 4 === 0 && si < sents.length) ids.push(sents[si++].id);
    });
    while (si < sents.length) ids.push(sents[si++].id);
    words.concat(sents).forEach(c => { CARDS[c.id] = c; });
    ORDER.push(...ids);
    UNITS.push({ index: ui, key: u.key, level: u.level || 1, title: u.title, icon: u.icon, lesson: u.lesson || null, ids });
  });
  const CUSTOM = -1; // „Einheit" für eigene Wörter

  // Alle akzeptierten Schreibweisen einer Karte
  function answersFor(card) {
    const list = card.indo.split(' / ');
    if (card.kind === 'w' && card.coll) list.push(...card.coll.split(' / '));
    return list.map(s => s.trim()).filter(Boolean);
  }

  // ---------- Zustand ----------
  const BASE_BY_MINUTES = { 10: 7, 15: 10, 20: 13, 30: 18, 45: 25 };

  const defaults = () => ({
    v: 1,
    created: Date.now(),
    settings: {
      minutes: 15, newMode: 'auto', newFixed: 10,
      colloquial: true, autoplay: true, typing: true,
      rate: 0.9, voice: '', reminder: '19:00',
      handsFree: false, dialogDe: false,
      lang: window.U.LANG, // Sprache der App: 'de' oder 'en'
    },
    learner: { m: 1, base: 10 },
    cards: {}, days: {}, lessons: {}, custom: [], log: [],
    pull: [], // Kurswörter, die vorzeitig in den Vokabeltrainer geholt wurden
    profile: {},     // „Über mich“ – wird in die Gespräche eingesetzt
    dialogs: {},     // Ergebnisse im Gesprächstrainer: id → {n, best, last, ts}
    situations: [],  // geschilderte Situationen / Fragen: [{q, ts}]
    plan: null,
    ui: {},
  });

  let S;
  function load() {
    let saved = null;
    try { saved = JSON.parse(localStorage.getItem(KEY) || 'null'); } catch (e) { saved = null; }
    S = defaults();
    if (saved && saved.v === 1) {
      Object.assign(S, saved);
      S.settings = Object.assign(defaults().settings, saved.settings);
      S.learner = Object.assign(defaults().learner, saved.learner);
      S.ui = saved.ui || {};
    }
    S.custom.forEach(registerCustom);
  }
  function save() {
    try { localStorage.setItem(KEY, JSON.stringify(S)); }
    catch (e) { window.U.toast(t('Speichern fehlgeschlagen – ist der Speicher voll?')); }
  }

  // pos = Wortart für automatische Beispielsätze: n = Ding, v = Tätigkeit, a = Eigenschaft, x = Ausdruck
  function registerCustom(c) {
    CARDS[c.id] = { id: c.id, unit: CUSTOM, kind: 'w', indo: c.indo, de: c.de, coll: '', ex: c.ex || '', exde: c.exde || '', note: c.note || '', pos: c.pos || 'x', custom: true };
  }
  function addCustom(indo, de, ex, exde, pos) {
    const c = { id: 'c:' + Date.now().toString(36), indo, de, ex, exde, pos, created: Date.now() };
    S.custom.push(c);
    registerCustom(c);
    save();
    return c;
  }
  function updateCustom(id, fields) {
    const c = S.custom.find(x => x.id === id);
    if (!c) return;
    Object.assign(c, fields);
    registerCustom(c);
    save();
  }
  function removeCustom(id) {
    S.custom = S.custom.filter(c => c.id !== id);
    delete S.cards[id];
    delete CARDS[id];
    save();
  }
  const customIds = () => S.custom.map(c => c.id);

  // ---------- Tage ----------
  function dayNum(ts) {
    const d = new Date((ts || Date.now()) - ROLLOVER_H * 3600e3);
    return Math.round(Date.UTC(d.getFullYear(), d.getMonth(), d.getDate()) / DAY);
  }
  const today = () => dayNum();
  // r = Wiederholungen, ok = davon gewusst, n = neu in Lektionen, tn = neu im Trainer,
  // k = „kenne ich schon", le = Fehler beim Kennenlernen, t = Sekunden, x = Antworten insgesamt
  const EMPTY_DAY = Object.freeze({ r: 0, ok: 0, n: 0, tn: 0, k: 0, le: 0, t: 0, x: 0 });
  function day(n) {
    const k = n == null ? today() : n;
    if (!S.days[k]) S.days[k] = { r: 0, ok: 0, n: 0, tn: 0, k: 0, le: 0, t: 0, x: 0 };
    return S.days[k];
  }
  const dayRead = n => S.days[n == null ? today() : n] || EMPTY_DAY;

  // ---------- Abfragen ----------
  function dueIds(n) {
    const t = n == null ? today() : n;
    const now = Date.now();
    return Object.keys(S.cards)
      .filter(id => S.cards[id].st === 'R' && S.cards[id].due <= t && CARDS[id])
      .map(id => [id, Srs.currentRecall(S.cards[id], now, S.learner.m)])
      .sort((a, b) => a[1] - b[1]) // was am ehesten vergessen wird, zuerst
      .map(x => x[0]);
  }
  const dueWordIds = () => dueIds().filter(id => CARDS[id].kind === 'w');
  const dueSentenceIds = () => dueIds().filter(id => CARDS[id].kind === 's');

  // Karten im Lernen. src: 'lesson' = in einer Lektion eingeführt, 'trainer' = im Vokabeltrainer
  function learningIds(src) {
    return Object.keys(S.cards).filter(id => {
      const c = S.cards[id];
      if (c.st !== 'L' || !CARDS[id]) return false;
      if (src === 'trainer') return c.src === 't';
      if (src === 'lesson') return c.src !== 't';
      return true;
    });
  }

  // Nächste neue Kurskarten für die Lektion
  function nextNewIds(n, exclude) {
    const ex = exclude || new Set();
    const out = [];
    for (const id of ORDER) {
      if (out.length >= n) break;
      if (!S.cards[id] && !ex.has(id) && !S.pull.includes(id)) out.push(id);
    }
    return out;
  }

  // Neue Karten für den Vokabeltrainer: eigene Wörter und vorgezogene Kurswörter
  function trainerNewIds() {
    return S.custom.map(c => c.id).concat(S.pull).filter(id => CARDS[id] && !S.cards[id]);
  }
  function pullToTrainer(id) {
    if (!S.pull.includes(id)) S.pull.push(id);
    save();
  }

  function currentUnit() {
    const next = ORDER.find(id => !S.cards[id]);
    return next ? UNITS[CARDS[next].unit] : UNITS[UNITS.length - 1];
  }
  function unitProgress(u) {
    const done = u.ids.filter(id => S.cards[id]).length;
    return { done, total: u.ids.length };
  }

  // Durchschnittliche Sekunden pro Antwort (letzte 14 Tage)
  function avgSecs() {
    let t = 0, x = 0;
    const d0 = today();
    for (let i = 0; i < 14; i++) { const d = dayRead(d0 - i); t += d.t; x += d.x; }
    return x >= 20 ? Math.min(40, Math.max(5, t / x)) : 12;
  }
  // Trefferquote bei Wiederholungen (erste Antwort) der letzten n Tage
  function recentAccuracy(days, minCount) {
    let r = 0, ok = 0;
    const d0 = today();
    for (let i = 0; i < days; i++) { const d = dayRead(d0 - i); r += d.r; ok += d.ok; }
    return r >= (minCount || 15) ? ok / r : null;
  }

  // ---------- Tagesplan & Anpassung ans Tempo ----------
  function baseForMinutes(min) { return BASE_BY_MINUTES[min] || Math.round(min * 0.65); }

  // Einmal pro Tag: Basis für neue Wörter nachjustieren – anhand der Trefferquote bei
  // Wiederholungen und der Fehler beim Kennenlernen neuer Wörter am letzten Lerntag.
  function adaptBase() {
    const prev = S.plan;
    if (!prev) return;
    const pd = dayRead(prev.day);
    if (!pd.x) return; // nur nach echten Lerntagen
    const acc = recentAccuracy(7, 20);
    const learnErr = pd.n >= 3 ? (pd.le || 0) / pd.n : null;
    const cap = Math.round(baseForMinutes(S.settings.minutes) * 1.6);
    if ((acc != null && acc < 0.78) || (learnErr != null && learnErr > 0.8)) {
      S.learner.base = Math.max(3, S.learner.base - 1);
    } else if (acc != null && acc >= 0.88 && pd.n >= prev.target && (learnErr == null || learnErr < 0.35)) {
      S.learner.base = Math.min(cap, S.learner.base + 1);
    }
  }

  function computeTarget() {
    const set = S.settings;
    if (set.newMode === 'fixed') return set.newFixed;
    const avg = avgSecs();
    const due = dueIds().length + learningIds().length;
    const budget = set.minutes * 60;
    const fit = Math.floor((budget - due * avg) / (avg * 3.5)); // neue Karte ≈ Einführung + 2 Tests
    const acc = recentAccuracy(7);
    const factor = acc == null ? 1 : acc < 0.7 ? 0.5 : acc < 0.8 ? 0.75 : 1;
    const target = Math.min(Math.round(S.learner.base * factor), Math.max(fit, 3));
    return Math.max(2, Math.min(30, target));
  }

  function plan() {
    const t = today();
    if (!S.plan || S.plan.day !== t) {
      adaptBase();
      S.plan = { day: t, target: computeTarget(), extra: 0 };
      save();
    }
    return S.plan;
  }
  function addExtraNew(n) { plan().extra += n; save(); }

  // Tagesübersicht. Lektion = neue Wörter, Lernschritte, Satz-Wiederholungen.
  // Vokabeltrainer = fällige Wörter, eigene/vorgezogene neue Wörter.
  function planInfo() {
    const p = plan();
    const d = dayRead();
    const target = p.target + p.extra;
    const available = nextNewIds(target).length;
    const newLeft = Math.min(Math.max(0, target - d.n), available);
    const due = dueIds();
    const wordDue = due.filter(id => CARDS[id].kind === 'w').length;
    const sentDue = due.length - wordDue;
    const learning = learningIds('lesson').length;
    const tLearning = learningIds('trainer').length;
    const tNew = trainerNewIds().length;
    const avg = avgSecs();
    const lessonLeft = newLeft + learning + sentDue;
    const trainerLeft = wordDue + tLearning + tNew;
    const minutes = Math.max(1, Math.ceil((due.length * avg + (learning + tLearning) * avg * 2 + (newLeft + tNew) * avg * 3.5) / 60));
    const doneUnits = d.r + d.n + (d.tn || 0);
    const total = doneUnits + lessonLeft + trainerLeft;
    return {
      target, newDone: d.n, newLeft, sentDue, wordDue, learning, tLearning, tNew, minutes,
      due: due.length, reviewsDone: d.r, progress: total ? doneUnits / total : 1,
      lessonDone: lessonLeft === 0, trainerDone: trainerLeft === 0,
      done: lessonLeft === 0 && trainerLeft === 0,
      courseDone: nextNewIds(1).length === 0,
    };
  }

  // ---------- Lernvorgänge ----------
  function log(id, g, r) {
    S.log.push([Math.round(Date.now() / 1000), id, g, Math.round(r * 100)]);
    if (S.log.length > 1500) S.log.splice(0, S.log.length - 1500);
  }

  function introduce(id, src) {
    S.cards[id] = { st: 'L', err: 0, step: 0, intro: Date.now() };
    if (src === 'trainer') { S.cards[id].src = 't'; day().tn++; }
    else day().n++;
  }
  function graduate(id, g) {
    const prev = S.cards[id] || {};
    S.cards[id] = Object.assign(Srs.graduate(g, Date.now(), S.learner.m, today()), { intro: prev.intro || Date.now() });
  }
  function markKnown(id) {
    graduate(id, 4);
    day().k++;
  }
  function applyReview(id, g) {
    const before = S.cards[id];
    const now = Date.now();
    const { card, r } = Srs.review(before, g, now, S.learner.m, today());
    S.cards[id] = card;
    S.learner.m = Srs.updateMemoryFactor(S.learner.m, g > 1, r);
    const d = day();
    d.r++;
    if (g > 1) d.ok++;
    log(id, g, r);
    return { before, now };
  }
  // „War leicht": gleiche Wiederholung mit besserer Note neu berechnen
  function reapplyReview(id, before, now, g) {
    S.cards[id] = Srs.review(before, g, now, S.learner.m, today()).card;
    const last = S.log[S.log.length - 1];
    if (last && last[1] === id) last[2] = g;
  }
  function resetCard(id) { delete S.cards[id]; save(); }

  // Gelernte Wörter, die am ehesten vergessen werden (für die Extra-Runde)
  function weakWordIds(n) {
    const now = Date.now();
    return Object.keys(S.cards)
      .filter(id => S.cards[id].st === 'R' && CARDS[id] && CARDS[id].kind === 'w')
      .map(id => [id, Srs.currentRecall(S.cards[id], now, S.learner.m) - (S.cards[id].lapses || 0) * 0.05])
      .sort((a, b) => a[1] - b[1])
      .slice(0, n)
      .map(x => x[0]);
  }

// ---------- Extra-Runden: stufenweise durch alle bisherigen Wörter ----------
// Durchgang 1: Wörter mit 1–2 Balken und oft vergessene · 2: dazu 3 Balken · 3: alle.
// Kein Wort kommt doppelt, bis ein Durchgang fertig ist; danach beginnt es wieder bei 1.
const EXTRA_STAGES = 3;
function extraState() {
  if (!S.extra || !S.extra.stage) S.extra = { stage: 1, done: [] };
  return S.extra;
}
function inExtraStage(id, stage) {
  const st = strength(id);
  if (stage >= 3) return true;
  if (st <= 2 || (S.cards[id].lapses || 0) >= 2) return true;
  return stage >= 2 && st === 3;
}
function extraLeft() {
  const ex = extraState();
  const done = new Set(ex.done);
  return Object.keys(S.cards).filter(id => CARDS[id] && CARDS[id].kind === 'w' && inExtraStage(id, ex.stage) && !done.has(id));
}
// Die nächsten n Wörter (die schwächsten zuerst); ist ein Durchgang leer, geht es zur nächsten Stufe
function extraIds(n) {
  const ex = extraState();
  const now = Date.now();
  const weak = id => (S.cards[id].st === 'R' ? Srs.currentRecall(S.cards[id], now, S.learner.m) : 0) - (S.cards[id].lapses || 0) * 0.05;
  for (let i = 0; i <= EXTRA_STAGES; i++) {
    const pool = extraLeft();
    if (pool.length) return pool.sort((a, b) => weak(a) - weak(b)).slice(0, n);
    ex.stage = ex.stage >= EXTRA_STAGES ? 1 : ex.stage + 1;
    ex.done = [];
  }
  return [];
}
function extraDone(id) {
  const ex = extraState();
  if (!ex.done.includes(id)) ex.done.push(id);
}
function extraInfo() {
  const ex = extraState();
  return { stage: ex.stage, stages: EXTRA_STAGES, left: extraLeft().length };
}
// In der Extra-Runde nicht gewusst: kommt auch im normalen Trainer bald wieder
// (der persönliche Gedächtnis-Faktor bleibt unberührt – es war ja eine vorgezogene Übung)
function extraForgot(id) {
  const c = S.cards[id];
  if (!c || c.st !== 'R') return;
  S.cards[id] = Srs.review(c, 1, Date.now(), S.learner.m, today()).card;
}

// ---------- Auswertung ----------
  function streak() {
    let n = 0;
    let d = today();
    if (!dayRead(d).x) d--; // heute noch nicht gelernt: Serie zählt bis gestern
    while (dayRead(d).x > 0) { n++; d--; }
    return n;
  }
  function strength(id) {
    const c = S.cards[id];
    if (!c) return 0;
    if (c.st === 'L') return 1;
    if (c.s < 4) return 2;
    if (c.s < 21) return 3;
    return 4;
  }
  function vocabCount() {
    let words = 0, sentences = 0;
    for (const id in S.cards) {
      const c = CARDS[id];
      if (!c || S.cards[id].st !== 'R') continue;
      if (c.kind === 's') sentences++; else words++;
    }
    return { words, sentences };
  }
  function level(words) {
    if (words < 80) return { code: 'A0', name: t('Einstieg') };
    if (words < 300) return { code: 'A1', name: t('Grundlagen') };
    if (words < 700) return { code: 'A2', name: t('Alltag') };
    if (words < 1200) return { code: 'B1', name: t('Selbstständig') };
    if (words < 1650) return { code: 'B1+', name: t('Fortgeschritten') };
    return { code: 'B2', name: t('Sicher unterwegs') };
  }

  // Fortschritt pro Level (1 = Grundlagen, 2 = Fortgeschritten)
  function levelProgress(lv) {
    let done = 0, total = 0;
    UNITS.filter(u => u.level === lv).forEach(u => { total += u.ids.length; done += u.ids.filter(id => S.cards[id]).length; });
    return { done, total };
  }

  function exportData() { return JSON.stringify(S); }
  function importData(text) {
    const data = JSON.parse(text);
    if (!data || data.v !== 1 || typeof data.cards !== 'object') throw new Error('Keine gültige Sicherung');
    localStorage.setItem(KEY, JSON.stringify(data));
    load();
  }
  function resetAll() { localStorage.removeItem(KEY); load(); }

  load();

  window.Store = {
    get S() { return S; },
    CARDS, ORDER, UNITS, CUSTOM, DAY,
    answersFor, norm,
    save, load, addCustom, updateCustom, removeCustom, customIds,
    today, dayNum, day, dayRead,
    dueIds, dueWordIds, dueSentenceIds, learningIds, nextNewIds, trainerNewIds, pullToTrainer,
    currentUnit, unitProgress,
    avgSecs, recentAccuracy, plan, planInfo, addExtraNew, baseForMinutes,
    introduce, graduate, markKnown, applyReview, reapplyReview, resetCard, weakWordIds,
    extraIds, extraDone, extraInfo, extraForgot,
    streak, strength, vocabCount, level, levelProgress,
    exportData, importData, resetAll,
  };
})();
