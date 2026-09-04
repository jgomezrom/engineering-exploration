import type { Metadata } from "next";
import BuoyancyContent from "../../components/BuoyancyContent";

const title = "Buoyancy & Density Simulator | Engineering Exploration";
const description =
  "Figure out why a solid block sinks but the same material, shaped into a hull, floats — adjust density and shape and watch it settle in real time.";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: "/simulations/buoyancy" },
  openGraph: { title, description, url: "/simulations/buoyancy", images: "/opengraph-image" },
  twitter: { title, description, images: "/opengraph-image" },
};

export default function BuoyancyPage() {
  return <BuoyancyContent />;
}
