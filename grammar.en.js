// English versions of the grammar lessons (grammar.js / grammar2.js).
// Same keys, same mini-markup, same quiz order (the correct answer index is the same).
window.LESSONS_EN = window.LESSONS_EN || {};
Object.assign(window.LESSONS_EN, {

g01: { title: "Pronunciation", body: `
Indonesian is pronounced almost exactly as it is written – one of the easiest pronunciations in the world. A few letters sound different from English, though:

| Letter | sounds like | Example |
| c | **ch** as in “church” | **cari** (look for) → “chari” |
| j | **j** as in “jungle” | **jalan** → “jalan” |
| y | **y** as in “yes” | **ya** → “ya” |
| ny | **ny** as in “canyon” | **nyanyi** (sing) |
| ng | as in “si**ng**er” – no hard g | **ngantuk** (sleepy) |
| ngg | as in “fi**ng**er” | **tinggal** (live) |
| s | always sharp as in “bus” | **saya** |
| r | rolled (tip of the tongue) | **rumah** |
| k at the end | a short stop, barely audible | **tidak** → “tida'” |
| e | usually short and soft as in “the” | **besar** (big) |
| é | sometimes open as in “bed” | **enak** (tasty) |
| u | always **oo** as in “food” | **susu** (milk) |
| a, i, o | always pure: “ah”, “ee”, “o” | **apa**, **ini**, **toko** |

## Stress
Indonesian sounds very even. There's usually a light stress on the second-to-last syllable: **ma**-kan, te-**ri**-ma ka-sih. Don't worry: words with the wrong stress are still understood.

## Greetings by time of day
| Greeting | When? |
| selamat pagi | morning until about 11 am |
| selamat siang | about 11 am–3 pm |
| selamat sore | about 3–6 pm |
| selamat malam | after dark |

= Selamat pagi! Apa kabar? :: Good morning! How are you?
= Baik, terima kasih. :: Fine, thank you.

> Among friends, **pagi!** or **halo!** is enough. When saying goodbye, the person leaving says **selamat tinggal** – and the person staying says **selamat jalan**.

> Tip: Tap 🔊 in the app as often as you like and repeat out loud. Speaking along out loud is the fastest way to good pronunciation.
`, quiz: [
  ["How do you pronounce **cari** (look for)?", ["chari", "kari", "tsari"], 0, "c always sounds like “ch” in “church”."],
  ["You're leaving a house in the evening and saying goodbye. What do you say?", ["selamat tinggal", "selamat jalan", "selamat pagi"], 0, "The one leaving says selamat tinggal (literally “safe staying” – for those who stay)."],
  ["What does **tolong** mean?", ["please (asking for help)", "sorry", "thank you"], 0, "tolong = please, when you ask someone to do something – and “Help!”."],
]},

g02: { title: "I, you & the right form of address", body: `
Indonesian has no articles, no grammatical gender and no verb endings. What matters instead is **how** you address someone.

| Indonesian | English | When? |
| saya | I | neutral, polite – always works |
| aku | I | with friends, family, partner |
| kamu | you | friends, people your age, younger people |
| Anda | you (formal) | formal, written, advertising |
| dia | he / she | one word for both! |
| kami | we (without you) | “we here, not you” |
| kita | we (with you) | “all of us together” |
| kalian | you (plural) | |
| mereka | they | |

## kami or kita?
**kami** excludes the person you're talking to – **kita** includes them.
= Kami dari Austria. :: We (my family and I – not you) are from Austria.
= Ayo kita makan! :: Come on, let's (all) eat!

## Instead of “you”: Bapak and Ibu
In conversation people rarely say **Anda**. It's much more natural to address people by their title – even in place of “you”.
| Title | For whom? |
| Bapak / Pak | men (older, people you respect) |
| Ibu / Bu | women (older, people you respect) |
| Mas | younger men (especially Java) |
| Mbak | younger women (especially Java) |
| Kak | people your age, slightly older (everywhere) |
| Dik | younger people |
= Bapak mau kopi? :: Would you like coffee? (literally: Would the gentleman like coffee?)
= Terima kasih, Bu. :: Thank you (to a woman).

> If you're unsure: **saya** for yourself, **Bapak/Ibu** for older strangers, **Kak** for young people. You'll almost always get it right.
`, quiz: [
  ["You're talking to friends and mean “all of us together”. Which word?", ["kita", "kami", "mereka"], 0, "kita includes the listeners, kami doesn't."],
  ["How do you politely address an older female shopkeeper?", ["Ibu", "Mas", "kamu"], 0, "Ibu (short: Bu) is the respectful form of address for women."],
  ["**dia** means …", ["he or she", "they", "you"], 0, "dia stands for one person – whether a man or a woman."],
]},

g03: { title: "Sentences without “to be” – and di, ke, dari", body: `
## No “to be” needed
For “I am”, “he is” and so on, Indonesian usually needs **no verb at all**. The words simply stand next to each other:
= Saya Anna. :: I am Anna.
= Dia orang Jerman. :: He/She is German.
= Rumah saya besar. :: My house is big.
> In formal texts there's **adalah** (“is”) before nouns. In everyday speech it's almost always left out – and it never comes before adjectives.

## ini and itu
**ini** = this, here (near) · **itu** = that, there (further away). Their **position** changes the meaning:
| Sentence | Meaning |
| Ini rumah. | This is a house. |
| Rumah ini besar. | This house is big. |
| Itu teman saya. | That is my friend. |
| Teman itu baik. | That friend is nice. |

## di – ke – dari
Three little words for places and directions:
| Word | Meaning | Question |
| di | in, at (where?) | di mana? – where? |
| ke | to (where to?) | ke mana? – where to? |
| dari | from (where from?) | dari mana? – where from? |
= Saya tinggal di Wina. :: I live in Vienna.
= Saya mau ke pasar. :: I want to go to the market.
= Kamu dari mana? :: Where are you from?

> **Mau ke mana?** (“Where are you going?”) is a perfectly normal greeting in Indonesia. A vague answer like **Jalan-jalan** (“Just walking around”) is completely fine.
`, quiz: [
  ["How do you say “I am tired” (tired = capek)?", ["Saya capek.", "Saya adalah capek.", "Capek saya."], 0, "No verb needed – and adalah never comes before adjectives."],
  ["“This hotel is expensive” is …", ["Hotel ini mahal.", "Ini hotel mahal.", "Ini mahal hotel."], 0, "Ini hotel mahal would mean “This is an expensive hotel”."],
  ["“Where to?” is …", ["ke mana?", "di mana?", "dari mana?"], 0, "ke = direction (where to), di = place (where), dari = origin (where from)."],
]},
});

