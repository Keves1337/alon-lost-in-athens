import DaySection from "@/components/DaySection";
import ScheduleCard from "@/components/ScheduleCard";
import AlonStatus from "@/components/AlonStatus";
import TripHeader from "@/components/TripHeader";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
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
          day="Wednesday" 
          title="Arrival & Orientation" 
          delay={100}
          isFirst
        >
          <ScheduleCard
            time="10:30"
            title="Arrive at Athens International Airport"
            description="Touch down in Greece. Collect bags, clear customs, begin the adventure."
            delay={150}
          />
          <ScheduleCard
            time="12:00"
            title="Hotel Check-in"
            description="Drop luggage at the hotel. Quick refresh before heading out."
            delay={200}
          />
          <ScheduleCard
            time="12:30"
            title="Navigate to Syntagma Square"
            description="Alon takes the lead. 'It's literally a 10-minute walk.' The journey begins."
            isAlonMoment
            delay={250}
          />
          <ScheduleCard
            time="12:45"
            title="First Recalculation"
            description="'This is correct, we just need to go around.' Narrator: We did not."
            isAlonMoment
            delay={300}
          />
          <ScheduleCard
            time="13:15"
            title="Coffee Stop"
            description="'Let's recalibrate here.' Translation: covert Google Maps consultation."
            isAlonMoment
            delay={350}
          />
          <ScheduleCard
            time="14:00"
            title="Syntagma Square"
            description="Finally arrived. The 90-minute 'scenic route' shall not be discussed."
            delay={400}
          />
          <ScheduleCard
            time="15:00"
            title="Changing of the Guard"
            description="Watch the Evzones ceremony at Parliament. Genuinely impressive."
            delay={450}
          />
          <ScheduleCard
            time="19:00"
            title="Dinner in Plaka"
            description="First Greek dinner. Order everything. Discover ouzo is potent."
            delay={500}
          />
        </DaySection>

        {/* Day 2 */}
        <DaySection 
          date="January 16" 
          day="Thursday" 
          title="Ancient History" 
          delay={550}
        >
          <ScheduleCard
            time="08:30"
            title="Greek Breakfast"
            description="Coffee and spanakopita. Everyone pretends last night's ouzo was fine."
            delay={600}
          />
          <ScheduleCard
            time="09:30"
            title="Route to Acropolis"
            description="Alon suggests a 'better route.' Group votes to follow Google Maps instead."
            isAlonMoment
            delay={650}
          />
          <ScheduleCard
            time="10:00"
            title="The Acropolis"
            description="The Parthenon. 2,500 years of history. Everyone takes the same photo."
            delay={700}
          />
          <ScheduleCard
            time="12:30"
            title="Acropolis Museum"
            description="World-class collection. Learn things. Buy souvenirs in the gift shop."
            delay={750}
          />
          <ScheduleCard
            time="14:00"
            title="Lunch in Monastiraki"
            description="Souvlaki at the famous spots. Alon's 'local place' suggestion is declined."
            delay={800}
          />
          <ScheduleCard
            time="16:00"
            title="Ancient Agora"
            description="Where Socrates walked. Someone attempts a philosophy joke. It doesn't land."
            delay={850}
          />
          <ScheduleCard
            time="20:00"
            title="Rooftop Dinner"
            description="Acropolis view at night. Alon found this successfully. It was visible from the street."
            delay={900}
          />
        </DaySection>

        {/* Day 3 */}
        <DaySection 
          date="January 17" 
          day="Friday" 
          title="Markets & Exploration" 
          delay={950}
        >
          <ScheduleCard
            time="09:00"
            title="Central Market"
            description="Athens Central Market. Fish, meat, spices. Nearly buy an octopus."
            delay={1000}
          />
          <ScheduleCard
            time="11:00"
            title="Kolonaki Coffee"
            description="Upscale neighborhood. €7 lattes. Pretend we belong here."
            delay={1050}
          />
          <ScheduleCard
            time="12:30"
            title="Lycabettus Approach"
            description="'I found stairs that go straight up.' 45 minutes later, we find the funicular."
            isAlonMoment
            delay={1100}
          />
          <ScheduleCard
            time="14:00"
            title="Lycabettus Hill"
            description="360° views of Athens. Worth the climb that wasn't necessary."
            delay={1150}
          />
          <ScheduleCard
            time="16:00"
            title="National Garden"
            description="Peaceful city escape. Turtles in the pond. Very wholesome."
            delay={1200}
          />
          <ScheduleCard
            time="18:00"
            title="Psiri District"
            description="Street art, bars, vibes. Alon disappears for 20 mins. Claims 'scouting.'"
            isAlonMoment
            delay={1250}
          />
          <ScheduleCard
            time="21:00"
            title="Night Out"
            description="Gazi nightlife. Dance to unfamiliar music. Create selective memories."
            delay={1300}
          />
        </DaySection>

        {/* Day 4 */}
        <DaySection 
          date="January 18" 
          day="Saturday" 
          title="Coastal Excursion" 
          delay={1350}
        >
          <ScheduleCard
            time="08:00"
            title="Car Rental"
            description="Road trip day. Alon volunteers to navigate. 'We'll use GPS' — everyone."
            isAlonMoment
            delay={1400}
          />
          <ScheduleCard
            time="10:00"
            title="Temple of Poseidon"
            description="Cape Sounion. Clifftop temple. Azure sea views. Ancient Greeks had taste."
            delay={1450}
          />
          <ScheduleCard
            time="12:30"
            title="Beach Stop"
            description="Mediterranean in January. Brisk but refreshing. One person goes fully in."
            delay={1500}
          />
          <ScheduleCard
            time="14:30"
            title="Seaside Lunch"
            description="Fresh fish taverna. The owner recommends. Everything is excellent."
            delay={1550}
          />
          <ScheduleCard
            time="17:00"
            title="Return to Athens"
            description="Sunset coastal drive. Alon sleeps in the back. Everyone agrees this is ideal."
            delay={1600}
          />
          <ScheduleCard
            time="20:30"
            title="Farewell Dinner"
            description="Full mezze spread. Too much raki. Speeches about friendship occur."
            delay={1650}
          />
        </DaySection>

        {/* Day 5 */}
        <DaySection 
          date="January 19" 
          day="Sunday" 
          title="Departure" 
          delay={1700}
        >
          <ScheduleCard
            time="09:00"
            title="Slow Morning"
            description="Final Greek breakfast. Deliberate movements. Therapeutic coffee consumption."
            delay={1750}
          />
          <ScheduleCard
            time="11:00"
            title="Last Souvenirs"
            description="Olive oil, spices, magnets. Alon buys a compass. 'Ironic,' he claims."
            delay={1800}
          />
          <ScheduleCard
            time="12:30"
            title="Final Coffee at Syntagma"
            description="Return to where it began. Alon claims he could find it blindfolded now. Untested."
            isAlonMoment
            delay={1850}
          />
          <ScheduleCard
            time="14:00"
            title="Airport Transfer"
            description="Professional taxi driver. Direct route. No wrong turns. Strange sensation."
            delay={1900}
          />
          <ScheduleCard
            time="17:30"
            title="Departure"
            description="Board the flight home. Group chat already planning next trip. Alon's navigation privileges: under review."
            delay={1950}
          />
        </DaySection>

        {/* Footer */}
        <footer 
          className="mt-16 pt-8 border-t border-border text-center"
          style={{ opacity: 0, animation: 'fade-in-up 0.4s ease-out 2000ms forwards' }}
        >
          <blockquote className="text-lg font-display text-foreground italic mb-2">
            "The main square is definitely this way."
          </blockquote>
          <p className="text-sm text-muted-foreground mb-6">
            — Alon, to Ran, Johnatan & Rubi • January 15, 2025
          </p>
          
          <div className="inline-flex items-center gap-4 text-xs text-muted-foreground">
            <span>Successful navigations: 1*</span>
            <span className="w-1 h-1 rounded-full bg-border" />
            <span>*Destination was visible</span>
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
