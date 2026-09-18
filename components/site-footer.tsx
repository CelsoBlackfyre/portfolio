import Link from "next/link";
import { GitHubIcon, GitLabIcon, LinkedInIcon } from "@/components/icons";
import { LocaleSwitcher } from "@/components/locale-switcher";
import type { Dictionary } from "@/lib/dictionary";
import { localePath, type Locale } from "@/lib/locales";
import { socialLinks } from "@/content/profile";

const iconFor: Record<string, (props: { className?: string }) => React.JSX.Element> = {
  GitHub: GitHubIcon,
  LinkedIn: LinkedInIcon,
  GitLab: GitLabIcon,
};

export function SiteFooter({ locale, dict }: { locale: Locale; dict: Dictionary }) {
  const socials = socialLinks();
  const nav = [
    { label: dict.nav.work, path: "/work" },
    { label: dict.nav.about, path: "/about" },
    { label: dict.nav.contact, path: "/contact" },
  ];

  return (
    <footer className="mt-auto border-t border-line">
      <div className="container-page py-14 sm:py-16">
        <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-xl">
            <h2 className="display-tight text-2xl text-fg sm:text-3xl">
              {dict.footer.ctaTitle}
            </h2>
            <p className="lede mt-3 text-[0.9375rem]">{dict.footer.ctaBody}</p>
          </div>
          <Link href={localePath(locale, "/contact")} className="btn btn-primary shrink-0">
            {dict.actions.getInTouch}
          </Link>
        </div>

        <div className="mt-14 grid gap-10 sm:grid-cols-3">
          <p className="max-w-xs text-sm leading-relaxed text-muted">{dict.footer.tagline}</p>

          <nav aria-label={dict.footer.navigate}>
            <p className="label">{dict.footer.navigate}</p>
            <ul className="mt-5 space-y-3">
              {nav.map((item) => (
                <li key={item.path}>
                  <Link
                    href={localePath(locale, item.path)}
                    className="link-underline text-sm text-muted transition-colors hover:text-fg"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div>
            <p className="label">{dict.footer.elsewhere}</p>
            <ul className="mt-5 space-y-3">
              {socials.map((social) => {
                const Icon = iconFor[social.label];
                return (
                  <li key={social.label}>
                    <a
                      href={social.href}
                      target="_blank"
                      rel="noreferrer noopener"
                      className="inline-flex items-center gap-2.5 text-sm text-muted transition-colors hover:text-fg"
                    >
                      {Icon ? <Icon className="h-4 w-4" /> : null}
                      {social.label}
                    </a>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>

        <div className="mt-14 flex flex-col gap-5 border-t border-line pt-8 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-xs leading-relaxed text-faint">{dict.footer.builtWith}</p>
          <LocaleSwitcher locale={locale} label={dict.a11y.language} />
        </div>
      </div>
    </footer>
  );
}
