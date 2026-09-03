"use client";

import { useExploration } from "../hooks/useExploration";
import { FieldSlug } from "../data/types";

export default function BookmarkButton({ slug }: { slug: FieldSlug }) {
  const { hydrated, isBookmarked, toggleBookmark } = useExploration();
  // Render as "not bookmarked" until hydrated so this always matches the
  // server-rendered HTML on first paint — avoids a visible flip a moment later.
  const bookmarked = hydrated && isBookmarked(slug);

  return (
    <button
      type="button"
      aria-pressed={bookmarked}
      aria-label={bookmarked ? "Remove bookmark for this field" : "Bookmark this field"}
      onClick={() => toggleBookmark(slug)}
      className={`mt-6 inline-flex items-center gap-2 border px-4 py-2 text-sm font-medium transition-colors ${
        bookmarked
          ? "border-primary bg-primary/10 text-primary"
          : "border-neutral-900/10 text-neutral-600 hover:border-primary/40 dark:border-white/10 dark:text-neutral-400"
      }`}
    >
      <svg
        viewBox="0 0 20 20"
        fill={bookmarked ? "currentColor" : "none"}
        aria-hidden="true"
        className="h-4 w-4 flex-shrink-0"
      >
        <path
          d="M5 3.5A1.5 1.5 0 0 1 6.5 2h7A1.5 1.5 0 0 1 15 3.5v13.6a.5.5 0 0 1-.79.41L10 14.2l-4.21 3.3a.5.5 0 0 1-.79-.41V3.5Z"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinejoin="round"
        />
      </svg>
      {bookmarked ? "Bookmarked" : "Bookmark this field"}
    </button>
  );
}
