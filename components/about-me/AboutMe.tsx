import { useTranslations } from "next-intl";
import { Container } from "@/components/container/Container";
import { Section } from "@/components/section/Section";
import { SectionTitle } from "@/components/section-title/SectionTitle";
import Image from "next/image";
import { calculateMyAge } from "@/utils/calculatyMyAge";
export function AboutMe() {
  const t = useTranslations("AboutMe");

  return (
    <Section id="about">
      <Container maxWidth="max-w-4xl">
        <SectionTitle title={t("sectionTitle")} />
        <div className="mt-6 flex flex-col items-center gap-6 md:flex-row md:items-start">
          <div className="flex size-48 shrink-0 items-center justify-center rounded-2xl bg-muted md:size-56 overflow-hidden">
            <Image loading="eager" src="/photo.webp" alt="ap" width={224} height={224} className="size-full object-cover object-top" />
          </div>
          <div className="text-center md:text-left">
            <h3 className="text-2xl font-semibold">Arkadiusz Pomarański</h3>
            <p className="text-secondary">Front-End Developer</p>
            <p className="mt-4 text-foreground/80">{t("description", { age: calculateMyAge(new Date("1997-01-01")) })}</p> {/* Only year for privacy reasons. */}
          </div>
        </div>
      </Container>
    </Section>
  );
}
