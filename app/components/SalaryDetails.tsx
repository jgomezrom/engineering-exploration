import { SalaryData } from "../data/types";

const SALARY_FACTORS = [
  "Location — pay for the same job title can differ a lot by country, state, or even city, often tied to local cost of living.",
  "Years of experience — entry-level pay is usually well below the median, and typically rises over a career.",
  "Specialization — some sub-areas within a field pay differently (aerospace vs. general manufacturing, or power systems vs. consumer electronics, for example).",
  "Industry and company — a large company, a startup, and a government job can pay very differently for similar work.",
  "Education and licensure — an advanced degree or professional license can affect both which roles you're eligible for and what they pay.",
  "Economic conditions — hiring markets shift over time, so a number that was accurate a few years ago might not be now.",
];

export default function SalaryDetails({ salary }: { salary: SalaryData }) {
  return (
    <div>
      <div className="flex items-baseline gap-2">
        <span className="text-3xl font-bold text-neutral-900 dark:text-white">
          {salary.medianAnnual}
        </span>
        <span className="text-sm text-neutral-600 dark:text-neutral-400">/ year, median</span>
      </div>
      <p className="mt-1 text-sm text-neutral-600 dark:text-neutral-400">
        {salary.region} · {salary.period} —{" "}
        <a
          href={salary.sourceUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="text-primary hover:underline"
        >
          {salary.sourceName}
        </a>
      </p>
      <p className="mt-2 max-w-2xl text-sm leading-relaxed text-neutral-600 dark:text-neutral-400">
        {salary.note}
      </p>

      <div className="mt-8 border border-neutral-900/10 bg-neutral-50 p-5 dark:border-white/10 dark:bg-neutral-900">
        <h3 className="text-sm font-semibold text-neutral-900 dark:text-white">
          What actually affects your salary?
        </h3>
        <p className="mt-2 max-w-2xl text-sm leading-relaxed text-neutral-600 dark:text-neutral-400">
          The number above is a national median — the middle point across everyone in the field,
          not a typical starting salary. What you&apos;d actually earn depends on things this page
          can&apos;t predict for you:
        </p>
        <ul className="mt-3 max-w-2xl space-y-2">
          {SALARY_FACTORS.map((factor) => (
            <li key={factor} className="flex gap-3 text-sm leading-relaxed text-neutral-600 dark:text-neutral-400">
              <span className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-primary" />
              <span>{factor}</span>
            </li>
          ))}
        </ul>
        <p className="mt-3 max-w-2xl text-sm leading-relaxed text-neutral-600 dark:text-neutral-400">
          None of this makes the number above wrong — it&apos;s a real, sourced figure. It just
          means a single number can&apos;t tell you what you personally would earn.
        </p>
      </div>
    </div>
  );
}
