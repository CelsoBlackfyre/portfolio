import Image from "next/image";
import { ArrowUpRightIcon, EnvelopeIcon, GitHubIcon, MapPinIcon } from "@/components/icons";
import { FactList, Label, Rise, StatusPill } from "@/components/primitives";
import { profile } from "@/content/profile";
import { getDictionary } from "@/lib/dictionary";
import { toLocale } from "@/lib/locales";
import { pageMetadata } from "@/lib/metadata";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const locale = toLocale((await params).locale);
  const dict = getDictionary(locale);
  return pageMetadata({ locale, path: "/contact", title: dict.nav.contact, description: dict.contact.lede });
}

export default async function ContactPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const locale = toLocale((await params).locale);
  const dict = getDictionary(locale);

  return (
    <section className="pt-14 pb-20 sm:pt-20 sm:pb-24">
      <div className="container-page">
        <Rise>
          <StatusPill label={dict.home.availability} />
        </Rise>

        <Rise delay={70}>
          <h1 className="display mt-8 max-w-3xl text-[2.5rem] sm:text-5xl lg:text-6xl">
            {dict.contact.title}
          </h1>
        </Rise>

        <Rise delay={140}>
          <p className="lede mt-6 max-w-[54ch]">{dict.contact.lede}</p>
        </Rise>

        <Rise delay={200}>
          <div className="mt-12 border-y border-line">
            <a
              href={`mailto:${profile.email}`}
              className="group flex items-center justify-between gap-4 border-b border-line py-6 transition-colors hover:border-line-strong"
            >
              <span className="flex min-w-0 items-center gap-4">
                <EnvelopeIcon className="h-5 w-5 shrink-0 text-muted transition-colors group-hover:text-fg" />
                <span className="display-tight text-base break-all text-fg sm:text-2xl">
                  {profile.email}
                  <span className="sr-only"> ({dict.a11y.emailHint})</span>
                </span>
              </span>
              <ArrowUpRightIcon className="h-4 w-4 shrink-0 text-faint transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-ember-bright" />
            </a>

            <a
              href={profile.github}
              target="_blank"
              rel="noreferrer noopener"
              className="group flex items-center justify-between gap-4 py-6"
            >
              <span className="flex min-w-0 items-center gap-4">
                <GitHubIcon className="h-5 w-5 shrink-0 text-muted transition-colors group-hover:text-fg" />
                <span className="display-tight text-base text-fg sm:text-2xl">
                  @{profile.handle}
                  <span className="sr-only"> ({dict.a11y.openInNewTab})</span>
                </span>
              </span>
              <ArrowUpRightIcon className="h-4 w-4 shrink-0 text-faint transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-ember-bright" />
            </a>
          </div>
        </Rise>

        <div className="mt-16 grid gap-14 lg:grid-cols-[0.42fr_0.58fr] lg:gap-20">
          <Rise>
            <div className="mb-6 flex items-center gap-3.5">
              <div className="relative h-12 w-12 shrink-0 overflow-hidden rounded-xl border border-line-strong bg-ink p-0.5 shadow-md">
                <Image
                  src={profile.avatar}
                  alt={profile.name}
                  width={48}
                  height={48}
                  className="h-full w-full rounded-[0.625rem] object-cover"
                />
              </div>
              <div>
                <p className="text-sm font-medium text-fg">{profile.name}</p>
                <p className="font-mono text-xs text-muted">{profile.location[locale]}</p>
              </div>
            </div>
            <Label>{dict.contact.availabilityTitle}</Label>
            <p className="lede mt-4 text-[0.9375rem]">{dict.contact.availabilityBody}</p>
            <p className="mt-8 flex items-center gap-2.5 text-sm text-muted">
              <MapPinIcon className="h-4 w-4 text-faint" />
              {profile.location[locale]}, {profile.timezone}
            </p>
          </Rise>

          <Rise delay={60}>
            <FactList items={dict.contact.facts} />
          </Rise>
        </div>
      </div>
    </section>
  );
}
