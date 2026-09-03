import type { Metadata } from "next";
import Button from "../components/Button";
import FadeIn from "../components/FadeIn";
import { careerComparisons } from "../data/careerComparisons";
import { fields } from "../data/fields";

export const metadata: Metadata = {
  title: "Engineering vs. Other Careers | Engineering Exploration",
  description:
    "Engineer or mechanic? Engineer or electrician? Engineer or doctor? Clearing up the careers people mix up most, and what actually separates them.",
};

function RoleCard({
  title,
  description,
  typicalPath,
}: {
  title: string;
  description: string;
  typicalPath: string;
}) {
  return (
    <div className="border border-neutral-900/10 p-5 dark:border-white/10">
      <h3 className="text-base font-semibold text-neutral-900 dark:text-white">{title}</h3>
      <p className="mt-2 text-sm leading-relaxed text-neutral-600 dark:text-neutral-400">{description}</p>
      <p className="mt-3 text-xs font-semibold uppercase tracking-wide text-neutral-600 dark:text-neutral-400">
        Typical path
      </p>
      <p className="mt-1 text-sm leading-relaxed text-neutral-600 dark:text-neutral-400">{typicalPath}</p>
    </div>
  );
}

export default function VsPage() {
  return (
    <main className="mx-auto max-w-3xl px-6 py-16">
      <span className="mb-4 inline-block rounded-full bg-neutral-100 px-4 py-1 text-sm font-medium text-neutral-600 dark:bg-neutral-900 dark:text-neutral-400">
        Clearing up the mix-ups
      </span>

      <h1 className="text-3xl font-bold tracking-tight text-neutral-900 dark:text-white xl:text-4xl">
        Engineering vs. Other Careers
      </h1>
      <p className="mt-3 max-w-xl text-neutral-600 dark:text-neutral-400">
        A few careers get mixed up with engineering constantly — sometimes because the titles
        sound alike, sometimes because the work genuinely overlaps. Neither role in any of these
        pairs is &ldquo;better&rdquo; than the other — they&apos;re just different jobs, usually
        with different training paths.
      </p>

      <div className="mt-10 space-y-14">
        {careerComparisons.map((comparison) => {
          const field = fields.find((f) => f.slug === comparison.relatedField);
          return (
            <FadeIn key={comparison.slug} className="border-t border-neutral-900/10 pt-10 dark:border-white/10">
              <h2 className="text-xl font-semibold text-neutral-900 dark:text-white">{comparison.title}</h2>

              <div className="mt-5 grid gap-4 sm:grid-cols-2">
                <RoleCard {...comparison.engineerRole} />
                <RoleCard {...comparison.otherRole} />
              </div>

              <div className="mt-5 border-l-2 border-primary/40 pl-4">
                <span className="text-xs font-semibold uppercase tracking-wide text-neutral-600 dark:text-neutral-400">
                  The real difference
                </span>
                <p className="mt-1 max-w-2xl text-sm leading-relaxed text-neutral-600 dark:text-neutral-400">
                  {comparison.keyDifference}
                </p>
              </div>

              {field && (
                <div className="mt-5">
                  <Button href={`/engineering/${field.slug}`} variant="secondary">
                    More on {field.name} →
                  </Button>
                </div>
              )}
            </FadeIn>
          );
        })}
      </div>
    </main>
  );
}
