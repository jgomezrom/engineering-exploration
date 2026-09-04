import { ImageResponse } from "next/og";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";
export const alt = "Engineering Exploration — an honest, no-hype guide to what engineers actually do";

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "#fafaf8",
          position: "relative",
        }}
      >
        <div
          style={{
            display: "flex",
            position: "absolute",
            top: 48,
            left: 48,
            width: 44,
            height: 44,
            borderLeft: "4px solid #0d8087",
            borderTop: "4px solid #0d8087",
          }}
        />
        <div
          style={{
            display: "flex",
            position: "absolute",
            top: 48,
            right: 48,
            width: 44,
            height: 44,
            borderRight: "4px solid #0d8087",
            borderTop: "4px solid #0d8087",
          }}
        />
        <div
          style={{
            display: "flex",
            position: "absolute",
            bottom: 48,
            left: 48,
            width: 44,
            height: 44,
            borderLeft: "4px solid #0d8087",
            borderBottom: "4px solid #0d8087",
          }}
        />
        <div
          style={{
            display: "flex",
            position: "absolute",
            bottom: 48,
            right: 48,
            width: 44,
            height: 44,
            borderRight: "4px solid #0d8087",
            borderBottom: "4px solid #0d8087",
          }}
        />

        <div style={{ display: "flex", alignItems: "center", marginBottom: 32 }}>
          <div style={{ display: "flex", width: 10, height: 28, backgroundColor: "#b25709", marginRight: 18 }} />
          <div style={{ display: "flex", fontSize: 22, letterSpacing: 6, color: "#52525b", textTransform: "uppercase" }}>
            For Curious Minds
          </div>
        </div>

        <div style={{ display: "flex", fontSize: 76, fontWeight: 700, color: "#18181b", textAlign: "center" }}>
          Engineering Exploration
        </div>

        <div style={{ display: "flex", fontSize: 30, color: "#52525b", marginTop: 24, textAlign: "center", maxWidth: 880 }}>
          Real engineering, no hype — 23 fields, honest tradeoffs, hands-on challenges
        </div>
      </div>
    ),
    { ...size }
  );
}
