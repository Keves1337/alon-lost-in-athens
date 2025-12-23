const travelers = [
  { name: "Ran" },
  { name: "Johnatan" },
  { name: "Rubi Dabush Elbaz" },
  { name: "Alon", isNavigator: true },
];

const TripHeader = () => {
  return (
    <header className="relative pt-12 pb-16 px-6 border-b border-border">
      <div className="max-w-3xl mx-auto">
        {/* Top bar */}
        <div 
          className="flex items-center justify-between mb-10"
          style={{ opacity: 0, animation: 'fade-in-up 0.5s ease-out forwards' }}
        >
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center">
              <span className="text-primary-foreground text-sm">🇬🇷</span>
            </div>
            <span className="text-sm font-semibold text-foreground tracking-tight">Athens 2025</span>
          </div>
          <div className="text-xs text-muted-foreground font-medium">
            Jan 15 — Jan 19
          </div>
        </div>
        
        {/* Main heading */}
        <div className="mb-10">
          <p 
            className="text-sm font-medium text-primary mb-3 tracking-wide"
            style={{ opacity: 0, animation: 'fade-in-up 0.5s ease-out 50ms forwards' }}
          >
            TRIP ITINERARY
          </p>
          <h1 
            className="text-4xl md:text-5xl lg:text-6xl font-display text-foreground leading-[1.1] mb-4"
            style={{ opacity: 0, animation: 'fade-in-up 0.5s ease-out 100ms forwards' }}
          >
            Athens, Greece
          </h1>
          <p 
            className="text-lg text-muted-foreground max-w-xl leading-relaxed"
            style={{ opacity: 0, animation: 'fade-in-up 0.5s ease-out 150ms forwards' }}
          >
            A 5-day exploration of ancient wonders and Mediterranean culture. 
            Navigation provided by Alon — <span className="italic">results may vary.</span>
          </p>
        </div>
        
        {/* Travelers */}
        <div 
          className="flex flex-col gap-4"
          style={{ opacity: 0, animation: 'fade-in-up 0.5s ease-out 200ms forwards' }}
        >
          <span className="text-xs font-medium text-muted-foreground uppercase tracking-wider">Travelers</span>
          <div className="flex items-center gap-3 flex-wrap">
            {travelers.map((traveler, i) => (
              <div 
                key={i}
                className={`
                  px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200
                  ${traveler.isNavigator 
                    ? 'bg-secondary text-secondary-foreground' 
                    : 'bg-muted text-foreground hover:bg-primary hover:text-primary-foreground'
                  }
                `}
              >
                {traveler.name}
                {traveler.isNavigator && (
                  <span className="ml-2 text-xs opacity-80">🧭 Navigator</span>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </header>
  );
};

export default TripHeader;
