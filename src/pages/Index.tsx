import DaySection from "@/components/DaySection";
import ScheduleCard from "@/components/ScheduleCard";
import AlonStatus from "@/components/AlonStatus";
import TripHeader from "@/components/TripHeader";
import SettingsBar from "@/components/SettingsBar";
import { useApp } from "@/context/AppContext";

const Index = () => {
  const { t, isRTL } = useApp();

  return (
    <div className={`min-h-screen bg-background ${isRTL ? "text-right" : ""}`}>
      <SettingsBar />
      <TripHeader />

      {/* Main Content */}
      <main className="max-w-3xl mx-auto px-6 py-12">
        {/* Alon Status */}
        <div className="mb-12">
          <AlonStatus />
        </div>

        {/* Day 1 */}
        <DaySection
          date="January 15"
          dateNum="15"
          day={t.day1.day}
          title={t.day1.title}
          delay={100}
          isFirst
        >
          <ScheduleCard {...t.schedule.d1_1} delay={150} />
          <ScheduleCard {...t.schedule.d1_2} delay={200} />
          <ScheduleCard {...t.schedule.d1_3} isAlonMoment delay={250} />
          <ScheduleCard {...t.schedule.d1_4} isAlonMoment delay={300} />
          <ScheduleCard {...t.schedule.d1_5} isAlonMoment delay={350} />
          <ScheduleCard {...t.schedule.d1_6} delay={400} />
          <ScheduleCard {...t.schedule.d1_7} delay={450} />
          <ScheduleCard {...t.schedule.d1_8} delay={500} />
        </DaySection>

        {/* Day 2 */}
        <DaySection
          date="January 16"
          dateNum="16"
          day={t.day2.day}
          title={t.day2.title}
          delay={550}
        >
          <ScheduleCard {...t.schedule.d2_1} delay={600} />
          <ScheduleCard {...t.schedule.d2_2} isAlonMoment delay={650} />
          <ScheduleCard {...t.schedule.d2_3} delay={700} />
          <ScheduleCard {...t.schedule.d2_4} delay={750} />
          <ScheduleCard {...t.schedule.d2_5} delay={800} />
          <ScheduleCard {...t.schedule.d2_6} delay={850} />
          <ScheduleCard {...t.schedule.d2_7} delay={900} />
        </DaySection>

        {/* Day 3 */}
        <DaySection
          date="January 17"
          dateNum="17"
          day={t.day3.day}
          title={t.day3.title}
          delay={950}
        >
          <ScheduleCard {...t.schedule.d3_1} delay={1000} />
          <ScheduleCard {...t.schedule.d3_2} delay={1050} />
          <ScheduleCard {...t.schedule.d3_3} isAlonMoment delay={1100} />
          <ScheduleCard {...t.schedule.d3_4} delay={1150} />
          <ScheduleCard {...t.schedule.d3_5} delay={1200} />
          <ScheduleCard {...t.schedule.d3_6} isAlonMoment delay={1250} />
          <ScheduleCard {...t.schedule.d3_7} delay={1300} />
        </DaySection>

        {/* Day 4 */}
        <DaySection
          date="January 18"
          dateNum="18"
          day={t.day4.day}
          title={t.day4.title}
          delay={1350}
        >
          <ScheduleCard {...t.schedule.d4_1} isAlonMoment delay={1400} />
          <ScheduleCard {...t.schedule.d4_2} delay={1450} />
          <ScheduleCard {...t.schedule.d4_3} delay={1500} />
          <ScheduleCard {...t.schedule.d4_4} delay={1550} />
          <ScheduleCard {...t.schedule.d4_5} delay={1600} />
          <ScheduleCard {...t.schedule.d4_6} delay={1650} />
        </DaySection>

        {/* Day 5 */}
        <DaySection
          date="January 19"
          dateNum="19"
          day={t.day5.day}
          title={t.day5.title}
          delay={1700}
        >
          <ScheduleCard {...t.schedule.d5_1} delay={1750} />
          <ScheduleCard {...t.schedule.d5_2} delay={1800} />
          <ScheduleCard {...t.schedule.d5_3} isAlonMoment delay={1850} />
          <ScheduleCard {...t.schedule.d5_4} delay={1900} />
          <ScheduleCard {...t.schedule.d5_5} delay={1950} />
        </DaySection>

        {/* Footer */}
        <footer
          className="mt-16 pt-8 border-t border-border text-center"
          style={{ opacity: 0, animation: "fade-in-up 0.4s ease-out 2000ms forwards" }}
        >
          <blockquote className="text-lg font-display text-foreground italic mb-2">
            {t.footerQuote}
          </blockquote>
          <p className="text-sm text-muted-foreground mb-6">{t.footerAttribution}</p>

          <div className="inline-flex items-center gap-4 text-xs text-muted-foreground">
            <span>{t.successfulNavigations}</span>
            <span className="w-1 h-1 rounded-full bg-border" />
            <span>{t.asterisk}</span>
          </div>

          <div className="flex justify-center gap-2 mt-6">
            <div className="w-6 h-1 rounded-full bg-primary" />
            <div className="w-6 h-1 rounded-full bg-muted" />
            <div className="w-6 h-1 rounded-full bg-primary" />
          </div>
        </footer>
      </main>
    </div>
  );
};

export default Index;
