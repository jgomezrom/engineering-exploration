"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { GearTeeth } from "./FieldIllustration";
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
    <footer className="relative w-full overflow-hidden bg-[#0a2540]">
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          backgroundImage:
            "linear-gradient(to right, rgba(165,226,234,0.07) 1px, transparent 1px), linear-gradient(to bottom, rgba(165,226,234,0.07) 1px, transparent 1px)",
          backgroundSize: "32px 32px",
        }}
      />

      <span className="pointer-events-none absolute left-6 top-6 hidden h-8 w-8 border-l-2 border-t-2 border-[#a5e2ea]/30 lg:block" />
      <span className="pointer-events-none absolute right-6 top-6 hidden h-8 w-8 border-r-2 border-t-2 border-[#a5e2ea]/30 lg:block" />
      <span className="pointer-events-none absolute bottom-6 left-6 hidden h-8 w-8 border-b-2 border-l-2 border-[#a5e2ea]/30 lg:block" />
      <span className="pointer-events-none absolute bottom-6 right-6 hidden h-8 w-8 border-b-2 border-r-2 border-[#a5e2ea]/30 lg:block" />

      <div className="relative mx-auto flex max-w-5xl flex-col items-center gap-5 px-6 py-16 text-center">
        <svg viewBox="0 0 40 40" fill="none" aria-hidden="true" className="h-11 w-11 text-[#a5e2ea]">
          <circle cx="20" cy="20" r="12" stroke="currentColor" strokeWidth="1.5" />
          <circle cx="20" cy="20" r="3" stroke="currentColor" strokeWidth="1.5" />
          <GearTeeth cx={20} cy={20} r={12} count={10} toothH={4} />
        </svg>

        <p className="text-sm text-[#dbeef2]">
          © {new Date().getFullYear()} Engineering Exploration. {t.footerTagline}
        </p>

        <nav className="flex flex-wrap justify-center gap-x-6 gap-y-2 text-sm text-[#dbeef2]">
          {footerLinks.map((link) => (
            <Link key={link.href} href={link.href} className="hover:text-[#a5e2ea]">
              {link.label}
            </Link>
          ))}
          <a href={mailtoHref} className="hover:text-[#a5e2ea]">
            {t.footerReportMistake}
          </a>
        </nav>
      </div>
    </footer>
  );
}
