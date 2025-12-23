const travelers = [
  { name: "Ran", emoji: "😎" },
  { name: "Johnatan", emoji: "🧔" },
  { name: "Rubi Dabush Elbaz", emoji: "👑" },
  { name: "Alon", emoji: "🧭", isNavigator: true },
];

const TripHeader = () => {
  return (
    <header className="relative overflow-hidden pt-10 pb-14 px-6">
      {/* Greek pattern background */}
      <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-transparent to-background" />
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-aegean" />
      
      {/* Decorative elements */}
      <div className="absolute top-6 right-6 flex gap-1">
        {[...Array(5)].map((_, i) => (
          <div 
            key={i} 
            className="w-2 h-2 rounded-full bg-primary/20"
            style={{ animationDelay: `${i * 100}ms` }}
          />
        ))}
      </div>
      <div className="absolute bottom-8 left-6 text-5xl opacity-15 animate-wave">🌊</div>
      <div className="absolute top-12 right-12 text-4xl opacity-10">🏛️</div>
      
      <div className="max-w-2xl mx-auto text-center relative z-10">
        {/* Greek flag colors accent */}
        <div 
          className="flex justify-center gap-1 mb-4"
          style={{ opacity: 0, animation: 'fade-in-up 0.5s ease-out forwards' }}
        >
          <div className="w-8 h-1 rounded-full bg-primary" />
          <div className="w-8 h-1 rounded-full bg-card" />
          <div className="w-8 h-1 rounded-full bg-primary" />
        </div>
        
        {/* Date badge */}
        <div 
          className="inline-flex items-center gap-2 bg-primary text-primary-foreground text-sm font-bold px-5 py-2 rounded-full mb-5 shadow-card"
          style={{ opacity: 0, animation: 'fade-in-up 0.5s ease-out 50ms forwards' }}
        >
          <span>🇬🇷</span>
          <span>January 15-19, 2025</span>
          <span>🇬🇷</span>
        </div>
        
        <h1 
          className="text-4xl md:text-6xl font-display text-foreground mb-4"
          style={{ opacity: 0, animation: 'fade-in-up 0.5s ease-out 100ms forwards' }}
        >
          Athens <span className="text-gradient-aegean">Adventure</span>
        </h1>
        
        <p 
          className="text-base text-muted-foreground max-w-md mx-auto mb-8 leading-relaxed"
          style={{ opacity: 0, animation: 'fade-in-up 0.5s ease-out 150ms forwards' }}
        >
          4 legends exploring the cradle of civilization — expertly guided by Alon, 
          who <em className="text-secondary font-medium">definitely</em> knows where Syntagma Square is.
        </p>
        
        {/* Travelers */}
        <div 
          className="flex justify-center gap-3 flex-wrap"
          style={{ opacity: 0, animation: 'fade-in-up 0.5s ease-out 200ms forwards' }}
        >
          {travelers.map((traveler, i) => (
            <div 
              key={i}
              className={`
                flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-semibold
                transition-all duration-300 hover:scale-105
                ${traveler.isNavigator 
                  ? 'bg-secondary text-secondary-foreground shadow-lg ring-2 ring-secondary/30 ring-offset-2 ring-offset-background' 
                  : 'bg-card text-foreground shadow-card border border-border/50'
                }
              `}
            >
              <span className="text-lg">{traveler.emoji}</span>
              <span>{traveler.name}</span>
              {traveler.isNavigator && (
                <span className="text-[10px] bg-secondary-foreground/20 px-1.5 py-0.5 rounded-md">
                  Navigator™
                </span>
              )}
            </div>
          ))}
        </div>
      </div>
    </header>
  );
};

export default TripHeader;
