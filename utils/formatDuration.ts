import { formatDuration as formatDurationFns } from "date-fns";
import { dateFnsLocales } from "@/utils/dateFnsLocales";

export function formatDuration(durationInMonths: number, locale: string) {
  const localeObj = dateFnsLocales[locale as keyof typeof dateFnsLocales] ?? dateFnsLocales.en;

  const years = Math.floor(durationInMonths / 12);
  const months = durationInMonths % 12;

  return formatDurationFns({ years, months }, { locale: localeObj, format: ["years", "months"] });
}
