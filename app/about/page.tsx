import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About | Engineering Exploration",
  description:
    "What this site is, why it exists, and how the content was put together.",
};

export default function AboutPage() {
  return (
    <main className="mx-auto max-w-2xl px-6 py-16">
      <span className="mb-4 inline-block rounded-full bg-neutral-100 px-4 py-1 text-sm font-medium text-neutral-600 dark:bg-neutral-900 dark:text-neutral-400">
        About this project
      </span>

      <h1 className="text-3xl font-bold tracking-tight text-neutral-900 dark:text-white">
        A student project, built in the open
      </h1>

      <div className="mt-8 flex flex-col gap-6 text-neutral-600 dark:text-neutral-400">
        <p>
          Engineering Exploration is a personal learning project — a way to figure out how to
          build a real website while also building something that might actually be useful:
          honest, no-hype information about what engineers in different fields actually do,
          day to day.
        </p>
        <p>
          A lot of career-exploration content out there leans heavily on hype — impressive
          job titles, big salary numbers, and vague inspirational language that doesn&apos;t
          tell you much about what the work is actually like. This site tries to do the
          opposite: real day-to-day descriptions, honest trade-offs, and clear flags whenever
          something is uncertain or worth double-checking rather than presenting it as settled
          fact.
        </p>
        <p>
          I built this because I remember being in that exact spot back in high school —
          looking at a long list of engineering majors and having no real idea what any of
          them actually meant day to day. Most of what I found online was either a vague list
          of job titles or straight-up recruiting copy. I wanted to build the resource I wish
          I&apos;d had: something that just tells it straight about what the work is like and
          where the honest trade-offs are.
        </p>
        <p>
          This site was built by Jaime Gomez, a student at MSU. It&apos;s not affiliated with
          MSU, any other university, or any engineering organization — just one student&apos;s
          attempt to put something clear and useful together. If something here reads as
          inaccurate or outdated, that&apos;s worth knowing, since this is maintained by a
          student, not a career-counseling professional.
        </p>
        <p>
          The interest quiz works the same way: it&apos;s a starting point based on how you
          answer a set of questions, not a verdict on what you should do with your life.
        </p>
      </div>

      <div className="mt-10 flex flex-col gap-4 sm:flex-row">
        <Link
          href="/explore"
          className="inline-flex items-center justify-center rounded-full bg-primary px-6 py-3 font-medium text-white transition-colors hover:bg-primary-dark"
        >
          Explore Engineering Fields
        </Link>
        <Link
          href="/quiz"
          className="inline-flex items-center justify-center rounded-full bg-neutral-100 px-6 py-3 font-medium text-neutral-900 transition-colors hover:bg-neutral-50 dark:bg-neutral-900 dark:text-white"
        >
          Take the Interest Quiz
        </Link>
      </div>
    </main>
  );
}
