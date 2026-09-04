"use client";

import Link from "next/link";
import Card from "./Card";
import FieldIcon from "./FieldIcon";
import FieldIllustration from "./FieldIllustration";
import FieldStatSheet from "./FieldStatSheet";
import SalaryDetails from "./SalaryDetails";
import DayInTheLife from "./DayInTheLife";
import NextStepsExplorer from "./NextStepsExplorer";
import MythRealityCards from "./MythRealityCards";
import BookmarkButton from "./BookmarkButton";
import BackLink from "./BackLink";
import FieldVisitTracker from "./FieldVisitTracker";
import FadeIn from "./FadeIn";
import { fields } from "../data/fields";
import { fieldStubs } from "../data/fieldStubs";
import { fieldsEs } from "../data/fields.es";
import { fieldStubsEs } from "../data/fieldStubs.es";
import { careerComparisons } from "../data/careerComparisons";
import { FieldSlug } from "../data/types";
import { useLanguage } from "../context/LanguageContext";
import { fieldPageTranslations } from "../data/translations/fieldPage";

function Section({ index, title, children }: { index: number; title: string; children: React.ReactNode }) {
  return (
    <FadeIn>
      <section className="mt-14 border-t border-neutral-900/10 pt-14 dark:border-white/10">
        <div className="flex items-baseline gap-3">
          <span className="font-mono text-xs text-neutral-600 dark:text-neutral-400">
            {String(index).padStart(2, "0")}
          </span>
          <h2 className="text-xl font-semibold text-neutral-900 dark:text-white">{title}</h2>
        </div>
        <div className="mt-5">{children}</div>
      </section>
    </FadeIn>
  );
}

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

function SubList({ label, items }: { label: string; items: string[] }) {
  return (
    <div>
      <h3 className="text-sm font-semibold uppercase tracking-wide text-neutral-600 dark:text-neutral-400">{label}</h3>
      <div className="mt-4">
        <BulletList items={items} />
      </div>
    </div>
  );
}

function PageFrame({
  slug,
  name,
  tagline,
  printLabel,
  children,
}: {
  slug: FieldSlug;
  name: string;
  tagline: string;
  printLabel: string;
  children: React.ReactNode;
}) {
  return (
    <main className="relative mx-auto w-full min-w-0 max-w-3xl px-6 py-16">
      <span className="pointer-events-none absolute left-6 top-10 hidden h-8 w-8 border-l-2 border-t-2 border-primary/30 lg:block" />
      <span className="pointer-events-none absolute right-6 top-10 hidden h-8 w-8 border-r-2 border-t-2 border-primary/30 lg:block" />
      <span className="pointer-events-none absolute bottom-10 left-6 hidden h-8 w-8 border-b-2 border-l-2 border-primary/30 lg:block" />
      <span className="pointer-events-none absolute bottom-10 right-6 hidden h-8 w-8 border-b-2 border-r-2 border-primary/30 lg:block" />

      <div className="print:hidden">
        <BackLink href="/explore" labelKey="backToFields" />
      </div>

      <div className="mt-6 inline-flex items-center justify-center border border-primary/30 bg-primary/5 p-4">
        <FieldIcon slug={slug} className="h-10 w-10 text-primary" />
      </div>

      <h1 className="mt-4 text-4xl font-bold tracking-tight text-neutral-900 dark:text-white">{name}</h1>
      <p className="mt-3 text-lg text-neutral-600 dark:text-neutral-400">{tagline}</p>
      <div className="flex flex-wrap items-center gap-3">
        <div className="print:hidden">
          <BookmarkButton slug={slug} />
        </div>
        <button
          type="button"
          onClick={() => window.print()}
          className="print:hidden mt-6 flex items-center gap-2 border border-neutral-900/10 px-3 py-1.5 text-xs font-medium text-neutral-600 transition-colors hover:border-primary/40 hover:text-primary dark:border-white/10 dark:text-neutral-400"
        >
          <svg viewBox="0 0 20 20" fill="none" aria-hidden="true" className="h-3.5 w-3.5">
            <path d="M6 7.5V3h8v4.5" stroke="currentColor" strokeWidth="1.4" strokeLinejoin="round" />
            <rect x="3" y="7.5" width="14" height="7" rx="1" stroke="currentColor" strokeWidth="1.4" />
            <rect x="6" y="11" width="8" height="5.5" stroke="currentColor" strokeWidth="1.4" />
          </svg>
          {printLabel}
        </button>
      </div>

      {children}
    </main>
  );
}

