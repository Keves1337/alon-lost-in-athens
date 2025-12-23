import { ReactNode } from "react";

interface DaySectionProps {
  date: string;
  day: string;
  title: string;
  emoji: string;
  children: ReactNode;
  delay?: number;
  isFirst?: boolean;
}

const DaySection = ({ date, day, title, emoji, children, delay = 0, isFirst }: DaySectionProps) => {
  return (
    <section 
      className="mb-12"
      style={{ 
        opacity: 0,
        animation: `fade-in-up 0.5s ease-out ${delay}ms forwards`
      }}
    >
      <div className="sticky top-0 z-10 bg-background/90 backdrop-blur-md py-4 -mx-4 px-4 mb-5 border-b border-border/50">
        <div className="flex items-center gap-4">
          <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center text-2xl shrink-0">
            {emoji}
          </div>
          <div className="flex-1 min-w-0">
            <div className="flex items-center gap-2 flex-wrap">
              <span className="text-xs font-bold text-primary uppercase tracking-wider">{day}</span>
              <span className="text-xs text-muted-foreground">•</span>
              <span className="text-xs text-muted-foreground font-medium">{date}</span>
            </div>
            <h2 className="text-xl font-display text-foreground truncate">{title}</h2>
          </div>
          {isFirst && (
            <div className="bg-secondary/15 text-secondary text-xs font-bold px-3 py-1.5 rounded-lg border border-secondary/25 shrink-0">
              🧭 Alon Leads
            </div>
          )}
        </div>
      </div>
      
      <div className="space-y-3 relative">
        {/* Timeline line */}
        <div className="absolute left-[1.65rem] top-4 bottom-4 w-0.5 bg-gradient-to-b from-primary/30 via-primary/20 to-transparent rounded-full" />
        {children}
      </div>
    </section>
  );
};

export default DaySection;
