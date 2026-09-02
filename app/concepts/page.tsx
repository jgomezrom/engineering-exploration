import type { Metadata } from "next";
import { Suspense } from "react";
import ConceptsExplorer from "../components/ConceptsExplorer";

export const metadata: Metadata = {
  title: "Engineering Concepts | Engineering Exploration",
  description:
    "The core ideas behind engineering, explained in plain language — forces, circuits, structures, algorithms, and more, with real examples and which fields use them.",
};

export default function ConceptsPage() {
  return (
    <main className="mx-auto max-w-3xl px-6 py-16">
      <span className="mb-4 inline-block rounded-full bg-neutral-100 px-4 py-1 text-sm font-medium text-neutral-600 dark:bg-neutral-900 dark:text-neutral-400">
        The building blocks
      </span>

      <h1 className="text-3xl font-bold tracking-tight text-neutral-900 dark:text-white xl:text-4xl">
        Engineering Concepts
      </h1>
      <p className="mt-3 max-w-xl text-neutral-600 dark:text-neutral-400">
        A handful of ideas show up again and again across every engineering field. You don&apos;t
        need to master these before exploring — but if a term on this site is unfamiliar, this is
        the place to look it up.
      </p>

      <div className="mt-10">
        <Suspense fallback={null}>
          <ConceptsExplorer />
        </Suspense>
      </div>
    </main>
  );
}
