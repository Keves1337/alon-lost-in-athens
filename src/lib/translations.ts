export type Language = "en" | "he";

interface ScheduleItem {
  time: string;
  title: string;
  desc: string;
}

interface DayInfo {
  title: string;
  day: string;
}

interface Translations {
  tripItinerary: string;
  title: string;
  subtitle: string;
  subtitleItalic: string;
  travelers: string;
  navigator: string;
  dateRange: string;
  navigationStatus: string;
  live: string;
  etaLabel: string;
  etaValue: string;
  statuses: string[];
  day1: DayInfo;
  day2: DayInfo;
  day3: DayInfo;
  day4: DayInfo;
  day5: DayInfo;
  schedule: Record<string, ScheduleItem>;
  footerQuote: string;
  footerAttribution: string;
  successfulNavigations: string;
  asterisk: string;
  language: string;
  darkMode: string;
  lightMode: string;
  alonNavigates: string;
  alonTime: string;
  jan: string;
}

const en: Translations = {
  tripItinerary: "TRIP ITINERARY",
  title: "Athens, Greece",
  subtitle: "A 5-day exploration of ancient wonders and Mediterranean culture. Navigation provided by Alon -",
  subtitleItalic: "results may vary.",
  travelers: "Travelers",
  navigator: "Navigator",
  dateRange: "Jan 15 - Jan 19",
  navigationStatus: "Navigation Status",
  live: "Live",
  etaLabel: "ETA to Syntagma Square:",
  etaValue: "Uncertain",
  statuses: [
    "Checking Google Maps",
    "Rotating phone for clarity",
    "Consulting a local",
    "Taking an alternate route",
    "Brief coffee recalibration",
    "Almost there (allegedly)",
    "Reconsidering options",
    "Found a nice view instead",
  ],
  day1: { title: "Arrival & Orientation", day: "Wednesday" },
  day2: { title: "Ancient History", day: "Thursday" },
  day3: { title: "Markets & Exploration", day: "Friday" },
  day4: { title: "Coastal Excursion", day: "Saturday" },
  day5: { title: "Departure", day: "Sunday" },
  schedule: {
    d1_1: { time: "10:30", title: "Arrive at Athens International Airport", desc: "Touch down in Greece. Collect bags, clear customs, begin the adventure." },
    d1_2: { time: "12:00", title: "Hotel Check-in", desc: "Drop luggage at the hotel. Quick refresh before heading out." },
    d1_3: { time: "12:30", title: "Navigate to Syntagma Square", desc: "Alon takes the lead. It is literally a 10-minute walk. The journey begins." },
    d1_4: { time: "12:45", title: "First Recalculation", desc: "This is correct, we just need to go around. Narrator: We did not." },
    d1_5: { time: "13:15", title: "Coffee Stop", desc: "Let us recalibrate here. Translation: covert Google Maps consultation." },
    d1_6: { time: "14:00", title: "Syntagma Square", desc: "Finally arrived. The 90-minute scenic route shall not be discussed." },
    d1_7: { time: "15:00", title: "Changing of the Guard", desc: "Watch the Evzones ceremony at Parliament. Genuinely impressive." },
    d1_8: { time: "19:00", title: "Dinner in Plaka", desc: "First Greek dinner. Order everything. Discover ouzo is potent." },
    d2_1: { time: "08:30", title: "Greek Breakfast", desc: "Coffee and spanakopita. Everyone pretends last night ouzo was fine." },
    d2_2: { time: "09:30", title: "Route to Acropolis", desc: "Alon suggests a better route. Group votes to follow Google Maps instead." },
    d2_3: { time: "10:00", title: "The Acropolis", desc: "The Parthenon. 2,500 years of history. Everyone takes the same photo." },
    d2_4: { time: "12:30", title: "Acropolis Museum", desc: "World-class collection. Learn things. Buy souvenirs in the gift shop." },
    d2_5: { time: "14:00", title: "Lunch in Monastiraki", desc: "Souvlaki at the famous spots. Alon local place suggestion is declined." },
    d2_6: { time: "16:00", title: "Ancient Agora", desc: "Where Socrates walked. Someone attempts a philosophy joke. It does not land." },
    d2_7: { time: "20:00", title: "Rooftop Dinner", desc: "Acropolis view at night. Alon found this successfully. It was visible from the street." },
    d3_1: { time: "09:00", title: "Central Market", desc: "Athens Central Market. Fish, meat, spices. Nearly buy an octopus." },
    d3_2: { time: "11:00", title: "Kolonaki Coffee", desc: "Upscale neighborhood. 7 euro lattes. Pretend we belong here." },
    d3_3: { time: "12:30", title: "Lycabettus Approach", desc: "I found stairs that go straight up. 45 minutes later, we find the funicular." },
    d3_4: { time: "14:00", title: "Lycabettus Hill", desc: "360 degree views of Athens. Worth the climb that was not necessary." },
    d3_5: { time: "16:00", title: "National Garden", desc: "Peaceful city escape. Turtles in the pond. Very wholesome." },
    d3_6: { time: "18:00", title: "Psiri District", desc: "Street art, bars, vibes. Alon disappears for 20 mins. Claims scouting." },
    d3_7: { time: "21:00", title: "Night Out", desc: "Gazi nightlife. Dance to unfamiliar music. Create selective memories." },
    d4_1: { time: "08:00", title: "Car Rental", desc: "Road trip day. Alon volunteers to navigate. We will use GPS - everyone." },
    d4_2: { time: "10:00", title: "Temple of Poseidon", desc: "Cape Sounion. Clifftop temple. Azure sea views. Ancient Greeks had taste." },
    d4_3: { time: "12:30", title: "Beach Stop", desc: "Mediterranean in January. Brisk but refreshing. One person goes fully in." },
    d4_4: { time: "14:30", title: "Seaside Lunch", desc: "Fresh fish taverna. The owner recommends. Everything is excellent." },
    d4_5: { time: "17:00", title: "Return to Athens", desc: "Sunset coastal drive. Alon sleeps in the back. Everyone agrees this is ideal." },
    d4_6: { time: "20:30", title: "Farewell Dinner", desc: "Full mezze spread. Too much raki. Speeches about friendship occur." },
    d5_1: { time: "09:00", title: "Slow Morning", desc: "Final Greek breakfast. Deliberate movements. Therapeutic coffee consumption." },
    d5_2: { time: "11:00", title: "Last Souvenirs", desc: "Olive oil, spices, magnets. Alon buys a compass. Ironic, he claims." },
    d5_3: { time: "12:30", title: "Final Coffee at Syntagma", desc: "Return to where it began. Alon claims he could find it blindfolded now. Untested." },
    d5_4: { time: "14:00", title: "Airport Transfer", desc: "Professional taxi driver. Direct route. No wrong turns. Strange sensation." },
    d5_5: { time: "17:30", title: "Departure", desc: "Board the flight home. Group chat already planning next trip. Alon navigation privileges: under review." },
  },
  footerQuote: "The main square is definitely this way.",
  footerAttribution: "- Alon, to Ran, Johnatan & Rubi - January 15, 2025",
  successfulNavigations: "Successful navigations: 1*",
  asterisk: "*Destination was visible",
  language: "Hebrew",
  darkMode: "Dark",
  lightMode: "Light",
  alonNavigates: "Alon Navigates",
  alonTime: "Alon",
  jan: "JAN",
};

