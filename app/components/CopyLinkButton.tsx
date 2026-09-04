"use client";

import { useState } from "react";
import { useLanguage } from "../context/LanguageContext";

const LABELS = {
  en: { copyLink: "Copy shareable link", copied: "Link copied!" },
  es: { copyLink: "Copiar enlace para compartir", copied: "¡Enlace copiado!" },
};

export default function CopyLinkButton() {
  const { language } = useLanguage();
  const t = LABELS[language];
  const [copied, setCopied] = useState(false);

  async function handleClick() {
    try {
      await navigator.clipboard.writeText(window.location.href);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // Clipboard access can be blocked (permissions, insecure context) —
      // the feature just won't confirm; nothing else to fall back to.
    }
  }

  return (
    <button
      type="button"
      onClick={handleClick}
      className="print:hidden flex items-center gap-2 border border-neutral-900/10 px-3 py-1.5 text-xs font-medium text-neutral-600 transition-colors hover:border-primary/40 hover:text-primary dark:border-white/10 dark:text-neutral-400"
    >
      <svg viewBox="0 0 20 20" fill="none" aria-hidden="true" className="h-3.5 w-3.5">
        <path
          d="M8 12a3 3 0 0 0 4.5.3l2-2a3 3 0 0 0-4.2-4.2l-1.1 1.1M12 8a3 3 0 0 0-4.5-.3l-2 2a3 3 0 0 0 4.2 4.2l1.1-1.1"
          stroke="currentColor"
          strokeWidth="1.4"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
      {copied ? t.copied : t.copyLink}
    </button>
  );
}
