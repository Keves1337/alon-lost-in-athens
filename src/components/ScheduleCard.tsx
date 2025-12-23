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
        relative pl-14 pr-4 py-4 rounded-xl transition-all duration-300 hover:translate-x-1 group
        ${isAlonMoment 
          ? 'bg-secondary/8 border-l-4 border-secondary ml-0' 
          : 'bg-card/60 backdrop-blur-sm border border-border/40 hover:border-primary/30 hover:shadow-card'
        }
        ${status === "current" ? "ring-2 ring-primary/40 shadow-lg" : ""}
      `}
      style={{ 
        animationDelay: `${delay}ms`,
        opacity: 0,
        animation: `fade-in-up 0.4s ease-out ${delay}ms forwards`
      }}
    >
      {/* Timeline dot */}
      <div className={`
        absolute left-[1.15rem] top-6 w-3 h-3 rounded-full border-2 
        ${isAlonMoment 
          ? 'bg-secondary border-secondary/50' 
          : 'bg-primary border-primary/50'
        }
        transition-transform group-hover:scale-125
      `} />
      
      {isAlonMoment && (
        <div className="absolute -top-2 right-3 bg-secondary text-secondary-foreground text-[9px] font-bold px-2 py-0.5 rounded-md shadow-sm">
          ⏳ Alon Time
        </div>
      )}
      
      <div className="flex items-start gap-3">
        <div className={`
          w-10 h-10 rounded-lg flex items-center justify-center text-lg shrink-0
          transition-all duration-300 group-hover:scale-110 group-hover:rotate-3
          ${isAlonMoment ? 'bg-secondary/15' : 'bg-primary/10'}
        `}>
          {icon}
        </div>
        
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-2 mb-1">
            <span className={`
              text-[11px] font-bold px-2 py-0.5 rounded-md
              ${isAlonMoment ? 'bg-secondary/15 text-secondary' : 'bg-primary/10 text-primary'}
            `}>
              {time}
            </span>
            {status === "current" && (
              <span className="text-[9px] font-bold text-accent bg-accent/15 px-1.5 py-0.5 rounded animate-pulse">LIVE</span>
            )}
          </div>
          
          <h3 className="text-sm font-bold text-foreground mb-0.5 leading-snug">{title}</h3>
          <p className="text-[13px] text-muted-foreground leading-relaxed">{description}</p>
        </div>
      </div>
    </div>
  );
};

export default ScheduleCard;
