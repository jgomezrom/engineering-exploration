import type { Metadata } from "next";
import Link from "next/link";
import Card from "../components/Card";

export const metadata: Metadata = {
  title: "Resources | Engineering Exploration",
  description:
    "Everything else on this site in one place — compare fields, the engineering design process, core concepts explained, engineering vs. other careers, and a full course roadmap.",
};

const RESOURCES = [
  {
    href: "/compare",
    title: "Compare Fields",
    description: "See all the fields on this site side by side, across the traits you actually care about.",
    icon: (
      <svg viewBox="0 0 40 40" fill="none" aria-hidden="true" className="h-8 w-8 text-primary">
        <path d="M8 32V16M20 32V8M32 32V22" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M4 32h32" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    href: "/design-process",
    title: "The Engineering Design Process",
    description: "The loop real engineers actually use — Ask, Imagine, Plan, Build, Test, Improve, Repeat.",
    icon: (
      <svg viewBox="0 0 40 40" fill="none" aria-hidden="true" className="h-8 w-8 text-primary">
        <circle cx="20" cy="20" r="14" stroke="currentColor" strokeWidth="1.5" strokeDasharray="3 4" />
        <path d="M20 6l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    href: "/concepts",
    title: "Engineering Concepts",
    description: "Forces, circuits, structures, algorithms, and more — the core ideas, explained in plain language.",
    icon: (
      <svg viewBox="0 0 40 40" fill="none" aria-hidden="true" className="h-8 w-8 text-primary">
        <circle cx="20" cy="10" r="3" stroke="currentColor" strokeWidth="1.5" />
        <circle cx="10" cy="28" r="3" stroke="currentColor" strokeWidth="1.5" />
        <circle cx="30" cy="28" r="3" stroke="currentColor" strokeWidth="1.5" />
        <path d="M20 13v6M18 20l-6 6M22 20l6 6" stroke="currentColor" strokeWidth="1.5" />
      </svg>
    ),
  },
  {
    href: "/vs",
    title: "Engineering vs. Other Careers",
    description: "Engineer or mechanic? Doctor? Programmer? Clearing up the careers people mix up most.",
    icon: (
      <svg viewBox="0 0 40 40" fill="none" aria-hidden="true" className="h-8 w-8 text-primary">
        <circle cx="13" cy="14" r="6" stroke="currentColor" strokeWidth="1.5" />
        <circle cx="27" cy="14" r="6" stroke="currentColor" strokeWidth="1.5" />
        <path d="M6 33c1-6 5-9 7-9s6 3 7 9M20 33c1-6 5-9 7-9s6 3 7 9" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    href: "/math",
    title: "Do I Have to Be Good at Math?",
    description: "An honest answer, plus a full course roadmap — AP, IB options, and where to get extra help.",
    icon: (
      <svg viewBox="0 0 40 40" fill="none" aria-hidden="true" className="h-8 w-8 text-primary">
        <path d="M12 14h16M12 20h10M12 26h13" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <circle cx="20" cy="20" r="15" stroke="currentColor" strokeWidth="1.5" />
      </svg>
    ),
  },
];

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

      <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {RESOURCES.map((resource) => (
          <Link key={resource.href} href={resource.href}>
            <Card>
              {resource.icon}
              <h2 className="mt-4 text-lg font-semibold text-neutral-900 dark:text-white">
                {resource.title}
              </h2>
              <p className="mt-2 text-sm text-neutral-600 dark:text-neutral-400">{resource.description}</p>
            </Card>
          </Link>
        ))}
      </div>
    </main>
  );
}
