import type { Metadata } from "next";
import BeamContent from "../../components/BeamContent";

export const metadata: Metadata = {
  title: "Beam Load & Deflection Simulator | Engineering Exploration",
  description:
    "Move a load along a beam and change its stiffness to see what actually makes a structure bend or hold, with the real beam-deflection math explained.",
};

export default function BeamPage() {
  return <BeamContent />;
}
