interface ScheduleCardProps {
  time: string;
  title: string;
  description: string;
  isAlonMoment?: boolean;
  delay?: number;
}

const ScheduleCard = ({ time, title, description, isAlonMoment, delay = 0 }: ScheduleCardProps) => {
  return (
    <div 
      className={`
        group relative flex gap-4 p-4 rounded-lg transition-all duration-200
        ${isAlonMoment 
          ? 'bg-secondary/5 border-l-2 border-secondary' 
          : 'hover:bg-muted/50'
        }
      `}
      style={{ 
        animationDelay: `${delay}ms`,
        opacity: 0,
        animation: `fade-in-up 0.3s ease-out ${delay}ms forwards`
      }}
    >
      <div className="w-12 shrink-0">
        <span className="text-xs font-medium text-muted-foreground">{time}</span>
      </div>
      
      <div className="flex-1 min-w-0">
        <div className="flex items-start gap-2">
          <h3 className="text-sm font-semibold text-foreground leading-snug">{title}</h3>
          {isAlonMoment && (
            <span className="text-[9px] font-semibold text-secondary bg-secondary/10 px-1.5 py-0.5 rounded shrink-0">
              🧭
            </span>
          )}
        </div>
        <p className="text-sm text-muted-foreground leading-relaxed mt-0.5">{description}</p>
      </div>
    </div>
  );
};

export default ScheduleCard;
