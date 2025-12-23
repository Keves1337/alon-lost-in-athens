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
  tripItinerary: "\u05DC\u05D5\u05D7 \u05D6\u05DE\u05E0\u05D9\u05DD \u05DC\u05D8\u05D9\u05D5\u05DC",
  title: "\u05D0\u05EA\u05D5\u05E0\u05D4, \u05D9\u05D5\u05D5\u05DF",
  subtitle: "\u05D7\u05DE\u05D9\u05E9\u05D4 \u05D9\u05DE\u05D9\u05DD \u05E9\u05DC \u05D2\u05D9\u05DC\u05D5\u05D9 \u05E4\u05DC\u05D0\u05D9 \u05D4\u05E2\u05EA \u05D4\u05E2\u05EA\u05D9\u05E7\u05D4 \u05D5\u05EA\u05E8\u05D1\u05D5\u05EA \u05D4\u05D9\u05DD \u05D4\u05EA\u05D9\u05DB\u05D5\u05DF. \u05D4\u05E0\u05D9\u05D5\u05D5\u05D8 \u05D1\u05D0\u05D7\u05E8\u05D9\u05D5\u05EA \u05D0\u05DC\u05D5\u05DF -",
  subtitleItalic: "\u05D4\u05EA\u05D5\u05E6\u05D0\u05D5\u05EA \u05E2\u05E9\u05D5\u05D9\u05D5\u05EA \u05DC\u05D4\u05E9\u05EA\u05E0\u05D5\u05EA.",
  travelers: "\u05DE\u05E9\u05EA\u05EA\u05E4\u05D9\u05DD",
  navigator: "\u05E0\u05D5\u05D5\u05D8",
  dateRange: "15-19 \u05D9\u05E0\u05D5\u05D0\u05E8",
  navigationStatus: "\u05E1\u05D8\u05D8\u05D5\u05E1 \u05E0\u05D9\u05D5\u05D5\u05D8",
  live: "\u05E9\u05D9\u05D3\u05D5\u05E8 \u05D7\u05D9",
  etaLabel: "\u05D6\u05DE\u05DF \u05D4\u05D2\u05E2\u05D4 \u05DC\u05DB\u05D9\u05DB\u05E8 \u05E1\u05D9\u05E0\u05D8\u05D2\u05DE\u05D4:",
  etaValue: "\u05DC\u05D0 \u05D9\u05D3\u05D5\u05E2",
  statuses: [
    "\u05D1\u05D5\u05D3\u05E7 \u05D0\u05EA Google Maps",
    "\u05DE\u05E1\u05D5\u05D1\u05D1 \u05D0\u05EA \u05D4\u05D8\u05DC\u05E4\u05D5\u05DF",
    "\u05DE\u05EA\u05D9\u05D9\u05E2\u05E5 \u05E2\u05DD \u05DE\u05E7\u05D5\u05DE\u05D9",
    "\u05DC\u05D5\u05E7\u05D7 \u05DE\u05E1\u05DC\u05D5\u05DC \u05D7\u05DC\u05D5\u05E4\u05D9",
    "\u05D4\u05E4\u05E1\u05E7\u05EA \u05E7\u05E4\u05D4 \u05E7\u05E6\u05E8\u05D4",
    "\u05DB\u05DE\u05E2\u05D8 \u05E9\u05DD (\u05DC\u05DB\u05D0\u05D5\u05E8\u05D4)",
    "\u05E9\u05D5\u05E7\u05DC \u05DE\u05D7\u05D3\u05E9",
    "\u05DE\u05E6\u05D0 \u05E0\u05D5\u05E3 \u05D9\u05E4\u05D4",
  ],
  day1: { title: "\u05D4\u05D2\u05E2\u05D4 \u05D5\u05D4\u05EA\u05DE\u05E6\u05D0\u05D5\u05EA", day: "\u05D9\u05D5\u05DD \u05E8\u05D1\u05D9\u05E2\u05D9" },
  day2: { title: "\u05D4\u05D9\u05E1\u05D8\u05D5\u05E8\u05D9\u05D4 \u05E2\u05EA\u05D9\u05E7\u05D4", day: "\u05D9\u05D5\u05DD \u05D7\u05DE\u05D9\u05E9\u05D9" },
  day3: { title: "\u05E9\u05D5\u05D5\u05E7\u05D9\u05DD \u05D5\u05E1\u05D9\u05D5\u05E8\u05D9\u05DD", day: "\u05D9\u05D5\u05DD \u05E9\u05D9\u05E9\u05D9" },
  day4: { title: "\u05D8\u05D9\u05D5\u05DC \u05DC\u05D7\u05D5\u05E3", day: "\u05D9\u05D5\u05DD \u05E9\u05D1\u05EA" },
  day5: { title: "\u05D9\u05D5\u05DD \u05D4\u05D9\u05E6\u05D9\u05D0\u05D4", day: "\u05D9\u05D5\u05DD \u05E8\u05D0\u05E9\u05D5\u05DF" },
  schedule: {
    d1_1: { time: "10:30", title: "\u05E0\u05D7\u05D9\u05EA\u05D4 \u05D1\u05E0\u05DE\u05DC \u05D4\u05EA\u05E2\u05D5\u05E4\u05D4 \u05E9\u05DC \u05D0\u05EA\u05D5\u05E0\u05D4", desc: "\u05E0\u05D5\u05D7\u05EA\u05D9\u05DD \u05D1\u05D9\u05D5\u05D5\u05DF. \u05D0\u05D5\u05E1\u05E4\u05D9\u05DD \u05DE\u05D6\u05D5\u05D5\u05D3\u05D5\u05EA, \u05E2\u05D5\u05D1\u05E8\u05D9\u05DD \u05DE\u05DB\u05E1, \u05D4\u05D4\u05E8\u05E4\u05EA\u05E7\u05D4 \u05DE\u05EA\u05D7\u05D9\u05DC\u05D4." },
    d1_2: { time: "12:00", title: "\u05E6'\u05E7-\u05D0\u05D9\u05DF \u05D1\u05DE\u05DC\u05D5\u05DF", desc: "\u05DE\u05E9\u05D0\u05D9\u05E8\u05D9\u05DD \u05DE\u05D6\u05D5\u05D5\u05D3\u05D5\u05EA \u05D1\u05DE\u05DC\u05D5\u05DF. \u05D4\u05EA\u05E8\u05E2\u05E0\u05E0\u05D5\u05EA \u05DE\u05D4\u05D9\u05E8\u05D4 \u05DC\u05E4\u05E0\u05D9 \u05D4\u05D9\u05E6\u05D9\u05D0\u05D4." },
    d1_3: { time: "12:30", title: "\u05E0\u05D9\u05D5\u05D5\u05D8 \u05DC\u05DB\u05D9\u05DB\u05E8 \u05E1\u05D9\u05E0\u05D8\u05D2\u05DE\u05D4", desc: "\u05D0\u05DC\u05D5\u05DF \u05DC\u05D5\u05E7\u05D7 \u05D0\u05EA \u05D4\u05D4\u05D5\u05D1\u05DC\u05D4. \u05D6\u05D4 \u05E4\u05E9\u05D5\u05D8 10 \u05D3\u05E7\u05D5\u05EA \u05D4\u05DC\u05D9\u05DB\u05D4. \u05D4\u05DE\u05E1\u05E2 \u05DE\u05EA\u05D7\u05D9\u05DC." },
    d1_4: { time: "12:45", title: "\u05D7\u05D9\u05E9\u05D5\u05D1 \u05DE\u05D7\u05D3\u05E9", desc: "\u05D6\u05D4 \u05E0\u05DB\u05D5\u05DF, \u05E8\u05E7 \u05E6\u05E8\u05D9\u05DA \u05DC\u05E2\u05E7\u05D5\u05E3 \u05E4\u05D4. \u05D4\u05DE\u05E1\u05E4\u05E8: \u05DC\u05D0 \u05D4\u05D9\u05D9\u05E0\u05D5 \u05E6\u05E8\u05D9\u05DB\u05D9\u05DD." },
    d1_5: { time: "13:15", title: "\u05D4\u05E4\u05E1\u05E7\u05EA \u05E7\u05E4\u05D4", desc: "\u05D1\u05D5\u05D0\u05D5 \u05E0\u05DB\u05D9\u05D9\u05DC \u05DE\u05D7\u05D3\u05E9 \u05DB\u05D0\u05DF. \u05EA\u05E8\u05D2\u05D5\u05DD: \u05D1\u05D3\u05D9\u05E7\u05D4 \u05D7\u05E9\u05D0\u05D9\u05EA \u05E9\u05DC Google Maps." },
    d1_6: { time: "14:00", title: "\u05DB\u05D9\u05DB\u05E8 \u05E1\u05D9\u05E0\u05D8\u05D2\u05DE\u05D4", desc: "\u05E1\u05D5\u05E3 \u05E1\u05D5\u05E3 \u05D4\u05D2\u05E2\u05E0\u05D5. \u05E2\u05DC \u05D4\u05DE\u05E1\u05DC\u05D5\u05DC \u05D4\u05E6\u05D9\u05D5\u05E8\u05D9 \u05D1\u05DF 90 \u05D4\u05D3\u05E7\u05D5\u05EA \u05DC\u05D0 \u05E0\u05D3\u05D1\u05E8." },
    d1_7: { time: "15:00", title: "\u05D8\u05E7\u05E1 \u05D4\u05D7\u05DC\u05E4\u05EA \u05D4\u05DE\u05E9\u05DE\u05E8", desc: "\u05E6\u05D5\u05E4\u05D9\u05DD \u05D1\u05D8\u05E7\u05E1 \u05D4\u05D0\u05D1\u05D6\u05D5\u05E0\u05D9\u05DD \u05D1\u05E4\u05E8\u05DC\u05DE\u05E0\u05D8. \u05D1\u05D0\u05DE\u05EA \u05DE\u05E8\u05E9\u05D9\u05DD." },
    d1_8: { time: "19:00", title: "\u05D0\u05E8\u05D5\u05D7\u05EA \u05E2\u05E8\u05D1 \u05D1\u05E4\u05DC\u05D0\u05E7\u05D4", desc: "\u05D0\u05E8\u05D5\u05D7\u05D4 \u05D9\u05D5\u05D5\u05E0\u05D9\u05EA \u05E8\u05D0\u05E9\u05D5\u05E0\u05D4. \u05DE\u05D6\u05DE\u05D9\u05E0\u05D9\u05DD \u05D4\u05DB\u05DC. \u05DE\u05D2\u05DC\u05D9\u05DD \u05E9\u05D4\u05D0\u05D5\u05D6\u05D5 \u05D7\u05D6\u05E7." },
    d2_1: { time: "08:30", title: "\u05D0\u05E8\u05D5\u05D7\u05EA \u05D1\u05D5\u05E7\u05E8 \u05D9\u05D5\u05D5\u05E0\u05D9\u05EA", desc: "\u05E7\u05E4\u05D4 \u05D5\u05E1\u05E4\u05E0\u05E7\u05D5\u05E4\u05D9\u05D8\u05D4. \u05DB\u05D5\u05DC\u05DD \u05DE\u05E2\u05DE\u05D9\u05D3\u05D9\u05DD \u05E4\u05E0\u05D9\u05DD \u05E9\u05D4\u05D0\u05D5\u05D6\u05D5 \u05DE\u05D0\u05EA\u05DE\u05D5\u05DC \u05D4\u05D9\u05D4 \u05D1\u05E1\u05D3\u05E8." },
    d2_2: { time: "09:30", title: "\u05DE\u05E1\u05DC\u05D5\u05DC \u05DC\u05D0\u05E7\u05E8\u05D5\u05E4\u05D5\u05DC\u05D9\u05E1", desc: "\u05D0\u05DC\u05D5\u05DF \u05DE\u05E6\u05D9\u05E2 \u05DE\u05E1\u05DC\u05D5\u05DC \u05D8\u05D5\u05D1 \u05D9\u05D5\u05EA\u05E8. \u05D4\u05E7\u05D1\u05D5\u05E6\u05D4 \u05DE\u05E6\u05D1\u05D9\u05E2\u05D4 \u05DC\u05DC\u05DB\u05EA \u05DC\u05E4\u05D9 Google Maps." },
    d2_3: { time: "10:00", title: "\u05D4\u05D0\u05E7\u05E8\u05D5\u05E4\u05D5\u05DC\u05D9\u05E1", desc: "\u05D4\u05E4\u05E8\u05EA\u05E0\u05D5\u05DF. 2,500 \u05E9\u05E0\u05D5\u05EA \u05D4\u05D9\u05E1\u05D8\u05D5\u05E8\u05D9\u05D4. \u05DB\u05D5\u05DC\u05DD \u05DE\u05E6\u05DC\u05DE\u05D9\u05DD \u05D0\u05EA \u05D0\u05D5\u05EA\u05D4 \u05EA\u05DE\u05D5\u05E0\u05D4." },
    d2_4: { time: "12:30", title: "\u05DE\u05D5\u05D6\u05D9\u05D0\u05D5\u05DF \u05D4\u05D0\u05E7\u05E8\u05D5\u05E4\u05D5\u05DC\u05D9\u05E1", desc: "\u05D0\u05D5\u05E1\u05E3 \u05D1\u05E8\u05DE\u05D4 \u05E2\u05D5\u05DC\u05DE\u05D9\u05EA. \u05DC\u05D5\u05DE\u05D3\u05D9\u05DD \u05D3\u05D1\u05E8\u05D9\u05DD. \u05E7\u05D5\u05E0\u05D9\u05DD \u05DE\u05D6\u05DB\u05E8\u05D5\u05EA \u05D1\u05D7\u05E0\u05D5\u05EA." },
    d2_5: { time: "14:00", title: "\u05E6\u05D4\u05E8\u05D9\u05D9\u05DD \u05D1\u05DE\u05D5\u05E0\u05E1\u05D8\u05D9\u05E8\u05D0\u05E7\u05D9", desc: "\u05E1\u05D5\u05D1\u05DC\u05D0\u05E7\u05D9 \u05D1\u05DE\u05E7\u05D5\u05DE\u05D5\u05EA \u05D4\u05DE\u05E4\u05D5\u05E8\u05E1\u05DE\u05D9\u05DD. \u05D4\u05D4\u05E6\u05E2\u05D4 \u05E9\u05DC \u05D0\u05DC\u05D5\u05DF \u05DC\u05DE\u05E7\u05D5\u05DD \u05DE\u05E7\u05D5\u05DE\u05D9 \u05E0\u05D3\u05D7\u05D9\u05EA." },
    d2_6: { time: "16:00", title: "\u05D4\u05D0\u05D2\u05D5\u05E8\u05D4 \u05D4\u05E2\u05EA\u05D9\u05E7\u05D4", desc: "\u05D4\u05DE\u05E7\u05D5\u05DD \u05D1\u05D5 \u05E1\u05D5\u05E7\u05E8\u05D8\u05E1 \u05D4\u05DC\u05DA. \u05DE\u05D9\u05E9\u05D4\u05D5 \u05DE\u05E0\u05E1\u05D4 \u05D1\u05D3\u05D9\u05D7\u05EA \u05E4\u05D9\u05DC\u05D5\u05E1\u05D5\u05E4\u05D9\u05D4. \u05D6\u05D4 \u05DC\u05D0 \u05E2\u05D5\u05D1\u05D3." },
    d2_7: { time: "20:00", title: "\u05D0\u05E8\u05D5\u05D7\u05EA \u05E2\u05E8\u05D1 \u05D1\u05D2\u05D2", desc: "\u05E0\u05D5\u05E3 \u05DC\u05D0\u05E7\u05E8\u05D5\u05E4\u05D5\u05DC\u05D9\u05E1 \u05D1\u05DC\u05D9\u05DC\u05D4. \u05D0\u05DC\u05D5\u05DF \u05DE\u05E6\u05D0 \u05D0\u05EA \u05D6\u05D4 \u05D1\u05D4\u05E6\u05DC\u05D7\u05D4. \u05D6\u05D4 \u05D4\u05D9\u05D4 \u05E0\u05E8\u05D0\u05D4 \u05DE\u05D4\u05E8\u05D7\u05D5\u05D1." },
    d3_1: { time: "09:00", title: "\u05D4\u05E9\u05D5\u05E7 \u05D4\u05DE\u05E8\u05DB\u05D6\u05D9", desc: "\u05D4\u05E9\u05D5\u05E7 \u05D4\u05DE\u05E8\u05DB\u05D6\u05D9 \u05E9\u05DC \u05D0\u05EA\u05D5\u05E0\u05D4. \u05D3\u05D2\u05D9\u05DD, \u05D1\u05E9\u05E8, \u05EA\u05D1\u05DC\u05D9\u05E0\u05D9\u05DD. \u05DB\u05DE\u05E2\u05D8 \u05E7\u05D5\u05E0\u05D9\u05DD \u05EA\u05DE\u05E0\u05D5\u05DF." },
    d3_2: { time: "11:00", title: "\u05E7\u05E4\u05D4 \u05D1\u05E7\u05D5\u05DC\u05D5\u05E0\u05D0\u05E7\u05D9", desc: "\u05E9\u05DB\u05D5\u05E0\u05D4 \u05D9\u05D5\u05E7\u05E8\u05EA\u05D9\u05EA. \u05DC\u05D0\u05D8\u05D4 \u05D1-7 \u05D9\u05D5\u05E8\u05D5. \u05DE\u05E2\u05DE\u05D9\u05D3\u05D9\u05DD \u05E4\u05E0\u05D9\u05DD \u05E9\u05D0\u05E0\u05D7\u05E0\u05D5 \u05E9\u05D9\u05D9\u05DB\u05D9\u05DD." },
    d3_3: { time: "12:30", title: "\u05E2\u05DC\u05D9\u05D9\u05D4 \u05DC\u05D4\u05E8 \u05DC\u05D9\u05E7\u05D1\u05D8\u05D5\u05E1", desc: "\u05DE\u05E6\u05D0\u05EA\u05D9 \u05DE\u05D3\u05E8\u05D2\u05D5\u05EA \u05E9\u05E2\u05D5\u05DC\u05D5\u05EA \u05D9\u05E9\u05E8. 45 \u05D3\u05E7\u05D5\u05EA \u05D0\u05D7\u05E8 \u05DB\u05DA, \u05DE\u05D5\u05E6\u05D0\u05D9\u05DD \u05D0\u05EA \u05D4\u05E8\u05DB\u05D1\u05DC." },
    d3_4: { time: "14:00", title: "\u05D4\u05E8 \u05DC\u05D9\u05E7\u05D1\u05D8\u05D5\u05E1", desc: "\u05E0\u05D5\u05E3 360 \u05DE\u05E2\u05DC\u05D5\u05EA \u05E2\u05DC \u05D0\u05EA\u05D5\u05E0\u05D4. \u05E9\u05D5\u05D5\u05D4 \u05D0\u05EA \u05D4\u05E2\u05DC\u05D9\u05D9\u05D4 \u05E9\u05DC\u05D0 \u05D4\u05D9\u05D9\u05EA\u05D4 \u05D4\u05DB\u05E8\u05D7\u05D9\u05EA." },
    d3_5: { time: "16:00", title: "\u05D4\u05D2\u05DF \u05D4\u05DC\u05D0\u05D5\u05DE\u05D9", desc: "\u05DE\u05E4\u05DC\u05D8 \u05E9\u05E7\u05D8 \u05D1\u05DC\u05D1 \u05D4\u05E2\u05D9\u05E8. \u05E6\u05D1\u05D9\u05DD \u05D1\u05D1\u05E8\u05D9\u05DB\u05D4. \u05DE\u05D0\u05D5\u05D3 \u05E0\u05E2\u05D9\u05DD." },
    d3_6: { time: "18:00", title: "\u05E8\u05D5\u05D1\u05E2 \u05E4\u05E1\u05D9\u05E8\u05D9", desc: "\u05D0\u05DE\u05E0\u05D5\u05EA \u05E8\u05D7\u05D5\u05D1, \u05D1\u05E8\u05D9\u05DD, \u05D0\u05D5\u05D5\u05D9\u05E8\u05D4. \u05D0\u05DC\u05D5\u05DF \u05E0\u05E2\u05DC\u05DD \u05DC-20 \u05D3\u05E7\u05D5\u05EA. \u05D8\u05D5\u05E2\u05DF \u05E1\u05D9\u05D5\u05E8." },
    d3_7: { time: "21:00", title: "\u05DC\u05D9\u05DC\u05D4 \u05D1\u05E2\u05D9\u05E8", desc: "\u05D7\u05D9\u05D9 \u05DC\u05D9\u05DC\u05D4 \u05D1\u05D2\u05D0\u05D6\u05D9. \u05E8\u05D5\u05E7\u05D3\u05D9\u05DD \u05DC\u05DE\u05D5\u05D6\u05D9\u05E7\u05D4 \u05DC\u05D0 \u05DE\u05D5\u05DB\u05E8\u05EA. \u05D9\u05D5\u05E6\u05E8\u05D9\u05DD \u05D6\u05D9\u05DB\u05E8\u05D5\u05E0\u05D5\u05EA \u05E1\u05DC\u05E7\u05D8\u05D9\u05D1\u05D9\u05D9\u05DD." },
    d4_1: { time: "08:00", title: "\u05D4\u05E9\u05DB\u05E8\u05EA \u05E8\u05DB\u05D1", desc: "\u05D9\u05D5\u05DD \u05D8\u05D9\u05D5\u05DC. \u05D0\u05DC\u05D5\u05DF \u05DE\u05EA\u05E0\u05D3\u05D1 \u05DC\u05E0\u05D5\u05D5\u05D8. \u05E0\u05E9\u05EA\u05DE\u05E9 \u05D1-GPS - \u05DB\u05D5\u05DC\u05DD." },
    d4_2: { time: "10:00", title: "\u05DE\u05E7\u05D3\u05E9 \u05E4\u05D5\u05E1\u05D9\u05D9\u05D3\u05D5\u05DF", desc: "\u05DB\u05E3 \u05E1\u05D5\u05E0\u05D9\u05D5\u05DF. \u05DE\u05E7\u05D3\u05E9 \u05E2\u05DC \u05E6\u05D5\u05E7. \u05E0\u05D5\u05E4\u05D9 \u05D9\u05DD \u05EA\u05DB\u05DC\u05EA. \u05DC\u05D9\u05D5\u05D5\u05E0\u05D9\u05DD \u05D4\u05E2\u05EA\u05D9\u05E7\u05D9\u05DD \u05D4\u05D9\u05D4 \u05D8\u05E2\u05DD." },
    d4_3: { time: "12:30", title: "\u05E2\u05E6\u05D9\u05E8\u05D4 \u05D1\u05D7\u05D5\u05E3", desc: "\u05D4\u05D9\u05DD \u05D4\u05EA\u05D9\u05DB\u05D5\u05DF \u05D1\u05D9\u05E0\u05D5\u05D0\u05E8. \u05DE\u05E8\u05E2\u05E0\u05DF \u05D0\u05D1\u05DC \u05E7\u05E8\u05D9\u05E8. \u05DE\u05D9\u05E9\u05D4\u05D5 \u05D0\u05D7\u05D3 \u05E0\u05DB\u05E0\u05E1 \u05DC\u05D2\u05DE\u05E8\u05D9." },
    d4_4: { time: "14:30", title: "\u05E6\u05D4\u05E8\u05D9\u05D9\u05DD \u05E2\u05DC \u05D4\u05D9\u05DD", desc: "\u05D8\u05D1\u05E8\u05E0\u05D4 \u05E2\u05DD \u05D3\u05D2\u05D9\u05DD \u05D8\u05E8\u05D9\u05D9\u05DD. \u05D4\u05D1\u05E2\u05DC\u05D9\u05DD \u05DE\u05DE\u05DC\u05D9\u05E6\u05D9\u05DD. \u05D4\u05DB\u05DC \u05DE\u05E2\u05D5\u05DC\u05D4." },
    d4_5: { time: "17:00", title: "\u05D7\u05D6\u05E8\u05D4 \u05DC\u05D0\u05EA\u05D5\u05E0\u05D4", desc: "\u05E0\u05E1\u05D9\u05E2\u05D4 \u05DC\u05D0\u05D5\u05E8\u05DA \u05D4\u05D7\u05D5\u05E3 \u05D1\u05E9\u05E7\u05D9\u05E2\u05D4. \u05D0\u05DC\u05D5\u05DF \u05D9\u05E9\u05DF \u05DE\u05D0\u05D7\u05D5\u05E8. \u05DB\u05D5\u05DC\u05DD \u05DE\u05E1\u05DB\u05D9\u05DE\u05D9\u05DD \u05E9\u05D6\u05D4 \u05D0\u05D9\u05D3\u05D9\u05D0\u05DC\u05D9." },
    d4_6: { time: "20:30", title: "\u05D0\u05E8\u05D5\u05D7\u05EA \u05E4\u05E8\u05D9\u05D3\u05D4", desc: "\u05DE\u05D6\u05D4 \u05DE\u05DC\u05D0. \u05D9\u05D5\u05EA\u05E8 \u05DE\u05D3\u05D9 \u05E8\u05D0\u05E7\u05D9. \u05E0\u05D0\u05D5\u05DE\u05D9\u05DD \u05E2\u05DC \u05D7\u05D1\u05E8\u05D5\u05EA \u05DE\u05EA\u05E8\u05D7\u05E9\u05D9\u05DD." },
    d5_1: { time: "09:00", title: "\u05D1\u05D5\u05E7\u05E8 \u05D0\u05D9\u05D8\u05D9", desc: "\u05D0\u05E8\u05D5\u05D7\u05EA \u05D1\u05D5\u05E7\u05E8 \u05D9\u05D5\u05D5\u05E0\u05D9\u05EA \u05D0\u05D7\u05E8\u05D5\u05E0\u05D4. \u05EA\u05E0\u05D5\u05E2\u05D5\u05EA \u05DE\u05DB\u05D5\u05D5\u05E0\u05D5\u05EA. \u05E6\u05E8\u05D9\u05DB\u05EA \u05E7\u05E4\u05D4 \u05D8\u05D9\u05E4\u05D5\u05DC\u05D9\u05EA." },
    d5_2: { time: "11:00", title: "\u05DE\u05D6\u05DB\u05E8\u05D5\u05EA \u05D0\u05D7\u05E8\u05D5\u05E0\u05D5\u05EA", desc: "\u05E9\u05DE\u05DF \u05D6\u05D9\u05EA, \u05EA\u05D1\u05DC\u05D9\u05E0\u05D9\u05DD, \u05DE\u05D2\u05E0\u05D8\u05D9\u05DD. \u05D0\u05DC\u05D5\u05DF \u05E7\u05D5\u05E0\u05D4 \u05DE\u05E6\u05E4\u05DF. \u05D0\u05D9\u05E8\u05D5\u05E0\u05D9, \u05D4\u05D5\u05D0 \u05D8\u05D5\u05E2\u05DF." },
    d5_3: { time: "12:30", title: "\u05E7\u05E4\u05D4 \u05D0\u05D7\u05E8\u05D5\u05DF \u05D1\u05E1\u05D9\u05E0\u05D8\u05D2\u05DE\u05D4", desc: "\u05D7\u05D5\u05D6\u05E8\u05D9\u05DD \u05DC\u05DE\u05E7\u05D5\u05DD \u05E9\u05D1\u05D5 \u05D4\u05DB\u05DC \u05D4\u05EA\u05D7\u05D9\u05DC. \u05D0\u05DC\u05D5\u05DF \u05D8\u05D5\u05E2\u05DF \u05E9\u05D9\u05DB\u05D5\u05DC \u05DC\u05DE\u05E6\u05D5\u05D0 \u05E2\u05DD \u05E2\u05D9\u05E0\u05D9\u05D9\u05DD \u05E2\u05E6\u05D5\u05DE\u05D5\u05EA. \u05DC\u05D0 \u05E0\u05D1\u05D3\u05E7." },
    d5_4: { time: "14:00", title: "\u05D4\u05E1\u05E2\u05D4 \u05DC\u05E9\u05D3\u05D4 \u05D4\u05EA\u05E2\u05D5\u05E4\u05D4", desc: "\u05E0\u05D4\u05D2 \u05DE\u05D5\u05E0\u05D9\u05EA \u05DE\u05E7\u05E6\u05D5\u05E2\u05D9. \u05DE\u05E1\u05DC\u05D5\u05DC \u05D9\u05E9\u05D9\u05E8. \u05D1\u05DC\u05D9 \u05D8\u05E2\u05D5\u05D9\u05D5\u05EA. \u05EA\u05D7\u05D5\u05E9\u05D4 \u05DE\u05D5\u05D6\u05E8\u05D4." },
    d5_5: { time: "17:30", title: "\u05D4\u05DE\u05E8\u05D0\u05D4", desc: "\u05E2\u05D5\u05DC\u05D9\u05DD \u05DC\u05D8\u05D9\u05E1\u05D4 \u05D4\u05D1\u05D9\u05EA\u05D4. \u05E7\u05D1\u05D5\u05E6\u05EA \u05D4\u05E6'\u05D0\u05D8 \u05DB\u05D1\u05E8 \u05DE\u05EA\u05DB\u05E0\u05E0\u05EA \u05D0\u05EA \u05D4\u05D8\u05D9\u05D5\u05DC \u05D4\u05D1\u05D0. \u05D4\u05E8\u05E9\u05D0\u05D5\u05EA \u05D4\u05E0\u05D9\u05D5\u05D5\u05D8 \u05E9\u05DC \u05D0\u05DC\u05D5\u05DF: \u05D1\u05D1\u05D3\u05D9\u05E7\u05D4." },
  },
  footerQuote: "\u05D4\u05DB\u05D9\u05DB\u05E8 \u05D4\u05DE\u05E8\u05DB\u05D6\u05D9\u05EA \u05D1\u05D8\u05D5\u05D7 \u05D1\u05DB\u05D9\u05D5\u05D5\u05DF \u05D4\u05D6\u05D4.",
  footerAttribution: "- \u05D0\u05DC\u05D5\u05DF, \u05DC\u05E8\u05DF, \u05D9\u05D5\u05E0\u05EA\u05DF \u05D5\u05E8\u05D5\u05D1\u05D9 - 15 \u05D1\u05D9\u05E0\u05D5\u05D0\u05E8 2025",
  successfulNavigations: "\u05E0\u05D9\u05D5\u05D5\u05D8\u05D9\u05DD \u05DE\u05D5\u05E6\u05DC\u05D7\u05D9\u05DD: 1*",
  asterisk: "*\u05D4\u05D9\u05E2\u05D3 \u05D4\u05D9\u05D4 \u05E0\u05E8\u05D0\u05D4 \u05DC\u05E2\u05D9\u05DF",
  language: "English",
  darkMode: "\u05DB\u05D4\u05D4",
  lightMode: "\u05D1\u05D4\u05D9\u05E8",
  alonNavigates: "\u05D0\u05DC\u05D5\u05DF \u05DE\u05E0\u05D5\u05D5\u05D8",
  alonTime: "\u05D0\u05DC\u05D5\u05DF",
  jan: "\u05D9\u05E0\u05D5",
};

export const translations: Record<Language, Translations> = { en, he };

export function getTranslation(lang: Language): Translations {
  return translations[lang];
}
