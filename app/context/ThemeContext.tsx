"use client";

import { createContext, useContext, useEffect, useState, ReactNode } from "react";

type Theme = "light" | "dark";

// Session-only, in-memory override — same pattern as AgeBandContext. With no
// explicit choice, the site follows the OS/browser's prefers-color-scheme, as
// it always has. An explicit choice here only lasts for this tab and resets
// on a hard reload or a new tab — never written to localStorage, cookies, or
// any server.
type ThemeContextValue = {
  theme: Theme | null;
  setTheme: (theme: Theme) => void;
};

const ThemeContext = createContext<ThemeContextValue | null>(null);

export function ThemeProvider({ children }: { children: ReactNode }) {
  const [theme, setTheme] = useState<Theme | null>(null);

  useEffect(() => {
    const root = document.documentElement;
    root.classList.remove("dark", "light");
    if (theme) root.classList.add(theme);
  }, [theme]);

  return <ThemeContext.Provider value={{ theme, setTheme }}>{children}</ThemeContext.Provider>;
}

export function useTheme() {
  const ctx = useContext(ThemeContext);
  if (!ctx) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return ctx;
}
