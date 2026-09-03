"use client";

import { FieldSlug } from "../data/types";
import { useLanguage } from "../context/LanguageContext";

type FieldIllustrationProps = {
  slug: FieldSlug;
  className?: string;
};

const DIAGRAM_LABELS = {
  en: {
    airfoilSection: "airfoil section",
    soilCrossSection: "soil cross-section",
    processFlow: "process flow",
    crystalLattice: "crystal lattice",
    articulatedArm: "articulated arm",
    nuclearPlant: "nuclear plant",
    drillingRig: "drilling rig",
    dripIrrigation: "drip irrigation",
    shipHull: "ship hull",
  },
  es: {
    airfoilSection: "sección de perfil alar",
    soilCrossSection: "sección transversal del suelo",
    processFlow: "flujo del proceso",
    crystalLattice: "red cristalina",
    articulatedArm: "brazo articulado",
    nuclearPlant: "planta nuclear",
    drillingRig: "torre de perforación",
    dripIrrigation: "riego por goteo",
    shipHull: "casco de barco",
  },
};

function GearTeeth({ cx, cy, r, count, len }: { cx: number; cy: number; r: number; count: number; len: number }) {
  return (
    <>
      {Array.from({ length: count }).map((_, i) => {
        const angle = (i * 2 * Math.PI) / count;
        const x1 = cx + r * Math.cos(angle);
        const y1 = cy + r * Math.sin(angle);
        const x2 = cx + (r + len) * Math.cos(angle);
        const y2 = cy + (r + len) * Math.sin(angle);
        return <line key={i} x1={x1} y1={y1} x2={x2} y2={y2} stroke="currentColor" strokeWidth="1.5" />;
      })}
    </>
  );
}

function TrussSpan({ x, y, width, height, segments }: { x: number; y: number; width: number; height: number; segments: number }) {
  const step = width / segments;
  const points: string[] = [];
  for (let i = 0; i <= segments; i++) {
    const px = x + i * step;
    points.push(`${px},${i % 2 === 0 ? y + height : y}`);
  }
  return (
    <>
      <polyline points={points.join(" ")} fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
      <line x1={x} y1={y + height} x2={x + width} y2={y + height} stroke="currentColor" strokeWidth="1.5" />
    </>
  );
}

function LatticeGrid({ x, y, cols, rows, spacing }: { x: number; y: number; cols: number; rows: number; spacing: number }) {
  const nodes: { cx: number; cy: number }[] = [];
  for (let r = 0; r < rows; r++) {
    for (let c = 0; c < cols; c++) {
      nodes.push({ cx: x + c * spacing + (r % 2 === 1 ? spacing / 2 : 0), cy: y + r * spacing });
    }
  }
  return (
    <>
      {nodes.map((n, i) => (
        <circle key={i} cx={n.cx} cy={n.cy} r="4" stroke="currentColor" strokeWidth="1.5" />
      ))}
    </>
  );
}