Object.assign(window.LESSONS_EN, {

g04: { title: "Four ways to say “not”", body: `
Indonesian has four different words for “not” – each one has its own job:
| Word | For what? | Example |
| tidak | verbs and adjectives | Saya tidak lapar. – I'm not hungry. |
| bukan | nouns and pronouns | Ini bukan kopi. – This isn't coffee. |
| belum | not yet | Saya belum makan. – I haven't eaten yet. |
| jangan | prohibitions: “don't!” | Jangan pergi! – Don't go! |

## tidak or bukan?
Rule of thumb: if a **thing or a person** follows → **bukan**. If an **action or a quality** follows → **tidak**.
= Dia bukan guru. :: He/She isn't a teacher.
= Dia tidak bekerja. :: He/She doesn't work.

## belum – the optimistic no
To questions with **sudah** (“already?”) you answer **belum** (“not yet”) instead of tidak. It sounds as if it's still going to happen – and it's much more polite:
= Sudah menikah? – Belum. :: Married yet? – Not yet.
= Sudah makan? – Sudah. :: Have you eaten? – Yes, I have.

## Yes/no questions
Simply raise your voice at the end – or (more formally) put **apakah** at the beginning. Answer: **ya** or **tidak** (with nouns **bukan**).
= Kamu lapar? :: Are you hungry?
= Apakah ini hotel Anda? – Bukan. :: Is this your hotel? – No.

> **…, kan?** or **…, bukan?** at the end of a sentence means “…, right?”: **Kamu orang Jerman, kan?**

> In everyday speech **tidak** almost always becomes **nggak** or **gak**.
`, quiz: [
  ["**Ini ___ rumah saya.** (This isn't my house.)", ["bukan", "tidak", "jangan"], 0, "Before a noun (rumah) you use bukan."],
  ["“Have you eaten yet?” – You haven't. What do you answer?", ["Belum.", "Tidak.", "Jangan."], 0, "To sudah questions you answer with belum."],
  ["“Don't smoke!” (smoke = merokok)", ["Jangan merokok!", "Tidak merokok!", "Bukan merokok!"], 0, "Prohibitions and requests not to do something start with jangan."],
]},

g05: { title: "Numbers – a construction kit", body: `
Once you know 1 to 10, you can build almost every number.
| Number | Indonesian |
| 0 | nol (phone numbers: kosong) |
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

## 11 to 19: belas
**belas** means “-teen”. Only 11 is special: **se**belas (“one-teen”).
= sebelas :: 11
= dua belas :: 12
= tujuh belas :: 17

## Tens: puluh
**puluh** means “tens”. Simply read from left to right:
= dua puluh :: 20
= dua puluh satu :: 21 (literally: two tens one)
= sembilan puluh sembilan :: 99

## se- means “one”
Instead of **satu**, compound numbers use **se-**: **sepuluh** (10), **sebelas** (11), **seratus** (100), **seribu** (1000).

## Ordinal numbers
Put **ke-** in front: **kedua** (second), **ketiga** (third). Exception: **pertama** (first).
= Ini pertama kali saya ke sini. :: This is my first time here.
`, quiz: [
  ["What is **dua puluh lima**?", ["25", "52", "12"], 0, "Two tens (dua puluh) and five (lima)."],
  ["How do you say 13?", ["tiga belas", "tiga puluh", "sebelas tiga"], 0, "belas = -teen. tiga puluh would be 30."],
  ["“the first” is …", ["pertama", "kesatu", "satu kali"], 0, "pertama is the usual form; ke- is used from “second” (kedua) on."],
]},

g06: { title: "Most important first: word order", body: `
## Main thing first, description after
In Indonesian the **thing comes first** and the description after it – the opposite of English.
| Indonesian | literally | English |
| nasi goreng | rice fried | fried rice |
| air panas | water hot | hot water |
| rumah besar | house big | big house |
| teh manis | tea sweet | sweet tea |

## Possession: simply after it
The owner also comes **after** the thing:
= rumah saya :: my house (literally: house I)
= nama kamu :: your name
= mobil teman saya :: my friend's car

> Careful: **ikan goreng** = fried fish, but **goreng ikan** = fry fish.

## Phrase or sentence?
| | |
| rumah besar | a big house |
| Rumah itu besar. | The house is big. |
| Rumahnya besar. | The (or his/her) house is big. |

## No plural, no articles
**kopi** can mean “coffee”, “a coffee”, “the coffee” or “coffees” – the context decides.
`, quiz: [
  ["“Cold tea” (cold = dingin)", ["teh dingin", "dingin teh", "teh ini dingin"], 0, "The description comes after the noun. teh ini dingin would be a sentence: “This tea is cold”."],
  ["“My coffee” is …", ["kopi saya", "saya kopi", "saya punya kopi"], 0, "The owner goes at the end. saya punya kopi means “I have coffee”."],
  ["**ayam goreng** means …", ["fried chicken", "fry chicken", "chicken broth"], 0, "Thing first (ayam), description after (goreng)."],
]},

g07: { title: "Asking politely & ordering", body: `
The most important words for getting something:
| Word | Meaning | Example |
| mau | want, would like | Saya mau kopi. |
| minta | ask for, “I'd like” | Minta air, ya. |
| tolong | please (do something for me) | Tolong bantu saya. |
| boleh | may | Boleh saya duduk? |
| bisa | can | Bisa pelan-pelan? |
| silakan | please (go ahead) – when offering something | Silakan masuk. |

## tolong or silakan?
Both mean “please” – but in opposite directions:
- **tolong** → you **ask** someone to do something for you.
- **silakan** → you **offer** someone something or allow it.
= Tolong tutup pintunya. :: Please close the door.
= Silakan duduk. :: Please, have a seat.

## The magic “ya”
A **ya** at the end of a sentence makes any request softer and friendlier – a bit like “…, okay?” or “please”.
= Minta bonnya, ya. :: The bill, please.
= Satu lagi, ya. :: One more, please.

## Ordering at a warung
= Saya mau pesan nasi goreng satu. :: I'd like one fried rice, please.
= Tidak pakai es, ya. :: No ice, please.
= Makan di sini atau dibungkus? :: Eat in or take away?

> When ordering, the number often comes **after** the dish: **es teh dua** = two iced teas.
`, quiz: [
  ["You're asking someone to help you. How do you start?", ["Tolong …", "Silakan …", "Sama-sama …"], 0, "tolong = please (do it for me)."],
  ["You're offering a guest a chair:", ["Silakan duduk.", "Tolong duduk.", "Minta duduk."], 0, "silakan = please, go ahead."],
  ["“I'd like some water” – most natural:", ["Minta air, ya.", "Air minta saya.", "Saya air."], 0, "minta + thing + ya is the typical friendly request."],
]},

g08: { title: "Asking questions", body: `
Good news: the word order usually stays the same. The question word goes where the answer would be – or at the beginning.
| Question word | Meaning |
| apa | what |
| siapa | who |
| di mana | where |
| ke mana | where to |
| dari mana | where from |
| kapan | when |
| kenapa / mengapa | why |
| bagaimana (gimana) | how |
| berapa | how much, how many |
| yang mana | which one |
= Kamu mau makan apa? :: What do you want to eat?
= Kamu kerja di mana? :: Where do you work?
= Berapa harganya? :: How much is it?

## berapa – for anything with numbers
**berapa** asks about any number: price, age, time, phone number, quantity.
= Umurnya berapa? :: How old is he/she?
= Jam berapa? :: What time is it? / At what time?
= Nomor HP kamu berapa? :: What's your mobile number?

## Requests as questions
With **bisa** (can) and **boleh** (may), questions become polite requests:
= Bisa bantu saya? :: Can you help me?
= Boleh foto? :: May I take a photo?

> In colloquial speech **bagaimana** becomes **gimana**, and when surprised people often say **kok** instead of kenapa: “How come?”
`, quiz: [
  ["“When are you coming?”", ["Kapan kamu datang?", "Kenapa kamu datang?", "Bagaimana kamu datang?"], 0, "kapan = when, kenapa = why, bagaimana = how."],
  ["To ask about the price you use …", ["berapa", "apa", "yang mana"], 0, "berapa asks about any number."],
  ["**Kamu tinggal di mana?** means …", ["Where do you live?", "Where are you going?", "Where are you from?"], 0, "tinggal = live, di mana = where."],
]},

g09: { title: "Time without tenses", body: `
Indonesian verbs **never** change – whether it's yesterday, today or tomorrow. You can tell the time from little helper words or time expressions.
| Word | Meaning | Example |
| sudah | already (completed) | Saya sudah makan. – I've eaten. |
| belum | not yet | Saya belum makan. – I haven't eaten yet. |
| sedang | in the middle of | Saya sedang makan. – I'm eating right now. |
| akan | will (future) | Saya akan makan. – I will eat. |
| masih | still | Saya masih makan. – I'm still eating. |
| baru | only just | Saya baru makan. – I've only just eaten. |
| mau | about to, want | Saya mau makan. – I want to eat (now). |

## A time expression is often enough
When it's clear when something happens, you don't need a helper word at all:
= Kemarin saya ke pantai. :: Yesterday I went to the beach.
= Besok saya kerja. :: Tomorrow I'm working.
= Tadi saya lihat dia. :: I saw him/her earlier.

## tadi, nanti, dulu
- **tadi** = earlier (today, already past): **tadi pagi** = this morning (past)
- **nanti** = later (today, still to come): **nanti malam** = this evening
- **tadi malam** = last night
- **dulu** = formerly; also “first”: **Saya makan dulu.** – I'll eat first.

> Colloquially: **udah** instead of sudah, **lagi** instead of sedang – **Lagi makan.** = I'm eating right now.
`, quiz: [
  ["“I've already ordered” (order = pesan)", ["Saya sudah pesan.", "Saya akan pesan.", "Saya sedang pesan."], 0, "sudah = completed."],
  ["**Dia masih tidur.** means …", ["He/She is still asleep.", "He/She slept.", "He/She will sleep."], 0, "masih = still."],
  ["“This evening” (still to come) is …", ["nanti malam", "tadi malam", "malam lalu"], 0, "nanti = still to come. tadi malam was last night."],
]},
});

