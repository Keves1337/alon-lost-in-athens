import DaySection from "@/components/DaySection";
import ScheduleCard from "@/components/ScheduleCard";
import AlonTracker from "@/components/AlonTracker";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <header className="relative overflow-hidden py-16 px-6">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-secondary/5" />
        <div className="absolute top-10 right-10 text-8xl opacity-20 animate-float">🏛️</div>
        <div className="absolute bottom-10 left-10 text-6xl opacity-20 animate-float" style={{ animationDelay: '1s' }}>🫒</div>
        
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <p 
            className="text-lg text-primary font-bold uppercase tracking-widest mb-4"
            style={{ opacity: 0, animation: 'fade-in-up 0.6s ease-out forwards' }}
          >
            The Ultimate Bro Trip
          </p>
          <h1 
            className="text-5xl md:text-7xl font-display text-foreground mb-6"
            style={{ opacity: 0, animation: 'fade-in-up 0.6s ease-out 100ms forwards' }}
          >
            Athens 2024
          </h1>
          <p 
            className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed"
            style={{ opacity: 0, animation: 'fade-in-up 0.6s ease-out 200ms forwards' }}
          >
            4 legends. 1 ancient city. And Alon, who definitely knows where the main square is. 
            <span className="text-secondary font-bold"> Allegedly.</span>
          </p>
          
          <div 
            className="flex justify-center gap-4 mt-8 flex-wrap"
            style={{ opacity: 0, animation: 'fade-in-up 0.6s ease-out 300ms forwards' }}
          >
            {['👨‍🦱 Guy 1', '👨‍🦰 Guy 2', '🧔 Guy 3', '🗺️ Alon (Navigator™)'].map((name, i) => (
              <span 
                key={i}
                className={`px-4 py-2 rounded-full text-sm font-bold ${
                  name.includes('Alon') 
                    ? 'bg-secondary/20 text-secondary border-2 border-dashed border-secondary' 
                    : 'bg-primary/10 text-primary'
                }`}
              >
                {name}
              </span>
            ))}
          </div>
        </div>
      </header>

      {/* Schedule */}
      <main className="max-w-4xl mx-auto px-6 pb-32">
        <DaySection day="Day 1" title="Arrival & Orientation" emoji="✈️" delay={400}>
          <ScheduleCard
            time="10:00"
            title="Land at Athens Airport"
            description="Touch down like the gods we are. Immediately argue about who forgot the adapter plugs."
            icon="🛬"
            delay={500}
          />
          <ScheduleCard
            time="11:30"
            title="Hotel Check-in"
            description="Rock-paper-scissors for the bed by the window. Loser sleeps near the bathroom."
            icon="🏨"
            delay={600}
          />
          <ScheduleCard
            time="13:00"
            title="Wait for Alon's Navigation"
            description="Alon assures us he knows EXACTLY where Syntagma Square is. 'It's like 5 minutes from here, trust me bro.'"
            icon="🤔"
            isAlonMoment
            delay={700}
          />
          <ScheduleCard
            time="14:30"
            title="Actually Find Syntagma Square"
            description="After walking in circles for 90 minutes, a kind Greek grandmother points us in the right direction. Alon claims this was 'the scenic route.'"
            icon="🏛️"
            delay={800}
          />
          <ScheduleCard
            time="18:00"
            title="First Greek Dinner"
            description="Order everything on the menu. Pretend we can pronounce 'Moussaka' correctly. We cannot."
            icon="🍽️"
            delay={900}
          />
        </DaySection>

        <DaySection day="Day 2" title="Ancient History Tour" emoji="🏺" delay={1000}>
          <ScheduleCard
            time="09:00"
            title="Breakfast & Coffee"
            description="Greek coffee hits different. Everyone suddenly feels philosophical. Deep discussions about whether Zeus could beat Thor."
            icon="☕"
            delay={1100}
          />
          <ScheduleCard
            time="10:30"
            title="Alon Leads the Way to Acropolis"
            description="'Guys, I studied the map last night. The Acropolis is definitely... that way.' Narrator: It was not that way."
            icon="📍"
            isAlonMoment
            delay={1200}
          />
          <ScheduleCard
            time="12:00"
            title="Finally Reach Acropolis"
            description="The Parthenon is breathtaking. Everyone pretends they remember Greek history from school. Nobody does."
            icon="🏛️"
            delay={1300}
          />
          <ScheduleCard
            time="15:00"
            title="Plaka District Wandering"
            description="Get lost in the narrow streets. Buy matching fridge magnets. This is peak male friendship."
            icon="🛍️"
            delay={1400}
          />
          <ScheduleCard
            time="20:00"
            title="Rooftop Dinner with Acropolis View"
            description="Alon still insisting he 'totally could have found this place without Google Maps.' Sure, buddy."
            icon="🌅"
            delay={1500}
          />
        </DaySection>

        <DaySection day="Day 3" title="Beach Day & Exploration" emoji="🏖️" delay={1600}>
          <ScheduleCard
            time="08:30"
            title="Early Start for the Beach"
            description="Someone suggests renting scooters. Everyone agrees this is a terrible-but-amazing idea."
            icon="🛵"
            delay={1700}
          />
          <ScheduleCard
            time="09:15"
            title="Alon's Beach Navigation"
            description="'The beach is just past the main square.' THREE HOURS LATER: 'Okay maybe it was the OTHER main square.'"
            icon="🏝️"
            isAlonMoment
            delay={1800}
          />
          <ScheduleCard
            time="13:00"
            title="Beach Time (Finally)"
            description="Crystal clear water. Perfect weather. Absolutely no one applies enough sunscreen. Regrets will follow."
            icon="🌊"
            delay={1900}
          />
          <ScheduleCard
            time="17:00"
            title="Sunset Drinks"
            description="Watch the sun set over the Aegean. Contemplate life. Wonder if Alon actually knows where we're having dinner."
            icon="🍹"
            delay={2000}
          />
          <ScheduleCard
            time="21:00"
            title="Night Out in Psiri"
            description="Experience Athens nightlife. Dance terribly. Blame it on the ouzo. Create memories we'll pretend not to remember."
            icon="🎉"
            delay={2100}
          />
        </DaySection>

        <DaySection day="Day 4" title="Last Day & Departure" emoji="😢" delay={2200}>
          <ScheduleCard
            time="10:00"
            title="Hungover Breakfast"
            description="Everyone moves in slow motion. Coffee is consumed in religious silence. Eye contact is avoided."
            icon="🥴"
            delay={2300}
          />
          <ScheduleCard
            time="12:00"
            title="Last-Minute Souvenir Shopping"
            description="Buy olive oil for parents. Matching 'I Love Athens' shirts for ironic future use. More fridge magnets."
            icon="🎁"
            delay={2400}
          />
          <ScheduleCard
            time="14:00"
            title="Alon's Route to Airport"
            description="'I know a shortcut!' Famous last words. GPS is wrestled from his hands for the safety of all."
            icon="🚕"
            isAlonMoment
            delay={2500}
          />
          <ScheduleCard
            time="16:00"
            title="Departure"
            description="Board the plane. Already planning the next trip. Alon is banned from navigation duties forever. Just kidding. Maybe."
            icon="✈️"
            delay={2600}
          />
        </DaySection>

        {/* Footer Quote */}
        <div 
          className="text-center mt-16 p-8 bg-card rounded-3xl shadow-card border border-border/50"
          style={{ opacity: 0, animation: 'fade-in-up 0.6s ease-out 2700ms forwards' }}
        >
          <p className="text-2xl font-display text-foreground mb-4">
            "The main square is definitely this way"
          </p>
          <p className="text-muted-foreground italic">
            — Alon, multiple times, incorrectly
          </p>
          <div className="mt-6 text-6xl">🇬🇷</div>
        </div>
      </main>

      <AlonTracker />
    </div>
  );
};

export default Index;