export default function FieldIllustration({ slug, className = "h-auto w-full" }: FieldIllustrationProps) {
  const { language } = useLanguage();
  const labels = DIAGRAM_LABELS[language];

  switch (slug) {
    case "mechanical-engineering":
      return (
        <svg viewBox="0 0 300 180" fill="none" aria-hidden="true" className={className}>
          <circle cx="105" cy="90" r="48" stroke="currentColor" strokeWidth="1.5" />
          <circle cx="105" cy="90" r="10" stroke="currentColor" strokeWidth="1.5" />
          <GearTeeth cx={105} cy={90} r={48} count={14} len={10} />
          <circle cx="205" cy="90" r="26" stroke="currentColor" strokeWidth="1.5" />
          <circle cx="205" cy="90" r="6" stroke="currentColor" strokeWidth="1.5" />
          <GearTeeth cx={205} cy={90} r={26} count={9} len={8} />
          <line x1="30" y1="150" x2="270" y2="150" stroke="currentColor" strokeWidth="1" strokeDasharray="2 3" />
          <text x="150" y="165" textAnchor="middle" className="fill-current font-mono text-[9px]">
            210mm
          </text>
        </svg>
      );

    case "electrical-engineering":
      return (
        <svg viewBox="0 0 300 180" fill="none" aria-hidden="true" className={className}>
          <path
            d="M30 90h40l8-16 12 32 12-32 12 32 12-32 8 16h40"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinejoin="round"
          />
          <path d="M182 90h30" stroke="currentColor" strokeWidth="1.5" />
          <path d="M212 70v40M222 78v24" stroke="currentColor" strokeWidth="1.5" />
          <path d="M222 90h30" stroke="currentColor" strokeWidth="1.5" />
          <path d="M270 90V50H30v40" stroke="currentColor" strokeWidth="1.5" />
          <path d="M115 42l-14 20h11l-6 16 20-24h-12z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
        </svg>
      );

    case "civil-engineering":
      return (
        <svg viewBox="0 0 300 180" fill="none" aria-hidden="true" className={className}>
          <TrussSpan x={30} y={70} width={240} height={40} segments={8} />
          <rect x="18" y="110" width="20" height="40" stroke="currentColor" strokeWidth="1.5" />
          <rect x="262" y="110" width="20" height="40" stroke="currentColor" strokeWidth="1.5" />
          <line x1="10" y1="150" x2="290" y2="150" stroke="currentColor" strokeWidth="1.5" />
        </svg>
      );

    case "biomedical-engineering":
      return (
        <svg viewBox="0 0 300 180" fill="none" aria-hidden="true" className={className}>
          <rect x="20" y="60" width="60" height="60" rx="8" stroke="currentColor" strokeWidth="1.5" />
          <circle cx="50" cy="90" r="6" stroke="currentColor" strokeWidth="1.5" />
          <path
            d="M90 100h30l10-10 10 30 12-50 10 30h8l10-10h100"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinejoin="round"
            strokeLinecap="round"
          />
        </svg>
      );

    case "software-engineering":
      return (
        <svg viewBox="0 0 300 180" fill="none" aria-hidden="true" className={className}>
          <rect x="115" y="15" width="70" height="30" stroke="currentColor" strokeWidth="1.5" />
          <line x1="150" y1="45" x2="150" y2="65" stroke="currentColor" strokeWidth="1.5" />
          <path d="M150 65l-30 30 30 30 30-30z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
          <line x1="120" y1="95" x2="60" y2="95" stroke="currentColor" strokeWidth="1.5" />
          <line x1="60" y1="95" x2="60" y2="130" stroke="currentColor" strokeWidth="1.5" />
          <rect x="25" y="130" width="70" height="30" stroke="currentColor" strokeWidth="1.5" />
          <line x1="180" y1="95" x2="240" y2="95" stroke="currentColor" strokeWidth="1.5" />
          <line x1="240" y1="95" x2="240" y2="130" stroke="currentColor" strokeWidth="1.5" />
          <rect x="205" y="130" width="70" height="30" stroke="currentColor" strokeWidth="1.5" />
        </svg>
      );

    case "aerospace-engineering":
      return (
        <svg viewBox="0 0 300 180" fill="none" aria-hidden="true" className={className}>
          <path d="M30 100c50-30 150-30 240-6-60 20-160 24-240 6Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
          <line x1="30" y1="99" x2="270" y2="94" stroke="currentColor" strokeWidth="1" strokeDasharray="2 3" />
          <line x1="30" y1="150" x2="270" y2="150" stroke="currentColor" strokeWidth="1" strokeDasharray="2 3" />
          <text x="150" y="165" textAnchor="middle" className="fill-current font-mono text-[9px]">
            {labels.airfoilSection}
          </text>
        </svg>
      );

    case "chemical-engineering":
      return (
        <svg viewBox="0 0 300 180" fill="none" aria-hidden="true" className={className}>
          <rect x="30" y="60" width="50" height="70" rx="4" stroke="currentColor" strokeWidth="1.5" />
          <rect x="125" y="40" width="50" height="90" rx="4" stroke="currentColor" strokeWidth="1.5" />
          <rect x="220" y="70" width="50" height="60" rx="4" stroke="currentColor" strokeWidth="1.5" />
          <path d="M80 95h45M175 85h45" stroke="currentColor" strokeWidth="1.5" />
          <path d="M55 60V45M150 40V25M245 70V55" stroke="currentColor" strokeWidth="1" strokeDasharray="2 3" />
        </svg>
      );

    case "computer-engineering":
      return (
        <svg viewBox="0 0 300 180" fill="none" aria-hidden="true" className={className}>
          <rect x="115" y="55" width="70" height="70" stroke="currentColor" strokeWidth="1.5" />
          <rect x="135" y="75" width="30" height="30" stroke="currentColor" strokeWidth="1.5" />
          <path
            d="M130 55V35M150 55V35M170 55V35M130 125v20M150 125v20M170 125v20M115 70H85M115 95H60M115 110H85M185 70h30M185 95h55M185 110h30"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
          />
        </svg>
      );

    case "environmental-engineering":
      return (
        <svg viewBox="0 0 300 180" fill="none" aria-hidden="true" className={className}>
          <rect x="40" y="30" width="220" height="30" stroke="currentColor" strokeWidth="1.5" />
          <rect x="40" y="60" width="220" height="30" stroke="currentColor" strokeWidth="1.5" />
          <rect x="40" y="90" width="220" height="30" stroke="currentColor" strokeWidth="1.5" />
          <path
            d="M40 120c15 10 30 10 45 0s30-10 45 0 30 10 45 0 30-10 45 0 30 10 40 0"
            stroke="currentColor"
            strokeWidth="1.5"
            fill="none"
          />
          <line x1="40" y1="150" x2="260" y2="150" stroke="currentColor" strokeWidth="1" strokeDasharray="2 3" />
          <text x="150" y="165" textAnchor="middle" className="fill-current font-mono text-[9px]">
            {labels.soilCrossSection}
          </text>
        </svg>
      );

    case "industrial-engineering":
      return (
        <svg viewBox="0 0 300 180" fill="none" aria-hidden="true" className={className}>
          <rect x="20" y="70" width="50" height="40" stroke="currentColor" strokeWidth="1.5" />
          <rect x="110" y="70" width="50" height="40" stroke="currentColor" strokeWidth="1.5" />
          <rect x="200" y="70" width="50" height="40" stroke="currentColor" strokeWidth="1.5" />
          <path d="M70 90h40M160 90h40" stroke="currentColor" strokeWidth="1.5" />
          <line x1="20" y1="130" x2="250" y2="130" stroke="currentColor" strokeWidth="1" strokeDasharray="2 3" />
          <text x="135" y="145" textAnchor="middle" className="fill-current font-mono text-[9px]">
            {labels.processFlow}
          </text>
        </svg>
      );

    case "materials-engineering":
      return (
        <svg viewBox="0 0 300 180" fill="none" aria-hidden="true" className={className}>
          <LatticeGrid x={50} y={40} cols={5} rows={4} spacing={40} />
          <line x1="30" y1="150" x2="270" y2="150" stroke="currentColor" strokeWidth="1" strokeDasharray="2 3" />
          <text x="150" y="165" textAnchor="middle" className="fill-current font-mono text-[9px]">
            {labels.crystalLattice}
          </text>
        </svg>
      );

    case "robotics-engineering":
      return (
        <svg viewBox="0 0 300 180" fill="none" aria-hidden="true" className={className}>
          <rect x="40" y="130" width="40" height="20" stroke="currentColor" strokeWidth="1.5" />
          <path d="M60 130V90l70-30 60 40" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          <circle cx="60" cy="90" r="6" stroke="currentColor" strokeWidth="1.5" />
          <circle cx="130" cy="60" r="6" stroke="currentColor" strokeWidth="1.5" />
          <path d="M190 100l14-14M190 100l14 14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
          <line x1="40" y1="160" x2="260" y2="160" stroke="currentColor" strokeWidth="1" strokeDasharray="2 3" />
          <text x="150" y="172" textAnchor="middle" className="fill-current font-mono text-[9px]">
            {labels.articulatedArm}
          </text>
        </svg>
      );

    case "nuclear-engineering":
      return (
        <svg viewBox="0 0 300 180" fill="none" aria-hidden="true" className={className}>
          <path d="M100 130V72A42 32 0 0 1 184 72V130" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
          <path d="M210 130L224 58H240L254 130Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
          <line x1="30" y1="150" x2="270" y2="150" stroke="currentColor" strokeWidth="1" strokeDasharray="2 3" />
          <text x="150" y="165" textAnchor="middle" className="fill-current font-mono text-[9px]">
            {labels.nuclearPlant}
          </text>
        </svg>
      );

    case "petroleum-engineering":
      return (
        <svg viewBox="0 0 300 180" fill="none" aria-hidden="true" className={className}>
          <path d="M110 130L150 45L190 130" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" strokeLinecap="round" />
          <path d="M122 105h56M131 85h38M141 65h18" stroke="currentColor" strokeWidth="1.2" />
          <rect x="95" y="130" width="110" height="10" stroke="currentColor" strokeWidth="1.5" />
          <line x1="30" y1="150" x2="270" y2="150" stroke="currentColor" strokeWidth="1" strokeDasharray="2 3" />
          <text x="150" y="165" textAnchor="middle" className="fill-current font-mono text-[9px]">
            {labels.drillingRig}
          </text>
        </svg>
      );

    case "agricultural-engineering":
      return (
        <svg viewBox="0 0 300 180" fill="none" aria-hidden="true" className={className}>
          <line x1="70" y1="60" x2="230" y2="60" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
          <path
            d="M90 60v14M130 60v14M170 60v14M210 60v14"
            stroke="currentColor"
            strokeWidth="1.2"
            strokeDasharray="2 2"
            strokeLinecap="round"
          />
          <path
            d="M90 130V100M90 105l-7-10M90 105l7-10M130 130V100M130 105l-7-10M130 105l7-10M170 130V100M170 105l-7-10M170 105l7-10M210 130V100M210 105l-7-10M210 105l7-10"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <line x1="30" y1="150" x2="270" y2="150" stroke="currentColor" strokeWidth="1" strokeDasharray="2 3" />
          <text x="150" y="165" textAnchor="middle" className="fill-current font-mono text-[9px]">
            {labels.dripIrrigation}
          </text>
        </svg>
      );

    case "marine-engineering":
      return (
        <svg viewBox="0 0 300 180" fill="none" aria-hidden="true" className={className}>
          <path d="M75 110H225L215 140H85Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
          <rect x="128" y="85" width="44" height="25" stroke="currentColor" strokeWidth="1.5" />
          <line x1="150" y1="85" x2="150" y2="68" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
          <line x1="30" y1="150" x2="270" y2="150" stroke="currentColor" strokeWidth="1" strokeDasharray="2 3" />
          <text x="150" y="165" textAnchor="middle" className="fill-current font-mono text-[9px]">
            {labels.shipHull}
          </text>
        </svg>
      );

    default:
      // A generic technical/blueprint placeholder for fields that don't have
      // bespoke art yet — so a new field only needs a data.ts entry, not new SVG.
      return (
        <svg viewBox="0 0 300 180" fill="none" aria-hidden="true" className={className}>
          <rect x="60" y="40" width="180" height="100" stroke="currentColor" strokeWidth="1.5" />
          <line x1="60" y1="90" x2="240" y2="90" stroke="currentColor" strokeWidth="1" strokeDasharray="2 3" />
          <line x1="150" y1="40" x2="150" y2="140" stroke="currentColor" strokeWidth="1" strokeDasharray="2 3" />
          <circle cx="150" cy="90" r="6" stroke="currentColor" strokeWidth="1.5" />
        </svg>
      );
  }
}
