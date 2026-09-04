"use client";

import Link from "next/link";
import Card from "./Card";
import { useLanguage } from "../context/LanguageContext";
import { simulationsHubTranslations } from "../data/translations/simulationsHub";

const ICONS = {
  lever: (
    <svg viewBox="0 0 40 40" fill="none" aria-hidden="true" className="h-8 w-8">
      <path d="M8 28h24" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      <path d="M14 28l6-16 6 16" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
      <circle cx="20" cy="12" r="2.5" stroke="currentColor" strokeWidth="1.5" />
    </svg>
  ),
  circuit: (
    <svg viewBox="0 0 40 40" fill="none" aria-hidden="true" className="h-8 w-8">
      <path d="M6 20h6M28 20h6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      <path d="M12 20l2-4 4 8 4-8 4 8 2-4" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
      <line x1="6" y1="15" x2="6" y2="25" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      <line x1="9" y1="17" x2="9" y2="23" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
    </svg>
  ),
  beam: (
    <svg viewBox="0 0 40 40" fill="none" aria-hidden="true" className="h-8 w-8">
      <path d="M8 26L8 30M32 26L32 30" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      <path d="M4 30h8M28 30h8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      <path d="M8 26q12 14 24 0" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      <path d="M20 10v10M17 16l3 4 3-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  ),
  gear: (
    <svg viewBox="0 0 40 40" fill="none" aria-hidden="true" className="h-8 w-8">
      <circle cx="15" cy="22" r="9" stroke="currentColor" strokeWidth="1.5" />
      <circle cx="15" cy="22" r="3" stroke="currentColor" strokeWidth="1.5" />
      <circle cx="29" cy="13" r="5" stroke="currentColor" strokeWidth="1.5" />
      <circle cx="29" cy="13" r="1.8" stroke="currentColor" strokeWidth="1.5" />
    </svg>
  ),
  buoyancy: (
    <svg viewBox="0 0 40 40" fill="none" aria-hidden="true" className="h-8 w-8">
      <path d="M6 22q4-3 8 0t8 0 8 0 8 0" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      <path d="M13 22V15h10v3l-3 4z" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
    </svg>
  ),
};

const SIMULATIONS = [
  { slug: "lever-torque", icon: ICONS.lever, titleKey: "leverTitle", descKey: "leverDescription" },
  { slug: "circuit", icon: ICONS.circuit, titleKey: "circuitTitle", descKey: "circuitDescription" },
  { slug: "beam-deflection", icon: ICONS.beam, titleKey: "beamTitle", descKey: "beamDescription" },
  { slug: "gear-ratio", icon: ICONS.gear, titleKey: "gearTitle", descKey: "gearDescription" },
  { slug: "buoyancy", icon: ICONS.buoyancy, titleKey: "buoyancyTitle", descKey: "buoyancyDescription" },
] as const;

export default function SimulationsHubContent() {
  const { language } = useLanguage();
  const t = simulationsHubTranslations[language];

  return (
    <main className="mx-auto max-w-3xl px-6 py-16">
      <span className="mb-4 inline-block rounded-full bg-neutral-100 px-4 py-1 text-sm font-medium text-neutral-600 dark:bg-neutral-900 dark:text-neutral-400">
        {t.badge}
      </span>

      <h1 className="text-3xl font-bold tracking-tight text-neutral-900 dark:text-white xl:text-4xl">
        {t.heading}
      </h1>
      <p className="mt-3 max-w-xl text-neutral-600 dark:text-neutral-400">{t.intro}</p>

      <div className="mt-10 grid gap-4 sm:grid-cols-2">
        {SIMULATIONS.map((sim) => (
          <Link key={sim.slug} href={`/simulations/${sim.slug}`}>
            <Card>
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-primary">
                {sim.icon}
              </div>
              <h2 className="mt-4 text-lg font-semibold text-neutral-900 dark:text-white">
                {t[sim.titleKey as keyof typeof t] as string}
              </h2>
              <p className="mt-2 text-sm text-neutral-600 dark:text-neutral-400">
                {t[sim.descKey as keyof typeof t] as string}
              </p>
            </Card>
          </Link>
        ))}
      </div>
    </main>
  );
}