const he: Translations = {
  tripItinerary: "LUACH ZMANIM LATIYUL",
  title: "Atuna, Yavan",
  subtitle: "Hamisha yamim shel gilui pilei ha-et ha-atika ve-tarbut ha-yam ha-tikhoni. Ha-nivut be-ahrayut Alon -",
  subtitleItalic: "ha-totzaot asuyot lehishtanot.",
  travelers: "Mishtatfim",
  navigator: "Navat",
  dateRange: "15-19 Yanuar",
  navigationStatus: "Status Nivut",
  live: "Shidur Hai",
  etaLabel: "Zman hagia le-Kikar Sintagma:",
  etaValue: "Lo Yadua",
  statuses: [
    "Bodek et Google Maps",
    "Mesovev et ha-telefon",
    "Mitya-etz im mekomi",
    "Loke-ah maslul halifi",
    "Hafsakat kafe ktzara",
    "Kim-at sham (likora)",
    "Shokel mehadash",
    "Matza nof yafe",
  ],
  day1: { title: "Hagia ve-Hitmatzut", day: "Yom Revi-i" },
  day2: { title: "Historia Atika", day: "Yom Hamishi" },
  day3: { title: "Shvakim ve-Siyurim", day: "Yom Shishi" },
  day4: { title: "Tiyul la-Hof", day: "Yom Shabat" },
  day5: { title: "Yom ha-Yetzia", day: "Yom Rishon" },
  schedule: {
    d1_1: { time: "10:30", title: "Nehita be-Namal ha-Teufa shel Atuna", desc: "Nohatim be-Yavan. Osfim mizvodot, ovrim mekhes, ha-harpatka matkhila." },
    d1_2: { time: "12:00", title: "Check-in ba-Malon", desc: "Mashirim mizvodot ba-malon. Hitrarnenut mehira lifnei ha-yetzia." },
    d1_3: { time: "12:30", title: "Nivut le-Kikar Sintagma", desc: "Alon loke-ah et ha-hovala. Ze pashut 10 dakot halikha. Ha-masa matkhil." },
    d1_4: { time: "12:45", title: "Hishuvmechadas", desc: "Ze nakhon, rak tzarikh laakof po. Ha-mesaper: Lo hayinu tzrikhim." },
    d1_5: { time: "13:15", title: "Hafsakat Kafe", desc: "Bou nekayel me-hadash kan. Tirgum: bedika hashaet shel Google Maps." },
    d1_6: { time: "14:00", title: "Kikar Sintagma", desc: "Sof sof higanu. Al ha-maslul ha-tziyuri ben 90 ha-dakot lo nedaber." },
    d1_7: { time: "15:00", title: "Tekes Hahla fat ha-Mishmar", desc: "Tzofim ba-tekes ha-Evzonim ba-Parlament. Be-emet marshim." },
    d1_8: { time: "19:00", title: "Aruhat Erev be-Plaka", desc: "Arukha yevanit rishona. Mazminim ha-kol. Megalim she-ha-ouzo hazak." },
    d2_1: { time: "08:30", title: "Aruhat Boker Yevanit", desc: "Kafe u-spanakopita. Kulam maamidim panim she-ha-ouzo me-etmol haya beseder." },
    d2_2: { time: "09:30", title: "Maslul la-Akropolis", desc: "Alon matzia maslul tov yoter. Ha-kvutza matzbiat lalechet lefi Google Maps." },
    d2_3: { time: "10:00", title: "Ha-Akropolis", desc: "Ha-Partenon. 2,500 shnot historia. Kulam metzalmim et ota tmuna." },
    d2_4: { time: "12:30", title: "Muzeon ha-Akropolis", desc: "Osef be-rama olamit. Lomdim dvarim. Konim mazkeret ba-hanut." },
    d2_5: { time: "14:00", title: "Tzohorayim be-Monastiraki", desc: "Souvlaki ba-mekomot ha-mefursamim. Ha-hatzaa shel Alon le-makom mekomi nidhit." },
    d2_6: { time: "16:00", title: "Ha-Agora ha-Atika", desc: "Ha-makom bo Sokrates halakh. Mishehu menase bdihat filosofia. Ze lo oved." },
    d2_7: { time: "20:00", title: "Aruhat Erev ba-Gag", desc: "Nof la-Akropolis ba-layla. Alon matza et ze be-hatzlaha. Ze haya nire me-ha-rehov." },
    d3_1: { time: "09:00", title: "Ha-Shuk ha-Merkazi", desc: "Ha-shuk ha-merkazi shel Atuna. Dagim, basar, tavlinim. Kim-at konim tmanun." },
    d3_2: { time: "11:00", title: "Kafe be-Kolonaki", desc: "Shkuna yokratit. Late be-7 euro. Maamidim panim she-anakhnu shayakhim." },
    d3_3: { time: "12:30", title: "Aliya le-Har Likabetus", desc: "Matzati madregot she-olot yashar. 45 dakot ahar kakh, motzim et ha-rakhbal." },
    d3_4: { time: "14:00", title: "Har Likabetus", desc: "Nof 360 maalot al Atuna. Shave et ha-aliya she-lo hayta hekhrakhit." },
    d3_5: { time: "16:00", title: "Ha-Gan ha-Leumi", desc: "Miflat shaket be-lev ha-ir. Tzavim ba-brekha. Meod naim." },
    d3_6: { time: "18:00", title: "Rova Psiri", desc: "Omanut rekhov, barim, avira. Alon neelam le-20 dakot. Toen siyur." },
    d3_7: { time: "21:00", title: "Layla ba-Ir", desc: "Hayei layla be-Gazi. Rokdim le-muzika lo mukeret. Yotzrim zikhronot selektiviim." },
    d4_1: { time: "08:00", title: "Haskharat Rekhev", desc: "Yom tiyul. Alon mitnadev lenavot. Nishtamesh be-GPS - kulam." },
    d4_2: { time: "10:00", title: "Mikdash Poseidon", desc: "Kaf Sunion. Mikdash al tzuk. Nofei yam tkhelet. La-Yevanim ha-atikim haya taam." },
    d4_3: { time: "12:30", title: "Atzira ba-Hof", desc: "Ha-yam ha-tikhoni be-Yanuar. Meraanen aval karir. Mishehu ekhad nikhnas le-gamrei." },
    d4_4: { time: "14:30", title: "Tzohorayim al ha-Yam", desc: "Taverna im dagim triim. Ha-baalim mamlitz. Ha-kol meule." },
    d4_5: { time: "17:00", title: "Hazara le-Atuna", desc: "Nesia leorekh ha-hof ba-shkia. Alon yashen me-ahor. Kulam maskimi she-ze ideali." },
    d4_6: { time: "20:30", title: "Aruhat Preda", desc: "Meze male. Yoter midai raki. Neumim al khaverot mitrahasim." },
    d5_1: { time: "09:00", title: "Boker Iti", desc: "Aruhat boker yevanit aharona. Tnuot mekhuvano. Tzrikhat kafe tipulit." },
    d5_2: { time: "11:00", title: "Mazkarot Aharonot", desc: "Shemen zayit, tavlinim, magnetim. Alon kone matzpen. Ironi, hu toen." },
    d5_3: { time: "12:30", title: "Kafe Aharon be-Sintagma", desc: "Hozrim la-makom she-bo ha-kol hitkhil. Alon toen she-yakhol limtzo im einayim atzumot. Lo nivdak." },
    d5_4: { time: "14:00", title: "Hasaa la-Sde ha-Teufa", desc: "Nahag monit miktzoi. Maslul yashar. Bli tauot. Tkhushamuza." },
    d5_5: { time: "17:30", title: "Hamraa", desc: "Olim la-tisa ha-baita. Ha-kvutza kvar metakhne net et ha-tiyul ha-ba. Harshaot ha-nivut shel Alon: bi-vdika." },
  },
  footerQuote: "Ha-kikar ha-merkazit betuah ba-kivun ha-ze.",
  footerAttribution: "- Alon, le-Ran, Yonatan ve-Rubi - 15 be-Yanuar 2025",
  successfulNavigations: "Nivutim mutzlahim: 1*",
  asterisk: "*Ha-yaad haya nire la-ayin",
  language: "English",
  darkMode: "Kahe",
  lightMode: "Bahir",
  alonNavigates: "Alon Menavat",
  alonTime: "Alon",
  jan: "YAN",
};

export const translations: Record<Language, Translations> = { en, he };

export function getTranslation(lang: Language): Translations {
  return translations[lang];
}
