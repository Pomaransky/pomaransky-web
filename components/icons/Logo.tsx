export const logo = {
  width: 40,
  height: 40,
  rx: 8,
  favicon: {
    background: "#18181b",
    color: "#fafafa",
  },
} as const;

type LogoMarkProps = {
  background: string;
  foreground: string;
  className?: string;
  width?: number | string;
  height?: number | string;
};

export function LogoMark({
  background,
  foreground,
  className,
  width = "100%",
  height = "100%",
}: LogoMarkProps) {
  return (
    <svg
      viewBox={`0 0 ${logo.width} ${logo.height}`}
      width={width}
      height={height}
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden
    >
      <rect
        width={logo.width}
        height={logo.height}
        rx={logo.rx}
        fill={background}
      />
      <g fill={foreground} fillRule="evenodd">
        <path d="M5 6.2 H27 C33.8 6.2 37 11 37 17 C37 23 33.8 27 27 27 H21.6 V34.2 H15.8 V15 H21.6 V11.6 H9.4 L5 6.2 Z M21.6 11.6 H25.8 C29.6 11.6 31.4 14 31.4 17 C31.4 20 29.6 22.2 25.8 22.2 H21.6 Z" />
      </g>
    </svg>
  );
}

export function LogoIcon() {
  return (
    <LogoMark
      background={logo.favicon.background}
      foreground={logo.favicon.color}
    />
  );
}

type LogoProps = {
  className?: string;
};

export default function Logo({ className }: LogoProps) {
  return (
    <LogoMark
      className={className}
      background="var(--foreground)"
      foreground="var(--background)"
    />
  );
}
