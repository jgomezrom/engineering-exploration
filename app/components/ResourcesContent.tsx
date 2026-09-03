"use client";

import Link from "next/link";
import Card from "./Card";
import FadeIn from "./FadeIn";
import { resourceLinks } from "../data/resourceLinks";
import { useLanguage } from "../context/LanguageContext";
import { resourcesTranslations, resourceLinksEs } from "../data/translations/resources";

export default function ResourcesContent() {
  const { language } = useLanguage();
  const t = resourcesTranslations[language];

  return (
    <main className="mx-auto max-w-5xl px-6 py-16 xl:max-w-6xl">
      <span className="mb-4 inline-block rounded-full bg-neutral-100 px-4 py-1 text-sm font-medium text-neutral-600 dark:bg-neutral-900 dark:text-neutral-400">
        {t.badge}
      </span>

      <h1 className="text-3xl font-bold text-neutral-900 dark:text-white xl:text-4xl">{t.heading}</h1>
      <p className="mt-2 max-w-xl text-neutral-600 dark:text-neutral-400">{t.intro}</p>

      <FadeIn className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {resourceLinks.map((resource) => {
          const localized = language === "es" ? resourceLinksEs[resource.href] : undefined;
          return (
            <Link key={resource.href} href={resource.href}>
              <Card>
                <div
                  className={`inline-flex h-14 w-14 items-center justify-center rounded-full ${
                    resource.accentColor === "accent" ? "bg-accent/10 text-accent" : "bg-primary/10 text-primary"
                  }`}
                >
                  {resource.icon}
                </div>
                <h2 className="mt-4 text-lg font-semibold text-neutral-900 dark:text-white">
                  {localized?.title ?? resource.title}
                </h2>
                <p className="mt-2 text-sm text-neutral-600 dark:text-neutral-400">
                  {localized?.description ?? resource.description}
                </p>
              </Card>
            </Link>
          );
        })}
      </FadeIn>
    </main>
  );
}
