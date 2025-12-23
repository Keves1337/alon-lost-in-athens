import { useState, useEffect } from "react";
import { useApp } from "@/context/AppContext";

const AlonStatus = () => {
  const { t } = useApp();
  const [statusIndex, setStatusIndex] = useState(0);
  const [progress, setProgress] = useState(23);

  useEffect(() => {
    const statusInterval = setInterval(() => {
      setStatusIndex((prev) => (prev + 1) % t.statuses.length);
    }, 4000);

    const progressInterval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 72) return 28 + Math.random() * 15;
        return prev + Math.random() * 3;
      });
    }, 1200);

    return () => {
      clearInterval(statusInterval);
      clearInterval(progressInterval);
    };
  }, [t.statuses.length]);

  return (
    <div className="bg-card border border-border rounded-lg p-4 shadow-sm">
      <div className="flex items-center justify-between mb-3">
        <div className="flex items-center gap-3">
          <div className="w-2 h-2 rounded-full bg-secondary animate-pulse" />
          <span className="text-xs font-semibold text-foreground">{t.navigationStatus}</span>
        </div>
        <span className="text-xs text-muted-foreground font-medium">{t.live}</span>
      </div>

      <div className="flex items-end justify-between mb-2">
        <p className="text-sm text-muted-foreground">{t.statuses[statusIndex]}</p>
        <p className="text-2xl font-semibold text-foreground tabular-nums">{progress.toFixed(0)}%</p>
      </div>

      <div className="h-1 bg-muted rounded-full overflow-hidden">
        <div
          className="h-full bg-primary transition-all duration-1000 ease-out rounded-full"
          style={{ width: `${progress}%` }}
        />
      </div>

      <p className="text-[11px] text-muted-foreground mt-2">
        {t.etaLabel} {t.etaValue}
      </p>
    </div>
  );
};

export default AlonStatus;
