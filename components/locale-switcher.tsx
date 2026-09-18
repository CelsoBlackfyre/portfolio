"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { LOCALES, LOCALE_SHORT, LOCALE_TAG, swapLocaleInPath, type Locale } from "@/lib/locales";

export function LocaleSwitcher({
  locale,
  label,
  className,
}: {
  locale: Locale;
  label: string;
  className?: string;
}) {
  const pathname = usePathname();
  const current = pathname && pathname.length > 0 ? pathname : `/${locale}`;

  return (
    <div
      role="group"
      aria-label={label}
      className={`flex items-center gap-0.5 rounded-full border border-line bg-white/[0.03] p-0.5 ${className ?? ""}`}
    >
      {LOCALES.map((option) => {
        const active = option === locale;
        return (
          <Link
            key={option}
            href={swapLocaleInPath(current, option)}
            hrefLang={LOCALE_TAG[option]}
            aria-current={active ? "true" : undefined}
            className={`rounded-full px-2.5 py-1 font-mono text-[0.6875rem] tracking-[0.08em] transition-colors duration-300 ${
              active
                ? "bg-fg text-void"
                : "text-faint hover:bg-white/[0.06] hover:text-fg"
            }`}
          >
            {LOCALE_SHORT[option]}
          </Link>
        );
      })}
    </div>
  );
}
