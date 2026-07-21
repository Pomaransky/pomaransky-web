import { ImageResponse } from "next/og";
import { LogoIcon, logo } from "@/components";

export const size = {
  width: logo.width,
  height: logo.height,
};

export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(<LogoIcon />, { ...size });
}
