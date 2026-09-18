import type { Localized } from "@/lib/types";

export const profile = {
  name: "Celso Martins",
  handle: "CelsoBlackfyre",
  initials: "CM",
  location: {
    en: "Belo Horizonte, Brazil",
    pt: "Belo Horizonte, Brasil",
  } satisfies Localized<string>,
  timezone: "UTC-3",
  github: "https://github.com/CelsoBlackfyre",
  email: "celsomartinscarvalho@gmail.com",
  // Fill these in and they appear automatically in the footer. Empty entries are skipped.
  linkedin: "",
  gitlab: "",
};

export type SocialLink = { label: string; href: string };

// Set employer to "" to remove the company name from the site.
export const professional = {
  employer: "Projelet",
  focus: {
    en: "AI platforms, BIM and document pipelines",
    pt: "plataformas de IA, BIM e pipelines de documentos",
  } satisfies Localized<string>,
};

export function socialLinks(): SocialLink[] {
  return [
    { label: "GitHub", href: profile.github },
    { label: "LinkedIn", href: profile.linkedin },
    { label: "GitLab", href: profile.gitlab },
  ].filter((link) => link.href.length > 0);
}

export const githubStats = {
  publicRepositories: 30,
  firstRepositoryYear: 2017,
};

export type ToolkitGroup = {
  label: Localized<string>;
  items: string[];
};

export const toolkit: ToolkitGroup[] = [
  {
    label: { en: "Languages", pt: "Linguagens" },
    items: ["TypeScript", "C#", "Python", "Go", "PHP", "Ruby", "JavaScript"],
  },
  {
    label: { en: "Frontend", pt: "Frontend" },
    items: [
      "React 19",
      "Next.js",
      "TanStack",
      "Angular",
      "Tailwind CSS",
      "Vite",
      "PixiJS",
      "Astro",
    ],
  },
  {
    label: { en: "Backend", pt: "Backend" },
    items: [
      ".NET 8 and 10",
      "Minimal APIs",
      "Worker Services",
      "SignalR",
      "Fastify",
      "Laravel",
      "Ruby on Rails",
      "Hangfire",
      "WebSockets",
      "Zod",
    ],
  },
  {
    label: { en: "AI and documents", pt: "IA e documentos" },
    items: [
      "RAG pipelines",
      "Semantic Kernel",
      "OpenAI",
      "Deepgram",
      "Tesseract",
      "MinerU",
      "OpenCV",
      "Embeddings",
    ],
  },
  {
    label: { en: "Data", pt: "Dados" },
    items: [
      "Azure SQL",
      "PostgreSQL",
      "SQL Server",
      "EF Core",
      "Dapper",
      "Prisma",
      "SQLite",
      "Redis",
    ],
  },
  {
    label: { en: "Cloud and identity", pt: "Nuvem e identidade" },
    items: [
      "Azure App Service",
      "Blob Storage",
      "Entra ID",
      "SCIM",
      "Microsoft Graph",
      "Docker",
      "GitHub Actions",
      "Azure Pipelines",
    ],
  },
];

export const languageStats = [
  { language: "TypeScript", count: 11 },
  { language: "JavaScript", count: 4 },
  { language: "Go", count: 3 },
  { language: "PHP", count: 3 },
  { language: "HTML", count: 2 },
  { language: "Astro", count: 1 },
  { language: "C#", count: 1 },
  { language: "CSS", count: 1 },
];
