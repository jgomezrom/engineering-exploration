"use client";

import { FieldResult } from "./scoring";
import { FieldSlug } from "../data/types";
import { useLanguage } from "../context/LanguageContext";
import { fieldLabelsShort, quizTranslations } from "../data/translations/quiz";

// Only the fields the quiz actually scores — see the filter in scoring.ts. A
// field added to the site without quiz questions of its own won't appear here
// until the quiz is expanded to cover it. Related fields sit next to each
// other, so the shape of a result reads as a direction rather than noise:
// vehicles beside mechanical, chips beside computer, buildings beside civil.
const FIELD_ORDER: FieldSlug[] = [
  "mechanical-engineering",
  "automotive-engineering",
  "aerospace-engineering",
  "systems-engineering",
  "electrical-engineering",
  "energy-engineering",
  "computer-engineering",
  "semiconductor-engineering",
  "civil-engineering",
  "structural-engineering",
  "architectural-engineering",
  "environmental-engineering",
  "biomedical-engineering",
  "chemical-engineering",
  "software-engineering",
  "industrial-engineering",
  "manufacturing-engineering",
  "materials-engineering",
  "robotics-engineering",
  "nuclear-engineering",
  "petroleum-engineering",
  "agricultural-engineering",
  "marine-engineering",
];

// Wider than tall so the long labels on the left and right edges
// ("MANUFACTURING", "SEMICONDUCTORES") fit without clipping.
const WIDTH = 560;
const HEIGHT = 440;
const CENTER_X = WIDTH / 2;
const CENTER_Y = HEIGHT / 2;
const MAX_RADIUS = 124;
// Labels sit on an ellipse around the grid rather than a circle. Near the top
// and bottom of a 23-spoke chart, neighboring labels land at almost the same
// height, so they need horizontal room; the vertical radius is stretched too,
// just enough that those same neighbors clear each other's line of text.
// Both factors were set by measuring the rendered label boxes for overlap in
// English and Spanish, whose labels are longer.
const LABEL_RADIUS_X = MAX_RADIUS * 1.45;
const LABEL_RADIUS_Y = MAX_RADIUS * 1.5;
const GRID_LEVELS = [0.25, 0.5, 0.75, 1];

// Math.cos/Math.sin can differ in their very last bit between the server's
// and the browser's JS engine — invisible to the eye, but enough for React
// to see two different attribute strings and report a hydration mismatch.
// Rounding closes that gap without any visible effect.
function round(n: number) {
  return Math.round(n * 100) / 100;
}

function pointAt(index: number, total: number, radiusFraction: number) {
  const angle = -Math.PI / 2 + (index * 2 * Math.PI) / total;
  const r = MAX_RADIUS * radiusFraction;
  return { x: round(CENTER_X + r * Math.cos(angle)), y: round(CENTER_Y + r * Math.sin(angle)) };
}

function labelPointAt(index: number, total: number) {
  const angle = -Math.PI / 2 + (index * 2 * Math.PI) / total;
  return {
    x: round(CENTER_X + LABEL_RADIUS_X * Math.cos(angle)),
    y: round(CENTER_Y + LABEL_RADIUS_Y * Math.sin(angle)),
  };
}

// With this many labels, centering each one on its spoke makes neighbors
// collide near the top and bottom. Anchoring a label by which side of the
// chart it's on makes it grow away from the center instead of sideways into
// the next one.
function anchorFor(index: number, total: number) {
  const cos = Math.cos(-Math.PI / 2 + (index * 2 * Math.PI) / total);
  if (cos > 0.1) return "start";
  if (cos < -0.1) return "end";
  return "middle";
}

export default function RadarChart({ results }: { results: FieldResult[] }) {
  const { language } = useLanguage();
  const fieldLabels = fieldLabelsShort[language];
  const t = quizTranslations[language];
  const bySlug = Object.fromEntries(results.map((r) => [r.slug, r])) as Record<FieldSlug, FieldResult>;
  const ordered = FIELD_ORDER.map((slug) => bySlug[slug]).filter(Boolean);
  const n = ordered.length;

  const dataPoints = ordered.map((r, i) => pointAt(i, n, Math.max(r.percentage, 0) / 100));
  const dataPath = dataPoints.map((p) => `${p.x},${p.y}`).join(" ");

  return (
    <svg viewBox={`0 0 ${WIDTH} ${HEIGHT}`} className="mx-auto w-full max-w-lg" role="img" aria-label={t.radarChartAriaLabel}>
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
            x1={CENTER_X}
            y1={CENTER_Y}
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

      {/* A phone gives this chart about 300px, and 23 names around a circle
          can't be read at that size — a bigger font needs a bigger canvas,
          which shrinks the text right back down. Below `sm` the chart shows
          the shape only, and the results page points to the ranked list
          underneath, where every field is named with its percentage. */}
      <g className="max-sm:hidden">
        {ordered.map((r, i) => {
          const labelPoint = labelPointAt(i, n);
          return (
            <text
              key={r.slug}
              x={labelPoint.x}
              y={labelPoint.y}
              textAnchor={anchorFor(i, n)}
              dominantBaseline="middle"
              className="fill-neutral-500 font-mono text-[10px] uppercase tracking-wide dark:fill-neutral-400"
            >
              {fieldLabels[r.slug] ?? r.slug}
            </text>
          );
        })}
      </g>
    </svg>
  );
}
