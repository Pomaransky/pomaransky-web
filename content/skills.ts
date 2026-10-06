type SkillBase = { featured?: boolean };

export type Skill = SkillBase & ({ name: string } | { key: string });

export type SkillCategory = {
  sectionTitle: string;
  skills: Skill[];
};

export const skillsContent: SkillCategory[] = [
  {
    sectionTitle: "Skills.frameworksAndLibraries",
    skills: [
      { name: "Angular", featured: true },
      { name: "React", featured: true },
      { name: "Next.js" , featured: true},
      { name: "NgRx" , featured: true},
      { name: "RxJS" , featured: true},
      { name: "PrimeNG" },
      { name: "Angular Material" },
      { name: "Bootstrap" },
      { name: "Formly" },
      { name: "FullCalendar" },
      { name: "i18n" },
      { name: "Ngx-translate" },
      { name: "react-intl" },
      { name: "Redux Toolkit" },
      { name: "Zustand" },
      { name: "ReactNative" },
    ],
  },
  {
    sectionTitle: "Skills.languagesAndStyling",
    skills: [
      { name: "TypeScript", featured: true },
      { name: "JavaScript" },
      { name: "CSS3" },
      { name: "HTML5" },
      { name: "SCSS/SASS" },
      { name: "Tailwind" },
    ],
  },
  {
    sectionTitle: "Skills.toolsAndWorkflow",
    skills: [
      { name: "Unit Testing (Jasmine, Karma)" },
      { name: "Git", featured: true },
      { name: "NPM" },
      { name: "Node.js" },
      { name: "Angular CLI" },
      { name: "Figma" },
      { name: "JIRA" },
      { name: "Confluence" },
      { name: "Cursor AI" },
      { name: "REST API / JSON" , featured: true},
      { name: "Claude Code", featured: true },
      { name: "Swagger" },
      { name: "GraphQL" },
      { name: "GitHub" },
      { name: "Bitbucket" },
    ],
  },
  {
    sectionTitle: "Skills.practices",
    skills: [
      { name: "Microfrontends", featured: true },
      { name: "Responsive Web Design (RWD)", featured: true },
      { name: "Code Review" },
      { key: "Skills.wcagAccessibility", featured: true },
      { name: "Agile (Scrum/Kanban)" },
      { name: "Clean Code" },
      { name: "DRY"},
      { name: "SOLID"},
      { name: "KISS"},
    ],
  },
  {
    sectionTitle: "Skills.softSkills",
    skills: [
      { key: "Skills.goodCommunication", featured: true },
      { key: "Skills.teamCollaboration", featured: true },
      { key: "Skills.problemSolving" },
      { key: "Skills.workIndependently" },
    ],
  },
  {
    sectionTitle: "Skills.languages",
    skills: [
      { key: "Skills.polish" },
      { key: "Skills.english" },
    ],
  },
];
