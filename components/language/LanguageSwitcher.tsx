"use client";

import { useLocale } from "next-intl";
import { getPathname, usePathname } from "@/i18n/navigation";
import { routing } from "@/i18n/routing";

export function LanguageSwitcher() {
  const locale = useLocale();
  const pathname = usePathname();
  const activeIndex = routing.locales.indexOf(locale);
  const nextLocale = routing.locales.find((loc) => loc !== locale) ?? locale;

  return (
    <button
      type="button"
      onClick={() => {
        document.cookie = `NEXT_LOCALE=${nextLocale};path=/;max-age=31536000;samesite=lax`;
        window.location.href = getPathname({ href: pathname, locale: nextLocale });
      }}
      aria-label={`Switch language to ${nextLocale.toUpperCase()}`}
      className="relative flex h-8 w-16 cursor-pointer items-center rounded-lg bg-muted p-0.5 text-xs font-medium"
    >
      <span
        className="absolute inset-y-0.5 left-0.5 w-[calc(50%-0.125rem)] rounded-md bg-secondary transition-transform duration-200 ease-out"
        style={{ transform: `translateX(${activeIndex * 100}%)` }}
        aria-hidden
      />
      {routing.locales.map((loc) => (
        <span
          key={loc}
          className={`relative z-10 w-1/2 text-center transition-colors ${
            locale === loc ? "text-white" : "text-foreground/60"
          }`}
        >
          {loc.toUpperCase()}
        </span>
      ))}
    </button>
  );
}
