import { createContext, useContext, useEffect, useState, type ReactNode } from "react";

type Theme = "light" | "dark";

const ThemeContext = createContext<{
  theme: Theme;
  toggle: () => void;
  setTheme: (t: Theme) => void;
}>({ theme: "light", toggle: () => {}, setTheme: () => {} });

export function ThemeProvider({ children }: { children: ReactNode }) {
  const [theme, setThemeState] = useState<Theme>("light");

  useEffect(() => {
    const initial: Theme = document.documentElement.classList.contains("dark") ? "dark" : "light";
    setThemeState(initial);
  }, []);

  const setTheme = (t: Theme) => {
    setThemeState(t);
    if (typeof document !== "undefined") {
      document.documentElement.classList.toggle("dark", t === "dark");
      try {
        localStorage.setItem("theme", t);
      } catch {}
    }
  };

  const toggle = () => setTheme(theme === "dark" ? "light" : "dark");

  return (
    <ThemeContext.Provider value={{ theme, toggle, setTheme }}>{children}</ThemeContext.Provider>
  );
}

export const useTheme = () => useContext(ThemeContext);