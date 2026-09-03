import type { Metadata } from "next";
import Link from "next/link";
import FadeIn from "../components/FadeIn";

export const metadata: Metadata = {
  title: "How to Actually Meet a Real Engineer | Engineering Exploration",
  description:
    "This site can't interview engineers for you, but talking to a real one beats anything written here. Where to find one, what to ask, and how to stay safe doing it.",
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

export default function MeetEngineersPage() {
  return (
    <main className="mx-auto max-w-3xl px-6 py-16">
      <span className="mb-4 inline-block rounded-full bg-neutral-100 px-4 py-1 text-sm font-medium text-neutral-600 dark:bg-neutral-900 dark:text-neutral-400">
        Beyond this website
      </span>

      <h1 className="text-3xl font-bold tracking-tight text-neutral-900 dark:text-white xl:text-4xl">
        How to Actually Meet a Real Engineer
      </h1>
      <p className="mt-3 max-w-xl text-neutral-600 dark:text-neutral-400">
        This site can&apos;t interview engineers for you — and it won&apos;t invent fake quotes
        from made-up people to fill this page. A 15-minute conversation with one real engineer
        will teach you more than anything written here. This page is about how to actually get
        that conversation.
      </p>

      <FadeIn as="section" className="mt-12">
        <h2 className="text-xl font-semibold text-neutral-900 dark:text-white">
          Where to actually find one
        </h2>
        <div className="mt-4">
          <BulletList
            items={[
              "Family and family friends — ask around. Engineering is a big field, and someone you already know probably knows an engineer, even if it doesn't come up in normal conversation.",
              "Your school's alumni network, if it has one — a counselor or career center may be able to connect you with a graduate now working as an engineer.",
              "LinkedIn — search a specific field plus your city or region (like \"mechanical engineer\" + your area). Many people are genuinely willing to answer a short, polite message from a student.",
              "Career fairs and school-arranged panels — these are lower-pressure than reaching out cold, since the engineer already agreed to be there and talk to students.",
              "National professional organizations, which often have free student membership and local or virtual student events — for example IEEE (electrical/computer), ASME (mechanical), ASCE (civil), AIChE (chemical), and similar organizations exist for most fields. Search the organization's name plus \"student chapter\" near you.",
            ]}
          />
        </div>
      </FadeIn>

      <FadeIn as="section" className="mt-14 border-t border-neutral-900/10 pt-14 dark:border-white/10">
        <h2 className="text-xl font-semibold text-neutral-900 dark:text-white">
          What to actually ask
        </h2>
        <p className="mt-3 max-w-2xl leading-relaxed text-neutral-600 dark:text-neutral-400">
          Skip &ldquo;what do you do?&rdquo; — you can read that on this site. Ask the questions
          that only a real person can answer honestly:
        </p>
        <div className="mt-4">
          <BulletList
            items={[
              "What does a normal Tuesday actually look like for you, hour by hour?",
              "What's something about this job nobody tells you before you start?",
              "What do you wish you'd known back in high school?",
              "What's the most annoying or frustrating part of your job, honestly?",
              "If you were choosing a major again today, would you pick the same one?",
              "What's a project you worked on that didn't go the way you planned?",
            ]}
          />
        </div>
        <p className="mt-4 max-w-2xl text-sm leading-relaxed text-neutral-600 dark:text-neutral-400">
          Keep it to 15–20 minutes unless they offer more time. Come with your questions written
          down. Send a short thank-you message afterward — it&apos;s a small thing that people
          genuinely remember.
        </p>
      </FadeIn>

      <FadeIn as="section" className="mt-14 border-t border-neutral-900/10 pt-14 dark:border-white/10">
        <h2 className="text-xl font-semibold text-neutral-900 dark:text-white">A safety note</h2>
        <p className="mt-3 max-w-2xl leading-relaxed text-neutral-600 dark:text-neutral-400">
          You&apos;re reaching out to a stranger, so treat it like you would any other stranger:
        </p>
        <div className="mt-4">
          <BulletList
            items={[
              "Prefer group settings — a career fair, a school-arranged panel, or a video call — over meeting someone alone for the first time.",
              "If a meeting is in person, bring a parent, guardian, or another trusted adult, or meet somewhere public.",
              "A real engineer willing to talk to a student won't be bothered by a parent joining the call or coming along — if someone pushes back on that, that's a reason to say no.",
              "You don't owe anyone your full name, school, or personal details beyond what's needed to have the conversation.",
            ]}
          />
        </div>
      </FadeIn>

      <div className="mt-14 border-t border-neutral-900/10 pt-14 dark:border-white/10">
        <Link href="/explore" className="text-sm font-medium text-primary hover:underline">
          ← Back to Explore Fields
        </Link>
      </div>
    </main>
  );
}
