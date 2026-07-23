"use client";

import { differenceInCalendarMonths, getYear, parseISO } from "date-fns";
import { Briefcase, GraduationCap } from "lucide-react";
import { useTranslations } from "next-intl";
import { Container } from "@/components/container/Container";
import { SectionTitle } from "@/components/section-title/SectionTitle";
import { experienceContent, ExperienceEnum } from "@/content/experience";
import { ExperienceCard } from "./components/ExperienceCard/ExperienceCard";

const DOT_SIZE = 36;
const PX_PER_MONTH = 10;
const MIN_BRACKET_HEIGHT = 60;
const ONGOING_BRACKET_HEIGHT = 100;

export function Experience() {
  const t = useTranslations("Experience") as (key: string) => string;

  return (
    <section className="scroll-mt-20 py-6 md:py-12" id="experience">
      <Container maxWidth="max-w-4xl">
        <SectionTitle title={t("sectionTitle")} subtitle={t("sectionSubtitle")} />
        <div className="relative mt-10 mb-8">
          <ol className="flex flex-col gap-10">
            {experienceContent.map((item, index) => {
              const Icon = item.type === ExperienceEnum.EDUCATION ? GraduationCap : Briefcase;
              const isRight = index % 2 === 1;
              const dotClasses = isRight
                ? "text-primary ring-primary"
                : "text-secondary ring-secondary";
              const accentVar = isRight ? "var(--color-primary)" : "var(--color-secondary)";
              const trackOffset = isRight ? 20 : -28;
              const yearLabelClass = isRight ? "text-primary" : "text-secondary";
              const bracketHeight = item.end
                ? Math.max(
                    differenceInCalendarMonths(parseISO(item.end), parseISO(item.start)) * PX_PER_MONTH,
                    MIN_BRACKET_HEIGHT
                  )
                : ONGOING_BRACKET_HEIGHT;
              const bracketBorderWidth = "2px solid " + accentVar;

              return (
                <li
                  key={item.key}
                  className="relative flex items-start gap-4 md:grid md:grid-cols-[1fr_auto_1fr] md:items-center md:gap-6"
                >
                  <div className="hidden md:block">
                    {!isRight && <ExperienceCard item={item} t={t} />}
                  </div>

                  <div className="relative flex flex-col items-center self-start" aria-hidden>
                    <span
                      className={`absolute -top-4 left-1/2 -translate-x-1/2 text-[10px] font-semibold whitespace-nowrap ${yearLabelClass}`}
                    >
                      {getYear(parseISO(item.start))}
                    </span>

                    <span
                      className={`relative z-10 flex size-9 shrink-0 items-center justify-center rounded-full bg-background ring-2 ${dotClasses}`}
                    >
                      <Icon className="size-4" />
                    </span>

                    <span
                      className={`absolute top-1/2 left-1/2 z-0 ${
                        item.end ? "" : "[mask-image:linear-gradient(to_bottom,black_75%,transparent)]"
                      }`}
                      style={{
                        height: bracketHeight,
                        width: 7,
                        transform: `translateX(${trackOffset}px)`,
                        borderTop: bracketBorderWidth,
                        borderBottom: item.end ? bracketBorderWidth : undefined,
                        borderLeft: isRight ? undefined : bracketBorderWidth,
                        borderRight: isRight ? bracketBorderWidth : undefined,
                        borderRadius: isRight ? "0 3px 3px 0" : "3px 0 0 3px",
                      }}
                    />

                    <span
                      className={`absolute left-1/2 text-[10px] font-semibold whitespace-nowrap ${yearLabelClass}`}
                      style={{
                        top: DOT_SIZE / 2 + bracketHeight + 6,
                        transform: `translateX(calc(-50% + ${trackOffset + 6}px))`,
                      }}
                    >
                      {item.end ? getYear(parseISO(item.end)) : t("presentLabel")}
                    </span>
                  </div>

                  <div className="hidden md:block">
                    {isRight && <ExperienceCard item={item} t={t} />}
                  </div>

                  <div className="flex-1 md:hidden">
                    <ExperienceCard item={item} t={t} />
                  </div>
                </li>
              );
            })}
          </ol>
        </div>
      </Container>
    </section>
  );
}
