# Bahasa – Indonesisch lernen

Offline-Web-App (PWA) zum täglichen Indonesisch-Lernen für Deutschsprachige.
Läuft auf iPhone und Android, der Lernstand bleibt nur auf dem Handy.

- **1.153 Lernkarten:** 934 Wörter/Ausdrücke und 219 Übungssätze in 44 Themen, vom Häufigsten zum Spezielleren
- **31 Grammatik-Lektionen** mit Mini-Quiz, jeweils direkt vor dem passenden Thema
- **Verteilte Wiederholung (FSRS):** Gekonnte Wörter kommen seltener, vergessene öfter
- **Passt sich an:** Ein persönlicher Gedächtnis-Faktor stellt die Abstände ein. Die Zahl neuer Wörter pro Tag richtet sich nach Trefferquote und Tageszeit.
- **9 Übungstypen:** Wiedererkennen, Hören, Eintippen, Lückentext, Sätze bauen, laut Sprechen …
- **Standardsprache mit Alltagsform** (tidak → nggak), Vorlesen über die Sprachausgabe des Handys

---

## Einmalig veröffentlichen mit GitHub Pages (ca. 10 Minuten)

1. **Konto anlegen:** Auf [github.com](https://github.com) kostenlos registrieren.
2. **Neues Repository:** Oben rechts auf **+** → **New repository**.
   - Name: z. B. `indonesisch`
   - **Public** auswählen (für kostenlose GitHub Pages nötig)
   - **Create repository**
3. **Dateien hochladen:** Auf der neuen Seite auf **uploading an existing file** klicken.
   Im Finder den Ordner `indonesisch-app` öffnen, **alle Dateien markieren** (⌘A) und ins Browserfenster ziehen.
   Unten auf **Commit changes** klicken.
4. **Pages einschalten:** Im Repository **Settings** → links **Pages** →
   Source: **Deploy from a branch** → Branch: **main**, Ordner **/ (root)** → **Save**.
5. **1–2 Minuten warten.** Die Adresse erscheint oben auf der Pages-Seite, z. B.
   `https://DEIN-NAME.github.io/indonesisch/`
6. **Aufs Handy holen:** Adresse am Handy öffnen.
   - **iPhone:** in Safari → Teilen-Symbol → **Zum Home-Bildschirm**
   - **Android:** in Chrome → **⋮** → **App installieren**
7. **Indonesische Stimme installieren**, damit das Vorlesen richtig klingt. Die Anleitung steht in der App unter **Einstellungen → Aussprache**.

> Der Code ist öffentlich sichtbar, dein Lernfortschritt aber nicht – der liegt nur auf deinem Handy.
> Unter **Einstellungen → Datensicherung** kannst du ihn sichern, z. B. vor einem Handywechsel.

## Änderungen einspielen

1. Geänderte Dateien im Repository über **Add file → Upload files** erneut hochladen.
2. **Wichtig:** In `sw.js` die Versionsnummer erhöhen (`bahasa-v1` → `bahasa-v2` …).
   Sonst bleibt die installierte App bei den alten, offline gespeicherten Dateien.
   Danach zeigt die App „Neue Version verfügbar“.

## Inhalte erweitern

- **Wörter und Sätze:** `vocab.js`, eine Zeile pro Karte:
  `indonesisch | deutsch | alltagsform | beispiel | übersetzung | hinweis`
  Sätze beginnen mit `>`: `> indonesisch | deutsch | hinweis`
  Neue Einheiten einfach hinten anhängen. Bereits gelernte Karten bleiben erhalten, solange der indonesische Text gleich bleibt.
- **Grammatik:** `grammar.js` (kleines Markup, Beschreibung oben in der Datei)
- **Eigene Wörter** lassen sich auch direkt in der App hinzufügen (Wörter → **+**).

## Dateien

| Datei | Inhalt |
| --- | --- |
| `index.html`, `style.css` | Seite und Design |
| `vocab.js`, `grammar.js` | Kursinhalt |
| `srs.js` | Wiederholungs-Algorithmus (FSRS-4.5 + persönlicher Gedächtnis-Faktor) |
| `store.js` | Lernstand, Tagesplanung, Anpassung ans Tempo |
| `session.js` | Lernsitzung und Übungstypen |
| `app.js` | Ansichten: Heute, Kurs, Wörter, Statistik, Einstellungen |
| `util.js` | Hilfsfunktionen, Sprachausgabe, Icons |
| `sw.js`, `manifest.webmanifest`, `icon*` | Offline-Fähigkeit und Installation |

## Lokal testen (Mac)

```bash
ruby -run -e httpd . -p 8766
```

Dann im Browser `http://localhost:8766` öffnen.
