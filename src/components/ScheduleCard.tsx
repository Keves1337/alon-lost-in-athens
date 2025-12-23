import { ReactNode } from "react";

interface ScheduleCardProps {
  time: string;
  title: string;
  description: string;
  icon: ReactNode;
  isAlonMoment?: boolean;
  delay?: number;
}

const ScheduleCard = ({ time, title, description, icon, isAlonMoment, delay = 0 }: ScheduleCardProps) => {
  return (
    <div 
      className={`
        relative p-6 rounded-2xl transition-all duration-300 hover:scale-[1.02]
        ${isAlonMoment 
          ? 'bg-secondary/10 border-2 border-dashed border-secondary shadow-lg animate-pulse-glow' 
          : 'bg-card shadow-card hover:shadow-hover border border-border/50'
        }
      `}
      style={{ 
        animationDelay: `${delay}ms`,
        opacity: 0,
        animation: `fade-in-up 0.6s ease-out ${delay}ms forwards`
      }}
    >
      {isAlonMoment && (
        <div className="absolute -top-3 -right-3 bg-secondary text-secondary-foreground text-xs font-bold px-3 py-1 rounded-full animate-wiggle">
          🤷‍♂️ Classic Alon
        </div>
      )}
      
      <div className="flex items-start gap-4">
        <div className={`
          p-3 rounded-xl text-2xl
          ${isAlonMoment ? 'bg-secondary/20' : 'bg-primary/10'}
        `}>
          {icon}
        </div>
        
        <div className="flex-1">
          <div className="flex items-center gap-3 mb-2">
            <span className={`
              text-sm font-bold px-3 py-1 rounded-full
              ${isAlonMoment ? 'bg-secondary/20 text-secondary' : 'bg-primary/10 text-primary'}
            `}>
              {time}
            </span>
          </div>
          
          <h3 className="text-xl font-bold text-foreground mb-1">{title}</h3>
          <p className="text-muted-foreground leading-relaxed">{description}</p>
        </div>
      </div>
    </div>
  );
};

export default ScheduleCard;
