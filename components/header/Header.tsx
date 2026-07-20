import Link from "next/link";
import Container from "@/components/container/Container";
import Logo from "@/components/icons/Logo";
import ThemeToggle from "@/components/theme/ThemeToggle";

const navLinks = [
  { label: "About", href: "#" },
  { label: "Experience", href: "#" },
  { label: "Projects", href: "#" },
  { label: "Contact", href: "#" },
];

export default function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-foreground/10 bg-background py-4">
      <Container>
        <div className="flex items-center justify-between gap-6">
          <Link href="/" className="flex items-center gap-1">
            <Logo className="size-8" />
            <span className="text-lg font-semibold">omaransky</span>
          </Link>
          <div className="flex items-center gap-4">
            <nav className="flex flex-wrap items-center justify-end gap-x-6 gap-y-2">
              {navLinks.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  className="text-sm text-foreground/80 transition-colors hover:text-foreground"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
            <ThemeToggle />
          </div>
        </div>
      </Container>
    </header>
  );
}
