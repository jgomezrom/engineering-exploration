"use client";

import { createContext, useContext, useLayoutEffect, useState, ReactNode } from "react";
import { schoolThemes, hexToRgbTriplet, SchoolThemeId } from "../data/schoolThemes";

// Same persistence pattern as ThemeContext/LanguageContext: an explicit
// choice is remembered in localStorage so it survives reloads. Unlike those
// two, there's no first-visit prompt for this one — it's opt-in only, opened
// from the palette icon in the header. The inline script in layout.tsx
// applies a saved theme's colors before first paint; this just keeps React
// state in sync with that afterward.
const STORAGE_KEY = "ee-school-theme";

type SchoolThemeContextValue = {
  schoolThemeId: SchoolThemeId;
  isPickerOpen: boolean;
  selectTheme: (id: SchoolThemeId) => void;
  openPicker: () => void;
  closePicker: () => void;
};

const SchoolThemeContext = createContext<SchoolThemeContextValue | null>(null);

function applyTheme(id: SchoolThemeId) {
  const root = document.documentElement;
  const theme = id === "default" ? undefined : schoolThemes.find((t) => t.id === id);
  if (!theme) {
    root.style.removeProperty("--school-primary-light");
    root.style.removeProperty("--school-primary-night");
    root.style.removeProperty("--school-primary-dark");
    root.style.removeProperty("--school-secondary");
    root.style.removeProperty("--school-primary-rgb");
    root.style.removeProperty("--school-grid-opacity");
    return;
  }
  root.style.setProperty("--school-primary-light", theme.primary);
  root.style.setProperty("--school-primary-night", theme.primaryNight);
  root.style.setProperty("--school-primary-dark", theme.primaryDark);
  root.style.setProperty("--school-secondary", theme.secondary);
  root.style.setProperty("--school-primary-rgb", hexToRgbTriplet(theme.primary));
  // A chosen school theme gets a more visible background tint than the
  // site's own quieter default (0.05) — the whole point of picking one.
  root.style.setProperty("--school-grid-opacity", "0.1");
}

export function SchoolThemeProvider({ children }: { children: ReactNode }) {
  const [schoolThemeId, setSchoolThemeId] = useState<SchoolThemeId>("default");
  const [isPickerOpen, setIsPickerOpen] = useState(false);

  useLayoutEffect(() => {
    try {
      const stored = localStorage.getItem(STORAGE_KEY);
      if (stored && schoolThemes.some((t) => t.id === stored)) {
        // eslint-disable-next-line react-hooks/set-state-in-effect
        setSchoolThemeId(stored as SchoolThemeId);
      }
    } catch {
      // Storage disabled/unavailable — stays on Default for this tab.
    }
  }, []);

  useLayoutEffect(() => {
    applyTheme(schoolThemeId);
  }, [schoolThemeId]);

  const selectTheme = (id: SchoolThemeId) => {
    setSchoolThemeId(id);
    try {
      localStorage.setItem(STORAGE_KEY, id);
    } catch {
      // Storage disabled/unavailable — theme still applies for this tab.
    }
    setIsPickerOpen(false);
  };

  return (
    <SchoolThemeContext.Provider
      value={{
        schoolThemeId,
        isPickerOpen,
        selectTheme,
        openPicker: () => setIsPickerOpen(true),
        closePicker: () => setIsPickerOpen(false),
      }}
    >
      {children}
    </SchoolThemeContext.Provider>
  );
}

export function useSchoolTheme() {
  const ctx = useContext(SchoolThemeContext);
  if (!ctx) {
    throw new Error("useSchoolTheme must be used within a SchoolThemeProvider");
  }
  return ctx;
}
