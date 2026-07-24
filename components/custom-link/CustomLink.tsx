import { Link } from "@/i18n/navigation";
import { CustomLinkProps } from "./CustomLink.props";

export const customLinkClassName =
  "inline-flex items-center justify-center gap-2 rounded-full bg-[length:200%_200%] bg-[position:0%_50%] bg-[linear-gradient(135deg,var(--color-primary),var(--color-secondary),var(--color-primary))] px-6 py-2.5 text-sm font-medium text-white shadow-md shadow-primary/20 transition-all duration-300 hover:scale-105 hover:bg-[position:100%_50%] hover:shadow-lg hover:shadow-primary/40";

export function CustomLink({ href, children, className = "" }: CustomLinkProps) {
  return (
    <Link href={href} className={`${customLinkClassName} ${className}`}>
      {children}
    </Link>
  );
}
