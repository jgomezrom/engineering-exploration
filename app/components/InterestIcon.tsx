type InterestIconProps = {
  slug: string;
  className?: string;
};

export default function InterestIcon({ slug, className = "h-5 w-5" }: InterestIconProps) {
  switch (slug) {
    case "cars":
      return (
        <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" className={className}>
          <path d="M4 15l1.4-4.5A2 2 0 0 1 7.3 9h9.4a2 2 0 0 1 1.9 1.5L20 15" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          <rect x="3" y="15" width="18" height="4" rx="1" stroke="currentColor" strokeWidth="1.5" />
          <circle cx="7.5" cy="19" r="1.3" stroke="currentColor" strokeWidth="1.5" />
          <circle cx="16.5" cy="19" r="1.3" stroke="currentColor" strokeWidth="1.5" />
        </svg>
      );
    case "space":
      return (
        <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" className={className}>
          <path d="M12 3c2.3 2.8 3.3 6.4 3.3 10.5h-6.6C8.7 9.4 9.7 5.8 12 3Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
          <circle cx="12" cy="9" r="1.2" stroke="currentColor" strokeWidth="1.5" />
          <path d="M8.5 17l-2 3h1.5M15.5 17l2 3h-1.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      );
    case "robots":
      return (
        <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" className={className}>
          <rect x="6" y="9" width="12" height="9" rx="2" stroke="currentColor" strokeWidth="1.5" />
          <path d="M12 9V6.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
          <circle cx="12" cy="4.8" r="1.1" stroke="currentColor" strokeWidth="1.5" />
          <circle cx="9.5" cy="13.2" r="1" fill="currentColor" />
          <circle cx="14.5" cy="13.2" r="1" fill="currentColor" />
          <path d="M6 12.5H3.5M20.5 12.5H18" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        </svg>
      );
    case "medicine":
      return (
        <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" className={className}>
          <circle cx="12" cy="12" r="8.3" stroke="currentColor" strokeWidth="1.5" />
          <path d="M12 8v8M8 12h8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        </svg>
      );
    case "video-games":
      return (
        <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" className={className}>
          <path d="M7 9.5h10a3 3 0 0 1 2.95 3.5l-.5 2.8a2 2 0 0 1-3.4.9L14.5 15h-5l-1.55 1.7a2 2 0 0 1-3.4-.9l-.5-2.8A3 3 0 0 1 7 9.5Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
          <path d="M8.5 11.5v2.2M7.4 12.6h2.2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
          <circle cx="16" cy="11.8" r="0.8" fill="currentColor" />
          <circle cx="17.3" cy="13.4" r="0.8" fill="currentColor" />
        </svg>
      );
    case "buildings":
      return (
        <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" className={className}>
          <path d="M5 20V9.5L9.5 7l4.5 2.5V20" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
          <path d="M14 20v-6.5l5-1.8V20" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
          <path d="M7.5 12h4M7.5 15.5h4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
          <path d="M3 20h18" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        </svg>
      );
    case "climate":
      return (
        <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" className={className}>
          <path d="M12 4.5c3.3 3 4.3 6.3 3 9.3a3.6 3.6 0 0 1-6.6-2.1c0-2.6 1.6-4.9 3.6-7.2Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
          <path d="M12 12v6.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        </svg>
      );
    case "computers":
      return (
        <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" className={className}>
          <rect x="3.5" y="5" width="17" height="11" rx="1.3" stroke="currentColor" strokeWidth="1.5" />
          <path d="M9 20h6M12 16v4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        </svg>
      );
    case "electronics":
      return (
        <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" className={className}>
          <path d="M3.5 12h3l1.5-4.5 3 9 1.5-4.5h7.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      );
    case "design":
      return (
        <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" className={className}>
          <path d="M15.2 4.8 19.2 8.8 9.4 18.6H5.4v-4L15.2 4.8Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
          <path d="M12.8 7.2l4 4" stroke="currentColor" strokeWidth="1.5" />
        </svg>
      );
    case "machines":
      return (
        <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" className={className}>
          <circle cx="12" cy="12" r="3" stroke="currentColor" strokeWidth="1.5" />
          <path d="M12 4.2v2.3M12 17.5v2.3M4.2 12h2.3M17.5 12h2.3M6.5 6.5l1.6 1.6M15.9 15.9l1.6 1.6M6.5 17.5l1.6-1.6M15.9 8.1l1.6-1.6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        </svg>
      );
    case "energy":
      return (
        <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" className={className}>
          <path d="M13 3 5.5 13h4.7l-1 8L18 11h-4.7l0.7-8Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
        </svg>
      );
    case "transportation":
      return (
        <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" className={className}>
          <path d="M4 8.5 12 4l8 4.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M6 9v10M18 9v10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
          <path d="M4 19h16" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
          <path d="M6 13.5h12" stroke="currentColor" strokeWidth="1.5" strokeDasharray="2 2" />
        </svg>
      );
    case "manufacturing":
      return (
        <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" className={className}>
          <path d="M4 19.5V12l4 2.7V12l4 2.7V12l4 2.7V9h4v10.5H4Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
          <circle cx="18" cy="6.5" r="1" fill="currentColor" />
        </svg>
      );
    default:
      return (
        <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" className={className}>
          <circle cx="12" cy="12" r="8" stroke="currentColor" strokeWidth="1.5" />
        </svg>
      );
  }
}
