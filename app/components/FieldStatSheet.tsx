import { CoreFieldStats, Level } from "../data/types";

const LEVEL_WIDTH: Record<Level, string> = {
  Low: "33%",
  Medium: "66%",
  High: "100%",
};

const STAT_LABELS: Record<keyof CoreFieldStats, string> = {
  mathIntensity: "Math & Physics Intensity",
  handsOnWork: "Hands-On / Physical Work",
  regulatoryBurden: "Regulation & Compliance",
  marketUncertainty: "Job Market Uncertainty",
};

export function StatBar({ label, level }: { label: string; level: Level }) {
  return (
    <div>
      <div className="flex items-center justify-between gap-2 text-sm">
        <span className="text-neutral-600 dark:text-neutral-400">{label}</span>
        <span className="font-mono text-xs uppercase tracking-wide text-neutral-600 dark:text-neutral-400">
          {level}
        </span>
      </div>
      <div className="mt-1.5 h-1.5 w-full bg-neutral-100 dark:bg-neutral-900">
        <div className="h-1.5 bg-primary transition-all" style={{ width: LEVEL_WIDTH[level] }} />
      </div>
    </div>
  );
}

export default function FieldStatSheet({ stats }: { stats: CoreFieldStats }) {
  const keys = Object.keys(stats) as (keyof CoreFieldStats)[];
  return (
    <div className="flex flex-col gap-4">
      {keys.map((key) => (
        <StatBar key={key} label={STAT_LABELS[key]} level={stats[key]} />
      ))}
    </div>
  );
}
