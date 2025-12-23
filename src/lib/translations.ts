export type Language = "en" | "he";

export const translations = {
  en: {
    // Header
    tripItinerary: "TRIP ITINERARY",
    title: "Athens, Greece",
    subtitle: "A 5-day exploration of ancient wonders and Mediterranean culture. Navigation provided by Alon —",
    subtitleItalic: "results may vary.",
    travelers: "Travelers",
    navigator: "Navigator",
    dateRange: "Jan 15 — Jan 19",
    
    // Status
    navigationStatus: "Navigation Status",
    live: "Live",
    etaLabel: "ETA to Syntagma Square:",
    etaValue: "Uncertain",
    
    // Statuses
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
    
    // Days
    day1: {
      title: "Arrival & Orientation",
      day: "Wednesday",
    },
    day2: {
      title: "Ancient History",
      day: "Thursday",
    },
    day3: {
      title: "Markets & Exploration",
      day: "Friday",
    },
    day4: {
      title: "Coastal Excursion",
      day: "Saturday",
    },
    day5: {
      title: "Departure",
      day: "Sunday",
    },
    
    // Schedule items - Day 1
    schedule: {
      // Day 1
      d1_1: {
        time: "10:30",
        title: "Arrive at Athens International Airport",
        desc: "Touch down in Greece. Collect bags, clear customs, begin the adventure.",
      },
      d1_2: {
        time: "12:00",
        title: "Hotel Check-in",
        desc: "Drop luggage at the hotel. Quick refresh before heading out.",
      },
      d1_3: {
        time: "12:30",
        title: "Navigate to Syntagma Square",
        desc: "Alon takes the lead. 'It's literally a 10-minute walk.' The journey begins.",
      },
      d1_4: {
        time: "12:45",
        title: "First Recalculation",
        desc: "'This is correct, we just need to go around.' Narrator: We did not.",
      },
      d1_5: {
        time: "13:15",
        title: "Coffee Stop",
        desc: "'Let's recalibrate here.' Translation: covert Google Maps consultation.",
      },
      d1_6: {
        time: "14:00",
        title: "Syntagma Square",
        desc: "Finally arrived. The 90-minute 'scenic route' shall not be discussed.",
      },
      d1_7: {
        time: "15:00",
        title: "Changing of the Guard",
        desc: "Watch the Evzones ceremony at Parliament. Genuinely impressive.",
      },
      d1_8: {
        time: "19:00",
        title: "Dinner in Plaka",
        desc: "First Greek dinner. Order everything. Discover ouzo is potent.",
      },
      
      // Day 2
      d2_1: {
        time: "08:30",
        title: "Greek Breakfast",
        desc: "Coffee and spanakopita. Everyone pretends last night's ouzo was fine.",
      },
      d2_2: {
        time: "09:30",
        title: "Route to Acropolis",
        desc: "Alon suggests a 'better route.' Group votes to follow Google Maps instead.",
      },
      d2_3: {
        time: "10:00",
        title: "The Acropolis",
        desc: "The Parthenon. 2,500 years of history. Everyone takes the same photo.",
      },
      d2_4: {
        time: "12:30",
        title: "Acropolis Museum",
        desc: "World-class collection. Learn things. Buy souvenirs in the gift shop.",
      },
      d2_5: {
        time: "14:00",
        title: "Lunch in Monastiraki",
        desc: "Souvlaki at the famous spots. Alon's 'local place' suggestion is declined.",
      },
      d2_6: {
        time: "16:00",
        title: "Ancient Agora",
        desc: "Where Socrates walked. Someone attempts a philosophy joke. It doesn't land.",
      },
      d2_7: {
        time: "20:00",
        title: "Rooftop Dinner",
        desc: "Acropolis view at night. Alon found this successfully. It was visible from the street.",
      },
      
      // Day 3
      d3_1: {
        time: "09:00",
        title: "Central Market",
        desc: "Athens Central Market. Fish, meat, spices. Nearly buy an octopus.",
      },
      d3_2: {
        time: "11:00",
        title: "Kolonaki Coffee",
        desc: "Upscale neighborhood. €7 lattes. Pretend we belong here.",
      },
      d3_3: {
        time: "12:30",
        title: "Lycabettus Approach",
        desc: "'I found stairs that go straight up.' 45 minutes later, we find the funicular.",
      },
      d3_4: {
        time: "14:00",
        title: "Lycabettus Hill",
        desc: "360° views of Athens. Worth the climb that wasn't necessary.",
      },
      d3_5: {
        time: "16:00",
        title: "National Garden",
        desc: "Peaceful city escape. Turtles in the pond. Very wholesome.",
      },
      d3_6: {
        time: "18:00",
        title: "Psiri District",
        desc: "Street art, bars, vibes. Alon disappears for 20 mins. Claims 'scouting.'",
      },
      d3_7: {
        time: "21:00",
        title: "Night Out",
        desc: "Gazi nightlife. Dance to unfamiliar music. Create selective memories.",
      },
      
      // Day 4
      d4_1: {
        time: "08:00",
        title: "Car Rental",
        desc: "Road trip day. Alon volunteers to navigate. 'We'll use GPS' — everyone.",
      },
      d4_2: {
        time: "10:00",
        title: "Temple of Poseidon",
        desc: "Cape Sounion. Clifftop temple. Azure sea views. Ancient Greeks had taste.",
      },
      d4_3: {
        time: "12:30",
        title: "Beach Stop",
        desc: "Mediterranean in January. Brisk but refreshing. One person goes fully in.",
      },
      d4_4: {
        time: "14:30",
        title: "Seaside Lunch",
        desc: "Fresh fish taverna. The owner recommends. Everything is excellent.",
      },
      d4_5: {
        time: "17:00",
        title: "Return to Athens",
        desc: "Sunset coastal drive. Alon sleeps in the back. Everyone agrees this is ideal.",
      },
      d4_6: {
        time: "20:30",
        title: "Farewell Dinner",
        desc: "Full mezze spread. Too much raki. Speeches about friendship occur.",
      },
      
      // Day 5
      d5_1: {
        time: "09:00",
        title: "Slow Morning",
        desc: "Final Greek breakfast. Deliberate movements. Therapeutic coffee consumption.",
      },
      d5_2: {
        time: "11:00",
        title: "Last Souvenirs",
        desc: "Olive oil, spices, magnets. Alon buys a compass. 'Ironic,' he claims.",
      },
      d5_3: {
        time: "12:30",
        title: "Final Coffee at Syntagma",
        desc: "Return to where it began. Alon claims he could find it blindfolded now. Untested.",
      },
      d5_4: {
        time: "14:00",
        title: "Airport Transfer",
        desc: "Professional taxi driver. Direct route. No wrong turns. Strange sensation.",
      },
      d5_5: {
        time: "17:30",
        title: "Departure",
        desc: "Board the flight home. Group chat already planning next trip. Alon's navigation privileges: under review.",
      },
    },
    
    // Footer
    footerQuote: '"The main square is definitely this way."',
    footerAttribution: "— Alon, to Ran, Johnatan & Rubi • January 15, 2025",
    successfulNavigations: "Successful navigations: 1*",
    asterisk: "*Destination was visible",
    
    // UI
    language: "עברית",
    darkMode: "Dark",
    lightMode: "Light",
    alonNavigates: "Alon Navigates",
    alonTime: "🧭",
  },
  
  he: {
    // Header
    tripItinerary: "לוח זמנים לטיול",
    title: "אתונה, יוון",
    subtitle: "חמישה ימים של גילוי פלאי העת העתיקה והתרבות הים-תיכונית. הניווט באחריות אלון —",
    subtitleItalic: "התוצאות עשויות להשתנות.",
    travelers: "משתתפים",
    navigator: "נווט",
    dateRange: "15–19 בינואר",
    
    // Status
    navigationStatus: "סטטוס ניווט",
    live: "שידור חי",
    etaLabel: "זמן הגעה לכיכר סינטגמה:",
    etaValue: "לא ידוע",
    
    // Statuses
    statuses: [
      "בודק את גוגל מפות",
      "מסובב את הטלפון לראות טוב יותר",
      "מתייעץ עם מקומי",
      "לוקח מסלול חלופי",
      "הפסקת קפה קצרה לכיול מחדש",
      "כמעט שם (לכאורה)",
      "שוקל מחדש את האפשרויות",
      "מצא נוף יפה במקום",
    ],
    
    // Days
    day1: {
      title: "הגעה והתמצאות",
      day: "יום רביעי",
    },
    day2: {
      title: "היסטוריה עתיקה",
      day: "יום חמישי",
    },
    day3: {
      title: "שווקים וסיורים",
      day: "יום שישי",
    },
    day4: {
      title: "טיול לחוף",
      day: "יום שבת",
    },
    day5: {
      title: "יום היציאה",
      day: "יום ראשון",
    },
    
    // Schedule items - Day 1
    schedule: {
      // Day 1
      d1_1: {
        time: "10:30",
        title: "נחיתה בנמל התעופה הבינלאומי של אתונה",
        desc: "נוחתים ביוון. אוספים מזוודות, עוברים מכס, ההרפתקה מתחילה.",
      },
      d1_2: {
        time: "12:00",
        title: "צ'ק-אין במלון",
        desc: "משאירים מזוודות במלון. התרעננות מהירה לפני היציאה.",
      },
      d1_3: {
        time: "12:30",
        title: "ניווט לכיכר סינטגמה",
        desc: "אלון לוקח את ההובלה. 'זה פשוט 10 דקות הליכה.' המסע מתחיל.",
      },
      d1_4: {
        time: "12:45",
        title: "חישוב מסלול מחדש",
        desc: "'זה נכון, רק צריך לעקוף פה.' המספר: לא היינו צריכים.",
      },
      d1_5: {
        time: "13:15",
        title: "הפסקת קפה",
        desc: "'בואו נכייל מחדש כאן.' תרגום: בדיקה חשאית של גוגל מפות.",
      },
      d1_6: {
        time: "14:00",
        title: "כיכר סינטגמה",
        desc: "סוף סוף הגענו. על 'המסלול הציורי' בן 90 הדקות לא נדבר.",
      },
      d1_7: {
        time: "15:00",
        title: "טקס החלפת המשמר",
        desc: "צופים בטקס האבזונים בפרלמנט. באמת מרשים.",
      },
      d1_8: {
        time: "19:00",
        title: "ארוחת ערב בפלאקה",
        desc: "ארוחה יוונית ראשונה. מזמינים הכול. מגלים שהאוזו חזק.",
      },
      
      // Day 2
      d2_1: {
        time: "08:30",
        title: "ארוחת בוקר יוונית",
        desc: "קפה וספנקופיטה. כולם מעמידים פנים שהאוזו מאמש היה בסדר.",
      },
      d2_2: {
        time: "09:30",
        title: "מסלול לאקרופוליס",
        desc: "אלון מציע 'מסלול טוב יותר'. הקבוצה מצביעה ללכת לפי גוגל מפות.",
      },
      d2_3: {
        time: "10:00",
        title: "האקרופוליס",
        desc: "הפרתנון. 2,500 שנות היסטוריה. כולם מצלמים את אותה תמונה.",
      },
      d2_4: {
        time: "12:30",
        title: "מוזיאון האקרופוליס",
        desc: "אוסף ברמה עולמית. לומדים דברים. קונים מזכרות בחנות.",
      },
      d2_5: {
        time: "14:00",
        title: "צהריים במונסטיראקי",
        desc: "סובלקי במקומות המפורסמים. ההצעה של אלון ל'מקום מקומי' נדחית.",
      },
      d2_6: {
        time: "16:00",
        title: "האגורה העתיקה",
        desc: "המקום בו סוקרטס הלך. מישהו מנסה בדיחת פילוסופיה. זה לא עובד.",
      },
      d2_7: {
        time: "20:00",
        title: "ארוחת ערב בגג",
        desc: "נוף לאקרופוליס בלילה. אלון מצא את זה בהצלחה. זה היה נראה מהרחוב.",
      },
      
      // Day 3
      d3_1: {
        time: "09:00",
        title: "השוק המרכזי",
        desc: "השוק המרכזי של אתונה. דגים, בשר, תבלינים. כמעט קונים תמנון.",
      },
      d3_2: {
        time: "11:00",
        title: "קפה בקולונאקי",
        desc: "שכונה יוקרתית. לאטה ב-7 יורו. מעמידים פנים שאנחנו שייכים.",
      },
      d3_3: {
        time: "12:30",
        title: "עלייה להר ליקבטוס",
        desc: "'מצאתי מדרגות שעולות ישר.' 45 דקות אחר כך, מוצאים את הרכבל.",
      },
      d3_4: {
        time: "14:00",
        title: "הר ליקבטוס",
        desc: "נוף 360 מעלות על אתונה. שווה את העלייה שלא הייתה הכרחית.",
      },
      d3_5: {
        time: "16:00",
        title: "הגן הלאומי",
        desc: "מפלט שקט בלב העיר. צבים בבריכה. מאוד נעים.",
      },
      d3_6: {
        time: "18:00",
        title: "רובע פסירי",
        desc: "אמנות רחוב, ברים, אווירה. אלון נעלם ל-20 דקות. טוען 'סיור'.",
      },
      d3_7: {
        time: "21:00",
        title: "לילה בעיר",
        desc: "חיי לילה בגאזי. רוקדים למוזיקה לא מוכרת. יוצרים זיכרונות סלקטיביים.",
      },
      
      // Day 4
      d4_1: {
        time: "08:00",
        title: "השכרת רכב",
        desc: "יום טיול. אלון מתנדב לנווט. 'נשתמש ב-GPS' — כולם.",
      },
      d4_2: {
        time: "10:00",
        title: "מקדש פוסידון",
        desc: "כף סוניון. מקדש על צוק. נופי ים תכלת. ליוונים העתיקים היה טעם.",
      },
      d4_3: {
        time: "12:30",
        title: "עצירה בחוף",
        desc: "הים התיכון בינואר. מרענן אבל קריר. מישהו אחד נכנס לגמרי.",
      },
      d4_4: {
        time: "14:30",
        title: "צהריים על הים",
        desc: "טברנה עם דגים טריים. הבעלים ממליץ. הכול מעולה.",
      },
      d4_5: {
        time: "17:00",
        title: "חזרה לאתונה",
        desc: "נסיעה לאורך החוף בשקיעה. אלון ישן מאחור. כולם מסכימים שזה אידיאלי.",
      },
      d4_6: {
        time: "20:30",
        title: "ארוחת פרידה",
        desc: "מזה מלא. יותר מדי ראקי. נאומים על חברות מתרחשים.",
      },
      
      // Day 5
      d5_1: {
        time: "09:00",
        title: "בוקר איטי",
        desc: "ארוחת בוקר יוונית אחרונה. תנועות מכוונות. צריכת קפה טיפולית.",
      },
      d5_2: {
        time: "11:00",
        title: "מזכרות אחרונות",
        desc: "שמן זית, תבלינים, מגנטים. אלון קונה מצפן. 'אירוני', הוא טוען.",
      },
      d5_3: {
        time: "12:30",
        title: "קפה אחרון בסינטגמה",
        desc: "חוזרים למקום שבו הכול התחיל. אלון טוען שיכול למצוא עם עיניים עצומות. לא נבדק.",
      },
      d5_4: {
        time: "14:00",
        title: "הסעה לשדה התעופה",
        desc: "נהג מונית מקצועי. מסלול ישיר. בלי טעויות. תחושה מוזרה.",
      },
      d5_5: {
        time: "17:30",
        title: "המראה",
        desc: "עולים לטיסה הביתה. הקבוצה כבר מתכננת את הטיול הבא. הרשאות הניווט של אלון: בבדיקה.",
      },
    },
    
    // Footer
    footerQuote: '"הכיכר המרכזית בטוח בכיוון הזה."',
    footerAttribution: "— אלון, לרן, יונתן ורובי • 15 בינואר 2025",
    successfulNavigations: "ניווטים מוצלחים: 1*",
    asterisk: "*היעד היה נראה לעין",
    
    // UI
    language: "English",
    darkMode: "כהה",
    lightMode: "בהיר",
    alonNavigates: "אלון מנווט",
    alonTime: "🧭",
  },
} as const;

export function getTranslation(lang: Language) {
  return translations[lang];
}
