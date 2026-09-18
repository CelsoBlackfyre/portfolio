import { en, type Dictionary } from "@/content/i18n/en";
import { pt } from "@/content/i18n/pt";
import type { Locale } from "@/lib/locales";

const dictionaries: Record<Locale, Dictionary> = { en, pt };

export function getDictionary(locale: Locale): Dictionary {
  return dictionaries[locale] ?? en;
}

export type { Dictionary, RichText } from "@/content/i18n/en";
