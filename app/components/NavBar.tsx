"use client";

import { useState } from "react";
import Link from "next/link";
import ThemeToggle from "./ThemeToggle";
import LanguageToggle from "./LanguageToggle";

const NAV_LINKS = [
  { href: "/curious", label: "Curious" },
  { href: "/explore", label: "Explore" },
  { href: "/quiz", label: "Quiz" },
  { href: "/challenges", label: "Challenges" },
  { href: "/resources", label: "Resources" },
  { href: "/about", label: "About" },
];

export default function NavBar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="w-full border-b border-neutral-100 bg-white dark:border-white/10 dark:bg-black">
      <nav className="mx-auto flex max-w-5xl items-center justify-between px-6 py-4">
        <Link
          href="/"
          aria-label="Go to homepage"
          className="flex items-center gap-2 text-lg font-semibold text-neutral-900 dark:text-white"
        >
          <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" className="h-5 w-5 flex-shrink-0 text-primary">
            <path d="M4 11.5 12 4l8 7.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M6 10v9a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1v-9" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
            <path d="M10 20v-5h4v5" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
          </svg>
          Engineering Exploration
        </Link>

        <div className="flex items-center gap-3">
          <div className="hidden items-center gap-5 text-sm font-medium text-neutral-600 dark:text-neutral-400 md:flex">
            {NAV_LINKS.map((link) => (
              <Link key={link.href} href={link.href} className="hover:text-primary">
                {link.label}
              </Link>
            ))}
          </div>

          <LanguageToggle />
          <ThemeToggle />

          <button
            type="button"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            onClick={() => setOpen((o) => !o)}
            className="flex h-9 w-9 items-center justify-center text-neutral-900 md:hidden dark:text-white"
          >
            <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" className="h-6 w-6">
              {open ? (
                <path d="M6 6l12 12M18 6L6 18" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
              ) : (
                <path d="M4 7h16M4 12h16M4 17h16" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
              )}
            </svg>
          </button>
        </div>
      </nav>

      {open && (
        <div className="border-t border-neutral-100 px-6 py-4 md:hidden dark:border-white/10">
          <div className="flex flex-col gap-4 text-sm font-medium text-neutral-600 dark:text-neutral-400">
            {NAV_LINKS.map((link) => (
              <Link key={link.href} href={link.href} className="hover:text-primary" onClick={() => setOpen(false)}>
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}
