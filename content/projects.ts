import messages from "@/messages/en.json";

type ProjectsMessages = typeof messages.Projects;
type ProjectKey = Exclude<
  keyof ProjectsMessages,
  | "sectionTitle"
  | "sectionSubtitle"
  | "seeAllLabel"
  | "commercialTitle"
  | "commercialSubtitle"
  | "commercialMoreLabel"
  | "sideTitle"
  | "sideSubtitle"
  | "githubRepository"
  | "visitLiveLabel"
  | "techStackLabel"
  | "durationLabel"
>;

export type ProjectLinkKey = "githubRepository";

export type ProjectLink = {
  key: ProjectLinkKey;
  url: string;
};

export type ProjectItem = {
  key: ProjectKey;
  techStack: string[];
  duration?: number;
  url?: string;
  links?: ProjectLink[];
};

export const projectsContent: ProjectItem[] = [
  {
    key: "hrPlatform",
    techStack: [
      "Angular 18",
      "NgRx",
      "RxJS",
      "TypeScript",
      "PrimeNG",
      "Formly",
      "FullCalendar",
      "date-fns",
      "Ngx-translate",
    ],
    duration: 12,
  },
  {
    key: "vehicleProtectionPlatform",
    techStack: [
      "Angular 17",
      "NgRx",
      "RxJS",
      "GraphQL",
      "Ngx-translate",
      "Bootstrap",
      "Figma",
      "AWS Amplify",
    ],
    duration: 6,
    url: "https://www.i-duv.com/",
  },
  {
    key: "nfcConfigTool",
    techStack: ["Angular 17", "NgRx Signal Store", "RxJS", "Chart.js", "Karma",
      "Jasmine",],
    duration: 3,
    url: "https://lpccs-docs.renesas.com/ntpg_apps/NFCAntTool/v1.1.0/matching-calc",
  },
  {
    key: "imageInvestmentPlatform",
    techStack: [
      "Next.js",
      "React",
      "AWS Amplify Gen2",
      "TanStack Query",
      "Tailwind",
      "GluestackUI",
      "OpenSeadragon",
      "RainbowKit",
      "Chart.js",
      "Figma",
    ],
    duration: 6,
    url: "https://app.art-e-fact.com/",
  },
  {
    key: "popeyesRestaurant",
    techStack: ["Angular", "NgRx", "RxJS", "TypeScript", "SCSS"],
    duration: 1,
    url: "https://popeyesuk.com/",
  },
  {
    key: "streamingVodPlatform",
    techStack: ["Angular 14", "RxJS", "Video.js", "Ngx-translate", "SCSS", "Figma"],
    duration: 3,
  },
  {
    key: "companyWebsite",
    techStack: ["React", "Directus", "GraphQL", "Bootstrap" ,"SCSS", "Adobe XD"],
    duration: 6,
    url: "https://embiq.com/",
  },
];

export const sideProjectsContent: ProjectItem[] = [
  {
    key: "pulsar",
    techStack: [
      "Angular 20",
      "Strapi 5",
      "NgRx Signal Store",
      "RxJS",
      "Ngx-translate",
      "PrimeNG",
      "Tailwind",
      "Date-fns",
      "Karma",
      "Jasmine",
    ],
    url: "https://pulsar-app.netlify.app/",
    links: [{ key: "githubRepository", url: "https://github.com/Pomaransky/angular-with-strapi" }],
  },
  {
    key: "portfolio",
    techStack: [
      "Next.js 16",
      "React 19",
      "TypeScript",
      "Tailwind CSS",
      "next-intl",
      "next-themes",
      "lucide-react",
    ],
    links: [
      { key: "githubRepository", url: "https://github.com/Pomaransky/pomaransky-web" },
    ],
  },
];
