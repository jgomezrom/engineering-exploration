import type { Metadata } from "next";
import TrussGameContent from "../../components/TrussGameContent";

const title = "Bridge Builder: a Truss Design Game | Engineering Exploration";
const description =
  "Design a steel truss bridge, load it, and see which member fails first. Five levels, solved with the same stiffness method real structural software uses.";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: "/simulations/bridge-builder" },
  openGraph: { title, description, url: "/simulations/bridge-builder", images: "/opengraph-image" },
  twitter: { title, description, images: "/opengraph-image" },
};

export default function BridgeBuilderPage() {
  return <TrussGameContent />;
}
