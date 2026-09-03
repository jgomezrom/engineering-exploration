"use client";

import Link from "next/link";
import Card from "./Card";
import FieldIcon from "./FieldIcon";
import { useExploration } from "../hooks/useExploration";
import { FieldSlug } from "../data/types";

type FieldSummary = { slug: FieldSlug; name: string; tagline: string };

export default function BookmarkedFields({ allFields }: { allFields: FieldSummary[] }) {
  const { hydrated, bookmarks } = useExploration();
  const bookmarkedFields = allFields.filter((f) => bookmarks.includes(f.slug));

  if (!hydrated || bookmarkedFields.length === 0) return null;

  return (
    <div className="mb-16 border-b border-neutral-900/10 pb-16 dark:border-white/10">
      <h2 className="text-lg font-semibold text-neutral-900 dark:text-white">Your Bookmarked Fields</h2>
      <p className="mt-1 max-w-xl text-sm text-neutral-600 dark:text-neutral-400">
        Saved in this browser only — see{" "}
        <Link href="/parents-and-teachers" className="text-primary hover:underline">
          Parents &amp; Teachers
        </Link>{" "}
        for exactly what that means.
      </p>
      <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {bookmarkedFields.map((field) => (
          <Link key={field.slug} href={`/engineering/${field.slug}`}>
            <Card>
              <FieldIcon slug={field.slug} className="h-8 w-8 text-primary" />
              <h3 className="mt-4 text-base font-semibold text-neutral-900 dark:text-white">{field.name}</h3>
              <p className="mt-2 text-sm text-neutral-600 dark:text-neutral-400">{field.tagline}</p>
            </Card>
          </Link>
        ))}
      </div>
    </div>
  );
}
