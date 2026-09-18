import type { Locale } from "@/lib/locales";

export type Localized<T> = Record<Locale, T>;

export function loc<T>(value: Localized<T>, locale: Locale): T {
  return value[locale];
}
