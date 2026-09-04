import type { Metadata } from "next";
import GearContent from "../../components/GearContent";

export const metadata: Metadata = {
  title: "Gear Ratio Simulator | Engineering Exploration",
  description:
    "Resize two meshing gears and watch the exact trade-off between speed and torque play out in real time, with the math explained.",
};

export default function GearPage() {
  return <GearContent />;
}
