"use client";

import Link from "next/link";
import FadeIn from "./FadeIn";
import { fields } from "../data/fields";
import { fieldsEs } from "../data/fields.es";
import { useLanguage } from "../context/LanguageContext";
import { sourcesTranslations } from "../data/translations/sources";

function BulletList({ items }: { items: string[] }) {
  return (
    <ul className="max-w-2xl space-y-3">
      {items.map((item) => (
        <li key={item} className="flex gap-3 leading-relaxed text-neutral-600 dark:text-neutral-400">
          <span className="mt-2.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-primary" />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}

export default function SourcesContent() {
  const { language } = useLanguage();
  const t = sourcesTranslations[language];
  const displayFields = language === "es" ? fieldsEs : fields;
  // Only fields with a figure of their own get a table row. The rest are named
  // in the footnote, and each of their pages says why it has none.
  const withSalary = displayFields.flatMap((field) => (field.salary ? [{ field, salary: field.salary }] : []));
  const withoutSalary = displayFields.filter((field) => !field.salary);

  return (
    <main className="mx-auto w-full min-w-0 max-w-3xl px-6 py-16">
      <span className="mb-5 inline-flex items-center gap-3 text-xs font-mono font-medium uppercase tracking-widest text-primary before:h-px before:w-8 before:bg-primary before:content-['']">
        {t.badge}
      </span>

      <h1 className="text-3xl font-bold tracking-tight text-neutral-900 dark:text-white xl:text-4xl">
        {t.heading}
      </h1>
      <p className="mt-3 max-w-xl text-neutral-600 dark:text-neutral-400">{t.intro}</p>

      <FadeIn as="section" className="mt-12">
        <h2 className="text-xl font-semibold text-neutral-900 dark:text-white">{t.claimsHeading}</h2>
        <div className="mt-5 grid gap-6 sm:grid-cols-2">
          <div className="border border-primary/30 p-5">
            <h3 className="font-mono text-xs uppercase tracking-widest text-primary">{t.sourcedTitle}</h3>
            <p className="mt-3 text-sm leading-relaxed text-neutral-600 dark:text-neutral-400">{t.sourcedBody}</p>
          </div>
          <div className="border border-neutral-900/10 p-5 dark:border-white/10">
            <h3 className="font-mono text-xs uppercase tracking-widest text-neutral-600 dark:text-neutral-400">
              {t.editorialTitle}
            </h3>
            <p className="mt-3 text-sm leading-relaxed text-neutral-600 dark:text-neutral-400">
              {t.editorialBodyBefore}{" "}
              <Link href="/compare" className="text-primary hover:underline">
                {t.comparePageLink}
              </Link>{" "}
              {t.editorialBodyAfter}
            </p>
          </div>
        </div>
      </FadeIn>

      <FadeIn as="section" className="mt-14 border-t border-neutral-900/10 pt-14 dark:border-white/10">
        <h2 className="text-xl font-semibold text-neutral-900 dark:text-white">{t.whoHeading}</h2>
        <p className="mt-4 max-w-2xl leading-relaxed text-neutral-600 dark:text-neutral-400">
          {t.whoBody1Before}{" "}
          <Link href="/about" className="text-primary hover:underline">
            {t.aboutLink}
          </Link>
          {t.whoBody1After}
        </p>
        <p className="mt-4 max-w-2xl leading-relaxed text-neutral-600 dark:text-neutral-400">{t.whoBody2}</p>
        <BulletList items={[t.bullet1, t.bullet2, t.bullet3]} />
      </FadeIn>

      <FadeIn as="section" className="mt-14 border-t border-neutral-900/10 pt-14 dark:border-white/10">
        <h2 className="text-xl font-semibold text-neutral-900 dark:text-white">{t.citationsHeading}</h2>
        <p className="mt-3 max-w-2xl text-sm text-neutral-600 dark:text-neutral-400">{t.citationsIntro}</p>

        <div className="mt-6 overflow-x-auto">
          <table className="w-full min-w-[560px] border-collapse text-left text-sm">
            <thead>
              <tr className="border-b border-neutral-900/10 dark:border-white/10">
                <th className="py-3 pr-4 font-semibold text-neutral-900 dark:text-white">{t.tableField}</th>
                <th className="py-3 pr-4 font-semibold text-neutral-900 dark:text-white">{t.tableMedian}</th>
                <th className="py-3 pr-4 font-semibold text-neutral-900 dark:text-white">{t.tablePeriod}</th>
                <th className="py-3 pr-4 font-semibold text-neutral-900 dark:text-white">{t.tableSource}</th>
                <th className="py-3 font-semibold text-neutral-900 dark:text-white">{t.tableVerified}</th>
              </tr>
            </thead>
            <tbody>
              {withSalary.map(({ field, salary }) => (
                <tr key={field.slug} className="border-b border-neutral-900/10 dark:border-white/10">
                  <td className="py-3 pr-4">
                    <Link href={`/engineering/${field.slug}`} className="text-primary hover:underline">
                      {field.name}
                    </Link>
                  </td>
                  <td className="py-3 pr-4 font-mono text-neutral-900 dark:text-white">
                    {salary.medianAnnual}
                  </td>
                  <td className="py-3 pr-4 text-neutral-600 dark:text-neutral-400">{salary.period}</td>
                  <td className="py-3 pr-4">
                    <a
                      href={salary.sourceUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-primary hover:underline"
                    >
                      {salary.sourceName}
                    </a>
                  </td>
                  <td className="py-3 text-neutral-600 dark:text-neutral-400">{salary.verifiedDate}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        {withoutSalary.length > 0 && (
          <p className="mt-4 max-w-2xl text-xs text-neutral-500 dark:text-neutral-400">
            {t.footnoteBefore(withoutSalary.length)}{" "}
            {withoutSalary.map((field, i) => (
              <span key={field.slug}>
                <Link href={`/engineering/${field.slug}`} className="text-primary hover:underline">
                  {field.name}
                </Link>
                {i < withoutSalary.length - 1 ? ", " : "."}
              </span>
            ))}{" "}
            {t.footnoteAfter}
          </p>
        )}
      </FadeIn>
    </main>
  );
}
