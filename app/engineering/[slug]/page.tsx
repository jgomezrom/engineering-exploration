import type { Metadata } from "next";
import { notFound } from "next/navigation";
import FieldPageContent from "../../components/FieldPageContent";
import { fields } from "../../data/fields";
import { fieldStubs } from "../../data/fieldStubs";
import { FieldSlug } from "../../data/types";

export function generateStaticParams() {
  return [...fields.map((field) => ({ slug: field.slug })), ...fieldStubs.map((stub) => ({ slug: stub.slug }))];
}

export async function generateMetadata(
  props: PageProps<"/engineering/[slug]">
): Promise<Metadata> {
  const { slug } = await props.params;
  const field = fields.find((f) => f.slug === slug) ?? fieldStubs.find((s) => s.slug === slug);

  if (!field) {
    return { title: "Field Not Found" };
  }

  const title = `${field.name} | Engineering Exploration`;
  const description = field.tagline;

  return {
    title,
    description,
    alternates: { canonical: `/engineering/${slug}` },
    openGraph: { title, description, url: `/engineering/${slug}`, images: "/opengraph-image" },
    twitter: { title, description, images: "/opengraph-image" },
  };
}

export default async function EngineeringFieldPage(props: PageProps<"/engineering/[slug]">) {
  const { slug } = await props.params;
  const exists = fields.some((f) => f.slug === slug) || fieldStubs.some((s) => s.slug === slug);

  if (!exists) {
    notFound();
  }

  return <FieldPageContent slug={slug as FieldSlug} />;
}
