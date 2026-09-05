"use client";

import {
  topicMapNodes,
  topicMapLinks,
  topicMapSourceUrl,
  topicMapExcludedFields,
  TopicMapNode,
} from "../data/curriculumTopicMap";
import { fields } from "../data/fields";
import { fieldsEs } from "../data/fields.es";
import { useLanguage } from "../context/LanguageContext";

const WIDTH = 960;
const HEIGHT = 1080;
const PADDING_Y = 24;
const COL_X = [90, 480, 870];

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

const LABELS = {
  en: {
    heading: "How These Majors Connect",
    intro:
      "Every line here traces back to ABET's own published accreditation requirements for that discipline — not a typical-sequencing guess.",
    sourceLabel: "Source",
    excludedLabel: "Not shown — no dedicated ABET Program Criteria",
    excludedNote:
      "These are commonly accredited under a related program's criteria (or the General Criteria only), not their own named requirements.",
  },
  es: {
    heading: "Cómo se Conectan Estas Carreras",
    intro:
      "Cada línea aquí se remonta a los requisitos de acreditación publicados por ABET para esa disciplina — no a una suposición típica de secuencia.",
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

  const excludedNames = topicMapExcludedFields
    .map((slug) => displayFields.find((f) => f.slug === slug)?.name ?? slug)
    .join(", ");

  return (
    <div>
      <h3 className="text-lg font-semibold text-neutral-900 dark:text-white">{t.heading}</h3>
      <p className="mt-2 max-w-2xl text-sm leading-relaxed text-neutral-600 dark:text-neutral-400">{t.intro}</p>
      <p className="mt-2 text-xs text-neutral-500 dark:text-neutral-400">
        {t.sourceLabel}:{" "}
        <a href={topicMapSourceUrl} target="_blank" rel="noopener noreferrer" className="font-medium text-primary hover:underline">
          ABET, Criteria for Accrediting Engineering Programs, 2025–2026
        </a>
      </p>

      <div className="mt-6 overflow-x-auto border border-neutral-900/10 dark:border-white/10">
        <svg viewBox={`0 0 ${WIDTH} ${HEIGHT}`} className="min-w-[900px] text-primary" role="img" aria-label={t.heading}>
          <g opacity={0.25} stroke="currentColor" fill="none">
            {topicMapLinks.map((link, i) => {
              const source = nodeById.get(link.source);
              const target = nodeById.get(link.target);
              if (!source || !target) return null;
              const x1 = COL_X[source.column];
              const x2 = COL_X[target.column];
              return (
                <path key={i} d={curvePath(x1, yFor(source), x2, yFor(target))} strokeWidth={1} />
              );
            })}
          </g>

          {col0.map((node) => (
            <g key={node.id}>
              <circle cx={COL_X[0]} cy={yFor(node)} r={2.5} fill="currentColor" className="text-primary" />
              <text
                x={COL_X[0] - 10}
                y={yFor(node)}
                dy="0.32em"
                textAnchor="end"
                className="fill-neutral-600 dark:fill-neutral-400"
                fontSize={11}
              >
                {node.label}
              </text>
            </g>
          ))}

          {col1.map((node) => (
            <g key={node.id}>
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
          ))}

          {col2.map((node) => (
            <g key={node.id}>
              <circle cx={COL_X[2]} cy={yFor(node)} r={2.5} fill="currentColor" className="text-primary" />
              <text
                x={COL_X[2] + 10}
                y={yFor(node)}
                dy="0.32em"
                textAnchor="start"
                className="fill-neutral-900 dark:fill-white"
                fontSize={11}
                fontWeight={600}
              >
                {node.label}
              </text>
            </g>
          ))}
        </svg>
      </div>

      <p className="mt-3 text-xs leading-relaxed text-neutral-500 dark:text-neutral-400">
        {t.excludedLabel} ({excludedNames}). {t.excludedNote}
      </p>
    </div>
  );
}