Object.assign(window.LESSONS_EN, {

g10: { title: "Verbs: the base form is enough", body: `
## Verbs never change
In everyday speech verbs are often used in their **base form**: **makan, minum, pergi, tidur, beli, lihat**. They don't change for person or for time.
= Saya makan. Kamu makan. Mereka makan. :: I eat. You eat. They eat.

## Short form and long form
In written language many verbs have a **prefix** (usually **me-** or **ber-**). In speech it's often dropped:
| Everyday | formal | Meaning |
| beli | membeli | buy |
| lihat | melihat | see |
| baca | membaca | read |
| tulis | menulis | write |
| kerja | bekerja | work |
| tanya | bertanya | ask |
You're learning the short forms now – so you can start speaking right away. The prefixes come later in their own lessons. If you know the base form, you'll recognise the long form too.

## Simply string verbs together
Verbs simply follow one another, like “go eat”:
= Saya mau pergi makan. :: I want to go and eat.
= Ayo pulang! :: Let's go home!

> Some verbs never take a prefix, not even formally: **makan, minum, tidur, pergi, datang, pulang, mandi, duduk, tinggal, mau, suka**.
`, quiz: [
  ["“We drink coffee.”", ["Kami minum kopi.", "Kami minumkan kopi.", "Kami diminum kopi."], 0, "The verb simply stays in its base form."],
  ["The long form of **beli** (buy) is …", ["membeli", "berbeli", "dibeli"], 0, "dibeli is the passive (“be bought”) – that comes later."],
  ["Which verb never takes a prefix, not even formally?", ["makan", "baca", "tulis"], 0, "makan always stays makan. baca → membaca, tulis → menulis."],
]},

g11: { title: "Plurals & doubling", body: `
Indonesian has no plural ending. Usually the context shows whether it's one or many.

## Doubling = many
If you double a noun, it becomes explicitly plural (often “all kinds of …”):
= anak-anak :: children
= buku-buku :: books
> If there's already a **number** or a **quantity word**, you do **not** double: **dua anak** (two children), **banyak orang** (many people).

## Doubling can do more
| Word | doubled | Meaning |
| jalan (walk) | jalan-jalan | stroll, travel around |
| pelan (slow) | pelan-pelan | nice and slowly |
| hati (heart) | hati-hati | careful! |
| kadang | kadang-kadang | sometimes |
| sama | sama-sama | you're welcome; both |
With verbs it often means “doing something casually”, with adjectives “very” or “all”.

## Family: age before gender
**kakak** = older sibling, **adik** = younger sibling. You only add the gender if needed: **kakak laki-laki** (older brother), **adik perempuan** (younger sister).
`, quiz: [
  ["“Three children” is …", ["tiga anak", "tiga anak-anak", "anak tiga-tiga"], 0, "With a number you don't double."],
  ["**pelan-pelan** means …", ["nice and slowly", "slowness", "many slow people"], 0, "Doubled adjectives often intensify."],
  ["Your younger sister is your …", ["adik perempuan", "kakak perempuan", "adik laki-laki"], 0, "adik = younger, perempuan = female."],
]},

g12: { title: "Big numbers, prices & bargaining", body: `
| Number | Indonesian |
| 100 | seratus |
| 200 | dua ratus |
| 1,000 | seribu |
| 5,000 | lima ribu |
| 10,000 | sepuluh ribu |
| 25,000 | dua puluh lima ribu |
| 150,000 | seratus lima puluh ribu |
| 1,000,000 | sejuta / satu juta |
| 2,500,000 | dua juta lima ratus ribu |

## How to read prices
Indonesia uses dots as thousand separators: **Rp 35.000** = 35,000 = **tiga puluh lima ribu (rupiah)**. “Rupiah” is often left out. Signs sometimes say **35rb** or **35K**.
= Ini berapa? – Tiga puluh lima ribu. :: How much is this? – 35,000.

## Bargaining at the market
At markets (not in supermarkets) bargaining is normal and meant in a friendly way:
= Bisa kurang? :: Can you go lower?
= Kalau dua puluh ribu, boleh? :: How about 20,000?
= Harga pas. :: Fixed price.
> A smile helps! And if you suggest a price and it's accepted, you should buy.

## Counting words
When counting, there's often a counting word between the number and the noun. The most important ones:
| Counting word | for | Example |
| orang | people | dua orang teman – two friends |
| buah | things in general | sebuah rumah – a house |
| ekor | animals | tiga ekor kucing – three cats |
In everyday speech the counting word is often left out: **dua kopi**.
`, quiz: [
  ["How do you say Rp 75.000?", ["tujuh puluh lima ribu", "tujuh lima ribu", "tujuh puluh lima ratus"], 0, "75 (tujuh puluh lima) thousand (ribu)."],
  ["“Can you go lower?”", ["Bisa kurang?", "Bisa lebih?", "Bisa mahal?"], 0, "kurang = less."],
  ["**seratus ribu** is …", ["100,000", "1,000,000", "10,000"], 0, "seratus (100) × ribu (1,000)."],
]},

g13: { title: "Where is what? Positions", body: `
You form positions with **di / ke / dari** + a word for the position:
| Indonesian | English |
| di depan | in front of, ahead |
| di belakang | behind, at the back |
| di samping / di sebelah | next to |
| di atas | on, above, upstairs |
| di bawah | under, below, downstairs |
| di dalam | in, inside |
| di luar | outside |
| di antara | between |
| di seberang | opposite |
= Tasnya di atas meja. :: The bag is on the table.
= Saya tunggu di depan hotel. :: I'll wait in front of the hotel.
= Toiletnya di belakang. :: The toilet is at the back.

## Giving directions
= Jalan lurus, lalu belok kiri. :: Go straight ahead, then turn left.
= Di lampu merah belok kanan. :: Turn right at the traffic lights.
= Dekat dari sini? :: Is it close to here?

## Transport with naik
For “go by, take” you say **naik** (literally: climb on):
= Saya naik ojek. :: I take a motorbike taxi.
= Naik apa ke sana? :: How do you get there?

> **Ojek** are motorbike taxis – via an app (e.g. Gojek, Grab) or on the street corner. Agree on the price first!
`, quiz: [
  ["“Behind the house”", ["di belakang rumah", "di depan rumah", "rumah belakang di"], 0, "di + position + place."],
  ["“I'll take a taxi.”", ["Saya naik taksi.", "Saya turun taksi.", "Saya taksi naik."], 0, "naik = get on/go by, turun = get off."],
  ["**lurus** means …", ["straight ahead", "left", "turn"], 0, "kiri = left, belok = turn."],
]},

g14: { title: "Telling the time & days of the week", body: `
## Time
Time = **jam** + number. Formally (timetables, appointments) you say **pukul**.
| Time | Indonesian |
| 3:00 | jam tiga |
| 3:10 | jam tiga lewat sepuluh |
| 3:15 | jam tiga lewat seperempat |
| 3:30 | jam setengah empat |
| 3:45 | jam empat kurang seperempat |
| 3:50 | jam empat kurang sepuluh |
> Careful: **setengah empat** means “half to four” = 3:30 – not 4:30!

## Adding the time of day
**jam tujuh pagi** (7 in the morning), **jam tiga sore** (3 pm), **jam delapan malam** (8 pm).

## jam or berapa jam?
| | |
| jam dua | two o'clock |
| dua jam | two hours |
| jam berapa? | what time? |
| berapa jam? | how many hours? |

## Days of the week
**Senin, Selasa, Rabu, Kamis, Jumat, Sabtu, Minggu** – almost all from Arabic. They're often preceded by **hari** (“day”): **hari Jumat** = Friday, **pada hari Senin** = on Monday.
= Kita bertemu hari Sabtu. :: Let's meet on Saturday.
= Hari ini hari apa? :: What day is it today?
> Small **minggu** = week, capital **Minggu** = Sunday.

> “Jam karet” (“rubber time”): in Indonesia, times in private life are often flexible. With authorities and at work, better be on time!
`, quiz: [
  ["**jam setengah delapan** is …", ["7:30", "8:30", "8:00"], 0, "setengah delapan = “half to eight” = 7:30."],
  ["“Two hours” is …", ["dua jam", "jam dua", "jam dua-dua"], 0, "Number before jam = duration, jam before number = time of day."],
  ["“Quarter to five”", ["jam lima kurang seperempat", "jam empat lewat seperempat", "jam setengah lima"], 0, "kurang = to, seperempat = quarter."],
]},

g15: { title: "How often? Experiences & “still”", body: `
## How often?
| Word | Meaning |
| selalu | always |
| biasanya | usually |
| sering | often |
| kadang-kadang | sometimes |
| jarang | rarely |
| tidak pernah | never |
These words usually come **before the verb**:
= Saya sering makan di warung. :: I often eat at warungs.
= Dia jarang minum kopi. :: He/She rarely drinks coffee.

## pernah – “ever, once”
**pernah** asks about experiences. Negative: **belum pernah** (never yet – but maybe one day) or **tidak pernah** (never).
= Kamu pernah ke Lombok? – Belum pernah. :: Have you ever been to Lombok? – Not yet.

## How many times? kali
**kali** = time(s): **sekali** (once), **dua kali** (twice). **se-** + a time word means “per”: **sehari** (per day), **seminggu** (per week), **sebulan** (per month).
= Minum obat tiga kali sehari. :: Take the medicine three times a day.

## lagi and masih
- **lagi** after a verb or noun = again, more: **Datang lagi, ya!** (Come again!), **satu lagi** (one more)
- **masih** = still: **Masih hujan.** (It's still raining.)
- **tidak … lagi** = no longer: **Saya tidak merokok lagi.** (I don't smoke any more.)
`, quiz: [
  ["“I've never been to Jakarta.”", ["Saya belum pernah ke Jakarta.", "Saya sudah ke Jakarta.", "Saya pernah tidak ke Jakarta."], 0, "belum pernah = never (yet)."],
  ["**dua kali seminggu** means …", ["twice a week", "in two weeks", "for two weeks"], 0, "kali = times, seminggu = per week."],
  ["“I don't drink coffee any more.”", ["Saya tidak minum kopi lagi.", "Saya masih minum kopi.", "Saya lagi minum kopi."], 0, "tidak … lagi = no longer. (Saya lagi minum kopi = I'm drinking coffee right now.)"],
]},

g16: { title: "Very, too, a bit: intensifiers", body: `
| Word | Position | Meaning | Example |
| sangat | before | very | sangat enak |
| sekali | after | very | enak sekali |
| banget | after (colloquial) | really, so | enak banget |
| terlalu | before | too | terlalu pedas |
| agak | before | a bit, rather | agak mahal |
| cukup | before | quite; enough | cukup bagus |
| kurang | before | not very, not enough | kurang manis |
| paling | before | the most …, -est | paling enak |
= Makanannya enak sekali! :: The food is really delicious!
= Ini terlalu mahal. :: This is too expensive.
= Kopinya kurang manis. :: The coffee isn't sweet enough.

> **kurang** is a polite trick: **kurang bagus** (“not so good”) sounds much gentler than **jelek** (“bad”). Indonesians avoid direct criticism.

## Expressing feelings
Feelings are adjectives – so again no “to be”:
= Saya senang sekali. :: I'm very happy.
= Saya agak capek. :: I'm a bit tired.
`, quiz: [
  ["“This is too spicy.”", ["Ini terlalu pedas.", "Ini pedas terlalu.", "Ini sangat pedas sekali."], 0, "terlalu comes before the adjective."],
  ["Where does **sekali** (“very”) go?", ["after the adjective", "before the adjective", "at the start of the sentence"], 0, "enak sekali – sangat goes before, sekali after."],
  ["Politely saying something isn't very good:", ["kurang bagus", "sangat jelek", "bagus sekali"], 0, "kurang softens criticism."],
]},
});

