import { useState, useEffect } from "react";

const AlonTracker = () => {
  const [minutes, setMinutes] = useState(0);
  
  useEffect(() => {
    const interval = setInterval(() => {
      setMinutes(prev => prev + 1);
    }, 60000); // Update every minute
    
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <div className="bg-card border-2 border-secondary shadow-hover rounded-2xl p-4 max-w-xs">
        <div className="flex items-center gap-3">
          <div className="text-4xl animate-wiggle">🗺️</div>
          <div>
            <p className="text-xs font-bold text-secondary uppercase tracking-wide">Live Tracker</p>
            <p className="text-sm text-foreground font-semibold">
              Waiting for Alon to find the main square...
            </p>
            <p className="text-xs text-muted-foreground mt-1">
              Time elapsed: <span className="font-bold text-secondary">{minutes > 0 ? `${minutes} min` : "Just started"}</span>
            </p>
          </div>
        </div>
        <div className="mt-3 h-2 bg-muted rounded-full overflow-hidden">
          <div 
            className="h-full bg-secondary transition-all duration-1000"
            style={{ width: `${Math.min(minutes * 2, 100)}%` }}
          />
        </div>
        <p className="text-xs text-muted-foreground text-center mt-2">
          {minutes < 5 && "He's checking Google Maps..."}
          {minutes >= 5 && minutes < 15 && "Still 'almost there'..."}
          {minutes >= 15 && minutes < 30 && "He took a 'shortcut'..."}
          {minutes >= 30 && "We may need a rescue team 🆘"}
        </p>
      </div>
    </div>
  );
};

export default AlonTracker;
