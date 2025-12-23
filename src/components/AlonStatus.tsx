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
];

const AlonStatus = () => {
  const [statusIndex, setStatusIndex] = useState(0);
  const [progress, setProgress] = useState(0);
  
  useEffect(() => {
    const statusInterval = setInterval(() => {
      setStatusIndex(prev => (prev + 1) % statuses.length);
    }, 4000);
    
    const progressInterval = setInterval(() => {
      setProgress(prev => Math.min(prev + 0.5, 85)); // Never reaches 100
    }, 1000);
    
    return () => {
      clearInterval(statusInterval);
      clearInterval(progressInterval);
    };
  }, []);

  const currentStatus = statuses[statusIndex];

  return (
    <div className="bg-card border border-border/50 rounded-2xl p-4 shadow-card">
      <div className="flex items-center justify-between mb-3">
        <div className="flex items-center gap-2">
          <span className="text-xl">{currentStatus.emoji}</span>
          <div>
            <p className="text-xs font-bold text-secondary uppercase tracking-wide">Live Navigation Status</p>
            <p className="text-sm text-foreground font-medium">{currentStatus.text}</p>
          </div>
        </div>
        <div className="text-right">
          <p className="text-2xl font-bold text-secondary">{progress.toFixed(0)}%</p>
          <p className="text-[10px] text-muted-foreground">to Syntagma</p>
        </div>
      </div>
      <div className="h-1.5 bg-muted rounded-full overflow-hidden">
        <div 
          className="h-full bg-gradient-to-r from-secondary to-secondary/60 transition-all duration-1000 rounded-full"
          style={{ width: `${progress}%` }}
        />
      </div>
      <p className="text-[10px] text-muted-foreground text-center mt-2 italic">
        ETA: Unknown • Confidence Level: Low
      </p>
    </div>
  );
};

export default AlonStatus;
