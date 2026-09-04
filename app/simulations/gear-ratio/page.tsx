import type { Metadata } from "next";
import GearContent from "../../components/GearContent";

const title = "Gear Ratio Simulator | Engineering Exploration";
const description =
  "Resize two meshing gears and watch the exact trade-off between speed and torque play out in real time, with the math explained.";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: "/simulations/gear-ratio" },
  openGraph: { title, description, url: "/simulations/gear-ratio", images: "/opengraph-image" },
  twitter: { title, description, images: "/opengraph-image" },
};

export default function GearPage() {
  return <GearContent />;
}
