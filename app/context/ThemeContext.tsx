"use client";

import { createContext, useContext, useEffect, useState, useSyncExternalStore, ReactNode } from "react";

type Theme = "light" | "dark";

// Session-only, in-memory override — same pattern as AgeBandContext. With no
// explicit choice, the site follows the OS/browser's prefers-color-scheme,
// live (it updates if the OS setting changes while the tab is open). An
// explicit choice here only lasts for this tab and resets on a hard reload
// or a new tab — never written to localStorage, cookies, or any server.
type ThemeContextValue = {
  theme: Theme | null;
  effectiveTheme: Theme;
  setTheme: (theme: Theme) => void;
};

const ThemeContext = createContext<ThemeContextValue | null>(null);

function subscribeToSystemTheme(callback: () => void) {
  const mq = window.matchMedia("(prefers-color-scheme: dark)");
  mq.addEventListener("change", callback);
  return () => mq.removeEventListener("change", callback);
}

function getSystemPrefersDark() {
  return window.matchMedia("(prefers-color-scheme: dark)").matches;
}

// Server render (and the client's first hydration pass) has no OS preference
// to read, so both assume light — React reconciles to the real value right
// after mount, same as any other useSyncExternalStore consumer.
function getServerSnapshot() {
  return false;
}

export function ThemeProvider({ children }: { children: ReactNode }) {
  const [theme, setTheme] = useState<Theme | null>(null);
  const systemPrefersDark = useSyncExternalStore(subscribeToSystemTheme, getSystemPrefersDark, getServerSnapshot);
  const effectiveTheme: Theme = theme ?? (systemPrefersDark ? "dark" : "light");

  // Tailwind's dark: utilities only key off this class (see the
  // @custom-variant in globals.css) — applying it from effectiveTheme rather
  // than raw theme is what makes those utilities follow the OS preference
  // too, not just an explicit toggle.
  useEffect(() => {
    const root = document.documentElement;
    root.classList.remove("dark", "light");
    root.classList.add(effectiveTheme);
  }, [effectiveTheme]);

  return <ThemeContext.Provider value={{ theme, effectiveTheme, setTheme }}>{children}</ThemeContext.Provider>;
}

export function useTheme() {
  const ctx = useContext(ThemeContext);
  if (!ctx) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return ctx;
}
