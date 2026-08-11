import { ImageResponse } from "next/og";

export const alt = "Pintos Tattoo & Piercing — Tu idea no viene en catálogo";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    <div
      style={{
        width: "100%",
        height: "100%",
        padding: "56px 64px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        background: "#ff4b2b",
        color: "#11100e",
        fontFamily: "Arial, sans-serif",
      }}
    >
      <div style={{ display: "flex", justifyContent: "space-between", fontSize: 24, fontWeight: 800 }}>
        <span>PINTOS®</span><span>TATTOO + PIERCING · BARCELONA</span>
      </div>
      <div style={{ display: "flex", flexDirection: "column", fontSize: 112, fontWeight: 900, lineHeight: .82, letterSpacing: "-7px" }}>
        <span>TU IDEA NO VIENE</span><span>EN CATÁLOGO.</span>
      </div>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", fontSize: 24, fontWeight: 800 }}>
        <span>COMTE D’URGELL, 59</span><span style={{ padding: "14px 20px", background: "#11100e", color: "#d8ff36" }}>5,0 / 5</span>
      </div>
    </div>,
    size,
  );
}
