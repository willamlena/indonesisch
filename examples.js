// Beispielsätze, die zum Lernstand passen.
//
// Für jede Vokabel sucht die App unter allen Kurssätzen (und eigenen Beispielen) den Satz
// mit den wenigsten unbekannten Wörtern. Für eigene Wörter baut sie zusätzlich Sätze aus
// Satzbausteinen – je nach Wortart – mit Wörtern, die schon gelernt sind. Weil Indonesisch
// keine Artikel, Endungen oder Konjugation kennt, sind diese Sätze immer grammatisch richtig.
(function () {
  const { esc, norm, pick, t, LANG } = window.U;
  const St = window.Store;

  const SUFFIX = ['nya', 'ku', 'mu', 'lah', 'kah', 'pun'];
  // Gelten immer als bekannt: Endungen, Namen und internationale Wörter aus den Kurssätzen
  const FREE = new Set([
    'nya', 'ku', 'mu', 'lah', 'kah', 'pun', 'ok', 'oke',
    'anna', 'budi', 'sari', 'andi', 'bali', 'jakarta', 'wina', 'graz', 'lombok', 'jawa', 'bandung',
    'yogya', 'padang', 'borobudur', 'hotel', 'wifi', 'tv', 'email', 'whatsapp', 'kafe', 'reservasi', 'paket',
  ]);

  // Satzbausteine für eigene Wörter. {w} = indonesisches Wort, {d} = Bedeutung
  // ({W}/{D} = mit großem Anfangsbuchstaben). Je Baustein: [Indonesisch, Deutsch, Englisch].
  const TEMPLATES = {
    n: [ // Ding
      ['Ini {w}.', 'Das ist {d}.', 'This is {d}.'],
      ['Di mana {w}?', 'Wo ist {d}?', 'Where is the {d}?'],
      ['Saya mau {w}.', 'Ich möchte {d}.', "I'd like {d}."],
      ['Ada {w}?', 'Gibt es {d}?', 'Do you have {d}?'],
      ['Saya perlu {w}.', 'Ich brauche {d}.', 'I need {d}.'],
      ['Saya suka {w}.', 'Ich mag {d}.', 'I like {d}.'],
      ['Saya mau beli {w}.', 'Ich will {d} kaufen.', 'I want to buy {d}.'],
      ['Berapa harga {w}?', 'Wie viel kostet {d}?', 'How much is the {d}?'],
      ['Saya cari {w}.', 'Ich suche {d}.', "I'm looking for {d}."],
      ['Di sini ada {w}.', 'Hier gibt es {d}.', 'There is {d} here.'],
      ['Tolong bawa {w}.', 'Bitte bring {d} mit.', 'Please bring {d}.'],
      ['Kemarin saya lihat {w}.', 'Gestern habe ich {d} gesehen.', 'Yesterday I saw {d}.'],
      ['Saya tidak punya {w}.', 'Ich habe kein(e) {d}.', "I don't have {d}."],
      ['Dia tidak suka {w}.', 'Er/Sie mag {d} nicht.', "He/She doesn't like {d}."],
      ['{W} itu mahal sekali.', '{D} ist sehr teuer.', 'That {d} is very expensive.'],
    ],
    v: [ // Tätigkeit
      ['Saya mau {w}.', 'Ich will {d}.', 'I want to {d}.'],
      ['Saya bisa {w}.', 'Ich kann {d}.', 'I can {d}.'],
      ['Ayo kita {w}!', 'Lass uns {d}!', "Let's {d}!"],
      ['Kamu mau {w}?', 'Willst du {d}?', 'Do you want to {d}?'],
      ['Saya harus {w}.', 'Ich muss {d}.', 'I have to {d}.'],
      ['Boleh saya {w}?', 'Darf ich {d}?', 'May I {d}?'],
      ['Besok saya mau {w}.', 'Morgen will ich {d}.', 'Tomorrow I want to {d}.'],
      ['Kapan kita bisa {w}?', 'Wann können wir {d}?', 'When can we {d}?'],
      ['Dia tidak mau {w}.', 'Er/Sie will nicht {d}.', "He/She doesn't want to {d}."],
      ['Saya belum bisa {w}.', 'Ich kann noch nicht {d}.', "I can't {d} yet."],
      ['Jangan {w} di sini!', 'Hier bitte nicht {d}!', "Please don't {d} here!"],
      ['Saya ingin {w}.', 'Ich möchte gern {d}.', "I'd like to {d}."],
      ['Kita harus {w} sekarang.', 'Wir müssen jetzt {d}.', 'We have to {d} now.'],
    ],
    a: [ // Eigenschaft
      ['Ini {w}.', 'Das ist {d}.', 'This is {d}.'],
      ['Ini sangat {w}.', 'Das ist sehr {d}.', 'This is very {d}.'],
      ['Itu tidak {w}.', 'Das ist nicht {d}.', "That isn't {d}."],
      ['Apakah ini {w}?', 'Ist das {d}?', 'Is this {d}?'],
      ['Ini terlalu {w}.', 'Das ist zu {d}.', 'This is too {d}.'],
      ['Ini agak {w}.', 'Das ist etwas {d}.', 'This is a bit {d}.'],
      ['Menurut saya, ini {w}.', 'Ich finde, das ist {d}.', 'I think this is {d}.'],
      ['Kenapa ini {w}?', 'Warum ist das {d}?', 'Why is this {d}?'],
      ['Itu {w} sekali!', 'Das ist so {d}!', "That's so {d}!"],
      ['Ini tidak terlalu {w}.', 'Das ist nicht allzu {d}.', "This isn't too {d}."],
    ],
  };
  const POS_LABEL = { n: t('Ding'), v: t('Tätigkeit'), a: t('Eigenschaft'), x: t('Ausdruck') };

  const cap = s => s.charAt(0).toUpperCase() + s.slice(1);
  // Erste Bedeutung ohne Klammern: „junge Kokosnuss; Kokoswasser" → „junge Kokosnuss"
  const firstMeaning = de => de.split(/[;,/]/)[0].replace(/\([^)]*\)/g, '').trim();
  // Englisch: „to swim“ → „swim“, „a coconut“ → „coconut“ (die Vorlagen bringen das selbst mit)
  const bareEn = (d, pos) => (pos === 'v' ? d.replace(/^to\s+/i, '') : d.replace(/^(a|an|the)\s+/i, ''));

  // ---------- Bekannte Wörter ----------
  let knownKey = '', knownSet = null;
  function known() {
    const S = St.S;
    const ids = Object.keys(S.cards);
    const key = ids.length + ':' + S.custom.length;
    if (knownSet && key === knownKey) return knownSet;
    const K = new Set(FREE);
    ids.forEach(id => {
      const c = St.CARDS[id];
      if (!c || c.kind !== 'w') return;
      St.answersFor(c).forEach(a => norm(a).split(' ').forEach(t => { if (t) K.add(t); }));
    });
    knownKey = key;
    knownSet = K;
    return K;
  }

  function tokenKnown(t, K) {
    if (!t || /^\d+$/.test(t) || K.has(t)) return true;
    for (const s of SUFFIX) if (t.length > s.length + 2 && t.endsWith(s) && K.has(t.slice(0, -s.length))) return true;
    if (t.length > 4 && (t.startsWith('di') || t.startsWith('se')) && K.has(t.slice(2))) return true; // dibungkus, setinggi
    return false;
  }

  // ---------- Sätze zerlegen ----------
  function tokenize(text) {
    return text.split(/(\s+)/).filter(p => p !== '').map(part => {
      if (/^\s+$/.test(part)) return { space: part };
      const m = part.match(/^([„“"'(]*)(.*?)([.,!?;:"'“”)…]*)$/);
      const core = m[2];
      return { pre: m[1], core, post: m[3], n: norm(core) };
    });
  }

  function markTarget(words, forms) {
    for (const f of forms) {
      const k = f.length;
      for (let i = 0; i + k <= words.length; i++) {
        let ok = true;
        for (let j = 0; j < k && ok; j++) {
          const w = words[i + j].n, want = f[j];
          if (w === want) continue;
          const last = j === k - 1;
          if (last && (SUFFIX.some(s => w === want + s) || w.startsWith(want + ' '))) continue; // kopinya, AC-nya
          ok = false;
        }
        if (ok) {
          for (let j = 0; j < k; j++) words[i + j].target = true;
          return true;
        }
      }
    }
    return false;
  }

  function analyse(text, forms, K) {
    const parts = tokenize(text);
    const words = parts.filter(p => p.space === undefined && p.n);
    const hasTarget = markTarget(words, forms);
    let unknown = 0;
    words.forEach((w, i) => {
      if (w.target) return;
      const isName = i > 0 && /^[A-ZÄÖÜ]/.test(w.core) && !w.core.includes('-');
      w.known = isName || w.n.split(' ').every(t => tokenKnown(t, K));
      if (!w.known) unknown++;
    });
    return { text, parts, hasTarget, unknown };
  }

  // ---------- Satzsammlung ----------
  let corpusKey = '', corpus = null;
  function getCorpus() {
    const key = String(St.S.custom.length) + St.S.custom.map(c => c.ex || '').join('|').length;
    if (corpus && key === corpusKey) return corpus;
    const seen = new Set();
    corpus = [];
    const add = (text, de) => {
      if (!text || !de) return;
      const k = norm(text);
      if (seen.has(k)) return;
      seen.add(k);
      corpus.push({ text, de, n: ' ' + k + ' ' });
    };
    Object.values(St.CARDS).forEach(c => { if (c.kind === 's') add(c.indo, c.de); else add(c.ex, c.exde); });
    corpusKey = key;
    return corpus;
  }

  const lastShown = {};

  // Bester Beispielsatz für eine Karte – oder null, wenn es keinen gibt
  function forCard(card) {
    const K = known();
    const forms = St.answersFor(card).map(a => norm(a).split(' ')).filter(f => f[0]);
    const cands = [];
    for (const e of getCorpus()) {
      if (!forms.some(f => e.n.includes(' ' + f.join(' ')))) continue;
      const r = analyse(e.text, forms, K);
      if (r.hasTarget) cands.push(Object.assign(r, { deHtml: esc(e.de), src: 'kurs' }));
    }
    const tpl = card.custom && TEMPLATES[card.pos];
    if (tpl) {
      const w = card.indo.split(' / ')[0].trim();
      const d0 = firstMeaning(card.de);
      const d = LANG === 'en' ? bareEn(d0, card.pos) : d0;
      tpl.forEach(([ti, tde, ten]) => {
        const td = LANG === 'en' ? ten : tde;
        const text = ti.replace('{W}', cap(w)).replace('{w}', w);
        const deHtml = esc(td).replace('{D}', `<b>${esc(cap(d))}</b>`).replace('{d}', `<b>${esc(d)}</b>`);
        const r = analyse(text, forms, K);
        if (r.hasTarget) cands.push(Object.assign(r, { deHtml, src: 'auto' }));
      });
    }
    if (!cands.length) return null;
    const min = Math.min(...cands.map(c => c.unknown));
    let best = cands.filter(c => c.unknown === min);
    // Abwechslung: möglichst nicht zweimal hintereinander derselbe Satz
    const fresh = best.filter(c => c.text !== lastShown[card.id]);
    if (fresh.length) best = fresh;
    const choice = pick(best);
    lastShown[card.id] = choice.text;
    return choice;
  }

  // Satz als HTML: jedes Wort antippbar, unbekannte unterstrichen, Zielwort hervorgehoben
  function html(r) {
    return r.parts.map(p => {
      if (p.space !== undefined) return ' ';
      if (!p.n) return esc(p.pre + p.core + p.post);
      const cls = p.target ? 'tok target' : p.known ? 'tok' : 'tok unknown';
      return `${esc(p.pre)}<button type="button" class="${cls}" data-tok="${esc(p.core)}">${esc(p.core)}</button>${esc(p.post)}`;
    }).join('');
  }

  // ---------- Nachschlagen beim Antippen ----------
  let dictMap = null, dictKey = '';
  function dict() {
    const key = String(St.S.custom.length);
    if (dictMap && key === dictKey) return dictMap;
    dictMap = new Map();
    Object.values(St.CARDS).forEach(c => {
      if (c.kind !== 'w') return;
      St.answersFor(c).forEach(a => {
        const k = norm(a);
        if (k && !k.includes(' ') && !dictMap.has(k)) dictMap.set(k, c);
      });
    });
    dictKey = key;
    return dictMap;
  }

  function lookup(raw) {
    const n = norm(raw);
    if (!n) return null;
    const D = dict();
    const tries = [n];
    if (n.includes(' ')) tries.push(n.split(' ')[0]); // AC-nya → ac
    SUFFIX.forEach(s => { if (n.endsWith(s) && n.length > s.length + 2) tries.push(n.slice(0, -s.length)); });
    if (n.length > 4 && n.startsWith('di')) tries.push(n.slice(2));
    for (const w of tries) {
      const c = D.get(w);
      if (c) return { card: c, root: w !== n ? w : null };
    }
    const first = n.split(' ')[0];
    const phrase = Object.values(St.CARDS).find(c => c.kind === 'w' && St.answersFor(c).some(a => norm(a).split(' ').includes(first)));
    return phrase ? { card: phrase, part: true } : null;
  }

  // Info-Zeile für ein angetipptes Wort
  function infoHTML(raw) {
    const r = lookup(raw);
    if (!r) return `<b>${esc(raw)}</b> – <span class="muted">${t('nicht als eigenes Wort im Kurs')}</span>`;
    const extra = r.part ? ` <span class="muted">(${t('Teil von „{w}“', { w: esc(r.card.indo) })})</span>`
      : r.root ? ` <span class="muted">(${t('Grundwort: {w}', { w: esc(r.root) })})</span>` : '';
    return `<b>${esc(r.part ? raw : r.card.indo)}</b> – ${esc(r.card.de)}${extra}`;
  }

  // Beispielsatz-Block mit Vorlese-Knopf, Übersetzung und Hinweis zu unbekannten Wörtern
  function blockHTML(ex) {
    if (!ex) return '';
    const meta = ex.unknown === 0 ? t('✓ Alle Wörter kennst du schon')
      : ex.unknown === 1 ? t('1 neues Wort – antippen zum Übersetzen')
        : t('{n} neue Wörter – antippen zum Übersetzen', { n: ex.unknown });
    return `
      <div class="fc-example">
        <div class="fc-ex-row"><div class="ex-sentence">${html(ex)}</div><button class="speak-btn sm" data-say="${esc(ex.text)}" aria-label="${t('Vorlesen')}">${window.U.icon('speaker', 16)}</button></div>
        <div class="ex-de">${ex.deHtml}</div>
        <div class="ex-meta">${meta}${ex.src === 'auto' ? ' · ' + t('aus deinem Wortschatz gebaut') : ''}</div>
        <div class="tok-info" aria-live="polite"></div>
      </div>`;
  }

  // Klick auf ein Wort im Satz: vorlesen und Übersetzung einblenden
  function onTokenClick(el) {
    const box = el.closest('.fc-example, .bubble');
    if (!box || !box.querySelector('.tok-info')) return;
    window.U.Speech.speak(el.dataset.tok);
    box.querySelectorAll('.tok.active').forEach(x => x.classList.remove('active'));
    el.classList.add('active');
    box.querySelector('.tok-info').innerHTML = infoHTML(el.dataset.tok);
  }

  // Beliebigen Satz zerlegen (z. B. im Gesprächstrainer), unbekannte Wörter markiert
  const analyseText = text => analyse(text, [], known());

  window.Examples = { forCard, html, blockHTML, onTokenClick, lookup, known, analyseText, TEMPLATES, POS_LABEL };
})();
