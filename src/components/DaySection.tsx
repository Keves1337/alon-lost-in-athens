import { ReactNode } from "react";
import { useApp } from "@/context/AppContext";

interface DaySectionProps {
  date: string;
  dateNum: string;
  day: string;
  title: string;
  children: ReactNode;
  delay?: number;
  isFirst?: boolean;
}

const DaySection = ({ date, dateNum, day, title, children, delay = 0, isFirst }: DaySectionProps) => {
  const { t, isRTL } = useApp();

  return (
    <section
      className="mb-12"
      style={{
        opacity: 0,
        animation: `fade-in-up 0.4s ease-out ${delay}ms forwards`,
      }}
    >
      <div className={`flex items-start gap-6 mb-6 ${isRTL ? "flex-row-reverse text-right" : ""}`}>
        <div className="w-14 text-center shrink-0">
          <p className="text-2xl font-semibold text-foreground leading-none">{dateNum}</p>
          <p className="text-xs text-muted-foreground font-medium mt-1">
            {isRTL ? "ינו׳" : "JAN"}
          </p>
        </div>
        <div className="flex-1 pt-1">
          <div className={`flex items-center gap-3 mb-1 ${isRTL ? "flex-row-reverse justify-end" : ""}`}>
            <h2 className="text-lg font-display text-foreground">{title}</h2>
            {isFirst && (
              <span className="text-[10px] font-semibold text-secondary bg-secondary/10 px-2 py-0.5 rounded">
                {t.alonNavigates}
              </span>
            )}
          </div>
          <p className="text-sm text-muted-foreground">{day}</p>
        </div>
      </div>

      <div className={`space-y-2 ${isRTL ? "mr-20" : "ml-20"}`}>{children}</div>
    </section>
  );
};

export default DaySection;
