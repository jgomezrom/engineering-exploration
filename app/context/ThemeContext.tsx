"use client";

import { createContext, useContext, useLayoutEffect, useState, useSyncExternalStore, ReactNode } from "react";

type Theme = "light" | "dark";

// Explicit choices persist in localStorage (same pattern as
// LanguageContext), so the toggle sticks across reloads and new tabs. With
// no saved choice, the site follows the OS/browser's prefers-color-scheme,
// live (it updates if the OS setting changes while the tab is open). The
// inline script in layout.tsx applies the saved choice before first paint —
// see https://nextjs.org/docs/app/guides/preventing-flash-before-hydration —
// this context just keeps React's own state in sync with that afterward.
const STORAGE_KEY = "ee-theme";

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
  const [theme, setThemeState] = useState<Theme | null>(null);
  const systemPrefersDark = useSyncExternalStore(subscribeToSystemTheme, getSystemPrefersDark, getServerSnapshot);
  const effectiveTheme: Theme = theme ?? (systemPrefersDark ? "dark" : "light");

  // useLayoutEffect (not useEffect) so this resolves before the browser
  // paints the hydrated frame, and so it re-applies after React's dev-only
  // Strict Mode remount clears whatever the inline pre-hydration script set.
  useLayoutEffect(() => {
    try {
      const stored = localStorage.getItem(STORAGE_KEY);
      // eslint-disable-next-line react-hooks/set-state-in-effect
      if (stored === "dark" || stored === "light") setThemeState(stored);
    } catch {
      // Storage disabled or unavailable — falls back to the OS preference.
    }
  }, []);

  // Tailwind's dark: utilities only key off this class (see the
  // @custom-variant in globals.css) — applying it from effectiveTheme rather
  // than raw theme is what makes those utilities follow the OS preference
  // too, not just an explicit toggle.
  useLayoutEffect(() => {
    const root = document.documentElement;
    root.classList.remove("dark", "light");
    root.classList.add(effectiveTheme);
  }, [effectiveTheme]);

  const setTheme = (next: Theme) => {
    setThemeState(next);
    try {
      localStorage.setItem(STORAGE_KEY, next);
    } catch {
      // Storage disabled or unavailable — theme still works for this tab.
    }
  };

  return <ThemeContext.Provider value={{ theme, effectiveTheme, setTheme }}>{children}</ThemeContext.Provider>;
}

export function useTheme() {
  const ctx = useContext(ThemeContext);
  if (!ctx) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return ctx;
}
