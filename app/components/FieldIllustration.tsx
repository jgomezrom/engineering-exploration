"use client";

import { FieldSlug } from "../data/types";
import { useLanguage } from "../context/LanguageContext";

type FieldIllustrationProps = {
  slug: FieldSlug;
  className?: string;
};

const DIAGRAM_LABELS = {
  en: {
    airfoilSection: "airfoil section (NACA-style camber)",
    soilCrossSection: "soil horizon cross-section",
    processFlow: "process flow",
    crystalLattice: "crystal lattice — atomic bonds",
    articulatedArm: "articulated arm, 2 degrees of freedom",
    nuclearPlant: "containment dome + cooling tower",
    drillingRig: "derrick + crown block",
    dripIrrigation: "drip irrigation, row crop",
    shipHull: "hull section, midship",
    devicePrototype: "device + vitals trace",
    icPackage: "IC package, pin grid",
    waterTable: "▽ water table",
    client: "CLIENT",
    server: "SERVER",
    airflow: "airflow",
    spanDimension: "span 240m",
    buildingSystems: "structural + mechanical + electrical systems",
    automotiveCutaway: "chassis + drivetrain",
    assemblyLine: "assembly line, stamping station",
    systemsIntegration: "subsystem integration",
    structuralFrame: "structural frame, 3 stories",
    renewableEnergy: "solar + wind generation",
    waferDie: "wafer + die",
  },
  es: {
    airfoilSection: "sección de perfil alar (tipo NACA)",
    soilCrossSection: "sección transversal de horizontes del suelo",
    processFlow: "flujo del proceso",
    crystalLattice: "red cristalina — enlaces atómicos",
    articulatedArm: "brazo articulado, 2 grados de libertad",
    nuclearPlant: "domo de contención + torre de enfriamiento",
    drillingRig: "torre de perforación + bloque corona",
    dripIrrigation: "riego por goteo, hilera de cultivo",
    shipHull: "sección del casco, media nave",
    devicePrototype: "dispositivo + trazo de signos vitales",
    icPackage: "encapsulado IC, matriz de pines",
    waterTable: "▽ nivel freático",
    client: "CLIENTE",
    server: "SERVIDOR",
    airflow: "flujo de aire",
    spanDimension: "luz 240m",
    buildingSystems: "sistemas estructurales + mecánicos + eléctricos",
    automotiveCutaway: "chasis + tren motriz",
    assemblyLine: "línea de ensamblaje, estación de estampado",
    systemsIntegration: "integración de subsistemas",
    structuralFrame: "estructura, 3 pisos",
    renewableEnergy: "generación solar + eólica",
    waferDie: "oblea + troquel",
  },
};

function round(n: number) {
  return Math.round(n * 100) / 100;
}

// Chunky trapezoidal teeth (base wider than tip) read as real gear teeth at
// small sizes far better than thin radial lines do.
export function GearTeeth({ cx, cy, r, count, toothH, toothW = 0.34 }: { cx: number; cy: number; r: number; count: number; toothH: number; toothW?: number }) {
  const segs: string[] = [];
  for (let i = 0; i < count; i++) {
    const mid = (i * 2 * Math.PI) / count;
    const halfBase = (Math.PI / count) * toothW;
    const halfTip = halfBase * 0.65;
    const p = (a: number, rad: number) => `${round(cx + rad * Math.cos(a))},${round(cy + rad * Math.sin(a))}`;
    segs.push(`M${p(mid - halfBase, r)}L${p(mid - halfTip, r + toothH)}L${p(mid + halfTip, r + toothH)}L${p(mid + halfBase, r)}`);
  }
  return <path d={segs.join(" ")} stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" fill="none" />;
}

// A small square notch at the top of a hub circle — the universal symbol for
// a keyway (where a shaft locks to a gear so it can't spin freely on it).
function Keyway({ cx, cy, r, size = 5 }: { cx: number; cy: number; r: number; size?: number }) {
  return <rect x={cx - size / 2} y={cy - r - size * 0.4} width={size} height={size} stroke="currentColor" strokeWidth="1.2" fill="none" />;
}

// A technical-drawing dimension line: two perpendicular end ticks, a spanning
// line, and a centered label — the convention used on real fabrication prints.
function DimLine({ x1, x2, y, label, vertical = false }: { x1: number; x2: number; y: number; label: string; vertical?: boolean }) {
  if (vertical) {
    return (
      <>
        <line x1={x1 - 5} y1={x2} x2={x1 + 5} y2={x2} stroke="currentColor" strokeWidth="1" />
        <line x1={x1 - 5} y1={y} x2={x1 + 5} y2={y} stroke="currentColor" strokeWidth="1" />
        <line x1={x1} y1={x2} x2={x1} y2={y} stroke="currentColor" strokeWidth="1" />
        <text x={x1 + 8} y={(x2 + y) / 2 + 3} className="fill-current font-mono text-[8px]">
          {label}
        </text>
      </>
    );
  }
  return (
    <>
      <line x1={x1} y1={y - 5} x2={x1} y2={y + 5} stroke="currentColor" strokeWidth="1" />
      <line x1={x2} y1={y - 5} x2={x2} y2={y + 5} stroke="currentColor" strokeWidth="1" />
      <line x1={x1} y1={y} x2={x2} y2={y} stroke="currentColor" strokeWidth="1" />
      <text x={(x1 + x2) / 2} y={y - 8} textAnchor="middle" className="fill-current font-mono text-[8px]">
        {label}
      </text>
    </>
  );
}