function NotTranslatedNotice({ text }: { text: string }) {
  return (
    <p className="mt-6 max-w-2xl border border-accent/30 bg-accent/5 p-3 text-xs leading-relaxed text-neutral-600 dark:bg-accent/10 dark:text-neutral-400">
      {text}
    </p>
  );
}

export default function FieldPageContent({ slug }: { slug: FieldSlug }) {
  const { language } = useLanguage();
  const t = fieldPageTranslations[language];

  const englishField = fields.find((f) => f.slug === slug);
  const stub = !englishField ? fieldStubs.find((s) => s.slug === slug) : undefined;
  const spanishField = language === "es" ? fieldsEs.find((f) => f.slug === slug) : undefined;
  const spanishStub = language === "es" ? fieldStubsEs.find((s) => s.slug === slug) : undefined;
  const showNotice = stub ? language === "es" && !spanishStub : language === "es" && !spanishField;
  const field = spanishField ?? englishField;

  if (stub) {
    const displayStub = spanishStub ?? stub;
    const relatedPool = language === "es" ? [...fieldsEs, ...fields] : fields;
    const related = relatedPool.find((f) => f.slug === stub.relatedField);
    return (
      <PageFrame slug={stub.slug} name={displayStub.name} tagline={displayStub.tagline} printLabel={t.printField}>
        <div className="mt-8">
          <div className="relative flex items-center justify-center border border-neutral-900/10 bg-white p-6 dark:border-white/10 dark:bg-neutral-900">
            <span className="pointer-events-none absolute left-2 top-2 h-2.5 w-2.5 border-l border-t border-primary/40" />
            <span className="pointer-events-none absolute right-2 top-2 h-2.5 w-2.5 border-r border-t border-primary/40" />
            <span className="pointer-events-none absolute bottom-2 left-2 h-2.5 w-2.5 border-b border-l border-primary/40" />
            <span className="pointer-events-none absolute bottom-2 right-2 h-2.5 w-2.5 border-b border-r border-primary/40" />
            <FieldIllustration slug={stub.slug} className="h-auto w-full max-w-sm text-primary" />
          </div>
          <p className="mt-2 text-center font-mono text-[10px] uppercase tracking-widest text-neutral-400 dark:text-neutral-600">
            {t.figureCaption(displayStub.name)}
          </p>
        </div>
        <div className="mt-6 border border-neutral-900/10 bg-neutral-50 p-5 dark:border-white/10 dark:bg-neutral-900">
          <p className="text-sm leading-relaxed text-neutral-600 dark:text-neutral-400">
            {t.stubOverview}
            {related && (
              <>
                {" "}
                {t.closelyRelatedTo}{" "}
                <Link href={`/engineering/${related.slug}`} className="font-medium text-primary hover:underline">
                  {related.name}
                </Link>
                {t.hasFullPicture}
              </>
            )}
          </p>
        </div>
        {showNotice && <NotTranslatedNotice text={t.notTranslatedNotice} />}

        <Section index={1} title={t.section1}>
          <p className="max-w-2xl leading-relaxed text-neutral-600 dark:text-neutral-400">{displayStub.whatItIs}</p>
        </Section>

        <Section index={2} title={t.section3}>
          <BulletList items={displayStub.realWorldExamples} />
        </Section>

        <Section index={3} title={t.relatedMajors}>
          <BulletList items={displayStub.relatedMajors} />
        </Section>

        <Section index={4} title={t.section13}>
          {displayStub.salary ? (
            <SalaryDetails salary={displayStub.salary} />
          ) : (
            <p className="max-w-2xl leading-relaxed text-neutral-600 dark:text-neutral-400">{displayStub.salaryNote}</p>
          )}
        </Section>
      </PageFrame>
    );
  }

  if (!field) return null;

  return (
    <PageFrame slug={field.slug} name={field.name} tagline={field.tagline} printLabel={t.printField}>
      <FieldVisitTracker slug={field.slug} />
      {showNotice && <NotTranslatedNotice text={t.notTranslatedNotice} />}
      <div className="mt-10 grid gap-6 sm:grid-cols-2">
        <div>
          <div className="relative flex items-center justify-center border border-neutral-900/10 bg-white p-6 dark:border-white/10 dark:bg-neutral-900">
            <span className="pointer-events-none absolute left-2 top-2 h-2.5 w-2.5 border-l border-t border-primary/40" />
            <span className="pointer-events-none absolute right-2 top-2 h-2.5 w-2.5 border-r border-t border-primary/40" />
            <span className="pointer-events-none absolute bottom-2 left-2 h-2.5 w-2.5 border-b border-l border-primary/40" />
            <span className="pointer-events-none absolute bottom-2 right-2 h-2.5 w-2.5 border-b border-r border-primary/40" />
            <FieldIllustration slug={field.slug} className="h-auto w-full text-primary" />
          </div>
          <p className="mt-2 text-center font-mono text-[10px] uppercase tracking-widest text-neutral-400 dark:text-neutral-600">
            {t.figureCaption(field.name)}
          </p>
        </div>
        <div className="border border-neutral-900/10 p-6 dark:border-white/10">
          <span className="font-mono text-xs uppercase tracking-widest text-neutral-600 dark:text-neutral-400">
            {t.atAGlance}
          </span>

          <div className="mt-4">
            <FieldStatSheet
              stats={{
                mathIntensity: field.stats.mathIntensity,
                handsOnWork: field.stats.handsOnWork,
                regulatoryBurden: field.stats.regulatoryBurden,
                marketUncertainty: field.stats.marketUncertainty,
              }}
            />
          </div>
        </div>
      </div>

      <Section index={1} title={t.section1}>
        <p className="max-w-2xl leading-relaxed text-neutral-600 dark:text-neutral-400">{field.whatItIs}</p>
      </Section>

      <Section index={2} title={t.section2}>
        <p className="max-w-2xl leading-relaxed text-neutral-600 dark:text-neutral-400">{field.whatEngineersWorkOn}</p>
      </Section>

      <Section index={3} title={t.section3}>
        <BulletList items={field.realWorldExamples} />
      </Section>

      <Section index={4} title={t.section4}>
        <p className="mb-5 max-w-2xl text-sm text-neutral-500 dark:text-neutral-400 print:hidden">{t.tapCard}</p>
        <MythRealityCards items={field.mythsAndRealities} />
        {careerComparisons.some((c) => c.relatedField === field.slug) && (
          <Link href="/vs" className="mt-4 inline-block text-sm font-medium text-primary hover:underline print:hidden">
            {t.seeCompared}
          </Link>
        )}
      </Section>

      <Section index={5} title={t.section5}>
        <p className="max-w-2xl leading-relaxed text-neutral-600 dark:text-neutral-400">{field.typicalWorkday}</p>
        <div className="mt-6">
          <DayInTheLife dayInLife={field.dayInLife} />
        </div>
      </Section>

      <Section index={6} title={t.section6}>
        <BulletList items={field.typicalProjects} />
      </Section>

      <Section index={7} title={t.section7}>
        <div className="grid gap-8 sm:grid-cols-2">
          <SubList label={t.usefulSubjects} items={field.usefulSubjects} />
          <SubList label={t.helpfulSkills} items={field.helpfulSkills} />
        </div>
      </Section>

      <Section index={8} title={t.section8}>
        <div className="grid gap-8 sm:grid-cols-2">
          <SubList label={t.industries} items={field.industries} />
          <SubList label={t.relatedMajors} items={field.relatedMajors} />
        </div>
      </Section>

      <Section index={9} title={t.section9}>
        <div className="grid gap-6 sm:grid-cols-2">
          {field.careerPaths.map((career) => (
            <Card key={career.title}>
              <h3 className="text-lg font-semibold text-neutral-900 dark:text-white">{career.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-neutral-600 dark:text-neutral-400">{career.description}</p>
            </Card>
          ))}
        </div>
      </Section>

      <Section index={10} title={t.section10}>
        <div className="grid gap-8 sm:grid-cols-2">
          <SubList label={t.advantages} items={field.advantages} />
          <SubList label={t.challenges} items={field.challenges} />
        </div>
      </Section>

      <Section index={11} title={t.section11}>
        <BulletList items={field.thingsPeopleDislike} />
      </Section>

      <Section index={12} title={t.section12}>
        <p className="max-w-2xl leading-relaxed text-neutral-600 dark:text-neutral-400">{field.howCompetitive}</p>
      </Section>

      <Section index={13} title={t.section13}>
        <SalaryDetails salary={field.salary} />
      </Section>

      <Section index={14} title={t.section14}>
        <BulletList items={field.beginnerActivities} />
      </Section>

      <Section index={15} title={t.section15}>
        <BulletList items={field.selfReflectionQuestions} />
      </Section>

      <Section index={16} title={t.section16}>
        <NextStepsExplorer nextSteps={field.nextSteps} />
      </Section>
    </PageFrame>
  );
}
