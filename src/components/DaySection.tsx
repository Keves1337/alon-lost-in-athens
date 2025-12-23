import { ReactNode } from "react";

interface DaySectionProps {
  day: string;
  title: string;
  emoji: string;
  children: ReactNode;
  delay?: number;
}

const DaySection = ({ day, title, emoji, children, delay = 0 }: DaySectionProps) => {
  return (
    <section 
      className="mb-12"
      style={{ 
        opacity: 0,
        animation: `fade-in-up 0.6s ease-out ${delay}ms forwards`
      }}
    >
      <div className="flex items-center gap-4 mb-6">
        <div className="text-5xl animate-float">{emoji}</div>
        <div>
          <span className="text-sm font-bold text-primary uppercase tracking-wider">{day}</span>
          <h2 className="text-3xl font-display text-foreground">{title}</h2>
        </div>
      </div>
      
      <div className="space-y-4 pl-4 border-l-4 border-primary/20">
        {children}
      </div>
    </section>
  );
};

export default DaySection;
