// Grammatik-Lektionen. Jede Lektion gehört zu einer Einheit in vocab.js und wird
// gezeigt, bevor das erste Wort dieser Einheit drankommt.
//
// Mini-Markup im body:
//   ## Überschrift
//   > Tipp-Box
//   = indonesisch :: deutsch      (Beispiel mit Vorlese-Knopf)
//   | a | b |                     (Tabelle, erste Zeile = Kopfzeile)
//   - Aufzählung
//   **fett**
// quiz: [Frage, [Antworten…], Index der richtigen, Erklärung]
window.LESSONS = {

g01: { title: "Aussprache", body: `
Indonesisch wird fast genau so gesprochen, wie es geschrieben wird – eine der einfachsten Aussprachen der Welt. Ein paar Buchstaben klingen aber anders als im Deutschen:

| Buchstabe | klingt wie | Beispiel |
| c | **tsch** | **cari** (suchen) → „tschari“ |
| j | **dsch** wie Dschungel | **jalan** → „dschalan“ |
| y | deutsches **j** | **ya** → „ja“ |
| ny | **nj** wie Cognac | **nyanyi** (singen) |
| ng | wie in „si**ng**en“ – ohne g | **ngantuk** (schläfrig) |
| ngg | wie in „Fi**ng**er“ | **tinggal** (wohnen) |
| s | immer scharf wie „Bus“ | **saya** |
| r | gerollt (Zungenspitze) | **rumah** |
| k am Ende | kurzer Stopp, kaum hörbar | **tidak** → „tida'“ |
| e | meist kurz und dumpf wie in „bitt**e**“ | **besar** (groß) |
| é | manchmal offen wie in „B**e**tt“ | **enak** (lecker) |
| u | immer **u**, nie ü | **susu** (Milch) |

## Betonung
Indonesisch klingt sehr gleichmäßig. Meist liegt eine leichte Betonung auf der vorletzten Silbe: **ma**-kan, te-**ri**-ma ka-sih. Keine Sorge: Falsch betonte Wörter werden trotzdem verstanden.

## Grüße nach Tageszeit
| Gruß | Wann? |
| selamat pagi | morgens bis ca. 11 Uhr |
| selamat siang | ca. 11–15 Uhr |
| selamat sore | ca. 15–18 Uhr |
| selamat malam | ab Einbruch der Dunkelheit |

= Selamat pagi! Apa kabar? :: Guten Morgen! Wie geht's?
= Baik, terima kasih. :: Gut, danke.

> Unter Freunden reicht **pagi!** oder **halo!**. Beim Abschied sagt, wer geht, **selamat tinggal** – und wer bleibt, **selamat jalan**.

> Tipp: Tippe in der App auf 🔊, so oft du willst, und sprich laut nach. Lautes Nachsprechen ist der schnellste Weg zu einer guten Aussprache.
`, quiz: [
  ["Wie spricht man **cari** (suchen) aus?", ["tschari", "kari", "zari"], 0, "c klingt immer wie „tsch“."],
  ["Du verlässt abends ein Haus und verabschiedest dich. Was sagst du?", ["selamat tinggal", "selamat jalan", "selamat pagi"], 0, "Wer geht, sagt selamat tinggal (wörtlich: „sicheres Bleiben“ – für die, die bleiben)."],
  ["Was bedeutet **tolong**?", ["bitte (um Hilfe bitten)", "Entschuldigung", "danke"], 0, "tolong = bitte, wenn du jemanden um etwas bittest – und „Hilfe!“."],
]},

g02: { title: "Ich, du & die richtige Anrede", body: `
Indonesisch hat keine Artikel, kein grammatisches Geschlecht und keine Verbendungen. Dafür ist wichtig, **wie** du jemanden ansprichst.

| Indonesisch | Deutsch | Wann? |
| saya | ich | neutral, höflich – passt immer |
| aku | ich | mit Freunden, Familie, Partner |
| kamu | du | Freunde, Gleichaltrige, Jüngere |
| Anda | Sie | formell, schriftlich, Werbung |
| dia | er / sie | ein Wort für beide! |
| kami | wir (ohne dich) | „wir hier, du nicht“ |
| kita | wir (mit dir) | „wir alle zusammen“ |
| kalian | ihr | |
| mereka | sie (mehrere) | |

## kami oder kita?
**kami** schließt die Person, mit der du sprichst, aus – **kita** schließt sie ein.
= Kami dari Austria. :: Wir (meine Familie und ich – du nicht) kommen aus Österreich.
= Ayo kita makan! :: Komm, lass uns (alle) essen!

## Statt „Sie“: Bapak und Ibu
Im Gespräch sagt man selten **Anda**. Viel natürlicher ist es, Menschen mit ihrer Anrede anzusprechen – sogar statt „Sie“ oder „du“.
| Anrede | Für wen? |
| Bapak / Pak | Männer (ältere, Respektspersonen) |
| Ibu / Bu | Frauen (ältere, Respektspersonen) |
| Mas | jüngere Männer (v. a. Java) |
| Mbak | jüngere Frauen (v. a. Java) |
| Kak | Gleichaltrige, etwas Ältere (überall) |
| Dik | Jüngere |
= Bapak mau kopi? :: Möchten Sie Kaffee? (wörtlich: Möchte der Herr Kaffee?)
= Terima kasih, Bu. :: Danke (zu einer Frau).

> Wenn du unsicher bist: **saya** für dich selbst, **Bapak/Ibu** für ältere Unbekannte, **Kak** für junge Leute. Damit liegst du fast immer richtig.
`, quiz: [
  ["Du sprichst mit Freunden und meinst „wir alle zusammen“. Welches Wort?", ["kita", "kami", "mereka"], 0, "kita schließt die Zuhörer ein, kami nicht."],
  ["Wie sprichst du eine ältere Verkäuferin höflich an?", ["Ibu", "Mas", "kamu"], 0, "Ibu (kurz Bu) ist die respektvolle Anrede für Frauen."],
  ["**dia** bedeutet …", ["er oder sie", "sie (mehrere)", "du"], 0, "dia steht für eine Person – egal ob Mann oder Frau."],
]},

g03: { title: "Sätze ohne „sein“ – und di, ke, dari", body: `
## Kein „sein“ nötig
Für „ich bin“, „er ist“ usw. braucht Indonesisch meistens **gar kein Verb**. Die Wörter stehen einfach nebeneinander:
= Saya Anna. :: Ich bin Anna.
= Dia orang Jerman. :: Er/Sie ist Deutsche(r).
= Rumah saya besar. :: Mein Haus ist groß.
> In formellen Texten gibt es **adalah** („ist“) vor Nomen. Im Alltag lässt man es fast immer weg – und vor Adjektiven steht es nie.

## ini und itu
**ini** = dies, hier (nah) · **itu** = das, dort (weiter weg). Die **Stellung** ändert die Bedeutung:
| Satz | Bedeutung |
| Ini rumah. | Das ist ein Haus. |
| Rumah ini besar. | Dieses Haus ist groß. |
| Itu teman saya. | Das ist mein Freund. |
| Teman itu baik. | Dieser Freund ist nett. |

## di – ke – dari
Drei kleine Wörter für Orte und Richtungen:
| Wort | Bedeutung | Frage |
| di | in, an, bei (wo?) | di mana? – wo? |
| ke | nach, zu (wohin?) | ke mana? – wohin? |
| dari | aus, von (woher?) | dari mana? – woher? |
= Saya tinggal di Wina. :: Ich wohne in Wien.
= Saya mau ke pasar. :: Ich will zum Markt.
= Kamu dari mana? :: Woher kommst du?

> **Mau ke mana?** („Wohin gehst du?“) ist in Indonesien eine ganz normale Begrüßung. Eine vage Antwort wie **Jalan-jalan** („Bisschen herumlaufen“) reicht völlig.
`, quiz: [
  ["Wie sagt man „Ich bin müde“ (müde = capek)?", ["Saya capek.", "Saya adalah capek.", "Capek saya."], 0, "Kein Verb nötig – und adalah steht nie vor Adjektiven."],
  ["„Dieses Hotel ist teuer“ heißt …", ["Hotel ini mahal.", "Ini hotel mahal.", "Ini mahal hotel."], 0, "Ini hotel mahal hieße „Das ist ein teures Hotel“."],
  ["„Wohin?“ heißt …", ["ke mana?", "di mana?", "dari mana?"], 0, "ke = Richtung (wohin), di = Ort (wo), dari = Herkunft (woher)."],
]},

g04: { title: "Vier Arten, „nicht“ zu sagen", body: `
Indonesisch hat vier verschiedene Wörter für „nicht“ – jedes hat seine eigene Aufgabe:
| Wort | Wofür? | Beispiel |
| tidak | Verben und Adjektive | Saya tidak lapar. – Ich habe keinen Hunger. |
| bukan | Nomen und Pronomen | Ini bukan kopi. – Das ist kein Kaffee. |
| belum | noch nicht | Saya belum makan. – Ich habe noch nicht gegessen. |
| jangan | Verbote: „tu nicht!“ | Jangan pergi! – Geh nicht! |

## tidak oder bukan?
Faustregel: Folgt ein **Ding oder eine Person** → **bukan**. Folgt ein **Tun oder eine Eigenschaft** → **tidak**.
= Dia bukan guru. :: Er/Sie ist kein Lehrer.
= Dia tidak bekerja. :: Er/Sie arbeitet nicht.

## belum – das optimistische Nein
Auf Fragen mit **sudah** („schon?“) antwortet man mit **belum** („noch nicht“) statt mit tidak. Das klingt, als würde es noch passieren – und ist viel höflicher:
= Sudah menikah? – Belum. :: Schon verheiratet? – Noch nicht.
= Sudah makan? – Sudah. :: Schon gegessen? – Ja, schon.

## Ja-/Nein-Fragen
Einfach die Stimme am Ende heben – oder (formeller) **apakah** an den Anfang stellen. Antwort: **ya** oder **tidak** (bei Nomen **bukan**).
= Kamu lapar? :: Hast du Hunger?
= Apakah ini hotel Anda? – Bukan. :: Ist das Ihr Hotel? – Nein.

> **…, kan?** oder **…, bukan?** am Satzende heißt „…, oder?“: **Kamu orang Jerman, kan?**

> Im Alltag wird **tidak** fast immer zu **nggak** oder **gak**.
`, quiz: [
  ["**Ini ___ rumah saya.** (Das ist nicht mein Haus.)", ["bukan", "tidak", "jangan"], 0, "Vor einem Nomen (rumah) steht bukan."],
  ["„Hast du schon gegessen?“ – Du hast noch nicht. Was antwortest du?", ["Belum.", "Tidak.", "Jangan."], 0, "Auf sudah-Fragen antwortet man mit belum."],
  ["„Rauch nicht!“ (rauchen = merokok)", ["Jangan merokok!", "Tidak merokok!", "Bukan merokok!"], 0, "Verbote und Bitten, etwas nicht zu tun, beginnen mit jangan."],
]},

g05: { title: "Zahlen – ein Baukasten", body: `
Wenn du 1 bis 10 kannst, kannst du fast alle Zahlen bilden.
| Zahl | Indonesisch |
| 0 | nol (Telefon: kosong) |
| 1 | satu |
| 2 | dua |
| 3 | tiga |
| 4 | empat |
| 5 | lima |
| 6 | enam |
| 7 | tujuh |
| 8 | delapan |
| 9 | sembilan |
| 10 | sepuluh |

## 11 bis 19: belas
**belas** heißt „-zehn“. Nur die 11 ist besonders: **se**belas („ein-zehn“).
= sebelas :: 11
= dua belas :: 12
= tujuh belas :: 17

## Zehner: puluh
**puluh** heißt „Zehner“. Einfach von links nach rechts lesen – nicht wie im Deutschen umdrehen!
= dua puluh :: 20
= dua puluh satu :: 21 (wörtlich: zwei Zehner eins)
= sembilan puluh sembilan :: 99

## se- bedeutet „ein-“
Statt **satu** sagt man in Zusammensetzungen **se-**: **sepuluh** (10), **sebelas** (11), **seratus** (100), **seribu** (1000).

## Ordnungszahlen
**ke-** davor: **kedua** (zweite), **ketiga** (dritte). Ausnahme: **pertama** (erste).
= Ini pertama kali saya ke sini. :: Ich bin zum ersten Mal hier.
`, quiz: [
  ["Was ist **dua puluh lima**?", ["25", "52", "12"], 0, "Zwei Zehner (dua puluh) und fünf (lima)."],
  ["Wie sagt man 13?", ["tiga belas", "tiga puluh", "sebelas tiga"], 0, "belas = -zehn. tiga puluh wäre 30."],
  ["„der/die/das erste“ heißt …", ["pertama", "kesatu", "satu kali"], 0, "pertama ist die übliche Form; ke- gilt ab „zweite“ (kedua)."],
]},

g06: { title: "Das Wichtigste zuerst: Wortstellung", body: `
## Hauptsache vorn, Beschreibung danach
Im Indonesischen kommt das **Ding zuerst**, die Beschreibung danach – genau umgekehrt wie im Deutschen.
| Indonesisch | wörtlich | Deutsch |
| nasi goreng | Reis gebraten | gebratener Reis |
| air panas | Wasser heiß | heißes Wasser |
| rumah besar | Haus groß | großes Haus |
| teh manis | Tee süß | süßer Tee |

## Besitz: einfach dahinter
Auch der Besitzer steht **nach** dem Ding:
= rumah saya :: mein Haus (wörtlich: Haus ich)
= nama kamu :: dein Name
= mobil teman saya :: das Auto meines Freundes

> Achtung: **ikan goreng** = gebratener Fisch, aber **goreng ikan** = Fisch braten.

## Ausdruck oder Satz?
| | |
| rumah besar | ein großes Haus |
| Rumah itu besar. | Das Haus ist groß. |
| Rumahnya besar. | Das (bzw. sein) Haus ist groß. |

## Keine Mehrzahl, keine Artikel
**kopi** kann „Kaffee“, „ein Kaffee“, „der Kaffee“ oder „Kaffees“ heißen – der Zusammenhang entscheidet.
`, quiz: [
  ["„Kalter Tee“ (kalt = dingin)", ["teh dingin", "dingin teh", "teh ini dingin"], 0, "Beschreibung nach dem Nomen. teh ini dingin wäre ein Satz: „Dieser Tee ist kalt“."],
  ["„Mein Kaffee“ heißt …", ["kopi saya", "saya kopi", "saya punya kopi"], 0, "Der Besitzer steht hinten. saya punya kopi heißt „Ich habe Kaffee“."],
  ["**ayam goreng** bedeutet …", ["frittiertes Hähnchen", "Hähnchen frittieren", "Hähnchenbrühe"], 0, "Ding zuerst (ayam), Beschreibung danach (goreng)."],
]},

g07: { title: "Höflich bitten & bestellen", body: `
Die wichtigsten Wörter, um etwas zu bekommen:
| Wort | Bedeutung | Beispiel |
| mau | wollen, möchten | Saya mau kopi. |
| minta | bitten um, „ich hätte gern“ | Minta air, ya. |
| tolong | bitte (tu etwas für mich) | Tolong bantu saya. |
| boleh | dürfen | Boleh saya duduk? |
| bisa | können | Bisa pelan-pelan? |
| silakan | bitte (sehr) – wenn du etwas anbietest | Silakan masuk. |

## tolong oder silakan?
Beide heißen „bitte“ – aber in entgegengesetzte Richtungen:
- **tolong** → du **bittest** jemanden, etwas für dich zu tun.
- **silakan** → du **bietest** jemandem etwas an oder erlaubst es.
= Tolong tutup pintunya. :: Mach bitte die Tür zu.
= Silakan duduk. :: Bitte, setz dich.

## Das magische „ya“
Ein **ya** am Satzende macht jede Bitte weicher und freundlicher – wie „…, ja?“ oder „bitte“.
= Minta bonnya, ya. :: Die Rechnung, bitte.
= Satu lagi, ya. :: Noch eins, bitte.

## Bestellen im Warung
= Saya mau pesan nasi goreng satu. :: Ich hätte gern einmal gebratenen Reis.
= Tidak pakai es, ya. :: Ohne Eis, bitte.
= Makan di sini atau dibungkus? :: Hier essen oder zum Mitnehmen?

> Beim Bestellen steht die Zahl oft **hinter** dem Gericht: **es teh dua** = zwei Eistee.
`, quiz: [
  ["Du bittest jemanden, dir zu helfen. Wie fängst du an?", ["Tolong …", "Silakan …", "Sama-sama …"], 0, "tolong = bitte (für mich tun)."],
  ["Du bietest einem Gast einen Stuhl an:", ["Silakan duduk.", "Tolong duduk.", "Minta duduk."], 0, "silakan = bitte sehr, nur zu."],
  ["„Ich hätte gern Wasser“ – am natürlichsten:", ["Minta air, ya.", "Air minta saya.", "Saya air."], 0, "minta + Ding + ya ist die typische freundliche Bitte."],
]},

g08: { title: "Fragen stellen", body: `
Gute Nachricht: Die Satzstellung bleibt meist gleich. Das Fragewort steht dort, wo die Antwort stehen würde – oder am Anfang.
| Fragewort | Bedeutung |
| apa | was |
| siapa | wer |
| di mana | wo |
| ke mana | wohin |
| dari mana | woher |
| kapan | wann |
| kenapa / mengapa | warum |
| bagaimana (gimana) | wie |
| berapa | wie viel(e) |
| yang mana | welche(r, s) |
= Kamu mau makan apa? :: Was willst du essen?
= Kamu kerja di mana? :: Wo arbeitest du?
= Berapa harganya? :: Wie viel kostet es?

## berapa – für alles mit Zahlen
**berapa** fragt nach jeder Zahl: Preis, Alter, Uhrzeit, Telefonnummer, Anzahl.
= Umurnya berapa? :: Wie alt ist er/sie?
= Jam berapa? :: Wie spät ist es? / Um wie viel Uhr?
= Nomor HP kamu berapa? :: Wie ist deine Handynummer?

## Bitten als Frage
Mit **bisa** (können) und **boleh** (dürfen) werden Fragen zu höflichen Bitten:
= Bisa bantu saya? :: Können Sie mir helfen?
= Boleh foto? :: Darf ich ein Foto machen?

> Umgangssprachlich wird **bagaimana** zu **gimana**, und bei Überraschung sagt man statt kenapa oft **kok**: „Wieso denn?“
`, quiz: [
  ["„Wann kommst du?“", ["Kapan kamu datang?", "Kenapa kamu datang?", "Bagaimana kamu datang?"], 0, "kapan = wann, kenapa = warum, bagaimana = wie."],
  ["Nach dem Preis fragst du mit …", ["berapa", "apa", "yang mana"], 0, "berapa fragt nach allen Zahlen."],
  ["**Kamu tinggal di mana?** bedeutet …", ["Wo wohnst du?", "Wohin gehst du?", "Woher kommst du?"], 0, "tinggal = wohnen, di mana = wo."],
]},

g09: { title: "Zeit ohne Zeitformen", body: `
Indonesische Verben ändern sich **nie** – egal ob gestern, heute oder morgen. Die Zeit erkennst du an kleinen Hilfswörtern oder Zeitangaben.
| Wort | Bedeutung | Beispiel |
| sudah | schon (abgeschlossen) | Saya sudah makan. – Ich habe gegessen. |
| belum | noch nicht | Saya belum makan. – Ich habe noch nicht gegessen. |
| sedang | gerade dabei | Saya sedang makan. – Ich esse gerade. |
| akan | werden (Zukunft) | Saya akan makan. – Ich werde essen. |
| masih | (immer) noch | Saya masih makan. – Ich esse noch. |
| baru | gerade erst | Saya baru makan. – Ich habe gerade erst gegessen. |
| mau | gleich, wollen | Saya mau makan. – Ich will (gleich) essen. |

## Oft reicht eine Zeitangabe
Wenn klar ist, wann etwas passiert, braucht es gar kein Hilfswort:
= Kemarin saya ke pantai. :: Gestern war ich am Strand.
= Besok saya kerja. :: Morgen arbeite ich.
= Tadi saya lihat dia. :: Ich habe ihn/sie vorhin gesehen.

## tadi, nanti, dulu
- **tadi** = vorhin (heute, schon vorbei): **tadi pagi** = heute Morgen (vorbei)
- **nanti** = nachher (heute, kommt noch): **nanti malam** = heute Abend
- **tadi malam** = gestern Abend / letzte Nacht
- **dulu** = früher; auch „erst mal“: **Saya makan dulu.** – Ich esse erst mal.

> Umgangssprachlich: **udah** statt sudah, **lagi** statt sedang – **Lagi makan.** = Bin gerade am Essen.
`, quiz: [
  ["„Ich habe schon bestellt“ (bestellen = pesan)", ["Saya sudah pesan.", "Saya akan pesan.", "Saya sedang pesan."], 0, "sudah = abgeschlossen."],
  ["**Dia masih tidur.** bedeutet …", ["Er/Sie schläft noch.", "Er/Sie hat geschlafen.", "Er/Sie wird schlafen."], 0, "masih = immer noch."],
  ["„Heute Abend“ (kommt noch) heißt …", ["nanti malam", "tadi malam", "malam lalu"], 0, "nanti = kommt noch. tadi malam war gestern Abend."],
]},

g10: { title: "Verben: Grundform genügt", body: `
## Verben ändern sich nie
Im Alltag benutzt man Verben oft in ihrer **Grundform**: **makan, minum, pergi, tidur, beli, lihat**. Sie ändern sich nicht nach Person und nicht nach Zeit.
= Saya makan. Kamu makan. Mereka makan. :: Ich esse. Du isst. Sie essen.

## Kurzform und Langform
Viele Verben haben in der Schriftsprache eine **Vorsilbe** (meist **me-** oder **ber-**). Gesprochen lässt man sie oft weg:
| Alltag | formell | Bedeutung |
| beli | membeli | kaufen |
| lihat | melihat | sehen |
| baca | membaca | lesen |
| tulis | menulis | schreiben |
| kerja | bekerja | arbeiten |
| tanya | bertanya | fragen |
Du lernst jetzt die Kurzformen – damit kannst du sofort sprechen. Die Vorsilben kommen später in eigenen Lektionen. Wer die Grundform kennt, erkennt auch die Langform.

## Verben einfach aneinanderreihen
Wie im Deutschen „essen gehen“: Verben stehen einfach hintereinander.
= Saya mau pergi makan. :: Ich will essen gehen.
= Ayo pulang! :: Lass uns nach Hause gehen!

> Manche Verben haben nie eine Vorsilbe, auch nicht formell: **makan, minum, tidur, pergi, datang, pulang, mandi, duduk, tinggal, mau, suka**.
`, quiz: [
  ["„Wir trinken Kaffee.“", ["Kami minum kopi.", "Kami minumkan kopi.", "Kami diminum kopi."], 0, "Das Verb bleibt einfach in der Grundform."],
  ["Die Langform von **beli** (kaufen) ist …", ["membeli", "berbeli", "dibeli"], 0, "dibeli ist Passiv („gekauft werden“) – das kommt später."],
  ["Welches Verb bekommt auch formell keine Vorsilbe?", ["makan", "baca", "tulis"], 0, "makan bleibt immer makan. baca → membaca, tulis → menulis."],
]},

g11: { title: "Mehrzahl & Verdopplung", body: `
Indonesisch hat keine Pluralendung. Meist zeigt der Zusammenhang, ob es eins oder viele sind.

## Verdoppeln = viele
Verdoppelt man ein Nomen, wird es ausdrücklich Mehrzahl (oft „alle möglichen …“):
= anak-anak :: Kinder
= buku-buku :: Bücher
> Wenn schon eine **Zahl** oder ein **Mengenwort** dabei ist, wird **nicht** verdoppelt: **dua anak** (zwei Kinder), **banyak orang** (viele Leute).

## Verdopplung kann noch mehr
| Wort | verdoppelt | Bedeutung |
| jalan (gehen) | jalan-jalan | bummeln, herumreisen |
| pelan (langsam) | pelan-pelan | ganz langsam |
| hati (Herz) | hati-hati | Vorsicht! |
| kadang | kadang-kadang | manchmal |
| sama | sama-sama | gern geschehen; beide |
Bei Verben heißt es oft „ein bisschen herum-…“, bei Adjektiven „sehr“ oder „alle“.

## Familie: Alter vor Geschlecht
**kakak** = ältere Geschwister, **adik** = jüngere. Das Geschlecht hängt man nur bei Bedarf an: **kakak laki-laki** (älterer Bruder), **adik perempuan** (jüngere Schwester).
`, quiz: [
  ["„Drei Kinder“ heißt …", ["tiga anak", "tiga anak-anak", "anak tiga-tiga"], 0, "Mit Zahl wird nicht verdoppelt."],
  ["**pelan-pelan** bedeutet …", ["ganz langsam", "Langsamkeit", "viele Langsame"], 0, "Verdoppelte Adjektive verstärken oft."],
  ["Deine jüngere Schwester ist deine …", ["adik perempuan", "kakak perempuan", "adik laki-laki"], 0, "adik = jünger, perempuan = weiblich."],
]},

g12: { title: "Große Zahlen, Preise & Handeln", body: `
| Zahl | Indonesisch |
| 100 | seratus |
| 200 | dua ratus |
| 1.000 | seribu |
| 5.000 | lima ribu |
| 10.000 | sepuluh ribu |
| 25.000 | dua puluh lima ribu |
| 150.000 | seratus lima puluh ribu |
| 1.000.000 | sejuta / satu juta |
| 2.500.000 | dua juta lima ratus ribu |

## So liest du Preise
Indonesien schreibt Tausenderpunkte wie wir: **Rp 35.000** = **tiga puluh lima ribu (rupiah)**. Oft lässt man „rupiah“ weg. Auf Schildern steht manchmal **35rb** oder **35K**.
= Ini berapa? – Tiga puluh lima ribu. :: Wie viel kostet das? – 35.000.

## Handeln auf dem Markt
Auf Märkten (nicht im Supermarkt) ist Handeln normal und freundlich gemeint:
= Bisa kurang? :: Geht's billiger?
= Kalau dua puluh ribu, boleh? :: Wie wär's mit 20.000?
= Harga pas. :: Festpreis.
> Lächeln hilft! Und wer einen Preis vorschlägt, der angenommen wird, sollte auch kaufen.

## Zählwörter
Beim Zählen steht oft ein Zählwort zwischen Zahl und Nomen. Die wichtigsten:
| Zählwort | für | Beispiel |
| orang | Menschen | dua orang teman – zwei Freunde |
| buah | Dinge allgemein | sebuah rumah – ein Haus |
| ekor | Tiere | tiga ekor kucing – drei Katzen |
Im Alltag lässt man das Zählwort oft weg: **dua kopi**.
`, quiz: [
  ["Rp 75.000 spricht man …", ["tujuh puluh lima ribu", "tujuh lima ribu", "tujuh puluh lima ratus"], 0, "75 (tujuh puluh lima) Tausend (ribu)."],
  ["„Geht's billiger?“", ["Bisa kurang?", "Bisa lebih?", "Bisa mahal?"], 0, "kurang = weniger."],
  ["**seratus ribu** ist …", ["100.000", "1.000.000", "10.000"], 0, "seratus (100) × ribu (1.000)."],
]},

g13: { title: "Wo ist was? Ortsangaben", body: `
Ortsangaben bildest du mit **di / ke / dari** + einem Wort für die Position:
| Indonesisch | Deutsch |
| di depan | vor, vorne |
| di belakang | hinter, hinten |
| di samping / di sebelah | neben |
| di atas | auf, über, oben |
| di bawah | unter, unten |
| di dalam | in, drinnen |
| di luar | außerhalb, draußen |
| di antara | zwischen |
| di seberang | gegenüber |
= Tasnya di atas meja. :: Die Tasche ist auf dem Tisch.
= Saya tunggu di depan hotel. :: Ich warte vor dem Hotel.
= Toiletnya di belakang. :: Die Toilette ist hinten.

## Wegbeschreibung
= Jalan lurus, lalu belok kiri. :: Geradeaus gehen, dann links abbiegen.
= Di lampu merah belok kanan. :: An der Ampel rechts abbiegen.
= Dekat dari sini? :: Ist es nah von hier?

## Verkehrsmittel mit naik
Für „fahren mit, nehmen“ sagt man **naik** (wörtlich: hinaufsteigen):
= Saya naik ojek. :: Ich fahre mit dem Motorradtaxi.
= Naik apa ke sana? :: Womit fährt man dahin?

> **Ojek** sind Motorradtaxis – per App (z. B. Gojek, Grab) oder an der Straßenecke. Den Preis vorher klären!
`, quiz: [
  ["„Hinter dem Haus“", ["di belakang rumah", "di depan rumah", "rumah belakang di"], 0, "di + Position + Ort."],
  ["„Ich nehme ein Taxi.“", ["Saya naik taksi.", "Saya turun taksi.", "Saya taksi naik."], 0, "naik = einsteigen/fahren mit, turun = aussteigen."],
  ["**lurus** heißt …", ["geradeaus", "links", "abbiegen"], 0, "kiri = links, belok = abbiegen."],
]},

g14: { title: "Uhrzeit & Wochentage", body: `
## Uhrzeit
Uhrzeit = **jam** + Zahl. Formell (Fahrpläne, Termine) sagt man **pukul**.
| Uhrzeit | Indonesisch |
| 3:00 | jam tiga |
| 3:10 | jam tiga lewat sepuluh |
| 3:15 | jam tiga lewat seperempat |
| 3:30 | jam setengah empat |
| 3:45 | jam empat kurang seperempat |
| 3:50 | jam empat kurang sepuluh |
> **setengah empat** heißt „halb vier“ = 3:30 – genau wie im Deutschen!

## Tageszeit dazu
**jam tujuh pagi** (7 Uhr morgens), **jam tiga sore** (15 Uhr), **jam delapan malam** (20 Uhr).

## jam oder berapa jam?
| | |
| jam dua | zwei Uhr |
| dua jam | zwei Stunden |
| jam berapa? | wie spät? / um wie viel Uhr? |
| berapa jam? | wie viele Stunden? |

## Wochentage
**Senin, Selasa, Rabu, Kamis, Jumat, Sabtu, Minggu** – fast alle aus dem Arabischen. Davor steht oft **hari** („Tag“): **hari Jumat** = Freitag, **pada hari Senin** = am Montag.
= Kita bertemu hari Sabtu. :: Wir treffen uns am Samstag.
= Hari ini hari apa? :: Welcher Tag ist heute?
> **minggu** klein = Woche, **Minggu** groß = Sonntag.

> „Jam karet“ („Gummi-Zeit“): In Indonesien sind Zeitangaben im Privaten oft dehnbar. Bei Behörden und im Job lieber pünktlich sein!
`, quiz: [
  ["**jam setengah delapan** ist …", ["7:30", "8:30", "8:00"], 0, "setengah delapan = halb acht = 7:30."],
  ["„Zwei Stunden“ heißt …", ["dua jam", "jam dua", "jam dua-dua"], 0, "Zahl vor jam = Dauer, jam vor Zahl = Uhrzeit."],
  ["„Viertel vor fünf“", ["jam lima kurang seperempat", "jam empat lewat seperempat", "jam setengah lima"], 0, "kurang = vor, seperempat = Viertel."],
]},

g15: { title: "Wie oft? Erfahrungen & „noch“", body: `
## Wie oft?
| Wort | Bedeutung |
| selalu | immer |
| biasanya | normalerweise |
| sering | oft |
| kadang-kadang | manchmal |
| jarang | selten |
| tidak pernah | nie |
Diese Wörter stehen meist **vor dem Verb**:
= Saya sering makan di warung. :: Ich esse oft im Warung.
= Dia jarang minum kopi. :: Er/Sie trinkt selten Kaffee.

## pernah – „schon einmal“
**pernah** fragt nach Erfahrungen. Verneint: **belum pernah** (noch nie – aber vielleicht noch) oder **tidak pernah** (nie).
= Kamu pernah ke Lombok? – Belum pernah. :: Warst du schon mal auf Lombok? – Noch nie.

## Wie viele Male? kali
**kali** = Mal: **sekali** (einmal), **dua kali** (zweimal). **se-** + Zeitwort heißt „pro“: **sehari** (pro Tag), **seminggu** (pro Woche), **sebulan** (pro Monat).
= Minum obat tiga kali sehari. :: Nimm das Medikament dreimal täglich.

## lagi und masih
- **lagi** nach Verb oder Nomen = wieder, noch: **Datang lagi, ya!** (Komm wieder!), **satu lagi** (noch eins)
- **masih** = immer noch: **Masih hujan.** (Es regnet immer noch.)
- **tidak … lagi** = nicht mehr: **Saya tidak merokok lagi.** (Ich rauche nicht mehr.)
`, quiz: [
  ["„Ich war noch nie in Jakarta.“", ["Saya belum pernah ke Jakarta.", "Saya sudah ke Jakarta.", "Saya pernah tidak ke Jakarta."], 0, "belum pernah = noch nie."],
  ["**dua kali seminggu** bedeutet …", ["zweimal pro Woche", "in zwei Wochen", "zwei Wochen lang"], 0, "kali = Mal, seminggu = pro Woche."],
  ["„Ich trinke keinen Kaffee mehr.“", ["Saya tidak minum kopi lagi.", "Saya masih minum kopi.", "Saya lagi minum kopi."], 0, "tidak … lagi = nicht mehr. (Saya lagi minum kopi = Ich trinke gerade Kaffee.)"],
]},

g16: { title: "Sehr, zu, etwas: Verstärken", body: `
| Wort | Stellung | Bedeutung | Beispiel |
| sangat | davor | sehr | sangat enak |
| sekali | danach | sehr | enak sekali |
| banget | danach (umgs.) | total, echt | enak banget |
| terlalu | davor | zu | terlalu pedas |
| agak | davor | etwas, ziemlich | agak mahal |
| cukup | davor | ziemlich; genug | cukup bagus |
| kurang | davor | nicht so, zu wenig | kurang manis |
| paling | davor | am …sten | paling enak |
= Makanannya enak sekali! :: Das Essen ist sehr lecker!
= Ini terlalu mahal. :: Das ist zu teuer.
= Kopinya kurang manis. :: Der Kaffee ist nicht süß genug.

> **kurang** ist ein höflicher Trick: **kurang bagus** („nicht so gut“) klingt viel sanfter als **jelek** („schlecht“). Indonesier vermeiden direkte Kritik.

## Gefühle ausdrücken
Gefühle sind Adjektive – also wieder ohne „sein“:
= Saya senang sekali. :: Ich freue mich sehr.
= Saya agak capek. :: Ich bin etwas müde.
`, quiz: [
  ["„Das ist zu scharf.“", ["Ini terlalu pedas.", "Ini pedas terlalu.", "Ini sangat pedas sekali."], 0, "terlalu steht vor dem Adjektiv."],
  ["Wo steht **sekali** („sehr“)?", ["nach dem Adjektiv", "vor dem Adjektiv", "am Satzanfang"], 0, "enak sekali – sangat steht davor, sekali danach."],
  ["Höflich sagen, dass etwas nicht so gut ist:", ["kurang bagus", "sangat jelek", "bagus sekali"], 0, "kurang macht Kritik weich."],
]},

g17: { title: "ada & punya: es gibt, haben", body: `
## ada – „es gibt“ und „da sein“
**ada** ist eines der nützlichsten Wörter überhaupt:
= Ada air panas? :: Gibt es warmes Wasser?
= Ada kamar kosong? :: Gibt es ein freies Zimmer?
= Pak Budi ada? :: Ist Herr Budi da?
= Tidak ada. :: Gibt es nicht. / Ist nicht da.
Im Alltag heißt **ada** auch „haben“: **Saya ada pertanyaan.** – Ich habe eine Frage.

## punya – besitzen
= Saya punya dua anak. :: Ich habe zwei Kinder.
= Kamu punya pacar? :: Hast du einen Freund / eine Freundin?
**Punya siapa?** = Wem gehört das? – **Punya saya.** = Mir.

## Noch da oder schon alle?
= Masih ada? :: Gibt es noch welche?
= Sudah habis. :: Schon alle / ausverkauft.

## -nya als „der, die, das“
An Dinge, über die gerade gesprochen wird, hängt man oft **-nya** – wie einen bestimmten Artikel:
= Kamarnya bersih. :: Das Zimmer ist sauber.
= Kuncinya di mana? :: Wo ist der Schlüssel?
Mehr zu **-nya** kommt in einer späteren Lektion.
`, quiz: [
  ["„Gibt es warmes Wasser?“", ["Ada air panas?", "Air panas punya?", "Ada panas air?"], 0, "ada = es gibt. Und: air panas (Ding vor Eigenschaft)."],
  ["„Ich habe ein Auto.“", ["Saya punya mobil.", "Saya ada di mobil.", "Mobil saya punya."], 0, "Saya ada di mobil hieße „Ich bin im Auto“."],
  ["**Tidak ada.** bedeutet …", ["Gibt es nicht.", "Macht nichts.", "Ist nicht teuer."], 0, "„Macht nichts“ wäre tidak apa-apa."],
]},

g18: { title: "Können, dürfen, müssen", body: `
Modalverben stehen einfach vor dem Hauptverb:
| Wort | Bedeutung | Beispiel |
| bisa | können | Saya bisa berenang. |
| boleh | dürfen | Boleh saya masuk? |
| harus | müssen | Saya harus kerja. |
| perlu | brauchen, müssen | Kamu perlu istirahat. |
| mau | wollen | Saya mau pulang. |
| ingin | wünschen (gehoben) | Saya ingin ke Bali. |
| suka | mögen, gern tun | Saya suka masak. |

## Verneinung
| | |
| tidak bisa | nicht können |
| tidak boleh | nicht dürfen |
| tidak harus | nicht müssen |
| tidak usah / tidak perlu | nicht nötig |
= Di sini tidak boleh merokok. :: Hier darf man nicht rauchen.
= Tidak usah, terima kasih. :: Nicht nötig, danke.
> **Tidak usah** ist perfekt, um höflich abzulehnen – z. B. Tüten, Strohhalme oder Hilfe.

## Ratschläge
**sebaiknya** (am besten) und **lebih baik** (lieber):
= Sebaiknya kamu bawa payung. :: Du solltest besser einen Schirm mitnehmen.

## terserah – „wie du willst“
**Terserah (kamu).** = „Wie du willst / Entscheide du.“ Sehr häufig – kann je nach Tonfall aber auch genervt klingen!
`, quiz: [
  ["„Darf ich hier parken?“", ["Boleh saya parkir di sini?", "Harus saya parkir di sini?", "Bisa saya parkir sini di?"], 0, "boleh = dürfen."],
  ["Jemand will dir eine Tüte geben, du brauchst keine:", ["Tidak usah, terima kasih.", "Tidak boleh!", "Jangan tolong."], 0, "tidak usah = nicht nötig."],
  ["„Ich muss morgen arbeiten.“", ["Saya harus kerja besok.", "Saya boleh kerja besok.", "Saya kerja harus besok."], 0, "harus = müssen, steht vor dem Verb."],
]},

g19: { title: "Aufforderungen & beim Arzt", body: `
## Einfach das Verb
Die kürzeste Aufforderung ist das Verb allein – klingt aber recht direkt:
= Duduk! :: Setz dich!
Darum macht man es weicher:
| Wort | Wirkung | Beispiel |
| tolong … | bitte (für mich) | Tolong panggil dokter. |
| silakan … | bitte (gern, nur zu) | Silakan makan. |
| mohon … | bitte (formell, Schilder) | Mohon tunggu. |
| coba … | versuch mal | Coba lihat ini. |
| ayo … / … yuk | lass uns! komm! | Ayo makan! |
| mari … | lass uns (formell) | Mari kita mulai. |
| jangan … | nicht! | Jangan khawatir. |
| … dulu | erst mal | Duduk dulu. |
| … ya | macht's freundlich | Tunggu sebentar, ya. |

## -lah
Die Endung **-lah** macht eine Aufforderung freundlich-nachdrücklich: **Makanlah!** (Iss doch!). Klingt etwas schriftlich – im Alltag sagt man eher **ya** oder **dong**.

## Beim Arzt
= Saya sakit perut. :: Ich habe Bauchschmerzen.
= Sudah berapa hari? :: Seit wie vielen Tagen?
= Minum obat ini dua kali sehari. :: Nimm dieses Medikament zweimal täglich.
> **sakit** + Körperteil = Schmerzen: **sakit kepala** (Kopfschmerzen), **sakit gigi** (Zahnschmerzen). **Cepat sembuh!** = Gute Besserung!
`, quiz: [
  ["„Keine Sorge!“ (sich sorgen = khawatir)", ["Jangan khawatir!", "Tidak khawatir!", "Silakan khawatir!"], 0, "jangan = tu nicht."],
  ["Du forderst Freunde auf, jetzt zu essen:", ["Ayo makan!", "Tolong makan!", "Jangan makan!"], 0, "ayo = los, lass uns."],
  ["„Zahnschmerzen“", ["sakit gigi", "gigi sakit-sakit", "dokter gigi"], 0, "sakit + Körperteil. dokter gigi = Zahnarzt."],
]},

g20: { title: "Das vielseitige -nya", body: `
## Besitz als Endung
Pronomen können als Endung an ein Nomen gehängt werden:
| Endung | von | Beispiel |
| -ku | aku | rumahku – mein Haus |
| -mu | kamu | namamu – dein Name |
| -nya | dia | mobilnya – sein/ihr Auto |
= Siapa namamu? :: Wie heißt du?
= Ini HP-ku. :: Das ist mein Handy.
> **-ku** und **-mu** sind vertraut. Höflich bleibt man mit **nama Bapak**, **rumah Ibu**.

## Das Allzweck-nya
**-nya** ist die häufigste Endung im Indonesischen. Sie kann bedeuten:
- **sein / ihr**: **Ibunya guru.** – Seine Mutter ist Lehrerin.
- **der, die, das** (bekannt): **Kopinya enak.** – Der Kaffee ist lecker.
- **höfliches „Ihr“** ohne Pronomen: **Namanya siapa?** – Wie heißen Sie?
- macht Wörter zu Nomen: **Harganya berapa?** – Wie ist der Preis?
= Rumahnya di mana? :: Wo ist sein/ihr Haus? – oder: Wo ist das Haus?
> Faustregel: Häng **-nya** an Dinge, über die gerade gesprochen wird. Klingt fast immer natürlicher.

## Höflich nach Persönlichem fragen
= Aslinya dari mana? :: Woher kommen Sie ursprünglich?
= Sudah lama di sini? :: Sind Sie schon lange hier?
= Kerja di mana? :: Wo arbeiten Sie?
Das Pronomen wegzulassen ist im Indonesischen sehr üblich – und höflich.
`, quiz: [
  ["„dein Freund“ (vertraut)", ["temanmu", "temanku", "temannya"], 0, "-mu kommt von kamu."],
  ["**Makanannya enak.**", ["Das Essen ist lecker.", "Ich esse lecker.", "Lecker essen!"], 0, "-nya = das (bekannte) Essen."],
  ["„sein/ihr Name“", ["namanya", "namaku", "dia nama"], 0, "-nya kommt von dia."],
]},

g21: { title: "Vergleichen & das Wörtchen yang", body: `
## Vergleichen
| Muster | Bedeutung | Beispiel |
| lebih … (daripada) | …er (als) | lebih murah – billiger |
| paling … | am …sten | paling murah – am billigsten |
| ter… | am …sten (schriftlich) | termurah |
| se… | so … wie | setinggi saya – so groß wie ich |
| kurang … | weniger … | kurang pedas – weniger scharf |
= Bali lebih kecil daripada Jawa. :: Bali ist kleiner als Java.
= Ini yang paling enak. :: Das ist das Leckerste.
= Harganya sama. :: Der Preis ist gleich.

## yang – das Verbindungswort
**yang** heißt „der/die/das …, welche(r)“ und verbindet ein Nomen mit einer Beschreibung:
= Saya mau yang merah. :: Ich möchte das Rote.
= Orang yang tinggal di sana. :: Die Person, die dort wohnt.
= Kamar yang besar lebih mahal. :: Das große Zimmer ist teurer.
Du brauchst **yang** besonders, wenn du auswählst („das …e“) oder die Beschreibung länger ist.
> **Yang mana?** = Welches? – **Yang ini.** = Das hier.
`, quiz: [
  ["„Billiger als hier“", ["lebih murah daripada di sini", "paling murah di sini", "murah lebih di sini"], 0, "lebih + Adjektiv + daripada."],
  ["„Ich nehme das Große.“", ["Saya ambil yang besar.", "Saya ambil besar yang.", "Saya yang ambil besar."], 0, "yang + Beschreibung = „das …e“."],
  ["„am wichtigsten“", ["paling penting", "lebih penting", "penting sekali paling"], 0, "paling = am meisten."],
]},

g22: { title: "Sätze verbinden", body: `
| Wort | Bedeutung | Alltag |
| dan | und | |
| atau | oder | |
| tetapi | aber | tapi |
| karena | weil | soalnya |
| jadi | also, deshalb | |
| kalau | wenn, falls | kalo |
| waktu / ketika | als (zeitlich) | |
| sebelum | bevor | |
| sesudah / setelah | nachdem | habis |
| supaya | damit | biar |
| meskipun | obwohl | walaupun |
| sambil | während, nebenbei | |
| lalu / terus | dann | |

Die Satzstellung bleibt **immer gleich** – kein Verb ans Ende wie im Deutschen!
= Saya tidak datang karena saya sakit. :: Ich komme nicht, weil ich krank bin.
= Kalau hujan, kita di rumah saja. :: Wenn es regnet, bleiben wir einfach zu Hause.
= Saya makan dulu, lalu mandi. :: Ich esse erst, dann dusche ich.
= Meskipun capek, dia tetap kerja. :: Obwohl er/sie müde ist, arbeitet er/sie weiter.

## bahwa – dass
= Saya tahu bahwa dia sibuk. :: Ich weiß, dass er/sie beschäftigt ist.
Im Gespräch wird **bahwa** oft weggelassen: **Saya pikir dia sudah pulang.**
`, quiz: [
  ["„Ich lerne, damit ich sprechen kann.“", ["Saya belajar supaya bisa bicara.", "Saya belajar karena bisa bicara.", "Saya belajar tapi bisa bicara."], 0, "supaya = damit."],
  ["Wo steht das Verb nach **karena**?", ["wie im Hauptsatz – keine Umstellung", "am Satzende", "ganz am Anfang"], 0, "Indonesisch stellt in Nebensätzen nichts um."],
  ["**kalau** bedeutet …", ["wenn, falls", "weil", "obwohl"], 0, "weil = karena, obwohl = meskipun."],
]},

g25: { title: "Formelle Sprache im Beruf", body: `
Im Job, bei Behörden und gegenüber Älteren ist Indonesisch deutlich förmlicher als unter Freunden.
| Alltag | formell | Bedeutung |
| aku | saya | ich |
| kamu | Bapak / Ibu / Anda | du → Sie |
| nggak | tidak | nicht |
| udah | sudah | schon |
| mau | ingin / akan | wollen / werden |
| bilang | mengatakan | sagen |
| kasih | memberi / memberikan | geben |
| tolong | mohon | bitte |
= Mohon maaf atas keterlambatannya. :: Bitte entschuldigen Sie die Verspätung.
= Mohon ditunggu. :: Bitte warten Sie.
= Bapak sudah makan siang? :: Haben Sie schon zu Mittag gegessen?

## E-Mails und Nachrichten
| Anfang | Schluss |
| Selamat pagi, Bapak/Ibu … | Terima kasih atas perhatiannya. |
| Dengan hormat, (Sehr geehrte …) | Hormat saya, (Hochachtungsvoll) |
| Yth. Bapak … (Sehr geehrter Herr …) | Salam, (Grüße) |

> Kollegen spricht man gern mit **Pak** / **Bu** + Vorname an: **Pak Andi**, **Bu Sari**. Vorgesetzte nie mit **kamu**!

> Die Frage „Sudah makan?“ ist übrigens oft gar keine Frage nach dem Essen, sondern einfach eine freundliche Geste – wie „Wie geht's?“.
`, quiz: [
  ["Formell für „Bitte warten“", ["Mohon tunggu.", "Tunggu dong.", "Tunggu aja."], 0, "mohon = formelles „bitte“."],
  ["Wie sprichst du deinen Chef an?", ["Bapak / Ibu", "kamu", "lo"], 0, "kamu und lo sind für Vorgesetzte zu vertraut."],
  ["**Terima kasih atas perhatiannya** passt …", ["am Ende einer formellen E-Mail", "beim Bestellen im Warung", "unter Freunden im Chat"], 0, "„Danke für Ihre Aufmerksamkeit“ – typischer Briefschluss."],
]},

g28: { title: "Die Vorsilbe ber-", body: `
**ber-** macht aus einem Wort ein Verb, das meist einen **Zustand** oder eine Tätigkeit **ohne direktes Objekt** beschreibt.
| Wurzel | mit ber- | Bedeutung |
| kerja (Arbeit) | bekerja | arbeiten |
| main (Spiel) | bermain | spielen |
| temu | bertemu | sich treffen |
| renang (Schwimmen) | berenang | schwimmen |
| libur (Ferien) | berlibur | Urlaub machen |
| bicara | berbicara | sprechen |

## Formen
- Normalerweise **ber-**: **ber**main, **ber**angkat
- Vor **r** und wenn die erste Silbe auf „er“ endet: **be-**: **be**renang, **be**kerja
- Einzige Ausnahme: **bel**ajar (lernen)

## Was ber- noch kann
- „haben“: **bernama** (heißen, einen Namen haben), **beristri** (eine Frau haben)
- Kleidung: **berbaju merah** (rot gekleidet)
- Anzahl: **berdua** (zu zweit), **bertiga** (zu dritt)
= Kami pergi berdua. :: Wir gehen zu zweit.
= Dia sedang berlibur di Bali. :: Er/Sie macht gerade Urlaub auf Bali.

> Im Alltag fällt **ber-** oft weg: **kerja**, **main**, **ketemu** (statt bertemu), **belanja**. Schriftlich bleibt es.
`, quiz: [
  ["„sich treffen“ (Wurzel: temu)", ["bertemu", "metemu", "ditemu"], 0, "ber- + temu."],
  ["Welche Form ist richtig?", ["berenang", "berrenang", "merenang"], 0, "Vor r wird ber- zu be-."],
  ["**berdua** bedeutet …", ["zu zweit", "zweimal", "der zweite"], 0, "ber- + Zahl = zu zweit, zu dritt …"],
]},

g29: { title: "Die Vorsilbe me-", body: `
**me-** bildet aktive Verben, die meist ein **Objekt** haben (jemand tut etwas mit etwas). Der Anfangsbuchstabe der Wurzel bestimmt die Form:
| Wurzel beginnt mit | Form | Beispiel |
| l, m, n, r, w, y, ny, ng | me- | lihat → melihat |
| b, f | mem- | beli → membeli |
| p (fällt weg) | mem- | pakai → memakai |
| c, d, j | men- | cari → mencari |
| t (fällt weg) | men- | tulis → menulis |
| s (fällt weg) | meny- | sapu → menyapu |
| k (fällt weg) | meng- | kirim → mengirim |
| g, h, Vokal | meng- | ambil → mengambil |
| einsilbig | menge- | cek → mengecek |

## Merkhilfe
Bei **K, T, S, P** fällt der erste Buchstabe weg – die Vorsilbe „schluckt“ ihn. Merksatz: **„Kaffee, Tee, Saft, Punsch“**.

## Wurzel finden
Willst du ein me-Wort nachschlagen, rechne zurück: **menulis** → men + tulis, **memakai** → mem + pakai, **menyapu** → meny + sapu.

## Im Alltag
Gesprochen wird **me-** oft weggelassen oder zu einem Nasal verkürzt: **nulis** (menulis), **nyari** (mencari), **ngirim** (mengirim). Klingt locker – schriftlich immer die volle Form.
= Saya sedang menunggu bus. :: Ich warte gerade auf den Bus.
= Dia menjual sayur di pasar. :: Er/Sie verkauft Gemüse auf dem Markt.
`, quiz: [
  ["me- + tulis (schreiben) =", ["menulis", "mentulis", "metulis"], 0, "t fällt weg: men + ulis."],
  ["me- + beli (kaufen) =", ["membeli", "mengbeli", "menbeli"], 0, "Vor b steht mem-."],
  ["me- + kirim (schicken) =", ["mengirim", "mengkirim", "mekirim"], 0, "k fällt weg: meng + irim."],
]},

g30: { title: "Umgangssprache & Partikeln", body: `
Gesprochenes Indonesisch – besonders in Jakarta und unter jungen Leuten – klingt oft ganz anders als im Lehrbuch.
| Standard | Alltag | Bedeutung |
| tidak | nggak / gak / ga | nicht |
| sudah | udah | schon |
| saja | aja | nur |
| bagaimana | gimana | wie |
| begitu / begini | gitu / gini | so |
| seperti | kayak | wie |
| sedang | lagi | gerade |
| mengapa | kok / ngapain | wieso |
| sangat | banget (danach!) | sehr |
| memang | emang | tatsächlich |
| dengan | sama | mit |
| saya / aku | gue (Jakarta) | ich |
| kamu | lo / lu (Jakarta) | du |
> **gue/lo** nur mit guten Freunden in Jakarta – woanders klingt es schnell unhöflich. **aku/kamu** passt unter Freunden fast überall.

## Partikeln – die Würze der Sprache
Kleine Wörter am Satzende ändern den Ton:
| Partikel | Wirkung | Beispiel |
| ya | freundlich, „ne?“ | Tunggu, ya. |
| dong | Nachdruck, „doch!“ | Ayo, dong! |
| sih | „denn“, weicht ab | Kenapa sih? |
| deh | „na gut“, Zustimmung | Ya udah, deh. |
| kok | „wieso denn?“ | Kok mahal? |
| kan | „…, oder?“ | Kamu capek, kan? |
| lho / loh | „Mensch!“, Hinweis | Enak lho! |
| yuk | „lass uns!“ | Makan, yuk! |
= Udah makan belum? :: Hast du schon gegessen?
= Gimana sih? :: Wie denn jetzt?
= Kok nggak bilang? :: Wieso hast du nichts gesagt?

## Chat-Abkürzungen
**yg** (yang), **gk / ga** (nggak), **udh** (udah), **sy** (saya), **bgt** (banget), **wkwk** (haha), **otw** (unterwegs).
`, quiz: [
  ["**Udah makan?** bedeutet …", ["Schon gegessen?", "Willst du essen?", "Isst du gerade?"], 0, "udah = sudah = schon."],
  ["**Kok mahal?** drückt aus …", ["Überraschung: Wieso so teuer?", "Zustimmung: Ja, teuer.", "eine Bitte: Mach es teurer."], 0, "kok = wieso denn (überrascht)."],
  ["Umgangssprachlich für **tidak**:", ["nggak", "bukan", "jangan"], 0, "nggak, gak oder ga."],
]},

g34: { title: "Passiv mit di-", body: `
Indonesisch benutzt das Passiv **viel öfter** als Deutsch – oft klingt es natürlicher, das Ding an den Anfang zu stellen.

## Passiv mit di-
Ersetze **me-** durch **di-**. Die Wurzel bleibt unverändert – keine Lautänderung!
| Aktiv | Passiv |
| membeli (kaufen) | dibeli (gekauft werden) |
| menulis (schreiben) | ditulis |
| memakai (benutzen) | dipakai |
| mengirim (schicken) | dikirim |
Wer es tut, folgt mit oder ohne **oleh** („von“):
= Rumah ini dibangun oleh kakek saya. :: Dieses Haus wurde von meinem Großvater gebaut.
= Kamarnya sudah dibersihkan. :: Das Zimmer ist schon geputzt.

## Passiv mit „ich, du, wir“
Wenn **ich, du** oder **wir** etwas tun, steht das Pronomen **direkt vor der Wurzel** – ohne di-:
= Bukunya sudah saya baca. :: Das Buch habe ich schon gelesen.
= Sudah saya bayar. :: Das habe ich schon bezahlt.

## Typische Schilder
= Dilarang merokok. :: Rauchen verboten.
= Dijual. :: Zu verkaufen.
= Disewakan. :: Zu vermieten.

> Nicht verwechseln: **di** als Ortsangabe wird getrennt geschrieben (**di rumah**), **di-** als Passiv zusammen (**dibeli**).
`, quiz: [
  ["Passiv von **menjual** (verkaufen)", ["dijual", "dimenjual", "dinjual"], 0, "di + Wurzel (jual)."],
  ["„Das habe ich schon bezahlt.“", ["Sudah saya bayar.", "Saya sudah dibayar.", "Sudah dibayar saya oleh."], 0, "Pronomen + Wurzel. Saya sudah dibayar hieße „Ich wurde schon bezahlt“."],
  ["**Dilarang masuk** heißt …", ["Zutritt verboten", "Bitte eintreten", "Eingang hier"], 0, "dilarang = verboten, masuk = hineingehen."],
]},

g35: { title: "Gesprächsstrategien", body: `
Mit ein paar Hundert Wörtern kannst du schon erstaunlich viel sagen – wenn du ein paar Tricks kennst.

## Nachfragen statt aufgeben
= Maaf, bisa diulang? :: Entschuldigung, können Sie das wiederholen?
= Bisa lebih pelan? :: Können Sie langsamer sprechen?
= Apa artinya …? :: Was bedeutet …?
= Bagaimana bilangnya … dalam bahasa Indonesia? :: Wie sagt man … auf Indonesisch?
= Maksudnya …? :: Meinst du …?

## Umschreiben
Dir fehlt ein Wort? Beschreib es mit **yang** oder **untuk**:
= Itu, yang untuk buka botol. :: Das Ding, mit dem man Flaschen öffnet.
= Orang yang kerja di rumah sakit. :: Jemand, der im Krankenhaus arbeitet.

## Zeit gewinnen
Füllwörter wie **eh …**, **apa ya …**, **gimana ya …** („äh, wie sagt man …“) sind völlig normal.

## Interesse zeigen
| Ausdruck | Bedeutung |
| Oh, begitu. | Ach so. |
| Wah, keren! | Wow, cool! |
| Masa? | Echt? Kann nicht sein! |
| Benar juga. | Stimmt auch wieder. |
| Terus? | Und dann? |
| Tergantung. | Kommt darauf an. |

> Die beste Abkürzung zum Sprechen: Jeden Tag ein paar Sätze laut sagen – auch allein. Die App liest dir alles vor; sprich es nach!
`, quiz: [
  ["Du hast etwas nicht verstanden:", ["Maaf, bisa diulang?", "Terserah.", "Sama-sama."], 0, "bisa diulang = kann es wiederholt werden?"],
  ["**Masa?** drückt aus …", ["ungläubiges Staunen: Echt?", "Zustimmung: Genau.", "eine Zeitangabe"], 0, "Masa? / Masa sih? = Kann nicht sein!"],
  ["Dir fehlt das Wort für „Korkenzieher“. Was hilft?", ["umschreiben mit yang untuk …", "lauter Deutsch sprechen", "das Gespräch beenden"], 0, "Umschreiben ist die wichtigste Strategie."],
]},

g40: { title: "Endungen -kan und -i", body: `
Zusammen mit **me-** geben **-kan** und **-i** einem Verb eine neue Richtung.

## -kan: bewirken oder für jemanden tun
| Wurzel | mit -kan | Bedeutung |
| mati (aus, tot) | mematikan | ausschalten |
| bersih (sauber) | membersihkan | sauber machen |
| siap (bereit) | menyiapkan | vorbereiten |
| jelas (klar) | menjelaskan | erklären |
| beli (kaufen) | membelikan | jemandem etwas kaufen |
= Tolong matikan lampunya. :: Mach bitte das Licht aus.
= Saya belikan kamu es krim. :: Ich kaufe dir ein Eis.

## -i: Ziel, Ort, Wiederholung
| Wurzel | mit -i | Bedeutung |
| datang (kommen) | mendatangi | jemanden aufsuchen |
| teman (Freund) | menemani | begleiten |
| kunjung | mengunjungi | besuchen |
| suka (mögen) | menyukai | jemanden/etwas mögen |
| dekat (nah) | mendekati | sich nähern |
= Saya akan menemani kamu. :: Ich werde dich begleiten.

## Umgangssprache: -in
Im Jakarta-Slang werden **-kan** und **-i** beide zu **-in**: **matiin** (mematikan), **jelasin** (menjelaskan), **temenin** (menemani), **beliin** (membelikan).
= Matiin lampunya, dong. :: Mach doch mal das Licht aus.
`, quiz: [
  ["„erklären“ (jelas = klar)", ["menjelaskan", "menjelasi", "berjelas"], 0, "-kan = (etwas) klar machen."],
  ["Umgangssprachlich für **menemani**", ["temenin", "temanan", "nemen"], 0, "-i wird im Slang zu -in."],
  ["**Tolong nyalakan AC-nya.**", ["Mach bitte die Klimaanlage an.", "Mach bitte die Klimaanlage aus.", "Repariere bitte die Klimaanlage."], 0, "nyala = an → menyalakan = einschalten."],
]},

g41: { title: "Nomen bilden", body: `
Mit Vor- und Nachsilben werden aus Verben und Adjektiven Nomen. Kennst du die Muster, wächst dein Wortschatz wie von selbst.
| Muster | Bedeutung | Beispiel |
| … -an | Ergebnis, Ding | makan → makanan (Essen), jawab → jawaban (Antwort) |
| ke- … -an | abstraktes Nomen | sehat → kesehatan (Gesundheit) |
| peN- | Person, die etwas tut | jual → penjual (Verkäufer) |
| peN- … -an | Vorgang | bayar → pembayaran (Zahlung) |
| per- … -an | Vorgang, Sache | jalan → perjalanan (Reise) |
| pe- … -an | Sache, Beruf | kerja → pekerjaan (Arbeit) |
> **peN-** folgt denselben Lautregeln wie **me-**: me**nj**ual → pe**nj**ual, me**mb**ayar → pe**mb**ayaran.
= Ada pertanyaan? :: Gibt es Fragen?
= Kesehatan itu penting. :: Gesundheit ist wichtig.
= Semoga perjalanannya lancar! :: Gute Reise! (Hoffentlich verläuft die Reise gut!)
`, quiz: [
  ["**pembeli** ist …", ["der Käufer", "der Kauf", "kaufen"], 0, "peN- = Person, die etwas tut."],
  ["„Sauberkeit“ (bersih = sauber)", ["kebersihan", "pembersih", "bersihan"], 0, "ke-…-an = abstraktes Nomen. pembersih wäre ein Reinigungsmittel."],
  ["**jawaban** bedeutet …", ["Antwort", "antworten", "der Antwortende"], 0, "-an = Ergebnis."],
]},

g42: { title: "Ungewolltes: ter- und ke-…-an", body: `
## ter-: ungewollt, Zustand, am meisten
| Bedeutung | Beispiele |
| ungewollt, plötzlich | tertidur (eingeschlafen), terjatuh (hingefallen) |
| Zustand | terbuka (offen), tertutup (geschlossen), terkenal (berühmt) |
| am …sten | terbaik (der Beste), termurah (am billigsten) |
= Saya tertidur di sofa. :: Ich bin auf dem Sofa eingeschlafen.
= Tokonya masih terbuka. :: Der Laden ist noch offen.

## ke-…-an: Pech gehabt!
**ke- + Wurzel + -an** beschreibt oft etwas, das dir **unangenehm passiert**:
| Wurzel | ke-…-an | Bedeutung |
| hujan (Regen) | kehujanan | vom Regen erwischt |
| tinggal (bleiben) | ketinggalan | verpasst, liegen gelassen |
| copet (Taschendieb) | kecopetan | bestohlen |
| siang (Mittag) | kesiangan | verschlafen |
| dingin (kalt) | kedinginan | frieren |
= Kami kehujanan. :: Wir sind in den Regen gekommen.
= Saya ketinggalan pesawat! :: Ich habe den Flug verpasst!
Außerdem: **kelihatan** (sichtbar sein, aussehen) und **kedengaran** (zu hören sein, klingen).

> Umgangssprachlich heißt **ke-…-an** mit Adjektiv auch „zu …“: **kebesaran** (zu groß), **kemahalan** (zu teuer).
`, quiz: [
  ["„Ich habe verschlafen.“", ["Saya kesiangan.", "Saya tertidur siang.", "Saya siang tidur."], 0, "kesiangan = vom Mittag überrascht – verschlafen."],
  ["**terkenal** bedeutet …", ["berühmt", "bekannt machen", "jemanden kennen"], 0, "ter- + kenal = (allgemein) bekannt."],
  ["Die Schuhe sind dir zu groß:", ["Sepatunya kebesaran.", "Sepatunya terbesar.", "Sepatunya membesar."], 0, "ke-…-an mit Adjektiv = „zu …“. terbesar = am größten."],
]},

};
