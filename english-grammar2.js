// Grammatik-Lektionen für den Englischkurs (Level 2). Gleiches Markup wie english-grammar.js.
window.LESSONS_ENGLISH = window.LESSONS_ENGLISH || {};
Object.assign(window.LESSONS_ENGLISH, {

g45: { title: "Früher: used to", body: `
Mit **used to** beschreibst du, was **früher regelmäßig** so war – heute aber nicht mehr.

| | |
| I used to live in Vienna. | Früher habe ich in Wien gewohnt. |
| She used to smoke. | Früher hat sie geraucht. |
| I didn't use to like coffee. | Früher mochte ich keinen Kaffee. |
| Did you use to play an instrument? | Hast du früher ein Instrument gespielt? |

> In Frage und Verneinung: **use to** ohne d – weil did schon die Vergangenheit zeigt.

## used to oder Past Simple?
| used to | Past Simple |
| wiederholt, Gewohnheit | einmalig, Zeitpunkt |
| We used to go to Italy every summer. | We went to Italy in 2015. |

## Erzählen
= When I was a child, we used to spend every summer at the lake. :: Als Kind haben wir jeden Sommer am See verbracht.
= Looking back, it was the right decision. :: Rückblickend war es die richtige Entscheidung.

> Nicht verwechseln: **be used to** = an etwas gewöhnt sein (das kommt später).
`, quiz: [
  ["„Früher habe ich Klavier gespielt.“", ["I used to play the piano.", "I use to play the piano.", "I was used to play the piano."], 0, "Positiv: used to + Grundform."],
  ["**Did you ___ live here?**", ["use to", "used to", "using to"], 0, "Nach did steht use to ohne d."],
  ["Was passt zu **used to**?", ["eine frühere Gewohnheit", "ein einmaliges Ereignis", "die Zukunft"], 0, "used to = früher regelmäßig, heute nicht mehr."],
]},

g46: { title: "Gefühle + Präposition", body: `
Viele Gefühlswörter haben eine **feste Präposition** – oft eine andere als im Deutschen.

| Englisch | Deutsch |
| proud **of** | stolz **auf** |
| afraid / scared **of** | Angst **vor** |
| interested **in** | interessiert **an** |
| good **at** | gut **in** |
| angry **with** sb / **about** sth | wütend **auf** jdn / **über** etw. |
| fed up **with** | genervt **von** |
| worried **about** | besorgt **um** |
| excited **about** | aufgeregt **wegen** |
| tired **of** | müde **von**, satt haben |
| disappointed **with** | enttäuscht **von** |

= I'm really proud of you. :: Ich bin echt stolz auf dich.
= She's worried about her exam. :: Sie macht sich Sorgen wegen ihrer Prüfung.

## Danach: Nomen oder -ing
Nach einer Präposition steht ein Nomen oder ein Verb mit **-ing**:
= I'm tired of waiting. :: Ich habe es satt zu warten.
= I'm interested in learning Spanish. :: Ich habe Interesse daran, Spanisch zu lernen.

## Gefühle zeigen
= How are you feeling? :: Wie geht es dir?
= I'm a bit down. :: Ich bin etwas niedergeschlagen.
`, quiz: [
  ["„Ich bin stolz auf dich.“", ["I'm proud of you.", "I'm proud on you.", "I'm proud about you."], 0, "proud of."],
  ["„Ich habe Angst vor Spinnen.“", ["I'm scared of spiders.", "I'm scared before spiders.", "I have fear of spiders."], 0, "scared / afraid of."],
  ["**I'm fed up with ___ in traffic.**", ["sitting", "sit", "to sit"], 0, "Nach einer Präposition: -ing."],
]},

g47: { title: "Relativsätze: who, which, that", body: `
Mit Relativsätzen beschreibst du genauer, **wen** oder **was** du meinst.

| Wort | wofür? | Beispiel |
| who | Personen | the landlord **who** lives in Spain |
| which | Sachen | the flat **which** I saw |
| that | Personen & Sachen (Alltag) | the flat **that** I saw |
| whose | wessen, deren | the woman **whose** flat I rent |
| where | Orte | the town **where** I grew up |

= The flat that we saw yesterday was perfect. :: Die Wohnung, die wir gestern gesehen haben, war perfekt.
= Do you know anyone who speaks Spanish? :: Kennst du jemanden, der Spanisch spricht?

## Weglassen erlaubt
Wenn das Relativwort das **Objekt** ist, kann es wegfallen:
= The flat (that) I saw was nice. :: Die Wohnung, die ich gesehen habe, war schön.

> Aber nicht, wenn es das Subjekt ist: the man **who** called (hier muss who stehen).

## Zusatzinfos mit Komma
Steht eine **Zusatzinfo** zwischen Kommas, nimmt man **who** oder **which** – nie that:
= My landlord, who is very nice, lives in Spain. :: Mein Vermieter, der sehr nett ist, lebt in Spanien.
`, quiz: [
  ["„der Mann, der angerufen hat“", ["the man who called", "the man which called", "the man whose called"], 0, "Personen → who (oder that)."],
  ["„die Stadt, in der ich aufgewachsen bin“", ["the town where I grew up", "the town which I grew up", "the town who I grew up"], 0, "Orte → where."],
  ["Welcher Satz ist richtig?", ["The flat I saw was nice.", "The flat I saw it was nice.", "The flat what I saw was nice."], 0, "Objekt-Relativwort darf wegfallen – what ist hier falsch."],
]},

g48: { title: "Das Passiv", body: `
Im Passiv ist wichtig, **was passiert** – nicht, wer es tut. Behörden, Nachrichten und Formulare lieben das Passiv.

## Bildung: be + 3. Form
| Zeit | Passiv |
| Gegenwart | The form **is signed**. |
| Vergangenheit | The form **was signed**. |
| Present Perfect | The form **has been signed**. |
| Zukunft | The form **will be signed**. |
| mit Modalverb | The form **must be signed**. |
| gerade jetzt | Your application **is being processed**. |

= My passport was stolen. :: Mein Pass wurde gestohlen.
= Your visa will be sent by post. :: Ihr Visum wird per Post geschickt.

## Wer war's? by
= The letter was signed by the manager. :: Der Brief wurde von der Managerin unterschrieben.

> Deutsch „werden“ im Passiv = englisch **be**. Nicht mit will (Zukunft) verwechseln!

## Typisch auf Ämtern
= Applications must be submitted online. :: Anträge müssen online eingereicht werden.
= You will be contacted within ten days. :: Sie werden innerhalb von zehn Tagen kontaktiert.
`, quiz: [
  ["„Mein Fahrrad wurde gestohlen.“", ["My bike was stolen.", "My bike has stolen.", "My bike became stolen."], 0, "Passiv Vergangenheit: was + 3. Form. (became = wurde im Sinne von „wurde zu“)"],
  ["**The form must ___ by both parents.**", ["be signed", "signed", "being signed"], 0, "Modalverb + be + 3. Form."],
  ["„Ihr Antrag wird gerade bearbeitet.“", ["Your application is being processed.", "Your application is processing.", "Your application will processed."], 0, "Gerade jetzt: is being + 3. Form."],
]},

g49: { title: "Seit wann? since & for", body: `
Eine der größten Fallen für Deutschsprachige: „Ich wohne **seit** zwei Jahren hier“ steht im Deutschen in der **Gegenwart** – im Englischen **nicht**!

| ✗ falsch | ✓ richtig |
| ~~I live here since 2020.~~ | I've lived here since 2020. |
| ~~I know him for years.~~ | I've known him for years. |

## since oder for?
| | wofür? | Beispiele |
| since | Zeitpunkt (seit wann?) | since Monday, since 2019, since I was a child |
| for | Zeitraum (wie lange?) | for two weeks, for ten years, for ages |

## Present Perfect Continuous
Für Tätigkeiten, die **bis jetzt andauern**, nimmt man oft **have been + -ing**:
= I've been learning English for two years. :: Ich lerne seit zwei Jahren Englisch.
= How long have you been waiting? :: Wie lange wartest du schon?
= It's been raining all day. :: Es regnet schon den ganzen Tag.

> Bei **know, like, have (besitzen), be** bleibt man beim einfachen Present Perfect: I've **known** her for years.

## Fragen
= How long have you lived in London? :: Wie lange wohnst du schon in London?
`, quiz: [
  ["„Ich arbeite seit 2021 hier.“", ["I've been working here since 2021.", "I work here since 2021.", "I'm working here for 2021."], 0, "Bis jetzt andauernd → Present Perfect (Continuous). Zeitpunkt → since."],
  ["**We've been married ___ ten years.**", ["for", "since", "from"], 0, "Zeitraum → for."],
  ["„Wie lange kennst du sie schon?“", ["How long have you known her?", "How long do you know her?", "Since when you know her?"], 0, "know → Present Perfect: have you known."],
]},

g51: { title: "Beim Arzt: Symptome beschreiben", body: `
## Seit wann?
Für Beschwerden, die bis jetzt andauern, wieder das **Present Perfect**:
= I've had a cough for a week. :: Ich habe seit einer Woche Husten.
= I've been feeling dizzy since yesterday. :: Mir ist seit gestern schwindlig.

## Beschwerden genauer
| | |
| It's a sharp pain. | Es ist ein stechender Schmerz. |
| It's a dull ache. | Es ist ein dumpfer Schmerz. |
| It comes and goes. | Es kommt und geht. |
| It's getting worse. | Es wird schlimmer. |
| It hurts when I breathe. | Es tut beim Atmen weh. |

## Was der Arzt fragt
= What seems to be the problem? :: Was fehlt Ihnen denn?
= Are you taking any medication? :: Nehmen Sie Medikamente?
= Are you allergic to anything? :: Sind Sie gegen etwas allergisch?

## Das britische System
- **GP surgery**: Hausarztpraxis – du musst dort **registriert** sein.
- **NHS**: der staatliche Gesundheitsdienst, für Einwohner größtenteils kostenlos.
- **Prescription**: Rezept – in England zahlt man meist eine feste Gebühr pro Medikament.
- **111**: Telefonberatung für dringende, aber nicht lebensbedrohliche Fälle.

> **sick** heißt britisch oft „übel“: I feel sick = Mir ist schlecht. „Krank“ = **ill** (amerikanisch: sick).
`, quiz: [
  ["„Ich habe seit drei Tagen Fieber.“", ["I've had a temperature for three days.", "I have a temperature since three days.", "I had a temperature for three days."], 0, "Andauernd bis jetzt → Present Perfect + for."],
  ["Britisch: **I feel sick** bedeutet meist …", ["Mir ist übel.", "Ich bin krank.", "Ich bin müde."], 0, "Britisch sick = übel. Krank = ill."],
  ["„Es wird schlimmer.“", ["It's getting worse.", "It's becoming badder.", "It gets worst."], 0, "get + Vergleich: getting worse."],
]},

g52: { title: "-ing oder to? Verben mit Ergänzung", body: `
Nach manchen Verben folgt **-ing**, nach anderen **to + Grundform**. Leider muss man es lernen – aber es gibt Muster.

## Mit -ing
**enjoy, mind, finish, avoid, suggest, consider, keep, practise, can't stand**
= I enjoy working in a team. :: Ich arbeite gern im Team.
= Would you mind waiting? :: Würden Sie bitte kurz warten?

## Mit to
**want, would like, decide, hope, plan, need, offer, agree, refuse, promise, manage**
= I've decided to apply. :: Ich habe beschlossen, mich zu bewerben.
= I'd like to work abroad. :: Ich möchte im Ausland arbeiten.

## Nach Präpositionen: immer -ing
= I'm good at organising. :: Ich kann gut organisieren.
= I look forward to hearing from you. :: Ich freue mich auf Ihre Antwort.

> Achtung: Bei **look forward to** ist „to“ eine Präposition – daher -ing!

## Bedeutung ändert sich
| | |
| I stopped smoking. | Ich habe mit dem Rauchen aufgehört. |
| I stopped to smoke. | Ich habe angehalten, um zu rauchen. |
| Remember to call him! | Denk daran, ihn anzurufen! |
| I remember calling him. | Ich erinnere mich, dass ich ihn angerufen habe. |
`, quiz: [
  ["**I'm looking forward to ___ you.**", ["meeting", "meet", "to meet"], 0, "look forward to + -ing."],
  ["**She decided ___ the job.**", ["to take", "taking", "take"], 0, "decide + to."],
  ["**Have you finished ___ the report?**", ["writing", "to write", "write"], 0, "finish + -ing."],
]},

g53: { title: "Meetings leiten & mitreden", body: `
## Eröffnen & leiten
| | |
| Shall we get started? | Wollen wir anfangen? |
| The aim of today's meeting is … | Ziel des heutigen Meetings ist … |
| Let's move on to the next item. | Kommen wir zum nächsten Punkt. |
| Let's come back to that later. | Darauf kommen wir später zurück. |
| To sum up, … | Zusammengefasst … |

## Mitreden
| | |
| Can I just add something? | Darf ich kurz etwas ergänzen? |
| Sorry to interrupt, but … | Entschuldigung, dass ich unterbreche, aber … |
| I'd like to make a suggestion. | Ich möchte einen Vorschlag machen. |
| Could you clarify that? | Könnten Sie das erläutern? |
| What do you think, Tom? | Was meinst du, Tom? |

## suggest richtig benutzen
**suggest** + -ing oder + that-Satz – nie mit „to“:
= I suggest taking a break. :: Ich schlage vor, eine Pause zu machen.
= I suggest that we meet again on Friday. :: Ich schlage vor, dass wir uns am Freitag wieder treffen.

> Nicht: ~~I suggest you to …~~ – das ist ein typischer Fehler.

## Abschließen
= Let's go through the action points. :: Gehen wir die Aufgaben durch.
= Thanks, everyone. That's all for today. :: Danke an alle. Das war's für heute.
`, quiz: [
  ["**I suggest ___ a short break.**", ["taking", "to take", "you to take"], 0, "suggest + -ing (oder that-Satz)."],
  ["Du möchtest jemanden höflich unterbrechen:", ["Sorry to interrupt, but…", "Stop, I speak now.", "Wait, wait!"], 0, "Sorry to interrupt, but … ist höflich und üblich."],
  ["„Kommen wir zum nächsten Punkt.“", ["Let's move on to the next item.", "Let's go to the next point now.", "Next thing, please."], 0, "move on to the next item ist die übliche Meeting-Formel."],
]},

g54: { title: "E-Mails: formell & locker", body: `
## Aufbau
| Teil | formell | locker |
| Anrede | Dear Ms Taylor, | Hi Tom, |
| unbekannt | Dear Sir or Madam, | – |
| Einstieg | I am writing to … | Just a quick note to … |
| Bezug | Further to our call, … | Thanks for your email. |
| Anhang | Please find attached … | I've attached … |
| Bitte | I would be grateful if you could … | Could you …? |
| Schluss | I look forward to hearing from you. | Speak soon! |
| Gruß | Kind regards, / Yours sincerely, | Best, / Cheers, |

= I am writing to inquire about your English courses. :: Ich schreibe Ihnen, um mich nach Ihren Englischkursen zu erkundigen.
= Please let me know if you have any questions. :: Bei Fragen melden Sie sich gern.

## Ein paar Regeln
- Nach der Anrede: **Komma**, und dann geht es mit **Großbuchstaben** weiter.
- **Ms** ist die übliche Anrede für Frauen, unabhängig vom Familienstand.
- Kein „Sehr geehrte Damen und Herren“ bei bekannten Personen – einfach **Dear + Name**.
- **Yours sincerely** (wenn du den Namen kennst), **Yours faithfully** (bei „Dear Sir or Madam“) – beides sehr formell.

> Im Alltag ist **Kind regards** oder **Best wishes** fast immer richtig.
`, quiz: [
  ["Du schreibst einer unbekannten Firma. Anrede?", ["Dear Sir or Madam,", "Hi guys,", "Dear Firm,"], 0, "Formell und ohne Namen: Dear Sir or Madam."],
  ["„Anbei finden Sie die Rechnung.“", ["Please find attached the invoice.", "Attached you find the bill.", "In the appendix is the invoice."], 0, "Please find attached … ist die feste Formel."],
  ["Welcher Schluss passt fast immer?", ["Kind regards,", "Love,", "Yours faithfully, cheers,"], 0, "Kind regards ist neutral-freundlich."],
]},

g55: { title: "Telefonieren & Videocalls", body: `
## Am Telefon
| | |
| Hello, Anna Weber speaking. | Hallo, Anna Weber am Apparat. |
| Could I speak to Mr Jones, please? | Könnte ich bitte mit Herrn Jones sprechen? |
| Who's calling, please? | Wer spricht, bitte? |
| Hold on, I'll put you through. | Einen Moment, ich verbinde Sie. |
| I'm afraid he's not available. | Leider ist er nicht erreichbar. |
| Can I take a message? | Kann ich etwas ausrichten? |
| Could you ask her to call me back? | Könnten Sie sie bitten, mich zurückzurufen? |

> Am Telefon sagt man **This is Anna** oder **Anna speaking** – nicht „I am Anna“.

## Buchstabieren
Namen und E-Mail-Adressen buchstabiert man oft. Wichtig: **@** = at, **.** = dot, **-** = dash, **_** = underscore.
= My email is anna dot weber at gmail dot com. :: Meine E-Mail-Adresse ist anna.weber@gmail.com.

## Im Videocall
| | |
| Can you hear me? | Kannst du mich hören? |
| You're on mute. | Du bist stummgeschaltet. |
| You're breaking up. | Die Verbindung bricht ab. |
| Let me share my screen. | Ich teile meinen Bildschirm. |
| Sorry, I dropped off. | Sorry, ich war kurz raus. |
`, quiz: [
  ["Du meldest dich am Telefon:", ["Hello, Anna speaking.", "Hello, here is Anna.", "Hello, I am Anna on the phone."], 0, "Typisch: … speaking oder This is …"],
  ["Wie spricht man **@** in einer E-Mail-Adresse?", ["at", "et", "monkey"], 0, "@ = at, . = dot."],
  ["Jemand redet, aber man hört nichts:", ["I think you're on mute.", "You are stumm.", "Your voice is off."], 0, "on mute = stummgeschaltet."],
]},

g56: { title: "Zahlen & Trends präsentieren", body: `
## Steigen & fallen
| Verb | Nomen | Deutsch |
| rise / increase / go up | a rise / an increase | steigen / Anstieg |
| fall / decrease / go down | a fall / a decrease | fallen / Rückgang |
| remain stable | – | stabil bleiben |
| peak | a peak | Höchststand erreichen |

## Wie stark?
| Adverb | Adjektiv | Deutsch |
| sharply | sharp | stark |
| significantly | significant | deutlich |
| steadily | steady | stetig |
| slightly | slight | leicht |

= Sales rose sharply in the first quarter. :: Der Umsatz stieg im ersten Quartal stark.
= There was a slight decrease in costs. :: Die Kosten sind leicht gesunken.

## by, to, from
| | |
| rose **by** 10% | stieg **um** 10 % |
| rose **to** £5m | stieg **auf** 5 Mio. Pfund |
| **from** 3% **to** 5% | **von** 3 % **auf** 5 % |

## Zahlen lesen
- **2.5** = two point five (Punkt statt Komma!)
- **1,500** = one thousand five hundred (Komma statt Punkt!)
- **billion** = Milliarde (nicht Billion!)
- **half a million**, **two million** (ohne -s)
`, quiz: [
  ["„Der Umsatz stieg um 8 %.“", ["Sales rose by 8%.", "Sales rose about 8%.", "Sales rose with 8%."], 0, "um = by."],
  ["Was ist **a billion**?", ["eine Milliarde", "eine Billion", "eine Million"], 0, "billion = Milliarde – eine häufige Falle!"],
  ["**There was a ___ increase in profit.** (leicht)", ["slight", "slightly", "slow"], 0, "Vor einem Nomen steht das Adjektiv: a slight increase."],
]},

g57: { title: "If-Sätze: 1. & 2. Konditional", body: `
## 1. Konditional – realistisch
Was **wirklich passieren kann**: **if + Gegenwart**, **will + Grundform**.
= If it rains, we'll stay at home. :: Wenn es regnet, bleiben wir zu Hause.
= If you need help, call me. :: Wenn du Hilfe brauchst, ruf mich an.

> Kein **will** im if-Teil! ~~If it will rain …~~ ✗

## 2. Konditional – hypothetisch
Was **unwahrscheinlich oder unwirklich** ist: **if + Vergangenheit**, **would + Grundform**.
= If I had more time, I'd learn Spanish. :: Wenn ich mehr Zeit hätte, würde ich Spanisch lernen.
= What would you do if you won the lottery? :: Was würdest du tun, wenn du im Lotto gewinnen würdest?

## If I were you
Bei **be** nimmt man im 2. Konditional gern **were** – für alle Personen:
= If I were you, I'd take the job. :: An deiner Stelle würde ich den Job nehmen.

| | if-Teil | Hauptsatz |
| 1. realistisch | if it rains | we'll stay |
| 2. hypothetisch | if I had | I would buy |

## Andere Wörter
**unless** (es sei denn) · **in case** (falls, für den Fall) · **as long as** (solange)
= Take an umbrella in case it rains. :: Nimm einen Schirm mit, falls es regnet.
`, quiz: [
  ["**If it ___ tomorrow, we'll go to the beach.**", ["is sunny", "will be sunny", "would be sunny"], 0, "1. Konditional: kein will im if-Teil."],
  ["„Wenn ich reich wäre, würde ich reisen.“", ["If I were rich, I'd travel.", "If I am rich, I'd travel.", "If I would be rich, I travel."], 0, "2. Konditional: if + were/Vergangenheit, would."],
  ["„An deiner Stelle …“", ["If I were you, …", "In your place, …", "If I am you, …"], 0, "Die feste Wendung: If I were you."],
]},

g58: { title: "Diplomatisch verhandeln", body: `
Gute Verhandler formulieren **weich** – das macht Kompromisse leichter.

## Weicher mit would & could
| direkt | diplomatisch |
| We want a discount. | Would you be able to offer a discount? |
| That's too expensive. | That's a little more than we expected. |
| No. | I'm afraid that would be difficult for us. |
| You must deliver by May. | We'd need delivery by May. |

## Bedingungen
= If you order 500 units, we could offer 5% off. :: Wenn Sie 500 Stück bestellen, könnten wir 5 % Rabatt anbieten.
= We'd be happy to do that, provided that you pay in advance. :: Das machen wir gern, vorausgesetzt, Sie zahlen im Voraus.

## Vorschläge & Kompromisse
| | |
| How about meeting halfway? | Wie wäre es, wenn wir uns in der Mitte treffen? |
| What if we … ? | Was wäre, wenn wir …? |
| Would you consider … ? | Würden Sie … in Betracht ziehen? |
| Let me check and get back to you. | Ich prüfe das und melde mich. |

## Abschließen
= I think we have a deal. :: Ich glaube, wir sind uns einig.
= Let's put that in writing. :: Lassen Sie uns das schriftlich festhalten.

> **a little**, **slightly**, **perhaps** und **I'm afraid** machen jede Aussage freundlicher.
`, quiz: [
  ["Welche Formulierung ist am diplomatischsten?", ["Would you be able to lower the price?", "Lower the price.", "Your price is bad."], 0, "Would you be able to … ist weich und höflich."],
  ["„Vorausgesetzt, dass …“", ["provided that", "providing for", "under condition"], 0, "provided that = vorausgesetzt, dass."],
  ["Wie lehnst du freundlich ab?", ["I'm afraid that would be difficult for us.", "No way.", "That's impossible, sorry not sorry."], 0, "I'm afraid … would be difficult = höfliches Nein."],
]},

g59: { title: "Beschweren & Beschwerden beantworten", body: `
## Freundlich, aber bestimmt
| | |
| I'm afraid there's a problem with … | Leider gibt es ein Problem mit … |
| I'd like to make a complaint. | Ich möchte mich beschweren. |
| I ordered …, but I received … | Ich habe … bestellt, aber … bekommen. |
| It doesn't work properly. | Es funktioniert nicht richtig. |
| I'd like a refund / a replacement. | Ich hätte gern mein Geld zurück / Ersatz. |
| This isn't good enough. | Das reicht so nicht. |

= I'm afraid the heating in my room isn't working. :: Leider funktioniert die Heizung in meinem Zimmer nicht.

## Als Firma reagieren
| | |
| I'm sorry to hear that. | Das tut mir leid. |
| I do apologise for the inconvenience. | Entschuldigen Sie bitte die Unannehmlichkeiten. |
| Let me look into it. | Ich sehe mir das an. |
| We'll sort it out right away. | Wir kümmern uns sofort darum. |
| As a gesture of goodwill, … | Als Zeichen des guten Willens … |

> **I do apologise** – das betonte **do** macht die Entschuldigung noch stärker.

## refund, replace, exchange
- **refund** = Geld zurück
- **replace** = durch ein neues ersetzen
- **exchange** = umtauschen (gegen etwas anderes)
`, quiz: [
  ["Du möchtest dein Geld zurück:", ["I'd like a refund, please.", "I want my money back now!", "Give me back money."], 0, "I'd like a refund ist höflich und klar."],
  ["Höfliche Reaktion auf eine Beschwerde:", ["I'm sorry to hear that. Let me look into it.", "That's not my problem.", "OK."], 0, "Verständnis zeigen + sich kümmern."],
  ["Du willst ein defektes Gerät gegen ein neues tauschen:", ["Could you replace it, please?", "Could you refund it?", "Could you repair me?"], 0, "replace = ersetzen."],
]},

g60: { title: "Zukunft für Fortgeschrittene", body: `
## Future Continuous: will be + -ing
Was zu einem Zeitpunkt in der Zukunft **gerade im Gange** ist:
= This time tomorrow I'll be flying to Boston. :: Morgen um diese Zeit fliege ich nach Boston.
= Will you be using the car tonight? :: Brauchst du heute Abend das Auto? (sehr höfliche Frage)

## Future Perfect: will have + 3. Form
Was bis zu einem Zeitpunkt **abgeschlossen** sein wird:
= I'll have finished the report by Friday. :: Bis Freitag habe ich den Bericht fertig.
= By 2030, we'll have opened ten new offices. :: Bis 2030 werden wir zehn neue Büros eröffnet haben.

## by oder until?
| | Bedeutung | Beispiel |
| by | spätestens bis | Send it **by** Friday. |
| until | durchgehend bis | I'm in the office **until** five. |

## Zeitplan & Termine
= The train leaves at 7.15. :: Der Zug fährt um 7:15. (Fahrplan → Present Simple)
= The meeting is due to start at nine. :: Das Meeting soll um neun beginnen.

> Projektsprache: **on track** (im Plan), **behind schedule** (im Verzug), **ahead of schedule** (schneller als geplant).
`, quiz: [
  ["„Bis Montag bin ich fertig.“", ["I'll have finished by Monday.", "I'll finish until Monday.", "I finish since Monday."], 0, "Abgeschlossen bis zu einem Zeitpunkt → will have + 3. Form, mit by."],
  ["**Please send me the file ___ Thursday.** (spätestens)", ["by", "until", "since"], 0, "by = spätestens bis."],
  ["„Morgen um diese Zeit liege ich am Strand.“", ["This time tomorrow I'll be lying on the beach.", "This time tomorrow I lie on the beach.", "This time tomorrow I'll have lain on the beach."], 0, "Zu dem Zeitpunkt im Gange → will be + -ing."],
]},

g61: { title: "Britische Umgangssprache", body: `
Wer in Großbritannien lebt, hört viel Slang. Du musst ihn nicht selbst benutzen – aber verstehen hilft enorm.

| Slang | Bedeutung |
| mate | Kumpel (auch zu Fremden) |
| cheers | danke / tschüss / prost |
| brilliant / lovely | super / schön |
| knackered | total erledigt |
| gutted | schwer enttäuscht |
| skint | pleite |
| quid | Pfund (Geld) |
| fancy | Lust haben auf |
| loo | Klo |
| sorted | erledigt |
| chuffed | sehr froh |

= Are you alright? :: Alles klar? (= Hallo, wie geht's?)

> **Are you alright?** ist in England oft nur eine Begrüßung – wie „How are you?“. Antwort: **Yeah, good, thanks. You?**

## Gesprochene Formen
Im Gespräch und in Chats hört man oft:
| gesprochen | eigentlich |
| gonna | going to |
| wanna | want to |
| gotta | got to (= have to) |
| dunno | don't know |
| innit | isn't it |

> In E-Mails und Prüfungen solltest du diese Formen nicht schreiben.
`, quiz: [
  ["„I'm absolutely knackered.“ bedeutet …", ["Ich bin total erledigt.", "Ich bin total begeistert.", "Ich bin pleite."], 0, "knackered = völlig müde/erledigt."],
  ["Ein Kollege sagt morgens „Alright?“. Was antwortest du?", ["Yeah, good thanks. You?", "No, I'm not right.", "What is right?"], 0, "Alright? ist eine Begrüßung – kurz zurückgrüßen."],
  ["„It costs twenty quid.“", ["Es kostet 20 Pfund.", "Es kostet 20 Cent.", "Es kostet 20 Dollar."], 0, "quid = Pfund (ohne Mehrzahl-s)."],
]},

g62: { title: "Britisch vs. Amerikanisch", body: `
In diesem Kurs lernst du britisches Englisch. Amerikanisch wird aber überall verstanden – die US-Variante steht auf den Karten unter „US“.

## Wörter
| britisch | amerikanisch | Deutsch |
| flat | apartment | Wohnung |
| holiday | vacation | Urlaub |
| lift | elevator | Aufzug |
| queue | line | Schlange |
| chips / crisps | fries / chips | Pommes / Chips |
| the underground / tube | the subway | U-Bahn |
| petrol | gas | Benzin |
| autumn | fall | Herbst |
| bill | check | Rechnung (Restaurant) |
| ground floor | first floor | Erdgeschoss |

## Rechtschreibung
| britisch | amerikanisch |
| colour, favourite | color, favorite |
| centre, theatre | center, theater |
| organise, apologise | organize, apologize |
| travelled, cancelled | traveled, canceled |

## Grammatik
| britisch | amerikanisch |
| Have you got a car? | Do you have a car? |
| Have you eaten yet? | Did you eat yet? |
| at the weekend | on the weekend |
| in hospital | in the hospital |

## Datum
Britisch: 4/7 = **4. Juli**. Amerikanisch: 4/7 = **7. April**! Bei Terminen lieber ausschreiben: **4 July**.
`, quiz: [
  ["Amerikanisch für **flat**", ["apartment", "floor", "house"], 0, "flat (UK) = apartment (US)."],
  ["Was bedeutet **03/04** in einer amerikanischen E-Mail?", ["4. März", "3. April", "4. März oder 3. April – je nach Laune"], 0, "In den USA steht der Monat zuerst: 03/04 = March 4th."],
  ["Britische Schreibweise", ["colour", "color", "collor"], 0, "Britisch -our: colour, favourite, neighbour."],
]},

g63: { title: "Redewendungen (Idioms)", body: `
**Idioms** sind feste Bilder, deren Bedeutung man nicht wörtlich verstehen kann. Manche sind dem Deutschen erstaunlich ähnlich – andere gar nicht.

## Fast wie im Deutschen
| Englisch | Deutsch |
| hit the nail on the head | den Nagel auf den Kopf treffen |
| in the same boat | im selben Boot |
| let the cat out of the bag | die Katze aus dem Sack lassen |
| a storm in a teacup | Sturm im Wasserglas |
| break the ice | das Eis brechen |

## Ganz anders
| Englisch | Deutsch |
| a piece of cake | ein Kinderspiel |
| under the weather | angeschlagen |
| once in a blue moon | alle Jubeljahre |
| cost an arm and a leg | ein Vermögen kosten |
| keep your fingers crossed | Daumen drücken |
| pull someone's leg | jemanden auf den Arm nehmen |
| it's raining cats and dogs | es schüttet |

= The exam was a piece of cake. :: Die Prüfung war ein Kinderspiel.
= I'll keep my fingers crossed! :: Ich drück dir die Daumen!

> Idioms wirken toll, wenn sie passen – aber übertreib es nicht. Ein oder zwei pro Gespräch reichen völlig.
`, quiz: [
  ["„Ich drück dir die Daumen.“", ["I'll keep my fingers crossed.", "I'll press my thumbs for you.", "I'll cross my thumbs."], 0, "Englisch kreuzt die Finger statt die Daumen zu drücken."],
  ["„It cost an arm and a leg“ bedeutet …", ["Es war sehr teuer.", "Es war gefährlich.", "Es hat wehgetan."], 0, "cost an arm and a leg = ein Vermögen kosten."],
  ["„I'm a bit under the weather.“", ["Ich bin etwas angeschlagen.", "Ich bin draußen im Regen.", "Ich bin schlecht gelaunt wegen des Wetters."], 0, "under the weather = nicht ganz fit."],
]},

g64: { title: "Question Tags: …, oder?", body: `
**Question Tags** sind kleine Anhängsel wie „oder?“ oder „nicht wahr?“. Im Englischen richten sie sich nach dem Verb des Satzes – und sind im Small Talk überall.

## Die Regel
**positiver Satz → negativer Tag**, **negativer Satz → positiver Tag**
| Satz | Tag |
| It's cold, | isn't it? |
| You live here, | don't you? |
| She can swim, | can't she? |
| You went to Rome, | didn't you? |
| You've been here before, | haven't you? |
| You're not from here, | are you? |
| He doesn't eat meat, | does he? |

= Lovely day, isn't it? :: Schöner Tag, oder?

## Die Melodie
- Stimme **geht runter** ↘: Du erwartest Zustimmung. (It's cold, isn't it? ↘)
- Stimme **geht hoch** ↗: Es ist eine echte Frage. (You're coming, aren't you? ↗)

## Besonderheiten
- **I am** → **aren't I?**: I'm late, aren't I?
- Befehl → **will you?**: Close the door, will you?
- **Let's** → **shall we?**: Let's go, shall we?
`, quiz: [
  ["**You're German, ___?**", ["aren't you", "isn't it", "are you"], 0, "positiver Satz mit are → negativer Tag aren't you."],
  ["**She doesn't like fish, ___?**", ["does she", "doesn't she", "is she"], 0, "negativer Satz → positiver Tag: does she?"],
  ["**Let's start, ___?**", ["shall we", "will we", "don't we"], 0, "Let's … → shall we?"],
]},

g65: { title: "Einladen, zusagen, absagen", body: `
## Einladen
| | |
| Would you like to come for dinner? | Hast du Lust, zum Essen zu kommen? |
| Are you free on Saturday? | Hast du am Samstag Zeit? |
| How about a drink after work? | Wie wär's mit einem Drink nach der Arbeit? |
| Why don't you join us? | Komm doch mit! |
| Fancy a coffee? | Lust auf einen Kaffee? (britisch, locker) |

## Zusagen
= I'd love to! :: Sehr gerne!
= Sounds great – what time? :: Klingt super – um wie viel Uhr?
= Count me in! :: Ich bin dabei!

## Absagen – immer mit Grund und Dank
Ein nacktes „No“ wirkt sehr unhöflich. Besser:
= I'd love to, but I've got something on. :: Sehr gern, aber ich habe schon was vor.
= Thanks for asking, but I can't make it this time. :: Danke für die Einladung, aber diesmal schaffe ich es nicht.
= Can I take a rain check? :: Können wir das verschieben?

## Als Gast
- Bring eine Kleinigkeit mit: **Shall I bring anything?**
- Beim Gehen: **Thanks for having me!**
- Wer zahlt? **It's on me.** (Ich lade ein) – **Let's split the bill.** (Wir teilen)
`, quiz: [
  ["Du sagst begeistert zu:", ["I'd love to!", "I would like it maybe.", "Yes, I come."], 0, "I'd love to! ist die typische herzliche Zusage."],
  ["Höfliche Absage:", ["I'd love to, but I've got something on.", "No, I don't want.", "Not possible."], 0, "Dank/Interesse + Grund = höfliche Absage."],
  ["„Ich lade dich ein (zahle).“", ["It's on me.", "I invite you.", "You are invited from me."], 0, "Beim Bezahlen: It's on me / my treat."],
]},

g67: { title: "Wünschen, trösten, gratulieren", body: `
## Gratulieren
**Congratulations on** + Nomen oder -ing:
= Congratulations on your new job! :: Glückwunsch zum neuen Job!
= Congratulations on passing your exam! :: Glückwunsch zur bestandenen Prüfung!

## Glück wünschen
**Good luck with** + Nomen:
= Good luck with the interview! :: Viel Glück beim Vorstellungsgespräch!
= All the best for the future! :: Alles Gute für die Zukunft!

## Trösten
| | |
| I'm so sorry to hear that. | Das tut mir so leid. |
| That must be really hard. | Das muss echt schwer sein. |
| Is there anything I can do? | Kann ich irgendetwas tun? |
| It's not your fault. | Es ist nicht deine Schuld. |
| I'm sure it'll be fine. | Das wird bestimmt gut. |

## Beileid
= I'm so sorry for your loss. :: Mein herzliches Beileid.
> Englisch sagt bei Todesfällen gern **pass away** statt **die** – das klingt sanfter.

## hope oder wish?
| | |
| I hope you get the job. | Ich hoffe, du bekommst den Job. (möglich) |
| I wish I had more time. | Ich wünschte, ich hätte mehr Zeit. (leider nicht so) |
| I wish you a happy birthday. | Ich wünsche dir alles Gute zum Geburtstag. |

> Nach **I wish** (Wunsch, der nicht wahr ist) steht die **Vergangenheit**: I wish I **were** there.
`, quiz: [
  ["**Congratulations ___ your wedding!**", ["on", "for", "to"], 0, "congratulations on."],
  ["„Ich hoffe, es geht dir bald besser.“", ["I hope you feel better soon.", "I wish you feel better soon.", "I hope you would feel better."], 0, "Möglicher Wunsch → hope."],
  ["„Ich wünschte, du wärst hier.“", ["I wish you were here.", "I hope you were here.", "I wish you are here."], 0, "Unerfüllter Wunsch: wish + Vergangenheit."],
]},

g68: { title: "Indirekte Rede", body: `
Wenn du erzählst, was jemand **gesagt hat**, rückt die Zeitform meist **einen Schritt in die Vergangenheit**.

| direkt | indirekt |
| „I'm tired.“ | She said (that) she **was** tired. |
| „I work in Leeds.“ | He said he **worked** in Leeds. |
| „I'll call you.“ | He said he **would** call me. |
| „I can help.“ | She said she **could** help. |
| „I've finished.“ | He said he **had** finished. |
| „I lost my keys.“ | She said she **had lost** her keys. |

> Deutsch nimmt hier den Konjunktiv (sie sei müde). Englisch verschiebt einfach die Zeit.

## say oder tell?
| | |
| say (something) | She **said** she was tired. |
| tell **someone** | She **told me** she was tired. |
> Nach **tell** steht immer eine Person. Nicht: ~~She said me …~~

## Fragen wiedergeben
Normale Wortstellung, mit **if** oder Fragewort:
= She asked if we were coming. :: Sie fragte, ob wir kommen.
= He asked where I lived. :: Er fragte, wo ich wohne.

## Zeit- und Ortsangaben
today → that day · tomorrow → the next day · yesterday → the day before · here → there
`, quiz: [
  ["„I'm hungry“, he said. → He said he ___ hungry.", ["was", "is", "be"], 0, "Eine Zeitform zurück: am → was."],
  ["**She ___ me she was leaving.**", ["told", "said", "says"], 0, "Mit Person: tell someone."],
  ["„Where do you live?“ → He asked me …", ["where I lived.", "where did I live.", "where do I live."], 0, "Indirekte Frage: normale Wortstellung, Zeit zurück."],
]},

g70: { title: "Meinung sagen & argumentieren", body: `
## Meinung einleiten
| | |
| In my opinion, … | Meiner Meinung nach … |
| I think / I believe … | Ich denke / glaube … |
| As far as I'm concerned, … | Was mich betrifft … |
| From my point of view, … | Aus meiner Sicht … |
| To be honest, … | Ehrlich gesagt … |

> Nicht: ~~In my opinion, I think …~~ – doppelt gemoppelt.

## Argumente ordnen
| | |
| First of all, … | Zunächst einmal … |
| On the one hand … on the other hand … | Einerseits … andererseits … |
| Furthermore / What's more, … | Außerdem … |
| However, … | Allerdings … |
| All in all, … | Alles in allem … |

= On the one hand, it's cheap. On the other hand, it's very slow. :: Einerseits ist es günstig. Andererseits ist es sehr langsam.

## Zustimmen
**I completely agree.** · **That's exactly what I think.** · **I couldn't agree more.** · **Good point.**

## Nach der Meinung fragen
= What's your view on this? :: Wie siehst du das?
= What do you think about remote work? :: Was hältst du von Homeoffice?

> „Ich bin einverstanden“ = **I agree** (ohne am!). ~~I am agree~~ ist ein sehr häufiger Fehler.
`, quiz: [
  ["„Ich stimme dir zu.“", ["I agree with you.", "I am agree with you.", "I agree to you."], 0, "agree ist ein Verb – kein am davor."],
  ["„Einerseits …, andererseits …“", ["On the one hand …, on the other hand …", "On one side …, on other side …", "At the one hand …, at the other hand …"], 0, "Feste Wendung mit on the … hand."],
  ["„I couldn't agree more“ bedeutet …", ["Ich stimme voll und ganz zu.", "Ich stimme gar nicht zu.", "Ich kann nicht mehr."], 0, "Wörtlich: Ich könnte nicht mehr zustimmen – also: volle Zustimmung."],
]},

g71: { title: "Höflich widersprechen", body: `
Direkter Widerspruch („Das ist falsch“) wirkt im Englischen – besonders im Britischen – schnell aggressiv. Besser: **erst anerkennen, dann widersprechen**.

## Das Muster: Ja, aber …
| | |
| I see your point, but … | Ich verstehe deinen Punkt, aber … |
| That's true, but … | Das stimmt, aber … |
| You may be right, but … | Du hast vielleicht recht, aber … |
| I take your point, however … | Ich verstehe Ihren Einwand, allerdings … |

## Abschwächen
| hart | weich |
| That's wrong. | I'm not sure that's quite right. |
| I disagree. | I'm afraid I see it a bit differently. |
| Bad idea. | I'm not convinced that's the best option. |
| No. | Not necessarily. |

= I see what you mean, but have you considered the costs? :: Ich verstehe, was du meinst, aber hast du an die Kosten gedacht?

## Zwischen den Zeilen
Briten widersprechen oft so höflich, dass man es kaum merkt:
| Sie sagen | Sie meinen |
| That's an interesting idea. | Das finde ich nicht gut. |
| I hear what you're saying. | Ich sehe das anders. |
| With respect, … | Du liegst falsch. |
| Perhaps we could consider … | Lass uns etwas anderes machen. |

> Zum Abschluss eines Streits: **Let's agree to disagree.** – Lassen wir es dabei, dass wir verschiedener Meinung sind.
`, quiz: [
  ["Welche Formulierung ist am höflichsten?", ["I'm not sure that's quite right.", "That's wrong.", "No, you're mistaken."], 0, "Abschwächen mit I'm not sure … quite …"],
  ["Ein britischer Kollege sagt: „That's an interesting idea.“ Was meint er vermutlich?", ["Er ist nicht überzeugt.", "Er ist begeistert.", "Er hat nicht zugehört."], 0, "Britisch oft eine höfliche Form von Skepsis."],
  ["„Nicht unbedingt.“", ["Not necessarily.", "Not absolutely.", "Not urgently."], 0, "necessarily = unbedingt, notwendigerweise."],
]},

g73: { title: "Ursache & Folge", body: `
## Grund nennen
| Wort | danach | Beispiel |
| because | Satz | We stayed in **because** it was raining. |
| because of | Nomen | We stayed in **because of** the rain. |
| due to | Nomen (formell) | The train was cancelled **due to** a strike. |
| thanks to | Nomen (positiv) | **Thanks to** you, it worked. |
| as / since | Satz (am Anfang) | **As** it was late, we took a taxi. |

> **because** + Satz, **because of** + Nomen. Nicht: ~~because the rain~~.

## Folge nennen
| Wort | Ton |
| so | Alltag: It was late, **so** we left. |
| that's why | Alltag: **That's why** I'm late. |
| therefore | formell: The price rose; **therefore**, sales fell. |
| as a result | neutral: **As a result**, we lost the client. |
| consequently | formell |

## Verben
| | |
| cause | verursachen |
| lead to | führen zu |
| result in | zur Folge haben |
| affect | sich auswirken auf |

= The delay led to a lot of problems. :: Die Verzögerung führte zu vielen Problemen.

## affect oder effect?
**affect** ist das Verb (beeinflussen), **effect** das Nomen (Wirkung): The weather **affects** my mood. – It has a big **effect**.
`, quiz: [
  ["**The flight was delayed ___ fog.**", ["because of", "because", "so"], 0, "Vor einem Nomen: because of / due to."],
  ["„Deshalb bin ich zu spät.“", ["That's why I'm late.", "That's because I'm late.", "Therefore I late."], 0, "that's why = deshalb."],
  ["**Stress can ___ your health.**", ["affect", "effect", "effected"], 0, "Verb = affect, Nomen = effect."],
]},

g74: { title: "Hätte, wäre: 3. Konditional", body: `
Mit dem **3. Konditional** sprichst du über die **Vergangenheit, die anders hätte laufen können** – über Bedauern, Erleichterung und „Was wäre gewesen, wenn …“.

## Bildung
**if + had + 3. Form**, **would have + 3. Form**
= If I had left earlier, I wouldn't have missed the train. :: Wäre ich früher losgegangen, hätte ich den Zug nicht verpasst.
= If you had told me, I would have helped. :: Wenn du es mir gesagt hättest, hätte ich geholfen.

> Gesprochen verschmilzt viel: **If I'd known, I'd have come.** – „I'd“ ist hier einmal **had** und einmal **would**.

## should have, could have, might have
| | |
| I should have called. | Ich hätte anrufen sollen. |
| You could have asked! | Du hättest fragen können! |
| It might have been worse. | Es hätte schlimmer sein können. |
| I shouldn't have said that. | Das hätte ich nicht sagen sollen. |

## Bedauern ausdrücken
= I wish I had studied harder. :: Ich wünschte, ich hätte mehr gelernt.
= If only I'd known! :: Hätte ich das doch nur gewusst!

| | if-Teil | Hauptsatz |
| 1. real | if it rains | we'll stay |
| 2. hypothetisch | if I had | I'd buy |
| 3. Vergangenheit | if I had known | I'd have come |
`, quiz: [
  ["„Hätte ich es gewusst, wäre ich gekommen.“", ["If I had known, I would have come.", "If I would have known, I had come.", "If I knew, I came."], 0, "3. Konditional: if + had + 3. Form, would have + 3. Form."],
  ["„Ich hätte anrufen sollen.“", ["I should have called.", "I should called.", "I had should call."], 0, "should have + 3. Form."],
  ["„Ich wünschte, ich hätte mehr gespart.“", ["I wish I had saved more.", "I wish I saved more.", "I hope I had saved more."], 0, "Bedauern über die Vergangenheit: wish + had + 3. Form."],
]},

g77: { title: "Unterwegs in Großbritannien", body: `
## Autofahren
- In Großbritannien fährt man **links** – und überholt rechts.
- Geschwindigkeiten in **mph** (Meilen pro Stunde): 30 mph in Orten (ca. 50 km/h), 70 mph auf der Autobahn (ca. 113 km/h).
- Im **roundabout** (Kreisverkehr) fährt man im Uhrzeigersinn – Vorfahrt hat, wer von **rechts** kommt.
- **Give way** = Vorfahrt gewähren.

= Take the second exit at the roundabout. :: Nimm am Kreisverkehr die zweite Ausfahrt.

## Mit der Bahn
| | |
| Which platform does the train to York leave from? | Von welchem Gleis fährt der Zug nach York? |
| Do I need to change? | Muss ich umsteigen? |
| Is this seat taken? | Ist der Platz besetzt? |
| a return / a single | Hin und zurück / einfach |
| off-peak | außerhalb der Stoßzeiten (günstiger!) |

> Bahntickets in Großbritannien sind teuer – früh buchen und **off-peak** fahren spart viel. Mit einer **railcard** gibt es ein Drittel Rabatt.

## Durchsagen verstehen
= We apologise for the delay to this service. :: Wir entschuldigen uns für die Verspätung dieses Zuges.
= This train terminates here. :: Dieser Zug endet hier.
= Mind the gap. :: Vorsicht an der Bahnsteigkante.
`, quiz: [
  ["Wer hat im britischen Kreisverkehr Vorfahrt?", ["der Verkehr von rechts", "der Verkehr von links", "wer schneller ist"], 0, "In Großbritannien: Vorfahrt von rechts – im Kreisverkehr fährt man im Uhrzeigersinn."],
  ["„Muss ich umsteigen?“", ["Do I need to change?", "Must I switch the train?", "Do I need to get over?"], 0, "change (trains) = umsteigen."],
  ["Was bedeutet **This train terminates here**?", ["Der Zug endet hier.", "Der Zug fällt aus.", "Der Zug hat Verspätung."], 0, "terminate = enden (an der Endstation)."],
]},

g78: { title: "Phrasal Verbs mit drei Teilen", body: `
Manche Phrasal Verbs haben **zwei** kleine Wörter. Sie sind **untrennbar** – das Objekt kommt immer ans Ende.

| | |
| look forward to | sich freuen auf |
| put up with | ertragen |
| come up with | sich ausdenken |
| get on with | sich verstehen mit |
| run out of | ausgehen (Vorrat) |
| catch up with | aufholen, einholen |
| get away with | ungestraft davonkommen |
| cut down on | einschränken |

= I can't put up with this noise. :: Ich halte diesen Lärm nicht aus.
= She came up with a brilliant idea. :: Sie hatte eine geniale Idee.

## Ein Verb – viele Bedeutungen
Phrasal Verbs sind oft mehrdeutig. Der Zusammenhang entscheidet:
| | |
| The plane **took off**. | Das Flugzeug startete. |
| He **took off** his coat. | Er zog den Mantel aus. |
| Her business **took off**. | Ihr Geschäft lief richtig an. |

## Formell oder locker?
Phrasal Verbs klingen eher **locker**. In formellen Texten nimmt man oft ein lateinisches Wort:
| locker | formell |
| put off | postpone |
| find out | discover |
| set up | establish |
| call off | cancel |
`, quiz: [
  ["„Uns ist das Benzin ausgegangen.“", ["We've run out of petrol.", "We've run off petrol.", "We've run out petrol."], 0, "run out of + Nomen."],
  ["„Wir müssen eine Lösung finden.“", ["We need to come up with a solution.", "We need to come with up a solution.", "We need to come up a solution."], 0, "Dreiteilige Phrasal Verbs sind untrennbar."],
  ["Formelles Wort für **call off**", ["cancel", "phone", "shout"], 0, "call off = absagen = cancel."],
]},

g79: { title: "Wortbildung: Vor- & Nachsilben", body: `
Mit ein paar Bausteinen verstehst du viele neue Wörter, ohne sie gelernt zu haben.

## Vorsilben: Gegenteil
| Vorsilbe | Beispiel |
| un- | happy → **un**happy, usual → **un**usual |
| in- | correct → **in**correct |
| im- (vor p, m) | possible → **im**possible, patient → **im**patient |
| il- (vor l) | legal → **il**legal |
| ir- (vor r) | regular → **ir**regular |
| dis- | like → **dis**like, agree → **dis**agree |

## Andere Vorsilben
**re-** (wieder): rewrite · **over-** (zu viel): oversleep · **under-** (zu wenig): underpaid · **pre-** (vor): prepaid · **mis-** (falsch): misunderstand

## Nachsilben
| Nachsilbe | macht aus … | Beispiel |
| -ness | Adjektiv → Nomen | kind → kind**ness** |
| -ment | Verb → Nomen | improve → improve**ment** |
| -tion / -sion | Verb → Nomen | decide → deci**sion** |
| -er / -or | Verb → Person | teach → teach**er** |
| -ee | Person, mit der etwas geschieht | employ → employ**ee** |
| -ful | voll von | help → help**ful** |
| -less | ohne | use → use**less** |
| -able | kann man | wash → wash**able** |
| -ly | Adjektiv → Adverb | quick → quick**ly** |

= Your English has improved a lot – it's a big improvement! :: Dein Englisch ist viel besser geworden – das ist eine große Verbesserung!
`, quiz: [
  ["Gegenteil von **possible**", ["impossible", "unpossible", "dispossible"], 0, "Vor p: im-."],
  ["Was ist ein **employee**?", ["ein Angestellter", "ein Arbeitgeber", "ein Arbeitsloser"], 0, "-ee = mit dem etwas geschieht (wird beschäftigt). -er = employer, Arbeitgeber."],
  ["„nutzlos“", ["useless", "useful", "unuse"], 0, "-less = ohne. -ful = voll von (useful = nützlich)."],
]},

g80: { title: "Vermutungen: must, might, can't", body: `
Mit Modalverben zeigst du, **wie sicher** du dir bist.

## Gegenwart
| Sicherheit | Wort | Beispiel |
| fast sicher ja | must | She **must** be tired. (Sie muss müde sein.) |
| möglich | might / may / could | He **might** be at home. |
| fast sicher nein | can't | That **can't** be true! |

= You must be joking! :: Das ist nicht dein Ernst!

> Achtung: Für „sicher nicht“ nimmt man **can't** – nicht mustn't!

## Vergangenheit: + have + 3. Form
| | |
| He must have forgotten. | Er muss es vergessen haben. |
| She might have missed the bus. | Vielleicht hat sie den Bus verpasst. |
| They can't have left yet. | Sie können noch nicht gegangen sein. |

## Andere Wörter für Vermutungen
| | |
| probably | wahrscheinlich |
| apparently | anscheinend (habe ich gehört) |
| it looks like | es sieht so aus, als ob |
| I bet | ich wette |
| I doubt it | das bezweifle ich |
| it's likely / unlikely | es ist wahrscheinlich / unwahrscheinlich |

= It's likely to rain this afternoon. :: Heute Nachmittag wird es wahrscheinlich regnen.
`, quiz: [
  ["Er antwortet nicht – du vermutest: „Er muss schlafen.“", ["He must be asleep.", "He has to be asleep.", "He must sleeping."], 0, "Sichere Vermutung → must be."],
  ["„Das kann nicht stimmen!“", ["That can't be true!", "That mustn't be true!", "That doesn't can be true!"], 0, "Sicher nicht → can't."],
  ["„Vielleicht hat sie es vergessen.“", ["She might have forgotten.", "She might forgot.", "She might has forgotten."], 0, "Vermutung über Vergangenheit: might have + 3. Form."],
]},

g81: { title: "Gewöhnt sein: be used to & get used to", body: `
Drei sehr ähnliche Formen – mit ganz unterschiedlicher Bedeutung:

| Form | Bedeutung | Beispiel |
| used to + Grundform | früher | I **used to live** in Berlin. |
| be used to + -ing / Nomen | gewöhnt sein | I'**m used to driving** on the left. |
| get used to + -ing / Nomen | sich gewöhnen | I'**m getting used to** the weather. |

= I'm not used to eating dinner so early. :: Ich bin es nicht gewohnt, so früh zu Abend zu essen.
= It took me a while to get used to the accent. :: Ich habe eine Weile gebraucht, um mich an den Akzent zu gewöhnen.

> Bei **be/get used to** ist „to“ eine Präposition – deshalb folgt **-ing**, nicht die Grundform.

## Leben im Ausland
| | |
| It takes some getting used to. | Das ist gewöhnungsbedürftig. |
| I've settled in well. | Ich habe mich gut eingelebt. |
| Back home, we … | Bei uns zu Hause … |
| I still miss … | Ich vermisse immer noch … |
| I had a bit of a culture shock. | Ich hatte einen kleinen Kulturschock. |

> Ein gutes Gesprächsthema mit Einheimischen: Was ist **anders** als zu Hause? Briten lieben es, ihre Eigenheiten erklärt zu bekommen – mit Humor.
`, quiz: [
  ["„Ich bin es gewohnt, früh aufzustehen.“", ["I'm used to getting up early.", "I used to get up early.", "I'm used to get up early."], 0, "be used to + -ing = gewöhnt sein."],
  ["„Früher habe ich in Wien gewohnt.“", ["I used to live in Vienna.", "I'm used to living in Vienna.", "I got used to live in Vienna."], 0, "used to + Grundform = früher."],
  ["„Ich gewöhne mich langsam an das Essen.“", ["I'm slowly getting used to the food.", "I'm slowly used to the food.", "I slowly use to the food."], 0, "get used to = sich gewöhnen (Prozess)."],
]},

g82: { title: "Formelles Englisch", body: `
In offiziellen Briefen, Verträgen und Durchsagen klingt Englisch ganz anders als im Alltag. Oft ersetzt ein **lateinisches Wort** ein einfaches englisches.

| Alltag | formell |
| help | assist |
| need | require |
| get | obtain / receive |
| buy | purchase |
| start | commence |
| end | terminate |
| ask about | inquire about |
| enough | sufficient |
| before | prior to |
| about | regarding / concerning |

= How can I help? → How may I assist you? :: Wie kann ich Ihnen helfen?

## Typische Strukturen
| | |
| Should you have any questions, … | Sollten Sie Fragen haben, … |
| We regret to inform you that … | Wir bedauern, Ihnen mitteilen zu müssen, dass … |
| Passengers are requested to … | Fahrgäste werden gebeten, … |
| I would be grateful if you could … | Ich wäre Ihnen dankbar, wenn Sie … könnten. |

> **Should you …** am Satzanfang ist eine elegante Form von **If you …** – typisch für Briefe.

## Keine Kurzformen
In formellen Texten schreibt man **I am**, **do not**, **we will** – nicht I'm, don't, we'll.
`, quiz: [
  ["Formelles Wort für **buy**", ["purchase", "obtain", "require"], 0, "buy = purchase."],
  ["„Sollten Sie Fragen haben, …“", ["Should you have any questions, …", "If you should questions have, …", "Shall you have questions, …"], 0, "Should you … = If you … (formell)."],
  ["Was passt in einen formellen Brief?", ["We do not accept returns.", "We don't accept returns.", "We won't take returns, sorry."], 0, "Formell: keine Kurzformen."],
]},

g83: { title: "Pläne & Ziele", body: `
## Kurz bevor es passiert
= I'm about to leave. :: Ich bin gerade im Gehen.
= The film is about to start. :: Der Film fängt gleich an.

## Geplant & offiziell
= The train is due to arrive at 6.15. :: Der Zug soll um 6:15 ankommen.
= The new office is due to open in May. :: Das neue Büro soll im Mai eröffnen.

## Ziele formulieren
| | |
| My goal is to … | Mein Ziel ist, … |
| I'm aiming to … | Ich möchte … erreichen |
| I'm planning to … | Ich habe vor, … |
| I intend to … | Ich beabsichtige, … (formell) |
| By the end of the year, I'll have … | Bis Ende des Jahres werde ich … haben |

= My goal is to be fluent in English by next summer. :: Mein Ziel ist, bis nächsten Sommer fließend Englisch zu sprechen.

## Zukunftsformen im Überblick
| Form | wofür? |
| I'll … | spontan, Vermutung, Versprechen |
| I'm going to … | Absicht |
| I'm …ing | fester Termin |
| I'll be …ing | im Gange in der Zukunft |
| I'll have … | abgeschlossen bis |
| I'm about to … | gleich, im nächsten Moment |

> Im Vorstellungsgespräch beliebt: **Where do you see yourself in five years' time?**
`, quiz: [
  ["„Ich bin gerade im Gehen.“", ["I'm about to leave.", "I'm due to leave.", "I'll have left."], 0, "be about to = gleich, im nächsten Moment."],
  ["„Der Zug soll um 8 ankommen.“", ["The train is due to arrive at 8.", "The train is about arrive at 8.", "The train must arrive at 8 maybe."], 0, "be due to = planmäßig sollen."],
  ["„Bis Juni habe ich genug gespart.“", ["By June, I'll have saved enough.", "Until June, I save enough.", "By June, I'm saving enough."], 0, "Abgeschlossen bis → will have + 3. Form."],
]},

g84: { title: "Füllwörter & britische Untertreibung", body: `
Füllwörter machen dein Englisch natürlich – und britische Untertreibung zu verstehen, erspart dir viele Missverständnisse.

## Nützliche Füllwörter
| | |
| actually | eigentlich, tatsächlich (nicht „aktuell“!) |
| basically | im Grunde |
| though | allerdings (am Satzende) |
| anyway | jedenfalls, wie auch immer |
| I mean | ich meine |
| to be fair | fairerweise |
| mind you | wohlgemerkt (britisch) |

= It's expensive. It's really good, though. :: Es ist teuer. Aber es ist richtig gut.

## Falsche Freunde
| Englisch | heißt | nicht |
| eventually | schließlich | eventuell (= possibly) |
| actually | tatsächlich | aktuell (= current) |
| sensible | vernünftig | sensibel (= sensitive) |
| become | werden | bekommen (= get) |

## Britische Untertreibung
Briten sagen oft **weniger**, als sie meinen:
| Sie sagen | Sie meinen |
| It's a bit of a problem. | Das ist ein großes Problem. |
| Not bad at all. | Richtig gut! |
| I was a bit disappointed. | Ich war sehr enttäuscht. |
| That's quite good. | Das ist okay, mehr nicht. |
| It's not ideal. | Das ist eine Katastrophe. |

> Und **rather** und **pretty** heißen beide „ziemlich“: It's **pretty** cold. – It's **rather** cold.
`, quiz: [
  ["„Eventually we found the hotel.“", ["Schließlich haben wir das Hotel gefunden.", "Eventuell haben wir das Hotel gefunden.", "Zufällig haben wir das Hotel gefunden."], 0, "eventually = schließlich, am Ende."],
  ["Ein Brite sagt: „We have a bit of a problem.“", ["Es ist vermutlich ein ernstes Problem.", "Es ist kein echtes Problem.", "Es ist ein Witz."], 0, "Britische Untertreibung: a bit of a problem kann ziemlich ernst sein."],
  ["„Es ist teuer. Aber gut.“ – Wohin passt **though**?", ["It's expensive. Good, though.", "Though it's expensive good.", "It's though expensive. Good."], 0, "though im Sinne von „allerdings“ steht am Satzende."],
]},

});
