import type { Metadata } from "next";
import LeverTorqueContent from "../../components/LeverTorqueContent";

const title = "Lever & Torque Simulator | Engineering Exploration";
const description =
  "Drag two weights along a lever and watch it balance in real time — an interactive way to see how torque, not just weight, determines whether a lever tips.";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: "/simulations/lever-torque" },
  openGraph: { title, description, url: "/simulations/lever-torque", images: "/opengraph-image" },
  twitter: { title, description, images: "/opengraph-image" },
};

export default function LeverTorquePage() {
  return <LeverTorqueContent />;
}
