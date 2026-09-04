import type { Metadata } from "next";
import BuoyancyContent from "../../components/BuoyancyContent";

export const metadata: Metadata = {
  title: "Buoyancy & Density Simulator | Engineering Exploration",
  description:
    "Figure out why a solid block sinks but the same material, shaped into a hull, floats — adjust density and shape and watch it settle in real time.",
};

export default function BuoyancyPage() {
  return <BuoyancyContent />;
}
