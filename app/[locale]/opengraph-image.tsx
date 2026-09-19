import { getDictionary } from "@/lib/dictionary";
import { toLocale } from "@/lib/locales";
import { socialImage } from "@/lib/social-image";

export const alt = "Celso Martins | Portfolio";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function OpenGraphImage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const locale = toLocale((await params).locale);
  const dict = getDictionary(locale);

  return socialImage({
    title: dict.home.title.map((line) => line.map((part) => part.text).join("")).join(" "),
    description: dict.home.lede,
    category: dict.meta.role,
    footer: locale === "pt" ? "Trabalho, projetos e ideias." : "Work, projects and ideas.",
  });
}
