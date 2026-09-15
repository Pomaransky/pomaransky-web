import { differenceInMonths, parseISO } from "date-fns";
import { formatDuration } from "@/utils/formatDuration";

export function getExperienceDuration(start: string, end: string | null, locale: string) {
  const durationInMonths = differenceInMonths(end ? parseISO(end) : new Date(), parseISO(start));

  return formatDuration(durationInMonths, locale);
}
