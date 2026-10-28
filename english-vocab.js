// Englischkurs (Deutsch → Englisch), Level 1 (A1–A2). Gleiches Format wie vocab.js:
//
// Wort-Zeile:  englisch | deutsch | amerikanische Variante | Beispiel (EN) | Beispiel (DE) | Hinweis
// Satz-Zeile:  > englisch | deutsch | Hinweis
//
// Britisches Englisch; die dritte Spalte nennt das amerikanische Wort, falls es anders ist
// (wird beim Eintippen ebenfalls als richtig gezählt). Mehrere richtige Antworten mit " / ".
// Die ID einer Karte ergibt sich aus Einheit + englischem Wort – beim Korrigieren den
// englischen Text daher möglichst nicht ändern, sonst gilt die Karte als neu.
window.COURSE_ENGLISH = [

{ key: "u01", title: "Begrüßung & Höflichkeit", icon: "👋", lesson: "g01", items: `
hello | hallo | | Hello, how are you? | Hallo, wie geht's? |
hi | hi, hallo (locker) | | Hi, Tom! | Hi, Tom! |
good morning | guten Morgen | | Good morning, everyone! | Guten Morgen, alle zusammen! | bis ca. 12 Uhr
good afternoon | guten Tag (nachmittags) | | Good afternoon, can I help you? | Guten Tag, kann ich Ihnen helfen? | ca. 12–18 Uhr
good evening | guten Abend | | Good evening, sir. | Guten Abend, mein Herr. | zur Begrüßung – nicht zum Abschied
good night | gute Nacht | | Good night, sleep well! | Gute Nacht, schlaf gut! | nur zum Abschied am Abend
how are you? | wie geht's? | | Hi Anna, how are you? | Hi Anna, wie geht's? |
fine | gut (Befinden) | | I'm fine, thanks. | Mir geht's gut, danke. |
thank you | danke | | Thank you very much! | Vielen Dank! |
thanks | danke (locker) | | Thanks a lot! | Danke vielmals! |
cheers | danke; prost (britisch, locker) | thanks | Cheers, mate! | Danke, Kumpel! | in Großbritannien sehr häufig als „danke“
you're welcome | gern geschehen | | Thanks! – You're welcome. | Danke! – Gern geschehen. |
no problem | kein Problem | | Sorry! – No problem. | Entschuldigung! – Kein Problem. |
please | bitte (wenn man um etwas bittet) | | A coffee, please. | Einen Kaffee, bitte. | „Bitte sehr“ beim Geben heißt „here you are“
here you are | bitte sehr (beim Geben) | | Here you are, your ticket. | Bitte sehr, Ihr Ticket. |
sorry | Entschuldigung, tut mir leid | | Sorry, I'm late. | Entschuldigung, ich bin zu spät. | Briten sagen es sehr oft
excuse me | Entschuldigung (um Aufmerksamkeit bitten) | | Excuse me, where is the station? | Entschuldigung, wo ist der Bahnhof? |
pardon? | wie bitte? | sorry? | Pardon? Can you repeat that? | Wie bitte? Können Sie das wiederholen? |
yes | ja | yeah | Yes, of course. | Ja, natürlich. |
no | nein | | No, thank you. | Nein, danke. |
goodbye | auf Wiedersehen | bye | Goodbye, see you soon! | Auf Wiedersehen, bis bald! |
bye | tschüss | | Bye, Tom! | Tschüss, Tom! |
see you later | bis später | | OK, see you later! | Okay, bis später! |
see you tomorrow | bis morgen | | See you tomorrow at nine. | Bis morgen um neun. |
welcome | willkommen | | Welcome to London! | Willkommen in London! |
nice to meet you | freut mich (beim Kennenlernen) | | Hi, I'm Anna. – Nice to meet you! | Hi, ich bin Anna. – Freut mich! |
> Good morning! How are you? | Guten Morgen! Wie geht's?
> I'm fine, thank you. And you? | Mir geht's gut, danke. Und dir?
> Thank you very much! | Vielen Dank!
> Welcome to Edinburgh! | Willkommen in Edinburgh!
> Excuse me, can you help me? | Entschuldigung, können Sie mir helfen?
`},

{ key: "u02", title: "Ich, du & „to be“", icon: "🙋", lesson: "g02", items: `
I | ich | | I am Anna. | Ich bin Anna. | immer großgeschrieben
you | du; Sie; ihr | | You are very kind. | Du bist sehr nett. / Sie sind sehr nett. | eine Form für alle Anreden
he | er | | He is my brother. | Er ist mein Bruder. |
she | sie (eine Frau) | | She is a teacher. | Sie ist Lehrerin. |
it | es (Sache, Tier) | | It is a nice day. | Es ist ein schöner Tag. |
we | wir | | We are from Germany. | Wir kommen aus Deutschland. |
they | sie (Mehrzahl) | | They are friends. | Sie sind Freunde. |
I am / I'm | ich bin | | I'm tired. | Ich bin müde. |
you are / you're | du bist; Sie sind | | You're right. | Du hast recht. | wörtlich: „du bist richtig“
he is / he's | er ist | | He's at work. | Er ist bei der Arbeit. |
she is / she's | sie ist | | She's very nice. | Sie ist sehr nett. |
it is / it's | es ist | | It's cold today. | Heute ist es kalt. |
we are / we're | wir sind | | We're ready. | Wir sind fertig. |
they are / they're | sie sind | | They're on holiday. | Sie sind im Urlaub. |
name | Name | | My name is Anna. | Mein Name ist Anna. |
my | mein, meine | | This is my friend Ben. | Das ist mein Freund Ben. |
your | dein, deine; Ihr | | What's your name? | Wie heißt du? |
Mr | Herr (Anrede) | Mr. | Good morning, Mr Smith. | Guten Morgen, Herr Smith. | US mit Punkt: Mr.
Mrs | Frau (verheiratet) | Mrs. | Mrs Brown is here. | Frau Brown ist hier. |
Ms | Frau (neutral) | Ms. | Ms Taylor, please. | Frau Taylor, bitte. | gesprochen „Mis“ – heute die übliche Anrede
friend | Freund, Freundin | | She is my friend. | Sie ist meine Freundin. | Partnerin = girlfriend
teacher | Lehrer, Lehrerin | | My teacher is from Leeds. | Meine Lehrerin kommt aus Leeds. |
student | Student, Schüler | | I'm a student. | Ich bin Student. | im Beruf immer mit „a“: I'm a student
here | hier | | I'm here! | Ich bin hier! |
there | dort, da | | Ben is over there. | Ben ist da drüben. |
> What's your name? | Wie heißt du?
> My name is Anna. | Ich heiße Anna.
> We're friends. | Wir sind Freunde.
> She's a teacher. | Sie ist Lehrerin. | Beim Beruf steht immer „a“ oder „an“.
> Are you ready? | Bist du fertig?
`},

{ key: "u03", title: "Herkunft & Länder", icon: "🌍", lesson: "g03", items: `
where | wo; wohin | | Where are you? | Wo bist du? |
from | aus, von | | I'm from Austria. | Ich komme aus Österreich. |
country | Land (Staat) | | What country are you from? | Aus welchem Land kommst du? |
city | Stadt (groß) | | London is a big city. | London ist eine große Stadt. |
town | Stadt (klein), Ort | | I live in a small town. | Ich wohne in einer kleinen Stadt. |
village | Dorf | | My grandma lives in a village. | Meine Oma lebt in einem Dorf. |
Germany | Deutschland | | I'm from Germany. | Ich komme aus Deutschland. |
German | deutsch; Deutsch; Deutsche(r) | | I speak German. | Ich spreche Deutsch. | Sprachen & Nationalitäten immer groß
Austria | Österreich | | Vienna is in Austria. | Wien liegt in Österreich. | nicht mit Australia verwechseln!
Switzerland | die Schweiz | | She lives in Switzerland. | Sie lebt in der Schweiz. |
Swiss | schweizerisch; Schweizer(in) | | He's Swiss. | Er ist Schweizer. |
England | England | | Manchester is in England. | Manchester liegt in England. |
Britain / the UK | Großbritannien | | We're going to Britain. | Wir fahren nach Großbritannien. | UK = England, Schottland, Wales, Nordirland
British | britisch; Brite, Britin | | My boss is British. | Mein Chef ist Brite. |
Scotland | Schottland | | Edinburgh is in Scotland. | Edinburgh liegt in Schottland. | Schotten sind „Scottish“, nicht „English“
Ireland | Irland | | Dublin is in Ireland. | Dublin liegt in Irland. |
the USA / the US | die USA | | My cousin lives in the US. | Mein Cousin lebt in den USA. |
American | amerikanisch; Amerikaner(in) | | She's American. | Sie ist Amerikanerin. |
English | englisch; Englisch | | Do you speak English? | Sprichst du Englisch? |
language | Sprache | | How many languages do you speak? | Wie viele Sprachen sprichst du? |
speak | sprechen | | I speak a little English. | Ich spreche ein bisschen Englisch. |
live | wohnen, leben | | I live in Berlin. | Ich wohne in Berlin. | Aussprache „liv“ (kurz)
come | kommen | | Where do you come from? | Woher kommst du? |
nationality | Staatsangehörigkeit, Nationalität | | What's your nationality? | Welche Staatsangehörigkeit haben Sie? |
abroad | im Ausland; ins Ausland | | I want to live abroad. | Ich möchte im Ausland leben. |
> Where are you from? | Woher kommst du?
> I'm from Germany, from Hamburg. | Ich komme aus Deutschland, aus Hamburg.
> Where do you live? | Wo wohnst du?
> I live in London now. | Ich wohne jetzt in London.
> Do you speak German? | Sprichst du Deutsch?
`},

{ key: "u04", title: "Ja, nein & nicht", icon: "🙅", lesson: "g04", items: `
not | nicht | | I'm not tired. | Ich bin nicht müde. |
isn't | ist nicht | | It isn't far. | Es ist nicht weit. | = is not
aren't | sind nicht; bist nicht | | They aren't here. | Sie sind nicht hier. | = are not
don't | (Verneinung bei Verben) | | I don't know. | Ich weiß nicht. | = do not
doesn't | (Verneinung bei he/she/it) | | She doesn't eat meat. | Sie isst kein Fleisch. | = does not
nowhere | nirgendwo | | There's nowhere to park. | Man kann nirgends parken. |
nothing | nichts | | Nothing is wrong. | Nichts ist falsch. |
never | nie, niemals | | I never drink coffee. | Ich trinke nie Kaffee. |
of course | natürlich | | Of course you can! | Natürlich kannst du! |
sure | klar, sicher | | Sure, no problem. | Klar, kein Problem. |
maybe | vielleicht | | Maybe tomorrow. | Vielleicht morgen. |
right | richtig; rechts | | That's right. | Das stimmt. |
wrong | falsch | | Sorry, wrong number. | Entschuldigung, falsche Nummer. |
true | wahr, richtig | | Is that true? | Stimmt das? |
OK / okay | okay, in Ordnung | | Is that OK? | Ist das in Ordnung? |
know | wissen; kennen | | I know her. | Ich kenne sie. | k wird nicht gesprochen: „nou“
understand | verstehen | | I don't understand. | Ich verstehe nicht. |
really | wirklich | | Really? | Wirklich? |
also | auch | | I'm also from Germany. | Ich komme auch aus Deutschland. | steht vor dem Verb
too | auch (am Satzende) | | Me too! | Ich auch! |
either | auch nicht (am Satzende) | | I don't know either. | Ich weiß es auch nicht. |
or | oder | | Tea or coffee? | Tee oder Kaffee? |
and | und | | Tom and Anna | Tom und Anna |
but | aber | | It's small but nice. | Es ist klein, aber schön. |
> Yes, I am. / No, I'm not. | Ja (bin ich). / Nein (bin ich nicht). | Kurzantworten wiederholen das Hilfsverb.
> Sorry, I don't understand. | Entschuldigung, ich verstehe nicht.
> I don't know. | Ich weiß es nicht.
> That's not right. | Das stimmt nicht.
> I don't drink alcohol. | Ich trinke keinen Alkohol.
`},

{ key: "u05", title: "Zahlen 0–100", icon: "🔢", lesson: "g05", items: `
zero | null | | My number starts with zero. | Meine Nummer beginnt mit null. | bei Telefonnummern oft „oh“
one | eins | | One coffee, please. | Einen Kaffee, bitte. |
two | zwei | | Two tickets, please. | Zwei Tickets, bitte. |
three | drei | | Three days | drei Tage | th: Zunge zwischen die Zähne
four | vier | | Four people | vier Personen |
five | fünf | | Five minutes | fünf Minuten |
six | sechs | | Six o'clock | sechs Uhr |
seven | sieben | | Seven days a week | sieben Tage die Woche |
eight | acht | | Eight hours | acht Stunden |
nine | neun | | Nine euros | neun Euro |
ten | zehn | | Ten pounds | zehn Pfund |
eleven | elf | | At eleven | um elf |
twelve | zwölf | | Twelve months | zwölf Monate |
thirteen | dreizehn | | Thirteen years | dreizehn Jahre | Betonung hinten: thir-TEEN
fifteen | fünfzehn | | Fifteen minutes | fünfzehn Minuten |
twenty | zwanzig | | Twenty pounds | zwanzig Pfund |
twenty-one | einundzwanzig | | Platform twenty-one | Gleis einundzwanzig | Reihenfolge wie geschrieben: zwanzig-eins
thirty | dreißig | | Thirty degrees | dreißig Grad | Betonung vorne: THIR-ty
forty | vierzig | | Forty people | vierzig Personen | ohne u – nicht „fourty“
fifty | fünfzig | | Fifty pence | fünfzig Pence |
sixty | sechzig | | Sixty seconds | sechzig Sekunden |
a hundred / one hundred | hundert | | A hundred people | hundert Menschen |
number | Nummer, Zahl | | What's your phone number? | Wie ist deine Telefonnummer? |
how many? | wie viele? | | How many people? | Wie viele Personen? |
how old? | wie alt? | | How old are you? | Wie alt bist du? |
> I'm thirty-five years old. | Ich bin 35 Jahre alt. | „years old“ kann man auch weglassen: I'm 35.
> Table for two, please. | Einen Tisch für zwei, bitte.
> My number is oh-seven-seven… | Meine Nummer ist 077…
> How many brothers do you have? | Wie viele Brüder hast du?
`},

{ key: "u06", title: "Essen & Trinken", icon: "🍔", lesson: "g06", items: `
food | Essen, Lebensmittel | | The food is great. | Das Essen ist super. |
drink | trinken; Getränk | | What do you want to drink? | Was möchtest du trinken? |
eat | essen | | I eat a lot of vegetables. | Ich esse viel Gemüse. |
water | Wasser | | A glass of water, please. | Ein Glas Wasser, bitte. | „tap water“ = Leitungswasser (gratis)
coffee | Kaffee | | A black coffee, please. | Einen schwarzen Kaffee, bitte. |
tea | Tee | | Tea with milk? | Tee mit Milch? | in Großbritannien meist mit Milch
milk | Milch | | No milk, thanks. | Keine Milch, danke. |
juice | Saft | | Orange juice | Orangensaft |
beer | Bier | | A pint of beer | ein großes Bier | pint = 0,57 l
wine | Wein | | Red or white wine? | Rot- oder Weißwein? |
bread | Brot | | Fresh bread | frisches Brot |
egg | Ei | | Two eggs, please. | Zwei Eier, bitte. |
cheese | Käse | | A cheese sandwich | ein Käsesandwich |
meat | Fleisch | | I don't eat meat. | Ich esse kein Fleisch. |
chicken | Hähnchen, Huhn | | Chicken and rice | Hähnchen mit Reis |
fish | Fisch | | Fish and chips | Fisch mit Pommes |
rice | Reis | | Rice or potatoes? | Reis oder Kartoffeln? |
potato | Kartoffel | | Two potatoes | zwei Kartoffeln | Mehrzahl: potatoes
chips | Pommes frites | fries | Fish and chips | Fisch mit Pommes | US: chips = Kartoffelchips!
crisps | Kartoffelchips | chips | A bag of crisps | eine Tüte Chips |
vegetables | Gemüse | | Fresh vegetables | frisches Gemüse | meist Mehrzahl
fruit | Obst | | I eat fruit every day. | Ich esse jeden Tag Obst. |
apple | Apfel | | An apple a day… | Ein Apfel am Tag … | mit „an“: an apple
sugar | Zucker | | No sugar, please. | Keinen Zucker, bitte. |
hungry | hungrig | | I'm hungry. | Ich habe Hunger. | wörtlich: „Ich bin hungrig.“
thirsty | durstig | | Are you thirsty? | Hast du Durst? |
> I'm really hungry. | Ich habe richtig Hunger.
> I'd like a cup of tea, please. | Ich hätte gern eine Tasse Tee.
> Do you eat fish? | Isst du Fisch?
> I'm vegetarian. | Ich bin Vegetarierin. / Ich bin Vegetarier.
> An apple and a banana, please. | Einen Apfel und eine Banane, bitte.
`},

{ key: "u07", title: "Im Café & Restaurant", icon: "🍽️", lesson: "g07", items: `
restaurant | Restaurant | | A nice Italian restaurant | ein schönes italienisches Restaurant |
café | Café | | Let's meet at the café. | Treffen wir uns im Café. |
pub | Pub, Kneipe | bar | Let's go to the pub! | Gehen wir in den Pub! | Im Pub bestellt und zahlt man an der Bar.
menu | Speisekarte | | Can I see the menu? | Kann ich die Karte sehen? |
table | Tisch | | A table for two, please. | Einen Tisch für zwei, bitte. |
waiter | Kellner | server | The waiter is coming. | Der Kellner kommt. |
waitress | Kellnerin | server | Excuse me, waitress! | Entschuldigung! (zur Kellnerin) | heute oft neutral: server
order | bestellen; Bestellung | | Are you ready to order? | Möchten Sie bestellen? |
I'd like | ich hätte gern | | I'd like the soup, please. | Ich hätte gern die Suppe. | = I would like
could I have…? | könnte ich … haben? | | Could I have some water? | Könnte ich etwas Wasser haben? |
starter | Vorspeise | appetizer | A starter for me, please. | Eine Vorspeise für mich, bitte. |
main course | Hauptgericht | entrée | What's the main course? | Was ist das Hauptgericht? |
dessert | Nachspeise | | Any dessert? | Noch eine Nachspeise? | Betonung hinten: de-SSERT
the bill | die Rechnung | the check | Could we have the bill, please? | Die Rechnung, bitte. |
tip | Trinkgeld | | Is the tip included? | Ist das Trinkgeld inbegriffen? |
pay | zahlen | | Can I pay by card? | Kann ich mit Karte zahlen? |
cash | Bargeld; bar | | Cash or card? | Bar oder mit Karte? |
delicious | köstlich, sehr lecker | | This is delicious! | Das ist köstlich! |
tasty | lecker | | Very tasty! | Sehr lecker! |
spicy | scharf | | Is it spicy? | Ist das scharf? |
glass | Glas | | A glass of wine | ein Glas Wein |
cup | Tasse | | A cup of coffee | eine Tasse Kaffee |
takeaway | zum Mitnehmen; Essen zum Mitnehmen | takeout / to go | Eat in or takeaway? | Hier essen oder mitnehmen? |
vegetarian | vegetarisch; Vegetarier(in) | | Is there a vegetarian option? | Gibt es eine vegetarische Option? |
allergic | allergisch | | I'm allergic to nuts. | Ich bin allergisch gegen Nüsse. | allergic **to**
> Could we have the menu, please? | Könnten wir die Karte haben?
> I'd like the chicken, please. | Ich hätte gern das Hähnchen.
> Could we have the bill, please? | Die Rechnung, bitte.
> Can I pay by card? | Kann ich mit Karte zahlen?
> Everything was delicious, thank you. | Alles war köstlich, danke.
`},

{ key: "u08", title: "Fragen stellen", icon: "❓", lesson: "g08", items: `
what? | was? | | What is this? | Was ist das? |
who? | wer? | | Who is that? | Wer ist das? |
when? | wann? | | When is the train? | Wann fährt der Zug? |
why? | warum? | | Why not? | Warum nicht? |
how? | wie? | | How does it work? | Wie funktioniert das? |
which? | welcher, welche, welches? | | Which bus goes to the centre? | Welcher Bus fährt ins Zentrum? |
how much? | wie viel? | | How much is it? | Wie viel kostet das? |
how long? | wie lange? | | How long does it take? | Wie lange dauert es? |
what time? | um wie viel Uhr? | | What time is it? | Wie spät ist es? |
whose? | wessen? | | Whose bag is this? | Wessen Tasche ist das? |
do you…? | (Frage mit Verb) | | Do you like tea? | Magst du Tee? |
does he / does she…? | (Frage bei he/she/it) | | Does she work here? | Arbeitet sie hier? |
question | Frage | | Can I ask a question? | Darf ich eine Frage stellen? |
answer | Antwort; antworten | | I don't know the answer. | Ich weiß die Antwort nicht. |
ask | fragen | | Can I ask you something? | Darf ich dich etwas fragen? |
mean | bedeuten; meinen | | What does this mean? | Was bedeutet das? |
say | sagen | | How do you say „Tisch“ in English? | Wie sagt man „Tisch“ auf Englisch? |
repeat | wiederholen | | Could you repeat that, please? | Könnten Sie das bitte wiederholen? |
slowly | langsam | | Please speak slowly. | Bitte sprechen Sie langsam. |
again | wieder, noch einmal | | Once again, please. | Noch einmal, bitte. |
spell | buchstabieren | | How do you spell that? | Wie schreibt man das? |
this | das (hier), dies | | What's this? | Was ist das? |
that | das (dort), jenes | | Who's that? | Wer ist das (dort)? |
> What does „queue“ mean? | Was bedeutet „queue“?
> How do you say „Rechnung“ in English? | Wie sagt man „Rechnung“ auf Englisch?
> Could you speak more slowly, please? | Könnten Sie bitte langsamer sprechen?
> Where is the toilet, please? | Wo ist die Toilette, bitte?
> How do you spell your name? | Wie schreibt man deinen Namen?
`},

{ key: "u09", title: "Heute, morgen, gestern", icon: "🗓️", lesson: "g09", items: `
today | heute | | Today is Monday. | Heute ist Montag. |
tomorrow | morgen | | See you tomorrow! | Bis morgen! |
yesterday | gestern | | I was there yesterday. | Ich war gestern dort. |
now | jetzt | | I'm busy now. | Ich bin gerade beschäftigt. |
later | später | | Call me later. | Ruf mich später an. |
soon | bald | | See you soon! | Bis bald! |
morning | Morgen, Vormittag | | in the morning | morgens, am Vormittag |
afternoon | Nachmittag | | in the afternoon | am Nachmittag |
evening | Abend | | in the evening | am Abend |
night | Nacht | | at night | nachts | „at“, nicht „in“
tonight | heute Abend, heute Nacht | | What are you doing tonight? | Was machst du heute Abend? |
day | Tag | | Have a nice day! | Schönen Tag noch! |
week | Woche | | next week | nächste Woche |
month | Monat | | last month | letzten Monat |
year | Jahr | | this year | dieses Jahr |
weekend | Wochenende | | at the weekend | am Wochenende | US: on the weekend
next | nächster, nächste | | next Friday | nächsten Freitag | ohne „the“
last | letzter, letzte | | last year | letztes Jahr | ohne „the“
ago | vor (zeitlich) | | two days ago | vor zwei Tagen | steht hinter der Zeitangabe!
already | schon, bereits | | I'm already here. | Ich bin schon da. |
still | noch, immer noch | | Are you still at work? | Bist du noch bei der Arbeit? |
early | früh | | I get up early. | Ich stehe früh auf. |
late | spät; zu spät | | Sorry I'm late! | Entschuldige die Verspätung! |
always | immer | | She's always on time. | Sie ist immer pünktlich. |
> What are you doing tonight? | Was machst du heute Abend?
> I was in Manchester last week. | Ich war letzte Woche in Manchester.
> We arrived three days ago. | Wir sind vor drei Tagen angekommen.
> Have a nice weekend! | Schönes Wochenende!
> See you next week! | Bis nächste Woche!
`},

{ key: "u10", title: "Alltagsverben", icon: "🏃", lesson: "g10", items: `
go | gehen, fahren | | I go to work by bus. | Ich fahre mit dem Bus zur Arbeit. |
work | arbeiten; Arbeit | | I work in an office. | Ich arbeite in einem Büro. |
sleep | schlafen | | I sleep eight hours. | Ich schlafe acht Stunden. |
get up | aufstehen | | I get up at seven. | Ich stehe um sieben auf. |
have | haben | | I have two children. | Ich habe zwei Kinder. |
make | machen (herstellen) | | I make breakfast. | Ich mache Frühstück. |
do | machen, tun | | What do you do? | Was machst du (beruflich)? |
see | sehen | | I see the sea! | Ich sehe das Meer! |
look | schauen | | Look at this! | Schau dir das an! |
watch | anschauen (TV, Film) | | We watch a film. | Wir schauen einen Film. |
listen | zuhören | | Listen to me! | Hör mir zu! | listen **to**
read | lesen | | I read every evening. | Ich lese jeden Abend. |
write | schreiben | | Write me a message. | Schreib mir eine Nachricht. | w wird nicht gesprochen
buy | kaufen | | I buy bread. | Ich kaufe Brot. |
need | brauchen | | I need help. | Ich brauche Hilfe. |
want | wollen, möchten | | I want to go home. | Ich will nach Hause. |
like | mögen | | I like London. | Ich mag London. |
love | lieben; sehr gern mögen | | I love this song! | Ich liebe dieses Lied! |
take | nehmen | | Take the bus. | Nimm den Bus. |
give | geben | | Give me a minute. | Gib mir eine Minute. |
help | helfen; Hilfe | | Can you help me? | Kannst du mir helfen? |
learn | lernen | | I'm learning English. | Ich lerne Englisch. |
start | anfangen, beginnen | | Work starts at nine. | Die Arbeit beginnt um neun. |
finish | beenden, fertig werden | | I finish at five. | Ich mache um fünf Schluss. |
wait | warten | | Wait for me! | Warte auf mich! | wait **for**
> She works in a hospital. | Sie arbeitet in einem Krankenhaus. | he/she/it: Verb + s
> He doesn't like coffee. | Er mag keinen Kaffee.
> I get up at seven every day. | Ich stehe jeden Tag um sieben auf.
> What do you do? – I'm a nurse. | Was machst du beruflich? – Ich bin Krankenpfleger.
> Can you wait a minute? | Kannst du kurz warten?
`},

{ key: "u11", title: "Familie", icon: "👨‍👩‍👧", lesson: "g11", items: `
family | Familie | | I have a big family. | Ich habe eine große Familie. |
parents | Eltern | | My parents live in Bonn. | Meine Eltern leben in Bonn. |
mother | Mutter | | My mother is a doctor. | Meine Mutter ist Ärztin. |
father | Vater | | My father is retired. | Mein Vater ist in Rente. |
mum | Mama | mom | Hi, Mum! | Hallo, Mama! |
dad | Papa | | My dad is funny. | Mein Papa ist lustig. |
brother | Bruder | | My little brother | mein kleiner Bruder |
sister | Schwester | | My older sister | meine ältere Schwester |
son | Sohn | | Our son is five. | Unser Sohn ist fünf. |
daughter | Tochter | | Their daughter is a student. | Ihre Tochter studiert. |
child / kid | Kind | | One child, two children | ein Kind, zwei Kinder | Mehrzahl: children
children | Kinder | kids | Do you have children? | Hast du Kinder? |
baby | Baby | | A baby girl | ein Mädchen (Baby) |
husband | Ehemann | | My husband is Irish. | Mein Mann ist Ire. |
wife | Ehefrau | | His wife is a lawyer. | Seine Frau ist Anwältin. |
partner | Partner, Partnerin | | My partner and I | mein Partner und ich |
boyfriend | (fester) Freund | | Her boyfriend is from Spain. | Ihr Freund ist aus Spanien. |
girlfriend | (feste) Freundin | | His girlfriend is nice. | Seine Freundin ist nett. |
grandmother / grandma | Großmutter, Oma | | My grandma is 90. | Meine Oma ist 90. |
grandfather / grandpa | Großvater, Opa | | My grandpa lives with us. | Mein Opa wohnt bei uns. |
uncle | Onkel | | My uncle lives in Canada. | Mein Onkel lebt in Kanada. |
aunt | Tante | | My aunt is a nurse. | Meine Tante ist Krankenschwester. |
cousin | Cousin, Cousine | | My cousin is my age. | Mein Cousin ist so alt wie ich. |
married | verheiratet | | Are you married? | Bist du verheiratet? |
single | ledig, Single | | I'm single. | Ich bin Single. |
his | sein, seine | | his car | sein Auto |
her | ihr, ihre (einer Frau) | | her brother | ihr Bruder |
our | unser, unsere | | our house | unser Haus |
their | ihr, ihre (Mehrzahl) | | their children | ihre Kinder |
> This is my sister's husband. | Das ist der Mann meiner Schwester. | 's zeigt, wem etwas gehört.
> Do you have any brothers or sisters? | Hast du Geschwister? | „Geschwister“ gibt es im Alltag kaum als ein Wort.
> I have two children, a son and a daughter. | Ich habe zwei Kinder, einen Sohn und eine Tochter.
> My parents are from Austria. | Meine Eltern kommen aus Österreich.
`},

{ key: "u12", title: "Geld & Einkaufen", icon: "🛍️", lesson: "g12", items: `
shop | Geschäft, Laden; einkaufen | store | The shop opens at nine. | Der Laden öffnet um neun. |
supermarket | Supermarkt | grocery store | Is there a supermarket near here? | Gibt es hier in der Nähe einen Supermarkt? |
market | Markt | | The market is on Saturday. | Der Markt ist am Samstag. |
money | Geld | | I have no money. | Ich habe kein Geld. |
pound | Pfund (Währung) | | Ten pounds, please. | Zehn Pfund, bitte. | £, umgangssprachlich „quid“
euro | Euro | | It costs five euros. | Es kostet fünf Euro. |
price | Preis | | What's the price? | Was ist der Preis? |
cost | kosten | | How much does it cost? | Wie viel kostet das? |
expensive | teuer | | London is very expensive. | London ist sehr teuer. |
cheap | billig, günstig | | This is really cheap! | Das ist echt günstig! |
sale | Ausverkauf, Rabattaktion | | Everything is on sale. | Alles ist reduziert. | „for sale“ = zu verkaufen
card | Karte (Bank-) | | Can I pay by card? | Kann ich mit Karte zahlen? |
change | Wechselgeld; ändern | | Here's your change. | Hier ist Ihr Wechselgeld. |
receipt | Kassenbon, Quittung | | Can I have a receipt? | Kann ich eine Quittung haben? | p wird nicht gesprochen: „ri-SIIT“
bag | Tüte, Tasche | | Do you need a bag? | Brauchen Sie eine Tüte? |
size | Größe | | What size are you? | Welche Größe haben Sie? |
try on | anprobieren | | Can I try this on? | Kann ich das anprobieren? |
changing room | Umkleidekabine | fitting room | Where is the changing room? | Wo ist die Umkleide? |
open | offen; öffnen | | Is the shop open on Sunday? | Hat der Laden am Sonntag offen? |
closed | geschlossen | | Sorry, we're closed. | Tut mir leid, wir haben geschlossen. |
queue | Schlange (Warteschlange); anstehen | line | Please queue here. | Bitte hier anstellen. | Briten nehmen das Anstehen sehr ernst!
cash machine | Geldautomat | ATM | Where's the nearest cash machine? | Wo ist der nächste Geldautomat? |
these | diese (hier, Mehrzahl) | | How much are these? | Was kosten die hier? |
those | jene (dort, Mehrzahl) | | I like those shoes. | Ich mag die Schuhe da. |
just looking | ich schaue nur | | I'm just looking, thanks. | Ich schaue nur, danke. |
> How much is this? | Wie viel kostet das?
> That's too expensive. | Das ist zu teuer.
> I'll take it. | Ich nehme es.
> Do you take cards? | Nehmen Sie Karten?
> Can I try these on? | Kann ich die anprobieren?
`},

{ key: "u13", title: "Wege & Verkehr", icon: "🚌", lesson: "g13", items: `
street | Straße | | What street is it on? | In welcher Straße ist das? |
road | Straße, Landstraße | | Cross the road here. | Überquere hier die Straße. |
left | links | | Turn left. | Bieg links ab. |
straight on | geradeaus | straight ahead | Go straight on. | Geh geradeaus. |
turn | abbiegen | | Turn right at the lights. | Bieg an der Ampel rechts ab. |
corner | Ecke | | It's on the corner. | Es ist an der Ecke. |
traffic lights | Ampel | stoplight | Stop at the traffic lights. | Halt an der Ampel. | meist Mehrzahl: the lights
near | nah, in der Nähe | | Is it near here? | Ist es hier in der Nähe? |
far | weit | | Is it far? | Ist es weit? |
next to | neben | | The bank is next to the café. | Die Bank ist neben dem Café. |
opposite | gegenüber | across from | It's opposite the station. | Es ist gegenüber dem Bahnhof. |
between | zwischen | | between the bank and the post office | zwischen der Bank und der Post |
behind | hinter | | The car park is behind the hotel. | Der Parkplatz ist hinter dem Hotel. |
in front of | vor (räumlich) | | I'm in front of the museum. | Ich bin vor dem Museum. |
bus | Bus | | The bus is late. | Der Bus hat Verspätung. |
bus stop | Bushaltestelle | | Where's the bus stop? | Wo ist die Bushaltestelle? |
train | Zug | | The train to Oxford | der Zug nach Oxford |
station | Bahnhof | | the train station | der Bahnhof |
the underground / the tube | die U-Bahn (London) | the subway | Let's take the tube. | Nehmen wir die U-Bahn. | US: subway; UK: subway = Fußgängerunterführung
taxi | Taxi | cab | Can you call a taxi? | Kannst du ein Taxi rufen? |
car | Auto | | We go by car. | Wir fahren mit dem Auto. |
bike | Fahrrad | | I go to work by bike. | Ich fahre mit dem Rad zur Arbeit. |
on foot | zu Fuß | | It's ten minutes on foot. | Zu Fuß sind es zehn Minuten. |
ticket | Fahrkarte, Ticket | | A return ticket, please. | Eine Rückfahrkarte, bitte. |
return ticket | Hin- und Rückfahrkarte | round-trip ticket | A return to Brighton, please. | Einmal Brighton hin und zurück, bitte. |
single ticket | einfache Fahrt | one-way ticket | Just a single, please. | Nur einfach, bitte. |
> Excuse me, how do I get to the station? | Entschuldigung, wie komme ich zum Bahnhof?
> Go straight on and take the second left. | Gehen Sie geradeaus und dann die zweite links.
> Is it far from here? | Ist es weit von hier?
> Which bus goes to the airport? | Welcher Bus fährt zum Flughafen?
> It's just around the corner. | Es ist gleich um die Ecke.
`},

{ key: "u14", title: "Wochentage & Uhrzeit", icon: "⏰", lesson: "g14", items: `
Monday | Montag | | on Monday | am Montag | Wochentage immer groß
Tuesday | Dienstag | | every Tuesday | jeden Dienstag |
Wednesday | Mittwoch | | on Wednesday morning | am Mittwochmorgen | gesprochen „WENS-dei“
Thursday | Donnerstag | | See you on Thursday. | Bis Donnerstag. |
Friday | Freitag | | Thank God it's Friday! | Gott sei Dank ist Freitag! |
Saturday | Samstag | | on Saturdays | samstags |
Sunday | Sonntag | | Sunday lunch | Sonntagsessen | „Sunday roast“ ist ein britischer Klassiker
o'clock | Uhr (volle Stunde) | | at three o'clock | um drei Uhr |
half past | halb (nach) | | half past seven | halb acht (7:30) | Achtung: „half past seven“ = 7:30, nicht 6:30!
quarter past | Viertel nach | | quarter past two | Viertel nach zwei |
quarter to | Viertel vor | | quarter to nine | Viertel vor neun |
hour | Stunde | | in an hour | in einer Stunde | h stumm: „an hour“
minute | Minute | | Just a minute! | Moment! |
second | Sekunde; zweiter | | Wait a second. | Warte kurz. |
time | Zeit; Uhrzeit; Mal | | What time is it? | Wie spät ist es? |
at | um (Uhrzeit) | | at six | um sechs |
on | an (Wochentag, Datum) | | on Friday | am Freitag |
in | im (Monat, Jahr, Tageszeit) | | in July | im Juli |
a.m. | vormittags (0–12 Uhr) | | at 9 a.m. | um 9 Uhr morgens |
p.m. | nachmittags, abends (12–24 Uhr) | | at 8 p.m. | um 20 Uhr | 24-Stunden-Zeit ist im Alltag selten
date | Datum; Verabredung | | What's the date today? | Welches Datum ist heute? |
appointment | Termin | | I have an appointment at ten. | Ich habe um zehn einen Termin. |
until | bis | | The shop is open until six. | Der Laden hat bis sechs offen. |
from … to … | von … bis … | | from nine to five | von neun bis fünf |
on time | pünktlich | | The train is on time. | Der Zug ist pünktlich. |
> What time is it? – It's half past four. | Wie spät ist es? – Es ist halb fünf.
> The meeting is on Tuesday at ten. | Das Meeting ist am Dienstag um zehn.
> The museum is open from ten to six. | Das Museum hat von zehn bis sechs offen.
> I'm free on Friday afternoon. | Am Freitagnachmittag habe ich Zeit.
> See you at eight! | Bis um acht!
`},

{ key: "u15", title: "Wie oft? Gewohnheiten", icon: "🔁", lesson: "g15", items: `
usually | normalerweise | | I usually walk to work. | Normalerweise gehe ich zu Fuß zur Arbeit. |
often | oft | | Do you often go to the cinema? | Gehst du oft ins Kino? |
sometimes | manchmal | | Sometimes I cook. | Manchmal koche ich. |
rarely | selten | | I rarely watch TV. | Ich schaue selten fern. |
hardly ever | fast nie | | We hardly ever go out. | Wir gehen fast nie aus. |
every day | jeden Tag | | I run every day. | Ich laufe jeden Tag. | zwei Wörter! „everyday“ = alltäglich
once | einmal | | once a week | einmal pro Woche |
twice | zweimal | | twice a month | zweimal im Monat |
three times | dreimal | | three times a year | dreimal im Jahr |
how often? | wie oft? | | How often do you train? | Wie oft trainierst du? |
habit | Gewohnheit | | It's a bad habit. | Das ist eine schlechte Angewohnheit. |
routine | Routine, Tagesablauf | | my morning routine | meine Morgenroutine |
breakfast | Frühstück | | I have breakfast at eight. | Ich frühstücke um acht. |
lunch | Mittagessen | | Let's have lunch together. | Lass uns zusammen zu Mittag essen. |
dinner | Abendessen | | What's for dinner? | Was gibt's zum Abendessen? | in Nordengland auch „tea“
shower | Dusche; duschen | | I have a shower every morning. | Ich dusche jeden Morgen. |
go to bed | ins Bett gehen | | I go to bed at eleven. | Ich gehe um elf ins Bett. |
wake up | aufwachen | | I wake up at six. | Ich wache um sechs auf. |
go shopping | einkaufen gehen | | We go shopping on Saturdays. | Samstags gehen wir einkaufen. |
cook | kochen; Koch | | Do you like to cook? | Kochst du gern? |
clean | putzen; sauber | | I clean the flat on Sunday. | Sonntags putze ich die Wohnung. |
walk | zu Fuß gehen; Spaziergang | | Let's go for a walk. | Lass uns spazieren gehen. |
commute | pendeln; Arbeitsweg | | My commute is an hour. | Mein Arbeitsweg dauert eine Stunde. |
> How often do you go to the gym? | Wie oft gehst du ins Fitnessstudio?
> I usually have coffee for breakfast. | Zum Frühstück trinke ich normalerweise Kaffee. | Das Häufigkeitswort steht vor dem Verb.
> She is always late. | Sie kommt immer zu spät. | Bei „be“ steht es dahinter.
> We go to the cinema once a month. | Wir gehen einmal im Monat ins Kino.
> Do you work on Saturdays? | Arbeitest du samstags?
`},

{ key: "u16", title: "Gefühle & Zustände", icon: "😊", lesson: "g16", items: `
happy | glücklich, froh | | I'm so happy for you! | Ich freue mich so für dich! |
sad | traurig | | Why are you sad? | Warum bist du traurig? |
tired | müde | | I'm really tired today. | Ich bin heute richtig müde. |
angry | wütend | | Don't be angry. | Sei nicht böse. |
nervous | nervös | | I'm nervous about the exam. | Ich bin wegen der Prüfung nervös. |
excited | aufgeregt (freudig), gespannt | | I'm so excited about the trip! | Ich freue mich riesig auf die Reise! |
bored | gelangweilt | | I'm bored. | Mir ist langweilig. | „I'm boring“ = Ich bin langweilig!
boring | langweilig | | The film is boring. | Der Film ist langweilig. |
interested | interessiert | | I'm interested in art. | Ich interessiere mich für Kunst. | interested **in**
interesting | interessant | | What an interesting idea! | Was für eine interessante Idee! |
worried | besorgt | | Don't be worried. | Mach dir keine Sorgen. |
scared | ängstlich, erschrocken | | I'm scared of dogs. | Ich habe Angst vor Hunden. | scared **of**
busy | beschäftigt; viel los | | I'm very busy this week. | Ich habe diese Woche viel zu tun. |
free | frei; kostenlos | | Are you free tonight? | Hast du heute Abend Zeit? |
hot | heiß | | I'm hot. | Mir ist heiß. |
cold | kalt; Erkältung | | I'm cold. | Mir ist kalt. | „I'm cold“ – nicht „It's cold to me“
ill | krank | sick | I feel ill. | Ich fühle mich krank. |
well | gesund, wohl; gut (Adverb) | | I don't feel well. | Mir geht's nicht gut. |
very | sehr | | very good | sehr gut |
quite | ziemlich | | It's quite cold. | Es ist ziemlich kalt. |
a bit | ein bisschen | | I'm a bit tired. | Ich bin ein bisschen müde. |
so | so | | You're so kind! | Du bist so nett! |
feel | sich fühlen | | How do you feel? | Wie fühlst du dich? |
great | großartig, super | | That's great news! | Das sind tolle Nachrichten! |
terrible | schrecklich | | I feel terrible. | Ich fühle mich schrecklich. |
> I'm a bit tired today. | Ich bin heute ein bisschen müde.
> Are you OK? You look worried. | Alles okay? Du siehst besorgt aus.
> I'm really excited about the weekend! | Ich freue mich riesig aufs Wochenende!
> I'm bored – let's do something! | Mir ist langweilig – lass uns was unternehmen!
> I'm not feeling well. | Mir geht's nicht gut.
`},

{ key: "u17", title: "Hotel & Unterkunft", icon: "🏨", lesson: "g17", items: `
hotel | Hotel | | a five-star hotel | ein Fünf-Sterne-Hotel |
room | Zimmer | | a room with a view | ein Zimmer mit Aussicht |
single room | Einzelzimmer | | A single room for two nights. | Ein Einzelzimmer für zwei Nächte. |
double room | Doppelzimmer | | Do you have a double room? | Haben Sie ein Doppelzimmer? |
reservation / booking | Reservierung, Buchung | | I have a reservation. | Ich habe reserviert. |
book | buchen; Buch | | I'd like to book a room. | Ich möchte ein Zimmer buchen. |
check in | einchecken | | When can we check in? | Wann können wir einchecken? |
check out | auschecken | | Check-out is at eleven. | Auschecken ist um elf. |
reception | Rezeption | front desk | Ask at reception. | Frag an der Rezeption. |
key | Schlüssel | | Here's your key. | Hier ist Ihr Schlüssel. |
floor | Stockwerk; Boden | | Your room is on the third floor. | Ihr Zimmer ist im dritten Stock. |
ground floor | Erdgeschoss | first floor | The bar is on the ground floor. | Die Bar ist im Erdgeschoss. | UK first floor = 1. Stock, US first floor = Erdgeschoss!
lift | Aufzug | elevator | The lift is over there. | Der Aufzug ist da drüben. |
breakfast included | Frühstück inklusive | | Is breakfast included? | Ist Frühstück inklusive? |
towel | Handtuch | | Could I have another towel? | Könnte ich noch ein Handtuch haben? |
bed | Bett | | a comfortable bed | ein bequemes Bett |
bathroom | Badezimmer | | The bathroom is small. | Das Bad ist klein. |
toilet | Toilette | restroom | Where's the toilet? | Wo ist die Toilette? | auch: loo (britisch, locker)
Wi-Fi | WLAN | | What's the Wi-Fi password? | Wie ist das WLAN-Passwort? | gesprochen „WAI-fai“
air conditioning | Klimaanlage | AC | The air conditioning doesn't work. | Die Klimaanlage funktioniert nicht. |
noisy | laut | | The room is too noisy. | Das Zimmer ist zu laut. |
quiet | ruhig, leise | | a quiet room | ein ruhiges Zimmer |
view | Aussicht | | What a view! | Was für eine Aussicht! |
there is | es gibt (Einzahl) | | There is a pool. | Es gibt einen Pool. |
there are | es gibt (Mehrzahl) | | There are two beds. | Es gibt zwei Betten. |
> I have a booking under the name Weber. | Ich habe eine Reservierung auf den Namen Weber.
> Is there a lift? | Gibt es einen Aufzug?
> Is breakfast included? | Ist das Frühstück inklusive?
> What time is check-out? | Wann ist Check-out?
> The shower doesn't work. | Die Dusche funktioniert nicht.
`},

{ key: "u18", title: "Können, dürfen, müssen", icon: "💪", lesson: "g18", items: `
can | können; dürfen | | I can swim. | Ich kann schwimmen. |
can't | nicht können; nicht dürfen | | I can't come today. | Ich kann heute nicht kommen. | britisch „kaant“, amerikanisch „känt“
could | könnte; konnte | | Could you help me? | Könnten Sie mir helfen? | höflicher als „can“
must | müssen (eigene Pflicht) | | I must call my mum. | Ich muss meine Mama anrufen. |
mustn't | nicht dürfen | | You mustn't smoke here. | Hier darf man nicht rauchen. | Achtung: nicht „nicht müssen“!
have to | müssen (Regel, Umstände) | | I have to work tomorrow. | Ich muss morgen arbeiten. |
don't have to | nicht müssen | | You don't have to pay. | Du musst nicht zahlen. |
may | dürfen (formell); könnte | | May I come in? | Darf ich hereinkommen? |
should | sollte | | You should see a doctor. | Du solltest zum Arzt gehen. |
allowed | erlaubt | | Dogs are not allowed. | Hunde sind nicht erlaubt. |
possible | möglich | | Is it possible? | Ist das möglich? |
impossible | unmöglich | | That's impossible! | Das ist unmöglich! |
able to | fähig, in der Lage | | I wasn't able to sleep. | Ich konnte nicht schlafen. |
swim | schwimmen | | Can you swim? | Kannst du schwimmen? |
drive | fahren (Auto) | | I can't drive. | Ich kann nicht Auto fahren. |
park | parken; Park | | Can I park here? | Darf ich hier parken? |
smoke | rauchen | | No smoking. | Rauchen verboten. |
borrow | (sich) ausleihen | | Can I borrow your pen? | Kann ich deinen Stift ausleihen? | borrow = nehmen, lend = geben
lend | (ver)leihen | | Can you lend me five pounds? | Kannst du mir fünf Pfund leihen? |
use | benutzen | | Can I use your phone? | Darf ich dein Handy benutzen? |
try | versuchen; probieren | | Try again! | Versuch's noch mal! |
> Can I sit here? | Darf ich mich hier hinsetzen?
> Could you open the window, please? | Könnten Sie bitte das Fenster öffnen?
> You don't have to come. | Du musst nicht kommen.
> You mustn't park here. | Hier darfst du nicht parken.
> I have to get up early tomorrow. | Ich muss morgen früh aufstehen.
`},

{ key: "u19", title: "Körper & Gesundheit", icon: "🩺", lesson: "g19", items: `
head | Kopf | | My head hurts. | Mein Kopf tut weh. |
headache | Kopfschmerzen | | I have a headache. | Ich habe Kopfschmerzen. | immer mit „a“
stomach | Magen, Bauch | | My stomach hurts. | Mir tut der Bauch weh. | gesprochen „STAM-ək“
stomach ache | Bauchschmerzen | | I have a stomach ache. | Ich habe Bauchschmerzen. |
back | Rücken; zurück | | My back hurts. | Mein Rücken tut weh. |
throat | Hals (innen) | | I have a sore throat. | Ich habe Halsschmerzen. |
tooth | Zahn | | I have toothache. | Ich habe Zahnschmerzen. | Mehrzahl: teeth
eye | Auge | | My eyes are red. | Meine Augen sind rot. |
ear | Ohr | | an ear infection | eine Ohrenentzündung |
hand | Hand | | Wash your hands. | Wasch dir die Hände. |
arm | Arm | | I broke my arm. | Ich habe mir den Arm gebrochen. |
leg | Bein | | My leg hurts. | Mein Bein tut weh. |
foot | Fuß | | on foot | zu Fuß | Mehrzahl: feet
hurt | wehtun; verletzen | | Does it hurt? | Tut es weh? |
pain | Schmerz | | I'm in pain. | Ich habe Schmerzen. |
fever | Fieber | temperature | I have a fever. | Ich habe Fieber. | britisch oft: I've got a temperature
cough | Husten; husten | | a bad cough | ein schlimmer Husten | gesprochen „koff“
doctor | Arzt, Ärztin | | I need a doctor. | Ich brauche einen Arzt. |
chemist / pharmacy | Apotheke | drugstore | Is there a chemist nearby? | Gibt es hier eine Apotheke? |
medicine | Medikament, Medizin | | Take this medicine twice a day. | Nehmen Sie das zweimal täglich. |
tablet | Tablette | pill | Take two tablets. | Nehmen Sie zwei Tabletten. |
prescription | Rezept (ärztlich) | | You need a prescription. | Dafür brauchen Sie ein Rezept. |
rest | sich ausruhen; Ruhe | | You need to rest. | Du musst dich ausruhen. |
get better | gesund werden, besser werden | | I hope you get better soon. | Ich hoffe, du wirst bald gesund. |
get well soon | gute Besserung | | Get well soon! | Gute Besserung! |
> I don't feel well. | Mir geht es nicht gut.
> I've got a headache and a sore throat. | Ich habe Kopf- und Halsschmerzen.
> Where does it hurt? | Wo tut es weh?
> Drink lots of water and rest. | Trink viel Wasser und ruh dich aus.
> Take one tablet three times a day. | Nehmen Sie dreimal täglich eine Tablette.
`},

{ key: "u20", title: "Kennenlernen & Small Talk", icon: "🤝", lesson: "g20", items: `
meet | treffen; kennenlernen | | Nice to meet you! | Schön, dich kennenzulernen! |
introduce | vorstellen | | Let me introduce my colleague. | Darf ich meine Kollegin vorstellen? |
job | Job, Beruf | | What's your job? | Was machst du beruflich? |
hobby | Hobby | | My hobby is photography. | Mein Hobby ist Fotografie. |
holiday | Urlaub; Feiertag | vacation | I'm here on holiday. | Ich bin hier im Urlaub. |
on business | geschäftlich | | I'm here on business. | Ich bin geschäftlich hier. |
weather | Wetter | | Lovely weather, isn't it? | Herrliches Wetter, oder? | Briten lieben Wetter-Small-Talk
lovely | schön, herrlich, reizend | | What a lovely day! | Was für ein herrlicher Tag! | sehr britisch
first time | erstes Mal | | Is this your first time in London? | Bist du zum ersten Mal in London? |
enjoy | genießen | | Are you enjoying your stay? | Gefällt dir dein Aufenthalt? |
stay | bleiben; Aufenthalt | | How long are you staying? | Wie lange bleibst du? |
visit | besuchen; Besuch | | I'm visiting a friend. | Ich besuche einen Freund. |
by the way | übrigens | | By the way, I'm Anna. | Übrigens, ich bin Anna. |
actually | eigentlich, tatsächlich | | Actually, I'm from Austria. | Eigentlich komme ich aus Österreich. | nicht „aktuell“!
nice | nett, schön | | That's nice! | Das ist schön! |
kind | nett, freundlich | | That's very kind of you. | Das ist sehr nett von Ihnen. |
funny | lustig | | He's really funny. | Er ist echt witzig. |
about | über; ungefähr | | Tell me about your job. | Erzähl mir von deinem Job. |
same | gleich, derselbe | | Same here! | Bei mir genauso! |
together | zusammen | | Let's go together. | Lass uns zusammen gehen. |
How about you? | Und du? | | I'm a nurse. How about you? | Ich bin Krankenpfleger. Und du? |
What do you do? | Was machst du beruflich? | | So, what do you do? | Und, was machst du beruflich? |
> Is this your first time in England? | Bist du zum ersten Mal in England?
> What brings you here? | Was führt dich hierher?
> I'm here on holiday with my family. | Ich bin mit meiner Familie im Urlaub hier.
> Lovely weather today, isn't it? | Schönes Wetter heute, oder?
> It was nice talking to you. | Es war schön, mit dir zu reden.
`},

{ key: "u21", title: "Beschreiben & Vergleichen", icon: "⚖️", lesson: "g21", items: `
big | groß | | a big house | ein großes Haus |
small | klein | | a small room | ein kleines Zimmer |
tall | groß (Person, Gebäude) | | He's very tall. | Er ist sehr groß. |
short | kurz; klein (Person) | | a short film | ein Kurzfilm |
long | lang | | a long day | ein langer Tag |
old | alt | | an old church | eine alte Kirche |
new | neu | | my new phone | mein neues Handy |
young | jung | | She's young. | Sie ist jung. |
good | gut | | good food | gutes Essen | good → better → the best
bad | schlecht | | bad weather | schlechtes Wetter | bad → worse → the worst
beautiful | schön | | a beautiful beach | ein wunderschöner Strand |
ugly | hässlich | | an ugly building | ein hässliches Gebäude |
easy | leicht, einfach | | It's easy! | Das ist einfach! |
difficult | schwierig | | English isn't difficult. | Englisch ist nicht schwer. |
fast | schnell | | a fast train | ein schneller Zug |
slow | langsam | | The Wi-Fi is slow. | Das WLAN ist langsam. |
comfortable | bequem | | a comfortable chair | ein bequemer Stuhl | gesprochen „KAMF-tə-bl“
dirty | schmutzig | | dirty dishes | schmutziges Geschirr |
than | als (beim Vergleich) | | bigger than Berlin | größer als Berlin |
more | mehr; (bei langen Adjektiven) -er | | more expensive | teurer |
most | am meisten; (bei langen Adjektiven) am …sten | | the most beautiful | der/die/das schönste |
as … as | so … wie | | as big as | so groß wie |
better | besser | | This one is better. | Das hier ist besser. |
best | am besten; beste | | the best pizza in town | die beste Pizza der Stadt |
worse | schlechter, schlimmer | | The weather is worse today. | Das Wetter ist heute schlechter. |
> London is bigger than Manchester. | London ist größer als Manchester.
> This hotel is more expensive than that one. | Dieses Hotel ist teurer als das da.
> It's the best restaurant in the city. | Das ist das beste Restaurant der Stadt.
> My English isn't as good as yours. | Mein Englisch ist nicht so gut wie deins.
> The weather is getting worse. | Das Wetter wird schlechter.
`},

{ key: "u22", title: "Sätze verbinden", icon: "🔗", lesson: "g22", items: `
because | weil | | I'm tired because I worked late. | Ich bin müde, weil ich lange gearbeitet habe. |
so that | damit | | Speak slowly so that I understand. | Sprich langsam, damit ich dich verstehe. |
if | wenn, falls; ob | | If it rains, we'll stay inside. | Wenn es regnet, bleiben wir drinnen. |
when | wenn, als (zeitlich) | | Call me when you arrive. | Ruf mich an, wenn du ankommst. |
before | bevor; vor | | before dinner | vor dem Abendessen |
after | nachdem; nach | | after work | nach der Arbeit |
then | dann | | First the bank, then the shop. | Erst die Bank, dann der Laden. |
first | zuerst | | First, open the app. | Öffne zuerst die App. |
finally | schließlich, endlich | | Finally, we arrived. | Endlich sind wir angekommen. |
although | obwohl | | Although it was cold, we swam. | Obwohl es kalt war, sind wir geschwommen. |
however | jedoch | | However, there is a problem. | Es gibt jedoch ein Problem. |
while | während | | I read while I wait. | Ich lese, während ich warte. |
unless | es sei denn, außer wenn | | We'll go unless it rains. | Wir gehen, es sei denn, es regnet. |
as soon as | sobald | | as soon as possible | so bald wie möglich |
whether | ob | | I don't know whether he's coming. | Ich weiß nicht, ob er kommt. |
as well | auch, ebenfalls | | I'd like a salad as well. | Ich hätte auch gern einen Salat. | steht am Satzende
for example | zum Beispiel | | for example, London | zum Beispiel London | abgekürzt: e.g.
or else | sonst | | Hurry up, or else we'll be late. | Beeil dich, sonst kommen wir zu spät. |
think | denken, glauben | | I think so. | Ich glaube schon. |
reason | Grund | | for that reason | aus diesem Grund |
anyway | jedenfalls, sowieso | | Anyway, see you tomorrow! | Jedenfalls, bis morgen! |
> I'm learning English because I want to work abroad. | Ich lerne Englisch, weil ich im Ausland arbeiten möchte.
> It was late, so we took a taxi. | Es war spät, also haben wir ein Taxi genommen.
> Call me as soon as you arrive. | Ruf mich an, sobald du ankommst.
> Although it was expensive, it was worth it. | Obwohl es teuer war, hat es sich gelohnt.
> I think it's a good idea. | Ich finde, das ist eine gute Idee.
`},

{ key: "u23", title: "Wetter & Natur", icon: "🌦️", lesson: "g23", items: `
sun | Sonne | | The sun is shining. | Die Sonne scheint. |
sunny | sonnig | | It's sunny today. | Heute ist es sonnig. |
rain | Regen; regnen | | It's raining again. | Es regnet schon wieder. |
rainy | regnerisch | | a rainy day | ein Regentag |
cloudy | bewölkt | | It's cloudy but dry. | Es ist bewölkt, aber trocken. |
wind | Wind | | There's a strong wind. | Es ist sehr windig. |
windy | windig | | It's very windy at the coast. | An der Küste ist es sehr windig. |
snow | Schnee; schneien | | It's snowing! | Es schneit! |
fog | Nebel | | thick fog | dichter Nebel |
storm | Sturm, Gewitter | | There's a storm coming. | Ein Sturm zieht auf. |
warm | warm | | It's warm outside. | Draußen ist es warm. |
wet | nass | | Everything is wet. | Alles ist nass. |
dry | trocken | | Keep it dry. | Halt es trocken. |
degrees | Grad | | It's twenty degrees. | Es hat zwanzig Grad. | in den USA meist Fahrenheit
umbrella | Regenschirm | | Take an umbrella! | Nimm einen Schirm mit! |
forecast | Vorhersage | | the weather forecast | die Wettervorhersage |
sky | Himmel | | a blue sky | ein blauer Himmel |
sea | Meer, See (die) | ocean | We swim in the sea. | Wir schwimmen im Meer. |
beach | Strand | | Let's go to the beach. | Gehen wir an den Strand. |
mountain | Berg | | the mountains in Scotland | die Berge in Schottland |
lake | See (der) | | a lake in the Lake District | ein See im Lake District |
river | Fluss | | the River Thames | die Themse |
forest | Wald | woods | a walk in the forest | ein Spaziergang im Wald |
tree | Baum | | an old oak tree | eine alte Eiche |
animal | Tier | | Do you like animals? | Magst du Tiere? |
dog | Hund | | I have a dog. | Ich habe einen Hund. |
cat | Katze | | The cat is sleeping. | Die Katze schläft. |
bird | Vogel | | Listen to the birds. | Hör den Vögeln zu. |
> What's the weather like today? | Wie ist das Wetter heute?
> It's raining cats and dogs! | Es regnet in Strömen! | Redewendung – wörtlich: „Es regnet Katzen und Hunde.“
> It's going to be sunny tomorrow. | Morgen wird es sonnig.
> Don't forget your umbrella. | Vergiss deinen Schirm nicht.
> It's freezing outside! | Draußen ist es eiskalt!
`},

{ key: "u24", title: "Wohnen & Haushalt", icon: "🏠", items: `
house | Haus | | a house with a garden | ein Haus mit Garten |
flat | Wohnung | apartment | I live in a small flat. | Ich wohne in einer kleinen Wohnung. |
home | Zuhause; nach Hause | | I'm going home. | Ich gehe nach Hause. | ohne „to“: go home
kitchen | Küche | | The kitchen is big. | Die Küche ist groß. |
bedroom | Schlafzimmer | | a flat with two bedrooms | eine Wohnung mit zwei Schlafzimmern |
living room | Wohnzimmer | | We watch TV in the living room. | Wir schauen im Wohnzimmer fern. | britisch auch: lounge
garden | Garten | yard | We have a small garden. | Wir haben einen kleinen Garten. |
door | Tür | | Close the door, please. | Mach bitte die Tür zu. |
window | Fenster | | Open the window. | Mach das Fenster auf. |
wall | Wand, Mauer | | a picture on the wall | ein Bild an der Wand |
stairs | Treppe | | Take the stairs. | Nimm die Treppe. |
chair | Stuhl | | Take a chair. | Nimm dir einen Stuhl. |
sofa | Sofa | couch | Sit on the sofa. | Setz dich aufs Sofa. |
fridge | Kühlschrank | refrigerator | The milk is in the fridge. | Die Milch ist im Kühlschrank. |
washing machine | Waschmaschine | | The washing machine is broken. | Die Waschmaschine ist kaputt. |
bin | Mülleimer | trash can | Put it in the bin. | Wirf es in den Müll. |
rubbish | Müll | trash / garbage | Take out the rubbish. | Bring den Müll raus. | britisch auch: Unsinn!
neighbour | Nachbar, Nachbarin | neighbor | Our neighbours are nice. | Unsere Nachbarn sind nett. |
rent | Miete; mieten | | The rent is high. | Die Miete ist hoch. |
landlord | Vermieter | | Call the landlord. | Ruf den Vermieter an. |
heating | Heizung | | The heating doesn't work. | Die Heizung geht nicht. |
light | Licht; leicht | | Turn on the light. | Mach das Licht an. |
turn on | einschalten | | Turn on the TV. | Schalt den Fernseher ein. |
turn off | ausschalten | | Turn off the lights. | Mach das Licht aus. |
broken | kaputt | | My phone is broken. | Mein Handy ist kaputt. |
tidy | ordentlich; aufräumen | | Tidy your room! | Räum dein Zimmer auf! |
> I live in a flat in the city centre. | Ich wohne in einer Wohnung im Stadtzentrum.
> Can you take out the rubbish? | Kannst du den Müll rausbringen?
> The heating is broken again. | Die Heizung ist schon wieder kaputt.
> Make yourself at home! | Fühl dich wie zu Hause!
> How much is the rent? | Wie hoch ist die Miete?
`},

{ key: "u25", title: "Arbeit & Büro", icon: "💼", lesson: "g25", items: `
office | Büro | | I work in an office. | Ich arbeite in einem Büro. |
company | Firma, Unternehmen | | a big company | ein großes Unternehmen |
colleague | Kollege, Kollegin | coworker | my colleagues | meine Kollegen |
boss | Chef, Chefin | | My boss is on holiday. | Meine Chefin ist im Urlaub. |
manager | Leiter(in), Manager(in) | | the sales manager | der Vertriebsleiter |
meeting | Besprechung, Meeting | | I'm in a meeting. | Ich bin in einer Besprechung. |
email | E-Mail | | I'll send you an email. | Ich schicke dir eine E-Mail. |
send | schicken, senden | | Send me the file. | Schick mir die Datei. |
computer | Computer | | My computer is slow. | Mein Computer ist langsam. |
laptop | Laptop | | Bring your laptop. | Bring deinen Laptop mit. |
printer | Drucker | | The printer isn't working. | Der Drucker funktioniert nicht. |
project | Projekt | | a new project | ein neues Projekt |
customer | Kunde, Kundin | | a happy customer | ein zufriedener Kunde |
client | Kunde, Mandant (Dienstleistung) | | a meeting with a client | ein Termin mit einer Kundin |
deadline | Frist, Abgabetermin | | The deadline is Friday. | Abgabe ist am Freitag. |
salary | Gehalt | | a good salary | ein gutes Gehalt |
full-time | Vollzeit | | I work full-time. | Ich arbeite Vollzeit. |
part-time | Teilzeit | | a part-time job | ein Teilzeitjob |
day off | freier Tag | | Tomorrow is my day off. | Morgen habe ich frei. |
busy day | anstrengender, voller Tag | | It was a busy day. | Es war ein voller Tag. |
break | Pause | | Let's take a break. | Machen wir eine Pause. |
job interview | Vorstellungsgespräch | | I have a job interview. | Ich habe ein Vorstellungsgespräch. |
work from home | im Homeoffice arbeiten | | I work from home on Fridays. | Freitags arbeite ich von zu Hause. | „Homeoffice“ versteht man im Englischen nicht!
team | Team | | our sales team | unser Vertriebsteam |
earn | verdienen | | How much do you earn? | Wie viel verdienst du? |
> I work for a small company in Munich. | Ich arbeite für eine kleine Firma in München. | work **for** + Firma
> I'm in a meeting until three. | Ich bin bis drei in einer Besprechung.
> Could you send me the report? | Könntest du mir den Bericht schicken?
> I'll be working from home tomorrow. | Morgen arbeite ich von zu Hause.
> What do you do for a living? | Womit verdienst du dein Geld?
`},

{ key: "u26", title: "Handy, Internet & Nachrichten", icon: "📱", items: `
phone / mobile | Handy | cell phone / cell | My phone is dead. | Mein Akku ist leer. | „Handy“ ist kein englisches Wort!
call | anrufen; Anruf | | I'll call you later. | Ich ruf dich später an. |
text | SMS, Nachricht; schreiben | | Text me when you're home. | Schreib mir, wenn du zu Hause bist. |
message | Nachricht | | I got your message. | Ich habe deine Nachricht bekommen. |
app | App | | Download the app. | Lade die App herunter. |
download | herunterladen | | Download the file. | Lade die Datei herunter. |
password | Passwort | | I forgot my password. | Ich habe mein Passwort vergessen. |
internet | Internet | | The internet is down. | Das Internet ist ausgefallen. |
online | online | | Book online. | Buch online. |
website | Webseite | | Check the website. | Schau auf der Webseite nach. |
charger | Ladegerät | | Can I borrow your charger? | Kann ich dein Ladegerät leihen? |
charge | aufladen | | I need to charge my phone. | Ich muss mein Handy laden. |
battery | Akku, Batterie | | My battery is low. | Mein Akku ist fast leer. |
screen | Bildschirm | | The screen is broken. | Der Bildschirm ist kaputt. |
photo | Foto | | Can you take a photo of us? | Kannst du ein Foto von uns machen? | take a photo – nicht „make“
video call | Videoanruf | | Let's have a video call. | Lass uns videotelefonieren. |
signal | Empfang, Signal | | There's no signal here. | Hier gibt es keinen Empfang. |
voicemail | Mailbox | | Leave a voicemail. | Sprich auf die Mailbox. |
account | Konto, Benutzerkonto | | Create an account. | Erstelle ein Konto. |
log in | sich anmelden | | I can't log in. | Ich kann mich nicht anmelden. |
link | Link | | Send me the link. | Schick mir den Link. |
update | aktualisieren; Update | | Update the app. | Aktualisiere die App. |
reply | antworten; Antwort | | Please reply soon. | Bitte antworte bald. |
> My battery's about to die. | Mein Akku ist gleich leer.
> I'll text you the address. | Ich schicke dir die Adresse per Nachricht.
> Sorry, you're breaking up. | Entschuldigung, die Verbindung bricht ab.
> Can you send me the link? | Kannst du mir den Link schicken?
> What's the Wi-Fi password? | Wie lautet das WLAN-Passwort?
`},

{ key: "u27", title: "Freizeit & Hobbys", icon: "🎶", lesson: "g27", items: `
free time | Freizeit | | What do you do in your free time? | Was machst du in deiner Freizeit? |
music | Musik | | I love music. | Ich liebe Musik. |
song | Lied | | my favourite song | mein Lieblingslied |
sing | singen | | She sings in a choir. | Sie singt in einem Chor. |
dance | tanzen; Tanz | | Let's dance! | Lass uns tanzen! |
play | spielen | | I play the guitar. | Ich spiele Gitarre. | Instrumente mit „the“
football | Fußball | soccer | Do you play football? | Spielst du Fußball? | US: football = American Football
sport | Sport | sports | I do a lot of sport. | Ich mache viel Sport. |
gym | Fitnessstudio | | I go to the gym twice a week. | Ich gehe zweimal pro Woche ins Fitnessstudio. |
run | laufen, rennen | | I run in the park. | Ich laufe im Park. |
hiking | Wandern | | We love hiking. | Wir wandern gern. |
cinema | Kino | movie theater | Let's go to the cinema. | Lass uns ins Kino gehen. |
film | Film | movie | a good film | ein guter Film |
theatre | Theater | theater | a night at the theatre | ein Abend im Theater |
museum | Museum | | the British Museum | das British Museum |
concert | Konzert | | a concert in the park | ein Konzert im Park |
game | Spiel | | a board game | ein Brettspiel |
photography | Fotografie | | I'm into photography. | Ich fotografiere gern. |
painting | Malerei; Gemälde | | a beautiful painting | ein schönes Gemälde |
travel | reisen; Reisen | | I love to travel. | Ich reise wahnsinnig gern. |
favourite | Lieblings- | favorite | my favourite film | mein Lieblingsfilm |
fun | Spaß; lustig | | Have fun! | Viel Spaß! |
be into | auf etwas stehen, begeistert sein | | I'm really into yoga. | Ich mache total gern Yoga. | locker
hate | hassen | | I hate running. | Ich hasse Laufen. |
prefer | bevorzugen, lieber mögen | | I prefer tea. | Ich trinke lieber Tee. |
> I like reading and cooking. | Ich lese und koche gern. | nach like/love/hate: Verb + ing
> What do you do in your free time? | Was machst du in deiner Freizeit?
> I'm really into hiking at the moment. | Ich wandere gerade total gern.
> Do you fancy going to the cinema? | Hast du Lust, ins Kino zu gehen? | fancy = Lust haben (britisch)
> I'd love to! | Sehr gerne!
`},

{ key: "u28", title: "Vergangenheit: regelmäßig", icon: "⏪", lesson: "g28", items: `
worked | arbeitete; habe gearbeitet | | I worked late yesterday. | Ich habe gestern lange gearbeitet. |
played | spielte; habe gespielt | | We played cards. | Wir haben Karten gespielt. |
watched | schaute; habe angeschaut | | I watched a film. | Ich habe einen Film geschaut. |
visited | besuchte; habe besucht | | We visited my aunt. | Wir haben meine Tante besucht. |
stayed | blieb; bin geblieben | | We stayed at home. | Wir sind zu Hause geblieben. |
lived | lebte; habe gelebt | | I lived in Dublin for a year. | Ich habe ein Jahr in Dublin gelebt. |
arrived | kam an; bin angekommen | | We arrived at midnight. | Wir sind um Mitternacht angekommen. |
travelled | reiste; bin gereist | traveled | We travelled by train. | Wir sind mit dem Zug gereist. | britisch mit ll
called | rief an; habe angerufen | | I called you twice. | Ich habe dich zweimal angerufen. |
cooked | kochte; habe gekocht | | She cooked dinner. | Sie hat Abendessen gekocht. |
walked | ging zu Fuß; bin gelaufen | | We walked to the beach. | Wir sind zum Strand gelaufen. |
studied | studierte; habe studiert | | I studied in Vienna. | Ich habe in Wien studiert. | y → ied
stopped | hielt an; habe aufgehört | | It stopped raining. | Es hat aufgehört zu regnen. | Konsonant verdoppelt
tried | versuchte; habe versucht | | I tried to call you. | Ich habe versucht, dich anzurufen. |
started | begann; habe angefangen | | The film started late. | Der Film hat spät angefangen. | -ted spricht man als eigene Silbe
wanted | wollte | | I wanted to tell you. | Ich wollte es dir sagen. |
needed | brauchte | | We needed help. | Wir brauchten Hilfe. |
liked | mochte | | I liked the hotel. | Mir hat das Hotel gefallen. |
asked | fragte; habe gefragt | | I asked the waiter. | Ich habe den Kellner gefragt. |
opened | öffnete; habe geöffnet | | She opened the door. | Sie hat die Tür geöffnet. |
was | war (ich, er, sie, es) | | I was tired. | Ich war müde. |
were | waren; warst; wart | | We were in Rome. | Wir waren in Rom. |
did | tat; (Hilfsverb in Frage/Verneinung) | | Did you like it? | Hat es dir gefallen? |
didn't | (Verneinung in der Vergangenheit) | | I didn't sleep well. | Ich habe nicht gut geschlafen. |
last night | gestern Abend, letzte Nacht | | What did you do last night? | Was hast du gestern Abend gemacht? |
> What did you do at the weekend? | Was hast du am Wochenende gemacht?
> We stayed in a lovely hotel. | Wir haben in einem schönen Hotel gewohnt.
> Did you enjoy the trip? | Hat dir die Reise gefallen?
> I didn't like the food. | Das Essen hat mir nicht geschmeckt.
> Where were you yesterday? | Wo warst du gestern?
`},

{ key: "u29", title: "Vergangenheit: unregelmäßig", icon: "🔀", lesson: "g29", items: `
went | ging; fuhr; bin gegangen | | We went to Spain. | Wir sind nach Spanien gefahren. | go – went – gone
had | hatte; habe gehabt | | I had a great time. | Ich hatte eine tolle Zeit. | have – had – had
made | machte; habe gemacht | | I made a cake. | Ich habe einen Kuchen gebacken. |
got | bekam; wurde; kam an | | I got your email. | Ich habe deine E-Mail bekommen. | get – got – got (US: gotten)
saw | sah; habe gesehen | | I saw her yesterday. | Ich habe sie gestern gesehen. | see – saw – seen
came | kam; bin gekommen | | She came late. | Sie kam spät. | come – came – come
took | nahm; habe genommen | | We took the bus. | Wir haben den Bus genommen. | take – took – taken
gave | gab; habe gegeben | | He gave me his number. | Er hat mir seine Nummer gegeben. |
ate | aß; habe gegessen | | We ate fish and chips. | Wir haben Fish and Chips gegessen. | eat – ate – eaten
drank | trank; habe getrunken | | I drank too much coffee. | Ich habe zu viel Kaffee getrunken. |
bought | kaufte; habe gekauft | | I bought a new jacket. | Ich habe eine neue Jacke gekauft. | buy – bought – bought
found | fand; habe gefunden | | I found my keys. | Ich habe meine Schlüssel gefunden. |
lost | verlor; habe verloren | | I lost my wallet. | Ich habe meinen Geldbeutel verloren. |
met | traf; habe getroffen | | We met in London. | Wir haben uns in London kennengelernt. |
said | sagte; habe gesagt | | She said yes! | Sie hat ja gesagt! | gesprochen „sed“
told | erzählte; habe gesagt | | He told me a story. | Er hat mir eine Geschichte erzählt. |
thought | dachte; habe gedacht | | I thought you were busy. | Ich dachte, du hättest zu tun. |
knew | wusste; kannte | | I knew it! | Ich wusste es! |
ran | rannte, lief | | I ran to the station. | Ich bin zum Bahnhof gerannt. | run – ran – run
felt | fühlte | | I felt sick. | Mir war schlecht. |
slept | schlief; habe geschlafen | | I slept badly. | Ich habe schlecht geschlafen. |
wrote | schrieb; habe geschrieben | | She wrote a letter. | Sie hat einen Brief geschrieben. |
forgot | vergaß; habe vergessen | | I forgot your name. | Ich habe deinen Namen vergessen. |
began | begann | | It began to rain. | Es fing an zu regnen. |
spent | verbrachte; gab aus | | We spent a week in Cornwall. | Wir haben eine Woche in Cornwall verbracht. |
> We went to Scotland last summer. | Letzten Sommer waren wir in Schottland.
> I lost my phone on the train. | Ich habe mein Handy im Zug verloren.
> We had a great time! | Wir hatten eine tolle Zeit!
> Where did you buy that? | Wo hast du das gekauft?
> I didn't see him. | Ich habe ihn nicht gesehen. | nach „didn't“ steht die Grundform: see
`},

{ key: "u30", title: "Pläne & Zukunft", icon: "🔮", lesson: "g30", items: `
will | werden (Zukunft) | | I'll call you tomorrow. | Ich ruf dich morgen an. |
won't | werde nicht | | I won't be late. | Ich komme nicht zu spät. | = will not
going to | vorhaben zu; wird gleich | gonna | I'm going to visit my parents. | Ich werde meine Eltern besuchen. | gonna = gesprochene Form
plan | Plan; planen | | What are your plans? | Was hast du vor? |
future | Zukunft | | in the future | in der Zukunft |
tomorrow morning | morgen früh | | See you tomorrow morning. | Bis morgen früh. |
next year | nächstes Jahr | | Next year I'm moving to London. | Nächstes Jahr ziehe ich nach London. |
this summer | diesen Sommer | | What are you doing this summer? | Was machst du diesen Sommer? |
hope | hoffen; Hoffnung | | I hope so. | Ich hoffe es. |
probably | wahrscheinlich | | I'll probably stay home. | Ich bleibe wahrscheinlich zu Hause. |
definitely | auf jeden Fall | | I'll definitely come. | Ich komme auf jeden Fall. |
perhaps | vielleicht | | Perhaps next time. | Vielleicht nächstes Mal. |
decide | entscheiden | | I can't decide. | Ich kann mich nicht entscheiden. |
move | umziehen; bewegen | | We're moving next month. | Wir ziehen nächsten Monat um. |
trip | Reise, Ausflug | | a business trip | eine Geschäftsreise |
dream | Traum; träumen | | It's my dream. | Das ist mein Traum. |
promise | versprechen | | I promise! | Versprochen! |
idea | Idee | | Good idea! | Gute Idee! |
ready | bereit, fertig | | Are you ready? | Bist du bereit? |
someday | eines Tages | | Someday I'll live by the sea. | Eines Tages werde ich am Meer leben. |
in two weeks | in zwei Wochen | | I'm back in two weeks. | Ich bin in zwei Wochen zurück. | „in“ = in, nicht nach
look forward to | sich freuen auf | | I'm looking forward to it. | Ich freue mich darauf. |
> What are you doing this weekend? | Was machst du dieses Wochenende? | Feste Pläne: Verlaufsform
> I think it'll rain later. | Ich glaube, es regnet später.
> I'm going to learn to drive. | Ich werde den Führerschein machen.
> I'll help you! | Ich helfe dir! | spontane Entscheidung: will
> I'm looking forward to seeing you! | Ich freue mich darauf, dich zu sehen! | nach „to“ steht hier -ing
`},

{ key: "u31", title: "Liebe & Beziehungen", icon: "❤️", items: `
in love | verliebt | | They're very much in love. | Sie sind sehr verliebt. |
fall in love | sich verlieben | | They fell in love in Paris. | Sie haben sich in Paris verliebt. |
go out with | mit jemandem gehen; ausgehen mit | | Are you going out with him? | Bist du mit ihm zusammen? |
relationship | Beziehung | | a long relationship | eine lange Beziehung |
couple | Paar | | They're a lovely couple. | Sie sind ein schönes Paar. |
kiss | Kuss; küssen | | a kiss on the cheek | ein Kuss auf die Wange |
hug | Umarmung; umarmen | | Give me a hug! | Lass dich drücken! |
miss | vermissen; verpassen | | I miss you. | Ich vermisse dich. |
get married | heiraten | | We're getting married in June. | Wir heiraten im Juni. |
wedding | Hochzeit | | a summer wedding | eine Sommerhochzeit |
engaged | verlobt | | They're engaged! | Sie sind verlobt! |
divorced | geschieden | | My parents are divorced. | Meine Eltern sind geschieden. |
break up | Schluss machen, sich trennen | | They broke up last year. | Sie haben sich letztes Jahr getrennt. |
argue | streiten | | We never argue. | Wir streiten nie. |
trust | vertrauen; Vertrauen | | I trust you. | Ich vertraue dir. |
care about | sich sorgen um, wichtig sein | | I care about you. | Du bist mir wichtig. |
darling | Liebling | honey | Thank you, darling. | Danke, Liebling. |
sweetheart | Schatz, Liebling | | Good night, sweetheart. | Gute Nacht, Schatz. |
crush | Schwärmerei | | I have a crush on him. | Ich bin in ihn verknallt. |
jealous | eifersüchtig | | Don't be jealous. | Sei nicht eifersüchtig. |
romantic | romantisch | | a romantic dinner | ein romantisches Abendessen |
anniversary | Jahrestag | | our wedding anniversary | unser Hochzeitstag |
> I love you. | Ich liebe dich. | wird im Englischen etwas schneller gesagt als „Ich liebe dich“
> Would you like to go out with me? | Hast du Lust, mit mir auszugehen?
> We met at a friend's party. | Wir haben uns auf einer Party bei Freunden kennengelernt.
> I really miss you. | Ich vermisse dich sehr.
> Congratulations on your engagement! | Herzlichen Glückwunsch zur Verlobung!
`},

{ key: "u32", title: "Kochen & Küche", icon: "🍳", items: `
recipe | Rezept (Kochen) | | a family recipe | ein Familienrezept | nicht mit prescription verwechseln
ingredients | Zutaten | | What are the ingredients? | Was sind die Zutaten? |
cut | schneiden | | Cut the onions. | Schneide die Zwiebeln. |
boil | kochen (in Wasser) | | Boil the pasta. | Koch die Nudeln. |
fry | braten | | Fry the eggs. | Brate die Eier. |
bake | backen | | I bake bread on Sundays. | Sonntags backe ich Brot. |
roast | im Ofen braten; Braten | | roast chicken | Brathähnchen |
mix | mischen, verrühren | | Mix everything together. | Alles verrühren. |
add | hinzufügen | | Add salt and pepper. | Salz und Pfeffer dazugeben. |
salt | Salz | | a pinch of salt | eine Prise Salz |
pepper | Pfeffer; Paprika | bell pepper | a red pepper | eine rote Paprika |
onion | Zwiebel | | Chop an onion. | Hack eine Zwiebel. |
garlic | Knoblauch | | lots of garlic | viel Knoblauch |
tomato | Tomate | | tomato soup | Tomatensuppe | britisch „to-MAA-to“, amerikanisch „to-MEI-to“
oil | Öl | | olive oil | Olivenöl |
butter | Butter | | bread and butter | Butterbrot |
flour | Mehl | | 200 grams of flour | 200 Gramm Mehl | gleich ausgesprochen wie flower
pan | Pfanne | | Heat the pan. | Erhitze die Pfanne. |
pot | Topf | | a big pot of soup | ein großer Topf Suppe |
oven | Backofen | | Preheat the oven. | Den Ofen vorheizen. |
knife | Messer | | a sharp knife | ein scharfes Messer | k stumm
spoon | Löffel | | a spoon of sugar | ein Löffel Zucker |
fork | Gabel | | knife and fork | Messer und Gabel |
plate | Teller | | Pass me a plate. | Gib mir einen Teller. |
washing-up | Abwasch | dishes | I'll do the washing-up. | Ich mach den Abwasch. |
> What shall we cook tonight? | Was kochen wir heute Abend?
> Can you pass me the salt, please? | Kannst du mir bitte das Salz geben?
> It smells delicious! | Das riecht köstlich!
> Bake it for thirty minutes. | Backe es dreißig Minuten.
> I'll do the washing-up. | Ich mache den Abwasch.
`},

{ key: "u33", title: "Kleidung & Farben", icon: "👕", lesson: "g33", items: `
clothes | Kleidung | | I need new clothes. | Ich brauche neue Kleidung. | gesprochen fast wie „klous“
shirt | Hemd | | a white shirt | ein weißes Hemd |
T-shirt | T-Shirt | | a black T-shirt | ein schwarzes T-Shirt |
jumper | Pullover | sweater | a warm jumper | ein warmer Pulli |
trousers | Hose | pants | a pair of trousers | eine Hose | UK pants = Unterhose!
jeans | Jeans | | blue jeans | Bluejeans |
dress | Kleid | | a red dress | ein rotes Kleid |
skirt | Rock | | a long skirt | ein langer Rock |
jacket | Jacke | | Take a jacket. | Nimm eine Jacke mit. |
coat | Mantel | | a winter coat | ein Wintermantel |
shoes | Schuhe | | new shoes | neue Schuhe |
trainers | Turnschuhe | sneakers | white trainers | weiße Sneaker |
hat | Hut, Mütze | | a sun hat | ein Sonnenhut |
wear | tragen (Kleidung) | | What are you wearing? | Was hast du an? |
put on | anziehen | | Put on your coat. | Zieh deinen Mantel an. |
take off | ausziehen | | Take off your shoes. | Zieh deine Schuhe aus. |
red | rot | | a red bus | ein roter Bus |
blue | blau | | blue eyes | blaue Augen |
green | grün | | green tea | grüner Tee |
yellow | gelb | | a yellow taxi | ein gelbes Taxi |
black | schwarz | | black coffee | schwarzer Kaffee |
white | weiß | | white wine | Weißwein |
grey | grau | gray | a grey sky | ein grauer Himmel |
brown | braun | | brown hair | braune Haare |
some | etwas, einige | | I need some new shoes. | Ich brauche neue Schuhe. |
any | (irgend)welche; (in Verneinung) kein | | Do you have any jeans in blue? | Haben Sie Jeans in Blau? |
> Do you have this in a smaller size? | Haben Sie das eine Nummer kleiner?
> These trousers are too long. | Diese Hose ist zu lang. | trousers ist immer Mehrzahl
> I don't have any clean clothes. | Ich habe keine saubere Kleidung.
> What colour is your car? | Welche Farbe hat dein Auto?
> That jacket really suits you. | Die Jacke steht dir richtig gut.
`},

{ key: "u34", title: "Am Flughafen", icon: "✈️", lesson: "g34", items: `
airport | Flughafen | | Let's meet at the airport. | Treffen wir uns am Flughafen. |
flight | Flug | | My flight is delayed. | Mein Flug hat Verspätung. |
plane | Flugzeug | airplane | The plane is full. | Das Flugzeug ist voll. |
passport | Reisepass | | Can I see your passport? | Kann ich Ihren Pass sehen? |
boarding pass | Bordkarte | | Here's your boarding pass. | Hier ist Ihre Bordkarte. |
gate | Gate, Flugsteig | | Go to gate 12. | Gehen Sie zu Gate 12. |
luggage | Gepäck | baggage | How much luggage do you have? | Wie viel Gepäck haben Sie? | immer Einzahl: no „luggages“
suitcase | Koffer | | My suitcase is too heavy. | Mein Koffer ist zu schwer. |
hand luggage | Handgepäck | carry-on | Only hand luggage. | Nur Handgepäck. |
check-in desk | Check-in-Schalter | | Where is the check-in desk? | Wo ist der Check-in-Schalter? |
security | Sicherheitskontrolle | | We're going through security. | Wir gehen durch die Sicherheitskontrolle. |
delayed | verspätet | | The flight is delayed by an hour. | Der Flug hat eine Stunde Verspätung. |
cancelled | gestrichen, abgesagt | canceled | My flight was cancelled. | Mein Flug wurde gestrichen. |
departure | Abflug, Abfahrt | | departures | Abflüge |
arrival | Ankunft | | arrivals | Ankünfte |
land | landen | | We land at ten. | Wir landen um zehn. |
boarding | Einsteigen (Flugzeug), Boarding | | Boarding starts at nine. | Das Boarding beginnt um neun. |
window seat | Fensterplatz | | A window seat, please. | Einen Fensterplatz, bitte. |
aisle seat | Platz am Gang | | I prefer an aisle seat. | Ich hätte lieber einen Gangplatz. | aisle: s stumm – „ail“
connecting flight | Anschlussflug | | I have a connecting flight. | Ich habe einen Anschlussflug. |
customs | Zoll | | go through customs | durch den Zoll gehen |
nothing to declare | nichts zu verzollen | | I have nothing to declare. | Ich habe nichts zu verzollen. |
ever | jemals, schon mal | | Have you ever been to Ireland? | Warst du schon mal in Irland? |
been | gewesen | | I've been to London twice. | Ich war schon zweimal in London. |
never been | noch nie gewesen | | I've never been to America. | Ich war noch nie in Amerika. |
> My flight has been cancelled. | Mein Flug wurde gestrichen.
> Is this the queue for check-in? | Ist das die Schlange für den Check-in?
> My suitcase didn't arrive. | Mein Koffer ist nicht angekommen.
> Have you ever been to New York? | Warst du schon mal in New York?
> Can I take this on the plane? | Darf ich das mit ins Flugzeug nehmen?
`},

{ key: "u35", title: "Gespräche führen", icon: "💬", lesson: "g35", items: `
I see | ach so, verstehe | | Oh, I see. | Ach so, verstehe. |
I mean | ich meine | | I mean, it's not bad. | Ich meine, es ist nicht schlecht. |
you know | weißt du | | It's, you know, complicated. | Es ist, weißt du, kompliziert. |
honestly | ehrlich gesagt | | Honestly, I don't know. | Ehrlich gesagt weiß ich es nicht. |
basically | im Grunde | | Basically, it's a good plan. | Im Grunde ist es ein guter Plan. |
exactly | genau | | Exactly! | Genau! |
absolutely | absolut, auf jeden Fall | | Absolutely! | Auf jeden Fall! |
I agree | ich stimme zu | | I agree with you. | Da bin ich deiner Meinung. |
I'm not sure | ich bin mir nicht sicher | | I'm not sure about that. | Da bin ich mir nicht sicher. |
it depends | es kommt darauf an | | It depends on the weather. | Das kommt aufs Wetter an. |
what about…? | was ist mit …? | | What about Friday? | Wie wäre es mit Freitag? |
how come? | wie kommt's? | | How come you're here? | Wie kommt's, dass du hier bist? |
let me think | lass mich überlegen | | Hmm, let me think. | Hm, lass mich überlegen. |
hang on | Moment mal | hold on | Hang on a second. | Warte kurz. |
sounds good | klingt gut | | Pizza tonight? – Sounds good! | Pizza heute Abend? – Klingt gut! |
you're kidding | das ist nicht dein Ernst | | You're kidding! | Das ist nicht dein Ernst! |
fair enough | na gut, verständlich | | Fair enough. | Na gut, verstehe ich. | sehr britisch
I don't mind | ist mir egal, macht mir nichts aus | | Tea or coffee? – I don't mind. | Tee oder Kaffee? – Egal. | höflicher als „egal“
never mind | macht nichts, schon gut | | Never mind, it's not important. | Macht nichts, ist nicht wichtig. |
what do you mean? | wie meinst du das? | | What do you mean? | Wie meinst du das? |
in other words | mit anderen Worten | | In other words, no. | Mit anderen Worten: nein. |
the thing is | die Sache ist die | | The thing is, I'm busy. | Die Sache ist, ich habe keine Zeit. |
> Sorry, what did you say? | Entschuldigung, was hast du gesagt?
> Could you say that again? | Könntest du das noch mal sagen?
> What's the word for…? | Wie heißt das Wort für …?
> Do you know what I mean? | Weißt du, was ich meine?
> That's a good point. | Das ist ein gutes Argument.
`},

{ key: "u36", title: "Notfall & Probleme", icon: "🚨", items: `
help! | Hilfe! | | Help! Call an ambulance! | Hilfe! Ruf einen Krankenwagen! |
emergency | Notfall | | It's an emergency. | Es ist ein Notfall. | Notruf: 999 (UK), 911 (US), 112 (EU)
police | Polizei | | Call the police! | Ruf die Polizei! |
ambulance | Krankenwagen | | We need an ambulance. | Wir brauchen einen Krankenwagen. |
fire | Feuer, Brand | | Fire! Get out! | Feuer! Raus hier! |
fire brigade | Feuerwehr | fire department | Call the fire brigade! | Ruf die Feuerwehr! |
hospital | Krankenhaus | | Take me to the hospital. | Bringen Sie mich ins Krankenhaus. | britisch oft ohne „the“: in hospital
accident | Unfall | | There's been an accident. | Es gab einen Unfall. |
injured | verletzt | | Is anyone injured? | Ist jemand verletzt? |
steal | stehlen | | Someone stole my bag. | Jemand hat meine Tasche gestohlen. | steal – stole – stolen
stolen | gestohlen | | My phone was stolen. | Mein Handy wurde gestohlen. |
wallet | Geldbeutel | | I lost my wallet. | Ich habe meinen Geldbeutel verloren. | Damen: purse
I'm lost | ich habe mich verirrt | | Excuse me, I'm lost. | Entschuldigung, ich habe mich verlaufen. |
problem | Problem | | We have a problem. | Wir haben ein Problem. |
dangerous | gefährlich | | Be careful, it's dangerous. | Vorsicht, das ist gefährlich. |
careful | vorsichtig | | Be careful! | Sei vorsichtig! |
safe | sicher; Safe | | Are you safe? | Bist du in Sicherheit? |
quick | schnell | | Quick, call a doctor! | Schnell, ruf einen Arzt! |
embassy | Botschaft | | the German embassy | die deutsche Botschaft |
report | melden; Bericht | | I want to report a theft. | Ich möchte einen Diebstahl melden. |
insurance | Versicherung | | Do you have travel insurance? | Hast du eine Reiseversicherung? |
lock | abschließen; Schloss | | I locked myself out. | Ich habe mich ausgesperrt. |
> Call an ambulance, please! | Rufen Sie bitte einen Krankenwagen!
> My wallet has been stolen. | Mein Geldbeutel wurde gestohlen.
> I've locked myself out. | Ich habe mich ausgesperrt.
> Is there a doctor here? | Ist hier ein Arzt?
> Where is the nearest police station? | Wo ist die nächste Polizeiwache?
`},

{ key: "u37", title: "Bank, Post & Ämter", icon: "🏛️", items: `
bank | Bank (Geldinstitut) | | I need to go to the bank. | Ich muss zur Bank. |
bank account | Bankkonto | checking account | I'd like to open a bank account. | Ich möchte ein Konto eröffnen. |
transfer | Überweisung; überweisen | | a bank transfer | eine Überweisung |
withdraw | abheben | | I want to withdraw money. | Ich möchte Geld abheben. |
PIN | PIN, Geheimzahl | | Enter your PIN. | Geben Sie Ihre PIN ein. |
fee | Gebühr | | Is there a fee? | Gibt es eine Gebühr? |
post office | Post (Filiale) | | Where is the post office? | Wo ist die Post? |
letter | Brief; Buchstabe | | I got a letter. | Ich habe einen Brief bekommen. |
parcel | Paket | package | I'd like to send this parcel. | Ich möchte dieses Paket schicken. |
stamp | Briefmarke | | A stamp for Germany, please. | Eine Briefmarke nach Deutschland, bitte. |
address | Adresse | | What's your address? | Wie ist deine Adresse? |
postcode | Postleitzahl | zip code | What's the postcode? | Wie ist die Postleitzahl? |
form | Formular | | Fill in this form. | Füllen Sie dieses Formular aus. |
fill in | ausfüllen | fill out | Please fill in the form. | Bitte füllen Sie das Formular aus. |
sign | unterschreiben; Schild | | Sign here, please. | Bitte hier unterschreiben. |
signature | Unterschrift | | Your signature, please. | Ihre Unterschrift, bitte. |
ID | Ausweis | | Do you have any ID? | Haben Sie einen Ausweis? |
date of birth | Geburtsdatum | | What's your date of birth? | Wie ist Ihr Geburtsdatum? |
surname | Nachname | last name | What's your surname? | Wie ist Ihr Nachname? |
first name | Vorname | | Your first name, please. | Ihr Vorname, bitte. |
council | Gemeinde, Stadtverwaltung | city hall | Register with the council. | Melde dich bei der Stadt an. |
office hours | Öffnungszeiten (Amt) | | What are your office hours? | Wann haben Sie geöffnet? |
document | Dokument | | Bring all your documents. | Bringen Sie alle Unterlagen mit. |
> I'd like to send this to Germany. | Ich möchte das nach Deutschland schicken.
> Could you spell your surname, please? | Könnten Sie bitte Ihren Nachnamen buchstabieren?
> Please fill in this form and sign here. | Bitte füllen Sie dieses Formular aus und unterschreiben Sie hier.
> How long does it take? | Wie lange dauert das?
> I need to change my address. | Ich muss meine Adresse ändern.
`},

{ key: "u38", title: "Feste & Feiertage", icon: "🎉", items: `
party | Party, Feier | | a birthday party | eine Geburtstagsfeier |
birthday | Geburtstag | | Happy birthday! | Alles Gute zum Geburtstag! |
present / gift | Geschenk | | a birthday present | ein Geburtstagsgeschenk |
celebrate | feiern | | Let's celebrate! | Lass uns feiern! |
Christmas | Weihnachten | | Merry Christmas! | Frohe Weihnachten! |
Christmas Eve | Heiligabend | | on Christmas Eve | an Heiligabend | Geschenke gibt's in UK/US meist am 25. Dezember
Boxing Day | 2. Weihnachtsfeiertag (26.12.) | | Shops are busy on Boxing Day. | Am Boxing Day ist in den Läden viel los. | britisch
New Year's Eve | Silvester | | a New Year's Eve party | eine Silvesterparty |
Happy New Year! | Frohes neues Jahr! | | Happy New Year, everyone! | Frohes neues Jahr, alle zusammen! |
Easter | Ostern | | Happy Easter! | Frohe Ostern! |
bank holiday | Feiertag (gesetzlich) | public holiday | Monday is a bank holiday. | Montag ist Feiertag. | britisch
Thanksgiving | Erntedank (USA) | | We eat turkey at Thanksgiving. | An Thanksgiving essen wir Truthahn. | 4. Donnerstag im November
Halloween | Halloween | | trick or treat | Süßes oder Saures |
invite | einladen | | I'd like to invite you. | Ich möchte dich einladen. | Einladen zum Zahlen: „It's on me.“
invitation | Einladung | | Thanks for the invitation. | Danke für die Einladung. |
guest | Gast | | We have guests tonight. | Wir haben heute Abend Gäste. |
congratulations | herzlichen Glückwunsch | | Congratulations on your new job! | Glückwunsch zum neuen Job! | congratulations **on**
cheers! | prost! | | Cheers, everyone! | Prost allerseits! |
tradition | Tradition | | It's a family tradition. | Das ist eine Familientradition. |
fireworks | Feuerwerk | | Bonfire Night fireworks | das Feuerwerk an der Bonfire Night |
decorate | dekorieren, schmücken | | We decorate the tree. | Wir schmücken den Baum. |
church | Kirche | | an old church | eine alte Kirche |
> Happy birthday! Here's a little present. | Alles Gute zum Geburtstag! Hier ist ein kleines Geschenk.
> What are you doing for Christmas? | Was machst du an Weihnachten?
> Thanks for having me! | Danke für die Einladung! | sagt man beim Gehen zum Gastgeber
> Congratulations on your wedding! | Herzlichen Glückwunsch zur Hochzeit!
> Have a great time! | Viel Spaß!
`},

{ key: "u39", title: "Reisen & Sightseeing", icon: "🗺️", items: `
sightseeing | Besichtigung, Sightseeing | | We went sightseeing. | Wir haben uns die Stadt angeschaut. |
tourist | Tourist(in) | | It's full of tourists. | Es ist voller Touristen. |
tour | Führung, Rundfahrt | | a guided tour | eine Führung |
map | Karte, Stadtplan | | Do you have a map? | Haben Sie einen Stadtplan? |
guidebook | Reiseführer (Buch) | | It's in the guidebook. | Das steht im Reiseführer. |
castle | Burg, Schloss | | Edinburgh Castle | die Burg von Edinburgh |
cathedral | Kathedrale, Dom | | St Paul's Cathedral | die St.-Pauls-Kathedrale |
bridge | Brücke | | Tower Bridge | die Tower Bridge |
square | Platz | | the main square | der Hauptplatz |
old town | Altstadt | | Let's walk around the old town. | Lass uns durch die Altstadt laufen. |
city centre | Stadtzentrum | downtown | in the city centre | im Stadtzentrum |
tourist information | Touristeninformation | | Ask at the tourist information. | Frag bei der Touristeninfo. |
entrance | Eingang; Eintritt | | Where's the entrance? | Wo ist der Eingang? |
exit | Ausgang | | Exit on the left. | Ausgang links. | in der U-Bahn steht oft „Way out“
admission | Eintritt | | Admission is free. | Der Eintritt ist frei. |
souvenir | Andenken, Souvenir | | a souvenir for my mum | ein Andenken für meine Mama |
selfie | Selfie | | Let's take a selfie! | Lass uns ein Selfie machen! |
viewpoint | Aussichtspunkt | lookout | the best viewpoint in town | der beste Aussichtspunkt der Stadt |
crowded | überfüllt | | It's very crowded. | Es ist sehr voll. |
worth it | es wert | | Is it worth it? | Lohnt sich das? |
recommend | empfehlen | | What do you recommend? | Was empfehlen Sie? |
backpack | Rucksack | | a heavy backpack | ein schwerer Rucksack | britisch auch: rucksack
> What should we see in Edinburgh? | Was sollten wir uns in Edinburgh anschauen?
> Is it worth visiting the castle? | Lohnt es sich, die Burg zu besuchen?
> Could you take a photo of us? | Könnten Sie ein Foto von uns machen?
> What time does the museum open? | Wann öffnet das Museum?
> Two adults and one child, please. | Zwei Erwachsene und ein Kind, bitte.
`},

{ key: "u40", title: "Schon, noch nicht, gerade", icon: "✅", lesson: "g40", items: `
have done | habe gemacht (Ergebnis zählt) | | I have done my homework. | Ich habe meine Hausaufgaben gemacht. |
has finished | hat beendet | | She has finished the report. | Sie hat den Bericht fertig. |
just | gerade (eben) | | I've just arrived. | Ich bin gerade angekommen. |
for ages | seit Ewigkeiten | | I haven't seen you for ages! | Ich habe dich ewig nicht gesehen! |
yet | schon (Frage); noch (nicht) | | Have you eaten yet? | Hast du schon gegessen? | am Satzende
not yet | noch nicht | | Not yet. | Noch nicht. |
recently | kürzlich, in letzter Zeit | lately | I haven't seen him recently. | Ich habe ihn in letzter Zeit nicht gesehen. |
so far | bisher | | So far, so good. | Bisher läuft alles gut. |
ever since | seitdem | | I've loved it ever since. | Seitdem liebe ich es. |
gone | gegangen, weg | | He's gone home. | Er ist nach Hause gegangen. | go – went – gone
seen | gesehen | | Have you seen my keys? | Hast du meine Schlüssel gesehen? |
eaten | gegessen | | I've never eaten haggis. | Ich habe noch nie Haggis gegessen. |
done | getan, gemacht | | Well done! | Gut gemacht! |
heard | gehört | | Have you heard the news? | Hast du die Nachrichten gehört? |
forgotten | vergessen | | I've forgotten my password. | Ich habe mein Passwort vergessen. |
written | geschrieben | | I've written to the landlord. | Ich habe dem Vermieter geschrieben. |
known | gekannt; gewusst | | I've known her for years. | Ich kenne sie seit Jahren. |
taken | genommen | | Someone has taken my seat. | Jemand hat sich auf meinen Platz gesetzt. |
lost my keys | meine Schlüssel verloren | | I've lost my keys! | Ich habe meine Schlüssel verloren! |
changed | verändert | | You haven't changed! | Du hast dich nicht verändert! |
in my life | in meinem Leben | | I've never seen that in my life. | Das habe ich noch nie im Leben gesehen. |
this week | diese Woche | | I've been busy this week. | Ich hatte diese Woche viel zu tun. |
> Have you finished yet? – Not yet. | Bist du schon fertig? – Noch nicht.
> I've just seen your message. | Ich habe deine Nachricht gerade gesehen.
> I've already booked the hotel. | Ich habe das Hotel schon gebucht.
> She's gone to the shops. | Sie ist einkaufen gegangen. | gone = ist noch weg
> Have you ever tried Indian food? | Hast du schon mal indisches Essen probiert?
`},

{ key: "u41", title: "Phrasal Verbs – die Basics", icon: "🧩", lesson: "g41", items: `
get on | einsteigen; gut auskommen | | We get on really well. | Wir verstehen uns richtig gut. |
get off | aussteigen | | Get off at the next stop. | Steig an der nächsten Haltestelle aus. |
pick up | abholen; aufheben | | I'll pick you up at eight. | Ich hole dich um acht ab. |
look for | suchen | | I'm looking for my keys. | Ich suche meine Schlüssel. |
look after | aufpassen auf, sich kümmern um | | Can you look after my dog? | Kannst du auf meinen Hund aufpassen? |
look up | nachschlagen | | Look it up online. | Schlag's online nach. |
find out | herausfinden | | I'll find out. | Ich finde es heraus. |
come back | zurückkommen | | When are you coming back? | Wann kommst du zurück? |
go out | ausgehen | | Let's go out tonight. | Lass uns heute Abend ausgehen. |
give up | aufgeben | | Don't give up! | Gib nicht auf! |
sit down | sich hinsetzen | | Please sit down. | Bitte setzen Sie sich. |
stand up | aufstehen (vom Sitzen) | | Stand up, please. | Bitte aufstehen. |
fill up | volltanken; auffüllen | | Fill it up, please. | Volltanken, bitte. |
call back | zurückrufen | | I'll call you back. | Ich ruf dich zurück. |
hurry up | sich beeilen | | Hurry up! | Beeil dich! |
slow down | langsamer werden | | Slow down! | Mach langsamer! |
throw away | wegwerfen | | Don't throw it away. | Wirf das nicht weg. |
set off | aufbrechen, losfahren | | We set off at six. | Wir sind um sechs losgefahren. |
run out of | ausgehen (Vorrat) | | We've run out of milk. | Uns ist die Milch ausgegangen. |
carry on | weitermachen | | Carry on! | Mach weiter! |
work out | trainieren; herausfinden; klappen | | It'll work out. | Das wird schon klappen. |
grow up | aufwachsen | | I grew up in Bavaria. | Ich bin in Bayern aufgewachsen. |
> Can you pick me up from the station? | Kannst du mich vom Bahnhof abholen?
> We've run out of coffee. | Der Kaffee ist alle.
> I'm looking for a cheap hotel. | Ich suche ein günstiges Hotel.
> Turn it off, please. | Schalt es bitte aus. | Pronomen steht in der Mitte: turn **it** off
> Where did you grow up? | Wo bist du aufgewachsen?
`},

{ key: "u42", title: "Mengen: much, many, a lot", icon: "🥄", lesson: "g42", items: `
much | viel (unzählbar) | | not much time | nicht viel Zeit | meist in Fragen & Verneinungen
many | viele (zählbar) | | many people | viele Leute |
a lot of | viel, viele | lots of | a lot of work | viel Arbeit | in positiven Sätzen am häufigsten
a little | ein wenig (unzählbar) | | a little milk | ein wenig Milch |
a few | ein paar (zählbar) | | a few minutes | ein paar Minuten |
little | wenig | | There's little hope. | Es gibt wenig Hoffnung. |
few | wenige | | Few people know that. | Wenige Leute wissen das. |
enough | genug | | Do we have enough chairs? | Haben wir genug Stühle? |
too much | zu viel | | That's too much. | Das ist zu viel. |
too many | zu viele | | too many tourists | zu viele Touristen |
all | alle; alles | | all my friends | alle meine Freunde |
every | jeder, jede, jedes (allgemein) | | every morning | jeden Morgen |
each | jeder, jede, jedes (einzeln) | | £5 each | je 5 Pfund |
both | beide | | both of us | wir beide |
none | keiner, keine | | None of them came. | Keiner von ihnen kam. |
half | Hälfte, halb | | half a kilo | ein halbes Kilo |
piece | Stück | | a piece of cake | ein Stück Kuchen |
bottle | Flasche | | a bottle of wine | eine Flasche Wein |
packet | Packung | pack | a packet of biscuits | eine Packung Kekse |
biscuit | Keks | cookie | Would you like a biscuit? | Möchtest du einen Keks? | US biscuit = Brötchen!
kilo | Kilo | | a kilo of apples | ein Kilo Äpfel |
slice | Scheibe | | a slice of bread | eine Scheibe Brot |
advice | Rat, Ratschlag | | Can I give you some advice? | Darf ich dir einen Rat geben? | unzählbar: no „advices“
information | Information(en) | | some information | ein paar Infos | unzählbar: no „informations“
> How much milk do we need? | Wie viel Milch brauchen wir?
> How many people are coming? | Wie viele Leute kommen?
> There's not enough time. | Es ist nicht genug Zeit.
> Could I have a few more minutes? | Könnte ich noch ein paar Minuten haben?
> I don't have much money left. | Ich habe nicht mehr viel Geld.
`},

{ key: "u43", title: "Nützliche Allrounder", icon: "🧰", items: `
thing | Ding, Sache | | What's that thing? | Was ist das für ein Ding? |
stuff | Zeug, Sachen | | Where's my stuff? | Wo sind meine Sachen? | locker, unzählbar
something | etwas | | I need something to eat. | Ich brauche etwas zu essen. |
anything | irgendetwas | | Do you need anything? | Brauchst du irgendwas? |
everything | alles | | Everything's fine. | Alles in Ordnung. |
someone / somebody | jemand | | Someone is at the door. | Jemand ist an der Tür. |
everyone / everybody | alle, jeder | | Hello, everyone! | Hallo zusammen! |
nobody / no one | niemand | | Nobody knows. | Niemand weiß es. |
somewhere | irgendwo | | It's somewhere here. | Es ist irgendwo hier. |
everywhere | überall | | I looked everywhere. | Ich habe überall gesucht. |
kind of / sort of | irgendwie, so ein | | It's kind of strange. | Das ist irgendwie seltsam. |
whatever | was auch immer; egal | | Whatever you want. | Was immer du willst. |
almost | fast | | I'm almost there. | Ich bin fast da. |
only | nur | | only five minutes | nur fünf Minuten |
even | sogar | | Even my mum likes it. | Sogar meine Mama mag es. |
else | sonst, noch | | Anything else? | Sonst noch etwas? |
instead | stattdessen | | Let's have tea instead. | Lass uns stattdessen Tee trinken. |
important | wichtig | | It's important. | Es ist wichtig. |
different | anders, verschieden | | That's different. | Das ist etwas anderes. |
the same | dasselbe, gleich | | It's the same for me. | Für mich das Gleiche. |
other | andere | | the other side | die andere Seite |
another | noch ein; ein anderer | | another coffee | noch einen Kaffee |
get | bekommen; holen; werden | | It's getting late. | Es wird spät. | eines der vielseitigsten Verben
> Is there anything else? | Gibt es sonst noch etwas?
> I'll have the same, please. | Für mich das Gleiche, bitte.
> Can I get you anything? | Kann ich dir etwas bringen?
> Everyone is here. | Alle sind da. | everyone + Einzahl: is
> I've got something for you. | Ich habe etwas für dich.
`},

{ key: "u44", title: "Höflich auf Englisch", icon: "🎩", lesson: "g44", items: `
would you mind…? | würde es dir etwas ausmachen …? | | Would you mind closing the window? | Würde es Ihnen etwas ausmachen, das Fenster zu schließen? | danach: Verb + ing
would you like…? | möchtest du …? | | Would you like a drink? | Möchtest du etwas trinken? |
I was wondering if… | ich wollte fragen, ob … | | I was wondering if you could help me. | Ich wollte fragen, ob Sie mir helfen könnten. | sehr höflich
if you don't mind | wenn es dir nichts ausmacht | | I'll sit here, if you don't mind. | Ich setze mich hierhin, wenn es Ihnen nichts ausmacht. |
I'm afraid | leider | | I'm afraid I can't come. | Leider kann ich nicht kommen. | wörtlich „ich fürchte“
unfortunately | leider, unglücklicherweise | | Unfortunately, it's sold out. | Leider ist es ausverkauft. |
would you be able to…? | könnten Sie vielleicht …? | | Would you be able to send it today? | Könnten Sie es vielleicht heute schicken? |
do you happen to know…? | wissen Sie zufällig …? | | Do you happen to know the time? | Wissen Sie zufällig, wie spät es ist? |
after you | nach Ihnen | | After you! | Nach Ihnen! |
go ahead | bitte, nur zu | | Can I sit here? – Go ahead. | Darf ich mich setzen? – Bitte sehr. |
don't worry | keine Sorge | | Don't worry about it. | Mach dir keine Gedanken. |
that's very kind | das ist sehr nett | | That's very kind of you. | Das ist sehr nett von Ihnen. |
I'd rather | ich würde lieber | | I'd rather stay in. | Ich würde lieber zu Hause bleiben. |
not really | eigentlich nicht | | Do you like it? – Not really. | Gefällt es dir? – Nicht so richtig. | britisch für ein freundliches „nein“
it's not my cup of tea | das ist nicht mein Ding | | Football is not my cup of tea. | Fußball ist nicht so mein Ding. |
apologise | sich entschuldigen | apologize | I apologise for the delay. | Ich entschuldige mich für die Verspätung. |
appreciate | zu schätzen wissen | | I really appreciate it. | Das weiß ich sehr zu schätzen. |
may I…? | darf ich …? | | May I ask a question? | Darf ich eine Frage stellen? |
manners | Manieren | | good manners | gute Manieren |
polite | höflich | | Be polite! | Sei höflich! |
rude | unhöflich | | That's rude. | Das ist unhöflich. |
> Would you mind waiting a moment? | Würde es Ihnen etwas ausmachen, kurz zu warten?
> I'm afraid we're fully booked. | Leider sind wir ausgebucht.
> I was wondering if I could leave early today. | Ich wollte fragen, ob ich heute früher gehen könnte.
> Sorry to bother you, but… | Entschuldigen Sie die Störung, aber …
> Thank you, I really appreciate it. | Danke, das weiß ich sehr zu schätzen.
`},

];
