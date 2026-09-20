import Image from "next/image";
import Link from "next/link";
import { ArrowRightIcon, ArrowUpRightIcon } from "@/components/icons";
import { RichHeadline, Rise, Section, SectionHeading, StatusPill } from "@/components/primitives";
import { ProjectTile } from "@/components/project-card";
import { Reveal } from "@/components/reveal";
import { StackExplorer } from "@/components/stack-explorer";
import { projects } from "@/content/archive";
import { professional, profile, toolkit } from "@/content/profile";
import { getDictionary } from "@/lib/dictionary";
import { localePath, toLocale } from "@/lib/locales";
import { loc } from "@/lib/types";

export default async function HomePage({ params }: { params: Promise<{ locale: string }> }) {
  const locale = toLocale((await params).locale);
  const dict = getDictionary(locale);
  const pt = locale === "pt";
  const featured = projects.find((project) => project.slug === "blackframe")!;
  const selected = ["jupiter", "cucaforms", "tenda", "arena"].map((slug) => projects.find((project) => project.slug === slug)!);

  return (
    <>
      <section className="hero-section">
        <div className="container-page hero-grid">
          <div className="hero-copy">
            <Rise>
              <div className="flex items-center gap-3">
                <div className="relative h-7 w-7 shrink-0 overflow-hidden rounded-full border border-line-strong ring-1 ring-ember/30">
                  <Image
                    src={profile.avatar}
                    alt={profile.name}
                    width={28}
                    height={28}
                    className="h-full w-full object-cover"
                  />
                </div>
                <StatusPill label={dict.home.availability} />
              </div>
            </Rise>
            <Rise delay={70}>
              <h1 className="display hero-title">
                {dict.home.title.map((line, index) => <span key={index} className="block"><RichHeadline line={line} /></span>)}
              </h1>
            </Rise>
            <Rise delay={140}><p className="lede hero-lede">{dict.home.lede}</p></Rise>
            <Rise delay={210}>
              <div className="mt-8 flex flex-wrap gap-3">
                <Link href={localePath(locale, "/work")} className="btn btn-primary">{dict.actions.viewWork}<ArrowRightIcon className="h-4 w-4" /></Link>
                <Link href={localePath(locale, "/about")} className="btn btn-ghost">{dict.actions.aboutMe}</Link>
              </div>
            </Rise>
          </div>
          <div className="hero-art rise" aria-hidden="true">
            <Image src="/images/engineering-sculpture.webp" alt="" fill preload sizes="(min-width: 1024px) 48vw, (min-width: 768px) 42vw, 90vw" className="hero-sculpture object-cover" />
          </div>
        </div>
      </section>

      <section className="proof-section" aria-label={pt ? "Experiência em números" : "Experience in numbers"}>
        <div className="container-page proof-grid">
          {dict.home.proof.map((item) => <div key={item.label} className="proof-item"><p className="display proof-value">{item.value}</p><p className="text-sm text-muted">{item.label}</p></div>)}
        </div>
      </section>

      <Section>
        <div className="container-page">
          <SectionHeading title={dict.home.work.title} lede={dict.home.work.lede} id="work" />
          <Reveal className="mt-12">
            <article className="featured-showcase group">
              <Link href={localePath(locale, "/work/blackframe")} className="featured-screen" aria-label={`${featured.name}, ${dict.actions.viewCaseStudy}`}>
                <Image src="/work/blackframe/01-home-feed.png" alt={pt ? "Interface do BlackFrame com feed visual, publicações e navegação" : "BlackFrame interface with its visual feed, posts, and navigation"} width={1440} height={1100} sizes="(min-width: 1280px) 1100px, 95vw" className="featured-screenshot" />
              </Link>
              <div className="featured-caption">
                <div><p className="text-sm text-muted">{loc(featured.kind, locale)}</p><h3 className="display mt-3 text-4xl sm:text-5xl">{featured.name}</h3></div>
                <p className="text-sm leading-relaxed text-muted max-w-sm">{loc(featured.tagline, locale)}</p>
                <Link href={localePath(locale, "/work/blackframe")} className="project-open" aria-label={`${featured.name}, ${dict.actions.viewCaseStudy}`}><ArrowUpRightIcon className="h-6 w-6" /></Link>
              </div>
            </article>
          </Reveal>
          <div className="selected-grid mt-16">
            {selected.map((project) => <Reveal key={project.slug}><ProjectTile project={project} locale={locale} cta={dict.actions.viewCaseStudy} /></Reveal>)}
          </div>
          <Reveal className="mt-12"><Link href={localePath(locale, "/work")} className="btn btn-ghost">{dict.actions.viewWork}<ArrowRightIcon className="h-4 w-4" /></Link></Reveal>
        </div>
      </Section>

      <Section className="about-section">
        <div className="container-page about-grid">
          <Reveal>
            <div className="mb-6 flex items-center gap-4">
              <div className="relative h-16 w-16 shrink-0 overflow-hidden rounded-2xl border border-line-strong bg-ink p-0.5 shadow-lg">
                <Image
                  src={profile.avatar}
                  alt={profile.name}
                  width={64}
                  height={64}
                  className="h-full w-full rounded-[0.875rem] object-cover"
                />
              </div>
              <div>
                <p className="text-base font-medium text-fg">{profile.name}</p>
                <p className="font-mono text-xs text-muted">
                  {loc(profile.location, locale)} · {loc(professional.focus, locale)}
                </p>
              </div>
            </div>
            <p className="label">{pt ? "Além da interface" : "Beyond the interface"}</p><h2 className="display-tight mt-6 text-4xl sm:text-5xl">{pt ? "Cada camada importa." : "Every layer matters."}</h2><Link href={localePath(locale, "/about")} className="mt-8 inline-flex items-center gap-3 text-sm text-ember-bright link-underline">{dict.actions.aboutMe}<ArrowUpRightIcon className="h-4 w-4" /></Link></Reveal>
          <div className="engineering-principles">
            {(pt ? [
              ["Interfaces que fazem sentido", "Do primeiro clique ao celular de 380px. React, contratos tipados e atenção ao que a pessoa precisa fazer."],
              ["Servidores que sustentam o produto", "Estado em tempo real, regras de negócio e permissões verificadas onde a verdade precisa estar."],
              ["Dados que sobrevivem ao deploy", "Constraints, migrations aditivas e testes que protegem o que não pode ser perdido."],
            ] : [
              ["Interfaces that make sense", "From the first click to a 380px phone. React, typed contracts, and attention to what someone needs to do."],
              ["Servers that hold their ground", "Real-time state, business rules, and permissions verified where the source of truth belongs."],
              ["Data that outlives the deploy", "Constraints, additive migrations, and tests that protect what cannot be lost."],
            ]).map(([title, body], index) => <Reveal key={title} delay={index * 65}><div className="principle"><h3 className="display-tight text-xl sm:text-2xl">{title}</h3><p className="mt-3 text-sm leading-relaxed text-muted">{body}</p></div></Reveal>)}
          </div>
        </div>
      </Section>

      <Section>
        <div className="container-page">
          <SectionHeading title={dict.home.toolkit.title} lede={pt ? "Explore a stack e veja onde cada tecnologia entra no trabalho." : "Explore the stack and see where each technology shows up in the work."} />
          <div className="mt-12"><StackExplorer locale={locale} groups={toolkit.map((group) => ({ label: loc(group.label, locale), items: group.items }))} projects={projects.map((project) => ({ name: project.name, href: localePath(locale, `/work/${project.slug}`), stack: project.stack }))} /></div>
        </div>
      </Section>

      <Section className="open-source-section">
        <div className="container-page open-source-grid">
          <Reveal><h2 className="display-tight text-3xl sm:text-4xl">{dict.home.github.title}</h2><p className="lede mt-5 max-w-lg">{dict.home.github.lede}</p></Reveal>
          <Reveal delay={80} className="flex flex-col items-start gap-5"><Link href={localePath(locale, "/work#repositories")} className="btn btn-primary">{pt ? "Explorar repositórios" : "Explore repositories"}<ArrowRightIcon className="h-4 w-4" /></Link><a href={profile.github} target="_blank" rel="noreferrer noopener" className="text-sm text-muted link-underline">@{profile.handle}<span className="sr-only"> ({dict.a11y.openInNewTab})</span></a></Reveal>
        </div>
      </Section>
    </>
  );
}
