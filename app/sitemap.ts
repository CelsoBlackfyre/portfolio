import type { MetadataRoute } from "next";
import { projects } from "@/content/archive";
import { LOCALES } from "@/lib/locales";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3210";
  const lastModified = new Date();

  const pages = ["", "/work", "/about", "/contact"];

  const staticRoutes: MetadataRoute.Sitemap = LOCALES.flatMap((locale) =>
    pages.map((page) => ({
      url: `${base}/${locale}${page}`,
      lastModified,
      changeFrequency: page === "" ? "weekly" : "monthly",
      priority: page === "" ? 1 : 0.8,
      alternates: {
        languages: Object.fromEntries(
          LOCALES.map((option) => [option, `${base}/${option}${page}`]),
        ),
      },
    })),
  );

  const projectRoutes: MetadataRoute.Sitemap = LOCALES.flatMap((locale) =>
    projects.map((project) => ({
      url: `${base}/${locale}/work/${project.slug}`,
      lastModified,
      changeFrequency: "yearly",
      priority: 0.7,
      alternates: {
        languages: Object.fromEntries(
          LOCALES.map((option) => [
            option,
            `${base}/${option}/work/${project.slug}`,
          ]),
        ),
      },
    })),
  );

  return [...staticRoutes, ...projectRoutes];
}
