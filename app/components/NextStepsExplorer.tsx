"use client";

import { useState } from "react";
import Link from "next/link";
import { fields } from "../data/fields";
import { fieldsEs } from "../data/fields.es";
import { GradeBand, NextSteps } from "../data/types";
import { useGradeBand } from "../context/GradeBandContext";
import { useLanguage } from "../context/LanguageContext";

const GRADE_BANDS: GradeBand[] = ["middle-school", "high-school", "college"];

const LABELS = {
  en: {
    gradeLevel: "Grade level",
    bandLabels: { "middle-school": "Middle school", "high-school": "High school", college: "College" } as Record<GradeBand, string>,
    bandDetail: { "middle-school": "(US grades 6–8)", "high-school": "(US grades 9–12)", college: "" } as Record<GradeBand, string>,
    gradeSystemsNote: "Grade systems vary by country — pick whichever tab is the closest match for where you are.",
    rememberingPrefix: "Remembering",
    rememberingSuffix: "for other pages too, just for this visit —",
    forgetIt: "forget it",
    notSaved: "Not saved anywhere.",
    rememberPrefix: "Remember",
    rememberSuffix: "for other pages too",
    rememberNote: "(just for this visit — nothing is stored beyond your browser tab).",
    projectTitle: "A project to try",
    toolTitle: "A tool to learn",
    activityTitle: "A club or activity",
    findOne: "How to actually find one near you →",
    relatedTitle: "A related field to compare",
  },
  es: {
    gradeLevel: "Nivel educativo",
    bandLabels: { "middle-school": "Secundaria", "high-school": "Preparatoria", college: "Universidad" } as Record<GradeBand, string>,
    bandDetail: { "middle-school": "(grados 6.º–8.º en EE. UU.)", "high-school": "(grados 9.º–12.º en EE. UU.)", college: "" } as Record<GradeBand, string>,
    gradeSystemsNote: "Los sistemas educativos varían según el país — elige la pestaña que más se parezca a tu situación.",
    rememberingPrefix: "Recordando",
    rememberingSuffix: "también para otras páginas, solo por esta visita —",
    forgetIt: "olvidarlo",
    notSaved: "No se guarda en ningún lado.",
    rememberPrefix: "Recordar",
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
  const { gradeBand, setGradeBand } = useGradeBand();
  const { language } = useLanguage();
  const t = LABELS[language];
  const [selected, setSelected] = useState<GradeBand>(gradeBand ?? "high-school");
  const suggestion = nextSteps[selected];
  const fieldPool = language === "es" ? [...fieldsEs, ...fields] : fields;
  const relatedField = fieldPool.find((f) => f.slug === suggestion.relatedField);
  const isRemembered = gradeBand === selected;
  const selectedLabel = t.bandLabels[selected];

  return (
    <div>
      <p className="hidden text-sm text-neutral-600 print:block dark:text-neutral-400">
        {t.gradeLevel}: {selectedLabel}
      </p>
      <div className="flex flex-wrap items-center gap-2 print:hidden">
        {GRADE_BANDS.map((band) => {
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
              {t.bandLabels[band]}
              {t.bandDetail[band] && <span className="ml-1 font-normal opacity-70">{t.bandDetail[band]}</span>}
            </button>
          );
        })}
      </div>

      <p className="mt-2 text-xs text-neutral-500 print:hidden dark:text-neutral-400">{t.gradeSystemsNote}</p>

      <p className="mt-2 text-xs text-neutral-500 print:hidden dark:text-neutral-400">
        {isRemembered ? (
          <>
            {t.rememberingPrefix} {selectedLabel} {t.rememberingSuffix}{" "}
            <button
              type="button"
              onClick={() => setGradeBand(null)}
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
              onClick={() => setGradeBand(selected)}
              className="font-medium text-primary hover:underline"
            >
              {t.rememberPrefix} {selectedLabel} {t.rememberSuffix}
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
