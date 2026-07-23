import { SectionTitleProps } from "./SectionTitle.props";

export function SectionTitle({ title, subtitle }: SectionTitleProps) {
  return (
    <div className="mb-2 inline-flex flex-col">
      <h2 className="bg-[linear-gradient(135deg,var(--color-primary),var(--color-secondary),var(--color-primary))] bg-clip-text text-3xl font-bold tracking-wider text-transparent">
        {title}
      </h2>
      <span
        className="mt-2 h-1 w-14 rounded-full bg-[linear-gradient(135deg,var(--color-primary),var(--color-secondary))]"
        aria-hidden
      />
      {subtitle && <p className="mt-2 text-foreground/80">{subtitle}</p>}
    </div>
  );
}
