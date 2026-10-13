// Beispielsätze, die zum Lernstand passen.
//
// Für jede Vokabel sucht die App unter allen Kurssätzen (und eigenen Beispielen) den Satz
// mit den wenigsten unbekannten Wörtern. Für eigene Wörter baut sie zusätzlich Sätze aus
// Satzbausteinen – je nach Wortart – mit Wörtern, die schon gelernt sind. Weil Indonesisch
// keine Artikel, Endungen oder Konjugation kennt, sind diese Sätze immer grammatisch richtig.
(function () {
  const { esc, norm, pick } = window.U;
  const St = window.Store;

  const SUFFIX = ['nya', 'ku', 'mu', 'lah', 'kah', 'pun'];
  // Gelten immer als bekannt: Endungen, Namen und internationale Wörter aus den Kurssätzen
  const FREE = new Set([
    'nya', 'ku', 'mu', 'lah', 'kah', 'pun', 'ok', 'oke',
    'anna', 'budi', 'sari', 'andi', 'bali', 'jakarta', 'wina', 'graz', 'lombok', 'jawa', 'bandung',
    'yogya', 'padang', 'borobudur', 'hotel', 'wifi', 'tv', 'email', 'whatsapp', 'kafe', 'reservasi', 'paket',
  ]);

  // Satzbausteine für eigene Wörter. {w} = indonesisches Wort, {d} = deutsche Bedeutung
  // ({W}/{D} = mit großem Anfangsbuchstaben).
  const TEMPLATES = {
    n: [ // Ding
      ['Ini {w}.', 'Das ist {d}.'],
      ['Di mana {w}?', 'Wo ist {d}?'],
      ['Saya mau {w}.', 'Ich möchte {d}.'],
      ['Ada {w}?', 'Gibt es {d}?'],
      ['Saya perlu {w}.', 'Ich brauche {d}.'],
      ['Saya suka {w}.', 'Ich mag {d}.'],
      ['Saya mau beli {w}.', 'Ich will {d} kaufen.'],
      ['Berapa harga {w}?', 'Wie viel kostet {d}?'],
      ['Saya cari {w}.', 'Ich suche {d}.'],
      ['Di sini ada {w}.', 'Hier gibt es {d}.'],
      ['Tolong bawa {w}.', 'Bitte bring {d} mit.'],
      ['Kemarin saya lihat {w}.', 'Gestern habe ich {d} gesehen.'],
      ['Saya tidak punya {w}.', 'Ich habe kein(e) {d}.'],
      ['Dia tidak suka {w}.', 'Er/Sie mag {d} nicht.'],
      ['{W} itu mahal sekali.', '{D} ist sehr teuer.'],
    ],
    v: [ // Tätigkeit
      ['Saya mau {w}.', 'Ich will {d}.'],
      ['Saya bisa {w}.', 'Ich kann {d}.'],
      ['Ayo kita {w}!', 'Lass uns {d}!'],
      ['Kamu mau {w}?', 'Willst du {d}?'],
      ['Saya harus {w}.', 'Ich muss {d}.'],
      ['Boleh saya {w}?', 'Darf ich {d}?'],
      ['Besok saya mau {w}.', 'Morgen will ich {d}.'],
      ['Kapan kita bisa {w}?', 'Wann können wir {d}?'],
      ['Dia tidak mau {w}.', 'Er/Sie will nicht {d}.'],
      ['Saya belum bisa {w}.', 'Ich kann noch nicht {d}.'],
      ['Jangan {w} di sini!', 'Hier bitte nicht {d}!'],
      ['Saya ingin {w}.', 'Ich möchte gern {d}.'],
      ['Kita harus {w} sekarang.', 'Wir müssen jetzt {d}.'],
    ],
    a: [ // Eigenschaft
      ['Ini {w}.', 'Das ist {d}.'],
      ['Ini sangat {w}.', 'Das ist sehr {d}.'],
      ['Itu tidak {w}.', 'Das ist nicht {d}.'],
      ['Apakah ini {w}?', 'Ist das {d}?'],
      ['Ini terlalu {w}.', 'Das ist zu {d}.'],
      ['Ini agak {w}.', 'Das ist etwas {d}.'],
      ['Menurut saya, ini {w}.', 'Ich finde, das ist {d}.'],
      ['Kenapa ini {w}?', 'Warum ist das {d}?'],
      ['Itu {w} sekali!', 'Das ist so {d}!'],
      ['Ini tidak terlalu {w}.', 'Das ist nicht allzu {d}.'],
    ],
  };
  const POS_LABEL = { n: 'Ding', v: 'Tätigkeit', a: 'Eigenschaft', x: 'Ausdruck' };

  const cap = s => s.charAt(0).toUpperCase() + s.slice(1);
  // Erste Bedeutung ohne Klammern: „junge Kokosnuss; Kokoswasser" → „junge Kokosnuss"
  const firstMeaning = de => de.split(/[;,/]/)[0].replace(/\([^)]*\)/g, '').trim();

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
      const d = firstMeaning(card.de);
      tpl.forEach(([ti, td]) => {
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
    for (const t of tries) {
      const c = D.get(t);
      if (c) return { card: c, root: t !== n ? t : null };
    }
    const first = n.split(' ')[0];
    const phrase = Object.values(St.CARDS).find(c => c.kind === 'w' && St.answersFor(c).some(a => norm(a).split(' ').includes(first)));
    return phrase ? { card: phrase, part: true } : null;
  }

  // Info-Zeile für ein angetipptes Wort
  function infoHTML(raw) {
    const r = lookup(raw);
    if (!r) return `<b>${esc(raw)}</b> – <span class="muted">nicht als eigenes Wort im Kurs</span>`;
    const extra = r.part ? ` <span class="muted">(Teil von „${esc(r.card.indo)}“)</span>`
      : r.root ? ` <span class="muted">(Grundwort: ${esc(r.root)})</span>` : '';
    return `<b>${esc(r.part ? raw : r.card.indo)}</b> – ${esc(r.card.de)}${extra}`;
  }

  // Beispielsatz-Block mit Vorlese-Knopf, Übersetzung und Hinweis zu unbekannten Wörtern
  function blockHTML(ex) {
    if (!ex) return '';
    const meta = ex.unknown === 0 ? '✓ Alle Wörter kennst du schon'
      : ex.unknown === 1 ? '1 neues Wort – antippen zum Übersetzen'
        : `${ex.unknown} neue Wörter – antippen zum Übersetzen`;
    return `
      <div class="fc-example">
        <div class="fc-ex-row"><div class="ex-sentence">${html(ex)}</div><button class="speak-btn sm" data-say="${esc(ex.text)}" aria-label="Vorlesen">${window.U.icon('speaker', 16)}</button></div>
        <div class="ex-de">${ex.deHtml}</div>
        <div class="ex-meta">${meta}${ex.src === 'auto' ? ' · aus deinem Wortschatz gebaut' : ''}</div>
        <div class="tok-info" aria-live="polite"></div>
      </div>`;
  }

  // Klick auf ein Wort im Satz: vorlesen und Übersetzung einblenden
  function onTokenClick(el) {
    const box = el.closest('.fc-example');
    if (!box) return;
    window.U.Speech.speak(el.dataset.tok);
    box.querySelectorAll('.tok.active').forEach(t => t.classList.remove('active'));
    el.classList.add('active');
    box.querySelector('.tok-info').innerHTML = infoHTML(el.dataset.tok);
  }

  window.Examples = { forCard, html, blockHTML, onTokenClick, lookup, known, TEMPLATES, POS_LABEL };
})();
