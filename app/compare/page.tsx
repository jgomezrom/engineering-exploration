import type { Metadata } from "next";
import Link from "next/link";
import FieldIcon from "../components/FieldIcon";
import { fields } from "../data/fields";
import { FieldStats, Level } from "../data/types";

export const metadata: Metadata = {
  title: "Compare Engineering Fields | Engineering Exploration",
  description:
    "See how mechanical, electrical, civil, biomedical, and software engineering compare side by side — building physical things, coding, biology, creativity, teamwork, and more.",
};

const LEVEL_WIDTH: Record<Level, string> = {
  Low: "33%",
  Medium: "66%",
  High: "100%",
};

// The axes a teenager weighing majors is more likely to actually care about than
// job-market logistics — kept separate from the "Career Practicalities" rows below.
const FIT_ROWS: { key: keyof FieldStats; label: string }[] = [
  { key: "handsOnWork", label: "Building Physical Things" },
  { key: "coding", label: "Coding" },
  { key: "outdoorWork", label: "Time Outdoors / On-Site" },
  { key: "biologyContent", label: "Biology / Life Science" },
  { key: "creativeFreedom", label: "Creative / Design Freedom" },
  { key: "mathIntensity", label: "Math Intensity" },
  { key: "teamwork", label: "Teamwork & Collaboration" },
  { key: "seeingWorkRealLife", label: "Seeing Your Work in Real Life" },
];

const PRACTICALITY_ROWS: { key: keyof FieldStats; label: string }[] = [
  { key: "regulatoryBurden", label: "Regulation & Compliance" },
  { key: "marketUncertainty", label: "Job Market Uncertainty" },
];

function FieldHeaderRow() {
  return (
    <tr>
      <th className="w-44 pb-4" />
      {fields.map((field) => (
        <th key={field.slug} className="px-3 pb-4">
          <Link href={`/engineering/${field.slug}`} className="group flex flex-col items-center gap-2">
            <FieldIcon slug={field.slug} className="h-8 w-8 text-primary" />
            <span className="text-center text-sm font-semibold text-neutral-900 group-hover:text-primary dark:text-white">
              {field.name.replace(" Engineering", "")}
            </span>
          </Link>
        </th>
      ))}
    </tr>
  );
}

function StatRows({ rows }: { rows: { key: keyof FieldStats; label: string }[] }) {
  return (
    <>
      {rows.map((row) => (
        <tr key={row.key} className="border-t border-neutral-900/10 dark:border-white/10">
          <td className="py-4 pr-4 text-sm text-neutral-600 dark:text-neutral-400">{row.label}</td>
          {fields.map((field) => {
            const level = field.stats[row.key];
            return (
              <td key={field.slug} className="px-3 py-4">
                <div className="flex flex-col items-center gap-1.5">
                  <span className="font-mono text-xs uppercase tracking-wide text-neutral-600 dark:text-neutral-400">
                    {level}
                  </span>
                  <div className="h-1.5 w-16 bg-neutral-100 dark:bg-neutral-900">
                    <div className="h-1.5 bg-primary" style={{ width: LEVEL_WIDTH[level] }} />
                  </div>
                </div>
              </td>
            );
          })}
        </tr>
      ))}
    </>
  );
}

export default function ComparePage() {
  return (
    <main className="mx-auto w-full min-w-0 max-w-5xl px-6 py-16 xl:max-w-6xl">
      <span className="mb-4 inline-block rounded-full bg-neutral-100 px-4 py-1 text-sm font-medium text-neutral-600 dark:bg-neutral-900 dark:text-neutral-400">
        Side by side
      </span>
      <h1 className="text-3xl font-bold text-neutral-900 dark:text-white xl:text-4xl">
        Compare Engineering Fields
      </h1>
      <p className="mt-2 max-w-2xl text-neutral-600 dark:text-neutral-400">
        These ratings are editorial judgment — a qualitative read of each field&apos;s own
        description on this site, not an independent measurement or a test score. Two people
        could reasonably rate a field a little differently. Open a field page to see the exact
        reasoning behind its ratings.
      </p>

      <h2 className="mt-12 text-lg font-semibold text-neutral-900 dark:text-white">
        What the work is actually like
      </h2>
      <p className="mt-1 max-w-2xl text-sm text-neutral-600 dark:text-neutral-400">
        The things you&apos;re more likely to actually care about when picking a field.
      </p>

      <div className="mt-6 overflow-x-auto">
        <table className="w-full min-w-[640px] border-collapse text-left">
          <thead>
            <FieldHeaderRow />
          </thead>
          <tbody>
            <StatRows rows={FIT_ROWS} />
          </tbody>
        </table>
      </div>

      <h2 className="mt-14 text-lg font-semibold text-neutral-900 dark:text-white">
        Career practicalities
      </h2>
      <p className="mt-1 max-w-2xl text-sm text-neutral-600 dark:text-neutral-400">
        Regulation, job market conditions, and pay matter, but they change over time and by
        region — treat these as background context, not a reason to rule a field out.
      </p>

      <div className="mt-6 overflow-x-auto">
        <table className="w-full min-w-[640px] border-collapse text-left">
          <thead>
            <FieldHeaderRow />
          </thead>
          <tbody>
            <tr className="border-t border-neutral-900/10 dark:border-white/10">
              <td className="py-4 pr-4 text-sm text-neutral-600 dark:text-neutral-400">
                Median Salary (US)
              </td>
              {fields.map((field) => (
                <td key={field.slug} className="px-3 py-4 text-center">
                  <span className="font-mono text-sm font-semibold text-neutral-900 dark:text-white">
                    {field.salary.medianAnnual}
                  </span>
                </td>
              ))}
            </tr>
            <StatRows rows={PRACTICALITY_ROWS} />
          </tbody>
        </table>
      </div>
      <p className="mt-3 max-w-2xl text-xs text-neutral-600 dark:text-neutral-400">
        Median salary is sourced separately — see each field&apos;s page for the exact citation
        and caveats.
      </p>

      <div className="mt-10">
        <Link href="/explore" className="text-sm font-medium text-primary hover:underline">
          ← Back to Explore Fields
        </Link>
      </div>
    </main>
  );
}
