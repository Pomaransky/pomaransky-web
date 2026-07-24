import { useTranslations } from "next-intl";
import { Container } from "@/components/container/Container";
import { SectionTitle } from "@/components/section-title/SectionTitle";
import { projectsContent, sideProjectsContent } from "@/content/projects";
import { ProjectCard } from "./components/ProjectCard/ProjectCard";

export function ProjectsPage() {
  const t = useTranslations("Projects");

  return (
    <Container maxWidth="max-w-4xl">
      <section className="py-6 md:py-12">
        <SectionTitle title={t("commercialTitle")} subtitle={t("commercialSubtitle")} />
        <div className="mt-6 flex flex-col gap-6">
          {projectsContent.map((project) => (
            <ProjectCard key={project.key} project={project} />
          ))}
        </div>
        <p className="mt-6 text-center text-sm text-primary">{t("commercialMoreLabel")}</p>
      </section>

      <section className="py-6 md:py-12">
        <SectionTitle title={t("sideTitle")} subtitle={t("sideSubtitle")} />
        <div className="mt-6 flex flex-col gap-6">
          {sideProjectsContent.map((project) => (
            <ProjectCard key={project.key} project={project} />
          ))}
        </div>
      </section>
    </Container>
  );
}
