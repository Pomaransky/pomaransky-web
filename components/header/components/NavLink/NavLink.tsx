import Link from "next/link";
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
    <Link href={href} className={className} onClick={handleClick}>
      {label}
    </Link>
  );
}