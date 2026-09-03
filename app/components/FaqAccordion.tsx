"use client";

import { useState } from "react";
import { FaqItem } from "../data/faq";

function AccordionRow({
  item,
  isOpen,
  onToggle,
}: {
  item: FaqItem;
  isOpen: boolean;
  onToggle: () => void;
}) {
  return (
    <div className="border-b border-neutral-900/10 dark:border-white/10">
      <button
        type="button"
        onClick={onToggle}
        aria-expanded={isOpen}
        className="flex w-full items-center justify-between gap-4 py-5 text-left"
      >
        <span className="font-medium text-neutral-900 dark:text-white">{item.question}</span>
        <svg
          viewBox="0 0 16 16"
          fill="none"
          aria-hidden="true"
          className={`h-4 w-4 flex-shrink-0 text-neutral-500 transition-transform motion-reduce:transition-none dark:text-neutral-400 ${
            isOpen ? "rotate-180" : ""
          }`}
        >
          <path d="M3 6l5 5 5-5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </button>
      {isOpen && (
        <div className="max-w-2xl pb-5 pr-8 text-sm leading-relaxed text-neutral-600 dark:text-neutral-400">
          {item.answer}
        </div>
      )}
    </div>
  );
}

export default function FaqAccordion({ items }: { items: FaqItem[] }) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <div className="border-t border-neutral-900/10 dark:border-white/10">
      {items.map((item, i) => (
        <AccordionRow
          key={item.question}
          item={item}
          isOpen={openIndex === i}
          onToggle={() => setOpenIndex(openIndex === i ? null : i)}
        />
      ))}
    </div>
  );
}
