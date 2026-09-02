import type { Metadata } from "next";
import CuriosityExplorer from "../components/CuriosityExplorer";

export const metadata: Metadata = {
  title: "What Are You Into? | Engineering Exploration",
  description:
    "Not sure where to start? Pick something you're already curious about and see which engineering fields connect to it.",
};

export default function CuriousPage() {
  return (
    <main className="mx-auto max-w-3xl px-6 py-16">
      <span className="mb-4 inline-block rounded-full bg-neutral-100 px-4 py-1 text-sm font-medium text-neutral-600 dark:bg-neutral-900 dark:text-neutral-400">
        Start with what you like
      </span>

      <h1 className="text-3xl font-bold tracking-tight text-neutral-900 dark:text-white xl:text-4xl">
        What are you into?
      </h1>
      <p className="mt-3 max-w-xl text-neutral-600 dark:text-neutral-400">
        You don&apos;t need to already know engineering vocabulary to start. Pick something
        you&apos;re curious about and see which fields actually connect to it.
      </p>

      <div className="mt-10">
        <CuriosityExplorer />
      </div>
    </main>
  );
}
