import { ImageResponse } from "next/og";
import { LogoMark } from "@/components";

export const alt = "Pomaransky";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#fafafa",
        }}
      >
        <LogoMark width={280} height={280} />
      </div>
    ),
    { ...size }
  );
}
