import { ExternalLink } from "lucide-react";
import { useTranslations } from "next-intl";
import { GithubIcon } from "@/components/icons";
import { ProjectCardProps } from "./ProjectCard.props";

export function ProjectCard({ project }: ProjectCardProps) {
  const t = useTranslations("Projects");
  const highlights = t.raw(`${project.key}.highlights`) as string[];

  return (
    <div className="relative rounded-2xl border border-muted bg-muted/40 p-6 transition-colors hover:border-primary/40">
      {project.url && (
        <a
          href={project.url}
          target="_blank"
          rel="noopener noreferrer"
          className="absolute right-6 top-6 text-foreground/60 transition-colors hover:text-primary"
          aria-label={t(`${project.key}.title`)}
        >
          <ExternalLink className="size-5" aria-hidden />
        </a>
      )}
      <h3 className="text-lg font-semibold text-primary">{t(`${project.key}.title`)}</h3>
      <p className="mt-2 text-sm font-medium text-foreground/80">{t(`${project.key}.description`)}</p>

      <ul className="mt-4 flex flex-col gap-2">
        {highlights.map((highlight) => (
          <li key={highlight} className="flex gap-2 text-sm text-foreground/80">
            <span className="mt-1.5 size-1.5 shrink-0 rounded-full bg-primary" aria-hidden />
            {highlight}
          </li>
        ))}
      </ul>

      <p className="mt-4 text-sm font-medium text-foreground/80">{t("techStackLabel")}</p>
      <div className="mt-2 flex flex-wrap gap-2">
        {project.techStack.map((tech) => (
          <span
            key={tech}
            className="rounded-full bg-secondary px-3 py-1 text-xs text-gray-100 ring-1 ring-muted"
          >
            {tech}
          </span>
        ))}
      </div>

      {project.links && project.links.length > 0 && (
        <div className="mt-4 flex flex-wrap gap-4 border-t border-muted pt-4">
          {project.links.map((link) => (
            <a
              key={link.key}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-sm text-foreground/70 transition-colors hover:text-primary"
            >
              <GithubIcon className="size-4" />
              {t(link.key)}
            </a>
          ))}
        </div>
      )}
    </div>
  );
}
