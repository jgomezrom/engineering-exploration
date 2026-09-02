type FieldIconProps = {
  slug: string;
  className?: string;
};

export default function FieldIcon({ slug, className = "h-10 w-10" }: FieldIconProps) {
  switch (slug) {
    case "mechanical-engineering":
      return (
        <svg viewBox="0 0 40 40" fill="none" className={`${className} transition-transform duration-500 group-hover:rotate-45`}>
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
        <svg viewBox="0 0 40 40" fill="none" className={className}>
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
        <svg viewBox="0 0 40 40" fill="none" className={`${className} transition-transform duration-500 group-hover:-translate-y-0.5`}>
          <path d="M6 32h28M9 32V16l11-8 11 8v16" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
          <path d="M14 32V20M20 32V20M26 32V20" stroke="currentColor" strokeWidth="1.5" />
        </svg>
      );

    case "biomedical-engineering":
      return (
        <svg viewBox="0 0 40 40" fill="none" className={className}>
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
        <svg viewBox="0 0 40 40" fill="none" className={className}>
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

    default:
      return (
        <svg viewBox="0 0 40 40" fill="none" className={className}>
          <circle cx="20" cy="20" r="14" stroke="currentColor" strokeWidth="1.5" />
        </svg>
      );
  }
}
