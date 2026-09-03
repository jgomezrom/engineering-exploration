"use client";

import { useEffect, useState } from "react";
import { useTheme } from "../context/ThemeContext";

export default function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  // Tracks the OS preference so the icon shows the right state before any
  // explicit choice is made, and updates live if the OS setting changes.
  const [systemPrefersDark, setSystemPrefersDark] = useState<boolean | null>(null);

  useEffect(() => {
    const mq = window.matchMedia("(prefers-color-scheme: dark)");
    setSystemPrefersDark(mq.matches);
    const onChange = () => setSystemPrefersDark(mq.matches);
    mq.addEventListener("change", onChange);
    return () => mq.removeEventListener("change", onChange);
  }, []);

  if (systemPrefersDark === null) {
    // Matches server-rendered output (no OS preference known yet) — avoids a flash.
    return <div className="h-9 w-9 flex-shrink-0" aria-hidden="true" />;
  }

  const effective: "dark" | "light" = theme ?? (systemPrefersDark ? "dark" : "light");

  return (
    <button
      type="button"
      onClick={() => setTheme(effective === "dark" ? "light" : "dark")}
      aria-label={effective === "dark" ? "Switch to light mode" : "Switch to dark mode"}
      className="flex h-9 w-9 flex-shrink-0 items-center justify-center border border-neutral-900/10 text-neutral-600 transition-colors hover:border-primary/40 dark:border-white/10 dark:text-neutral-400"
    >
      {effective === "dark" ? (
        <svg viewBox="0 0 20 20" fill="none" aria-hidden="true" className="h-4 w-4">
          <path
            d="M10 3v1.5M10 15.5V17M17 10h-1.5M4.5 10H3M14.6 5.4l-1.1 1.1M6.5 13.5l-1.1 1.1M14.6 14.6l-1.1-1.1M6.5 6.5 5.4 5.4"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
          />
          <circle cx="10" cy="10" r="3.5" stroke="currentColor" strokeWidth="1.5" />
        </svg>
      ) : (
        <svg viewBox="0 0 20 20" fill="none" aria-hidden="true" className="h-4 w-4">
          <path
            d="M16.5 12.3A6.5 6.5 0 0 1 7.7 3.5a6.5 6.5 0 1 0 8.8 8.8Z"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinejoin="round"
          />
        </svg>
      )}
    </button>
  );
}
