import { useTranslations } from "next-intl";
import { Container } from "@/components/container/Container";
import { CustomLink } from "@/components/custom-link/CustomLink";
import { SectionTitle } from "@/components/section-title/SectionTitle";
import { projectsContent } from "@/content/projects";
import { ProjectCard } from "../ProjectCard/ProjectCard";
import { ProjectsProps } from "./Projects.props";

const MAX_PREVIEW_PROJECTS = 2;

export function Projects({ isHomePage }: ProjectsProps) {
  const t = useTranslations("Projects");
  const previewProjects = projectsContent.slice(0, MAX_PREVIEW_PROJECTS);
  const hasMore = projectsContent.length > MAX_PREVIEW_PROJECTS;

  return (
    <section className={`${isHomePage ? "scroll-mt-20" : ""} py-6 md:py-12`}>
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
    </section>
  );
}
