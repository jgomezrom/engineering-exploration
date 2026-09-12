type FieldIconProps = {
  slug: string;
  className?: string;
};

export default function FieldIcon({ slug, className = "h-10 w-10" }: FieldIconProps) {
  switch (slug) {
    case "mechanical-engineering":
      return (
        <svg viewBox="0 0 40 40" fill="none" aria-hidden="true" className={`${className} transition-transform duration-500 group-hover:rotate-45`}>
          <path
            d="M20 4v4M20 32v4M36 20h-4M8 20H4M30.6 9.4l-2.8 2.8M12.2 27.8l-2.8 2.8M30.6 30.6l-2.8-2.8M12.2 12.2 9.4 9.4"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
          />
          <circle cx="20" cy="20" r="9" stroke="currentColor" strokeWidth="1.5" />
          <circle cx="20" cy="20" r="3" stroke="currentColor" strokeWidth="1.5" />
        </svg>
      );

    case "electrical-engineering":
      return (
        <svg viewBox="0 0 40 40" fill="none" aria-hidden="true" className={className}>
          <path
            d="M22 4 10 22h8l-2 14 14-20h-8l2-12Z"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinejoin="round"
          />
        </svg>
      );

    case "civil-engineering":
      return (
        <svg viewBox="0 0 40 40" fill="none" aria-hidden="true" className={`${className} transition-transform duration-500 group-hover:-translate-y-0.5`}>
          <path d="M6 32h28M9 32V16l11-8 11 8v16" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
          <path d="M14 32V20M20 32V20M26 32V20" stroke="currentColor" strokeWidth="1.5" />
        </svg>
      );

    case "biomedical-engineering":
      return (
        <svg viewBox="0 0 40 40" fill="none" aria-hidden="true" className={className}>
          <path
            d="M6 21h6l3-8 4 16 3-11 2 3h10"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="transition-all duration-500 group-hover:stroke-accent"
          />
        </svg>
      );

    case "software-engineering":
      return (
        <svg viewBox="0 0 40 40" fill="none" aria-hidden="true" className={className}>
          <path
            d="M13 14 5 20l8 6M27 14l8 6-8 6M23 11l-6 18"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="transition-transform duration-500 group-hover:scale-105"
          />
        </svg>
      );

    case "aerospace-engineering":
      return (
        <svg viewBox="0 0 40 40" fill="none" aria-hidden="true" className={`${className} transition-transform duration-500 group-hover:-translate-y-1`}>
          <path d="M20 4c5 6 7 14 7 22h-14c0-8 2-16 7-22Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
          <path d="M13 26l-6 8h6M27 26l6 8h-6" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
          <path d="M17 34h6l-3 4-3-4Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
          <circle cx="20" cy="16" r="2.5" stroke="currentColor" strokeWidth="1.5" />
        </svg>
      );

    case "chemical-engineering":
      return (
        <svg viewBox="0 0 40 40" fill="none" aria-hidden="true" className={`${className} transition-transform duration-500 group-hover:rotate-6`}>
          <path d="M16 6h8M17 6v8l-9 16a2 2 0 0 0 2 3h20a2 2 0 0 0 2-3l-9-16V6" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
          <path d="M12 26h16" stroke="currentColor" strokeWidth="1.5" />
          <circle cx="18" cy="31" r="1.2" fill="currentColor" />
          <circle cx="23" cy="29" r="1" fill="currentColor" />
        </svg>
      );

    case "computer-engineering":
      return (
        <svg viewBox="0 0 40 40" fill="none" aria-hidden="true" className={className}>
          <rect x="12" y="12" width="16" height="16" stroke="currentColor" strokeWidth="1.5" />
          <path d="M16 12V6M24 12V6M16 34v-6M24 34v-6M12 16H6M12 24H6M34 16h-6M34 24h-6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
          <rect x="17" y="17" width="6" height="6" stroke="currentColor" strokeWidth="1.5" />
        </svg>
      );

    case "environmental-engineering":
      return (
        <svg viewBox="0 0 40 40" fill="none" aria-hidden="true" className={className}>
          <path d="M20 5c6 8 10 14 10 19a10 10 0 0 1-20 0c0-5 4-11 10-19Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
          <path d="M12 26c2 3 4 4 8 4s6-1 8-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        </svg>
      );

    case "industrial-engineering":
      return (
        <svg viewBox="0 0 40 40" fill="none" aria-hidden="true" className={className}>
          <rect x="4" y="17" width="8" height="8" stroke="currentColor" strokeWidth="1.5" />
          <rect x="16" y="6" width="8" height="8" stroke="currentColor" strokeWidth="1.5" />
          <rect x="16" y="28" width="8" height="8" stroke="currentColor" strokeWidth="1.5" />
          <rect x="28" y="17" width="8" height="8" stroke="currentColor" strokeWidth="1.5" />
          <path d="M12 21l4-6M12 21l4 6M24 10l4 9M24 32l4-9" stroke="currentColor" strokeWidth="1.5" />
        </svg>
      );

    case "materials-engineering":
      return (
        <svg viewBox="0 0 40 40" fill="none" aria-hidden="true" className={className}>
          <path d="M20 8v10M20 18l-11 8M20 18l11 8M9 26l11 6 11-6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
          <circle cx="20" cy="8" r="3" stroke="currentColor" strokeWidth="1.5" />
          <circle cx="9" cy="26" r="3" stroke="currentColor" strokeWidth="1.5" />
          <circle cx="31" cy="26" r="3" stroke="currentColor" strokeWidth="1.5" />
          <circle cx="20" cy="32" r="3" stroke="currentColor" strokeWidth="1.5" />
        </svg>
      );

    case "robotics-engineering":
      return (
        <svg viewBox="0 0 40 40" fill="none" aria-hidden="true" className={`${className} transition-transform duration-500 group-hover:rotate-3`}>
          <rect x="6" y="30" width="10" height="6" stroke="currentColor" strokeWidth="1.5" />
          <path d="M11 30V22M11 22l10-4M21 18l8 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          <circle cx="11" cy="22" r="2" fill="currentColor" />
          <circle cx="21" cy="18" r="2" fill="currentColor" />
          <path d="M29 24l3-3M29 24l3 3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        </svg>
      );

    // Each of these echoes the same motif the field's full illustration uses
    // in FieldIllustration.tsx — a cooling tower for nuclear, a derrick for
    // petroleum, a wafer for semiconductor — so the small mark and the big
    // drawing read as the same field rather than two unrelated pictures.
    case "nuclear-engineering":
      return (
        <svg viewBox="0 0 40 40" fill="none" aria-hidden="true" className={className}>
          <path
            d="M12 34c-2-8 2-11 4-13-2-2-4-6-2-13h12c2 7 0 11-2 13 2 2 6 5 4 13Z"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinejoin="round"
          />
          <path d="M7 34h26" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        </svg>
      );

    case "petroleum-engineering":
      return (
        <svg viewBox="0 0 40 40" fill="none" aria-hidden="true" className={className}>
          <path d="M10 33 20 9l10 24" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
          <path d="M14 25h12M16 19h8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
          <rect x="16" y="5" width="8" height="4" stroke="currentColor" strokeWidth="1.5" />
          <path d="M6 33h28" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        </svg>
      );

    case "agricultural-engineering":
      return (
        <svg viewBox="0 0 40 40" fill="none" aria-hidden="true" className={className}>
          <path d="M6 10h28" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
          <path d="M14 10v5M26 10v5" stroke="currentColor" strokeWidth="1.5" strokeDasharray="2 2" strokeLinecap="round" />
          <path d="M14 33v-7M26 33v-7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
          <path d="M14 26c-4-2-5-6-3-9 3 2 4 5 3 9Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
          <path d="M26 26c4-2 5-6 3-9-3 2-4 5-3 9Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
          <path d="M6 33h28" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        </svg>
      );

    case "marine-engineering":
      return (
        <svg viewBox="0 0 40 40" fill="none" aria-hidden="true" className={`${className} transition-transform duration-500 group-hover:-translate-y-0.5`}>
          <path d="M6 22h26l-3 8H13c-4.5 0-7-3-7-8Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
          <rect x="15" y="13" width="10" height="9" stroke="currentColor" strokeWidth="1.5" />
          <path d="M5 34q3-2 6 0t6 0 6 0 6 0" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        </svg>
      );

    case "architectural-engineering":
      return (
        <svg viewBox="0 0 40 40" fill="none" aria-hidden="true" className={className}>
          <rect x="9" y="6" width="22" height="28" stroke="currentColor" strokeWidth="1.5" />
          <path d="M9 15h22M9 24h22" stroke="currentColor" strokeWidth="1.5" />
          <path d="M25 6v28" stroke="currentColor" strokeWidth="1.5" />
          <path d="M25 19h-7M25 29h-5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        </svg>
      );

    case "automotive-engineering":
      return (
        <svg viewBox="0 0 40 40" fill="none" aria-hidden="true" className={`${className} transition-transform duration-500 group-hover:translate-x-0.5`}>
          <path d="M4 30v-6l5-1 5-8h12l5 8 5 1v6" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
          <circle cx="13" cy="30" r="4" stroke="currentColor" strokeWidth="1.5" />
          <circle cx="27" cy="30" r="4" stroke="currentColor" strokeWidth="1.5" />
          <path d="M4 30h5M17 30h6M31 30h5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        </svg>
      );

    case "manufacturing-engineering":
      return (
        <svg viewBox="0 0 40 40" fill="none" aria-hidden="true" className={className}>
          <rect x="15" y="8" width="10" height="4" stroke="currentColor" strokeWidth="1.5" />
          <path d="M20 12v4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
          <rect x="14" y="16" width="12" height="10" stroke="currentColor" strokeWidth="1.5" />
          <path d="M5 26h30" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
          <circle cx="11" cy="30" r="3" stroke="currentColor" strokeWidth="1.5" />
          <circle cx="20" cy="30" r="3" stroke="currentColor" strokeWidth="1.5" />
          <circle cx="29" cy="30" r="3" stroke="currentColor" strokeWidth="1.5" />
        </svg>
      );

    case "systems-engineering":
      return (
        <svg viewBox="0 0 40 40" fill="none" aria-hidden="true" className={className}>
          <circle cx="20" cy="20" r="5" stroke="currentColor" strokeWidth="1.5" />
          <rect x="4" y="6" width="9" height="7" stroke="currentColor" strokeWidth="1.5" />
          <rect x="27" y="6" width="9" height="7" stroke="currentColor" strokeWidth="1.5" />
          <rect x="4" y="27" width="9" height="7" stroke="currentColor" strokeWidth="1.5" />
          <rect x="27" y="27" width="9" height="7" stroke="currentColor" strokeWidth="1.5" />
          <path d="M13 12.5l3.5 4M27 12.5l-3.5 4M13 27.5l3.5-4M27 27.5l-3.5-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        </svg>
      );

    case "structural-engineering":
      return (
        <svg viewBox="0 0 40 40" fill="none" aria-hidden="true" className={className}>
          <path d="M9 6v28M31 6v28M9 6h22M9 20h22M9 34h22" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
          <path d="M9 20l22 14M31 20 9 34" stroke="currentColor" strokeWidth="1.2" opacity="0.55" />
        </svg>
      );

    case "energy-engineering":
      return (
        <svg viewBox="0 0 40 40" fill="none" aria-hidden="true" className={className}>
          <path d="M20 34V18" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
          <circle cx="20" cy="17" r="2" stroke="currentColor" strokeWidth="1.5" />
          <path d="M20 15V5M22 18.5l9 5M18 18.5l-9 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
          <path d="M13 34h14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        </svg>
      );

    case "semiconductor-engineering":
      return (
        <svg viewBox="0 0 40 40" fill="none" aria-hidden="true" className={className}>
          <path d="M6 20a14 14 0 1 1 10.2 13.5l-2.4-4.3" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
          <rect x="15" y="15" width="10" height="10" stroke="currentColor" strokeWidth="1.5" />
          <path d="M25 20h6M9 20h6M20 15V9M20 25v6" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" opacity="0.7" />
        </svg>
      );

    default:
      // A generic technical/engineering glyph for fields that don't have bespoke
      // art yet — so a new field only needs a data.ts entry to render correctly.
      return (
        <svg viewBox="0 0 40 40" fill="none" aria-hidden="true" className={className}>
          <path d="M20 4l14 8v16l-14 8-14-8V12z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
          <path d="M20 14l7 4v8l-7 4-7-4v-8z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
        </svg>
      );
  }
}
