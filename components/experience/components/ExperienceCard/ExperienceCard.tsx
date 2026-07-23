import { useLocale } from "next-intl";
import { ExperienceEnum } from "@/content/experience";
import { formatExperiencePeriod } from "@/utils/formatExperiencePeriod";
import { getExperienceDuration } from "@/utils/getExperienceDuration";
import { ExperienceCardProps } from "./ExperienceCard.props";

export function ExperienceCard({ item, t }: ExperienceCardProps) {
  const locale = useLocale();
  const period = formatExperiencePeriod(item.start, item.end, locale, t("presentLabel"));
  const duration =
    item.type === ExperienceEnum.WORK
      ? getExperienceDuration(item.start, item.end, locale)
      : null;

  return (
    <div className="rounded-2xl border border-muted bg-muted/40 p-5 transition-colors hover:border-primary/40">
      <p className="text-sm font-medium text-primary flex flex-col gap-1 md:flex-row md:items-center">
        <span>{period}</span>
        {duration && <span className="text-foreground/80 text-xs font-normal">({duration})</span>}
      </p>
      <h3 className="mt-1 font-semibold md:text-lg">{t(`${item.key}.title`)}</h3>
      <p className="mt-1 text-sm text-foreground/70">{t(`${item.key}.organization`)}</p>
    </div>
  );
}
