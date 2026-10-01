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
    key: "bachelorDegree",
    type: ExperienceEnum.EDUCATION,
    start: "2017-10-01",
    end: "2020-07-10",
  },
  {
    key: "mastersDegree",
    type: ExperienceEnum.EDUCATION,
    start: "2020-10-01",
    end: "2022-07-02",
  },
  {
    key: "embiq",
    type: ExperienceEnum.WORK,
    start: "2021-03-15",
    end: "2026-09-30",
  },
  {
    key: "availableForWork",
    type: ExperienceEnum.WORK,
    start: "2026-10-01",
    end: null,
  },
];
