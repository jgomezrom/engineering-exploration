"use client";

import Link from "next/link";
import FadeIn from "./FadeIn";
import { fields } from "../data/fields";
import { fieldsEs } from "../data/fields.es";
import {
  middleSchoolSubjects,
  highSchoolSubjects,
  fieldCourseFocus,
  tutoringResources,
} from "../data/courseGuide";
import {
  middleSchoolSubjectsEs,
  highSchoolSubjectsEs,
  fieldCourseFocusEs,
  tutoringResourcesEs,
} from "../data/courseGuide.es";
import { CourseSubject, TutoringResourceType } from "../data/types";
import { useLanguage } from "../context/LanguageContext";
import { mathTranslations, resourceTypeLabels } from "../data/translations/math";

function shortFieldName(name: string, language: "en" | "es") {
  if (language === "es") return name.replace(/^Ingeniería\s+(de\s+|en\s+)?/, "");
  return name.replace(" Engineering", "");
}

function BulletList({ items }: { items: string[] }) {
  return (
    <ul className="max-w-2xl space-y-2">
      {items.map((item) => (
        <li key={item} className="flex gap-3 text-sm leading-relaxed text-neutral-600 dark:text-neutral-400">
          <span className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-primary" />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}

function SubjectBlock({
  subject,
  standardLabel,
  apIbLabel,
}: {
  subject: CourseSubject;
  standardLabel: string;
  apIbLabel: string;
}) {
  return (
    <div className="border border-neutral-900/10 p-5 dark:border-white/10">
      <h3 className="text-base font-semibold text-neutral-900 dark:text-white">{subject.subject}</h3>
      <div className="mt-3">
        <span className="text-xs font-semibold uppercase tracking-wide text-neutral-600 dark:text-neutral-400">
          {standardLabel}
        </span>
        <div className="mt-2">
          <BulletList items={subject.standard} />
        </div>
      </div>
      {subject.advanced.length > 0 && (
        <div className="mt-4">
          <span className="text-xs font-semibold uppercase tracking-wide text-neutral-600 dark:text-neutral-400">
            {apIbLabel}
          </span>
          <div className="mt-2">
            <BulletList items={subject.advanced} />
          </div>
        </div>
      )}
      {subject.note && (
        <p className="mt-4 text-xs leading-relaxed text-neutral-500 dark:text-neutral-400">{subject.note}</p>
      )}
    </div>
  );
}

const RESOURCE_TYPE_ORDER: TutoringResourceType[] = ["Free", "Low-cost or paid", "Competition & enrichment"];

export default function MathContent() {
  const { language } = useLanguage();
  const t = mathTranslations[language];
  const resourceTypeLabel = resourceTypeLabels[language];

  const displayFields = language === "es" ? fieldsEs : fields;
  const displayMiddleSchool = language === "es" ? middleSchoolSubjectsEs : middleSchoolSubjects;
  const displayHighSchool = language === "es" ? highSchoolSubjectsEs : highSchoolSubjects;
  const displayFocus = language === "es" ? fieldCourseFocusEs : fieldCourseFocus;
  const displayResources = language === "es" ? tutoringResourcesEs : tutoringResources;

  const highMath = displayFields.filter((f) => f.stats.mathIntensity === "High");
  const mediumMath = displayFields.filter((f) => f.stats.mathIntensity === "Medium");

  return (
    <main className="mx-auto max-w-3xl px-6 py-16">
      <span className="mb-4 inline-block border-l-2 border-primary/60 pl-3 text-xs font-mono font-semibold uppercase tracking-widest text-neutral-600 dark:text-neutral-400">
        {t.badge}
      </span>

      <h1 className="text-3xl font-bold tracking-tight text-neutral-900 dark:text-white xl:text-4xl">
        {t.heading}
      </h1>
      <p className="mt-3 max-w-xl text-neutral-600 dark:text-neutral-400">{t.intro}</p>

      <FadeIn as="section" className="mt-12">
        <h2 className="text-xl font-semibold text-neutral-900 dark:text-white">{t.section1Heading}</h2>
        <p className="mt-4 max-w-2xl leading-relaxed text-neutral-600 dark:text-neutral-400">
          {t.introLinkBefore}{" "}
          <Link href="/compare" className="font-medium text-primary hover:underline">
            {t.comparisonLink}
          </Link>
          {t.introAfterLink} {highMath.length} {t.highCountJoiner} {displayFields.length} {t.totalFieldsJoiner}{" "}
          {highMath.map((f) => shortFieldName(f.name, language)).join(", ")} {t.highRatingText} {mediumMath.length}{" "}
          {t.mediumJoiner} {mediumMath.map((f) => shortFieldName(f.name, language)).join(", ")} {t.mediumRatingText}
        </p>
        <p className="mt-4 max-w-2xl leading-relaxed text-neutral-600 dark:text-neutral-400">{t.p2}</p>
      </FadeIn>

      <FadeIn as="section" className="mt-14 border-t border-neutral-900/10 pt-14 dark:border-white/10">
        <h2 className="text-xl font-semibold text-neutral-900 dark:text-white">{t.section2Heading}</h2>
        <p className="mt-3 max-w-2xl leading-relaxed text-neutral-600 dark:text-neutral-400">{t.section2Intro}</p>

        <h3 className="mt-8 font-mono text-xs uppercase tracking-widest text-neutral-600 dark:text-neutral-400">
          {t.middleSchoolLabel}
        </h3>
        <div className="mt-4 grid gap-4 sm:grid-cols-2">
          {displayMiddleSchool.map((subject) => (
            <SubjectBlock
              key={subject.subject}
              subject={subject}
              standardLabel={t.standardCoursesLabel}
              apIbLabel={t.apIbLabel}
            />
          ))}
        </div>
        <p className="mt-4 max-w-2xl text-sm leading-relaxed text-neutral-600 dark:text-neutral-400">
          {t.middleSchoolFooterBefore} <strong>{t.mathcounts}</strong> {t.middleSchoolFooterAfter}
        </p>

        <h3 className="mt-10 font-mono text-xs uppercase tracking-widest text-neutral-600 dark:text-neutral-400">
          {t.highSchoolLabel}
        </h3>
        <div className="mt-4 grid gap-4 sm:grid-cols-2">
          {displayHighSchool.map((subject) => (
            <SubjectBlock
              key={subject.subject}
              subject={subject}
              standardLabel={t.standardCoursesLabel}
              apIbLabel={t.apIbLabel}
            />
          ))}
        </div>

        <div className="mt-8 border border-neutral-900/10 bg-neutral-50 p-5 dark:border-white/10 dark:bg-neutral-900">
          <h3 className="text-sm font-semibold text-neutral-900 dark:text-white">{t.notInUsHeading}</h3>
          <p className="mt-2 max-w-2xl text-sm leading-relaxed text-neutral-600 dark:text-neutral-400">
            {t.notInUsBody}
          </p>
        </div>
      </FadeIn>

      <FadeIn as="section" className="mt-14 border-t border-neutral-900/10 pt-14 dark:border-white/10">
        <h2 className="text-xl font-semibold text-neutral-900 dark:text-white">{t.section3Heading}</h2>
        <p className="mt-3 max-w-2xl leading-relaxed text-neutral-600 dark:text-neutral-400">{t.section3Intro}</p>
        <div className="mt-6 grid gap-4 sm:grid-cols-2">
          {displayFocus.map((focus) => {
            const field = displayFields.find((f) => f.slug === focus.fieldSlug);
            if (!field) return null;
            return (
              <div key={focus.fieldSlug} className="border border-neutral-900/10 p-5 dark:border-white/10">
                <Link
                  href={`/engineering/${field.slug}`}
                  className="text-base font-semibold text-neutral-900 hover:text-primary dark:text-white"
                >
                  {field.name}
                </Link>
                <div className="mt-3">
                  <BulletList items={focus.priorityCourses} />
                </div>
              </div>
            );
          })}
        </div>
      </FadeIn>

      <FadeIn as="section" className="mt-14 border-t border-neutral-900/10 pt-14 dark:border-white/10">
        <h2 className="text-xl font-semibold text-neutral-900 dark:text-white">{t.section4Heading}</h2>
        <p className="mt-3 max-w-2xl leading-relaxed text-neutral-600 dark:text-neutral-400">{t.section4Intro}</p>

        <div className="mt-6 space-y-8">
          {RESOURCE_TYPE_ORDER.map((type) => (
            <div key={type}>
              <h3 className="font-mono text-xs uppercase tracking-widest text-neutral-600 dark:text-neutral-400">
                {resourceTypeLabel[type]}
              </h3>
              <div className="mt-3 space-y-4">
                {displayResources
                  .filter((r) => r.type === type)
                  .map((r) => (
                    <div key={r.name}>
                      <h4 className="text-sm font-semibold text-neutral-900 dark:text-white">{r.name}</h4>
                      <p className="mt-1 max-w-2xl text-sm leading-relaxed text-neutral-600 dark:text-neutral-400">
                        {r.description}
                      </p>
                    </div>
                  ))}
              </div>
            </div>
          ))}
        </div>
      </FadeIn>

      <FadeIn as="section" className="mt-14 border-t border-neutral-900/10 pt-14 dark:border-white/10">
        <p className="max-w-2xl leading-relaxed text-neutral-600 dark:text-neutral-400">{t.closing}</p>
      </FadeIn>
    </main>
  );
}
