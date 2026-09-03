import type { Metadata } from "next";
import Link from "next/link";
import Card from "../components/Card";
import FadeIn from "../components/FadeIn";
import { resourceLinks } from "../data/resourceLinks";

export const metadata: Metadata = {
  title: "Resources | Engineering Exploration",
  description:
    "Everything else on this site in one place — compare fields, the engineering design process, core concepts explained, engineering vs. other careers, and a full course roadmap.",
};

export default function ResourcesPage() {
  return (
    <main className="mx-auto max-w-5xl px-6 py-16 xl:max-w-6xl">
      <span className="mb-4 inline-block rounded-full bg-neutral-100 px-4 py-1 text-sm font-medium text-neutral-600 dark:bg-neutral-900 dark:text-neutral-400">
        Everything else, in one place
      </span>

      <h1 className="text-3xl font-bold text-neutral-900 dark:text-white xl:text-4xl">Resources</h1>
      <p className="mt-2 max-w-xl text-neutral-600 dark:text-neutral-400">
        Beyond the fields, the quiz, and the challenges — this is everything else on the site,
        gathered in one spot so it&apos;s easy to find.
      </p>

      <FadeIn className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {resourceLinks.map((resource) => (
          <Link key={resource.href} href={resource.href}>
            <Card>
              <div
                className={`inline-flex h-14 w-14 items-center justify-center rounded-full ${
                  resource.accentColor === "accent" ? "bg-accent/10 text-accent" : "bg-primary/10 text-primary"
                }`}
              >
                {resource.icon}
              </div>
              <h2 className="mt-4 text-lg font-semibold text-neutral-900 dark:text-white">
                {resource.title}
              </h2>
              <p className="mt-2 text-sm text-neutral-600 dark:text-neutral-400">{resource.description}</p>
            </Card>
          </Link>
        ))}
      </FadeIn>
    </main>
  );
}
