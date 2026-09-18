import type { Metadata } from "next";
import { Geist, Geist_Mono, Space_Grotesk } from "next/font/google";
import "@/app/globals.css";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { profile } from "@/content/profile";
import { getDictionary } from "@/lib/dictionary";
import { LOCALES, LOCALE_TAG, toLocale } from "@/lib/locales";

const geist = Geist({
  subsets: ["latin"],
  variable: "--font-geist-sans",
  display: "swap",
});

const geistMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-geist-mono",
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
  display: "swap",
});

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL;

export function generateStaticParams() {
  return LOCALES.map((locale) => ({ locale }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const locale = toLocale((await params).locale);
  const dict = getDictionary(locale);

  return {
    ...(siteUrl ? { metadataBase: new URL(siteUrl) } : {}),
    title: {
      default: dict.meta.title,
      template: `%s · ${profile.name}`,
    },
    description: dict.meta.description,
    applicationName: `${profile.name}, ${dict.meta.role}`,
    authors: [{ name: profile.name, url: profile.github }],
    creator: profile.name,
    keywords: [
      "Celso Martins",
      "full-stack developer",
      "TypeScript",
      "Go",
      "Laravel",
      "Ruby on Rails",
      "PostgreSQL",
      "Belo Horizonte",
    ],
    alternates: {
      canonical: `/${locale}`,
      languages: {
        en: "/en",
        pt: "/pt",
        "x-default": "/en",
      },
    },
    openGraph: {
      type: "website",
      title: dict.meta.title,
      description: dict.meta.description,
      siteName: profile.name,
      locale: LOCALE_TAG[locale],
      url: `/${locale}`,
    },
    twitter: {
      card: "summary",
      title: dict.meta.title,
      description: dict.meta.description,
    },
  };
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const locale = toLocale((await params).locale);
  const dict = getDictionary(locale);

  return (
    <html
      lang={LOCALE_TAG[locale]}
      className={`${geist.variable} ${geistMono.variable} ${spaceGrotesk.variable} h-full antialiased`}
    >
      <body className="flex min-h-dvh flex-col bg-void text-fg">
        <div aria-hidden="true" className="aura pointer-events-none fixed inset-0 -z-10" />
        <div aria-hidden="true" className="noise pointer-events-none fixed inset-0 -z-10" />
        <noscript>
          <style>{`.reveal{opacity:1;transform:none}`}</style>
        </noscript>

        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[100] focus:rounded-full focus:bg-fg focus:px-4 focus:py-2 focus:text-sm focus:text-void"
        >
          {dict.a11y.skipToContent}
        </a>

        <SiteHeader
          locale={locale}
          name={profile.name}
          role={dict.meta.role}
          initials={profile.initials}
          github={profile.github}
          nav={[
            { label: dict.nav.work, path: "/work" },
            { label: dict.nav.about, path: "/about" },
            { label: dict.nav.contact, path: "/contact" },
          ]}
          labels={{
            menu: dict.a11y.menu,
            closeMenu: dict.a11y.closeMenu,
            language: dict.a11y.language,
            primaryNav: dict.a11y.primaryNav,
            github: dict.actions.openGithub,
          }}
        />

        <main id="main" className="flex-1">
          {children}
        </main>

        <SiteFooter locale={locale} dict={dict} />
      </body>
    </html>
  );
}
