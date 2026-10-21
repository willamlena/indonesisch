// English versions of the level-2 grammar lessons (grammar2.js).
window.LESSONS_EN = window.LESSONS_EN || {};
Object.assign(window.LESSONS_EN, {

g45: { title: "Talking about the past", body: `
Indonesian verbs have no past tense. So when telling a story, you **set a time frame at the start** – after that everything is clear.
| Expression | Meaning |
| dulu / dahulu | in the past, formerly |
| waktu itu | back then |
| waktu saya kecil | when I was little |
| tiga tahun yang lalu | three years ago |
| pada tahun 2015 | in 2015 |
| sejak saat itu | since then |
= Tiga tahun yang lalu saya pindah ke Bali. :: Three years ago I moved to Bali.
= Waktu saya kecil, kami sering ke danau. :: When I was little, we often went to the lake.

## Telling things in order
**pertama-tama** (first) → **lalu / kemudian** (then) → **setelah itu** (after that) → **akhirnya** (finally)
= Pertama-tama saya kuliah, lalu kerja di bank, akhirnya saya merantau. :: First I studied, then I worked at a bank, and finally I moved away for work.

## sudah, pernah, sempat
- **sudah** = completed: **Saya sudah lulus.**
- **pernah** = ever, once (experience): **Saya pernah tinggal di Jakarta.**
- **sempat** = got round to it, had the chance: **Saya sempat belajar sedikit.**
> **yang lalu** always comes after the time expression: **dua minggu yang lalu** – two weeks ago.
`, quiz: [
  ["“three years ago”", ["tiga tahun yang lalu", "yang lalu tiga tahun", "tiga tahun lagi"], 0, "tiga tahun lagi means “in three years”."],
  ["“When I was little, …”", ["Waktu saya kecil, …", "Saya kecil waktu, …", "Sudah saya kecil, …"], 0, "waktu + clause = when …"],
  ["“finally”", ["akhirnya", "pertama-tama", "sebelumnya"], 0, "pertama-tama = first, sebelumnya = before."],
]},

g46: { title: "Expressing feelings precisely", body: `
## merasa and rasanya
**merasa** + feeling = feel … **Rasanya** = it feels like, I feel as if.
= Saya merasa lebih tenang. :: I feel calmer.
= Rasanya seperti mimpi. :: It feels like a dream.

## Making someone feel …: membuat / bikin
**membuat** (colloquial **bikin**) + person + feeling:
= Berita itu membuat saya sedih. :: The news made me sad.
= Kamu bikin aku kesal! :: You're annoying me!

## Involuntary feelings
With **ter-** or **ke-…-an** a feeling sounds as if it comes over you:
| | |
| terharu | moved, touched |
| terkejut | startled, surprised |
| kesepian | lonely |
| ketakutan | terrified |

## How strong?
**sedikit** (a little) · **agak** (somewhat) · **cukup** (quite) · **sangat / sekali** (very) · **banget** (really, colloquial) · **bukan main** (incredibly)
= Senangnya bukan main! :: I'm incredibly happy!
`, quiz: [
  ["“The film made me sad.”", ["Film itu membuat saya sedih.", "Film itu sedih membuat saya.", "Saya membuat film sedih."], 0, "membuat + person + feeling."],
  ["**kesepian** means …", ["lonely", "relieved", "moved"], 0, "ke-…-an: a state that happens to you."],
  ["“I feel tired.”", ["Saya merasa capek.", "Saya rasanya capek merasa.", "Capek saya merasa."], 0, "merasa + feeling."],
]},

g47: { title: "yang for advanced learners", body: `
**yang** links a noun to a more precise description – like a relative clause.
| Pattern | Example | English |
| yang + verb | orang yang tinggal di sana | the person who lives there |
| yang + passive | rumah yang disewa | the rented house |
| yang + adjective | kamar yang paling besar | the biggest room |
| yang + clause | rumah yang saya lihat kemarin | the house (that) I saw yesterday |

## yang on its own
Without a noun before it, **yang** means “the one …”:
= Yang ini lebih murah. :: This one is cheaper.
= Yang saya mau yang biru. :: What I want is the blue one.

## Questions with yang
= Apa yang kamu cari? :: What are you looking for?
= Siapa yang datang? :: Who's coming?
= Yang mana rumahnya? :: Which one is the house?
> Useful when house hunting: **rumah yang dekat pantai** (a house near the beach), **kamar yang sudah ada perabot** (a furnished room).
`, quiz: [
  ["“the house (that) I saw yesterday”", ["rumah yang saya lihat kemarin", "rumah saya lihat yang kemarin", "yang rumah saya lihat kemarin"], 0, "Noun + yang + clause."],
  ["“What are you looking for?”", ["Apa yang kamu cari?", "Kamu yang cari apa yang?", "Yang apa kamu cari?"], 0, "Apa yang … ? = What …?"],
  ["**rumah yang disewa** means …", ["the rented house", "rent the house", "the house rents"], 0, "yang + passive = the …ed …"],
]},

g48: { title: "Giving instructions politely", body: `
## Three levels of politeness
| Form | Example | Effect |
| verb alone | Bersihkan kamarnya! | direct, almost an order |
| tolong + verb | Tolong bersihkan kamarnya. | friendly request |
| tolong + di-passive | Tolong kamarnya dibersihkan, ya. | very polite, impersonal |
In everyday life the passive is the most elegant way to ask – you say *what* should happen without directly instructing anyone.
= Bajunya dicuci, ya, Mbak. :: Please wash the clothes.
= Lampunya tolong diganti. :: Please replace the lamp.

## minta tolong + person
= Saya minta tolong Mas Budi memperbaiki AC. :: I'm asking Mas Budi to fix the AC.

## Asking the tradesman
= Kapan bisa selesai? :: When can it be finished?
= Perkiraan biayanya berapa? :: Roughly how much will it cost?
= Sudah termasuk bahan? :: Are materials included?
`, quiz: [
  ["Most polite:", ["Tolong pintunya ditutup, ya.", "Tutup pintunya!", "Kamu tutup pintu."], 0, "tolong + di-passive + ya sounds very friendly."],
  ["“When can it be finished?”", ["Kapan bisa selesai?", "Selesai bisa kapan sudah?", "Berapa selesai?"], 0, ""],
  ["“Please replace the lamp.”", ["Lampunya tolong diganti.", "Lampunya mengganti tolong.", "Tolong lampu ganti saya."], 0, "di- + root: diganti."],
]},

g49: { title: "Since when? How long?", body: `
| Word | Meaning | Example |
| sejak | since (a point in time) | sejak kemarin – since yesterday |
| sudah + duration | for (a period) | sudah tiga hari – for three days |
| selama | for, during | selama seminggu – for a week |
| sampai | until | sampai besok – until tomorrow |
= Saya demam sejak hari Senin. :: I've had a fever since Monday.
= Sudah tiga hari saya batuk. :: I've been coughing for three days.

## Questions
= Sejak kapan? :: Since when?
= Sudah berapa lama? :: How long has it been?
= Berapa lama obatnya diminum? :: How long should I take the medicine?

## Describing complaints in more detail
| | |
| terus-menerus | constantly |
| kadang-kadang | sometimes |
| makin parah | getting worse |
| sudah membaik | already better |
| di sini sakitnya | it hurts here |
`, quiz: [
  ["“I've had a cough for three days.”", ["Sudah tiga hari saya batuk.", "Sejak tiga hari saya batuk.", "Selama tiga hari lalu batuk."], 0, "For a period of time: sudah + duration."],
  ["“since yesterday”", ["sejak kemarin", "sudah kemarin", "selama kemarin"], 0, "For a point in time: sejak."],
  ["**makin parah** means …", ["getting worse", "already better", "very mild"], 0, ""],
]},

g50: { title: "Understanding official language", body: `
At offices, on signs and on forms, Indonesian is very formal. The most important signal words:
| Word | Meaning |
| harap … | please … |
| dimohon … | you are requested to … |
| wajib … | compulsory |
| dilarang … | forbidden |
| perhatian | attention |
| telah | already (formal for sudah) |
= Harap antre dengan tertib. :: Please queue in an orderly manner.
= Pemohon wajib hadir sendiri. :: Applicants must appear in person.

## Passive with a time marker
= Permohonan Anda sedang diproses. :: Your application is being processed.
= Dokumen telah diterima. :: The documents have been received.
= Visa akan dikirim melalui email. :: The visa will be sent by email.

## Typical questions at the counter
= Ada keperluan apa? :: How can I help you? (What is your business?)
= Silakan ambil nomor antrean. :: Please take a queue number.
> Not clear? **Maaf, bisa dijelaskan lagi pelan-pelan?** – Officials are almost always happy to explain again.
`, quiz: [
  ["**telah** means …", ["already (formal)", "not yet", "please"], 0, "telah = sudah in formal language."],
  ["“Your application is being processed.”", ["Permohonan Anda sedang diproses.", "Anda memproses permohonan.", "Permohonan Anda memproses."], 0, "sedang + di- = is being …"],
  ["**Ada keperluan apa?**", ["How can I help you? (What's your business?)", "What do you need to eat?", "Do you have time?"], 0, ""],
]},

g51: { title: "Numbers for advanced learners", body: `
## Decimals and percent
Indonesia writes decimals with a comma: **2,5** = 2.5 = **dua koma lima**. Percent: **persen**.
= Inflasinya tiga koma dua persen. :: Inflation is 3.2 percent.

## Fractions
| | |
| setengah | ½ |
| sepertiga | ⅓ |
| seperempat | ¼ |
| dua pertiga | ⅔ |
| tiga perempat | ¾ |

## Approximate amounts with -an
**puluhan** (dozens) · **ratusan** (hundreds) · **ribuan** (thousands) · **jutaan** (millions of)
= Ribuan orang datang ke konser. :: Thousands came to the concert.

## Arithmetic and dates
= dua tambah tiga sama dengan lima :: 2 + 3 = 5
= sepuluh kali dua :: 10 × 2
= tahun dua ribu dua puluh enam :: the year 2026
= tanggal tujuh belas Agustus :: 17 August
> **per** = per: **per orang**, **per malam**, **per bulan**.
`, quiz: [
  ["How do you say “2,5” (2.5)?", ["dua koma lima", "dua titik lima", "dua setengah lima"], 0, "Decimal comma = koma."],
  ["**ratusan orang** means …", ["hundreds of people", "exactly a hundred people", "the hundredth person"], 0, "-an = approximate amount."],
  ["“three quarters”", ["tiga perempat", "tiga seperempat", "perempat tiga"], 0, ""],
]},

g52: { title: "The more … the more – and precise comparisons", body: `
## semakin … semakin
**semakin** (colloquial **makin**) means “more and more” – used twice it means “the more … the more”:
= Harganya semakin mahal. :: The price keeps going up.
= Semakin sering berlatih, semakin lancar. :: The more you practise, the more fluent you get.

## As … as, not as … as
| Pattern | Example | English |
| se- + adjective | setinggi saya | as tall as me |
| sama + adj. + dengan | sama mahal dengan itu | just as expensive as that |
| tidak se- + adj. | tidak sesulit yang saya kira | not as hard as I thought |
| jauh lebih | jauh lebih murah | much cheaper |
| sedikit lebih | sedikit lebih besar | a bit bigger |

## As … as possible
**se-** + doubling + **-nya**: **secepat-cepatnya** (as fast as possible), **sebaik-baiknya** (as well as possible).
`, quiz: [
  ["“The later it gets, the colder it gets.”", ["Semakin malam, semakin dingin.", "Malam semakin dingin semakin.", "Lebih malam lebih dingin paling."], 0, "semakin … semakin = the more … the more."],
  ["“not as expensive as expected”", ["tidak semahal yang dikira", "tidak lebih mahal dikira", "mahal tidak sama"], 0, "tidak se- + adjective."],
  ["**secepat-cepatnya** means …", ["as fast as possible", "very slowly", "faster and faster"], 0, ""],
]},

g54: { title: "Respectful language", body: `
## beliau instead of dia
When talking about respected people (boss, elders, teachers), you say **beliau** instead of **dia**:
= Beliau sedang rapat. :: He/She is in a meeting at the moment.
= Kemarin beliau ke Jakarta. :: He/She was in Jakarta yesterday.

## Very polite requests
| Word | Meaning | Example |
| mohon | please | Mohon ditunggu sebentar. |
| dimohon | you are requested | Dimohon hadir tepat waktu. |
| bersedia | be willing | Apakah Bapak bersedia …? |
| berkenan | be so kind | Jika Ibu berkenan, … |
| dipersilakan | you are invited | Para tamu dipersilakan duduk. |

## On the phone
= Dengan siapa saya berbicara? :: Who am I speaking to?
= Bisa disambungkan ke Bapak Andi? :: Could you put me through to Mr Andi?
= Mohon ditunggu, saya sambungkan. :: One moment please, I'll put you through.
> Addressing people with their title sounds respectful: **Bapak Direktur**, **Ibu Dokter**, **Pak Haji**.
`, quiz: [
  ["About your (female) boss, it's best to say …", ["Beliau sedang rapat.", "Dia sedang rapat.", "Lo sedang rapat."], 0, "beliau = respectful he/she."],
  ["**Apakah Ibu bersedia hadir?**", ["Would you be willing to attend?", "Are you here already?", "Do you want to leave?"], 0, ""],
  ["“One moment please” (formal)", ["Mohon ditunggu sebentar.", "Tunggu aja.", "Sebentar dong."], 0, ""],
]},
});

