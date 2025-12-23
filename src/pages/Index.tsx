import DaySection from "@/components/DaySection";
import ScheduleCard from "@/components/ScheduleCard";
import AlonStatus from "@/components/AlonStatus";
import TripHeader from "@/components/TripHeader";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <TripHeader />

      {/* Alon Status Widget */}
      <div className="max-w-2xl mx-auto px-6 mb-8">
        <AlonStatus />
      </div>

      {/* Schedule */}
      <main className="max-w-2xl mx-auto px-6 pb-20">
        
        {/* Day 1 - January 15 */}
        <DaySection 
          date="January 15, 2025" 
          day="Wednesday" 
          title="Arrival & The Navigation Begins" 
          emoji="✈️" 
          delay={300}
          isFirst
        >
          <ScheduleCard
            time="10:30"
            title="Land at Athens International"
            description="Touch down in Greece. Alon immediately announces he's 'got this' regarding directions."
            icon="🛬"
            delay={350}
          />
          <ScheduleCard
            time="12:00"
            title="Hotel Check-in"
            description="Drop bags at the hotel. Alon studies the map intensely for 4 minutes."
            icon="🏨"
            delay={400}
          />
          <ScheduleCard
            time="12:30"
            title="Operation: Find Syntagma Square"
            description="Alon confidently leads us out. 'It's literally a 10-minute walk, I checked.' The adventure begins."
            icon="🚶"
            isAlonMoment
            delay={450}
          />
          <ScheduleCard
            time="12:45"
            title="First Wrong Turn"
            description="'No no, this is correct, we just need to go around this block.' Narrator: We did not need to."
            icon="↩️"
            isAlonMoment
            delay={500}
          />
          <ScheduleCard
            time="13:15"
            title="Coffee Break (Unplanned)"
            description="'Let's stop here and recalibrate.' Translation: Alon needs to secretly check Google Maps."
            icon="☕"
            isAlonMoment
            delay={550}
          />
          <ScheduleCard
            time="14:00"
            title="Arrive at Syntagma Square"
            description="Finally made it. Everyone agrees never to speak of the 90-minute 'scenic route' again."
            icon="🏛️"
            delay={600}
          />
          <ScheduleCard
            time="15:00"
            title="Changing of the Guard"
            description="Watch the Evzones at the Parliament. Actually impressive. We all pretend we knew this was here."
            icon="💂"
            delay={650}
          />
          <ScheduleCard
            time="19:00"
            title="First Greek Dinner"
            description="Taverna in Plaka. Order way too much food. Discover ouzo is stronger than expected."
            icon="🍽️"
            delay={700}
          />
        </DaySection>

        {/* Day 2 - January 16 */}
        <DaySection 
          date="January 16, 2025" 
          day="Thursday" 
          title="Acropolis & Ancient Wonders" 
          emoji="🏛️" 
          delay={750}
        >
          <ScheduleCard
            time="08:30"
            title="Early Breakfast"
            description="Greek coffee and spanakopita. Everyone pretends they're not still thinking about last night's ouzo."
            icon="🥐"
            delay={800}
          />
          <ScheduleCard
            time="09:30"
            title="Walk to Acropolis"
            description="Alon suggests a 'better route' than Google Maps. Group votes to follow the blue line this time."
            icon="🗺️"
            isAlonMoment
            delay={850}
          />
          <ScheduleCard
            time="10:00"
            title="The Acropolis"
            description="The Parthenon is genuinely breathtaking. 2,500 years of history. Everyone takes the same photo."
            icon="🏛️"
            delay={900}
          />
          <ScheduleCard
            time="12:30"
            title="Acropolis Museum"
            description="World-class collection. Learn things we immediately forget. Gift shop purchases are made."
            icon="🎭"
            delay={950}
          />
          <ScheduleCard
            time="14:00"
            title="Lunch in Monastiraki"
            description="Souvlaki from the famous spots. Alon claims he 'knows a local place' but we stay put."
            icon="🥙"
            delay={1000}
          />
          <ScheduleCard
            time="16:00"
            title="Ancient Agora"
            description="Where Socrates walked. Someone makes a philosophy joke. It doesn't land."
            icon="📜"
            delay={1050}
          />
          <ScheduleCard
            time="20:00"
            title="Rooftop Dinner with View"
            description="Acropolis lit up at night. Perfect for Instagram. Alon navigated here successfully (it was visible from the street)."
            icon="🌙"
            delay={1100}
          />
        </DaySection>

        {/* Day 3 - January 17 */}
        <DaySection 
          date="January 17, 2025" 
          day="Friday" 
          title="Markets & Hidden Gems" 
          emoji="🛍️" 
          delay={1150}
        >
          <ScheduleCard
            time="09:00"
            title="Central Market"
            description="Athens Central Market experience. Fish, meat, spices. Someone almost buys a whole octopus."
            icon="🐟"
            delay={1200}
          />
          <ScheduleCard
            time="11:00"
            title="Coffee in Kolonaki"
            description="Upscale neighborhood vibes. Pretend we belong here while spending €7 on a latte."
            icon="☕"
            delay={1250}
          />
          <ScheduleCard
            time="12:30"
            title="Alon's Shortcut to Lycabettus"
            description="'Trust me, I found stairs that go straight up.' 45 minutes later, we find the funicular."
            icon="🏔️"
            isAlonMoment
            delay={1300}
          />
          <ScheduleCard
            time="14:00"
            title="Lycabettus Hill"
            description="360° views of Athens. Worth the climb (that the funicular would have avoided)."
            icon="⛰️"
            delay={1350}
          />
          <ScheduleCard
            time="16:00"
            title="National Garden Stroll"
            description="Peaceful escape in the city center. Turtles in the pond. Very wholesome."
            icon="🌳"
            delay={1400}
          />
          <ScheduleCard
            time="18:00"
            title="Psiri Neighborhood"
            description="Street art, quirky bars, great vibes. Alon loses us for 20 mins, claims he was 'scouting ahead.'"
            icon="🎨"
            isAlonMoment
            delay={1450}
          />
          <ScheduleCard
            time="21:00"
            title="Athens Nightlife"
            description="Bars in Gazi. Dance to music we don't recognize. Create memories we'll selectively forget."
            icon="🎉"
            delay={1500}
          />
        </DaySection>

        {/* Day 4 - January 18 */}
        <DaySection 
          date="January 18, 2025" 
          day="Saturday" 
          title="Day Trip & Beach Time" 
          emoji="🏖️" 
          delay={1550}
        >
          <ScheduleCard
            time="08:00"
            title="Rent a Car"
            description="Road trip day. Alon volunteers to navigate. Three voices say 'we'll use the GPS' simultaneously."
            icon="🚗"
            isAlonMoment
            delay={1600}
          />
          <ScheduleCard
            time="10:00"
            title="Temple of Poseidon at Sounion"
            description="Stunning clifftop temple. Azure sea views. Ancient Greeks had taste."
            icon="🔱"
            delay={1650}
          />
          <ScheduleCard
            time="12:30"
            title="Beach Stop"
            description="Find a quiet beach. Mediterranean water in January is brisk but refreshing. One person goes fully in."
            icon="🌊"
            delay={1700}
          />
          <ScheduleCard
            time="14:30"
            title="Seaside Lunch"
            description="Fresh fish taverna. The owner recommends dishes. Everything is incredible."
            icon="🦐"
            delay={1750}
          />
          <ScheduleCard
            time="17:00"
            title="Drive Back to Athens"
            description="Sunset drive along the coast. Alon sleeps in the back. Everyone agrees this is ideal."
            icon="🌅"
            delay={1800}
          />
          <ScheduleCard
            time="20:30"
            title="Last Big Dinner"
            description="Full mezze spread. Too much raki. Speeches about friendship that will be denied tomorrow."
            icon="🍷"
            delay={1850}
          />
        </DaySection>

        {/* Day 5 - January 19 */}
        <DaySection 
          date="January 19, 2025" 
          day="Sunday" 
          title="Farewell Athens" 
          emoji="👋" 
          delay={1900}
        >
          <ScheduleCard
            time="09:00"
            title="Slow Morning"
            description="Last Greek breakfast. Everyone moves carefully. Coffee consumption is therapeutic."
            icon="😴"
            delay={1950}
          />
          <ScheduleCard
            time="11:00"
            title="Final Souvenir Run"
            description="Olive oil, spices, magnets. The essentials. Alon buys a compass as a 'joke.'"
            icon="🎁"
            delay={2000}
          />
          <ScheduleCard
            time="12:30"
            title="One Last Coffee at Syntagma"
            description="Return to where it all began. Alon claims he 'could find it blindfolded now.' No one tests this."
            icon="☕"
            isAlonMoment
            delay={2050}
          />
          <ScheduleCard
            time="14:00"
            title="Taxi to Airport"
            description="Professional driver. No wrong turns. Strange feeling."
            icon="🚕"
            delay={2100}
          />
          <ScheduleCard
            time="17:30"
            title="Departure"
            description="Board the plane home. Group chat immediately starts planning the next trip. Alon is pre-banned from navigation."
            icon="✈️"
            delay={2150}
          />
        </DaySection>

        {/* Footer */}
        <div 
          className="text-center mt-12 p-6 bg-card/50 rounded-2xl border border-border/30"
          style={{ opacity: 0, animation: 'fade-in-up 0.5s ease-out 2200ms forwards' }}
        >
          <p className="text-lg font-display text-foreground mb-2">
            "The main square is definitely this way"
          </p>
          <p className="text-sm text-muted-foreground">
            — Alon, January 15, 2025 (and several times after)
          </p>
          <div className="flex justify-center gap-2 mt-4 text-2xl">
            <span>🇬🇷</span>
            <span>🗺️</span>
            <span>❓</span>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Index;
