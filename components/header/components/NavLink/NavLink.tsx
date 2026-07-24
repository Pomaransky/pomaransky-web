import { Link } from "@/i18n/navigation";
import { NavLinkProps } from "./NavLink.props";

export default function NavLink({
  href,
  label,
  className,
  onClick
}: NavLinkProps) {
  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (href.startsWith("#")) {
      const target = document.querySelector(href);
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: "smooth", block: "start" });
        history.pushState(null, "", href);
      }
    }
    onClick?.();
  };

  return (
    <Link href={href} className={`group relative ${className}`} onClick={handleClick}>
      {label}
      <span
        className="absolute inset-x-0 -bottom-1 h-0.5 origin-left scale-x-0 rounded-full bg-[linear-gradient(135deg,var(--color-primary),var(--color-secondary))] transition-transform duration-300 ease-out group-hover:scale-x-100"
        aria-hidden
      />
    </Link>
  );
}