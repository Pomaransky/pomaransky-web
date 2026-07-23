import { useTranslations } from "next-intl";
import { Container } from "../container/Container";
import { SectionTitle } from "../section-title/SectionTitle";
import { skillsContent } from "@/content/skills";

export function Skills() {
  const t = useTranslations() as (key: string) => string;

  return (
    <section className="scroll-mt-20 py-6 md:py-12" id="skills">
      <Container maxWidth="max-w-4xl">
        <SectionTitle title={t("Skills.sectionTitle")} subtitle={t("Skills.sectionSubtitle")} />
        <div className="mt-6 grid grid-cols-1 gap-6 md:grid-cols-2">
          {skillsContent.map((category, index) => (
            <div
              key={category.sectionTitle}
              className={`rounded-2xl border border-muted bg-muted/40 p-5 transition-colors hover:border-primary/40 ${
                index === skillsContent.length - 1 && skillsContent.length % 2 !== 0
                  ? "md:col-span-2"
                  : ""
              }`}
            >
              <h3 className="text-lg font-semibold text-primary">
                {t(category.sectionTitle)}
              </h3>
              <div className="mt-3 flex flex-wrap gap-2">
                {category.skills.map((skill) => {
                  const label = "key" in skill ? t(skill.key) : skill.name;

                  return (
                    <span
                      key={label}
                      className={`rounded-full px-3 py-1 text-sm ring-1 ${
                        skill.featured
                          ? "bg-primary/20 font-medium ring-primary"
                          : "bg-background text-foreground/80 ring-muted"
                      }`}
                    >
                      {label}
                    </span>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
