# Linguara – Sprachen lernen

Offline-Web-App (PWA) zum täglichen Sprachenlernen. Läuft auf iPhone und Android, der Lernstand bleibt nur auf dem Handy.

**Kurse** (umschaltbar über die Flagge oben auf „Heute“ oder unter Einstellungen → „Ich lerne …“):

| Kurs | Inhalt |
| --- | --- |
| 🇮🇩 Indonesisch – von Deutsch aus | 84 Themen, ca. 2.150 Karten, 64 Grammatik-Lektionen, 25 Gespräche |
| 🇮🇩 Indonesian – from English | derselbe Kurs mit englischer Oberfläche und Übersetzungen |
| 🇬🇧 Englisch – von Deutsch aus | 84 Themen, ca. 2.300 Karten, 69 Grammatik-Lektionen, 25 internationale Gespräche; britisches Englisch, amerikanische Varianten als „US“ |

Jede **Lernsprache hat ihren eigenen Lernstand** – Indonesisch bleibt gleich, egal ob von Deutsch oder Englisch aus gelernt. Menüs und Erklärungen erscheinen in der Ausgangssprache.

- **Zwei Levels:** Level 1 – Grundlagen (44 Themen, A1–A2), Level 2 – Fortgeschritten (40 Themen, B1–B2). Level 2 startet automatisch nach Level 1.
- **Lektionen:** neue Wörter, Grammatik mit Mini-Quiz, Übungssätze – 9 Übungstypen (Hören, Eintippen, Lückentext, Sätze bauen …)
- **Vokabeltrainer:** Alle gelernten Wörter als Karteikarten in beide Richtungen; wischen nach rechts = gewusst, nach links = nicht gewusst. Gekonnte Karten kommen seltener, vergessene öfter (FSRS). Extra-Runden mit allen schwachen Wörtern.
- **Beispielsätze passend zum Lernstand**, unbekannte Wörter lassen sich antippen und übersetzen.
- **Eigene Vokabeln** mit Wortart; die App baut Beispielsätze nur aus bereits gelernten Wörtern.
- **Gesprächstrainer (offline):** Alltagsgespräche zum Nachspielen – per Tippen oder Sprechen, mit Tipp, Auswahl oder Lösung.
- **„Über mich“ und „Situation schildern“:** Deine Angaben fließen in die Gespräche ein; zu einer geschilderten Situation stellt die App passende Gespräche, Wörter, Sätze und Grammatik zusammen.
- **Vorlesen** über die Sprachausgabe des Handys.

---

## Einmalig veröffentlichen mit GitHub Pages (ca. 10 Minuten)

