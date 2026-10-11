// Wiederholungsplanung nach FSRS-4.5 (Free Spaced Repetition Scheduler).
//
// Jede Karte hat eine Stabilität s (Tage, bis die Erinnerung auf 90 % gefallen ist)
// und eine Schwierigkeit d (1–10). Gekonnte Karten bekommen längere Abstände,
// vergessene kürzere. Dazu kommt ein persönlicher Gedächtnis-Faktor m, der aus den
// echten Antworten lernt: Erinnerst du dich öfter als vorhergesagt, werden alle
// Abstände länger – vergisst du öfter, kürzer.
(function () {
  const W = [0.4872, 1.4003, 3.7145, 13.8206, 5.1618, 1.2298, 0.8975, 0.031, 1.6474,
    0.1367, 1.0461, 2.1072, 0.0793, 0.3246, 1.587, 0.2272, 2.8755];
  const DECAY = -0.5;
  const FACTOR = Math.pow(0.9, 1 / DECAY) - 1; // = 19/81
  const TARGET = 0.9;                          // angestrebte Erinnerungsquote
  const DAY = 86400000;
  const MAX_INTERVAL = 365;

  // Startstabilität (Tage) für frisch gelernte Karten, je nach Note.
  // Bewusst kürzer als die FSRS-Vorgabe: neue Wörter sollen bald wiederkommen.
  const START = { 1: 0.6, 2: 1.2, 3: 2, 4: 8 };

  const clamp = (x, lo, hi) => Math.min(hi, Math.max(lo, x));

  function retrievability(elapsedDays, s) {
    return Math.pow(1 + FACTOR * elapsedDays / s, DECAY);
  }

  function initDifficulty(g) { return clamp(W[4] - (g - 3) * W[5], 1, 10); }

  function nextDifficulty(d, g) {
    const d1 = d - W[6] * (g - 3);
    return clamp(W[7] * initDifficulty(3) + (1 - W[7]) * d1, 1, 10);
  }

  function recallStability(d, s, r, g) {
    const hard = g === 2 ? W[15] : 1;
    const easy = g === 4 ? W[16] : 1;
    return s * (1 + Math.exp(W[8]) * (11 - d) * Math.pow(s, -W[9]) *
      (Math.exp((1 - r) * W[10]) - 1) * hard * easy);
  }

  function lapseStability(d, s, r) {
    const sf = W[11] * Math.pow(d, -W[12]) * (Math.pow(s + 1, W[13]) - 1) * Math.exp((1 - r) * W[14]);
    return Math.min(s, sf);
  }

  // Abstand in Tagen für Stabilität s und Gedächtnis-Faktor m
  function interval(s, m) {
    const raw = s * m / FACTOR * (Math.pow(TARGET, 1 / DECAY) - 1);
    let days = raw;
    if (raw >= 3) days = raw * (0.95 + Math.random() * 0.1); // streuen, damit sich nichts staut
    return clamp(Math.round(days), 1, MAX_INTERVAL);
  }

  // Neue Karte nach dem Kennenlernen einplanen. g: 1 = viele Fehler … 4 = kannte ich schon
  function graduate(g, now, m, dayNum) {
    const s = START[g];
    const ivl = interval(s, m);
    return { st: 'R', s, d: initDifficulty(g), last: now, due: dayNum + ivl, ivl, reps: 1, lapses: 0 };
  }

  // Wiederholung einer bekannten Karte. Gibt neue Karte und Vorhersage zurück.
  function review(card, g, now, m, dayNum) {
    const elapsed = Math.max(0, (now - card.last) / DAY);
    const r = retrievability(elapsed, card.s * m);
    const next = Object.assign({}, card);
    next.d = nextDifficulty(card.d, g);
    if (g === 1) {
      next.s = Math.max(0.3, lapseStability(card.d, card.s, r));
      next.lapses = (card.lapses || 0) + 1;
      next.ivl = 1;
    } else {
      next.s = recallStability(card.d, card.s, r, g);
      next.ivl = interval(next.s, m);
    }
    next.reps = (card.reps || 0) + 1;
    next.last = now;
    next.due = dayNum + next.ivl;
    return { card: next, r };
  }

  // Gedächtnis-Faktor nachführen: kleine Schritte Richtung „Vorhersage = Realität".
  // Im Gleichgewicht vergisst du genau so viel, wie angestrebt (10 %).
  function updateMemoryFactor(m, recalled, r) {
    return clamp(m * Math.exp(0.06 * ((recalled ? 1 : 0) - r)), 0.5, 2.5);
  }

  // Aktuelle Erinnerungswahrscheinlichkeit einer Karte (0–1)
  function currentRecall(card, now, m) {
    if (!card || card.st !== 'R') return 0;
    return retrievability(Math.max(0, (now - card.last) / DAY), card.s * m);
  }

  window.Srs = { graduate, review, updateMemoryFactor, currentRecall, TARGET };
})();
