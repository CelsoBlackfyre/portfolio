"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { CloseIcon, GitHubIcon, MenuIcon } from "@/components/icons";
import { LocaleSwitcher } from "@/components/locale-switcher";
import { localePath, type Locale } from "@/lib/locales";

type NavItem = { label: string; path: string };

export function SiteHeader({
  locale,
  name,
  role,
  initials,
  nav,
  labels,
  github,
}: {
  locale: Locale;
  name: string;
  role: string;
  initials: string;
  nav: NavItem[];
  labels: {
    menu: string;
    closeMenu: string;
    language: string;
    primaryNav: string;
    github: string;
  };
  github: string;
}) {
  const pathname = usePathname() ?? `/${locale}`;
  const [openedAt, setOpenedAt] = useState<string | null>(null);
  const open = openedAt === pathname;

  useEffect(() => {
    if (!open) return;

    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpenedAt(null);
    };

    document.addEventListener("keydown", onKeyDown);
    return () => {
      document.body.style.overflow = previous;
      document.removeEventListener("keydown", onKeyDown);
    };
  }, [open]);

  const isActive = (path: string) => {
    const href = localePath(locale, path);
    if (path === "/") return pathname === href;
    return pathname === href || pathname.startsWith(`${href}/`);
  };

  return (
    <header className="sticky top-0 z-50 border-b border-line bg-void/80 backdrop-blur-xl">
      <div className="container-page flex h-16 items-center justify-between gap-6 lg:h-[4.5rem]">
        <Link
          href={localePath(locale)}
          className="group flex items-center gap-3"
          aria-label={`${name}, ${role}`}
        >
          <span
            aria-hidden="true"
            className="grid h-9 w-9 place-items-center rounded-xl border border-line-strong font-mono text-[0.7rem] tracking-[0.06em] text-fg transition-colors duration-300 group-hover:border-ember/70 group-hover:text-ember-bright"
            style={{
              backgroundImage:
                "linear-gradient(140deg, rgba(224,68,106,0.22), rgba(224,68,106,0.06))",
            }}
          >
            {initials}
          </span>
          <span className="hidden flex-col leading-tight sm:flex">
            <span className="text-sm font-medium text-fg">{name}</span>
            <span className="font-mono text-[0.6875rem] tracking-[0.06em] text-faint">
              {role}
            </span>
          </span>
        </Link>

        <nav aria-label={labels.primaryNav} className="hidden items-center gap-1 md:flex">
          {nav.map((item) => {
            const active = isActive(item.path);
            return (
              <Link
                key={item.path}
                href={localePath(locale, item.path)}
                aria-current={active ? "page" : undefined}
                className={`relative rounded-full px-3.5 py-2 text-sm transition-colors duration-300 ${
                  active ? "text-fg" : "text-muted hover:text-fg"
                }`}
              >
                {item.label}
                {active ? (
                  <span
                    aria-hidden="true"
                    className="absolute inset-x-3.5 -bottom-0.5 h-px bg-gradient-to-r from-transparent via-ember to-transparent"
                  />
                ) : null}
              </Link>
            );
          })}
        </nav>

        <div className="flex items-center gap-2">
          <LocaleSwitcher locale={locale} label={labels.language} className="hidden sm:flex" />
          <a
            href={github}
            target="_blank"
            rel="noreferrer noopener"
            aria-label={labels.github}
            className="hidden h-9 w-9 place-items-center rounded-full border border-line text-muted transition-colors duration-300 hover:border-line-strong hover:text-fg sm:grid"
          >
            <GitHubIcon className="h-4 w-4" />
          </a>
          <button
            type="button"
            onClick={() => setOpenedAt((current) => (current === pathname ? null : pathname))}
            aria-label={open ? labels.closeMenu : labels.menu}
            aria-expanded={open}
            className="grid h-9 w-9 place-items-center rounded-full border border-line text-muted transition-colors duration-300 hover:text-fg md:hidden"
          >
            {open ? <CloseIcon className="h-4 w-4" /> : <MenuIcon className="h-4 w-4" />}
          </button>
        </div>
      </div>

      {open ? (
        <div className="fixed inset-x-0 top-16 bottom-0 z-40 border-t border-line bg-void/97 backdrop-blur-xl md:hidden">
          <div className="container-page flex h-full flex-col justify-between py-10">
            <nav aria-label={labels.primaryNav} className="flex flex-col">
              {nav.map((item, index) => {
                const active = isActive(item.path);
                return (
                  <Link
                    key={item.path}
                    href={localePath(locale, item.path)}
                    aria-current={active ? "page" : undefined}
                    className="group flex items-baseline justify-between border-b border-line py-5"
                  >
                    <span
                      className={`display-tight text-4xl ${active ? "text-ember-bright" : "text-fg"}`}
                    >
                      {item.label}
                    </span>
                    <span className="font-mono text-[0.6875rem] text-faint">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                  </Link>
                );
              })}
            </nav>

            <div className="flex items-center justify-between gap-4">
              <LocaleSwitcher locale={locale} label={labels.language} />
              <a
                href={github}
                target="_blank"
                rel="noreferrer noopener"
                className="inline-flex items-center gap-2 text-sm text-muted transition-colors hover:text-fg"
              >
                <GitHubIcon className="h-4 w-4" />
                {labels.github}
              </a>
            </div>
          </div>
        </div>
      ) : null}
    </header>
  );
}
