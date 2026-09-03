import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import Card from "../../components/Card";
import FadeIn from "../../components/FadeIn";
import FieldIcon from "../../components/FieldIcon";
import FieldIllustration from "../../components/FieldIllustration";
import FieldStatSheet from "../../components/FieldStatSheet";
import SalaryDetails from "../../components/SalaryDetails";
import DayInTheLife from "../../components/DayInTheLife";
import NextStepsExplorer from "../../components/NextStepsExplorer";
import { fields } from "../../data/fields";
import { fieldStubs } from "../../data/fieldStubs";
import { careerComparisons } from "../../data/careerComparisons";

export function generateStaticParams() {
  return [...fields.map((field) => ({ slug: field.slug })), ...fieldStubs.map((stub) => ({ slug: stub.slug }))];
}

export async function generateMetadata(
  props: PageProps<"/engineering/[slug]">
): Promise<Metadata> {
  const { slug } = await props.params;
  const field = fields.find((f) => f.slug === slug) ?? fieldStubs.find((s) => s.slug === slug);

  if (!field) {
    return { title: "Field Not Found" };
  }

  return {
    title: `${field.name} | Engineering Exploration`,
    description: field.tagline,
  };
}

function Section({
  index,
  title,
  children,
}: {
  index: number;
  title: string;
  children: React.ReactNode;
}) {
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
  children,
}: {
  slug: string;
  name: string;
  tagline: string;
  children: React.ReactNode;
}) {
  return (
    <main className="relative mx-auto w-full min-w-0 max-w-3xl px-6 py-16">
      <span className="pointer-events-none absolute left-6 top-10 hidden h-8 w-8 border-l-2 border-t-2 border-primary/30 lg:block" />
      <span className="pointer-events-none absolute right-6 top-10 hidden h-8 w-8 border-r-2 border-t-2 border-primary/30 lg:block" />
      <span className="pointer-events-none absolute bottom-10 left-6 hidden h-8 w-8 border-b-2 border-l-2 border-primary/30 lg:block" />
      <span className="pointer-events-none absolute bottom-10 right-6 hidden h-8 w-8 border-b-2 border-r-2 border-primary/30 lg:block" />

      <Link href="/explore" className="text-sm font-medium text-primary hover:underline">
        ← Back to Explore Fields
      </Link>

      <div className="mt-6 inline-flex items-center justify-center rounded-full bg-primary/10 p-4">
        <FieldIcon slug={slug} className="h-10 w-10 text-primary" />
      </div>

      <h1 className="mt-4 text-4xl font-bold tracking-tight text-neutral-900 dark:text-white">{name}</h1>
      <p className="mt-3 text-lg text-neutral-600 dark:text-neutral-400">{tagline}</p>

      {children}
    </main>
  );
}

