"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import type { Figure } from "../data/figures";
import { localizeFigure } from "../data/figures";
import { useLanguage } from "../context/LanguageContext";

// The same plate frame as PlateFigure, but cycling through several figures so
// the page isn't identical on a repeat visit. The motion is a slow crossfade
// only — no sliding, no zoom — and it stops whenever the reader is actually
// engaging with it (pointer over it, or keyboard focus inside it), so it can't
// swap the picture out from under someone reading the caption.
//
// Readers who ask for reduced motion get no automatic advance at all and no
// fade; the numbered buttons still work, so the other plates stay reachable.
export default function PlateRotator({
  plates,
  index,
  ratio = "aspect-[21/9]",
  intervalMs = 7000,
}: {
  plates: Figure[];
  index: string;
  ratio?: string;
  intervalMs?: number;
}) {
  const { language } = useLanguage();
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);
  const [autoplay, setAutoplay] = useState(false);

  // Autoplay is opt-in per reader: it only ever turns on for someone who has
  // not asked for reduced motion. Checked in an effect rather than at render
  // so the server and first client render agree.
  useEffect(() => {
    const query = window.matchMedia("(prefers-reduced-motion: reduce)");
    const sync = () => setAutoplay(!query.matches);
    sync();
    query.addEventListener("change", sync);
    return () => query.removeEventListener("change", sync);
  }, []);

  useEffect(() => {
    if (!autoplay || paused || plates.length < 2) return;
    const timer = setInterval(() => {
      setActive((current) => (current + 1) % plates.length);
    }, intervalMs);
    return () => clearInterval(timer);
  }, [autoplay, paused, plates.length, intervalMs]);

  const current = plates[active];
  const currentText = localizeFigure(current, language);

  return (
    <figure
      className="border border-neutral-900/15 dark:border-white/15"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocusCapture={() => setPaused(true)}
      onBlurCapture={() => setPaused(false)}
    >
      <div className={`relative ${ratio} overflow-hidden bg-neutral-100 dark:bg-neutral-900`}>
        {plates.map((plate, i) => (
          <Image
            key={plate.src}
            src={plate.src}
            // Only the visible plate carries its description; the rest are
            // stacked underneath and would otherwise be read out as well.
            alt={i === active ? localizeFigure(plate, language).alt : ""}
            aria-hidden={i !== active}
            fill
            sizes="(min-width: 1024px) 1024px, 100vw"
            priority={i === 0}
            className={`object-cover transition-opacity duration-1000 ease-in-out motion-reduce:transition-none ${
              i === active ? "opacity-100" : "opacity-0"
            }`}
          />
        ))}
      </div>

      <figcaption className="flex flex-wrap items-baseline gap-x-4 gap-y-1 border-t border-neutral-900/15 px-4 py-2.5 dark:border-white/15">
        <span className="font-mono text-[11px] font-medium uppercase tracking-widest text-primary">
          FIG. {index}
        </span>

        {/* Deliberately not an aria-live region: the caption changes on its own
            every few seconds, and announcing each change would interrupt the
            reader repeatedly for something purely illustrative. */}
        <span className="min-w-0 flex-1 text-xs leading-relaxed text-neutral-600 dark:text-neutral-400">
          {currentText.caption}
        </span>

        {plates.length > 1 && (
          <span className="flex items-center gap-1">
            {plates.map((plate, i) => (
              <button
                key={plate.src}
                type="button"
                onClick={() => setActive(i)}
                aria-label={
                  language === "es"
                    ? `Mostrar lámina ${i + 1} de ${plates.length}`
                    : `Show plate ${i + 1} of ${plates.length}`
                }
                aria-current={i === active}
                className="group px-1 py-2"
              >
                <span
                  className={`block h-[3px] w-6 transition-colors ${
                    i === active
                      ? "bg-primary"
                      : "bg-neutral-900/20 group-hover:bg-primary/50 dark:bg-white/25"
                  }`}
                />
              </button>
            ))}
          </span>
        )}

        <a
          href={current.sourceUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="font-mono text-[10px] uppercase tracking-widest text-neutral-400 hover:text-primary dark:text-neutral-600"
        >
          {current.credit}
        </a>
      </figcaption>
    </figure>
  );
}
