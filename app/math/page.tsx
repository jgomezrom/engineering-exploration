import type { Metadata } from "next";
import MathContent from "../components/MathContent";

const title = "Do I Have to Be Good at Math? | Engineering Exploration";
const description =
  "An honest answer, plus a real course roadmap — what classes to take in middle and high school, AP and IB options, what matters most per field, and where to find extra help.";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: "/math" },
  openGraph: { title, description, url: "/math", images: "/opengraph-image" },
  twitter: { title, description, images: "/opengraph-image" },
};

export default function MathPage() {
  return <MathContent />;
}
