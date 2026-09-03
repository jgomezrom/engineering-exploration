import type { Metadata } from "next";
import { notFound } from "next/navigation";
import ChallengeDetailContent from "../../components/ChallengeDetailContent";
import { challenges } from "../../data/challenges";

export function generateStaticParams() {
  return challenges.map((challenge) => ({ slug: challenge.slug }));
}

export async function generateMetadata(
  props: PageProps<"/challenges/[slug]">
): Promise<Metadata> {
  const { slug } = await props.params;
  const challenge = challenges.find((c) => c.slug === slug);

  if (!challenge) {
    return { title: "Challenge Not Found" };
  }

  return {
    title: `${challenge.title} | Engineering Exploration`,
    description: challenge.tagline,
  };
}

export default async function ChallengePage(props: PageProps<"/challenges/[slug]">) {
  const { slug } = await props.params;
  const challenge = challenges.find((c) => c.slug === slug);

  if (!challenge) {
    notFound();
  }

  return <ChallengeDetailContent slug={slug} />;
}
