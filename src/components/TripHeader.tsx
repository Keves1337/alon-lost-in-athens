const travelers = [
  { name: "Guy 1", emoji: "😎" },
  { name: "Guy 2", emoji: "🧔" },
  { name: "Guy 3", emoji: "😄" },
  { name: "Alon", emoji: "🗺️", isNavigator: true },
];

const TripHeader = () => {
  return (
    <header className="relative overflow-hidden pt-8 pb-12 px-6">
      {/* Background decorations */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/3 via-transparent to-secondary/5" />
      <div className="absolute top-4 right-8 text-6xl opacity-10">🏛️</div>
      <div className="absolute bottom-4 left-8 text-4xl opacity-10">🫒</div>
      
      <div className="max-w-2xl mx-auto text-center relative z-10">
        {/* Date badge */}
        <div 
          className="inline-flex items-center gap-2 bg-primary/10 text-primary text-sm font-bold px-4 py-1.5 rounded-full mb-4"
          style={{ opacity: 0, animation: 'fade-in-up 0.5s ease-out forwards' }}
        >
          <span>🇬🇷</span>
          <span>January 15-19, 2025</span>
        </div>
        
        <h1 
          className="text-4xl md:text-5xl font-display text-foreground mb-3"
          style={{ opacity: 0, animation: 'fade-in-up 0.5s ease-out 100ms forwards' }}
        >
          Athens Trip
        </h1>
        
        <p 
          className="text-base text-muted-foreground max-w-md mx-auto mb-6"
          style={{ opacity: 0, animation: 'fade-in-up 0.5s ease-out 150ms forwards' }}
        >
          4 bros exploring ancient Greece — guided by Alon, who <em>definitely</em> knows where the main square is.
        </p>
        
        {/* Travelers */}
        <div 
          className="flex justify-center gap-2 flex-wrap"
          style={{ opacity: 0, animation: 'fade-in-up 0.5s ease-out 200ms forwards' }}
        >
          {travelers.map((traveler, i) => (
            <div 
              key={i}
              className={`
                flex items-center gap-1.5 px-3 py-1.5 rounded-full text-sm font-medium
                ${traveler.isNavigator 
                  ? 'bg-secondary/15 text-secondary border border-dashed border-secondary/40' 
                  : 'bg-muted text-foreground'
                }
              `}
            >
              <span>{traveler.emoji}</span>
              <span>{traveler.name}</span>
              {traveler.isNavigator && <span className="text-[10px] opacity-70">(Navigator)</span>}
            </div>
          ))}
        </div>
      </div>
    </header>
  );
};

export default TripHeader;
