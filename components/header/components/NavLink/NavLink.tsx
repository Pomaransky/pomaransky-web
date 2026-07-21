import Link from "next/link";
import { NavLinkProps } from "./NavLink.props";

export default function NavLink({
  href,
  label,
  className,
  onClick
}: NavLinkProps) {
  return (
    <Link href={href} className={className} onClick={onClick}>
      {label}
    </Link>
  );
}