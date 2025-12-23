import { ReactNode } from "react";

interface ScheduleCardProps {
  time: string;
  title: string;
  description: string;
  icon: ReactNode;
  isAlonMoment?: boolean;
  delay?: number;
  status?: "done" | "current" | "upcoming";
}

const ScheduleCard = ({ time, title, description, icon, isAlonMoment, delay = 0, status = "upcoming" }: ScheduleCardProps) => {
  return (
    <div 
      className={`
        relative p-5 rounded-xl transition-all duration-300 hover:scale-[1.01] group
        ${isAlonMoment 
          ? 'bg-gradient-to-r from-secondary/5 to-secondary/10 border-l-4 border-secondary' 
          : 'bg-card/80 backdrop-blur-sm border border-border/30 hover:border-primary/30'
        }
        ${status === "current" ? "ring-2 ring-primary/50 shadow-lg" : ""}
      `}
      style={{ 
        animationDelay: `${delay}ms`,
        opacity: 0,
        animation: `fade-in-up 0.5s ease-out ${delay}ms forwards`
      }}
    >
      {isAlonMoment && (
        <div className="absolute -top-2 right-4 bg-secondary text-secondary-foreground text-[10px] font-bold px-2 py-0.5 rounded-full">
          ⏳ Alon Time
        </div>
      )}
      
      <div className="flex items-start gap-4">
        <div className={`
          w-12 h-12 rounded-lg flex items-center justify-center text-xl shrink-0
          transition-transform duration-300 group-hover:scale-110
          ${isAlonMoment ? 'bg-secondary/15' : 'bg-primary/10'}
        `}>
          {icon}
        </div>
        
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-2 mb-1">
            <span className={`
              text-xs font-bold px-2 py-0.5 rounded-md
              ${isAlonMoment ? 'bg-secondary/15 text-secondary' : 'bg-primary/10 text-primary'}
            `}>
              {time}
            </span>
            {status === "current" && (
              <span className="text-[10px] font-bold text-accent uppercase tracking-wide animate-pulse">Now</span>
            )}
          </div>
          
          <h3 className="text-base font-bold text-foreground mb-0.5 leading-tight">{title}</h3>
          <p className="text-sm text-muted-foreground leading-relaxed">{description}</p>
        </div>
      </div>
    </div>
  );
};

export default ScheduleCard;
