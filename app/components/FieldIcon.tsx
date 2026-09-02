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
