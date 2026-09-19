import type { Metadata } from "next";
import { profile } from "@/content/profile";
import { LOCALES, LOCALE_TAG, localePath, type Locale } from "@/lib/locales";

const deploymentHost = process.env.VERCEL_PROJECT_PRODUCTION_URL ?? process.env.VERCEL_URL;
const configuredUrl = process.env.NEXT_PUBLIC_SITE_URL;

// Use the same origin for canonical links, social previews, robots and sitemap.
// Set NEXT_PUBLIC_SITE_URL on non-Vercel hosts; localhost is only the local fallback.
export const siteUrl = new URL(
  configuredUrl || (deploymentHost ? `https://${deploymentHost}` : "http://localhost:3210"),
);

if (!["http:", "https:"].includes(siteUrl.protocol)) {
  throw new Error("NEXT_PUBLIC_SITE_URL must be an absolute HTTP or HTTPS URL.");
}

siteUrl.search = "";
siteUrl.hash = "";
siteUrl.pathname = siteUrl.pathname.replace(/\/+$/, "");

export function absoluteUrl(path: string): string {
  return `${siteUrl.href.replace(/\/$/, "")}/${path.replace(/^\/+/, "")}`;
}

export function pageMetadata({
  locale,
  path = "/",
  title,
  description,
  type = "website",
  projectImage = false,
}: {
  locale: Locale;
  path?: string;
  title: string;
  description: string;
  type?: "website" | "article";
  projectImage?: boolean;
}): Metadata {
  const url = localePath(locale, path);
  const imagePath = `${projectImage ? url : localePath(locale)}/opengraph-image`;
  const socialTitle = path === "/" ? title : `${title} · ${profile.name}`;
  const image = {
    url: imagePath,
    width: 1200,
    height: 630,
    alt: socialTitle,
  };

  return {
    title,
    description,
    alternates: {
      canonical: url,
      languages: {
        ...Object.fromEntries(LOCALES.map((option) => [LOCALE_TAG[option], localePath(option, path)])),
        "x-default": localePath("en", path),
      },
    },
    openGraph: {
      type,
      title: socialTitle,
      description,
      siteName: profile.name,
      locale: LOCALE_TAG[locale].replace("-", "_"),
      alternateLocale: LOCALES.filter((option) => option !== locale).map((option) =>
        LOCALE_TAG[option].replace("-", "_"),
      ),
      url,
      images: [image],
    },
    twitter: {
      card: "summary_large_image",
      title: socialTitle,
      description,
      images: [image],
    },
  };
}
