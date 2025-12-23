import { useState, useEffect } from "react";

const statuses = [
  { text: "Checking Google Maps...", emoji: "📱" },
  { text: "Rotating the phone to see better...", emoji: "🔄" },
  { text: "Asking a local (in English)...", emoji: "🗣️" },
  { text: "Claims we passed it already...", emoji: "🤔" },
  { text: "Taking a 'shortcut'...", emoji: "🚶" },
  { text: "Stopped for coffee 'real quick'...", emoji: "☕" },
  { text: "Says it's 'just around the corner'...", emoji: "📍" },
  { text: "Blaming the GPS signal...", emoji: "📡" },
  { text: "Consulting with a stray cat...", emoji: "🐱" },
  { text: "Found a nice view, forgot the mission...", emoji: "🌅" },
];

const AlonStatus = () => {
  const [statusIndex, setStatusIndex] = useState(0);
  const [progress, setProgress] = useState(0);
  
  useEffect(() => {
    const statusInterval = setInterval(() => {
      setStatusIndex(prev => (prev + 1) % statuses.length);
    }, 3500);
    
    const progressInterval = setInterval(() => {
      setProgress(prev => {
        // Progress goes up and down, never reaching 100
        if (prev >= 78) return 45;
        return prev + Math.random() * 2;
      });
    }, 800);
    
    return () => {
      clearInterval(statusInterval);
      clearInterval(progressInterval);
    };
  }, []);

  const currentStatus = statuses[statusIndex];

  return (
    <div className="bg-card border border-primary/20 rounded-2xl p-5 shadow-card overflow-hidden relative">
      {/* Decorative wave pattern */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-aegean opacity-50" />
      
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-2xl">
            {currentStatus.emoji}
          </div>
          <div>
            <p className="text-xs font-bold text-primary uppercase tracking-wider">Alon's Navigation Status</p>
            <p className="text-sm text-foreground font-semibold mt-0.5">{currentStatus.text}</p>
          </div>
        </div>
        <div className="text-right">
          <p className="text-3xl font-bold text-primary">{progress.toFixed(0)}%</p>
          <p className="text-[10px] text-muted-foreground font-medium">to Syntagma</p>
        </div>
      </div>
      
      <div className="h-2 bg-muted rounded-full overflow-hidden">
        <div 
          className="h-full bg-gradient-aegean transition-all duration-700 rounded-full"
          style={{ width: `${progress}%` }}
        />
      </div>
      
      <div className="flex items-center justify-between mt-3">
        <p className="text-[11px] text-muted-foreground">
          ETA: <span className="text-secondary font-semibold">¯\_(ツ)_/¯</span>
        </p>
        <p className="text-[11px] text-muted-foreground">
          Confidence: <span className="text-secondary font-semibold">Suspiciously High</span>
        </p>
      </div>
    </div>
  );
};

export default AlonStatus;
