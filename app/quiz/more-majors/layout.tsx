import type { Metadata } from "next";

const title = "The Smaller Majors Quiz | Engineering Exploration";
const description =
  "An optional bonus round for seven easy-to-overlook fields — architectural, automotive, energy, manufacturing, semiconductor, structural, and systems engineering. A tally of interest, not a percentage match.";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: "/quiz/more-majors" },
  openGraph: { title, description, url: "/quiz/more-majors", images: "/opengraph-image" },
  twitter: { title, description, images: "/opengraph-image" },
};

export default function MoreMajorsQuizLayout({ children }: { children: React.ReactNode }) {
  return children;
}
