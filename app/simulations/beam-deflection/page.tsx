import type { Metadata } from "next";
import BeamContent from "../../components/BeamContent";

const title = "Beam Load & Deflection Simulator | Engineering Exploration";
const description =
  "Move a load along a beam and change its stiffness to see what actually makes a structure bend or hold, with the real beam-deflection math explained.";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: "/simulations/beam-deflection" },
  openGraph: { title, description, url: "/simulations/beam-deflection", images: "/opengraph-image" },
  twitter: { title, description, images: "/opengraph-image" },
};

export default function BeamPage() {
  return <BeamContent />;
}
