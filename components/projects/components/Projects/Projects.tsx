import { useTranslations } from "next-intl";
import { Container } from "@/components/container/Container";
import { CustomLink } from "@/components/custom-link/CustomLink";
import { Section } from "@/components/section/Section";
import { SectionTitle } from "@/components/section-title/SectionTitle";
import { projectsContent } from "@/content/projects";
import { ProjectCard } from "../ProjectCard/ProjectCard";

const MAX_PREVIEW_PROJECTS = 2;

export function Projects() {
  const t = useTranslations("Projects");
  const previewProjects = projectsContent.slice(0, MAX_PREVIEW_PROJECTS);
  const hasMore = projectsContent.length > MAX_PREVIEW_PROJECTS;

  return (
    <Section>
      <Container maxWidth="max-w-4xl">
        <SectionTitle title={t("sectionTitle")} subtitle={t("sectionSubtitle")} />
        <div className="mt-6 flex flex-col gap-6">
          {previewProjects.map((project) => (
            <ProjectCard key={project.key} project={project} />
          ))}
        </div>

        {hasMore && (
          <div className="mt-6 flex justify-center">
            <CustomLink href="/projects">{t("seeAllLabel")}</CustomLink>
          </div>
        )}
      </Container>
    </Section>
  );
}
