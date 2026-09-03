"use client";

import { createContext, useContext, useEffect, useState, ReactNode } from "react";

export type Language = "en" | "es";

// Persisted in localStorage (unlike the theme toggle) since a language choice
// is something a reader would expect to stick across visits.
const STORAGE_KEY = "ee-language";

type LanguageContextValue = {
  language: Language;
  setLanguage: (lang: Language) => void;
};

const LanguageContext = createContext<LanguageContextValue | null>(null);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguageState] = useState<Language>("en");

  useEffect(() => {
    // Same legitimate case as useExploration.ts's hydration effect: reading
    // localStorage has to happen post-mount, not in a lazy useState
    // initializer, or the client's first render would mismatch the
    // server's English-only output.
    try {
      const stored = localStorage.getItem(STORAGE_KEY);
      // eslint-disable-next-line react-hooks/set-state-in-effect
      if (stored === "es" || stored === "en") setLanguageState(stored);
    } catch {
      // Storage disabled or unavailable — just stay on the English default.
    }
  }, []);

  // Keeps the <html lang> attribute in sync so screen readers pronounce the
  // page correctly — the server always renders "en" (language is a
  // client/localStorage concept), so this has to happen after mount too.
  useEffect(() => {
    document.documentElement.lang = language;
  }, [language]);

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    try {
      localStorage.setItem(STORAGE_KEY, lang);
    } catch {
      // Nothing to do — the site works fine without this persisting.
    }
  };

  return <LanguageContext.Provider value={{ language, setLanguage }}>{children}</LanguageContext.Provider>;
}

export function useLanguage() {
  const ctx = useContext(LanguageContext);
  if (!ctx) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return ctx;
}
