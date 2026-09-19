import type { MetadataRoute } from "next";
import { projects } from "@/content/archive";
import { LOCALES, LOCALE_TAG } from "@/lib/locales";
import { absoluteUrl } from "@/lib/metadata";

export default function sitemap(): MetadataRoute.Sitemap {
  const pages = ["", "/work", "/about", "/contact"];

  const staticRoutes: MetadataRoute.Sitemap = LOCALES.flatMap((locale) =>
    pages.map((page) => ({
      url: absoluteUrl(`/${locale}${page}`),
      changeFrequency: page === "" ? "weekly" : "monthly",
      priority: page === "" ? 1 : 0.8,
      alternates: {
        languages: Object.fromEntries(
          LOCALES.map((option) => [LOCALE_TAG[option], absoluteUrl(`/${option}${page}`)]),
        ),
      },
    })),
  );

  const projectRoutes: MetadataRoute.Sitemap = LOCALES.flatMap((locale) =>
    projects.map((project) => ({
      url: absoluteUrl(`/${locale}/work/${project.slug}`),
      changeFrequency: "yearly",
      priority: 0.7,
      alternates: {
        languages: Object.fromEntries(
          LOCALES.map((option) => [
            LOCALE_TAG[option],
            absoluteUrl(`/${option}/work/${project.slug}`),
          ]),
        ),
      },
    })),
  );

  return [...staticRoutes, ...projectRoutes];
}