// A Pratt truss: verticals plus diagonals that all angle toward the center —
// the actual load-carrying pattern real truss bridges use, not just a zigzag.
function PrattTruss({ x, y, width, height, panels }: { x: number; y: number; width: number; height: number; panels: number }) {
  const step = width / panels;
  const top = y;
  const bottom = y + height;
  const verticals: string[] = [];
  const diagonals: string[] = [];
  for (let i = 0; i <= panels; i++) {
    const px = round(x + i * step);
    verticals.push(`M${px} ${top}V${bottom}`);
  }
  for (let i = 0; i < panels; i++) {
    const px1 = round(x + i * step);
    const px2 = round(x + (i + 1) * step);
    const center = panels / 2;
    if (i < center) diagonals.push(`M${px1} ${top}L${px2} ${bottom}`);
    else if (i >= center) diagonals.push(`M${px2} ${top}L${px1} ${bottom}`);
  }
  return (
    <>
      <line x1={x} y1={top} x2={x + width} y2={top} stroke="currentColor" strokeWidth="1.5" />
      <line x1={x} y1={bottom} x2={x + width} y2={bottom} stroke="currentColor" strokeWidth="1.5" />
      <path d={verticals.join(" ")} stroke="currentColor" strokeWidth="1.2" />
      <path d={diagonals.join(" ")} stroke="currentColor" strokeWidth="1" opacity="0.7" />
    </>
  );
}

