import Image from "next/image";
import type { Figure } from "../data/figures";

// A public-domain photograph or measured drawing presented the way a plate is
// presented in a technical document: framed, numbered, captioned, credited.
// `fit` is "cover" for photographs used as a wide band and "contain" for
// drawing sheets, which have to be seen whole to read at all.
export default function PlateFigure({
  figure,
  index,
  ratio = "aspect-[21/9]",
  fit = "cover",
  priority = false,
}: {
  figure: Figure;
  index: string;
  ratio?: string;
  fit?: "cover" | "contain";
  priority?: boolean;
}) {
  return (
    <figure className="border border-neutral-900/15 dark:border-white/15">
      <div className={`relative ${ratio} overflow-hidden bg-neutral-100 dark:bg-neutral-900`}>
        <Image
          src={figure.src}
          alt={figure.alt}
          fill
          sizes="(min-width: 1024px) 1024px, 100vw"
          priority={priority}
          className={fit === "cover" ? "object-cover" : "object-contain"}
        />
      </div>
      <figcaption className="flex flex-wrap items-baseline gap-x-4 gap-y-1 border-t border-neutral-900/15 px-4 py-2.5 dark:border-white/15">
        <span className="font-mono text-[11px] font-medium uppercase tracking-widest text-primary">FIG. {index}</span>
        <span className="min-w-0 flex-1 text-xs leading-relaxed text-neutral-600 dark:text-neutral-400">
          {figure.caption}
        </span>
        <a
          href={figure.sourceUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="font-mono text-[10px] uppercase tracking-widest text-neutral-400 hover:text-primary dark:text-neutral-600"
        >
          {figure.credit}
        </a>
      </figcaption>
    </figure>
  );
}
