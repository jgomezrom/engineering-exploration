"use client";

import { useCallback, useMemo, useState } from "react";
import FadeIn from "./FadeIn";
import CurriculumTopicMap from "./CurriculumTopicMap";
import { fields } from "../data/fields";
import { fieldsEs } from "../data/fields.es";
import { collegeCurricula } from "../data/collegeCurricula";
import { collegeTips } from "../data/collegeTips";
import { CurriculumSequence, CurriculumYear, FieldSlug, TipTheme } from "../data/types";
import { useLanguage } from "../context/LanguageContext";
import { collegeTranslations, tipThemeLabels, tipConfidenceLabels, collegeOnlyMajorNames } from "../data/translations/college";

const THEME_ORDER: TipTheme[] = ["study-strategies", "course-planning", "internships", "research", "workload-and-burnout"];

const CONFIDENCE_BORDER: Record<string, string> = {
  "research-backed": "border-primary",
  "varies by situation": "border-accent",
  "personal experience": "border-neutral-400 dark:border-neutral-600",
};

function yearsForYearNumber(curriculum: CurriculumSequence, year: number): CurriculumYear[] {
  return curriculum.years.filter((y) => y.year === year);
}

function CurriculumCell({ curriculum, year }: { curriculum: CurriculumSequence; year: number }) {
  const entries = yearsForYearNumber(curriculum, year);
  if (entries.length === 0) {
    return <span className="text-neutral-400 dark:text-neutral-600">—</span>;
  }
  return (
    <div className="space-y-3">
      {entries.map((entry, i) => (
        <div key={i}>
          {entry.term && (
            <p className="mb-1 font-mono text-[10px] uppercase tracking-wide text-neutral-500 dark:text-neutral-400">
              {entry.term}
            </p>
          )}
          <ul className="space-y-1">
            {entry.courses.map((course, j) => (
              <li key={j} className="text-sm leading-snug text-neutral-600 dark:text-neutral-400">
                {course.name}
                {course.code && <span className="text-neutral-400 dark:text-neutral-600"> — {course.code}</span>}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}

export default function CollegeContent() {
  const { language } = useLanguage();
  const t = collegeTranslations[language];
  const themeLabel = tipThemeLabels[language];
  const confidenceLabel = tipConfidenceLabels[language];
  const displayFields = language === "es" ? fieldsEs : fields;
  const majorNameFallback = collegeOnlyMajorNames[language];
  const majorName = useCallback(
    (slug: FieldSlug) => displayFields.find((f) => f.slug === slug)?.name ?? majorNameFallback[slug] ?? slug,
    [displayFields, majorNameFallback]
  );

  const availableFieldSlugs = useMemo(() => {
    const slugs = Array.from(new Set(collegeCurricula.map((c) => c.fieldSlug)));
    return slugs.sort((a, b) => majorName(a).localeCompare(majorName(b)));
  }, [majorName]);

  const [selectedField, setSelectedField] = useState<FieldSlug | undefined>(availableFieldSlugs[0]);

  const displayedCurricula = collegeCurricula.filter((c) => c.fieldSlug === selectedField);
  const yearNumbers = Array.from(new Set(displayedCurricula.flatMap((c) => c.years.map((y) => y.year)))).sort(
    (a, b) => a - b
  );

  return (
    <main className="mx-auto w-full min-w-0 max-w-5xl px-6 py-16 xl:max-w-6xl">
      <span className="mb-4 inline-block border border-primary/30 bg-primary/10 px-3 py-1 text-xs font-mono font-semibold uppercase tracking-widest text-primary">
        {t.badge}
      </span>
      <h1 className="text-3xl font-bold tracking-tight text-neutral-900 dark:text-white xl:text-4xl">{t.heading}</h1>
      <p className="mt-3 max-w-2xl text-neutral-600 dark:text-neutral-400">{t.intro}</p>

      <div className="mt-8 border-l-4 border-accent bg-accent/5 p-5">
        <h2 className="text-sm font-semibold text-neutral-900 dark:text-white">{t.disclaimerHeading}</h2>
        <p className="mt-2 max-w-2xl text-sm leading-relaxed text-neutral-600 dark:text-neutral-400">
          {t.disclaimerBody}
        </p>
      </div>

      <FadeIn as="section" className="mt-14 border-t border-neutral-900/10 pt-14 dark:border-white/10">
        <h2 className="text-xl font-semibold text-neutral-900 dark:text-white">{t.curriculumHeading}</h2>
        <p className="mt-3 max-w-2xl leading-relaxed text-neutral-600 dark:text-neutral-400">{t.curriculumIntro}</p>

        <div className="mt-6">
          <label className="block font-mono text-xs uppercase tracking-widest text-neutral-600 dark:text-neutral-400">
            {t.selectMajorLabel}
          </label>
          <select
            value={selectedField}
            onChange={(e) => setSelectedField(e.target.value as FieldSlug)}
            className="mt-2 border border-neutral-900/10 bg-white px-4 py-2 text-sm text-neutral-900 dark:border-white/10 dark:bg-black dark:text-white"
          >
            {availableFieldSlugs.map((slug) => (
              <option key={slug} value={slug}>
                {majorName(slug)}
              </option>
            ))}
          </select>
        </div>

        {displayedCurricula.length === 0 ? (
          <p className="mt-6 text-sm text-neutral-600 dark:text-neutral-400">{t.noCurriculaYet}</p>
        ) : (
          <div className="mt-6 overflow-x-auto">
            <table className="w-full min-w-[560px] border-collapse text-left">
              <thead>
                <tr>
                  <th className="w-24 border-b border-neutral-900/10 pb-4 dark:border-white/10" />
                  {displayedCurricula.map((c) => (
                    <th key={c.slug} className="border-b border-neutral-900/10 px-4 pb-4 align-bottom dark:border-white/10">
                      <p className="text-sm font-semibold text-neutral-900 dark:text-white">{c.schoolName}</p>
                      <p className="mt-1 text-xs text-neutral-500 dark:text-neutral-400">{c.majorName}</p>
                      <p className="mt-1 font-mono text-[10px] uppercase tracking-wide text-neutral-400 dark:text-neutral-600">
                        {c.catalogYear}
                      </p>
                      <a
                        href={c.sourceUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="mt-1 inline-block text-xs font-medium text-primary hover:underline"
                      >
                        {t.sourceLabel} →
                      </a>
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {yearNumbers.map((year) => (
                  <tr key={year} className="border-b border-neutral-900/10 dark:border-white/10">
                    <td className="py-4 pr-4 align-top text-sm font-semibold text-neutral-900 dark:text-white">
                      {t.yearLabel} {year}
                    </td>
                    {displayedCurricula.map((c) => (
                      <td key={c.slug} className="px-4 py-4 align-top">
                        <CurriculumCell curriculum={c} year={year} />
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </FadeIn>

      <FadeIn as="section" className="mt-14 border-t border-neutral-900/10 pt-14 dark:border-white/10">
        <CurriculumTopicMap />
      </FadeIn>

      <FadeIn as="section" className="mt-14 border-t border-neutral-900/10 pt-14 dark:border-white/10">
        <h2 className="text-xl font-semibold text-neutral-900 dark:text-white">{t.tipsHeading}</h2>
        <p className="mt-3 max-w-2xl leading-relaxed text-neutral-600 dark:text-neutral-400">{t.tipsIntro}</p>

        <div className="mt-8 space-y-10">
          {THEME_ORDER.map((theme) => {
            const themeTips = collegeTips.filter((tip) => tip.theme === theme);
            if (themeTips.length === 0) return null;
            return (
              <div key={theme}>
                <h3 className="font-mono text-xs uppercase tracking-widest text-neutral-600 dark:text-neutral-400">
                  {themeLabel[theme]}
                </h3>
                <div className="mt-4 grid gap-4 sm:grid-cols-2">
                  {themeTips.map((tip) => (
                    <div key={tip.slug} className="border border-neutral-900/10 p-5 dark:border-white/10">
                      <span
                        className={`inline-block border-l-2 pl-2 text-[10px] font-mono uppercase tracking-wide text-neutral-500 dark:text-neutral-400 ${CONFIDENCE_BORDER[tip.confidence]}`}
                      >
                        {confidenceLabel[tip.confidence]}
                      </span>
                      <p className="mt-3 text-sm leading-relaxed text-neutral-900 dark:text-white">{tip.text}</p>
                      <p className="mt-3 text-xs leading-relaxed text-neutral-500 dark:text-neutral-400">
                        {t.dependsOnLabel}: {tip.dependsOn}
                      </p>
                      {tip.sourceUrl && (
                        <a
                          href={tip.sourceUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="mt-2 inline-block text-xs font-medium text-primary hover:underline"
                        >
                          {t.sourceLabel} →
                        </a>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </FadeIn>
    </main>
  );
}
