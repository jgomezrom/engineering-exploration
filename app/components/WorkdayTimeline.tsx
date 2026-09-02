import { WorkdayBlock } from "../data/types";

export default function WorkdayTimeline({ blocks }: { blocks: WorkdayBlock[] }) {
  return (
    <div className="flex flex-col">
      {blocks.map((block, i) => (
        <div key={block.label} className="flex gap-4">
          <div className="flex flex-col items-center">
            <span className="flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-primary/10 font-mono text-xs font-semibold text-primary">
              {i + 1}
            </span>
            {i < blocks.length - 1 && (
              <span className="w-px flex-1 bg-neutral-900/10 dark:bg-white/10" />
            )}
          </div>
          <div className={i < blocks.length - 1 ? "pb-6" : ""}>
            <h3 className="font-semibold text-neutral-900 dark:text-white">{block.label}</h3>
            <p className="mt-1 text-sm text-neutral-600 dark:text-neutral-400">{block.detail}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
