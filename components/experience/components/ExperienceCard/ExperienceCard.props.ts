import { ExperienceItem } from "@/content/experience";

export type ExperienceCardProps = {
  item: ExperienceItem;
  t: (key: string) => string;
};