Object.assign(window.LESSONS_EN, {

g17: { title: "ada & punya: there is, have", body: `
## ada – “there is” and “be there”
**ada** is one of the most useful words of all:
= Ada air panas? :: Is there hot water?
= Ada kamar kosong? :: Is there a free room?
= Pak Budi ada? :: Is Mr Budi in?
= Tidak ada. :: There isn't any. / He/She isn't here.
In everyday speech **ada** also means “have”: **Saya ada pertanyaan.** – I have a question.

## punya – own
= Saya punya dua anak. :: I have two children.
= Kamu punya pacar? :: Do you have a boyfriend / girlfriend?
**Punya siapa?** = Whose is this? – **Punya saya.** = Mine.

## Still there or all gone?
= Masih ada? :: Are there any left?
= Sudah habis. :: All gone / sold out.

## -nya as “the”
Things you're already talking about often get **-nya** attached – like a definite article:
= Kamarnya bersih. :: The room is clean.
= Kuncinya di mana? :: Where is the key?
More about **-nya** in a later lesson.
`, quiz: [
  ["“Is there hot water?”", ["Ada air panas?", "Air panas punya?", "Ada panas air?"], 0, "ada = there is. And: air panas (thing before quality)."],
  ["“I have a car.”", ["Saya punya mobil.", "Saya ada di mobil.", "Mobil saya punya."], 0, "Saya ada di mobil would mean “I'm in the car”."],
  ["**Tidak ada.** means …", ["There isn't any.", "Never mind.", "It isn't expensive."], 0, "“Never mind” would be tidak apa-apa."],
]},

g18: { title: "Can, may, must", body: `
Modal verbs simply go before the main verb:
| Word | Meaning | Example |
| bisa | can | Saya bisa berenang. |
| boleh | may | Boleh saya masuk? |
| harus | must, have to | Saya harus kerja. |
| perlu | need to | Kamu perlu istirahat. |
| mau | want | Saya mau pulang. |
| ingin | wish (more refined) | Saya ingin ke Bali. |
| suka | like, enjoy | Saya suka masak. |

## Negatives
| | |
| tidak bisa | cannot |
| tidak boleh | may not |
| tidak harus | don't have to |
| tidak usah / tidak perlu | no need |
= Di sini tidak boleh merokok. :: You're not allowed to smoke here.
= Tidak usah, terima kasih. :: No need, thank you.
> **Tidak usah** is perfect for politely declining – bags, straws or help, for example.

## Advice
**sebaiknya** (it's best to) and **lebih baik** (better):
= Sebaiknya kamu bawa payung. :: You'd better take an umbrella.

## terserah – “as you like”
**Terserah (kamu).** = “Up to you / You decide.” Very common – but depending on the tone it can also sound annoyed!
`, quiz: [
  ["“May I park here?”", ["Boleh saya parkir di sini?", "Harus saya parkir di sini?", "Bisa saya parkir sini di?"], 0, "boleh = may."],
  ["Someone wants to give you a bag, you don't need one:", ["Tidak usah, terima kasih.", "Tidak boleh!", "Jangan tolong."], 0, "tidak usah = no need."],
  ["“I have to work tomorrow.”", ["Saya harus kerja besok.", "Saya boleh kerja besok.", "Saya kerja harus besok."], 0, "harus = must, goes before the verb."],
]},

g19: { title: "Commands & at the doctor's", body: `
## Just the verb
The shortest command is the verb on its own – but it sounds quite direct:
= Duduk! :: Sit down!
So people soften it:
| Word | Effect | Example |
| tolong … | please (for me) | Tolong panggil dokter. |
| silakan … | please (go ahead) | Silakan makan. |
| mohon … | please (formal, signs) | Mohon tunggu. |
| coba … | try | Coba lihat ini. |
| ayo … / … yuk | let's! come on! | Ayo makan! |
| mari … | let's (formal) | Mari kita mulai. |
| jangan … | don't! | Jangan khawatir. |
| … dulu | first | Duduk dulu. |
| … ya | makes it friendly | Tunggu sebentar, ya. |

## -lah
The ending **-lah** makes a command friendly but emphatic: **Makanlah!** (Do eat!). It sounds rather written – in everyday speech people prefer **ya** or **dong**.

## At the doctor's
= Saya sakit perut. :: I have a stomach ache.
= Sudah berapa hari? :: For how many days?
= Minum obat ini dua kali sehari. :: Take this medicine twice a day.
> **sakit** + body part = pain: **sakit kepala** (headache), **sakit gigi** (toothache). **Cepat sembuh!** = Get well soon!
`, quiz: [
  ["“Don't worry!” (worry = khawatir)", ["Jangan khawatir!", "Tidak khawatir!", "Silakan khawatir!"], 0, "jangan = don't."],
  ["You're telling friends to eat now:", ["Ayo makan!", "Tolong makan!", "Jangan makan!"], 0, "ayo = come on, let's."],
  ["“Toothache”", ["sakit gigi", "gigi sakit-sakit", "dokter gigi"], 0, "sakit + body part. dokter gigi = dentist."],
]},

g20: { title: "The versatile -nya", body: `
## Possession as an ending
Pronouns can be attached to a noun as an ending:
| Ending | from | Example |
| -ku | aku | rumahku – my house |
| -mu | kamu | namamu – your name |
| -nya | dia | mobilnya – his/her car |
= Siapa namamu? :: What's your name?
= Ini HP-ku. :: This is my phone.
> **-ku** and **-mu** are familiar. To stay polite, say **nama Bapak**, **rumah Ibu**.

## The all-purpose -nya
**-nya** is the most common ending in Indonesian. It can mean:
- **his / her**: **Ibunya guru.** – His mother is a teacher.
- **the** (already known): **Kopinya enak.** – The coffee is good.
- a **polite “your”** without a pronoun: **Namanya siapa?** – What's your name?
- turns words into nouns: **Harganya berapa?** – What's the price?
= Rumahnya di mana? :: Where is his/her house? – or: Where is the house?
> Rule of thumb: attach **-nya** to things you're talking about. It almost always sounds more natural.

## Asking about personal things politely
= Aslinya dari mana? :: Where are you originally from?
= Sudah lama di sini? :: Have you been here long?
= Kerja di mana? :: Where do you work?
Leaving out the pronoun is very common in Indonesian – and polite.
`, quiz: [
  ["“your friend” (familiar)", ["temanmu", "temanku", "temannya"], 0, "-mu comes from kamu."],
  ["**Makanannya enak.**", ["The food is delicious.", "I eat deliciously.", "Eat well!"], 0, "-nya = the (known) food."],
  ["“his/her name”", ["namanya", "namaku", "dia nama"], 0, "-nya comes from dia."],
]},

g21: { title: "Comparing & the little word yang", body: `
## Comparing
| Pattern | Meaning | Example |
| lebih … (daripada) | more …, -er (than) | lebih murah – cheaper |
| paling … | most …, -est | paling murah – cheapest |
| ter… | most …, -est (written) | termurah |
| se… | as … as | setinggi saya – as tall as me |
| kurang … | less … | kurang pedas – less spicy |
= Bali lebih kecil daripada Jawa. :: Bali is smaller than Java.
= Ini yang paling enak. :: This is the tastiest one.
= Harganya sama. :: The price is the same.

## yang – the linking word
**yang** means “the one that, which, who” and links a noun to a description:
= Saya mau yang merah. :: I'd like the red one.
= Orang yang tinggal di sana. :: The person who lives there.
= Kamar yang besar lebih mahal. :: The big room is more expensive.
You especially need **yang** when choosing (“the … one”) or when the description is longer.
> **Yang mana?** = Which one? – **Yang ini.** = This one.
`, quiz: [
  ["“Cheaper than here”", ["lebih murah daripada di sini", "paling murah di sini", "murah lebih di sini"], 0, "lebih + adjective + daripada."],
  ["“I'll take the big one.”", ["Saya ambil yang besar.", "Saya ambil besar yang.", "Saya yang ambil besar."], 0, "yang + description = “the … one”."],
  ["“most important”", ["paling penting", "lebih penting", "penting sekali paling"], 0, "paling = most."],
]},

g22: { title: "Linking sentences", body: `
| Word | Meaning | Everyday |
| dan | and | |
| atau | or | |
| tetapi | but | tapi |
| karena | because | soalnya |
| jadi | so, therefore | |
| kalau | if | kalo |
| waktu / ketika | when (in the past) | |
| sebelum | before | |
| sesudah / setelah | after | habis |
| supaya | so that | biar |
| meskipun | although | walaupun |
| sambil | while (at the same time) | |
| lalu / terus | then | |

The word order **always stays the same** – just like in English:
= Saya tidak datang karena saya sakit. :: I'm not coming because I'm sick.
= Kalau hujan, kita di rumah saja. :: If it rains, we'll just stay at home.
= Saya makan dulu, lalu mandi. :: I'll eat first, then shower.
= Meskipun capek, dia tetap kerja. :: Although he/she is tired, he/she keeps working.

## bahwa – that
= Saya tahu bahwa dia sibuk. :: I know that he/she is busy.
In conversation **bahwa** is often left out: **Saya pikir dia sudah pulang.**
`, quiz: [
  ["“I'm learning so that I can speak.”", ["Saya belajar supaya bisa bicara.", "Saya belajar karena bisa bicara.", "Saya belajar tapi bisa bicara."], 0, "supaya = so that."],
  ["Where does the verb go after **karena**?", ["as in a main clause – no change", "at the end of the sentence", "right at the start"], 0, "Indonesian doesn't change the word order in subordinate clauses."],
  ["**kalau** means …", ["if", "because", "although"], 0, "because = karena, although = meskipun."],
]},

g25: { title: "Formal language at work", body: `
At work, with authorities and with older people, Indonesian is much more formal than among friends.
| Everyday | formal | Meaning |
| aku | saya | I |
| kamu | Bapak / Ibu / Anda | you |
| nggak | tidak | not |
| udah | sudah | already |
| mau | ingin / akan | want / will |
| bilang | mengatakan | say |
| kasih | memberi / memberikan | give |
| tolong | mohon | please |
= Mohon maaf atas keterlambatannya. :: Please excuse the delay.
= Mohon ditunggu. :: Please wait.
= Bapak sudah makan siang? :: Have you had lunch yet, sir?

## Emails and messages
| Opening | Closing |
| Selamat pagi, Bapak/Ibu … | Terima kasih atas perhatiannya. |
| Dengan hormat, (Dear Sir or Madam) | Hormat saya, (Yours faithfully) |
| Yth. Bapak … (Dear Mr …) | Salam, (Regards) |

> Colleagues are often addressed as **Pak** / **Bu** + first name: **Pak Andi**, **Bu Sari**. Never call your boss **kamu**!

> By the way, “Sudah makan?” is often not a question about food at all, but simply a friendly gesture – like “How are you?”.
`, quiz: [
  ["Formal for “Please wait”", ["Mohon tunggu.", "Tunggu dong.", "Tunggu aja."], 0, "mohon = formal “please”."],
  ["How do you address your boss?", ["Bapak / Ibu", "kamu", "lo"], 0, "kamu and lo are too familiar for superiors."],
  ["**Terima kasih atas perhatiannya** fits …", ["at the end of a formal email", "when ordering at a warung", "in a chat among friends"], 0, "“Thank you for your attention” – a typical way to close a letter."],
]},

g28: { title: "The prefix ber-", body: `
**ber-** turns a word into a verb that usually describes a **state** or an activity **without a direct object**.
| Root | with ber- | Meaning |
| kerja (work) | bekerja | work |
| main (game) | bermain | play |
| temu | bertemu | meet |
| renang (swimming) | berenang | swim |
| libur (holiday) | berlibur | go on holiday |
| bicara | berbicara | speak |

## Forms
- Normally **ber-**: **ber**main, **ber**angkat
- Before **r**, and when the first syllable ends in “er”: **be-**: **be**renang, **be**kerja
- The only exception: **bel**ajar (learn)

## What else ber- can do
- “have”: **bernama** (be called, have a name), **beristri** (have a wife)
- clothing: **berbaju merah** (dressed in red)
- number: **berdua** (the two of us), **bertiga** (the three of us)
= Kami pergi berdua. :: The two of us are going.
= Dia sedang berlibur di Bali. :: He/She is on holiday in Bali.

> In everyday speech **ber-** is often dropped: **kerja**, **main**, **ketemu** (instead of bertemu), **belanja**. In writing it stays.
`, quiz: [
  ["“meet” (root: temu)", ["bertemu", "metemu", "ditemu"], 0, "ber- + temu."],
  ["Which form is correct?", ["berenang", "berrenang", "merenang"], 0, "Before r, ber- becomes be-."],
  ["**berdua** means …", ["the two of us, in a pair", "twice", "the second"], 0, "ber- + number = in a pair, as three …"],
]},
});

