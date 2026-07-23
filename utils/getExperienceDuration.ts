import { intervalToDuration, parseISO } from "date-fns";

function formatUnit(value: number, unit: "year" | "month", locale: string) {
  return new Intl.NumberFormat(locale, { style: "unit", unit, unitDisplay: "short" }).format(value);
}

export function getExperienceDuration(start: string, end: string | null, locale: string) {
  const duration = intervalToDuration({
    start: parseISO(start),
    end: end ? parseISO(end) : new Date(),
  });

  const years = duration.years ?? 0;
  const months = duration.months ?? 0;

  return [
    years > 0 ? formatUnit(years, "year", locale) : null,
    months > 0 ? formatUnit(months, "month", locale) : null,
  ]
    .filter(Boolean)
    .join(" ");
}
