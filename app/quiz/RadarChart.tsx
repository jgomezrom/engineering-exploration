import { FieldResult } from "./scoring";
import { FieldSlug } from "../data/types";

// Only the fields the quiz actually scores — see the filter in scoring.ts. A
// field added to the site without quiz questions of its own won't appear here
// until the quiz is expanded to cover it.
const FIELD_ORDER: FieldSlug[] = [
  "mechanical-engineering",
  "electrical-engineering",
  "civil-engineering",
  "biomedical-engineering",
  "software-engineering",
];

const FIELD_LABELS: Partial<Record<FieldSlug, string>> = {
  "mechanical-engineering": "Mechanical",
  "electrical-engineering": "Electrical",
  "civil-engineering": "Civil",
  "biomedical-engineering": "Biomedical",
  "software-engineering": "Software",
};

const SIZE = 360;
const CENTER = SIZE / 2;
const MAX_RADIUS = 95;
const LABEL_RADIUS_FACTOR = 1.32;
const GRID_LEVELS = [0.25, 0.5, 0.75, 1];

function pointAt(index: number, total: number, radiusFraction: number) {
  const angle = -Math.PI / 2 + (index * 2 * Math.PI) / total;
  const r = MAX_RADIUS * radiusFraction;
  return { x: CENTER + r * Math.cos(angle), y: CENTER + r * Math.sin(angle) };
}

export default function RadarChart({ results }: { results: FieldResult[] }) {
  const bySlug = Object.fromEntries(results.map((r) => [r.slug, r])) as Record<FieldSlug, FieldResult>;
  const ordered = FIELD_ORDER.map((slug) => bySlug[slug]).filter(Boolean);
  const n = ordered.length;

  const dataPoints = ordered.map((r, i) => pointAt(i, n, Math.max(r.percentage, 0) / 100));
  const dataPath = dataPoints.map((p) => `${p.x},${p.y}`).join(" ");

  return (
    <svg viewBox={`0 0 ${SIZE} ${SIZE}`} className="mx-auto w-full max-w-sm" role="img" aria-label="Radar chart of match percentage per engineering field">
      {GRID_LEVELS.map((level) => {
        const pts = ordered.map((_, i) => pointAt(i, n, level));
        return (
          <polygon
            key={level}
            points={pts.map((p) => `${p.x},${p.y}`).join(" ")}
            fill="none"
            className="stroke-neutral-900/10 dark:stroke-white/10"
            strokeWidth="1"
          />
        );
      })}

      {ordered.map((_, i) => {
        const p = pointAt(i, n, 1);
        return (
          <line
            key={i}
            x1={CENTER}
            y1={CENTER}
            x2={p.x}
            y2={p.y}
            className="stroke-neutral-900/10 dark:stroke-white/10"
            strokeWidth="1"
          />
        );
      })}

      <polygon points={dataPath} className="fill-primary/15 stroke-primary" strokeWidth="2" />

      {dataPoints.map((p, i) => (
        <circle key={ordered[i].slug} cx={p.x} cy={p.y} r="3.5" className="fill-primary" />
      ))}

      {ordered.map((r, i) => {
        const labelPoint = pointAt(i, n, LABEL_RADIUS_FACTOR);
        return (
          <text
            key={r.slug}
            x={labelPoint.x}
            y={labelPoint.y}
            textAnchor="middle"
            dominantBaseline="middle"
            className="fill-neutral-500 font-mono text-[12px] uppercase tracking-wide dark:fill-neutral-400"
          >
            {FIELD_LABELS[r.slug] ?? r.slug}
          </text>
        );
      })}
    </svg>
  );
}
