import { FieldSlug } from "../data/types";

type FieldIllustrationProps = {
  slug: FieldSlug;
  className?: string;
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

export default function FieldIllustration({ slug, className = "h-auto w-full" }: FieldIllustrationProps) {
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

    default:
      return null;
  }
}
