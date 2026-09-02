import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import FieldIcon from "../../components/FieldIcon";
import { challenges } from "../../data/challenges";
import { fields } from "../../data/fields";

export function generateStaticParams() {
  return challenges.map((challenge) => ({ slug: challenge.slug }));
}

export async function generateMetadata(
  props: PageProps<"/challenges/[slug]">
): Promise<Metadata> {
  const { slug } = await props.params;
  const challenge = challenges.find((c) => c.slug === slug);

  if (!challenge) {
    return { title: "Challenge Not Found" };
  }

  return {
    title: `${challenge.title} | Engineering Exploration`,
    description: challenge.tagline,
  };
}

function Section({ index, title, children }: { index: number; title: string; children: React.ReactNode }) {
  return (
    <section className="mt-14 border-t border-neutral-900/10 pt-14 dark:border-white/10">
      <div className="flex items-baseline gap-3">
        <span className="font-mono text-xs text-neutral-600 dark:text-neutral-400">{String(index).padStart(2, "0")}</span>
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

function NumberedList({ items }: { items: string[] }) {
  return (
    <ol className="max-w-2xl space-y-4">
      {items.map((item, i) => (
        <li key={item} className="flex gap-4 leading-relaxed text-neutral-600 dark:text-neutral-400">
          <span className="flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-primary/10 font-mono text-xs font-semibold text-primary">
            {i + 1}
          </span>
          <span>{item}</span>
        </li>
      ))}
    </ol>
  );
}

export default async function ChallengePage(props: PageProps<"/challenges/[slug]">) {
  const { slug } = await props.params;
  const challenge = challenges.find((c) => c.slug === slug);

  if (!challenge) {
    notFound();
  }

  const field = fields.find((f) => f.slug === challenge.field);

  if (!field) {
    notFound();
  }

  return (
    <main className="relative mx-auto max-w-3xl px-6 py-16">
      <span className="pointer-events-none absolute left-6 top-10 hidden h-8 w-8 border-l-2 border-t-2 border-primary/30 lg:block" />
      <span className="pointer-events-none absolute right-6 top-10 hidden h-8 w-8 border-r-2 border-t-2 border-primary/30 lg:block" />
      <span className="pointer-events-none absolute bottom-10 left-6 hidden h-8 w-8 border-b-2 border-l-2 border-primary/30 lg:block" />
      <span className="pointer-events-none absolute bottom-10 right-6 hidden h-8 w-8 border-b-2 border-r-2 border-primary/30 lg:block" />

      <Link href="/challenges" className="text-sm font-medium text-primary hover:underline">
        ← Back to Challenges
      </Link>

      <div className="mt-6 inline-flex items-center justify-center rounded-full bg-primary/10 p-4">
        <FieldIcon slug={challenge.field} className="h-10 w-10 text-primary" />
      </div>

      <h1 className="mt-4 text-4xl font-bold tracking-tight text-neutral-900 dark:text-white">
        {challenge.title}
      </h1>
      <p className="mt-3 text-lg text-neutral-600 dark:text-neutral-400">{challenge.tagline}</p>

      <div className="mt-6 flex flex-wrap gap-3">
        <span className="rounded-full bg-neutral-100 px-4 py-1 text-sm font-medium text-neutral-600 dark:bg-neutral-900 dark:text-neutral-400">
          {challenge.difficulty}
        </span>
        <span className="rounded-full bg-neutral-100 px-4 py-1 text-sm font-medium text-neutral-600 dark:bg-neutral-900 dark:text-neutral-400">
          {challenge.estimatedTime}
        </span>
        <span className="rounded-full bg-neutral-100 px-4 py-1 text-sm font-medium text-neutral-600 dark:bg-neutral-900 dark:text-neutral-400">
          {challenge.approximateCost}
        </span>
      </div>

      <p className="mt-6 text-sm text-neutral-500 dark:text-neutral-400">
        Related field:{" "}
        <Link href={`/engineering/${field.slug}`} className="font-medium text-primary hover:underline">
          {field.name}
        </Link>
      </p>

      <Section index={1} title="What You'll Need">
        <BulletList items={challenge.materials} />
      </Section>

      <Section index={2} title="Instructions">
        <NumberedList items={challenge.instructions} />
      </Section>

      <Section index={3} title="Skills You'll Practice">
        <BulletList items={challenge.skillsLearned} />
      </Section>
    </main>
  );
}
