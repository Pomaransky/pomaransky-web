export const logo = {
  width: 40,
  height: 40,
  borderRadius: "20%",
  gradient: {
    from: "#0069a4",
    to: "#432dd7",
  },
  iconColor: "#fafafa",
} as const;

type LogoMarkProps = {
  className?: string;
  width?: number | string;
  height?: number | string;
};

export function LogoMark({ className, width, height }: LogoMarkProps) {
  return (
    <div
      className={className}
      aria-hidden
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        overflow: "hidden",
        width,
        height,
        borderRadius: logo.borderRadius,
        background: `linear-gradient(160deg, ${logo.gradient.from} 0%, ${logo.gradient.to} 100%)`,
      }}
    >
      <svg
        viewBox={`0 0 ${logo.width} ${logo.height}`}
        width="100%"
        height="100%"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g fill={logo.iconColor} fillRule="evenodd">
          <path d="M5 6.2 H27 C33.8 6.2 37 11 37 17 C37 23 33.8 27 27 27 H21.6 V34.2 H15.8 V15 H21.6 V11.6 H9.4 L5 6.2 Z M21.6 11.6 H25.8 C29.6 11.6 31.4 14 31.4 17 C31.4 20 29.6 22.2 25.8 22.2 H21.6 Z" />
        </g>
      </svg>
    </div>
  );
}

export function LogoIcon() {
  return <LogoMark width={logo.width} height={logo.height} />;
}

type LogoProps = {
  className?: string;
};

export function Logo({ className }: LogoProps) {
  return <LogoMark className={className} />;
}