// A crystal lattice drawn with real bonds — adjacent nodes connected by
// lines, the way a crystallography diagram actually reads, not loose dots.
function LatticeGrid({ x, y, cols, rows, spacing }: { x: number; y: number; cols: number; rows: number; spacing: number }) {
  const nodes: { cx: number; cy: number; row: number; col: number }[] = [];
  for (let r = 0; r < rows; r++) {
    for (let c = 0; c < cols; c++) {
      nodes.push({ cx: x + c * spacing + (r % 2 === 1 ? spacing / 2 : 0), cy: y + r * spacing, row: r, col: c });
    }
  }
  const bonds: string[] = [];
  for (const n of nodes) {
    const rightNeighbor = nodes.find((o) => o.row === n.row && o.col === n.col + 1);
    if (rightNeighbor) bonds.push(`M${n.cx} ${n.cy}L${rightNeighbor.cx} ${rightNeighbor.cy}`);
    const belowSameCol = nodes.find((o) => o.row === n.row + 1 && Math.abs(o.cx - n.cx) < spacing * 0.6);
    if (belowSameCol) bonds.push(`M${n.cx} ${n.cy}L${belowSameCol.cx} ${belowSameCol.cy}`);
  }
  return (
    <>
      <path d={bonds.join(" ")} stroke="currentColor" strokeWidth="0.75" opacity="0.5" />
      {nodes.map((n, i) => (
        <circle key={i} cx={n.cx} cy={n.cy} r={n.row % 2 === 0 ? 5 : 3.5} stroke="currentColor" strokeWidth="1.5" className={n.row % 2 === 0 ? "fill-primary/15" : "fill-none"} />
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
          <circle cx="95" cy="88" r="42" className="fill-primary/5" stroke="currentColor" strokeWidth="1.5" />
          <circle cx="95" cy="88" r="10" stroke="currentColor" strokeWidth="1.5" fill="none" />
          <Keyway cx={95} cy={88} r={10} />
          <GearTeeth cx={95} cy={88} r={42} count={13} toothH={10} />
          <circle cx="205" cy="88" r="23" className="fill-accent/5" stroke="currentColor" strokeWidth="1.5" />
          <circle cx="205" cy="88" r="6" stroke="currentColor" strokeWidth="1.5" fill="none" />
          <Keyway cx={205} cy={88} r={6} size={4} />
          <GearTeeth cx={205} cy={88} r={23} count={8} toothH={8} />
          <DimLine x1={95} x2={205} y={148} label="110mm" />
          <line x1="20" y1="165" x2="280" y2="165" stroke="currentColor" strokeWidth="1" strokeDasharray="2 3" opacity="0.3" />
        </svg>
      );

    case "electrical-engineering":
      return (
        <svg viewBox="0 0 300 180" fill="none" aria-hidden="true" className={className}>
          <rect x="30" y="35" width="240" height="110" rx="2" className="fill-primary/5" stroke="currentColor" strokeWidth="1.5" />
          {/* board traces */}
          <path d="M30 60h50M30 90h30M30 120h50M270 60h-40M270 120h-30M120 35v20M180 35v20" stroke="currentColor" strokeWidth="1" opacity="0.5" />
          {/* IC package, center */}
          <rect x="120" y="65" width="60" height="50" stroke="currentColor" strokeWidth="1.5" className="fill-neutral-50 dark:fill-neutral-900" />
          <circle cx="130" cy="75" r="2" fill="currentColor" />
          {Array.from({ length: 5 }).map((_, i) => (
            <g key={i}>
              <line x1={130 + i * 10} y1="65" x2={130 + i * 10} y2="55" stroke="currentColor" strokeWidth="1.2" />
              <line x1={130 + i * 10} y1="115" x2={130 + i * 10} y2="125" stroke="currentColor" strokeWidth="1.2" />
            </g>
          ))}
          {/* resistor, left of IC */}
          <path d="M55 90h15l6-10 10 20 10-20 10 20 6-10h15" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
          {/* voltage / signal bolt, upper right */}
          <path d="M228 45l-16 24h13l-8 20 24-28h-14z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" className="fill-accent/15" />
        </svg>
      );

    case "civil-engineering":
      return (
        <svg viewBox="0 0 300 180" fill="none" aria-hidden="true" className={className}>
          <PrattTruss x={30} y={65} width={240} height={38} panels={8} />
          <rect x="16" y="103" width="24" height="42" className="fill-primary/5" stroke="currentColor" strokeWidth="1.5" />
          <rect x="260" y="103" width="24" height="42" className="fill-primary/5" stroke="currentColor" strokeWidth="1.5" />
          <path d="M10 145h20M270 145h20" stroke="currentColor" strokeWidth="1.5" strokeDasharray="1 2.5" />
          <line x1="8" y1="150" x2="292" y2="150" stroke="currentColor" strokeWidth="1.5" />
          <DimLine x1={30} x2={270} y={165} label={labels.spanDimension} />
        </svg>
      );

    case "biomedical-engineering":
      return (
        <svg viewBox="0 0 300 180" fill="none" aria-hidden="true" className={className}>
          <rect x="20" y="55" width="70" height="70" rx="10" className="fill-primary/5" stroke="currentColor" strokeWidth="1.5" />
          <circle cx="55" cy="90" r="18" stroke="currentColor" strokeWidth="1.5" fill="none" />
          <circle cx="55" cy="90" r="4" fill="currentColor" />
          <path d="M55 72v-8M55 108v8M37 90h-8M73 90h8" stroke="currentColor" strokeWidth="1" opacity="0.5" />
          <path
            d="M100 100h25l8-8 8 34 14-58 10 32h6l8-10h95"
            stroke="currentColor"
            strokeWidth="1.75"
            strokeLinejoin="round"
            strokeLinecap="round"
            className="text-accent"
          />
          <line x1="20" y1="140" x2="280" y2="140" stroke="currentColor" strokeWidth="1" strokeDasharray="2 3" opacity="0.3" />
          <text x="150" y="155" textAnchor="middle" className="fill-current font-mono text-[9px]">
            {labels.devicePrototype}
          </text>
        </svg>
      );

    case "software-engineering":
      return (
        <svg viewBox="0 0 300 180" fill="none" aria-hidden="true" className={className}>
          <rect x="105" y="15" width="90" height="52" rx="2" className="fill-primary/5" stroke="currentColor" strokeWidth="1.5" />
          <line x1="105" y1="27" x2="195" y2="27" stroke="currentColor" strokeWidth="1.2" />
          <circle cx="113" cy="21" r="2" fill="currentColor" opacity="0.6" />
          <circle cx="120" cy="21" r="2" fill="currentColor" opacity="0.6" />
          <text x="150" y="50" textAnchor="middle" className="fill-current font-mono text-[13px]">
            {"</>"}
          </text>
          <line x1="150" y1="67" x2="150" y2="88" stroke="currentColor" strokeWidth="1.5" />
          <path d="M150 88l-32 32 32 32 32-32z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" className="fill-accent/5" />
          <line x1="118" y1="120" x2="55" y2="120" stroke="currentColor" strokeWidth="1.5" />
          <line x1="55" y1="120" x2="55" y2="145" stroke="currentColor" strokeWidth="1.5" />
          <rect x="20" y="145" width="70" height="28" rx="2" stroke="currentColor" strokeWidth="1.5" className="fill-primary/5" />
          <text x="55" y="163" textAnchor="middle" className="fill-current font-mono text-[7px]">
            {labels.client}
          </text>
          <line x1="182" y1="120" x2="245" y2="120" stroke="currentColor" strokeWidth="1.5" />
          <line x1="245" y1="120" x2="245" y2="145" stroke="currentColor" strokeWidth="1.5" />
          <rect x="210" y="145" width="70" height="28" rx="2" stroke="currentColor" strokeWidth="1.5" className="fill-primary/5" />
          <text x="245" y="163" textAnchor="middle" className="fill-current font-mono text-[7px]">
            {labels.server}
          </text>
        </svg>
      );

    case "aerospace-engineering":
      return (
        <svg viewBox="0 0 300 180" fill="none" aria-hidden="true" className={className}>
          <path
            d="M25 100C55 78 95 68 150 68c60 0 110 8 125 18-15 4-70 16-125 16-55 0-105-6-125-2Z"
            className="fill-primary/8"
            stroke="currentColor"
            strokeWidth="1.75"
            strokeLinejoin="round"
          />
          <path d="M25 100c60 6 190 6 250 0" stroke="currentColor" strokeWidth="1" strokeDasharray="2 3" opacity="0.5" />
          <path d="M40 96l210 4" stroke="currentColor" strokeWidth="0.75" opacity="0.35" />
          <path d="M60 60l14 22M110 55v25" stroke="currentColor" strokeWidth="1" opacity="0.4" strokeDasharray="1 2" />
          <path d="M45 40l25 30" stroke="currentColor" strokeWidth="1" markerEnd="url(#arrowAero)" opacity="0.6" />
          <defs>
            <marker id="arrowAero" markerWidth="6" markerHeight="6" refX="3" refY="3" orient="auto">
              <path d="M0 0L6 3L0 6Z" fill="currentColor" opacity="0.6" />
            </marker>
          </defs>
          <text x="45" y="35" className="fill-current font-mono text-[8px]" opacity="0.7">
            {labels.airflow}
          </text>
          <line x1="25" y1="150" x2="275" y2="150" stroke="currentColor" strokeWidth="1" strokeDasharray="2 3" opacity="0.3" />
          <text x="150" y="165" textAnchor="middle" className="fill-current font-mono text-[9px]">
            {labels.airfoilSection}
          </text>
        </svg>
      );

    case "chemical-engineering":
      return (
        <svg viewBox="0 0 300 180" fill="none" aria-hidden="true" className={className}>
          {/* stirred reactor, rounded top with agitator shaft */}
          <path d="M25 130V70a25 12 0 0 1 50 0v60Z" className="fill-primary/5" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
          <line x1="50" y1="45" x2="50" y2="70" stroke="currentColor" strokeWidth="1.2" />
          <path d="M42 85l16 8M58 85l-16 8" stroke="currentColor" strokeWidth="1" opacity="0.6" />
          {/* distillation column with trays */}
          <rect x="120" y="30" width="36" height="100" className="fill-accent/5" stroke="currentColor" strokeWidth="1.5" />
          <path d="M120 50h36M120 66h36M120 82h36M120 98h36M120 114h36" stroke="currentColor" strokeWidth="0.75" opacity="0.5" />
          {/* storage tank */}
          <rect x="210" y="60" width="55" height="70" rx="3" className="fill-primary/5" stroke="currentColor" strokeWidth="1.5" />
          <path d="M210 72h55" stroke="currentColor" strokeWidth="0.75" opacity="0.4" />
          {/* piping between vessels with valve symbols */}
          <path d="M75 100h35M156 95h44" stroke="currentColor" strokeWidth="1.5" />
          <path d="M108 95l6 5 6-5-6-5z" stroke="currentColor" strokeWidth="1" className="fill-neutral-50 dark:fill-neutral-900" />
          <path d="M188 95l6 5 6-5-6-5z" stroke="currentColor" strokeWidth="1" className="fill-neutral-50 dark:fill-neutral-900" />
          <line x1="15" y1="150" x2="280" y2="150" stroke="currentColor" strokeWidth="1" strokeDasharray="2 3" opacity="0.3" />
        </svg>
      );

    case "computer-engineering":
      return (
        <svg viewBox="0 0 300 180" fill="none" aria-hidden="true" className={className}>
          <rect x="105" y="50" width="90" height="80" className="fill-primary/8" stroke="currentColor" strokeWidth="1.5" />
          <rect x="128" y="73" width="44" height="34" stroke="currentColor" strokeWidth="1.2" className="fill-neutral-50 dark:fill-neutral-900" />
          <path d="M136 73V60M148 73V60M160 73V60M136 107v13M148 107v13M160 107v13" stroke="currentColor" strokeWidth="1" />
          {Array.from({ length: 6 }).map((_, i) => (
            <g key={i}>
              <line x1="105" y1={58 + i * 12} x2="88" y2={58 + i * 12} stroke="currentColor" strokeWidth="1.2" />
              <line x1="195" y1={58 + i * 12} x2="212" y2={58 + i * 12} stroke="currentColor" strokeWidth="1.2" />
            </g>
          ))}
          {Array.from({ length: 5 }).map((_, i) => (
            <g key={i}>
              <line x1={118 + i * 16} y1="50" x2={118 + i * 16} y2="35" stroke="currentColor" strokeWidth="1.2" />
              <line x1={118 + i * 16} y1="130" x2={118 + i * 16} y2="145" stroke="currentColor" strokeWidth="1.2" />
            </g>
          ))}
          <text x="150" y="93" textAnchor="middle" className="fill-current font-mono text-[7px]" opacity="0.7">
            {labels.icPackage}
          </text>
        </svg>
      );

    case "environmental-engineering":
      return (
        <svg viewBox="0 0 300 180" fill="none" aria-hidden="true" className={className}>
          <rect x="40" y="25" width="220" height="28" className="fill-primary/10" stroke="currentColor" strokeWidth="1.5" />
          <path d="M48 39h204M48 33h60M48 45h100" stroke="currentColor" strokeWidth="0.75" opacity="0.4" />
          <rect x="40" y="53" width="220" height="28" className="fill-accent/8" stroke="currentColor" strokeWidth="1.5" />
          <circle cx="70" cy="67" r="2.5" fill="currentColor" opacity="0.5" />
          <circle cx="95" cy="70" r="2.5" fill="currentColor" opacity="0.5" />
          <circle cx="130" cy="66" r="2.5" fill="currentColor" opacity="0.5" />
          <circle cx="175" cy="69" r="2.5" fill="currentColor" opacity="0.5" />
          <circle cx="215" cy="67" r="2.5" fill="currentColor" opacity="0.5" />
          <rect x="40" y="81" width="220" height="34" className="fill-primary/5" stroke="currentColor" strokeWidth="1.5" />
          <path
            d="M40 118c15 9 30 9 45 0s30-9 45 0 30 9 45 0 30-9 45 0 30 9 40 0"
            stroke="currentColor"
            strokeWidth="1.5"
            fill="none"
            className="text-primary"
          />
          <text x="278" y="121" textAnchor="end" className="fill-current font-mono text-[7px]" opacity="0.7">
            {labels.waterTable}
          </text>
          <line x1="18" y1="140" x2="260" y2="140" stroke="currentColor" strokeWidth="1" strokeDasharray="1 2.5" opacity="0.5" />
          <path d="M55 140V125M55 130l-4-5M55 130l4-5" stroke="currentColor" strokeWidth="1" opacity="0.6" />
          <line x1="20" y1="150" x2="280" y2="150" stroke="currentColor" strokeWidth="1" strokeDasharray="2 3" opacity="0.3" />
          <text x="150" y="165" textAnchor="middle" className="fill-current font-mono text-[9px]">
            {labels.soilCrossSection}
          </text>
        </svg>
      );

    case "industrial-engineering":
      return (
        <svg viewBox="0 0 300 180" fill="none" aria-hidden="true" className={className}>
          <rect x="15" y="72" width="45" height="36" className="fill-primary/5" stroke="currentColor" strokeWidth="1.5" />
          <path d="M22 79h31M22 87h31M22 95h31M22 101h20" stroke="currentColor" strokeWidth="0.75" opacity="0.5" />
          <path d="M60 90h30" stroke="currentColor" strokeWidth="1.5" markerEnd="url(#arrowInd1)" />
          <rect x="90" y="65" width="55" height="50" className="fill-accent/8" stroke="currentColor" strokeWidth="1.5" />
          <circle cx="117.5" cy="90" r="14" stroke="currentColor" strokeWidth="1.2" fill="none" />
          <GearTeeth cx={117.5} cy={90} r={14} count={8} toothH={5} />
          <path d="M145 90h30" stroke="currentColor" strokeWidth="1.5" markerEnd="url(#arrowInd2)" />
          <rect x="175" y="72" width="45" height="36" className="fill-primary/5" stroke="currentColor" strokeWidth="1.5" />
          <path d="M182 82l6 6 6-10 6 14 6-10 6 4" stroke="currentColor" strokeWidth="1.2" fill="none" className="text-primary" />
          <path d="M220 90h30" stroke="currentColor" strokeWidth="1.5" markerEnd="url(#arrowInd3)" />
          <rect x="250" y="75" width="34" height="30" rx="15" stroke="currentColor" strokeWidth="1.5" className="fill-accent/10" />
          <path d="M262 90l5 5 8-10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-accent" />
          <defs>
            {["arrowInd1", "arrowInd2", "arrowInd3"].map((id) => (
              <marker key={id} id={id} markerWidth="6" markerHeight="6" refX="4" refY="3" orient="auto">
                <path d="M0 0L6 3L0 6Z" fill="currentColor" />
              </marker>
            ))}
          </defs>
          <line x1="15" y1="130" x2="284" y2="130" stroke="currentColor" strokeWidth="1" strokeDasharray="2 3" opacity="0.3" />
          <text x="150" y="145" textAnchor="middle" className="fill-current font-mono text-[9px]">
            {labels.processFlow}
          </text>
        </svg>
      );

    case "materials-engineering":
      return (
        <svg viewBox="0 0 300 180" fill="none" aria-hidden="true" className={className}>
          <LatticeGrid x={55} y={35} cols={5} rows={4} spacing={38} />
          <line x1="30" y1="150" x2="270" y2="150" stroke="currentColor" strokeWidth="1" strokeDasharray="2 3" opacity="0.3" />
          <text x="150" y="165" textAnchor="middle" className="fill-current font-mono text-[9px]">
            {labels.crystalLattice}
          </text>
        </svg>
      );

    case "robotics-engineering":
      return (
        <svg viewBox="0 0 300 180" fill="none" aria-hidden="true" className={className}>
          <rect x="35" y="128" width="46" height="20" rx="2" className="fill-primary/8" stroke="currentColor" strokeWidth="1.5" />
          <path d="M58 128V92l68-32 55 36" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none" />
          <circle cx="58" cy="92" r="8" stroke="currentColor" strokeWidth="1.5" className="fill-neutral-50 dark:fill-neutral-900" />
          <circle cx="126" cy="60" r="7" stroke="currentColor" strokeWidth="1.5" className="fill-neutral-50 dark:fill-neutral-900" />
          <circle cx="181" cy="96" r="6" stroke="currentColor" strokeWidth="1.5" className="fill-neutral-50 dark:fill-neutral-900" />
          {/* two-finger gripper, open */}
          <path d="M181 96l20-10M195 82l8-4M195 82l3 8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-accent" />
          <path d="M181 96l24 2M201 92l6 2M201 92l-1 8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-accent" />
          <line x1="40" y1="160" x2="260" y2="160" stroke="currentColor" strokeWidth="1" strokeDasharray="2 3" opacity="0.3" />
          <text x="150" y="172" textAnchor="middle" className="fill-current font-mono text-[9px]">
            {labels.articulatedArm}
          </text>
        </svg>
      );

    case "nuclear-engineering":
      return (
        <svg viewBox="0 0 300 180" fill="none" aria-hidden="true" className={className}>
          {/* hyperboloid cooling tower — pinched waist, the real recognizable silhouette */}
          <path
            d="M70 140C60 110 78 92 90 84C78 76 72 55 82 32H158C168 55 162 76 150 84C162 92 180 110 170 140Z"
            className="fill-primary/6"
            stroke="currentColor"
            strokeWidth="1.75"
            strokeLinejoin="round"
          />
          <path d="M75 138h90" stroke="currentColor" strokeWidth="0.75" opacity="0.4" />
          {/* containment dome, correctly domed rather than a peaked roof */}
          <path d="M195 140V96a45 45 0 0 1 90 0v44Z" className="fill-accent/6" stroke="currentColor" strokeWidth="1.75" strokeLinejoin="round" />
          <path d="M195 118h90M240 96v44" stroke="currentColor" strokeWidth="0.75" opacity="0.4" />
          <line x1="30" y1="150" x2="280" y2="150" stroke="currentColor" strokeWidth="1" strokeDasharray="2 3" opacity="0.3" />
          <text x="150" y="165" textAnchor="middle" className="fill-current font-mono text-[9px]">
            {labels.nuclearPlant}
          </text>
        </svg>
      );

    case "petroleum-engineering":
      return (
        <svg viewBox="0 0 300 180" fill="none" aria-hidden="true" className={className}>
          {/* lattice derrick with crown block */}
          <rect x="128" y="28" width="44" height="10" stroke="currentColor" strokeWidth="1.5" className="fill-neutral-50 dark:fill-neutral-900" />
          <path d="M108 135L142 38M192 135L158 38" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
          <path
            d="M115 118h70M120 100h60M125 82h50M131 64h38M136 48h28"
            stroke="currentColor"
            strokeWidth="1"
            opacity="0.6"
          />
          <path d="M108 135l17-17M125 118l17-18M142 100l16-16M158 82l0 0" stroke="currentColor" strokeWidth="0.75" opacity="0.4" />
          <path d="M192 135l-17-17M175 118l-17-18M158 100l-16-16" stroke="currentColor" strokeWidth="0.75" opacity="0.4" />
          <rect x="95" y="135" width="110" height="10" stroke="currentColor" strokeWidth="1.5" className="fill-primary/8" />
          <line x1="30" y1="150" x2="270" y2="150" stroke="currentColor" strokeWidth="1" strokeDasharray="2 3" opacity="0.3" />
          <text x="150" y="165" textAnchor="middle" className="fill-current font-mono text-[9px]">
            {labels.drillingRig}
          </text>
        </svg>
      );

    case "agricultural-engineering":
      return (
        <svg viewBox="0 0 300 180" fill="none" aria-hidden="true" className={className}>
          <path d="M20 128h260M20 138h260" stroke="currentColor" strokeWidth="0.75" opacity="0.35" />
          <line x1="65" y1="55" x2="235" y2="55" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" />
          <path d="M85 55v12M125 55v12M165 55v12M205 55v12" stroke="currentColor" strokeWidth="1.2" strokeDasharray="2 2" strokeLinecap="round" opacity="0.7" />
          {[85, 125, 165, 205].map((cx) => (
            <g key={cx}>
              <path d={`M${cx} 128V98`} stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
              <path
                d={`M${cx} 100c-9-4-11-14-6-20c3 8 4 10 6 12c2-2 3-4 6-12c5 6 3 16-6 20Z`}
                stroke="currentColor"
                strokeWidth="1.2"
                strokeLinejoin="round"
                className="fill-primary/10"
              />
            </g>
          ))}
          <line x1="20" y1="150" x2="280" y2="150" stroke="currentColor" strokeWidth="1" strokeDasharray="2 3" opacity="0.3" />
          <text x="150" y="165" textAnchor="middle" className="fill-current font-mono text-[9px]">
            {labels.dripIrrigation}
          </text>
        </svg>
      );

    case "marine-engineering":
      return (
        <svg viewBox="0 0 300 180" fill="none" aria-hidden="true" className={className}>
          {/* curved bow hull, not a plain trapezoid */}
          <path
            d="M45 108C45 96 55 90 75 90H225L212 138H88C64 138 45 126 45 108Z"
            className="fill-primary/6"
            stroke="currentColor"
            strokeWidth="1.75"
            strokeLinejoin="round"
          />
          <line x1="45" y1="120" x2="219" y2="120" stroke="currentColor" strokeWidth="1" strokeDasharray="2 2" opacity="0.6" />
          <rect x="118" y="62" width="56" height="28" className="fill-accent/8" stroke="currentColor" strokeWidth="1.5" />
          <path d="M126 70h10M126 78h10M144 70h10M144 78h10M162 70h8M162 78h8" stroke="currentColor" strokeWidth="0.75" opacity="0.5" />
          <line x1="196" y1="62" x2="196" y2="40" stroke="currentColor" strokeWidth="3" strokeLinecap="round" opacity="0.8" />
          <line x1="146" y1="62" x2="146" y2="34" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
          <path d="M146 34l14 6" stroke="currentColor" strokeWidth="1" opacity="0.6" />
          <line x1="20" y1="150" x2="270" y2="150" stroke="currentColor" strokeWidth="1" strokeDasharray="2 3" opacity="0.3" />
          <text x="150" y="165" textAnchor="middle" className="fill-current font-mono text-[9px]">
            {labels.shipHull}
          </text>
        </svg>
      );

    case "architectural-engineering":
      return (
        <svg viewBox="0 0 300 180" fill="none" aria-hidden="true" className={className}>
          <rect x="70" y="35" width="160" height="105" className="fill-primary/5" stroke="currentColor" strokeWidth="1.5" />
          <path d="M90 35v105M120 35v105M150 35v105M180 35v105M210 35v105" stroke="currentColor" strokeWidth="0.5" opacity="0.25" />
          <path d="M70 60h160M70 85h160M70 110h160" stroke="currentColor" strokeWidth="0.5" opacity="0.25" />
          <rect x="80" y="45" width="90" height="13" className="fill-accent/10" stroke="currentColor" strokeWidth="1.2" />
          <rect x="170" y="45" width="13" height="30" className="fill-accent/10" stroke="currentColor" strokeWidth="1.2" />
          <rect x="196" y="35" width="12" height="105" className="fill-neutral-900/5 dark:fill-white/5" stroke="currentColor" strokeWidth="1.5" />
          <rect x="90" y="110" width="20" height="24" stroke="currentColor" strokeWidth="1.2" className="fill-neutral-50 dark:fill-neutral-900" />
          <path d="M97 116l-3 6h4l-3 6" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" />
          <line x1="20" y1="150" x2="280" y2="150" stroke="currentColor" strokeWidth="1" strokeDasharray="2 3" opacity="0.3" />
          <text x="150" y="165" textAnchor="middle" className="fill-current font-mono text-[9px]">
            {labels.buildingSystems}
          </text>
        </svg>
      );

    case "automotive-engineering":
      return (
        <svg viewBox="0 0 300 180" fill="none" aria-hidden="true" className={className}>
          <path
            d="M40 122c0-9 8-16 22-16h8l20-24h58l26 24h28c15 0 26 7 26 16v10H40Z"
            className="fill-primary/6"
            stroke="currentColor"
            strokeWidth="1.75"
            strokeLinejoin="round"
          />
          <path d="M92 106l14-18h50l18 18" fill="none" stroke="currentColor" strokeWidth="1" opacity="0.5" />
          <circle cx="86" cy="132" r="16" stroke="currentColor" strokeWidth="1.5" className="fill-neutral-50 dark:fill-neutral-900" />
          <circle cx="86" cy="132" r="6" stroke="currentColor" strokeWidth="1.2" />
          <circle cx="204" cy="132" r="16" stroke="currentColor" strokeWidth="1.5" className="fill-neutral-50 dark:fill-neutral-900" />
          <circle cx="204" cy="132" r="6" stroke="currentColor" strokeWidth="1.2" />
          <rect x="48" y="104" width="30" height="16" strokeDasharray="2 2" stroke="currentColor" strokeWidth="1" className="fill-accent/10" />
          <line x1="20" y1="150" x2="270" y2="150" stroke="currentColor" strokeWidth="1" strokeDasharray="2 3" opacity="0.3" />
          <text x="150" y="165" textAnchor="middle" className="fill-current font-mono text-[9px]">
            {labels.automotiveCutaway}
          </text>
        </svg>
      );

    case "manufacturing-engineering":
      return (
        <svg viewBox="0 0 300 180" fill="none" aria-hidden="true" className={className}>
          <rect x="140" y="35" width="12" height="45" stroke="currentColor" strokeWidth="1.5" className="fill-neutral-900/5 dark:fill-white/5" />
          <rect x="118" y="80" width="56" height="16" className="fill-accent/12" stroke="currentColor" strokeWidth="1.5" />
          <rect x="128" y="96" width="36" height="10" stroke="currentColor" strokeWidth="1.2" />
          <line x1="30" y1="122" x2="270" y2="122" stroke="currentColor" strokeWidth="1.5" />
          <line x1="30" y1="134" x2="270" y2="134" stroke="currentColor" strokeWidth="1.5" />
          {Array.from({ length: 9 }).map((_, i) => (
            <circle key={i} cx={40 + i * 28} cy={128} r="3" stroke="currentColor" strokeWidth="1" opacity="0.5" />
          ))}
          <rect x="60" y="108" width="20" height="20" className="fill-primary/15" stroke="currentColor" strokeWidth="1.5" />
          <line x1="20" y1="150" x2="280" y2="150" stroke="currentColor" strokeWidth="1" strokeDasharray="2 3" opacity="0.3" />
          <text x="150" y="165" textAnchor="middle" className="fill-current font-mono text-[9px]">
            {labels.assemblyLine}
          </text>
        </svg>
      );

    case "systems-engineering":
      return (
        <svg viewBox="0 0 300 180" fill="none" aria-hidden="true" className={className}>
          <path d="M150 70L110 45M150 70L190 45M150 70L110 100M150 70L190 100M150 70V70" stroke="currentColor" strokeWidth="1.2" opacity="0.6" />
          <circle cx="150" cy="70" r="18" className="fill-primary/12" stroke="currentColor" strokeWidth="1.75" />
          <rect x="90" y="28" width="40" height="24" stroke="currentColor" strokeWidth="1.5" className="fill-neutral-50 dark:fill-neutral-900" />
          <rect x="170" y="28" width="40" height="24" stroke="currentColor" strokeWidth="1.5" className="fill-neutral-50 dark:fill-neutral-900" />
          <rect x="90" y="86" width="40" height="24" stroke="currentColor" strokeWidth="1.5" className="fill-neutral-50 dark:fill-neutral-900" />
          <rect x="170" y="86" width="40" height="24" stroke="currentColor" strokeWidth="1.5" className="fill-neutral-50 dark:fill-neutral-900" />
          <line x1="150" y1="88" x2="150" y2="128" stroke="currentColor" strokeWidth="1.2" opacity="0.6" />
          <rect x="128" y="128" width="44" height="22" stroke="currentColor" strokeWidth="1.5" className="fill-accent/10" />
          <line x1="20" y1="165" x2="280" y2="165" stroke="currentColor" strokeWidth="1" strokeDasharray="2 3" opacity="0.3" />
          <text x="150" y="176" textAnchor="middle" className="fill-current font-mono text-[8px]">
            {labels.systemsIntegration}
          </text>
        </svg>
      );

    case "structural-engineering":
      return (
        <svg viewBox="0 0 300 180" fill="none" aria-hidden="true" className={className}>
          {[60, 120, 180, 240].map((x) => (
            <line key={x} x1={x} y1="35" x2={x} y2="145" stroke="currentColor" strokeWidth="1.75" />
          ))}
          {[35, 71, 107, 143].map((y) => (
            <line key={y} x1="60" y1={y} x2="240" y2={y} stroke="currentColor" strokeWidth="1.5" />
          ))}
          <path d="M60 35L120 71M120 35L60 71M120 35L180 71M180 35L120 71M180 35L240 71M240 35L180 71" stroke="currentColor" strokeWidth="0.75" opacity="0.4" />
          <path d="M60 71L120 107M120 71L60 107M120 71L180 107M180 71L120 107M180 71L240 107M240 71L180 107" stroke="currentColor" strokeWidth="0.75" opacity="0.4" />
          <path d="M60 107L120 143M120 107L60 143M120 107L180 143M180 107L120 143M180 107L240 143M240 107L180 143" stroke="currentColor" strokeWidth="0.75" opacity="0.4" />
          <line x1="30" y1="155" x2="270" y2="155" stroke="currentColor" strokeWidth="1" strokeDasharray="2 3" opacity="0.3" />
          <text x="150" y="168" textAnchor="middle" className="fill-current font-mono text-[9px]">
            {labels.structuralFrame}
          </text>
        </svg>
      );

    case "energy-engineering":
      return (
        <svg viewBox="0 0 300 180" fill="none" aria-hidden="true" className={className}>
          <g transform="rotate(-18 110 75)">
            <rect x="65" y="55" width="90" height="55" className="fill-primary/10" stroke="currentColor" strokeWidth="1.5" />
            <path d="M65 73.3h90M65 91.7h90M95 55v55M125 55v55" stroke="currentColor" strokeWidth="0.75" opacity="0.5" />
          </g>
          <line x1="225" y1="140" x2="225" y2="42" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
          <circle cx="225" cy="42" r="3.5" stroke="currentColor" strokeWidth="1.5" className="fill-neutral-50 dark:fill-neutral-900" />
          <path d="M225 42L262 34M225 42L200 62M225 42L212 12" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" />
          <line x1="20" y1="150" x2="280" y2="150" stroke="currentColor" strokeWidth="1" strokeDasharray="2 3" opacity="0.3" />
          <text x="150" y="165" textAnchor="middle" className="fill-current font-mono text-[9px]">
            {labels.renewableEnergy}
          </text>
        </svg>
      );

    case "semiconductor-engineering":
      return (
        <svg viewBox="0 0 300 180" fill="none" aria-hidden="true" className={className}>
          <path d="M70 90a45 45 0 1 1 32 43l-8-14" className="fill-primary/5" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
          <path d="M60 35l30 30M60 145l30-30M120 20l16 40M175 25l-10 42" stroke="currentColor" strokeWidth="0.5" opacity="0.2" />
          <rect x="88" y="72" width="26" height="26" className="fill-accent/25" stroke="currentColor" strokeWidth="1.2" />
          <path d="M114 85h30M88 85H58M101 72V52M101 98v20" stroke="currentColor" strokeWidth="1" strokeDasharray="1.5 2" opacity="0.7" />
          <rect x="180" y="55" width="70" height="70" stroke="currentColor" strokeWidth="1.5" className="fill-neutral-50 dark:fill-neutral-900" />
          <path
            d="M195 65h20v14h-20zM225 65h14v10h-14zM195 90h40M195 100h25M195 110h34"
            stroke="currentColor"
            strokeWidth="0.9"
            opacity="0.75"
          />
          <line x1="20" y1="150" x2="280" y2="150" stroke="currentColor" strokeWidth="1" strokeDasharray="2 3" opacity="0.3" />
          <text x="150" y="165" textAnchor="middle" className="fill-current font-mono text-[9px]">
            {labels.waferDie}
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
