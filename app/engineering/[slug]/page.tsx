import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import Card from "../../components/Card";
import FieldIcon from "../../components/FieldIcon";
import { fields } from "../../data/fields";

export function generateStaticParams() {
  return fields.map((field) => ({ slug: field.slug }));
}

export async function generateMetadata(
  props: PageProps<"/engineering/[slug]">
): Promise<Metadata> {
  const { slug } = await props.params;
  const field = fields.find((f) => f.slug === slug);

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
    <section className="mt-14 border-t border-neutral-900/10 pt-14 dark:border-white/10">
      <div className="flex items-baseline gap-3">
        <span className="font-mono text-xs text-neutral-600 dark:text-neutral-400">
          {String(index).padStart(2, "0")}
        </span>
        <h2 className="text-xl font-semibold text-neutral-900 dark:text-white">{title}</h2>
      </div>
      <div className="mt-5">{children}</div>
    </section>
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

export default async function EngineeringFieldPage(props: PageProps<"/engineering/[slug]">) {
  const { slug } = await props.params;
  const field = fields.find((f) => f.slug === slug);

  if (!field) {
    notFound();
  }

  return (
    <main className="relative mx-auto max-w-3xl px-6 py-16">
      <span className="pointer-events-none absolute left-6 top-10 hidden h-8 w-8 border-l-2 border-t-2 border-primary/30 lg:block" />
      <span className="pointer-events-none absolute right-6 top-10 hidden h-8 w-8 border-r-2 border-t-2 border-primary/30 lg:block" />
      <span className="pointer-events-none absolute bottom-10 left-6 hidden h-8 w-8 border-b-2 border-l-2 border-primary/30 lg:block" />
      <span className="pointer-events-none absolute bottom-10 right-6 hidden h-8 w-8 border-b-2 border-r-2 border-primary/30 lg:block" />

      <Link href="/explore" className="text-sm font-medium text-primary hover:underline">
        ← Back to Explore Fields
      </Link>

      <div className="mt-6 inline-flex items-center justify-center rounded-full bg-primary/10 p-4">
        <FieldIcon slug={field.slug} className="h-10 w-10 text-primary" />
      </div>

      <h1 className="mt-4 text-4xl font-bold tracking-tight text-neutral-900 dark:text-white">
        {field.name}
      </h1>
      <p className="mt-3 text-lg text-neutral-600 dark:text-neutral-400">{field.tagline}</p>

      <Section index={1} title="What It Is">
        <p className="max-w-2xl leading-relaxed text-neutral-600 dark:text-neutral-400">
          {field.whatItIs}
        </p>
      </Section>

      <Section index={2} title="What Engineers Work On">
        <p className="max-w-2xl leading-relaxed text-neutral-600 dark:text-neutral-400">
          {field.whatEngineersWorkOn}
        </p>
      </Section>

      <Section index={3} title="Real-World Examples">
        <BulletList items={field.realWorldExamples} />
      </Section>

      <Section index={4} title="Common Misconceptions">
        <BulletList items={field.commonMisconceptions} />
      </Section>

      <Section index={5} title="A Typical Workday">
        <p className="max-w-2xl leading-relaxed text-neutral-600 dark:text-neutral-400">
          {field.typicalWorkday}
        </p>
      </Section>

      <Section index={6} title="Typical Projects">
        <BulletList items={field.typicalProjects} />
      </Section>

      <Section index={7} title="Getting Ready">
        <div className="grid gap-8 sm:grid-cols-2">
          <SubList label="Useful Subjects" items={field.usefulSubjects} />
          <SubList label="Helpful Skills" items={field.helpfulSkills} />
        </div>
      </Section>

      <Section index={8} title="Where This Field Shows Up">
        <div className="grid gap-8 sm:grid-cols-2">
          <SubList label="Industries" items={field.industries} />
          <SubList label="Related Majors" items={field.relatedMajors} />
        </div>
      </Section>

      <Section index={9} title="Career Explorer">
        <div className="grid gap-6 sm:grid-cols-2">
          {field.careerPaths.map((career) => (
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
          <SubList label="Advantages" items={field.advantages} />
          <SubList label="Challenges" items={field.challenges} />
        </div>
      </Section>

      <Section index={11} title="Things People Dislike">
        <BulletList items={field.thingsPeopleDislike} />
      </Section>

      <Section index={12} title="How Competitive Is It?">
        <p className="max-w-2xl leading-relaxed text-neutral-600 dark:text-neutral-400">
          {field.howCompetitive}
        </p>
      </Section>

      <Section index={13} title="Try It Yourself">
        <BulletList items={field.beginnerActivities} />
      </Section>

      <Section index={14} title="Questions to Ask Yourself">
        <BulletList items={field.selfReflectionQuestions} />
      </Section>
    </main>
  );
}
