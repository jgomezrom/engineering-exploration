import type { Metadata } from "next";
import PendulumContent from "../../components/PendulumContent";

export const metadata: Metadata = {
  title: "Pendulum Simulator | Engineering Exploration",
  description:
    "Adjust a pendulum's length and release angle and watch its period respond in real time — and see why mass never enters the equation.",
};

export default function PendulumPage() {
  return <PendulumContent />;
}
