"use client";

import { useState } from "react";
import { useLanguage } from "../context/LanguageContext";

const PLACEHOLDER: Record<"en" | "es", string> = {
  en: "Jot a thought if you want — this isn't saved or sent anywhere, it's just for you.",
  es: "Escribe un pensamiento si quieres — esto no se guarda ni se envía a ningún lado, es solo para ti.",
};

export default function ReflectionPrompt({ question }: { question: string }) {
  const { language } = useLanguage();
  const [reflection, setReflection] = useState("");

  return (
    <div className="border border-neutral-900/10 bg-neutral-50 p-5 dark:border-white/10 dark:bg-neutral-900">
      <h3 className="text-sm font-semibold text-neutral-900 dark:text-white">{question}</h3>
      <textarea
        value={reflection}
        onChange={(e) => setReflection(e.target.value)}
        placeholder={PLACEHOLDER[language]}
        rows={3}
        className="mt-3 w-full resize-none border border-neutral-900/10 bg-white p-3 text-sm text-neutral-900 placeholder:text-neutral-600/60 focus:border-primary focus:outline-none dark:border-white/10 dark:bg-neutral-950 dark:text-white dark:placeholder:text-neutral-400/60"
      />
    </div>
  );
}
