"use client";

import { useState } from "react";
import Link from "next/link";
import { fields } from "../data/fields";
import { fieldsEs } from "../data/fields.es";
import { AgeBand, NextSteps } from "../data/types";
import { useAgeBand } from "../context/AgeBandContext";
import { useLanguage } from "../context/LanguageContext";

const AGE_BANDS: AgeBand[] = ["10-12", "13-15", "16-18"];

const LABELS = {
  en: {
    ages: "Ages",
    rememberingPrefix: "Remembering ages",
    rememberingSuffix: "for other pages too, just for this visit —",
    forgetIt: "forget it",
    notSaved: "Not saved anywhere.",
    rememberPrefix: "Remember ages",
    rememberSuffix: "for other pages too",
    rememberNote: "(just for this visit — nothing is stored beyond your browser tab).",
    projectTitle: "A project to try",
    toolTitle: "A tool to learn",
    activityTitle: "A club or activity",
    findOne: "How to actually find one near you →",
    relatedTitle: "A related field to compare",
  },
  es: {
    ages: "Edades",
    rememberingPrefix: "Recordando las edades",
    rememberingSuffix: "también para otras páginas, solo por esta visita —",
    forgetIt: "olvidarlo",
    notSaved: "No se guarda en ningún lado.",
    rememberPrefix: "Recordar las edades",
    rememberSuffix: "también para otras páginas",
    rememberNote: "(solo por esta visita — no se guarda nada más allá de esta pestaña del navegador).",
    projectTitle: "Un proyecto para probar",
    toolTitle: "Una herramienta para aprender",
    activityTitle: "Un club o actividad",
    findOne: "Cómo encontrar uno cerca de ti →",
    relatedTitle: "Un campo relacionado para comparar",
  },
};

export default function NextStepsExplorer({ nextSteps }: { nextSteps: NextSteps }) {
  const { ageBand, setAgeBand } = useAgeBand();
  const { language } = useLanguage();
  const t = LABELS[language];
  const [selected, setSelected] = useState<AgeBand>(ageBand ?? "13-15");
  const suggestion = nextSteps[selected];
  const fieldPool = language === "es" ? [...fieldsEs, ...fields] : fields;
  const relatedField = fieldPool.find((f) => f.slug === suggestion.relatedField);
  const isRemembered = ageBand === selected;

  return (
    <div>
      <p className="hidden text-sm text-neutral-600 print:block dark:text-neutral-400">
        {t.ages} {selected}
      </p>
      <div className="flex flex-wrap items-center gap-2 print:hidden">
        {AGE_BANDS.map((band) => {
          const isSelected = selected === band;
          return (
            <button
              key={band}
              type="button"
              aria-pressed={isSelected}
              onClick={() => setSelected(band)}
              className={`border px-4 py-2 text-sm font-medium transition-colors ${
                isSelected
                  ? "border-primary bg-primary/10 text-primary"
                  : "border-neutral-900/10 text-neutral-600 hover:border-primary/40 dark:border-white/10 dark:text-neutral-400"
              }`}
            >
              {t.ages} {band}
            </button>
          );
        })}
      </div>

      <p className="mt-3 text-xs text-neutral-500 print:hidden dark:text-neutral-400">
        {isRemembered ? (
          <>
            {t.rememberingPrefix} {selected} {t.rememberingSuffix}{" "}
            <button
              type="button"
              onClick={() => setAgeBand(null)}
              className="font-medium text-primary hover:underline"
            >
              {t.forgetIt}
            </button>
            .
          </>
        ) : (
          <>
            {t.notSaved}{" "}
            <button
              type="button"
              onClick={() => setAgeBand(selected)}
              className="font-medium text-primary hover:underline"
            >
              {t.rememberPrefix} {selected} {t.rememberSuffix}
            </button>{" "}
            {t.rememberNote}
          </>
        )}
      </p>

      <div className="mt-6 grid gap-4 sm:grid-cols-2">
        <div className="border border-neutral-900/10 p-4 dark:border-white/10">
          <h3 className="text-xs font-semibold uppercase tracking-wide text-neutral-600 dark:text-neutral-400">
            {t.projectTitle}
          </h3>
          <p className="mt-2 text-sm leading-relaxed text-neutral-600 dark:text-neutral-400">
            {suggestion.project}
          </p>
        </div>
        <div className="border border-neutral-900/10 p-4 dark:border-white/10">
          <h3 className="text-xs font-semibold uppercase tracking-wide text-neutral-600 dark:text-neutral-400">
            {t.toolTitle}
          </h3>
          <p className="mt-2 text-sm leading-relaxed text-neutral-600 dark:text-neutral-400">
            {suggestion.tool}
          </p>
        </div>
        <div className="border border-neutral-900/10 p-4 dark:border-white/10">
          <h3 className="text-xs font-semibold uppercase tracking-wide text-neutral-600 dark:text-neutral-400">
            {t.activityTitle}
          </h3>
          <p className="mt-2 text-sm leading-relaxed text-neutral-600 dark:text-neutral-400">
            {suggestion.activity}
          </p>
          <Link
            href="/opportunities"
            className="mt-2 inline-block text-sm font-medium text-primary hover:underline print:hidden"
          >
            {t.findOne}
          </Link>
        </div>
        <div className="border border-neutral-900/10 p-4 dark:border-white/10">
          <h3 className="text-xs font-semibold uppercase tracking-wide text-neutral-600 dark:text-neutral-400">
            {t.relatedTitle}
          </h3>
          {relatedField && (
            <Link
              href={`/engineering/${relatedField.slug}`}
              className="mt-2 inline-block text-sm font-medium text-primary hover:underline"
            >
              {relatedField.name} →
            </Link>
          )}
        </div>
      </div>
    </div>
  );
}
