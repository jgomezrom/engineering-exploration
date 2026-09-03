"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useLanguage } from "../context/LanguageContext";
import { chromeTranslations } from "../data/translations/chrome";

const REPORT_EMAIL = "jg3110r@gmail.com";

export default function Footer() {
  const { language } = useLanguage();
  const pathname = usePathname();
  const t = chromeTranslations[language];

  const footerLinks = [
    { href: "/about", label: t.footerAbout },
    { href: "/sources", label: t.footerSources },
    { href: "/parents-and-teachers", label: t.footerParents },
    { href: "/resources", label: t.footerResources },
  ];

  const mailtoHref = `mailto:${REPORT_EMAIL}?subject=${encodeURIComponent(
    "Engineering Exploration - mistake report"
  )}&body=${encodeURIComponent(`Page: ${pathname}\n\n`)}`;

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
          <a href={mailtoHref} className="hover:text-primary">
            {t.footerReportMistake}
          </a>
        </nav>
      </div>
    </footer>
  );
}
