import { notFound } from "next/navigation";
import { projects } from "@/content/archive";
import { getDictionary } from "@/lib/dictionary";
import { toLocale } from "@/lib/locales";
import { socialImage } from "@/lib/social-image";
import { loc } from "@/lib/types";

export const alt = "Celso Martins | Case study";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function OpenGraphImage({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}) {
  const { locale: rawLocale, slug } = await params;
  const locale = toLocale(rawLocale);
  const project = projects.find((item) => item.slug === slug);
  if (!project) notFound();
  const dict = getDictionary(locale);

  return socialImage({
    title: project.name,
    description: loc(project.tagline, locale),
    category: dict.labels.caseStudy,
    footer: loc(project.kind, locale),
  });
}