Object.assign(window.LESSONS_EN, {

g56: { title: "Formal linking words", body: `
In written correspondence these linking words sound professional:
| Word | Meaning |
| namun / akan tetapi | however |
| oleh karena itu | therefore |
| dengan demikian | thus |
| selain itu | in addition |
| sebagaimana | as (already …) |
| sehubungan dengan | regarding |
| berkaitan dengan | in connection with |
| bersama ini | herewith |
| terlampir | attached |

## Structure of a formal email
- **Yth. Bapak Budi** – Dear Mr Budi
- **Dengan hormat,** – (opening formula)
- **Sehubungan dengan …, kami ingin …** – With regard to …, we would like to …
- **Atas perhatian dan kerja samanya, kami ucapkan terima kasih.** – Thank you for your attention and cooperation.
- **Hormat saya,** – Yours sincerely
= Sehubungan dengan rapat kemarin, terlampir notulennya. :: Regarding yesterday's meeting, please find the minutes attached.
`, quiz: [
  ["“however” (formal)", ["namun", "jadi", "terus"], 0, ""],
  ["**terlampir** means …", ["attached", "delayed", "received"], 0, ""],
  ["Closing a letter:", ["Hormat saya,", "Dengan hormat,", "Yth."], 0, "Dengan hormat goes at the beginning."],
]},

g57: { title: "If, in case, supposing", body: `
| Word | Use | Example |
| kalau | if (everyday) | Kalau hujan, kita di rumah. |
| jika / apabila | if (formal) | Jika ada pertanyaan, … |
| seandainya / andaikan | supposing (hypothetical) | Seandainya saya kaya, … |
| asalkan / asal | provided that | Boleh, asal hati-hati. |
| kecuali | except (if) | Semua datang, kecuali dia. |
| kalau saja | if only | Kalau saja saya tahu! |

## No “would” needed
Indonesian has no conditional verb forms (“would, had”). The hypothesis lies only in **seandainya** or in the context:
= Seandainya harganya lebih murah, kami beli. :: If the price were lower, we would buy.
= Kalau saja saya datang lebih awal! :: If only I had come earlier!
> Strong when negotiating: **Kami setuju, asalkan …** – We agree, provided that …
`, quiz: [
  ["“Supposing I were rich, …”", ["Seandainya saya kaya, …", "Asalkan saya kaya, …", "Kecuali saya kaya, …"], 0, "seandainya = hypothetical."],
  ["“provided it's paid in cash”", ["asalkan dibayar tunai", "kecuali dibayar tunai", "kalau saja tunai"], 0, ""],
  ["**jika** is …", ["formal for kalau", "the opposite of kalau", "a question"], 0, ""],
]},

g58: { title: "Presenting figures and trends", body: `
| Everyday | formal | Noun |
| naik | meningkat | peningkatan (increase) |
| turun | menurun | penurunan (decrease) |

## By how much? From … to …
- **sebesar** = by: **naik sebesar 10 persen** – rose by 10 %
- **dari … menjadi …** = from … to …: **dari 5 juta menjadi 7 juta**
- **mencapai** = reach: **Penjualan mencapai 2 miliar.**

## How strongly?
**sedikit** (slightly) · **perlahan-lahan** (gradually) · **tajam** (sharply) · **drastis** (drastically) · **stabil** (steady)
= Pendapatan meningkat tajam pada kuartal ketiga. :: Revenue rose sharply in the third quarter.
= Biaya turun dari tiga juta menjadi dua juta. :: Costs fell from three million to two million.

## Guiding through a presentation
= Seperti terlihat di grafik ini, … :: As you can see in this chart, …
= Selanjutnya, … :: Next, …
= Sebagai kesimpulan, … :: In conclusion, …
`, quiz: [
  ["“rose by 5 percent”", ["naik sebesar lima persen", "naik dari lima persen", "naik menjadi persen lima"], 0, "sebesar = by."],
  ["**penurunan** means …", ["decrease", "increase", "profit"], 0, ""],
  ["“from 5 to 7 million”", ["dari lima juta menjadi tujuh juta", "lima juta sampai menjadi tujuh", "sebesar lima tujuh juta"], 0, ""],
]},

g59: { title: "When exactly? Time words at work", body: `
| Word | Meaning | Example |
| baru saja | just now | Dia baru saja pergi. |
| tadi | earlier | Tadi pagi saya rapat. |
| sedang | in the middle of | Saya sedang menelepon. |
| masih | still | Laporannya masih dikerjakan. |
| hampir | almost | Hampir selesai. |
| akan segera | shortly, soon | Saya akan segera kembali. |
| sempat | get round to | Belum sempat saya baca. |

## Combinations
= Sudah dikirim atau belum? :: Has it been sent yet or not?
= Belum, masih saya kerjakan. :: Not yet, I'm still working on it.
= Maaf, saya belum sempat membalas. :: Sorry, I haven't got round to replying yet.
> **Sudah …, belum?** is the typical office question: **Sudah makan siang, belum?**
`, quiz: [
  ["“He has just left.”", ["Dia baru saja pergi.", "Dia akan segera pergi.", "Dia sedang pergi."], 0, ""],
  ["“I haven't got round to it yet.”", ["Saya belum sempat.", "Saya sudah sempat.", "Saya hampir sempat."], 0, ""],
  ["**akan segera** means …", ["shortly, soon", "just now", "not yet"], 0, ""],
]},

g60: { title: "Complaining – and answering complaints", body: `
## Complaining politely
In Indonesia a complaint works better if it's friendly and indirect:
= Maaf, sepertinya ada kesalahan. :: Excuse me, there seems to be a mistake.
= Pesanan saya belum datang. :: My order hasn't come yet.
= Kamarnya kurang bersih. :: The room isn't quite clean.
> **kurang** instead of **tidak** softens criticism: **kurang bersih**, **kurang memuaskan**.

## Asking for a solution
= Bisa diganti? :: Could it be replaced?
= Bisa uangnya dikembalikan? :: Could I get my money back?
= Saya minta bicara dengan manajernya. :: I'd like to speak to the manager.

## Answering as a company
= Mohon maaf atas ketidaknyamanannya. :: We apologise for the inconvenience.
= Kami akan segera menanganinya. :: We'll deal with it right away.
= Hal ini tidak akan terulang lagi. :: This won't happen again.
`, quiz: [
  ["The friendliest complaint:", ["Maaf, sepertinya ada kesalahan.", "Ini salah! Ganti!", "Kamu salah."], 0, ""],
  ["“not quite clean” (polite)", ["kurang bersih", "tidak bersih sama sekali", "kotor banget"], 0, "kurang softens criticism."],
  ["“Could it be replaced?”", ["Bisa diganti?", "Bisa mengganti saya?", "Ganti bisa?"], 0, ""],
]},

g61: { title: "How Jakarta slang works", body: `
Jakarta slang (**bahasa gaul**) follows a few simple rules – once you know them, you'll understand much more.
## 1. nge- / ng- instead of me-
**ngopi** (have coffee), **ngobrol** (chat), **ngechat** (text), **ngantor** (go to the office)
## 2. -in instead of -kan / -i
**beliin** (membelikan), **bersihin** (membersihkan), **temenin** (menemani), **kasih tahu → kasih tau**
## 3. Pronouns
| Standard | Slang |
| saya / aku | gue, gw |
| kamu | lo, lu |
| ayah / ibu | bokap / nyokap |
## 4. Short forms
**udah, aja, gimana, emang, kayak, bener, gitu, gini, nggak/gak**
## 5. Particles
**sih, dong, deh, kok, kan, nih, tuh** – they set the tone.
= Lo udah makan belum sih? :: So have you eaten yet or what?
= Temenin gue ngopi, dong! :: Come and have a coffee with me!
> Use **gue/lo** only with close friends in Jakarta. With older people, at work or in other regions it comes across as disrespectful.
`, quiz: [
  ["Slang for **membelikan**:", ["beliin", "ngebeli", "belikan"], 0, "-kan becomes -in."],
  ["**ngopi** means …", ["(go for a) coffee", "copy", "cook"], 0, ""],
  ["When is **gue/lo** appropriate?", ["among close friends", "with your mother-in-law", "in a meeting"], 0, ""],
]},

g63: { title: "Being indirect and saving face", body: `
Harmony matters in Indonesia. A direct “no” or open criticism can make someone lose face.

## Saying no without saying no
| Expression | what it really means |
| Nanti saya pikirkan. | probably not |
| Kayaknya agak susah. | that probably won't work |
| Belum bisa. | no (for now) |
| Lihat nanti, ya. | we'll see – probably not |

## Two important feelings
- **nggak enak** – feeling awkward (about turning someone down or bothering them)
- **sungkan** – reluctance out of respect, e.g. to ask for something
= Aku nggak enak menolak. :: I feel bad saying no.

## Defusing conflicts
= Maaf kalau ada salah kata. :: Sorry if I said something wrong.
= Mungkin ada kesalahpahaman. :: Maybe there was a misunderstanding.
= Kita bicarakan baik-baik, ya. :: Let's talk about it calmly.
> Give criticism in private and as a question: **Mungkin bisa dicoba cara lain?** – Maybe we could try another way?
`, quiz: [
  ["**Nanti saya pikirkan** often means …", ["probably not", "yes, right away", "I'm angry"], 0, "Declining indirectly is polite."],
  ["**nggak enak** describes …", ["the discomfort of disappointing someone", "bad food", "illness"], 0, ""],
  ["Criticism is best given …", ["as a question, in private", "loudly in front of everyone", "in the group chat"], 0, ""],
]},

g64: { title: "Family and forms of address", body: `
| Indonesian | English |
| mertua | parents-in-law |
| menantu | son-/daughter-in-law |
| ipar | brother-/sister-in-law |
| besan | your child's parents-in-law |
| keponakan | nephew/niece |
| sepupu | cousin |

## How do you address the family?
- Parents-in-law: **Bapak/Ibu** or the way your partner does: **Papa/Mama**, **Bapak/Mamak**
- Your partner's older siblings: **Mas/Mbak** (Java), **Abang/Kak** (Sumatra), **Bli/Mbok** (Bali)
- Uncle/aunt: **Om/Tante**, on Java **Pakde/Bude** (older than the parents), **Paklik/Bulik** (younger)
> Ask your partner how the family is addressed – it goes down really well!

## Polite sentences when visiting family
= Apa kabar, Bu? Sehat? :: How are you? Are you keeping well?
= Terima kasih sudah menerima saya. :: Thank you for welcoming me.
`, quiz: [
  ["“mother-in-law”", ["ibu mertua", "ibu menantu", "ibu ipar"], 0, ""],
  ["Your partner's older sister on Bali:", ["Mbok", "Mbak", "Uni"], 0, "Mbok (Bali), Mbak (Java), Uni (Minang)."],
  ["**keponakan** is …", ["nephew or niece", "brother-in-law", "grandchild"], 0, ""],
]},

g65: { title: "Accepting and declining invitations", body: `
## Accepting
= Dengan senang hati! :: With pleasure!
= Wah, terima kasih, saya pasti datang. :: Oh, thank you, I'll definitely come.

## Declining – always with regret and a reason
= Sayang sekali, saya berhalangan. :: What a pity, I can't make it.
= Mohon maaf, hari itu saya ada acara keluarga. :: I'm sorry, I have a family event that day.
= Lain kali, ya. :: Another time, then.

## The politeness ping-pong
People often decline a first offer out of modesty – and the host insists:
= Tidak usah repot-repot, Bu. – Ah, tidak apa-apa, silakan! :: Please don't go to any trouble. – Oh, it's nothing, go ahead!
> Accept the second offer. Not touching the food is considered rude – at least try a little.

## As a guest
- take off your shoes outside the house
- give and eat with your **right hand**
- when leaving, **pamit**: **Saya pamit dulu, ya.**
`, quiz: [
  ["Declining politely:", ["Sayang sekali, saya berhalangan.", "Tidak mau.", "Saya malas."], 0, ""],
  ["**Tidak usah repot-repot** means …", ["Please don't go to any trouble.", "I don't have time.", "That doesn't taste good."], 0, ""],
  ["When leaving you say …", ["Saya pamit dulu, ya.", "Selamat datang!", "Silakan masuk."], 0, ""],
]},

g66: { title: "Images in language", body: `
Many idioms use body parts – especially **kepala** (head), **tangan** (hand) and **hati** (heart, actually liver).
| Expression | literally | Meaning |
| besar kepala | big head | conceited |
| keras kepala | hard head | stubborn |
| kepala dingin | cold head | calm, level-headed |
| panjang tangan | long hand | light-fingered |
| ringan tangan | light hand | helpful |
| tinggi hati | high heart | arrogant |
| berat hati | heavy heart | reluctantly |
| makan hati | eat your heart | suffer, be eaten up |

## Proverbs (peribahasa)
Proverbs show education and humour. A few short ones:
= Lain ladang lain belalang. :: When in Rome, do as the Romans do.
= Nasi sudah menjadi bubur. :: What's done is done.
= Air tenang menghanyutkan. :: Still waters run deep.
`, quiz: [
  ["**keras kepala** means …", ["stubborn", "clever", "headache"], 0, ""],
  ["**ringan tangan** means …", ["helpful", "light-fingered", "weak"], 0, ""],
  ["“What's done is done.”", ["Nasi sudah menjadi bubur.", "Lain ladang lain belalang.", "Ada udang di balik batu."], 0, ""],
]},

g67: { title: "Wishing, comforting, congratulating", body: `
## Wishes
**semoga** and **mudah-mudahan** (hopefully) + clause:
= Semoga sukses! :: Good luck!
= Mudah-mudahan cepat sembuh. :: Hope you get well soon.

## Congratulating
**Selamat (atas) …** = Congratulations (on) …
= Selamat atas pernikahannya! :: Congratulations on your wedding!
= Selamat ulang tahun, semoga panjang umur! :: Happy birthday, wishing you a long life!

## Comfort and condolences
= Saya turut berduka cita. :: My deepest condolences.
= Semoga diberi ketabahan. :: Wishing you strength.
= Yang sabar, ya. :: Be patient / Chin up.

## Expressions you'll hear often
| | |
| Insya Allah | God willing (also: “hopefully, probably”) |
| Alhamdulillah | thank God |
| Amin | amen (reply to good wishes) |
> To **Semoga sukses!** people like to reply **Amin, terima kasih!**
`, quiz: [
  ["Offering condolences:", ["Saya turut berduka cita.", "Selamat, ya!", "Semoga sukses!"], 0, ""],
  ["Reply to good wishes:", ["Amin, terima kasih!", "Insya Allah tidak.", "Sama-sama sukses."], 0, ""],
  ["“Congratulations on your promotion!”", ["Selamat atas promosinya!", "Semoga promosi!", "Turut promosi!"], 0, ""],
]},

g69: { title: "The language of the news", body: `
The news sounds different from conversation – but with a few patterns you'll understand it.
## Lots of passive
= Tiga orang dilaporkan hilang. :: Three people are reported missing.
= Ribuan warga dievakuasi. :: Thousands of residents were evacuated.
## Formal time words
| News | Everyday | Meaning |
| telah | sudah | already |
| tengah | sedang | currently |
| akan | akan | will |
## Who says what?
**menurut** (according to), **berdasarkan** (based on), **kata …** / **ujar …** (said …)
= „Situasinya aman,“ ujar kepala polisi. :: “The situation is safe,” said the police chief.
## Typical abbreviations
**BMKG** (weather agency), **Pemda** (regional government), **Jabodetabek** (Greater Jakarta), **BBM** (fuel)
`, quiz: [
  ["**telah** in the news =", ["sudah", "belum", "sedang"], 0, ""],
  ["“according to the official report”", ["menurut laporan resmi", "laporan menurut resmi", "resmi laporan kata"], 0, ""],
  ["**dievakuasi** means …", ["were evacuated", "evacuate themselves", "are being searched for"], 0, ""],
]},
});

