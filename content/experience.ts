export enum ExperienceEnum {
  EDUCATION = "EDUCATION",
  WORK = "WORK",
}

export type ExperienceItem = {
  key: string;
  type: ExperienceEnum;
  /** ISO date string, e.g. "2020-10-01". */
  start: string;
  /** ISO date string, or null when the stage is ongoing ("present"). */
  end: string | null;
};

export const experienceContent: ExperienceItem[] = [
  {
    key: "education",
    type: ExperienceEnum.EDUCATION,
    start: "2020-10-01",
    end: "2022-07-01",
  },
  {
    key: "embiq",
    type: ExperienceEnum.WORK,
    start: "2021-03-15",
    end: null,
  },
];
