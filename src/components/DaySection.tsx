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
      className="mb-10"
      style={{ 
        opacity: 0,
        animation: `fade-in-up 0.5s ease-out ${delay}ms forwards`
      }}
    >
      <div className="sticky top-0 z-10 bg-background/80 backdrop-blur-md py-4 -mx-4 px-4 mb-4">
        <div className="flex items-center gap-3">
          <div className="text-3xl">{emoji}</div>
          <div className="flex-1">
            <div className="flex items-baseline gap-2">
              <span className="text-xs font-bold text-primary uppercase tracking-wider">{day}</span>
              <span className="text-xs text-muted-foreground">{date}</span>
            </div>
            <h2 className="text-xl font-bold text-foreground">{title}</h2>
          </div>
          {isFirst && (
            <div className="bg-secondary/10 text-secondary text-xs font-bold px-3 py-1 rounded-full border border-secondary/20">
              🗺️ Alon's Big Day
            </div>
          )}
        </div>
      </div>
      
      <div className="space-y-3">
        {children}
      </div>
    </section>
  );
};

export default DaySection;
