"use client";

import Link from "next/link";
import { useLanguage } from "../context/LanguageContext";
import { chromeTranslations } from "../data/translations/chrome";

export default function Footer() {
  const { language } = useLanguage();
  const t = chromeTranslations[language];

  const footerLinks = [
    { href: "/about", label: t.footerAbout },
    { href: "/sources", label: t.footerSources },
    { href: "/parents-and-teachers", label: t.footerParents },
    { href: "/resources", label: t.footerResources },
  ];

  return (
    <footer className="w-full border-t border-neutral-100 bg-white dark:border-white/10 dark:bg-black">
      <div className="mx-auto flex max-w-5xl flex-col gap-4 px-6 py-8 text-sm text-neutral-600 dark:text-neutral-400 sm:flex-row sm:items-center sm:justify-between">
        <p>© {new Date().getFullYear()} Engineering Exploration. {t.footerTagline}</p>
        <nav className="flex flex-wrap gap-x-5 gap-y-2">
          {footerLinks.map((link) => (
            <Link key={link.href} href={link.href} className="hover:text-primary">
              {link.label}
            </Link>
          ))}
        </nav>
      </div>
    </footer>
  );
}
