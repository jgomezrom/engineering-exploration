"use client";

import Link from "next/link";
import { useLanguage } from "../context/LanguageContext";
import { chromeTranslations } from "../data/translations/chrome";

export default function BackLink({
  href,
  labelKey,
}: {
  href: string;
  labelKey: "backToFields" | "backToChallenges";
}) {
  const { language } = useLanguage();
  const t = chromeTranslations[language];

  return (
    <Link href={href} className="text-sm font-medium text-primary hover:underline">
      {t[labelKey]}
    </Link>
  );
}
