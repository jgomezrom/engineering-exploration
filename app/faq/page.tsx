import type { Metadata } from "next";
import Link from "next/link";
import FaqAccordion from "../components/FaqAccordion";
import { faqItems } from "../data/faq";

export const metadata: Metadata = {
  title: "Frequently Asked Questions | Engineering Exploration",
  description:
    "Quick answers to common questions about this site — math requirements, switching majors, privacy, and more — each linking to the full page behind it.",
};

export default function FaqPage() {
  return (
    <main className="mx-auto max-w-3xl px-6 py-16">
      <span className="mb-4 inline-block rounded-full bg-neutral-100 px-4 py-1 text-sm font-medium text-neutral-600 dark:bg-neutral-900 dark:text-neutral-400">
        Quick answers
      </span>

      <h1 className="text-3xl font-bold tracking-tight text-neutral-900 dark:text-white xl:text-4xl">
        Frequently Asked Questions
      </h1>
      <p className="mt-3 max-w-xl text-neutral-600 dark:text-neutral-400">
        Short answers to the questions that come up most, each linking to the full page behind it.
      </p>

      <div className="mt-10">
        <FaqAccordion items={faqItems} />
      </div>

      <div className="mt-14 border-t border-neutral-900/10 pt-14 dark:border-white/10">
        <Link href="/explore" className="text-sm font-medium text-primary hover:underline">
          ← Back to Explore Fields
        </Link>
      </div>
    </main>
  );
}
