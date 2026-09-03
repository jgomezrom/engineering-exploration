import type { Metadata } from "next";
import Link from "next/link";
import Card from "../components/Card";
import FadeIn from "../components/FadeIn";
import { fields } from "../data/fields";
import { fieldStubs } from "../data/fieldStubs";
import FieldIcon from "../components/FieldIcon";
import BookmarkedFields from "../components/BookmarkedFields";

function joinNames(names: string[]) {
  if (names.length <= 1) return names.join("");
  return `${names.slice(0, -1).join(", ")}, and ${names[names.length - 1]}`;
}

export const metadata: Metadata = {
  title: "Explore Engineering Fields | Engineering Exploration",
  description: `Browse ${fields.length} engineering fields — ${joinNames(
    fields.map((f) => f.name.replace(" Engineering", ""))
  )} — and see what engineers in each area actually do.`,
};

export default function ExplorePage() {
  return (
    <main className="mx-auto max-w-5xl px-6 py-16 xl:max-w-6xl">
      <span className="mb-4 inline-block rounded-full bg-neutral-100 px-4 py-1 text-sm font-medium text-neutral-600 dark:bg-neutral-900 dark:text-neutral-400">
        Browse by field
      </span>

      <h1 className="text-3xl font-bold text-neutral-900 dark:text-white xl:text-4xl">
        Explore Engineering Fields
      </h1>
      <p className="mt-2 max-w-xl text-neutral-600 dark:text-neutral-400">
        Click into any field below to see what engineers in that area actually do, or{" "}
        <Link href="/compare" className="font-medium text-primary hover:underline">
          compare all {fields.length} side by side
        </Link>
        .
      </p>

      <div className="mt-10">
        <BookmarkedFields
          allFields={[...fields, ...fieldStubs].map((f) => ({ slug: f.slug, name: f.name, tagline: f.tagline }))}
        />
      </div>

      <FadeIn className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {fields.map((field) => (
          <Link key={field.slug} href={`/engineering/${field.slug}`}>
            <Card>
  <FieldIcon slug={field.slug} className="h-10 w-10 text-primary" />
  <h2 className="mt-4 text-lg font-semibold text-neutral-900 dark:text-white">
    {field.name}
  </h2>
  <p className="mt-2 text-sm text-neutral-600 dark:text-neutral-400">
    {field.tagline}
  </p>
</Card>
          </Link>
        ))}
      </FadeIn>

      {fieldStubs.length > 0 && (
        <FadeIn className="mt-16 border-t border-neutral-900/10 pt-10 dark:border-white/10">
          <h2 className="text-lg font-semibold text-neutral-900 dark:text-white">
            More fields, in brief
          </h2>
          <p className="mt-1 max-w-xl text-sm text-neutral-600 dark:text-neutral-400">
            Shorter overviews — real and sourced, but without the full day-in-the-life,
            comparison stats, or next steps the fields above have.
          </p>

          <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {fieldStubs.map((stub) => (
              <Link key={stub.slug} href={`/engineering/${stub.slug}`}>
                <Card>
                  <div className="flex items-center justify-between">
                    <FieldIcon slug={stub.slug} className="h-8 w-8 text-primary" />
                    <span className="rounded-full bg-neutral-100 px-3 py-1 font-mono text-xs uppercase tracking-wide text-neutral-500 dark:bg-neutral-900 dark:text-neutral-400">
                      Brief overview
                    </span>
                  </div>
                  <h3 className="mt-4 text-base font-semibold text-neutral-900 dark:text-white">
                    {stub.name}
                  </h3>
                  <p className="mt-2 text-sm text-neutral-600 dark:text-neutral-400">
                    {stub.tagline}
                  </p>
                </Card>
              </Link>
            ))}
          </div>
        </FadeIn>
      )}
    </main>
  );
}
