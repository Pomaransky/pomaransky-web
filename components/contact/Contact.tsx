import { Mail } from "lucide-react";
import { useTranslations } from "next-intl";
import { Container } from "@/components/container/Container";
import { customLinkClassName } from "@/components/custom-link/CustomLink";
import { Section } from "@/components/section/Section";
import { SectionTitle } from "@/components/section-title/SectionTitle";
import { contactContent } from "@/content/contact";

export function Contact() {
  const t = useTranslations("Contact");

  return (
    <Section id="contact">
      <Container maxWidth="max-w-4xl">
        <SectionTitle title={t("sectionTitle")} subtitle={t("sectionSubtitle")} />
        <div className="mt-6 flex justify-center">
          <a href={`mailto:${contactContent.email}`} className={customLinkClassName}>
            <Mail className="size-4" aria-hidden />
            {t("ctaLabel")}
          </a>
        </div>
      </Container>
    </Section>
  );
}
