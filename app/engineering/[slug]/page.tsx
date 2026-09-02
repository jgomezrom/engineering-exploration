import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import Card from "../../components/Card";
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

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section className="mt-12 border-t border-neutral-900/10 pt-12 dark:border-white/10">
      <h2 className="text-xl font-semibold text-neutral-900 dark:text-white">{title}</h2>
      <div className="mt-4">{children}</div>
    </section>
  );
}

function BulletList({ items }: { items: string[] }) {
  return (
    <ul className="space-y-2">
      {items.map((item) => (
        <li key={item} className="flex gap-3 text-neutral-600 dark:text-neutral-400">
          <span className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-primary" />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}

function SubList({ label, items }: { label: string; items: string[] }) {
  return (
    <div>
      <h3 className="text-sm font-semibold uppercase tracking-wide text-neutral-500">{label}</h3>
      <div className="mt-3">
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
    <main className="mx-auto max-w-3xl px-6 py-16">
      <Link href="/explore" className="text-sm font-medium text-primary hover:underline">
        ← Back to Explore Fields
      </Link>

      <h1 className="mt-4 text-4xl font-bold tracking-tight text-neutral-900 dark:text-white">
        {field.name}
      </h1>
      <p className="mt-3 text-lg text-neutral-600 dark:text-neutral-400">{field.tagline}</p>

      <Section title="What It Is">
        <p className="text-neutral-600 dark:text-neutral-400">{field.whatItIs}</p>
      </Section>

      <Section title="What Engineers Work On">
        <p className="text-neutral-600 dark:text-neutral-400">{field.whatEngineersWorkOn}</p>
      </Section>

      <Section title="Real-World Examples">
        <BulletList items={field.realWorldExamples} />
      </Section>

      <Section title="Common Misconceptions">
        <BulletList items={field.commonMisconceptions} />
      </Section>

      <Section title="A Typical Workday">
        <p className="text-neutral-600 dark:text-neutral-400">{field.typicalWorkday}</p>
      </Section>

      <Section title="Typical Projects">
        <BulletList items={field.typicalProjects} />
      </Section>

      <Section title="Getting Ready">
        <div className="grid gap-8 sm:grid-cols-2">
          <SubList label="Useful Subjects" items={field.usefulSubjects} />
          <SubList label="Helpful Skills" items={field.helpfulSkills} />
        </div>
      </Section>

      <Section title="Where This Field Shows Up">
        <div className="grid gap-8 sm:grid-cols-2">
          <SubList label="Industries" items={field.industries} />
          <SubList label="Related Majors" items={field.relatedMajors} />
        </div>
      </Section>

      <Section title="Career Explorer">
        <div className="grid gap-6 sm:grid-cols-2">
          {field.careerPaths.map((career) => (
            <Card key={career.title}>
              <h3 className="text-lg font-semibold text-neutral-900 dark:text-white">
                {career.title}
              </h3>
              <p className="mt-2 text-sm text-neutral-600 dark:text-neutral-400">
                {career.description}
              </p>
            </Card>
          ))}
        </div>
      </Section>

      <Section title="Weighing It Up">
        <div className="grid gap-8 sm:grid-cols-2">
          <SubList label="Advantages" items={field.advantages} />
          <SubList label="Challenges" items={field.challenges} />
        </div>
      </Section>

      <Section title="Things People Dislike">
        <BulletList items={field.thingsPeopleDislike} />
      </Section>

      <Section title="How Competitive Is It?">
        <p className="text-neutral-600 dark:text-neutral-400">{field.howCompetitive}</p>
      </Section>

      <Section title="Try It Yourself">
        <BulletList items={field.beginnerActivities} />
      </Section>

      <Section title="Questions to Ask Yourself">
        <BulletList items={field.selfReflectionQuestions} />
      </Section>
    </main>
  );
}
