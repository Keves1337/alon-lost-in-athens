import { useApp } from "@/context/AppContext";
import { Globe, Moon, Sun } from "lucide-react";

const SettingsBar = () => {
  const { language, setLanguage, theme, setTheme, t } = useApp();

  const toggleLanguage = () => {
    setLanguage(language === "en" ? "he" : "en");
  };

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  return (
    <div className="fixed top-4 right-4 z-50 flex items-center gap-2">
      <button
        onClick={toggleLanguage}
        className="flex items-center gap-1.5 px-3 py-1.5 bg-card border border-border rounded-lg text-sm font-medium text-foreground hover:bg-muted transition-colors shadow-sm"
      >
        <Globe className="w-4 h-4" />
        <span>{t.language}</span>
      </button>

      <button
        onClick={toggleTheme}
        className="flex items-center gap-1.5 px-3 py-1.5 bg-card border border-border rounded-lg text-sm font-medium text-foreground hover:bg-muted transition-colors shadow-sm"
      >
        {theme === "light" ? (
          <>
            <Moon className="w-4 h-4" />
            <span>{t.darkMode}</span>
          </>
        ) : (
          <>
            <Sun className="w-4 h-4" />
            <span>{t.lightMode}</span>
          </>
        )}
      </button>
    </div>
  );
};

export default SettingsBar;
