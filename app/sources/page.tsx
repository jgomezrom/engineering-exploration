import type { Metadata } from "next";
import Link from "next/link";
import FadeIn from "../components/FadeIn";
import { fields } from "../data/fields";
import { fieldStubs } from "../data/fieldStubs";

export const metadata: Metadata = {
  title: "Sources & Methodology | Engineering Exploration",
  description:
    "Where the numbers on this site come from, what's editorial judgment versus a cited source, and every salary citation in one place.",
};

const stubsWithSalary = fieldStubs.filter((s) => s.salary);

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

export default function SourcesPage() {
  return (
    <main className="mx-auto w-full min-w-0 max-w-3xl px-6 py-16">
      <span className="mb-4 inline-block rounded-full bg-neutral-100 px-4 py-1 text-sm font-medium text-neutral-600 dark:bg-neutral-900 dark:text-neutral-400">
        How this was actually put together
      </span>

      <h1 className="text-3xl font-bold tracking-tight text-neutral-900 dark:text-white xl:text-4xl">
        Sources &amp; Methodology
      </h1>
      <p className="mt-3 max-w-xl text-neutral-600 dark:text-neutral-400">
        This site makes two very different kinds of claims, and they deserve different levels of
        trust. This page explains which is which, and lists every salary citation in one place so
        you can check them yourself.
      </p>

      <FadeIn as="section" className="mt-12">
        <h2 className="text-xl font-semibold text-neutral-900 dark:text-white">
          Two kinds of claims on this site
        </h2>
        <div className="mt-5 grid gap-6 sm:grid-cols-2">
          <div className="border border-primary/30 p-5">
            <h3 className="font-mono text-xs uppercase tracking-widest text-primary">Sourced figures</h3>
            <p className="mt-3 text-sm leading-relaxed text-neutral-600 dark:text-neutral-400">
              Every salary number on this site comes from a specific, named, linked source — almost
              always the U.S. Bureau of Labor Statistics. Each one is dated, and each one is marked
              with when it was last checked against the source. These are the closest thing on this
              site to hard data.
            </p>
          </div>
          <div className="border border-neutral-900/10 p-5 dark:border-white/10">
            <h3 className="font-mono text-xs uppercase tracking-widest text-neutral-600 dark:text-neutral-400">
              Editorial judgment
            </h3>
            <p className="mt-3 text-sm leading-relaxed text-neutral-600 dark:text-neutral-400">
              Everything on the{" "}
              <Link href="/compare" className="text-primary hover:underline">
                Compare page
              </Link>{" "}
              — math intensity, hands-on work, teamwork, and the rest — is a qualitative read of
              each field&apos;s own written description on this site, not an independent
              measurement or survey result. Two people could reasonably rate a field a little
              differently. Every field page includes a comment in its source code citing the exact
              sentence each rating is based on, but that&apos;s traceability, not proof.
            </p>
          </div>
        </div>
      </FadeIn>

      <FadeIn as="section" className="mt-14 border-t border-neutral-900/10 pt-14 dark:border-white/10">
        <h2 className="text-xl font-semibold text-neutral-900 dark:text-white">
          Who wrote this, and how
        </h2>
        <p className="mt-4 max-w-2xl leading-relaxed text-neutral-600 dark:text-neutral-400">
          This site was built by a college student (see{" "}
          <Link href="/about" className="text-primary hover:underline">
            About
          </Link>
          ), using Claude Code, an AI coding assistant, to help research and write the field
          content and build the site itself. Salary figures were pulled directly from the source
          cited for each one. Descriptive content — what a field&apos;s work is actually like,
          common misconceptions, day-to-day structure — was written based on general knowledge of
          each field and organized by the student, not independently fact-checked against a
          professional career counselor or industry expert.
        </p>
        <p className="mt-4 max-w-2xl leading-relaxed text-neutral-600 dark:text-neutral-400">
          That matters for how much weight you should put on any individual claim: treat this site
          as a well-organized, honestly-labeled starting point for exploring a field — not a
          substitute for talking to an actual professional or student in that field, or for your
          own research.
        </p>
        <BulletList
          items={[
            "No number appears on this site without a named, linked source next to it.",
            "Nothing is presented as more certain than it is — hedges like \"if available\" and \"varies by region\" are there on purpose, not filler.",
            "Nothing on this site is gated by age, and nothing you do on it (quiz answers, reflections, age preferences) is saved anywhere — see the note on each interactive feature.",
          ]}
        />
      </FadeIn>

      <FadeIn as="section" className="mt-14 border-t border-neutral-900/10 pt-14 dark:border-white/10">
        <h2 className="text-xl font-semibold text-neutral-900 dark:text-white">
          Every salary citation on this site
        </h2>
        <p className="mt-3 max-w-2xl text-sm text-neutral-600 dark:text-neutral-400">
          All U.S. national medians, all from named sources, all dated. If one of these looks
          outdated, it probably is by the time you&apos;re reading this — check the source link
          directly.
        </p>

        <div className="mt-6 overflow-x-auto">
          <table className="w-full min-w-[560px] border-collapse text-left text-sm">
            <thead>
              <tr className="border-b border-neutral-900/10 dark:border-white/10">
                <th className="py-3 pr-4 font-semibold text-neutral-900 dark:text-white">Field</th>
                <th className="py-3 pr-4 font-semibold text-neutral-900 dark:text-white">Median</th>
                <th className="py-3 pr-4 font-semibold text-neutral-900 dark:text-white">Period</th>
                <th className="py-3 pr-4 font-semibold text-neutral-900 dark:text-white">Source</th>
                <th className="py-3 font-semibold text-neutral-900 dark:text-white">Verified</th>
              </tr>
            </thead>
            <tbody>
              {fields.map((field) => (
                <tr key={field.slug} className="border-b border-neutral-900/10 dark:border-white/10">
                  <td className="py-3 pr-4">
                    <Link href={`/engineering/${field.slug}`} className="text-primary hover:underline">
                      {field.name}
                    </Link>
                  </td>
                  <td className="py-3 pr-4 font-mono text-neutral-900 dark:text-white">
                    {field.salary.medianAnnual}
                  </td>
                  <td className="py-3 pr-4 text-neutral-600 dark:text-neutral-400">{field.salary.period}</td>
                  <td className="py-3 pr-4">
                    <a
                      href={field.salary.sourceUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-primary hover:underline"
                    >
                      {field.salary.sourceName}
                    </a>
                  </td>
                  <td className="py-3 text-neutral-600 dark:text-neutral-400">{field.salary.verifiedDate}</td>
                </tr>
              ))}
              {stubsWithSalary.map((stub) => (
                <tr key={stub.slug} className="border-b border-neutral-900/10 dark:border-white/10">
                  <td className="py-3 pr-4">
                    <Link href={`/engineering/${stub.slug}`} className="text-primary hover:underline">
                      {stub.name}
                    </Link>
                  </td>
                  <td className="py-3 pr-4 font-mono text-neutral-900 dark:text-white">
                    {stub.salary!.medianAnnual}
                  </td>
                  <td className="py-3 pr-4 text-neutral-600 dark:text-neutral-400">{stub.salary!.period}</td>
                  <td className="py-3 pr-4">
                    <a
                      href={stub.salary!.sourceUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-primary hover:underline"
                    >
                      {stub.salary!.sourceName}
                    </a>
                  </td>
                  <td className="py-3 text-neutral-600 dark:text-neutral-400">{stub.salary!.verifiedDate}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="mt-4 max-w-2xl text-xs text-neutral-500 dark:text-neutral-400">
          The remaining fields under{" "}
          <Link href="/resources" className="text-primary hover:underline">
            brief-overview entries
          </Link>{" "}
          aren&apos;t tracked as their own category by the U.S. Bureau of Labor Statistics — each
          of those pages says so explicitly and points to the closest related field instead of
          guessing at a number.
        </p>
      </FadeIn>
    </main>
  );
}
