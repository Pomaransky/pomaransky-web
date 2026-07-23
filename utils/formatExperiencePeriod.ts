import { format, parseISO } from "date-fns";
import { enUS, pl } from "date-fns/locale";

const dateFnsLocales = { pl, en: enUS };

function capitalize(value: string) {
  return value.charAt(0).toUpperCase() + value.slice(1);
}

export function formatExperiencePeriod(
  start: string,
  end: string | null,
  locale: string,
  presentLabel: string
) {
  const localeObj = dateFnsLocales[locale as keyof typeof dateFnsLocales] ?? enUS;
  const startLabel = capitalize(format(parseISO(start), "LLLL yyyy", { locale: localeObj }));
  const endLabel = end
    ? capitalize(format(parseISO(end), "LLLL yyyy", { locale: localeObj }))
    : presentLabel;

  return `${startLabel} - ${endLabel}`;
}
