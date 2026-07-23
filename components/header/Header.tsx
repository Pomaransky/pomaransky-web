"use client";

import { Menu, X } from "lucide-react";
import { useTranslations } from "next-intl";
import { useEffect, useRef, useState } from "react";
import { Link } from "@/i18n/navigation";
import { Container } from "@/components/container/Container";
import { Logo } from "@/components/icons/Logo";
import { LanguageSwitcher } from "@/components/language/LanguageSwitcher";
import { ThemeToggle } from "@/components/theme/ThemeToggle";
import NavLink from "./components/NavLink/NavLink";

const navLinks = [
  { key: "about", href: "#about" },
  { key: "skills", href: "#skills" },
  { key: "experience", href: "#experience" },
  { key: "projects", href: "#" },
  { key: "contact", href: "#" },
] as const;

const linkClassName =
  "text-sm text-foreground/80 transition-colors hover:text-primary";

export function Header() {
  const t = useTranslations("Header.nav");
  const [open, setOpen] = useState(false);
  const headerRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (!open) return;
    const onClickOutside = (e: MouseEvent) => {
      if (!headerRef.current?.contains(e.target as Node)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", onClickOutside);
    return () => document.removeEventListener("mousedown", onClickOutside);
  }, [open]);

  return (
    <header
      ref={headerRef}
      className="sticky top-0 z-50 border-b border-foreground/10 bg-background py-4"
    >
      <Container>
        <div className="flex items-center justify-between gap-6">
          <Link href="/" className="flex items-center gap-1">
            <Logo className="size-8" />
            <span className="text-lg font-semibold">omaransky</span>
          </Link>
          <div className="flex items-center gap-2 sm:gap-4">
            <nav className="hidden items-center gap-x-6 md:flex">
              {navLinks.map((link) => (
                <NavLink
                  key={link.key}
                  href={link.href}
                  label={t(link.key)}
                  className={linkClassName}
                />
              ))}
            </nav>
            <LanguageSwitcher />
            <ThemeToggle />
            <button
              type="button"
              onClick={() => setOpen((prev) => !prev)}
              className="flex size-8 cursor-pointer items-center justify-center rounded-md text-foreground/80 transition-colors hover:text-primary md:hidden"
              aria-label={open ? "Close menu" : "Open menu"}
              aria-expanded={open}
              aria-controls="mobile-nav"
            >
              {open ? (
                <X className="size-5" aria-hidden />
              ) : (
                <Menu className="size-5" aria-hidden />
              )}
            </button>
          </div>
        </div>
      </Container>

      <nav
        id="mobile-nav"
        className={`absolute inset-x-0 top-full z-50 grid border-b border-foreground/10 bg-background transition-[grid-template-rows] duration-300 ease-out md:hidden ${
          open
            ? "grid-rows-[1fr] pointer-events-auto"
            : "grid-rows-[0fr] pointer-events-none"
        }`}
        aria-hidden={!open}
        inert={!open}
      >
        <div className="overflow-hidden">
          <Container>
            <ul className="flex flex-col gap-1 pb-4">
              {navLinks.map((link) => (
                <li key={link.key}>
                  <NavLink
                    href={link.href}
                    label={t(link.key)}
                    className={`block rounded-md px-2 py-2 ${linkClassName}`}
                    onClick={() => setOpen(false)}
                  />
                </li>
              ))}
            </ul>
          </Container>
        </div>
      </nav>
    </header>
  );
}
