import { formatDuration, intervalToDuration, parseISO } from "date-fns";
import { enUS, pl } from "date-fns/locale";

const dateFnsLocales = { pl, en: enUS };

export function getExperienceDuration(start: string, end: string | null, locale: string) {
  const duration = intervalToDuration({
    start: parseISO(start),
    end: end ? parseISO(end) : new Date(),
  });

  return formatDuration(
    { years: duration.years, months: duration.months },
    {
      format: ["years", "months"],
      locale: dateFnsLocales[locale as keyof typeof dateFnsLocales] ?? enUS,
    }
  );
}
