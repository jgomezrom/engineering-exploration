"use client";

import Link from "next/link";
import FadeIn from "./FadeIn";
import FieldIcon from "./FieldIcon";
import BackLink from "./BackLink";
import { fields } from "../data/fields";
import { fieldsEs } from "../data/fields.es";
import { FieldStats, Level, EngineeringField } from "../data/types";
import { useLanguage } from "../context/LanguageContext";
import { compareTranslations, fitRowLabels } from "../data/translations/compare";
import { levelLabels } from "../data/translations/levels";

const LEVEL_WIDTH: Record<Level, string> = {
  Low: "33%",
  Medium: "66%",
  High: "100%",
};

const FIT_ROWS: (keyof FieldStats)[] = [
  "handsOnWork",
  "coding",
  "outdoorWork",
  "biologyContent",
  "creativeFreedom",
  "mathIntensity",
  "teamwork",
  "seeingWorkRealLife",
];

const PRACTICALITY_ROWS: (keyof FieldStats)[] = ["regulatoryBurden", "marketUncertainty"];

function shortFieldName(name: string, language: "en" | "es") {
  if (language === "es") return name.replace(/^Ingeniería\s+(de\s+|en\s+)?/, "");
  return name.replace(" Engineering", "");
}

function FieldHeaderRow({ displayFields, language }: { displayFields: EngineeringField[]; language: "en" | "es" }) {
  return (
    <tr>
      <th className="w-44 pb-4" />
      {displayFields.map((field) => (
        <th key={field.slug} className="px-3 pb-4">
          <Link href={`/engineering/${field.slug}`} className="group flex flex-col items-center gap-2">
            <FieldIcon slug={field.slug} className="h-8 w-8 text-primary" />
            <span className="text-center text-sm font-semibold text-neutral-900 group-hover:text-primary dark:text-white">
              {shortFieldName(field.name, language)}
            </span>
          </Link>
        </th>
      ))}
    </tr>
  );
}

function StatRows({
  rows,
  displayFields,
  rowLabels,
  lvl,
}: {
  rows: (keyof FieldStats)[];
  displayFields: EngineeringField[];
  rowLabels: Record<keyof FieldStats, string>;
  lvl: Record<Level, string>;
}) {
  return (
    <>
      {rows.map((key) => (
        <tr key={key} className="border-t border-neutral-900/10 dark:border-white/10">
          <td className="py-4 pr-4 text-sm text-neutral-600 dark:text-neutral-400">{rowLabels[key]}</td>
          {displayFields.map((field) => {
            const level = field.stats[key];
            return (
              <td key={field.slug} className="px-3 py-4">
                <div className="flex flex-col items-center gap-1.5">
                  <span className="font-mono text-xs uppercase tracking-wide text-neutral-600 dark:text-neutral-400">
                    {lvl[level]}
                  </span>
                  <div className="h-1.5 w-16 bg-neutral-100 dark:bg-neutral-900">
                    <div className="h-1.5 bg-primary" style={{ width: LEVEL_WIDTH[level] }} />
                  </div>
                </div>
              </td>
            );
          })}
        </tr>
      ))}
    </>
  );
}

export default function CompareContent() {
  const { language } = useLanguage();
  const t = compareTranslations[language];
  const rowLabels = fitRowLabels[language];
  const lvl = levelLabels[language];
  const displayFields = language === "es" ? fieldsEs : fields;

  return (
    <main className="mx-auto w-full min-w-0 max-w-5xl px-6 py-16 xl:max-w-6xl">
      <span className="mb-4 inline-block rounded-full bg-neutral-100 px-4 py-1 text-sm font-medium text-neutral-600 dark:bg-neutral-900 dark:text-neutral-400">
        {t.badge}
      </span>
      <h1 className="text-3xl font-bold text-neutral-900 dark:text-white xl:text-4xl">{t.heading}</h1>
      <p className="mt-2 max-w-2xl text-neutral-600 dark:text-neutral-400">
        {t.introBefore}{" "}
        <Link href="/sources" className="font-medium text-primary hover:underline">
          {t.sourcesLink}
        </Link>
        .
      </p>

      <FadeIn>
        <h2 className="mt-12 text-lg font-semibold text-neutral-900 dark:text-white">{t.fitHeading}</h2>
        <p className="mt-1 max-w-2xl text-sm text-neutral-600 dark:text-neutral-400">
          {t.fitIntroBefore}{" "}
          <Link href="/math" className="font-medium text-primary hover:underline">
            {t.mathLink}
          </Link>
          .
        </p>

        <div className="mt-6 overflow-x-auto">
          <table className="w-full min-w-[640px] border-collapse text-left">
            <thead>
              <FieldHeaderRow displayFields={displayFields} language={language} />
            </thead>
            <tbody>
              <StatRows rows={FIT_ROWS} displayFields={displayFields} rowLabels={rowLabels} lvl={lvl} />
            </tbody>
          </table>
        </div>
      </FadeIn>

      <FadeIn>
        <h2 className="mt-14 text-lg font-semibold text-neutral-900 dark:text-white">{t.practicalityHeading}</h2>
        <p className="mt-1 max-w-2xl text-sm text-neutral-600 dark:text-neutral-400">{t.practicalityIntro}</p>

        <div className="mt-6 overflow-x-auto">
          <table className="w-full min-w-[640px] border-collapse text-left">
            <thead>
              <FieldHeaderRow displayFields={displayFields} language={language} />
            </thead>
            <tbody>
              <tr className="border-t border-neutral-900/10 dark:border-white/10">
                <td className="py-4 pr-4 text-sm text-neutral-600 dark:text-neutral-400">{t.medianSalary}</td>
                {displayFields.map((field) => (
                  <td key={field.slug} className="px-3 py-4 text-center">
                    <span className="font-mono text-sm font-semibold text-neutral-900 dark:text-white">
                      {field.salary.medianAnnual}
                    </span>
                  </td>
                ))}
              </tr>
              <StatRows rows={PRACTICALITY_ROWS} displayFields={displayFields} rowLabels={rowLabels} lvl={lvl} />
            </tbody>
          </table>
        </div>
        <p className="mt-3 max-w-2xl text-xs text-neutral-600 dark:text-neutral-400">{t.salaryFootnote}</p>
      </FadeIn>

      <div className="mt-10">
        <BackLink href="/explore" labelKey="backToFields" />
      </div>
    </main>
  );
}