export default async function EngineeringFieldPage(props: PageProps<"/engineering/[slug]">) {
  const { slug } = await props.params;
  const field = fields.find((f) => f.slug === slug);
  const stub = !field ? fieldStubs.find((s) => s.slug === slug) : undefined;

  if (!field && !stub) {
    notFound();
  }

  if (stub) {
    const related = fields.find((f) => f.slug === stub.relatedField);
    return (
      <PageFrame slug={stub.slug} name={stub.name} tagline={stub.tagline}>
        <div className="mt-8 border border-neutral-900/10 bg-neutral-50 p-5 dark:border-white/10 dark:bg-neutral-900">
          <p className="text-sm leading-relaxed text-neutral-600 dark:text-neutral-400">
            This is a brief overview, not a full deep-dive like the site&apos;s main fields —
            we haven&apos;t built out a full day-in-the-life, comparison stats, or age-specific
            next steps for it yet.
            {related && (
              <>
                {" "}
                It&apos;s closely related to{" "}
                <Link href={`/engineering/${related.slug}`} className="font-medium text-primary hover:underline">
                  {related.name}
                </Link>
                , which has the full picture.
              </>
            )}
          </p>
        </div>

        <Section index={1} title="What It Is">
          <p className="max-w-2xl leading-relaxed text-neutral-600 dark:text-neutral-400">{stub.whatItIs}</p>
        </Section>

        <Section index={2} title="Real-World Examples">
          <BulletList items={stub.realWorldExamples} />
        </Section>

        <Section index={3} title="Related Majors">
          <BulletList items={stub.relatedMajors} />
        </Section>

        <Section index={4} title="What You Could Earn">
          {stub.salary ? (
            <SalaryDetails salary={stub.salary} />
          ) : (
            <p className="max-w-2xl leading-relaxed text-neutral-600 dark:text-neutral-400">{stub.salaryNote}</p>
          )}
        </Section>
      </PageFrame>
    );
  }

  return (
    <PageFrame slug={field!.slug} name={field!.name} tagline={field!.tagline}>
      <div className="mt-10 grid gap-6 sm:grid-cols-2">
        <div className="flex items-center justify-center border border-neutral-900/10 bg-white p-6 dark:border-white/10 dark:bg-neutral-900">
          <FieldIllustration slug={field!.slug} className="h-auto w-full text-primary" />
        </div>
        <div className="border border-neutral-900/10 p-6 dark:border-white/10">
          <span className="font-mono text-xs uppercase tracking-widest text-neutral-600 dark:text-neutral-400">
            At a Glance
          </span>

          <div className="mt-4">
            <FieldStatSheet
              stats={{
                mathIntensity: field!.stats.mathIntensity,
                handsOnWork: field!.stats.handsOnWork,
                regulatoryBurden: field!.stats.regulatoryBurden,
                marketUncertainty: field!.stats.marketUncertainty,
              }}
            />
          </div>
        </div>
      </div>

      <Section index={1} title="What It Is">
        <p className="max-w-2xl leading-relaxed text-neutral-600 dark:text-neutral-400">
          {field!.whatItIs}
        </p>
      </Section>

      <Section index={2} title="What Engineers Work On">
        <p className="max-w-2xl leading-relaxed text-neutral-600 dark:text-neutral-400">
          {field!.whatEngineersWorkOn}
        </p>
      </Section>

      <Section index={3} title="Real-World Examples">
        <BulletList items={field!.realWorldExamples} />
      </Section>

      <Section index={4} title="Common Misconceptions">
        <BulletList items={field!.commonMisconceptions} />
        {careerComparisons.some((c) => c.relatedField === field!.slug) && (
          <Link href="/vs" className="mt-4 inline-block text-sm font-medium text-primary hover:underline">
            See this compared side by side →
          </Link>
        )}
      </Section>

      <Section index={5} title="A Day in the Life">
        <p className="max-w-2xl leading-relaxed text-neutral-600 dark:text-neutral-400">
          {field!.typicalWorkday}
        </p>
        <div className="mt-6">
          <DayInTheLife dayInLife={field!.dayInLife} />
        </div>
      </Section>

      <Section index={6} title="Typical Projects">
        <BulletList items={field!.typicalProjects} />
      </Section>

      <Section index={7} title="Getting Ready">
        <div className="grid gap-8 sm:grid-cols-2">
          <SubList label="Useful Subjects" items={field!.usefulSubjects} />
          <SubList label="Helpful Skills" items={field!.helpfulSkills} />
        </div>
      </Section>

      <Section index={8} title="Where This Field Shows Up">
        <div className="grid gap-8 sm:grid-cols-2">
          <SubList label="Industries" items={field!.industries} />
          <SubList label="Related Majors" items={field!.relatedMajors} />
        </div>
      </Section>

      <Section index={9} title="Career Explorer">
        <div className="grid gap-6 sm:grid-cols-2">
          {field!.careerPaths.map((career) => (
            <Card key={career.title}>
              <h3 className="text-lg font-semibold text-neutral-900 dark:text-white">
                {career.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-neutral-600 dark:text-neutral-400">
                {career.description}
              </p>
            </Card>
          ))}
        </div>
      </Section>

      <Section index={10} title="Weighing It Up">
        <div className="grid gap-8 sm:grid-cols-2">
          <SubList label="Advantages" items={field!.advantages} />
          <SubList label="Challenges" items={field!.challenges} />
        </div>
      </Section>

      <Section index={11} title="Things People Dislike">
        <BulletList items={field!.thingsPeopleDislike} />
      </Section>

      <Section index={12} title="How Competitive Is It?">
        <p className="max-w-2xl leading-relaxed text-neutral-600 dark:text-neutral-400">
          {field!.howCompetitive}
        </p>
      </Section>

      <Section index={13} title="What You Could Earn">
        <SalaryDetails salary={field!.salary} />
      </Section>

      <Section index={14} title="Try It Yourself">
        <BulletList items={field!.beginnerActivities} />
      </Section>

      <Section index={15} title="Questions to Ask Yourself">
        <BulletList items={field!.selfReflectionQuestions} />
      </Section>

      <Section index={16} title="What Can I Do Next?">
        <NextStepsExplorer nextSteps={field!.nextSteps} />
      </Section>
    </PageFrame>
  );
}
