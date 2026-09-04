import type { Metadata } from "next";
import PendulumContent from "../../components/PendulumContent";

const title = "Pendulum Simulator | Engineering Exploration";
const description =
  "Adjust a pendulum's length and release angle and watch its period respond in real time — and see why mass never enters the equation.";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: "/simulations/pendulum" },
  openGraph: { title, description, url: "/simulations/pendulum", images: "/opengraph-image" },
  twitter: { title, description, images: "/opengraph-image" },
};

export default function PendulumPage() {
  return <PendulumContent />;
}
