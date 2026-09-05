"use client";

import { useMemo, useState } from "react";
import {
  topicMapNodes,
  topicMapLinks,
  topicMapSourceUrl,
  topicMapExcludedFields,
  TopicMapNode,
  TopicMapLink,
} from "../data/curriculumTopicMap";
import { fields } from "../data/fields";
import { fieldsEs } from "../data/fields.es";
import { useLanguage } from "../context/LanguageContext";

const WIDTH = 960;
const HEIGHT = 1080;
const PADDING_Y = 24;
const COL_X = [140, 480, 870];

// SVG <text> doesn't wrap on its own, and the outer columns don't have much
// horizontal room before hitting the diagram's edge — long topic names (e.g.
// "College Math & Basic Science (unspecified)") were getting clipped rather
// than wrapping. There's no canvas available at render time to measure real
// text width, so this picks a word-boundary split using a rough per-character
// width estimate, choosing whichever split keeps both resulting lines as
// short as possible.
function estimateWidth(str: string) {
  let width = 0;
  for (const ch of str) {
    if (ch === " " || /[iIl.,'!|]/.test(ch)) width += 0.3;
    else if (/[A-Z]/.test(ch)) width += 0.72;
    else if (/[a-z]/.test(ch)) width += 0.52;
    else width += 0.55;
  }
  return width;
}

function wrapLabel(label: string, maxChars = 15): [string] | [string, string] {
  if (label.length <= maxChars) return [label];
  const words = label.split(" ");
  if (words.length < 2) return [label];
  let best = { split: 1, maxWidth: Infinity };
  for (let i = 1; i < words.length; i++) {
    const line1 = words.slice(0, i).join(" ");
    const line2 = words.slice(i).join(" ");
    const w = Math.max(estimateWidth(line1), estimateWidth(line2));
    if (w < best.maxWidth) best = { split: i, maxWidth: w };
  }
  return [words.slice(0, best.split).join(" "), words.slice(best.split).join(" ")];
}

function WrappedLabel({
  label,
  x,
  y,
  textAnchor,
  className,
  fontSize,
  fontWeight,
}: {
  label: string;
  x: number;
  y: number;
  textAnchor: "start" | "end";
  className: string;
  fontSize: number;
  fontWeight?: number;
}) {
  const lines = wrapLabel(label);
  return (
    <text x={x} y={y} textAnchor={textAnchor} className={className} fontSize={fontSize} fontWeight={fontWeight}>
      {lines.length === 1 ? (
        <tspan dy="0.32em">{lines[0]}</tspan>
      ) : (
        <>
          <tspan x={x} dy="-0.15em">
            {lines[0]}
          </tspan>
          <tspan x={x} dy="1.1em">
            {lines[1]}
          </tspan>
        </>
      )}
    </text>
  );
}

function layoutColumn(nodes: TopicMapNode[]) {
  const usable = HEIGHT - PADDING_Y * 2;
  const step = nodes.length > 1 ? usable / (nodes.length - 1) : 0;
  const positions = new Map<string, number>();
  nodes.forEach((n, i) => {
    positions.set(n.id, nodes.length === 1 ? HEIGHT / 2 : PADDING_Y + i * step);
  });
  return positions;
}

function curvePath(x1: number, y1: number, x2: number, y2: number) {
  const midX = (x1 + x2) / 2;
  return `M${x1},${y1} C${midX},${y1} ${midX},${y2} ${x2},${y2}`;
}

function linkKey(link: TopicMapLink) {
  return `${link.source}->${link.target}`;
}

const LABELS = {
  en: {
    heading: "How These Majors Connect",
    intro:
      "Every line here traces back to ABET's own published accreditation requirements for that discipline — not a typical-sequencing guess.",
    hint: "Click a major to trace its path back through required topics to foundational math and science — click it again to show every path.",
    clearSelection: "Show all",
    sourceLabel: "Source",
    excludedLabel: "Not shown — no dedicated ABET Program Criteria",
    excludedNote:
      "These are commonly accredited under a related program's criteria (or the General Criteria only), not their own named requirements.",
  },
  es: {
    heading: "Cómo se Conectan Estas Carreras",
    intro:
      "Cada línea aquí se remonta a los requisitos de acreditación publicados por ABET para esa disciplina — no a una suposición típica de secuencia.",
    hint: "Haz clic en una carrera para trazar su camino a través de los temas requeridos hasta las matemáticas y ciencias básicas — haz clic de nuevo para mostrar todos los caminos.",
    clearSelection: "Mostrar todo",
    sourceLabel: "Fuente",
    excludedLabel: "No se muestran — sin criterios de programa específicos de ABET",
    excludedNote:
      "Estas suelen acreditarse bajo los criterios de un programa relacionado (o solo los criterios generales), no requisitos propios.",
  },
};

export default function CurriculumTopicMap() {
  const { language } = useLanguage();
  const t = LABELS[language];
  const displayFields = language === "es" ? fieldsEs : fields;
  const [selectedMajor, setSelectedMajor] = useState<string | null>(null);

  const nodeById = new Map(topicMapNodes.map((n) => [n.id, n]));
  const col0 = topicMapNodes.filter((n) => n.column === 0);
  const col1 = topicMapNodes.filter((n) => n.column === 1);
  const col2 = topicMapNodes.filter((n) => n.column === 2);
  const yCol0 = layoutColumn(col0);
  const yCol1 = layoutColumn(col1);
  const yCol2 = layoutColumn(col2);

  const yFor = (node: TopicMapNode) => {
    if (node.column === 0) return yCol0.get(node.id)!;
    if (node.column === 1) return yCol1.get(node.id)!;
    return yCol2.get(node.id)!;
  };

  // A selected major highlights only its own path: the major -> its one
  // required-topic node -> that topic's foundational math/science nodes.
  // Everything else fades to near-invisible instead of disappearing outright,
  // so the diagram's overall shape stays visible for context.
  const highlight = useMemo(() => {
    if (!selectedMajor) return null;
    const topicLinks = topicMapLinks.filter((l) => l.target === selectedMajor);
    const topicIds = new Set(topicLinks.map((l) => l.source));
    const scienceLinks = topicMapLinks.filter((l) => topicIds.has(l.target));
    const scienceIds = new Set(scienceLinks.map((l) => l.source));
    return {
      linkKeys: new Set([...topicLinks, ...scienceLinks].map(linkKey)),
      nodeIds: new Set<string>([selectedMajor, ...topicIds, ...scienceIds]),
    };
  }, [selectedMajor]);

  const toggleMajor = (id: string) => {
    setSelectedMajor((current) => (current === id ? null : id));
  };

  const excludedNames = topicMapExcludedFields
    .map((slug) => displayFields.find((f) => f.slug === slug)?.name ?? slug)
    .join(", ");

  return (
    <div>
      <h3 className="text-lg font-semibold text-neutral-900 dark:text-white">{t.heading}</h3>
      <p className="mt-2 max-w-2xl text-sm leading-relaxed text-neutral-600 dark:text-neutral-400">{t.intro}</p>
      <div className="mt-2 flex flex-wrap items-center gap-3">
        <p className="text-xs text-neutral-500 dark:text-neutral-400">{t.hint}</p>
        {selectedMajor && (
          <button
            type="button"
            onClick={() => setSelectedMajor(null)}
            className="shrink-0 text-xs font-medium text-primary hover:underline"
          >
            {t.clearSelection} ×
          </button>
        )}
      </div>
      <p className="mt-2 text-xs text-neutral-500 dark:text-neutral-400">
        {t.sourceLabel}:{" "}
        <a href={topicMapSourceUrl} target="_blank" rel="noopener noreferrer" className="font-medium text-primary hover:underline">
          ABET, Criteria for Accrediting Engineering Programs, 2025–2026
        </a>
      </p>

      <div className="mt-6 overflow-x-auto border border-neutral-900/10 dark:border-white/10">
        <svg viewBox={`0 0 ${WIDTH} ${HEIGHT}`} className="min-w-[900px] text-primary" role="img" aria-label={t.heading}>
          <g stroke="currentColor" fill="none">
            {topicMapLinks.map((link, i) => {
              const source = nodeById.get(link.source);
              const target = nodeById.get(link.target);
              if (!source || !target) return null;
              const x1 = COL_X[source.column];
              const x2 = COL_X[target.column];
              const isHighlighted = highlight?.linkKeys.has(linkKey(link)) ?? false;
              const opacity = !highlight ? 0.25 : isHighlighted ? 0.9 : 0.04;
              return (
                <path
                  key={i}
                  d={curvePath(x1, yFor(source), x2, yFor(target))}
                  strokeWidth={isHighlighted ? 1.75 : 1}
                  opacity={opacity}
                  className={`transition-opacity duration-200 motion-reduce:transition-none ${isHighlighted ? "text-accent" : ""}`}
                />
              );
            })}
          </g>

          {col0.map((node) => {
            const dimmed = highlight ? !highlight.nodeIds.has(node.id) : false;
            return (
              <g key={node.id} opacity={dimmed ? 0.2 : 1} className="transition-opacity duration-200 motion-reduce:transition-none">
                <circle cx={COL_X[0]} cy={yFor(node)} r={2.5} fill="currentColor" className="text-primary" />
                <WrappedLabel
                  label={node.label}
                  x={COL_X[0] - 10}
                  y={yFor(node)}
                  textAnchor="end"
                  className="fill-neutral-600 dark:fill-neutral-400"
                  fontSize={11}
                />
              </g>
            );
          })}

          {col1.map((node) => {
            const dimmed = highlight ? !highlight.nodeIds.has(node.id) : false;
            return (
              <g key={node.id} opacity={dimmed ? 0.2 : 1} className="transition-opacity duration-200 motion-reduce:transition-none">
                <title>{`${node.sourceSection}${node.sourceQuote ? ` — "${node.sourceQuote}"` : ""}`}</title>
                <circle cx={COL_X[1]} cy={yFor(node)} r={3} fill="currentColor" className="text-accent" />
                <text
                  x={COL_X[1]}
                  y={yFor(node)}
                  dy="-8"
                  textAnchor="middle"
                  className="fill-neutral-900 dark:fill-white"
                  fontSize={10}
                  fontWeight={600}
                >
                  {node.label}
                </text>
              </g>
            );
          })}

          {col2.map((node) => {
            const isSelected = selectedMajor === node.id;
            const dimmed = highlight ? !highlight.nodeIds.has(node.id) : false;
            return (
              <g
                key={node.id}
                opacity={dimmed ? 0.2 : 1}
                className="cursor-pointer outline-none transition-opacity duration-200 motion-reduce:transition-none"
                onClick={() => toggleMajor(node.id)}
                onKeyDown={(e) => {
                  if (e.key === "Enter" || e.key === " ") {
                    e.preventDefault();
                    toggleMajor(node.id);
                  }
                }}
                role="button"
                tabIndex={0}
                aria-pressed={isSelected}
              >
                <rect x={COL_X[2] - 8} y={yFor(node) - 13} width={WIDTH - (COL_X[2] - 8)} height={26} fill="transparent" />
                <circle
                  cx={COL_X[2]}
                  cy={yFor(node)}
                  r={isSelected ? 4 : 2.5}
                  fill="currentColor"
                  className={isSelected ? "text-accent" : "text-primary"}
                />
                <WrappedLabel
                  label={node.label}
                  x={COL_X[2] + 10}
                  y={yFor(node)}
                  textAnchor="start"
                  className={isSelected ? "fill-accent" : "fill-neutral-900 dark:fill-white"}
                  fontSize={11}
                  fontWeight={600}
                />
              </g>
            );
          })}
        </svg>
      </div>

      <p className="mt-3 text-xs leading-relaxed text-neutral-500 dark:text-neutral-400">
        {t.excludedLabel} ({excludedNames}). {t.excludedNote}
      </p>
    </div>
  );
}
