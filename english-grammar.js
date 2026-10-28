// Grammatik-Lektionen für den Englischkurs (Level 1). Gleiches Markup wie grammar.js:
//   ## Überschrift · > Tipp-Box · = englisch :: deutsch · | Tabelle | · - Liste · **fett**
// quiz: [Frage, [Antworten…], Index der richtigen, Erklärung]
window.LESSONS_ENGLISH = window.LESSONS_ENGLISH || {};
Object.assign(window.LESSONS_ENGLISH, {

g01: { title: "Aussprache & Begrüßen", body: `
Englisch wird oft anders gesprochen als geschrieben. Ein paar Laute gibt es im Deutschen nicht – mit etwas Übung klappen sie aber gut.

| Laut | So geht's | Beispiel |
| th (stimmlos) | Zungenspitze leicht zwischen die Zähne, dann pusten | **thank you**, **three** |
| th (stimmhaft) | wie oben, aber mit Stimme | **this**, **the**, **mother** |
| w | Lippen rund wie bei „u“ – kein deutsches w! | **water**, **we** |
| v | wie deutsches w | **very**, **visit** |
| r | Zunge berührt nichts, kein Rollen | **right**, **sorry** |
| s am Wortanfang | immer scharf wie in „Bus“ | **see**, **sun** |
| -er am Ende | britisch: ein kurzes „ə“, das r fällt weg | **teacher**, **water** |

> Britisches Englisch lässt das **r** nach Vokalen meist weg: **car** klingt wie „kaa“. Amerikaner sprechen es mit.

## Grüße nach Tageszeit
| Gruß | Wann? |
| good morning | bis ca. 12 Uhr |
| good afternoon | ca. 12–18 Uhr |
| good evening | ab ca. 18 Uhr – zur **Begrüßung** |
| good night | nur zum **Abschied** am Abend |

= Good morning! How are you? :: Guten Morgen! Wie geht's?
= Fine, thanks. And you? :: Gut, danke. Und dir?

> „How are you?“ ist meist eine Begrüßung, keine echte Frage. Antworte kurz und freundlich: **Fine, thanks. And you?** – und frag zurück.

## Bitte & danke
Englisch hat kein Wort, das alle Bedeutungen von „bitte“ abdeckt:
| Deutsch | Englisch |
| bitte (ich möchte …) | **please** |
| bitte sehr (beim Geben) | **here you are** |
| bitte schön (auf „danke“) | **you're welcome** / **no problem** |
| wie bitte? | **sorry?** / **pardon?** |

> Tipp: Tippe auf 🔊, so oft du willst, und sprich laut nach. Lautes Nachsprechen ist der schnellste Weg zu einer guten Aussprache.
`, quiz: [
  ["Du verabschiedest dich abends von Kollegen. Was sagst du?", ["Good night!", "Good evening!", "Good morning!"], 0, "Good evening ist eine Begrüßung – zum Abschied am Abend sagt man good night (oder einfach bye)."],
  ["Jemand sagt „Thank you!“. Was antwortest du?", ["You're welcome.", "Please.", "Here you are."], 0, "Auf „danke“ antwortet man mit you're welcome oder no problem – nicht mit please."],
  ["Wie klingt das w in **water**?", ["mit runden Lippen wie „u“", "wie deutsches w", "wie deutsches f"], 0, "Das englische w spricht man mit gerundeten Lippen – das deutsche w entspricht dem englischen v."],
]},

g02: { title: "Ich, du & „to be“", body: `
## Eine Anrede für alle
Englisch hat nur **you** – für du, Sie und ihr. Höflichkeit zeigt man mit **please**, **could you …?** und dem Tonfall, nicht mit dem Pronomen.

## to be – sein
| Langform | Kurzform | Deutsch |
| I am | I'm | ich bin |
| you are | you're | du bist / Sie sind / ihr seid |
| he is | he's | er ist |
| she is | she's | sie ist |
| it is | it's | es ist |
| we are | we're | wir sind |
| they are | they're | sie sind |

= I'm Anna. I'm from Vienna. :: Ich bin Anna. Ich komme aus Wien.
= They're my friends. :: Das sind meine Freunde.

> Im Gespräch benutzt man fast immer die **Kurzformen**. Die Langform klingt betont oder sehr förmlich.

## Fragen mit be
Einfach umdrehen: **You are** → **Are you …?**
= Are you tired? – Yes, I am. :: Bist du müde? – Ja.
= Is she a doctor? – No, she isn't. :: Ist sie Ärztin? – Nein.

## Berufe mit a / an
Bei Berufen steht **immer** ein Artikel – anders als im Deutschen:
= She's a teacher. :: Sie ist Lehrerin.
= I'm an engineer. :: Ich bin Ingenieurin.

> **I** wird immer großgeschrieben, auch mitten im Satz.
`, quiz: [
  ["„Ich bin Lehrer“ heißt …", ["I'm a teacher.", "I'm teacher.", "I am the teacher."], 0, "Bei Berufen steht im Englischen immer a oder an."],
  ["Wie sagst du „Sie“ zu deiner neuen Chefin?", ["you", "she", "they"], 0, "Englisch hat nur you – für du, Sie und ihr."],
  ["**___ they from Germany?**", ["Are", "Is", "Am"], 0, "they → are. In der Frage steht das Verb vorne: Are they …?"],
]},

g03: { title: "Woher? Länder & Sprachen", body: `
## Herkunft
= Where are you from? :: Woher kommst du?
= I'm from Germany. :: Ich komme aus Deutschland.
= Where do you live? – I live in Munich. :: Wo wohnst du? – Ich wohne in München.

## Land, Sprache, Nationalität
Sprachen und Nationalitäten schreibt man im Englischen **immer groß**.
| Land | Adjektiv / Sprache | Person |
| Germany | German | a German |
| Austria | Austrian | an Austrian |
| Switzerland | Swiss | a Swiss person |
| England | English | an Englishman / an Englishwoman |
| Britain | British | a Brit |
| Scotland | Scottish | a Scot |
| Spain | Spanish | a Spaniard |
| the USA | American | an American |

= I speak German and a little English. :: Ich spreche Deutsch und ein bisschen Englisch.

> Vorsicht: Nicht alle Briten sind „English“! Schotten, Waliser und Nordiren hören das gar nicht gern. **British** passt immer.

## in – from – to
| Wort | Bedeutung | Beispiel |
| in | in (wo?) | I live **in** London. |
| from | aus, von (woher?) | I'm **from** Graz. |
| to | nach, zu (wohin?) | I'm going **to** Scotland. |

> Bei manchen Ländern steht **the**: **the USA**, **the UK**, **the Netherlands**.
`, quiz: [
  ["„Sie ist Schweizerin“ heißt …", ["She's Swiss.", "She's swiss.", "She's Switzerland."], 0, "Nationalitäten schreibt man groß – Swiss ist das Adjektiv."],
  ["**I'm going ___ Ireland next week.**", ["to", "in", "from"], 0, "Richtung (wohin?) → to."],
  ["Jemand aus Edinburgh ist …", ["Scottish", "English", "Irish"], 0, "Edinburgh liegt in Schottland – Scottish (oder British), nicht English."],
]},

g04: { title: "Nicht & kein – Verneinung", body: `
## Bei „be“: einfach not dazu
= I'm not hungry. :: Ich habe keinen Hunger.
= It isn't far. :: Es ist nicht weit.
= They aren't here. :: Sie sind nicht hier.

## Bei allen anderen Verben: don't / doesn't
Englisch braucht für die Verneinung ein **Hilfsverb**: **do not** (don't) – bei he/she/it **does not** (doesn't).
| Satz | Verneinung |
| I like coffee. | I **don't** like coffee. |
| She works here. | She **doesn't** work here. |

> Nach **doesn't** verliert das Verb sein -s: She doesn't **work** (nicht: works).

## Kurzantworten
Auf Ja/Nein-Fragen antwortet man gern kurz – mit dem Hilfsverb der Frage:
| Frage | Ja | Nein |
| Are you tired? | Yes, I am. | No, I'm not. |
| Do you like tea? | Yes, I do. | No, I don't. |
| Is it expensive? | Yes, it is. | No, it isn't. |

> Nur „Yes“ oder „No“ klingt schnell etwas kurz angebunden. Die Kurzantwort ist freundlicher.

## too / either
= I'm hungry. – Me too! :: Ich habe Hunger. – Ich auch!
= I don't know. – I don't either. :: Ich weiß es nicht. – Ich auch nicht.
`, quiz: [
  ["„Er trinkt keinen Kaffee“ heißt …", ["He doesn't drink coffee.", "He don't drink coffee.", "He doesn't drinks coffee."], 0, "he → doesn't, und danach die Grundform ohne -s."],
  ["**Do you speak English?** – Ja.", ["Yes, I do.", "Yes, I speak.", "Yes, I am."], 0, "Kurzantwort mit dem Hilfsverb der Frage: do."],
  ["**It ___ cold today.** (Es ist heute nicht kalt.)", ["isn't", "doesn't", "don't"], 0, "Bei be (is) einfach not dazu: isn't."],
]},

g05: { title: "Zahlen & Telefonnummern", body: `
## 13–19 und die Zehner
| Zahl | Englisch | Zahl | Englisch |
| 13 | thirteen | 30 | thirty |
| 14 | fourteen | 40 | forty |
| 15 | fifteen | 50 | fifty |
| 16 | sixteen | 60 | sixty |
| 17 | seventeen | 70 | seventy |
| 18 | eighteen | 80 | eighty |
| 19 | nineteen | 90 | ninety |

> Betonung hilft beim Unterscheiden: thir**TEEN** (13) – **THIR**ty (30). Bei Preisen und Zeiten unbedingt darauf achten!

## Zusammengesetzte Zahlen
Im Englischen wie geschrieben – **Zehner zuerst**: 21 = twenty-one, 47 = forty-seven.
= I'm thirty-four. :: Ich bin 34.
= One hundred and twenty :: 120

> Britisch: Nach hundred kommt **and**: one hundred **and** five. Amerikaner lassen das „and“ oft weg.

## Telefonnummern
Ziffer für Ziffer sprechen. Die **0** heißt meist **oh**. Doppelte Ziffern: **double**.
= oh-seven-seven, double five… :: 0 7 7 5 5 …

## Wie alt?
= How old are you? – I'm forty. :: Wie alt bist du? – Ich bin vierzig.
> Nicht: „I have forty years“. Alter immer mit **be**.
`, quiz: [
  ["Wie schreibt man 40?", ["forty", "fourty", "fourteen"], 0, "Ohne u: forty – obwohl es four heißt."],
  ["„Ich bin 25“ heißt …", ["I'm twenty-five.", "I have twenty-five years.", "I'm five-and-twenty."], 0, "Alter mit be – und die Zehner zuerst."],
  ["Wie sagt man die 0 in einer britischen Telefonnummer meist?", ["oh", "null", "nothing"], 0, "In Telefonnummern sagt man meist „oh“, manchmal auch zero."],
]},

g06: { title: "a, an, the & die Mehrzahl", body: `
## a oder an?
Entscheidend ist der **Laut**, nicht der Buchstabe:
| | wann? | Beispiel |
| a | vor Konsonantenlaut | a banana, a university („ju-“) |
| an | vor Vokallaut | an apple, an egg, an hour (h stumm) |

## the – einer für alle
**the** ist der, die und das – Einzahl wie Mehrzahl. Wird vor Vokalen „thi“ gesprochen: the apple.
= The food is great. :: Das Essen ist super.

## Wann kein Artikel?
Wenn du **allgemein** sprichst, steht im Englischen kein Artikel:
= I love coffee. :: Ich liebe Kaffee.
= Dogs are friendly. :: Hunde sind freundlich.
= Life is beautiful. :: Das Leben ist schön.

## Mehrzahl
Meist einfach **-s**: apple → apples. Nach s, sh, ch, x: **-es** (glasses, sandwiches). Einige sind unregelmäßig:
| Einzahl | Mehrzahl |
| child | children |
| person | people |
| man / woman | men / women |
| foot / tooth | feet / teeth |
| potato / tomato | potatoes / tomatoes |

> Einige Wörter haben **keine Mehrzahl**: water, bread, money, information, advice, luggage. Man sagt **some bread** oder **a loaf of bread**.
`, quiz: [
  ["___ hour", ["an", "a", "the an"], 0, "h ist in hour stumm – der erste Laut ist ein Vokal → an."],
  ["„Ich mag Hunde“ heißt …", ["I like dogs.", "I like the dogs.", "I like a dogs."], 0, "Allgemeine Aussagen ohne Artikel."],
  ["Mehrzahl von **child**", ["children", "childs", "childes"], 0, "child → children ist unregelmäßig."],
]},

g07: { title: "Höflich bestellen", body: `
Auf Englisch klingt „I want …“ beim Bestellen schnell unhöflich. Besser:
| Ausdruck | Ton |
| I'd like the soup, please. | höflich, Standard |
| Could I have a coffee, please? | höflich |
| Can I get a tea? | locker (amerikanisch häufig) |
| I'll have the fish. | ganz normal beim Bestellen |
| I want a beer. | zu direkt |

= I'd like a table for two, please. :: Ich hätte gern einen Tisch für zwei.
= Could we have the bill, please? :: Die Rechnung, bitte.

## Ohne please geht's nicht
Briten sagen **please** und **thank you** sehr oft – auch zu Busfahrern und Kassiererinnen. Lieber einmal zu viel als zu wenig.

## Im Pub
Im britischen Pub gibt es meist **keine Bedienung am Tisch**: Man bestellt und zahlt direkt an der Bar. Trinkgeld ist dort unüblich.

## Trinkgeld
- Restaurant (UK): ca. 10–12,5 %, oft schon als **service charge** auf der Rechnung
- Restaurant (USA): 18–20 % – erwartet!
- Café oder Pub (UK): nicht nötig

> **Is service included?** – „Ist das Trinkgeld schon inklusive?“
`, quiz: [
  ["Welche Bestellung klingt am höflichsten?", ["Could I have a coffee, please?", "I want a coffee.", "Coffee!"], 0, "Could I have … please? ist höflich und ganz normal."],
  ["„Die Rechnung, bitte“ (britisch)", ["Could we have the bill, please?", "Could we have the invoice?", "Could we have the receipt?"], 0, "Im Restaurant: the bill (US: the check). Invoice ist eine Geschäftsrechnung."],
  ["Wo bestellst du in einem britischen Pub?", ["an der Bar", "am Tisch beim Kellner", "per Telefon"], 0, "Im Pub bestellt und zahlt man selbst an der Bar."],
]},

g08: { title: "Fragen stellen", body: `
## Fragewörter
| Englisch | Deutsch |
| what | was |
| who | wer |
| where | wo, wohin |
| when | wann |
| why | warum |
| how | wie |
| which | welche(r, s) |
| how much / how many | wie viel / wie viele |

## Fragen mit be
Das Verb kommt nach vorne: **Where is the station?**

## Fragen mit allen anderen Verben: do / does
Englisch braucht für Fragen ein **Hilfsverb**: **do** – bei he/she/it **does**.
| Aussage | Frage |
| You live here. | **Do** you live here? |
| She works in London. | **Does** she work in London? |
| They speak English. | Where **do** they speak English? |

> Nach **does** steht das Verb ohne -s: Does she **work**…?

= What do you do? :: Was machst du beruflich?
= Where does he live? :: Wo wohnt er?

## Höfliche Bitten um Hilfe
= Could you repeat that, please? :: Könnten Sie das bitte wiederholen?
= What does „queue“ mean? :: Was bedeutet „queue“?
= How do you say „Rechnung“ in English? :: Wie sagt man „Rechnung“ auf Englisch?
`, quiz: [
  ["**___ you like football?**", ["Do", "Are", "Does"], 0, "Fragen mit normalen Verben bildet man mit do (bei he/she/it: does)."],
  ["„Wo arbeitet sie?“ heißt …", ["Where does she work?", "Where does she works?", "Where she works?"], 0, "does + Grundform: work ohne -s."],
  ["**___ is that man?** – My uncle.", ["Who", "What", "Which"], 0, "Nach Personen fragt man mit who."],
]},

g09: { title: "Zeitangaben", body: `
Englisch hat mehr Zeitformen als Deutsch – das lernst du Schritt für Schritt. Zuerst die Wörter, die sagen, **wann** etwas passiert.

## Gestern – heute – morgen
| Vergangenheit | Gegenwart | Zukunft |
| yesterday | today | tomorrow |
| last week | this week | next week |
| last year | this year | next year |
| two days ago | now | in two days |

> Bei **last**, **next** und **this** steht **kein** Artikel und keine Präposition: **next Monday** (nicht: on the next Monday).

## ago – vor
**ago** steht **hinter** der Zeitspanne:
= I arrived three days ago. :: Ich bin vor drei Tagen angekommen.

## Tageszeiten
| | |
| in the morning | morgens |
| in the afternoon | nachmittags |
| in the evening | abends |
| at night | nachts |

= What are you doing tonight? :: Was machst du heute Abend?

> **tonight** = heute Abend oder heute Nacht. **Tomorrow morning** = morgen früh.
`, quiz: [
  ["„vor zwei Wochen“ heißt …", ["two weeks ago", "ago two weeks", "before two weeks"], 0, "ago steht hinter der Zeitspanne."],
  ["„nächsten Freitag“ heißt …", ["next Friday", "on the next Friday", "in next Friday"], 0, "Mit next: kein Artikel, keine Präposition."],
  ["„nachts“ heißt …", ["at night", "in the night", "on night"], 0, "Ausnahme: at night – aber in the morning/afternoon/evening."],
]},

g10: { title: "Gegenwart: Present Simple", body: `
Mit dem **Present Simple** sprichst du über Gewohnheiten, Fakten und Dinge, die immer gelten.

## Die Regel: -s bei he, she, it
| Person | Verb |
| I / you / we / they | work |
| he / she / it | work**s** |

= I live in Berlin. My sister lives in Rome. :: Ich wohne in Berlin. Meine Schwester wohnt in Rom.

## Rechtschreibung
- nach s, sh, ch, x, o: **-es** → watches, goes, does
- Konsonant + y: **-ies** → study → studies
- unregelmäßig: have → **has**

## Fragen & Verneinung (Wiederholung)
| | I / you / we / they | he / she / it |
| Frage | Do you work? | Does she work? |
| Verneinung | I don't work. | She doesn't work. |

## Typische Zeitwörter
every day, usually, always, often, on Mondays …
= She gets up at six every day. :: Sie steht jeden Tag um sechs auf.

> Für das, was **gerade jetzt** passiert, gibt es eine eigene Form (I'm working) – die kommt bald.
`, quiz: [
  ["**My brother ___ in a bank.**", ["works", "work", "is work"], 0, "he/she/it → Verb + s."],
  ["**She ___ two children.**", ["has", "haves", "have"], 0, "have ist unregelmäßig: she has."],
  ["„Er schaut jeden Abend fern“", ["He watches TV every evening.", "He watchs TV every evening.", "He watch TV every evening."], 0, "Nach ch: -es → watches."],
]},

g11: { title: "Wem gehört's? my, your & 's", body: `
## Besitzwörter
| Person | Besitz |
| I | my |
| you | your |
| he | his |
| she | her |
| it | its |
| we | our |
| they | their |

= This is my husband, and this is his sister. :: Das ist mein Mann, und das ist seine Schwester.

> **his** = sein (Besitzer ist ein Mann), **her** = ihr (Besitzerin ist eine Frau). Es richtet sich nach dem **Besitzer**, nicht nach der Sache.

## 's – der Genitiv
Mit **'s** zeigst du, wem etwas gehört:
= Anna's car :: Annas Auto
= my mother's house :: das Haus meiner Mutter
= my parents' house :: das Haus meiner Eltern

> Bei Mehrzahl auf -s hängt man nur den Apostroph an: **parents'**. Unregelmäßige Mehrzahl: **children's** toys.

## its oder it's?
- **its** = sein (von einer Sache): The dog wags its tail.
- **it's** = it is: It's cold.
`, quiz: [
  ["„Annas Bruder“ heißt …", ["Anna's brother", "the brother of Anna's", "Annas brother"], 0, "Besitz mit 's: Anna's brother."],
  ["Tom und **___ wife** (seine Frau)", ["his", "her", "its"], 0, "Der Besitzer ist Tom (ein Mann) → his."],
  ["**The company changed ___ name.**", ["its", "it's", "his"], 0, "its = sein (von einer Sache). it's = it is."],
]},

g12: { title: "Preise, this & that", body: `
## Wie viel?
= How much is this? :: Was kostet das?
= How much are these? :: Was kosten die hier?
= It's twelve pounds fifty. :: Das macht 12,50 Pfund.

## Britisches Geld
| | |
| £1 = 100p | 1 Pfund = 100 Pence |
| £5.50 | five pounds fifty |
| 80p | eighty pence (locker: eighty p) |
| a fiver / a tenner | ein Fünfer / ein Zehner (locker) |

> Englisch schreibt Preise mit **Punkt**: £3.50 – und große Zahlen mit Komma: £1,200.

## this, that, these, those
| | nah | weiter weg |
| Einzahl | this | that |
| Mehrzahl | these | those |

= I'll take this one. :: Ich nehme das hier.
= Can I see those shoes? :: Kann ich die Schuhe da sehen?

## Einkaufen
= I'm just looking, thanks. :: Ich schaue nur, danke.
= Do you have this in blue? :: Haben Sie das in Blau?
= I'll take it. :: Ich nehme es.
`, quiz: [
  ["**How much ___ these apples?**", ["are", "is", "does"], 0, "these apples = Mehrzahl → are."],
  ["Mehrzahl von **this**", ["these", "those", "thises"], 0, "this → these (nah), that → those (weiter weg)."],
  ["Wie schreibt man 3,50 Pfund auf Englisch?", ["£3.50", "£3,50", "3,50£"], 0, "Englisch nutzt einen Punkt vor den Pence."],
]},

g13: { title: "Wo ist was? Wege beschreiben", body: `
## Ortsangaben
| Englisch | Deutsch |
| next to | neben |
| opposite | gegenüber |
| between | zwischen |
| behind | hinter |
| in front of | vor |
| on the corner | an der Ecke |
| near | in der Nähe von |

= The bank is opposite the station. :: Die Bank ist gegenüber dem Bahnhof.

## Nach dem Weg fragen
= Excuse me, how do I get to the museum? :: Entschuldigung, wie komme ich zum Museum?
= Is there a chemist near here? :: Gibt es hier in der Nähe eine Apotheke?

## Den Weg erklären: Befehlsform
Die Befehlsform ist einfach die **Grundform** – ganz ohne Pronomen:
| | |
| Go straight on. | Gehen Sie geradeaus. |
| Turn left. | Biegen Sie links ab. |
| Take the second right. | Nehmen Sie die zweite rechts. |
| Cross the road. | Überqueren Sie die Straße. |

> Mit **by** sagt man, wie man reist: **by bus**, **by train**, **by car** – aber **on foot** (zu Fuß).

> In Großbritannien fahren die Autos **links**. Beim Überqueren der Straße zuerst nach **rechts** schauen! Auf den Straßen in London steht oft „Look right“.
`, quiz: [
  ["„Biegen Sie rechts ab“", ["Turn right.", "You turn right, please.", "Turning right."], 0, "Befehlsform = Grundform: Turn right."],
  ["„mit dem Zug“ heißt …", ["by train", "with the train", "on train"], 0, "Verkehrsmittel mit by: by train, by bus."],
  ["„gegenüber dem Hotel“", ["opposite the hotel", "next to the hotel", "behind the hotel"], 0, "opposite = gegenüber (US auch: across from)."],
]},

g14: { title: "Uhrzeit & in, on, at", body: `
## Uhrzeit
| Uhr | Englisch |
| 3:00 | three o'clock |
| 3:15 | quarter past three |
| 3:30 | half past three |
| 3:45 | quarter to four |
| 3:10 | ten past three |
| 3:50 | ten to four |

> Achtung, Falle: **half past three** = 3:30. Das deutsche „halb vier“ ist auf Englisch **half past three**!

Im Alltag sagt man auch einfach die Ziffern: **three fifteen**, **seven forty-five**. Für morgens/abends: **a.m.** und **p.m.** – 24-Stunden-Zeit hört man nur bei Fahrplänen.

## in, on, at
| | wofür? | Beispiele |
| at | Uhrzeiten, feste Punkte | at 6 o'clock, at noon, at the weekend (UK) |
| on | Tage & Datum | on Monday, on 3rd May, on my birthday |
| in | Monate, Jahre, Jahreszeiten, Tageszeiten | in July, in 2025, in summer, in the morning |

= The meeting is on Tuesday at ten. :: Das Meeting ist am Dienstag um zehn.

## Datum
Britisch: **the 5th of May** oder **5 May**. Amerikanisch: **May 5th** – geschrieben 5/5, aber Vorsicht: In den USA steht der **Monat zuerst** (04/07 = 7. April)!
`, quiz: [
  ["Wie spät ist es bei **half past seven**?", ["7:30", "6:30", "7:15"], 0, "half past seven = halb nach sieben = 7:30."],
  ["**I was born ___ 1988.**", ["in", "on", "at"], 0, "Jahre mit in."],
  ["**See you ___ Friday!**", ["on", "in", "at"], 0, "Wochentage mit on."],
]},

g15: { title: "Wie oft? Häufigkeitswörter", body: `
## Die Skala
| Wort | Häufigkeit |
| always | immer (100 %) |
| usually | normalerweise |
| often | oft |
| sometimes | manchmal |
| rarely | selten |
| hardly ever | fast nie |
| never | nie (0 %) |

## Wohin damit?
- **Vor** dem normalen Verb: I **usually** walk to work.
- **Nach** be: She **is always** late.
- Bei Hilfsverben dazwischen: I **can never** remember.

= We often go to the cinema. :: Wir gehen oft ins Kino.
= He's never at home. :: Er ist nie zu Hause.

## Längere Angaben am Satzende
= I go to the gym twice a week. :: Ich gehe zweimal pro Woche ins Fitnessstudio.
= We meet once a month. :: Wir treffen uns einmal im Monat.

> **once** = einmal, **twice** = zweimal, danach **three times**, **four times** …

## Fragen
= How often do you see your parents? :: Wie oft siehst du deine Eltern?
= Do you ever eat meat? :: Isst du überhaupt mal Fleisch?
`, quiz: [
  ["Wohin gehört **always**? „Sie ist immer müde.“", ["She is always tired.", "She always is tired.", "Always she is tired."], 0, "Nach be: is always."],
  ["„zweimal pro Woche“", ["twice a week", "two times in week", "twice the week"], 0, "twice a week – a bedeutet hier „pro“."],
  ["**I ___ drink coffee in the evening.** (Ich trinke abends nie Kaffee.)", ["never", "don't never", "not ever"], 0, "never steht vor dem Verb – und ersetzt die Verneinung (keine doppelte Verneinung!)."],
]},

g16: { title: "very, too & bored vs. boring", body: `
## Verstärken & abschwächen
| Wort | Bedeutung |
| extremely | äußerst |
| really / very | wirklich / sehr |
| quite | ziemlich |
| a bit / a little | ein bisschen |
| too | zu (zu viel!) |

= It's very hot. :: Es ist sehr heiß.
= It's too hot. :: Es ist zu heiß. (unangenehm)

> **too** bedeutet immer „zu viel“: **too expensive** = zu teuer.

## -ed oder -ing?
Ein klassischer Fehler für Deutschsprachige:
| -ed: wie man sich fühlt | -ing: wie etwas ist |
| I'm bored. – Mir ist langweilig. | It's boring. – Es ist langweilig. |
| I'm interested. | It's interesting. |
| I'm tired. | It's tiring. – Es ist anstrengend. |
| I'm excited. | It's exciting. |

= I'm bored. This film is so boring! :: Mir ist langweilig. Der Film ist so langweilig!

> „I'm boring“ heißt „Ich bin ein langweiliger Mensch“. 😄

## Gefühle mit be
Englisch sagt **ich bin** statt „ich habe“ oder „mir ist“: **I'm hungry**, **I'm cold**, **I'm scared**.
`, quiz: [
  ["„Mir ist langweilig.“", ["I'm bored.", "I'm boring.", "It bores me is."], 0, "-ed beschreibt das Gefühl: bored."],
  ["„Das Hotel ist zu teuer.“", ["The hotel is too expensive.", "The hotel is very expensive.", "The hotel is to expensive."], 0, "too = zu (zu viel). to ist eine Präposition."],
  ["„Mir ist kalt.“", ["I'm cold.", "It's cold to me.", "I have cold."], 0, "Gefühle und Zustände mit be: I'm cold."],
]},

g17: { title: "there is / there are & have got", body: `
## Es gibt
| | |
| there is (there's) + Einzahl | There's a pool. |
| there are + Mehrzahl | There are two beds. |
| Is there …? / Are there …? | Is there a lift? |
| There isn't / aren't … | There aren't any towels. |

= Is there a supermarket near here? :: Gibt es hier in der Nähe einen Supermarkt?

## have got – britisches „haben“
Briten sagen für Besitz oft **have got**:
| Britisch | Amerikanisch / neutral |
| I've got a car. | I have a car. |
| Have you got a room? | Do you have a room? |
| I haven't got time. | I don't have time. |

= Have you got a double room for tonight? :: Haben Sie ein Doppelzimmer für heute Nacht?

> Beide Formen sind richtig. In der Vergangenheit gibt es nur **had**: I had a room.

## Im Hotel
= I've got a reservation under Weber. :: Ich habe eine Reservierung auf Weber.
= The air conditioning doesn't work. :: Die Klimaanlage funktioniert nicht.

> Achtung, Stockwerke: Britisch ist **ground floor** das Erdgeschoss und **first floor** der 1. Stock. In den USA ist **first floor** das Erdgeschoss!
`, quiz: [
  ["**___ two restaurants in the hotel.**", ["There are", "There is", "It has"], 0, "Mehrzahl → there are."],
  ["„Hast du ein Ladegerät?“ (britisch)", ["Have you got a charger?", "Have you a charger got?", "Do you got a charger?"], 0, "Have you got …? ist die typisch britische Frage."],
  ["Du bist in London im **first floor**. Wo bist du?", ["im 1. Stock", "im Erdgeschoss", "im Keller"], 0, "Britisch: ground floor = Erdgeschoss, first floor = 1. Stock."],
]},

g18: { title: "can, must & have to", body: `
## can – können & dürfen
**can** gilt für alle Personen gleich – kein -s, kein „to“ danach:
= She can swim. :: Sie kann schwimmen.
= Can I sit here? :: Darf ich mich hier hinsetzen?

**could** ist höflicher (und auch die Vergangenheit: I could = ich konnte):
= Could you help me, please? :: Könnten Sie mir bitte helfen?

## müssen
| | Bedeutung |
| must | ich selbst finde es nötig |
| have to | Regeln, Umstände zwingen mich |
= I must call my mum. :: Ich muss meine Mama anrufen.
= I have to work on Saturday. :: Ich muss am Samstag arbeiten.

## Die große Falle: mustn't ≠ nicht müssen
| | Bedeutung |
| You **mustn't** smoke here. | Du **darfst** hier nicht rauchen. (Verbot) |
| You **don't have to** pay. | Du **musst** nicht zahlen. (keine Pflicht) |

> Merksatz: **mustn't = nicht dürfen**. Für „nicht müssen“ immer **don't have to**.

## should – sollte
= You should try the fish. :: Du solltest den Fisch probieren.
`, quiz: [
  ["„Du musst nicht kommen.“", ["You don't have to come.", "You mustn't come.", "You can't come."], 0, "Nicht müssen = don't have to. mustn't hieße „du darfst nicht kommen“."],
  ["**He ___ speak three languages.**", ["can", "cans", "can to"], 0, "can bekommt nie ein -s und nie ein to."],
  ["Höflichste Bitte:", ["Could you open the door, please?", "Open the door!", "You must open the door."], 0, "Could you … please? ist sehr höflich."],
]},

g19: { title: "Beim Arzt & gute Ratschläge", body: `
## Beschwerden beschreiben
| Englisch | Deutsch |
| I've got a headache. | Ich habe Kopfschmerzen. |
| I have a sore throat. | Ich habe Halsschmerzen. |
| My back hurts. | Mein Rücken tut weh. |
| I feel sick. | Mir ist übel. |
| I've got a temperature. | Ich habe Fieber. |

> Schmerzen gern mit **-ache**: headache, stomach ache, toothache, backache.

## hurt – wehtun
= My knee hurts. :: Mein Knie tut weh.
= Where does it hurt? :: Wo tut es weh?

## Ratschläge
| | |
| You should rest. | Du solltest dich ausruhen. |
| You shouldn't go to work. | Du solltest nicht arbeiten gehen. |
| Take one tablet twice a day. | Nimm zweimal täglich eine Tablette. |
| Drink plenty of water. | Trink viel Wasser. |

## In Großbritannien
- Hausarzt = **GP** – für einen Termin muss man sich dort anmelden.
- Rezeptfreie Medikamente gibt's beim **chemist** oder **pharmacy** (z. B. Boots).
- Notfall: **A&E** (Notaufnahme) oder **999**. Nicht dringend: **111**.
`, quiz: [
  ["„Ich habe Kopfschmerzen.“", ["I've got a headache.", "I have head pain.", "My head is aching me."], 0, "Typisch: I've got / I have a headache."],
  ["„Du solltest zum Arzt gehen.“", ["You should see a doctor.", "You must to see a doctor.", "You should to see a doctor."], 0, "Nach should kommt die Grundform ohne to."],
  ["Wie heißt die Notaufnahme in Großbritannien?", ["A&E", "ER", "GP"], 0, "A&E = Accident & Emergency. ER ist amerikanisch, GP ist der Hausarzt."],
]},

g20: { title: "Gerade jetzt: Present Continuous", body: `
Mit dem **Present Continuous** beschreibst du, was **gerade passiert** oder **vorübergehend** ist.

## Bildung: be + Verb-ing
| | |
| I'm working. | Ich arbeite gerade. |
| She's talking on the phone. | Sie telefoniert gerade. |
| They're staying at a hotel. | Sie wohnen (vorübergehend) im Hotel. |
| Are you enjoying it? | Gefällt es dir? |

= What are you doing? – I'm cooking. :: Was machst du gerade? – Ich koche.

## Simple oder Continuous?
| Present Simple | Present Continuous |
| immer, regelmäßig | jetzt, gerade, vorübergehend |
| I work in Berlin. | I'm working in London this month. |
| She drinks tea. | She's drinking coffee today. |

## -ing richtig schreiben
- stummes e fällt weg: make → **making**
- kurzer Vokal + Konsonant: verdoppeln → sit → **sitting**, run → **running**

## Small Talk
= What brings you to London? – I'm visiting a friend. :: Was führt dich nach London? – Ich besuche einen Freund.
= Are you enjoying your stay? :: Gefällt dir dein Aufenthalt?

> Manche Verben stehen fast nie in der -ing-Form: **know, like, want, need, understand**. Also: I **know** (nicht: I'm knowing).
`, quiz: [
  ["„Ich telefoniere gerade.“", ["I'm talking on the phone.", "I talk on the phone.", "I'm talk on the phone."], 0, "Gerade jetzt → be + -ing."],
  ["**She usually ___ the bus, but today she's walking.**", ["takes", "is taking", "take"], 0, "usually = regelmäßig → Present Simple."],
  ["Welche Form ist richtig?", ["I understand.", "I'm understanding.", "I'm understand."], 0, "understand steht (fast) nie in der -ing-Form."],
]},

g21: { title: "Vergleichen", body: `
## Kurze Adjektive: -er / -est
| Grundform | Vergleich | Superlativ |
| cheap | cheap**er** | the cheap**est** |
| big | big**ger** | the big**gest** |
| easy | eas**ier** | the eas**iest** |
| nice | nic**er** | the nic**est** |

## Lange Adjektive: more / most
| Grundform | Vergleich | Superlativ |
| expensive | more expensive | the most expensive |
| beautiful | more beautiful | the most beautiful |

> Faustregel: eine Silbe → -er. Zwei Silben auf -y → -ier. Sonst (zwei und mehr Silben) → more.

## Unregelmäßig
| | | |
| good | better | the best |
| bad | worse | the worst |
| far | further | the furthest |

## Satzbau
= London is bigger than Berlin. :: London ist größer als Berlin.
= It's the best pizza in town. :: Das ist die beste Pizza der Stadt.
= My flat is as small as yours. :: Meine Wohnung ist so klein wie deine.

> „als“ beim Vergleich = **than** (nicht then!). „so … wie“ = **as … as**.
`, quiz: [
  ["„teurer als“", ["more expensive than", "expensiver than", "more expensive then"], 0, "Lange Adjektive mit more – und „als“ = than."],
  ["Superlativ von **good**", ["the best", "the goodest", "the most good"], 0, "good – better – the best (unregelmäßig)."],
  ["**This room is ___ than the other one.**", ["bigger", "more big", "biger"], 0, "big → bigger (Konsonant verdoppelt)."],
]},

g22: { title: "Sätze verbinden", body: `
## Die wichtigsten Verbindungswörter
| Wort | Bedeutung |
| and | und |
| but | aber |
| or | oder |
| because | weil |
| so | also, deshalb |
| when | wenn, als |
| if | wenn, falls |
| although | obwohl |

## Gute Nachricht: keine Satzklammer!
Im Englischen bleibt die Wortstellung im Nebensatz **gleich** – das Verb wandert nicht ans Ende:
= I'm tired because I worked late. :: Ich bin müde, weil ich lange gearbeitet **habe**.
= I think that he is right. :: Ich glaube, dass er recht **hat**.

> „dass“ = **that** – wird im Gespräch oft einfach weggelassen: I think he's right.

## because oder so?
= It was raining, so we took a taxi. :: Es regnete, also nahmen wir ein Taxi.
= We took a taxi because it was raining. :: Wir nahmen ein Taxi, weil es regnete.

## Kommas
Englisch setzt viel **weniger Kommas** als Deutsch – vor **that** und meist vor **because** steht keins.
`, quiz: [
  ["„Ich glaube, dass es regnet.“", ["I think it's raining.", "I think, that it raining is.", "I think that raining it is."], 0, "Gleiche Wortstellung im Nebensatz – und that kann wegfallen."],
  ["**I was hungry, ___ I made a sandwich.**", ["so", "because", "although"], 0, "so = also, deshalb (Folge)."],
  ["„obwohl“ heißt …", ["although", "because", "however"], 0, "although = obwohl. however = jedoch."],
]},

g23: { title: "Wetter: it's raining", body: `
## Das Wetter mit it
Englisch beschreibt das Wetter immer mit **it**:
| | |
| It's sunny. | Es ist sonnig. |
| It's raining. | Es regnet. (gerade) |
| It's windy. | Es ist windig. |
| It's freezing. | Es ist eiskalt. |
| It's 20 degrees. | Es hat 20 Grad. |

= What's the weather like? :: Wie ist das Wetter?
= It's going to rain later. :: Später wird es regnen.

## Nomen → Adjektiv mit -y
| Nomen | Adjektiv |
| sun | sunny |
| rain | rainy |
| cloud | cloudy |
| wind | windy |
| fog | foggy |

## Briten & das Wetter
Wetter ist **das** Small-Talk-Thema in Großbritannien – ideal zum Gesprächseinstieg:
= Lovely day, isn't it? :: Schöner Tag, oder?
= Terrible weather today! :: Schreckliches Wetter heute!

> Die richtige Antwort ist Zustimmung: **Yes, isn't it lovely!** oder **I know, awful!** Eine echte Diskussion ist nicht gewünscht. 😉
`, quiz: [
  ["„Es regnet (gerade).“", ["It's raining.", "It rains.", "It's rainy now it."], 0, "Gerade jetzt → Present Continuous: It's raining."],
  ["Adjektiv zu **cloud**", ["cloudy", "cloudful", "clouding"], 0, "Wetter-Adjektive enden oft auf -y."],
  ["„Lovely day, isn't it?“ – Was antwortest du am besten?", ["Yes, isn't it lovely!", "No, it isn't.", "Why?"], 0, "Beim Wetter-Small-Talk stimmt man meist freundlich zu."],
]},

g25: { title: "Englisch im Beruf", body: `
## Über den Job sprechen
| | |
| What do you do? | Was machst du beruflich? |
| I'm a nurse. | Ich bin Krankenpflegerin. |
| I work for Siemens. | Ich arbeite bei Siemens. |
| I work in marketing. | Ich arbeite im Marketing. |
| I'm responsible for … | Ich bin zuständig für … |

> **for** + Firma, **in** + Bereich, **as** + Rolle: I work **as** a project manager **for** a bank **in** IT.

## Falsche Freunde im Büro
| Englisch | heißt | nicht |
| chef | Koch | Chef (= boss) |
| become | werden | bekommen (= get) |
| actual | tatsächlich | aktuell (= current) |
| eventually | schließlich | eventuell (= maybe) |
| Handy | gibt's nicht | Handy (= mobile) |
| Homeoffice | gibt's nicht | Homeoffice (= work from home) |

= I'm working from home today. :: Ich bin heute im Homeoffice.

## Höflich im Team
= Could you send me the file, please? :: Könntest du mir bitte die Datei schicken?
= Do you have a minute? :: Hast du kurz Zeit?
= I'll get back to you. :: Ich melde mich bei dir.

> Englisch im Büro ist meist **lockerer**: Man spricht sich mit Vornamen an, auch die Chefin.
`, quiz: [
  ["„Ich arbeite bei BMW.“", ["I work for BMW.", "I work by BMW.", "I work at the BMW."], 0, "Arbeitgeber mit for (auch at ist möglich, aber nicht by)."],
  ["Was ist ein **chef**?", ["ein Koch", "ein Chef", "eine Chefin"], 0, "chef = Koch. Der Chef ist the boss."],
  ["„Ich bin heute im Homeoffice.“", ["I'm working from home today.", "I'm in homeoffice today.", "I make home office today."], 0, "Homeoffice ist kein englisches Wort – man sagt work from home."],
]},

g27: { title: "Hobbys: like + -ing", body: `
## Mögen & nicht mögen
Nach **like, love, enjoy, hate, don't mind** steht das Verb meist mit **-ing**:
| | |
| I love cooking. | Ich koche sehr gern. |
| I enjoy reading. | Ich lese gern. |
| I don't mind waiting. | Warten macht mir nichts aus. |
| I hate getting up early. | Ich hasse frühes Aufstehen. |

> Bei **enjoy** und **don't mind** geht **nur** -ing. Bei like/love/hate ist auch „to“ möglich: I like to swim.

## would like ≠ like
| | |
| I like dancing. | Ich tanze gern. (allgemein) |
| I'd like to dance. | Ich möchte (jetzt) tanzen. |

## Spiele & Sport
| | |
| play | Ballspiele, Instrumente: play football, play **the** guitar |
| go | Aktivitäten auf -ing: go swimming, go hiking |
| do | andere: do yoga, do karate |

= Do you fancy going to the cinema? :: Hast du Lust, ins Kino zu gehen?
= I'm really into photography. :: Ich fotografiere total gern.
`, quiz: [
  ["„Ich wandere gern.“", ["I enjoy hiking.", "I enjoy to hike.", "I enjoy hike."], 0, "Nach enjoy immer -ing."],
  ["**I ___ yoga twice a week.**", ["do", "play", "go"], 0, "Yoga macht man: do yoga."],
  ["„Ich möchte einen Kaffee.“", ["I'd like a coffee.", "I like a coffee.", "I like coffee now."], 0, "Wunsch im Moment = would like."],
]},

g28: { title: "Vergangenheit: Past Simple (regelmäßig)", body: `
Mit dem **Past Simple** erzählst du, was zu einem **bestimmten Zeitpunkt** in der Vergangenheit passiert ist (yesterday, last week, in 2019 …).

## Bildung: -ed
Für **alle** Personen gleich:
| Grundform | Past Simple |
| work | worked |
| live | lived |
| study | studied |
| stop | stopped |

= We visited Oxford last weekend. :: Letztes Wochenende haben wir Oxford besucht.

> Im Deutschen sagt man im Gespräch meist „ich habe gemacht“ – im Englischen ist hier trotzdem das **Past Simple** richtig, sobald ein Zeitpunkt genannt wird.

## Aussprache von -ed
| klingt wie | nach | Beispiel |
| -t | p, k, s, sh, ch | stopped, walked |
| -d | anderen Lauten | lived, played |
| -id (eigene Silbe) | t, d | wanted, needed |

## Fragen & Verneinung mit did
| | |
| Did you like it? | Hat es dir gefallen? |
| I didn't sleep well. | Ich habe nicht gut geschlafen. |
| Where did you stay? | Wo habt ihr gewohnt? |

> Nach **did / didn't** steht die **Grundform**: Did you **like**…? (nicht: liked)

## was / were
be hat zwei Formen: **I/he/she/it was**, **you/we/they were**.
`, quiz: [
  ["„Wir haben gestern Fußball gespielt.“", ["We played football yesterday.", "We have played football yesterday.", "We play football yesterday."], 0, "Bestimmter Zeitpunkt (yesterday) → Past Simple."],
  ["**Did you ___ the film?**", ["enjoy", "enjoyed", "enjoying"], 0, "Nach did steht die Grundform."],
  ["**They ___ very tired.**", ["were", "was", "did"], 0, "they → were."],
]},

g29: { title: "Unregelmäßige Verben", body: `
Viele häufige Verben bilden die Vergangenheit nicht mit -ed. Die gute Nachricht: Es sind meist die gleichen, die auch im Deutschen unregelmäßig sind.

## Die wichtigsten
| Grundform | Past | Deutsch |
| be | was / were | sein |
| go | went | gehen |
| have | had | haben |
| do | did | tun |
| make | made | machen |
| get | got | bekommen |
| see | saw | sehen |
| come | came | kommen |
| take | took | nehmen |
| eat | ate | essen |
| buy | bought | kaufen |
| think | thought | denken |
| say | said | sagen |
| leave | left | verlassen |

= I bought a new phone. :: Ich habe ein neues Handy gekauft.
= We went to Ireland in May. :: Im Mai waren wir in Irland.

> Fragen und Verneinungen bleiben auch hier einfach: **Did you go?** – **I didn't go.** Die unregelmäßige Form brauchst du nur im positiven Satz.

## Lerntipp
Lerne Verben in Dreiergruppen: **go – went – gone**. Die dritte Form brauchst du bald für das Present Perfect.
`, quiz: [
  ["Past Simple von **buy**", ["bought", "buyed", "brought"], 0, "buy – bought. (brought kommt von bring)"],
  ["„Ich habe ihn nicht gesehen.“", ["I didn't see him.", "I didn't saw him.", "I not saw him."], 0, "Nach didn't steht die Grundform: see."],
  ["**Last year we ___ to Canada.**", ["went", "goed", "gone"], 0, "go – went – gone. Im Past Simple: went."],
]},

g30: { title: "Zukunft: will & going to", body: `
## going to – Pläne
Wenn du etwas **schon vorhast**:
= I'm going to visit my parents at Christmas. :: An Weihnachten besuche ich meine Eltern.
= Look at the clouds – it's going to rain. :: Schau die Wolken an – gleich regnet es.

## will – spontan & Vermutungen
Wenn du es **gerade entscheidest**, etwas versprichst oder vermutest:
= The phone is ringing. – I'll get it! :: Das Telefon klingelt. – Ich geh ran!
= I think she'll like it. :: Ich glaube, es wird ihr gefallen.
= I won't tell anyone. :: Ich sag's niemandem.

## Feste Termine: Present Continuous
Für **verabredete** Pläne nimmt man oft einfach die -ing-Form:
= I'm meeting Tom on Friday. :: Am Freitag treffe ich Tom.
= What are you doing tonight? :: Was machst du heute Abend?

| | wann? |
| I'll … | spontan, Versprechen, Vermutung |
| I'm going to … | Absicht, Plan |
| I'm …ing | fester Termin |

> Achtung: **will** heißt nicht „will“ (wollen)! „Ich will“ = **I want**.
`, quiz: [
  ["Es klingelt an der Tür. Du sagst spontan:", ["I'll get it!", "I'm going to get it!", "I get it!"], 0, "Spontane Entscheidung → will."],
  ["„Ich will nach Hause.“", ["I want to go home.", "I will go home.", "I will to go home."], 0, "will = werden (Zukunft). wollen = want."],
  ["Du hast den Flug schon gebucht: „Im Juni fliege ich nach Dublin.“", ["I'm flying to Dublin in June.", "I'll fly to Dublin in June.", "I fly to Dublin in June maybe."], 0, "Fester Plan/Termin → Present Continuous (oder going to)."],
]},

g33: { title: "some & any", body: `
## Die Grundregel
| | | Beispiel |
| some | positive Sätze | I need some new shoes. |
| any | Fragen & Verneinungen | Do you have any jeans? / I don't have any money. |

= Have you got any T-shirts in medium? :: Haben Sie T-Shirts in M?
= There aren't any clean towels. :: Es gibt keine sauberen Handtücher.

> **not any** = **kein**: I don't have **any** time = I have **no** time.

## Ausnahme: Angebote & Bitten
Bei Angeboten und Bitten nimmt man **some**, auch in Fragen – weil man ein Ja erwartet:
= Would you like some tea? :: Möchtest du Tee?
= Could I have some water? :: Könnte ich etwas Wasser haben?

## Kleidung: immer Mehrzahl
Einige Kleidungsstücke gibt es nur in der Mehrzahl: **trousers, jeans, shorts, glasses**.
= These trousers are too long. :: Diese Hose ist zu lang.
= a pair of jeans :: eine Jeans

> Britische Falle: **pants** = Unterhose (UK), aber Hose (US). In London also lieber **trousers** sagen. 😉
`, quiz: [
  ["**I don't have ___ cash.**", ["any", "some", "no"], 0, "In Verneinungen: any. (I have no cash wäre auch richtig, aber ohne don't.)"],
  ["**Would you like ___ cake?**", ["some", "any", "a"], 0, "Angebot → some, auch in der Frage."],
  ["„Die Hose ist zu teuer.“", ["The trousers are too expensive.", "The trouser is too expensive.", "The trousers is too expensive."], 0, "trousers ist immer Mehrzahl → are."],
]},

g34: { title: "Schon mal? Present Perfect & Erfahrungen", body: `
Das **Present Perfect** (have + 3. Form) brauchst du, wenn es um Erfahrungen **im Leben bisher** geht – ohne genauen Zeitpunkt.

## Bildung
| | |
| I have (I've) been to London. | Ich war schon mal in London. |
| She has (She's) seen the film. | Sie hat den Film schon gesehen. |
| Have you ever eaten sushi? | Hast du schon mal Sushi gegessen? |
| I've never flown business class. | Ich bin noch nie Businessclass geflogen. |

## been oder gone?
| | |
| She's **been** to Rome. | Sie war schon mal in Rom (und ist zurück). |
| She's **gone** to Rome. | Sie ist nach Rom gefahren (und ist noch dort). |

## Present Perfect oder Past Simple?
| Present Perfect | Past Simple |
| kein Zeitpunkt, Erfahrung | bestimmter Zeitpunkt |
| I've been to Scotland. | I went to Scotland **last year**. |

= Have you ever been to New York? – Yes, I went there in 2019. :: Warst du schon mal in New York? – Ja, 2019.

> Faustregel: Sobald **wann** genannt wird (yesterday, in 2019, last week), ist es **Past Simple**.
`, quiz: [
  ["„Warst du schon mal in Irland?“", ["Have you ever been to Ireland?", "Were you ever in Ireland?", "Did you ever be in Ireland?"], 0, "Lebenserfahrung ohne Zeitpunkt → Present Perfect mit ever."],
  ["**I ___ to Spain last summer.**", ["went", "have been", "have gone"], 0, "last summer = bestimmter Zeitpunkt → Past Simple."],
  ["Tom ist gerade in Paris. „Tom ___ to Paris.“", ["has gone", "has been", "went been"], 0, "gone = hingefahren und noch dort."],
]},

g35: { title: "Gesprächsstrategien", body: `
Niemand versteht alles – auch Muttersprachler nicht. Mit ein paar Sätzen hältst du jedes Gespräch am Laufen.

## Wenn du etwas nicht verstehst
| | |
| Sorry, could you say that again? | Entschuldigung, könntest du das wiederholen? |
| Could you speak a bit more slowly? | Könntest du etwas langsamer sprechen? |
| What does … mean? | Was bedeutet …? |
| Sorry, I didn't catch that. | Entschuldigung, das habe ich nicht mitbekommen. |

## Wenn dir ein Wort fehlt
| | |
| What's the word for …? | Wie heißt das Wort für …? |
| It's a kind of … | Das ist so eine Art … |
| It's something you use to … | Damit macht man … |
| How do you say … in English? | Wie sagt man … auf Englisch? |

= It's a thing you use to open bottles. :: Das ist ein Ding zum Flaschenöffnen.

## Zeit gewinnen
**Well, …** · **Let me think …** · **That's a good question.** · **Hmm, how can I put it?**

## Zuhören zeigen
**Really?** · **I see.** · **Oh, that's interesting!** · **Right.** · **Exactly!**

> Englischsprachige erwarten im Gespräch kleine Rückmeldungen. Schweigen wirkt schnell desinteressiert – ein „Really?“ oder „Oh, nice!“ zwischendurch hilft.
`, quiz: [
  ["Du hast etwas nicht verstanden:", ["Sorry, I didn't catch that.", "I don't hear.", "Say again you."], 0, "Sorry, I didn't catch that = Ich hab das nicht mitbekommen."],
  ["Dir fehlt das Wort „Korkenzieher“. Du sagst:", ["It's a thing you use to open wine bottles.", "It's a corkpuller.", "I don't know English."], 0, "Umschreiben hilft immer: It's a thing you use to …"],
  ["Was zeigt Interesse, wenn jemand erzählt?", ["Really? That's interesting!", "OK.", "And?"], 0, "Kleine Rückmeldungen zeigen, dass du zuhörst."],
]},

g40: { title: "Present Perfect: just, already, yet", body: `
Das Present Perfect brauchst du auch, wenn etwas **gerade passiert** ist oder das **Ergebnis jetzt wichtig** ist.

= I've lost my keys! :: Ich habe meine Schlüssel verloren! (Ich habe sie jetzt nicht.)
= She's finished the report. :: Sie hat den Bericht fertig.

## just, already, yet
| Wort | Bedeutung | Stellung |
| just | gerade eben | vor dem Verb: I've **just** arrived. |
| already | schon | vor dem Verb: I've **already** eaten. |
| yet | schon? / noch nicht | am Ende: Have you finished **yet**? – I haven't finished **yet**. |

= Has the bus left yet? – Yes, it's just gone. :: Ist der Bus schon weg? – Ja, er ist gerade abgefahren.

## Die 3. Form (Partizip)
Regelmäßig = wie das Past Simple (worked). Wichtige unregelmäßige:
| Grundform | Past | 3. Form |
| be | was | been |
| go | went | gone |
| do | did | done |
| see | saw | seen |
| eat | ate | eaten |
| write | wrote | written |
| take | took | taken |
| forget | forgot | forgotten |

> Amerikaner nehmen hier oft das Past Simple: **Did you eat yet?** Britisch: **Have you eaten yet?**
`, quiz: [
  ["**Have you done your homework ___?**", ["yet", "already", "just"], 0, "In Fragen am Satzende: yet."],
  ["„Ich bin gerade angekommen.“", ["I've just arrived.", "I just have arrived.", "I've arrived just."], 0, "just steht zwischen have und Partizip."],
  ["3. Form von **write**", ["written", "wrote", "writed"], 0, "write – wrote – written."],
]},

g41: { title: "Phrasal Verbs", body: `
**Phrasal Verbs** sind Verben mit einem kleinen Zusatzwort (up, off, on …). Sie sind im Alltag extrem häufig – und ähneln den deutschen trennbaren Verben (an-rufen, auf-stehen).

## Beispiele
| | |
| get up | aufstehen |
| turn on / off | ein- / ausschalten |
| pick up | abholen |
| look for | suchen |
| give up | aufgeben |
| find out | herausfinden |

= I'll pick you up at the airport. :: Ich hole dich am Flughafen ab.

## Wohin mit dem Objekt?
Bei vielen Phrasal Verbs kann ein Nomen **davor oder dahinter** stehen. Ein **Pronomen** (it, him, her …) muss **in die Mitte**:
| | |
| Turn off the light. ✓ | Turn the light off. ✓ |
| Turn **it** off. ✓ | ~~Turn off it.~~ ✗ |

## Die Bedeutung ändert sich
Das kleine Wort kann die Bedeutung komplett ändern:
| | |
| look **for** | suchen |
| look **after** | aufpassen auf |
| look **up** | nachschlagen |
| look **forward to** | sich freuen auf |

> Lerne Phrasal Verbs immer mit einem Beispielsatz – so bleiben sie viel besser hängen.
`, quiz: [
  ["„Schalt es aus!“", ["Turn it off!", "Turn off it!", "Off turn it!"], 0, "Ein Pronomen steht in der Mitte: turn it off."],
  ["„Kannst du auf meine Katze aufpassen?“", ["Can you look after my cat?", "Can you look for my cat?", "Can you look up my cat?"], 0, "look after = aufpassen auf. look for = suchen."],
  ["„herausfinden“ heißt …", ["find out", "find up", "find off"], 0, "find out = herausfinden."],
]},

g42: { title: "Mengen: much, many & a lot of", body: `
## Zählbar oder nicht?
- **zählbar**: Dinge, die man zählen kann – apples, people, chairs
- **nicht zählbar**: Massen und Abstraktes – water, time, money, information, advice, luggage

| | zählbar | nicht zählbar |
| viel(e) | many | much |
| ein paar / ein wenig | a few | a little |
| wie viel(e)? | how many? | how much? |
| viel(e) (positiv) | a lot of | a lot of |

= How many people are coming? :: Wie viele Leute kommen?
= How much time do we have? :: Wie viel Zeit haben wir?
= There's a lot of traffic. :: Es ist viel Verkehr.

> **much** klingt in positiven Sätzen sehr förmlich. Im Alltag: **a lot of** (oder **lots of**). In Fragen und Verneinungen: **much** – Not **much** time.

## Typische Fallen
Diese Wörter sind im Englischen **unzählbar** und haben keine Mehrzahl:
| falsch | richtig |
| ~~informations~~ | information / some information |
| ~~advices~~ | advice / a piece of advice |
| ~~luggages~~ | luggage |
| ~~furnitures~~ | furniture |

## a few vs. few
**a few** = ein paar (positiv) · **few** = wenige (eher negativ). Genauso **a little** / **little**.
`, quiz: [
  ["**How ___ money do you need?**", ["much", "many", "lot"], 0, "money ist unzählbar → much."],
  ["„Kannst du mir ein paar Tipps geben?“", ["Can you give me some advice?", "Can you give me some advices?", "Can you give me a few advice?"], 0, "advice ist unzählbar – keine Mehrzahl."],
  ["**There were ___ people at the party.** (positiv, Alltag)", ["a lot of", "much", "a little"], 0, "In positiven Sätzen klingt a lot of am natürlichsten."],
]},

g44: { title: "Britische Höflichkeit", body: `
Briten sind berühmt für ihre Höflichkeit – und für ihre **Indirektheit**. Was auf Deutsch sachlich klingt, wirkt auf Englisch schnell schroff.

## Bitten weicher machen
| direkt (klingt hart) | höflich |
| Give me the menu. | Could I have the menu, please? |
| Close the window. | Would you mind closing the window? |
| I want to leave early. | I was wondering if I could leave early. |
| That's wrong. | I'm not sure that's quite right. |

> Nach **would you mind** steht -ing. Die Antwort „No, not at all“ heißt: Nein, es macht mir **nichts** aus – also ja! 😄

## Absagen & schlechte Nachrichten
**I'm afraid …** (leider) ist das wichtigste Polster:
= I'm afraid I can't make it. :: Leider schaffe ich es nicht.
= I'm afraid we're fully booked. :: Leider sind wir ausgebucht.

## sorry – überall
Briten sagen **sorry**, wenn sie sich entschuldigen, wenn sie etwas nicht verstanden haben, wenn sie vorbeiwollen – und sogar, wenn **du** sie angerempelt hast.

## Was Briten wirklich meinen
| Sie sagen | Sie meinen oft |
| Quite good. | Geht so. |
| Not bad. | Ziemlich gut. |
| That's an interesting idea. | Davon halte ich nichts. |
| I'll bear it in mind. | Das mache ich wahrscheinlich nicht. |
| With respect, … | Du liegst falsch. |
`, quiz: [
  ["Wie fragst du höflich, ob jemand das Fenster schließen könnte?", ["Would you mind closing the window?", "Would you mind to close the window?", "Close the window, OK?"], 0, "would you mind + -ing."],
  ["„Would you mind if I sat here?“ – „Not at all.“ Was bedeutet das?", ["Du darfst dich setzen.", "Du darfst dich nicht setzen.", "Die Person weiß es nicht."], 0, "Not at all = Es macht mir überhaupt nichts aus."],
  ["„Leider ist das Zimmer nicht frei.“", ["I'm afraid the room isn't available.", "I fear the room isn't free.", "Unluckily the room is not free."], 0, "I'm afraid … ist das typische, höfliche „leider“."],
]},

});
