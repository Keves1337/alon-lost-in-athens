import { createContext, useContext, useState, useEffect, ReactNode } from "react";
import { Language, getTranslation } from "@/lib/translations";

type Theme = "light" | "dark";

interface AppContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  theme: Theme;
  setTheme: (theme: Theme) => void;
  t: ReturnType<typeof getTranslation>;
  isRTL: boolean;
}

const AppContext = createContext<AppContextType | undefined>(undefined);

export function AppProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>("en");
  const [theme, setTheme] = useState<Theme>("light");

  const t = getTranslation(language);
  const isRTL = language === "he";

  useEffect(() => {
    document.documentElement.dir = isRTL ? "rtl" : "ltr";
    document.documentElement.lang = language;
  }, [isRTL, language]);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", theme === "dark");
  }, [theme]);

  return (
    <AppContext.Provider value={{ language, setLanguage, theme, setTheme, t, isRTL }}>
      {children}
    </AppContext.Provider>
  );
}

export function useApp() {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error("useApp must be used within AppProvider");
  }
  return context;
}