Object.assign(window.LESSONS_EN, {

g70: { title: "Making an argument", body: `
## Introducing your opinion
**Menurut saya …** · **Saya rasa …** · **Saya berpendapat bahwa …** · **Saya yakin bahwa …**
## Organising your thoughts
| | |
| pertama-tama | first of all |
| selain itu | in addition |
| di satu sisi … di sisi lain | on the one hand … on the other hand |
| misalnya / contohnya | for example |
| oleh sebab itu / jadi | therefore |
| intinya / kesimpulannya | in short / in conclusion |
## Giving reasons
**karena / sebab** (because) · **soalnya** (colloquial) · **mengingat** (considering)
= Saya berpendapat bahwa transportasi umum harus diperbaiki, karena macet semakin parah. :: I believe public transport needs to be improved, because the traffic is getting worse and worse.
= Di satu sisi Bali indah, di sisi lain terlalu ramai. :: On the one hand Bali is beautiful, on the other hand it's too crowded.
`, quiz: [
  ["“on the one hand … on the other hand”", ["di satu sisi … di sisi lain", "pertama … kedua", "karena … jadi"], 0, ""],
  ["“in addition”", ["selain itu", "sebaliknya", "intinya"], 0, ""],
  ["“I'm of the opinion that …”", ["Saya berpendapat bahwa …", "Saya bahwa pendapat …", "Pendapat saya bahwa ada …"], 0, ""],
]},

g71: { title: "Disagreeing politely", body: `
Open disagreement can easily seem rude. Better: acknowledge first, then disagree.
## Yes, but …
= Memang benar, tapi … :: That's true, but …
= Pendapat Anda ada benarnya, namun … :: You have a point, however …
## Disagreeing gently
= Saya kurang setuju. :: I don't quite agree.
= Bagaimana kalau kita coba cara lain? :: How about we try another way?
= Itu belum tentu. :: That's not necessarily so.
## Agreeing
| | |
| Betul sekali. | Quite right. |
| Saya sependapat. | I agree. |
| Tepat sekali. | Exactly. |
> **Dengan segala hormat** (with all due respect) is an elegant way to introduce disagreement at work.
`, quiz: [
  ["The most polite way to disagree:", ["Memang benar, tapi …", "Salah!", "Itu bodoh."], 0, ""],
  ["“I agree.”", ["Saya sependapat.", "Saya kurang setuju.", "Saya ragu-ragu."], 0, ""],
  ["**Itu belum tentu** means …", ["That's not necessarily so.", "That's certain.", "That's forbidden."], 0, ""],
]},

g72: { title: "Forming abstract nouns", body: `
For social topics you need abstract nouns. They're almost always formed with these patterns:
| Pattern | Root | Noun |
| ke-…-an | adil (fair) | keadilan (justice) |
| ke-…-an | miskin (poor) | kemiskinan (poverty) |
| ke-…-an | setara (equal) | kesetaraan (equality) |
| peN-…-an | didik (educate) | pendidikan (education) |
| peN-…-an | anggur (idle) | pengangguran (unemployment) |
| per-…-an | kota (city) | perkotaan (urban area) |
| per-…-an | desa (village) | pedesaan (rural area) |

## Finding the root
Long unknown word? Strip off the prefix and suffix: **ke·sehat·an** → sehat (healthy) → health.
= Kesehatan dan pendidikan adalah hak setiap warga. :: Health and education are the right of every citizen.
`, quiz: [
  ["Noun from **adil** (fair):", ["keadilan", "pengadilan", "adilan"], 0, "pengadilan exists too – it means “court”."],
  ["**pedesaan** means …", ["rural area", "villager", "be rural"], 0, ""],
  ["Root of **kesehatan**:", ["sehat", "seha", "kesehat"], 0, ""],
]},

g73: { title: "Cause and effect", body: `
| Word | Meaning | Example |
| karena / sebab | because | … karena hujan. |
| akibat | as a result of | Akibat banjir, jalan ditutup. |
| akibatnya | as a result | Akibatnya, banyak orang terlambat. |
| sehingga | so that, with the result that | Hujan deras sehingga jalan banjir. |
| oleh karena itu | therefore (formal) | |
| disebabkan oleh | caused by | |
| menyebabkan | cause | Sampah menyebabkan banjir. |
| berdampak pada | have an impact on | |
> **sehingga** links two clauses (so that), **akibat** comes before a noun (as a result of the …).
= Hutan ditebang sehingga banyak hewan kehilangan rumahnya. :: Forests are cut down, so many animals lose their homes.
= Akibat polusi, banyak anak sakit. :: As a result of pollution, many children get sick.
`, quiz: [
  ["“…, so that the road was flooded”", ["…, sehingga jalan banjir", "…, akibat jalan banjir", "…, disebabkan jalan banjir"], 0, ""],
  ["“Rubbish causes floods.”", ["Sampah menyebabkan banjir.", "Sampah disebabkan banjir.", "Sampah akibat banjir."], 0, ""],
  ["**akibat** comes before …", ["a noun", "a whole clause", "the verb"], 0, ""],
]},

g74: { title: "Reported speech", body: `
Reported speech is easy: **no tense changes**.
= Dia bilang dia sibuk. :: He/She said he/she was busy.
= Menteri menyatakan bahwa harga tidak naik. :: The minister stated that prices would not rise.

## Who says so?
| | |
| katanya | reportedly, he/she says |
| kata + person | … says |
| menurut + person | according to … |
| konon | supposedly (story, rumour) |
= Katanya besok libur. :: Apparently tomorrow is a holiday.
= Kata dokter, saya harus istirahat. :: The doctor says I have to rest.

## Passing on questions and requests
= Dia tanya apakah kamu datang. :: He/She is asking whether you're coming.
= Dia tanya kapan kita berangkat. :: He/She is asking when we're leaving.
= Ibu minta kita pulang cepat. :: Mum is asking us to come home early.
`, quiz: [
  ["“Apparently tomorrow is a holiday.”", ["Katanya besok libur.", "Kata besok libur katanya.", "Menurut libur besok."], 0, ""],
  ["“He's asking whether you're coming.”", ["Dia tanya apakah kamu datang.", "Dia tanya kamu datang apakah.", "Dia bilang kamu datang."], 0, ""],
  ["Reported speech needs …", ["no tense change", "always bahwa at the end of the sentence", "a special verb form"], 0, ""],
]},

g77: { title: "On the move: verbs of motion", body: `
Many verbs of motion take **me-…-i** when a place follows directly as the object:
| without object | with object (me-…-i) | Meaning |
| menyeberang | menyeberangi selat | cross (the strait) |
| lewat | melewati desa | pass (the village), go through |
| datang | mendatangi kantor | go to (the office) |
| naik | menaiki tangga | climb (the stairs) |
| dekat | mendekati pantai | approach (the beach) |
= Kami menyeberang ke Lombok. :: We're crossing over to Lombok.
= Kami menyeberangi Selat Lombok. :: We're crossing the Lombok Strait.

## Direction
**menuju** = towards, heading for: **Kapal ini menuju Flores.**
**mengelilingi** = go around: **mengelilingi pulau** – go around the island
`, quiz: [
  ["“We're crossing the river.”", ["Kami menyeberangi sungai.", "Kami menyeberang sungai.", "Kami seberang sungai."], 0, "With an object: me-…-i."],
  ["**menuju** means …", ["towards, heading for", "back", "through"], 0, ""],
  ["“pass through the village”", ["melewati desa", "lewat desa melewati", "desa dilewat"], 0, ""],
]},

g78: { title: "Doubling for advanced learners", body: `
## With a sound change: “all sorts of”
| | |
| sayur-mayur | all sorts of vegetables |
| lauk-pauk | all sorts of side dishes |
| warna-warni | colourful, multicoloured |
| bolak-balik | back and forth |
| gerak-gerik | behaviour, movements |
## With -an: variety or imitation
**buah-buahan** (all sorts of fruit), **sayur-sayuran** (all sorts of vegetables) – but **mobil-mobilan** (toy car), **rumah-rumahan** (playhouse)!
## Verbs: casual, aimless
**jalan-jalan** (stroll), **duduk-duduk** (sit around), **lihat-lihat** (look around)
= Lihat-lihat dulu, ya. :: I'll just have a look around first.
## Time: for hours, for years
**berjam-jam** (for hours), **berhari-hari** (for days), **bertahun-tahun** (for years)
= Rendang dimasak berjam-jam. :: Rendang is cooked for hours.
`, quiz: [
  ["“I'm just looking.” (in a shop)", ["Lihat-lihat saja.", "Melihat-lihat beli.", "Lihat saja-saja."], 0, ""],
  ["**mobil-mobilan** is …", ["a toy car", "many cars", "a motorway"], 0, ""],
  ["“for years”", ["bertahun-tahun", "tahun-tahunan", "setahun-tahun"], 0, ""],
]},

g79: { title: "Each other and in crowds", body: `
## saling – each other
**saling** + verb: **saling membantu** (help each other), **saling mengenal** (know each other)
= Kita harus saling menghormati. :: We must respect each other.
## ber-…-an: each other or in large numbers
| | |
| bersalaman | shake hands |
| berpelukan | hug each other |
| berpandangan | look at each other |
| berdatangan | arrive in crowds |
| bermunculan | appear in large numbers |
| berjatuhan | fall (in large numbers) |
= Daun-daun berjatuhan. :: The leaves are falling.
## Doubled verbs
**tolong-menolong** (help one another), **pukul-memukul** (hit each other), **kirim-mengirim** (send each other things)
`, quiz: [
  ["“help each other”", ["saling membantu", "membantu-bantu", "berbantuan"], 0, ""],
  ["**berdatangan** means …", ["arrive in crowds", "arrive (one person)", "come back"], 0, ""],
  ["“shake hands”", ["bersalaman", "salam-salam", "menyalami saling"], 0, ""],
]},

g81: { title: "Describing habits", body: `
| Expression | Meaning |
| biasanya | usually |
| sudah biasa | be used to it |
| terbiasa | have got used to |
| membiasakan diri | get into the habit of |
| kebiasaan | habit |
| mulai + verb | start to |
| berhenti + verb | stop (doing) |
| tidak … lagi | no longer |
= Saya sudah biasa bangun pagi. :: I'm used to getting up early.
= Dia berhenti merokok tahun lalu. :: He stopped smoking last year.
= Saya mulai berolahraga lagi. :: I've started exercising again.
= Saya tidak minum kopi lagi. :: I don't drink coffee any more.
> **kebiasaan buruk** = bad habit, **kebiasaan baik** = good habit.
`, quiz: [
  ["“I've stopped smoking.”", ["Saya berhenti merokok.", "Saya mulai merokok.", "Saya biasa merokok."], 0, ""],
  ["“I'm used to it.”", ["Saya sudah biasa.", "Saya membiasakan.", "Saya kebiasaan."], 0, ""],
  ["“no longer”", ["tidak … lagi", "belum … lagi", "masih … tidak"], 0, ""],
]},

g82: { title: "Formal Indonesian: adalah & co.", body: `
In speeches, texts and the news, the “is” that's normally left out appears:
| Word | Use | Example |
| adalah | is (before nouns) | Jakarta adalah ibu kota. |
| merupakan | is, constitutes | Bali merupakan pulau wisata. |
| ialah | is (definition) | Sawah ialah ladang padi. |
| yaitu / yakni | namely | tiga pulau, yaitu Bali, Lombok, dan Flores |
| terdiri dari | consists of | |
| terletak di | is located in | |
> **adalah** never comes before adjectives: ~~Jakarta adalah besar~~ → **Jakarta besar.**
= Indonesia terdiri dari lebih dari tujuh belas ribu pulau. :: Indonesia consists of more than 17,000 islands.
= Danau Toba terletak di Sumatra Utara. :: Lake Toba is in North Sumatra.
`, quiz: [
  ["Which is correct?", ["Jakarta adalah ibu kota.", "Jakarta adalah besar.", "Adalah Jakarta ibu kota."], 0, "adalah only before nouns."],
  ["“consists of”", ["terdiri dari", "terletak di", "merupakan dari"], 0, ""],
  ["**yaitu** means …", ["namely", "but", "therefore"], 0, ""],
]},

g83: { title: "Future, plans, possibilities", body: `
## Future
**akan** (will) · **bakal** (will, colloquial) · **mau** (about to, want) · **nanti** (later)
= Tahun depan kami akan pindah. :: Next year we're moving.
## Plans
**berencana** (plan to) · **ingin** (would like) · **bercita-cita** (dream of)
= Saya berencana membuka usaha kecil. :: I'm planning to open a small business.
## How likely?
| | |
| pasti / tentu | certainly |
| kemungkinan besar | most likely |
| mungkin / barangkali | maybe |
| bisa jadi | could be |
| kemungkinan kecil | rather unlikely |
## Wishes
**semoga** (hopefully) · **kalau saja** (if only) · **seandainya** (supposing)
= Kalau saja saya bisa tinggal lebih lama! :: If only I could stay longer!
`, quiz: [
  ["“most likely”", ["kemungkinan besar", "kemungkinan kecil", "barangkali"], 0, ""],
  ["“We're planning to move.”", ["Kami berencana pindah.", "Kami pasti pindah tadi.", "Kami pindah rencana."], 0, ""],
  ["**bakal** is …", ["colloquial for “will”", "the past", "a question"], 0, ""],
]},

g84: { title: "Particles for advanced learners", body: `
These little words make your Indonesian sound natural:
| Word | Meaning | Example |
| pun | also, even | Saya pun tidak tahu. |
| bahkan | even | Bahkan anak kecil bisa. |
| malah | instead (unexpectedly) | Dia malah tertawa. |
| padahal | even though, whereas | Dia tidak datang, padahal sudah janji. |
| ternyata | it turned out | Ternyata dia benar. |
| toh | anyway | Toh tidak ada yang tahu. |
| justru | precisely, on the contrary | Justru itu masalahnya. |
| lagipula | besides | Lagipula sudah malam. |
## -pun with question words: “…ever”
**apa pun** (whatever) · **siapa pun** (whoever) · **di mana pun** (wherever) · **kapan pun** (whenever)
## -lah and -kah
- **-lah** emphasises: **Dialah yang menang.** – *He's* the one who won.
- **-kah** makes formal questions: **Benarkah?** – Really?
`, quiz: [
  ["“And he had promised.”", ["Padahal dia sudah janji.", "Malah dia sudah janji.", "Toh dia sudah janji."], 0, ""],
  ["“whoever”", ["siapa pun", "pun siapa", "siapa saja-pun"], 0, ""],
  ["**ternyata** means …", ["it turned out", "supposedly", "anyway"], 0, ""],
]},
});