Object.assign(window.LESSONS_EN, {

g29: { title: "The prefix me-", body: `
**me-** forms active verbs that usually have an **object** (someone does something to something). The first letter of the root decides the form:
| Root starts with | Form | Example |
| l, m, n, r, w, y, ny, ng | me- | lihat → melihat |
| b, f | mem- | beli → membeli |
| p (drops) | mem- | pakai → memakai |
| c, d, j | men- | cari → mencari |
| t (drops) | men- | tulis → menulis |
| s (drops) | meny- | sapu → menyapu |
| k (drops) | meng- | kirim → mengirim |
| g, h, vowel | meng- | ambil → mengambil |
| one syllable | menge- | cek → mengecek |

## Memory aid
With **K, T, S, P** the first letter drops – the prefix “swallows” it. Mnemonic: **“Kopi, Teh, Susu, Pisang”**.

## Finding the root
If you want to look up a me- word, work backwards: **menulis** → men + tulis, **memakai** → mem + pakai, **menyapu** → meny + sapu.

## In everyday speech
In speech **me-** is often dropped or shortened to a nasal sound: **nulis** (menulis), **nyari** (mencari), **ngirim** (mengirim). It sounds casual – in writing always use the full form.
= Saya sedang menunggu bus. :: I'm waiting for the bus.
= Dia menjual sayur di pasar. :: He/She sells vegetables at the market.
`, quiz: [
  ["me- + tulis (write) =", ["menulis", "mentulis", "metulis"], 0, "t drops: men + ulis."],
  ["me- + beli (buy) =", ["membeli", "mengbeli", "menbeli"], 0, "Before b you use mem-."],
  ["me- + kirim (send) =", ["mengirim", "mengkirim", "mekirim"], 0, "k drops: meng + irim."],
]},

g30: { title: "Colloquial speech & particles", body: `
Spoken Indonesian – especially in Jakarta and among young people – often sounds very different from the textbook.
| Standard | Everyday | Meaning |
| tidak | nggak / gak / ga | not |
| sudah | udah | already |
| saja | aja | just |
| bagaimana | gimana | how |
| begitu / begini | gitu / gini | like that / like this |
| seperti | kayak | like |
| sedang | lagi | right now |
| mengapa | kok / ngapain | how come |
| sangat | banget (after the word!) | very |
| memang | emang | indeed |
| dengan | sama | with |
| saya / aku | gue (Jakarta) | I |
| kamu | lo / lu (Jakarta) | you |
> Use **gue/lo** only with close friends in Jakarta – elsewhere it can easily sound rude. **aku/kamu** works among friends almost everywhere.

## Particles – the spice of the language
Little words at the end of a sentence change the tone:
| Particle | Effect | Example |
| ya | friendly, “okay?” | Tunggu, ya. |
| dong | emphasis, “come on!” | Ayo, dong! |
| sih | “then”, softens | Kenapa sih? |
| deh | “all right then”, agreement | Ya udah, deh. |
| kok | “how come?” | Kok mahal? |
| kan | “…, right?” | Kamu capek, kan? |
| lho / loh | “hey!”, pointing something out | Enak lho! |
| yuk | “let's!” | Makan, yuk! |
= Udah makan belum? :: Have you eaten yet?
= Gimana sih? :: So how does it work, then?
= Kok nggak bilang? :: How come you didn't say anything?

## Chat abbreviations
**yg** (yang), **gk / ga** (nggak), **udh** (udah), **sy** (saya), **bgt** (banget), **wkwk** (haha), **otw** (on the way).
`, quiz: [
  ["**Udah makan?** means …", ["Have you eaten yet?", "Do you want to eat?", "Are you eating right now?"], 0, "udah = sudah = already."],
  ["**Kok mahal?** expresses …", ["surprise: How come it's so expensive?", "agreement: Yes, expensive.", "a request: Make it more expensive."], 0, "kok = how come (surprised)."],
  ["Colloquial for **tidak**:", ["nggak", "bukan", "jangan"], 0, "nggak, gak or ga."],
]},

g34: { title: "Passive with di-", body: `
Indonesian uses the passive **much more often** than English – it often sounds more natural to put the thing first.

## Passive with di-
Replace **me-** with **di-**. The root stays unchanged – no sound changes!
| Active | Passive |
| membeli (buy) | dibeli (be bought) |
| menulis (write) | ditulis |
| memakai (use) | dipakai |
| mengirim (send) | dikirim |
Who does it follows, with or without **oleh** (“by”):
= Rumah ini dibangun oleh kakek saya. :: This house was built by my grandfather.
= Kamarnya sudah dibersihkan. :: The room has already been cleaned.

## Passive with “I, you, we”
When **I, you** or **we** do something, the pronoun goes **right before the root** – without di-:
= Bukunya sudah saya baca. :: I've already read the book.
= Sudah saya bayar. :: I've already paid for it.

## Typical signs
= Dilarang merokok. :: No smoking.
= Dijual. :: For sale.
= Disewakan. :: For rent.

> Don't mix them up: **di** as a place word is written separately (**di rumah**), **di-** as the passive is written together (**dibeli**).
`, quiz: [
  ["Passive of **menjual** (sell)", ["dijual", "dimenjual", "dinjual"], 0, "di + root (jual)."],
  ["“I've already paid for it.”", ["Sudah saya bayar.", "Saya sudah dibayar.", "Sudah dibayar saya oleh."], 0, "Pronoun + root. Saya sudah dibayar would mean “I've already been paid”."],
  ["**Dilarang masuk** means …", ["No entry", "Please come in", "Entrance here"], 0, "dilarang = forbidden, masuk = go in."],
]},

g35: { title: "Conversation strategies", body: `
With a few hundred words you can already say an amazing amount – if you know a few tricks.

## Ask instead of giving up
= Maaf, bisa diulang? :: Sorry, could you repeat that?
= Bisa lebih pelan? :: Could you speak more slowly?
= Apa artinya …? :: What does … mean?
= Bagaimana bilangnya … dalam bahasa Indonesia? :: How do you say … in Indonesian?
= Maksudnya …? :: Do you mean …?

## Talk around it
Missing a word? Describe it with **yang** or **untuk**:
= Itu, yang untuk buka botol. :: That thing for opening bottles.
= Orang yang kerja di rumah sakit. :: Someone who works at the hospital.

## Buying time
Fillers like **eh …**, **apa ya …**, **gimana ya …** (“um, how do you say …”) are completely normal.

## Showing interest
| Expression | Meaning |
| Oh, begitu. | Oh, I see. |
| Wah, keren! | Wow, cool! |
| Masa? | Really? No way! |
| Benar juga. | That's true, too. |
| Terus? | And then? |
| Tergantung. | It depends. |

> The best shortcut to speaking: say a few sentences out loud every day – even on your own. The app reads everything to you; repeat after it!
`, quiz: [
  ["You didn't understand something:", ["Maaf, bisa diulang?", "Terserah.", "Sama-sama."], 0, "bisa diulang = can it be repeated?"],
  ["**Masa?** expresses …", ["disbelief: Really?", "agreement: Exactly.", "a time expression"], 0, "Masa? / Masa sih? = No way!"],
  ["You're missing the word for “corkscrew”. What helps?", ["describing it with yang untuk …", "speaking English louder", "ending the conversation"], 0, "Talking around a word is the most important strategy."],
]},

g40: { title: "The endings -kan and -i", body: `
Together with **me-**, **-kan** and **-i** give a verb a new direction.

## -kan: cause something or do it for someone
| Root | with -kan | Meaning |
| mati (off, dead) | mematikan | switch off |
| bersih (clean) | membersihkan | clean |
| siap (ready) | menyiapkan | prepare |
| jelas (clear) | menjelaskan | explain |
| beli (buy) | membelikan | buy something for someone |
= Tolong matikan lampunya. :: Please turn off the light.
= Saya belikan kamu es krim. :: I'll buy you an ice cream.

## -i: target, place, repetition
| Root | with -i | Meaning |
| datang (come) | mendatangi | go and see someone |
| teman (friend) | menemani | accompany |
| kunjung | mengunjungi | visit |
| suka (like) | menyukai | like someone/something |
| dekat (near) | mendekati | approach |
= Saya akan menemani kamu. :: I'll go with you.

## Colloquial: -in
In Jakarta slang, **-kan** and **-i** both become **-in**: **matiin** (mematikan), **jelasin** (menjelaskan), **temenin** (menemani), **beliin** (membelikan).
= Matiin lampunya, dong. :: Turn off the light, will you.
`, quiz: [
  ["“explain” (jelas = clear)", ["menjelaskan", "menjelasi", "berjelas"], 0, "-kan = make (something) clear."],
  ["Colloquial for **menemani**", ["temenin", "temanan", "nemen"], 0, "-i becomes -in in slang."],
  ["**Tolong nyalakan AC-nya.**", ["Please turn on the AC.", "Please turn off the AC.", "Please fix the AC."], 0, "nyala = on → menyalakan = switch on."],
]},

g41: { title: "Forming nouns", body: `
With prefixes and suffixes, verbs and adjectives become nouns. Once you know the patterns, your vocabulary grows by itself.
| Pattern | Meaning | Example |
| … -an | result, thing | makan → makanan (food), jawab → jawaban (answer) |
| ke- … -an | abstract noun | sehat → kesehatan (health) |
| peN- | person who does something | jual → penjual (seller) |
| peN- … -an | process | bayar → pembayaran (payment) |
| per- … -an | process, matter | jalan → perjalanan (journey) |
| pe- … -an | thing, occupation | kerja → pekerjaan (job) |
> **peN-** follows the same sound rules as **me-**: me**nj**ual → pe**nj**ual, me**mb**ayar → pe**mb**ayaran.
= Ada pertanyaan? :: Are there any questions?
= Kesehatan itu penting. :: Health is important.
= Semoga perjalanannya lancar! :: Have a good trip! (May the journey go smoothly!)
`, quiz: [
  ["**pembeli** is …", ["the buyer", "the purchase", "to buy"], 0, "peN- = person who does something."],
  ["“Cleanliness” (bersih = clean)", ["kebersihan", "pembersih", "bersihan"], 0, "ke-…-an = abstract noun. pembersih would be a cleaning product."],
  ["**jawaban** means …", ["answer", "to answer", "the person answering"], 0, "-an = result."],
]},

g42: { title: "Unintended: ter- and ke-…-an", body: `
## ter-: unintended, state, the most
| Meaning | Examples |
| unintended, sudden | tertidur (fell asleep), terjatuh (fell over) |
| state | terbuka (open), tertutup (closed), terkenal (famous) |
| the most …, -est | terbaik (the best), termurah (the cheapest) |
= Saya tertidur di sofa. :: I fell asleep on the sofa.
= Tokonya masih terbuka. :: The shop is still open.

## ke-…-an: bad luck!
**ke- + root + -an** often describes something **unpleasant that happens to you**:
| Root | ke-…-an | Meaning |
| hujan (rain) | kehujanan | caught in the rain |
| tinggal (stay) | ketinggalan | missed, left behind |
| copet (pickpocket) | kecopetan | pickpocketed |
| siang (midday) | kesiangan | overslept |
| dingin (cold) | kedinginan | freezing |
= Kami kehujanan. :: We got caught in the rain.
= Saya ketinggalan pesawat! :: I missed the flight!
Also: **kelihatan** (be visible, look) and **kedengaran** (be heard, sound).

> Colloquially, **ke-…-an** with an adjective also means “too …”: **kebesaran** (too big), **kemahalan** (too expensive).
`, quiz: [
  ["“I overslept.”", ["Saya kesiangan.", "Saya tertidur siang.", "Saya siang tidur."], 0, "kesiangan = caught out by midday – overslept."],
  ["**terkenal** means …", ["famous", "make known", "know someone"], 0, "ter- + kenal = (widely) known."],
  ["The shoes are too big for you:", ["Sepatunya kebesaran.", "Sepatunya terbesar.", "Sepatunya membesar."], 0, "ke-…-an with an adjective = “too …”. terbesar = the biggest."],
]},
});
