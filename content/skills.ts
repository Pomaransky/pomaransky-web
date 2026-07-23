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
      { name: "Angular (6+)", featured: true },
      { name: "React", featured: true },
      { name: "Next.js" , featured: true},
      { name: "NgRX" , featured: true},
      { name: "RxJS" , featured: true},
      { name: "PrimeNG" },
      { name: "Angular Material" },
      { name: "Bootstrap" },
      { name: "Formly" },
      { name: "FullCalendar" },
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
      { name: "Responsive Web Design (RWD)", featured: true },
      { name: "Code Review" },
      { key: "Skills.wcagAccessibility" },
      { name: "Agile (Scrum/Kanban)" },
      { name: "Clean Code" },
      { name: "DRY", featured: true },
      { name: "SOLID", featured: true },
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
];