1. **Konto anlegen:** Auf [github.com](https://github.com) kostenlos registrieren.
2. **Neues Repository:** Oben rechts auf **+** → **New repository**.
   - Name: z. B. `linguara`
   - **Public** auswählen (für kostenlose GitHub Pages nötig)
   - **Create repository**
3. **Dateien hochladen:** Auf der neuen Seite auf **uploading an existing file** klicken.
   Im Finder den App-Ordner öffnen, **alle Dateien markieren** (⌘A) und ins Browserfenster ziehen.
   Unten auf **Commit changes** klicken.
4. **Pages einschalten:** Im Repository **Settings** → links **Pages** →
   Source: **Deploy from a branch** → Branch: **main**, Ordner **/ (root)** → **Save**.
5. **1–2 Minuten warten.** Die Adresse erscheint oben auf der Pages-Seite, z. B.
   `https://DEIN-NAME.github.io/linguara/`
6. **Aufs Handy holen:** Adresse am Handy öffnen.
   - **iPhone:** in Safari → Teilen-Symbol → **Zum Home-Bildschirm**
   - **Android:** in Chrome → **⋮** → **App installieren**
7. **Stimme für die Lernsprache installieren**, damit das Vorlesen richtig klingt. Die Anleitung steht in der App unter **Einstellungen → Aussprache**.

> Der Code ist öffentlich sichtbar, dein Lernfortschritt aber nicht – der liegt nur auf deinem Handy.
> Unter **Einstellungen → Datensicherung** kannst du ihn sichern, z. B. vor einem Handywechsel.

## Änderungen einspielen

1. Geänderte Dateien im Repository über **Add file → Upload files** erneut hochladen.
2. **Wichtig:** In `sw.js` die Versionsnummer erhöhen (`linguara-v1` → `linguara-v2` …).
   Sonst bleibt die installierte App bei den alten, offline gespeicherten Dateien.
   Danach zeigt die App „Neue Version verfügbar“.

## Inhalte erweitern

- **Wörter und Sätze:** `vocab.js` (Level 1) bzw. `vocab2.js` (Level 2), eine Zeile pro Karte:
  `indonesisch | deutsch | alltagsform | beispiel | übersetzung | hinweis`
  Sätze beginnen mit `>`: `> indonesisch | deutsch | hinweis`
  Neue Einheiten einfach hinten anhängen. Bereits gelernte Karten bleiben erhalten, solange der indonesische Text gleich bleibt.
- **Grammatik:** `grammar.js` / `grammar2.js` (kleines Markup, Beschreibung oben in der Datei)
- **Gespräche:** `dialogs.js` (Format oben in der Datei beschrieben)
- **Englischkurs:** `english-vocab.js` / `english-vocab2.js` (Zeile: `englisch | deutsch | US-Variante | Beispiel | Übersetzung | Hinweis`), `english-grammar.js` / `english-grammar2.js`, `english-dialogs.js` – gleiches Format wie oben
- **Neue Sprache:** in `util.js` unter `TARGETS` eintragen, Inhaltsdateien anlegen und in `app.js` bei `COURSE_OPTIONS` ergänzen
- **Eigene Wörter** lassen sich auch direkt in der App hinzufügen (Wörter → **+**).

## Dateien

| Datei | Inhalt |
| --- | --- |
| `index.html`, `style.css` | Seite und Design |
| `vocab.js`, `vocab2.js`, `grammar.js`, `grammar2.js` | Kursinhalt Level 1 und 2 |
| `dialogs.js` | Gespräche für den Gesprächstrainer |
| `english-vocab.js`, `english-vocab2.js`, `english-grammar.js`, `english-grammar2.js`, `english-dialogs.js` | Englischkurs (Deutsch → Englisch) |
| `vocab.en.js`, `vocab2.en.js`, `grammar.en.js`, `grammar2.en.js`, `dialogs.en.js` | Englische Fassung der Inhalte (zugeordnet über das indonesische Wort bzw. die Lektions- und Gesprächs-ID) |
| `i18n.en.js` | Englische Texte der Oberfläche (Schlüssel = deutscher Text) |
| `talk.js` | Gesprächstrainer, Antwortprüfung, Suche „Situation schildern“ |
| `srs.js` | Wiederholungs-Algorithmus (FSRS-4.5 + persönlicher Gedächtnis-Faktor) |
| `store.js` | Lernstand, Tagesplanung, Anpassung ans Tempo |
| `session.js` | Lektion und Übungstypen |
| `trainer.js` | Vokabeltrainer (Karteikarten) |
| `examples.js` | Beispielsätze passend zum Lernstand, Satzbausteine für eigene Wörter, Nachschlagen |
| `app.js` | Ansichten: Heute, Kurs, Trainer, Gespräche, Wörter, Statistik, Einstellungen |
| `util.js` | Kurse & Lernsprachen (`TARGETS`), Hilfsfunktionen, Sprachausgabe, Spracherkennung, Icons |
| `sw.js`, `manifest.webmanifest`, `icon*` | Offline-Fähigkeit und Installation |

## Lokal testen (Mac)

```bash
ruby -run -e httpd . -p 8766
```

Dann im Browser `http://localhost:8766` öffnen.
