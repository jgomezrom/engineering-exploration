import type { Metadata } from "next";
import Link from "next/link";
import FadeIn from "../components/FadeIn";

export const metadata: Metadata = {
  title: "For Parents & Teachers | Engineering Exploration",
  description:
    "What this site is, what it stores (a couple of optional, browser-only preferences — never sent anywhere), and how it might be useful in a classroom or at home.",
};

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

export default function ParentsAndTeachersPage() {
  return (
    <main className="mx-auto max-w-3xl px-6 py-16">
      <span className="mb-4 inline-block rounded-full bg-neutral-100 px-4 py-1 text-sm font-medium text-neutral-600 dark:bg-neutral-900 dark:text-neutral-400">
        For parents &amp; teachers
      </span>

      <h1 className="text-3xl font-bold tracking-tight text-neutral-900 dark:text-white xl:text-4xl">
        For Parents &amp; Teachers
      </h1>
      <p className="mt-3 max-w-xl text-neutral-600 dark:text-neutral-400">
        A straight answer to the two questions you probably have: what is this, and what does it
        collect from the kid or student using it?
      </p>

      <FadeIn as="section" className="mt-12">
        <h2 className="text-xl font-semibold text-neutral-900 dark:text-white">What this is</h2>
        <p className="mt-4 max-w-2xl leading-relaxed text-neutral-600 dark:text-neutral-400">
          Engineering Exploration is a free, static website (see{" "}
          <Link href="/about" className="text-primary hover:underline">
            About
          </Link>
          ) built by a college student to give middle and high schoolers an honest look at what
          engineers in different fields actually do — not a recruiting pitch, not a list of job
          titles. Every field page includes the unglamorous parts on purpose: common
          misconceptions, what people actually dislike about the work, and how competitive the job
          market really is, alongside a{" "}
          <Link href="/math" className="text-primary hover:underline">
            full course roadmap
          </Link>{" "}
          (AP, IB, and international equivalents) for students trying to plan ahead.
        </p>
        <p className="mt-4 max-w-2xl leading-relaxed text-neutral-600 dark:text-neutral-400">
          It is not a curriculum, not affiliated with any school or university, and not a
          substitute for talking to a school counselor or an actual working engineer. See{" "}
          <Link href="/sources" className="text-primary hover:underline">
            Sources &amp; Methodology
          </Link>{" "}
          for exactly how the content was researched and what&apos;s cited versus editorial
          judgment.
        </p>
      </FadeIn>

      <FadeIn as="section" className="mt-14 border-t border-neutral-900/10 pt-14 dark:border-white/10">
        <h2 className="text-xl font-semibold text-neutral-900 dark:text-white">
          What it stores, and what it doesn&apos;t
        </h2>
        <p className="mt-4 max-w-2xl leading-relaxed text-neutral-600 dark:text-neutral-400">
          There are no accounts, no sign-up, no ads, and no tracking of what a student clicks on
          or answers sent to us or anyone else. Two small features save a little information —
          both stay entirely on the device itself. Specifically:
        </p>
        <div className="mt-4">
          <BulletList
            items={[
              "Bookmarking a field and the day-streak counter (\"You've explored 3 of 12 fields\") are saved using the browser's local storage — a small file that lives only on that device, in that browser. It's never sent to us or anyone else, there's no account attached to it, and it disappears if the browser's data is cleared. Nobody but the person using that browser can see it.",
              "The interest quiz's answers and results exist only in the browser while it's open, and disappear the moment the page is closed or reloaded — nothing is sent anywhere or saved.",
              "Every reflection prompt (on challenge pages and the Day in the Life feature) is a plain text box that is never saved, submitted, or sent anywhere — it's there for the student's own thinking, not for anyone else to read.",
              "The optional \"remember my age band\" feature only ever lives in the browser's memory for that one visit, never in a cookie, local storage, or on a server — closing the tab erases it completely.",
              "There is no login, no profile, and no way for this site to identify who is using it.",
            ]}
          />
        </div>
        <p className="mt-4 max-w-2xl leading-relaxed text-neutral-600 dark:text-neutral-400">
          In practice, that means it&apos;s safe to hand to a student without setting anything up
          first. The bookmarks and streak counter save a little information, but only inside that
          one browser — there&apos;s no record anywhere we, or anyone else, could look at
          afterward. (The site is hosted on Vercel, which — like any web host — may keep standard
          server-level access logs as part of normal infrastructure; that&apos;s outside the
          site&apos;s control and separate from the analytics, ads, and tracking the site itself
          deliberately doesn&apos;t add.)
        </p>
      </FadeIn>

      <FadeIn as="section" className="mt-14 border-t border-neutral-900/10 pt-14 dark:border-white/10">
        <h2 className="text-xl font-semibold text-neutral-900 dark:text-white">
          How it might actually be useful
        </h2>
        <div className="mt-4">
          <BulletList
            items={[
              "As a discussion starter: the interest quiz gives a student a low-stakes way to react to \"what sounds interesting?\" instead of \"what do you want to be?\"",
              "As a classroom or club activity: the hands-on challenges list real materials, step-by-step instructions, and a way to measure whether it actually worked — usable with what most classrooms already have.",
              "As a course-planning conversation: the math roadmap breaks down what AP, IB, and equivalent courses actually map to which engineering interests, which can help when a student is choosing electives.",
              "As a reality check: the comparisons page and the misconceptions on every field page exist specifically to correct assumptions before a student builds a whole plan around one.",
            ]}
          />
        </div>
      </FadeIn>

      <div className="mt-14 flex flex-col gap-4 border-t border-neutral-900/10 pt-14 sm:flex-row dark:border-white/10">
        <Link
          href="/explore"
          className="inline-flex items-center justify-center rounded-full bg-primary px-6 py-3 font-medium text-white transition-colors hover:bg-primary-dark"
        >
          Explore Engineering Fields
        </Link>
        <Link
          href="/resources"
          className="inline-flex items-center justify-center rounded-full bg-neutral-100 px-6 py-3 font-medium text-neutral-900 transition-colors hover:bg-neutral-50 dark:bg-neutral-900 dark:text-white"
        >
          See All Resources
        </Link>
      </div>
    </main>
  );
}
