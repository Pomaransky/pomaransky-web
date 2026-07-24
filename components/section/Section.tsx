import { SectionProps } from "./Section.props";

export function Section({ children, id, className = "" }: SectionProps) {
  return (
    <section className={`scroll-mt-20 my-6 md:my-12 ${className}`} id={id}>
      {children}
    </section>
  );
}
