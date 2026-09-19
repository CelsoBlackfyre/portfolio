import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeftIcon, ArrowRightIcon, CheckIcon } from "@/components/icons";
import { ChipList, Label, Rise, Section } from "@/components/primitives";
import { ProjectVisual } from "@/components/project-visual";
import { Reveal } from "@/components/reveal";
import { neighbours, projects } from "@/content/archive";
import { getDictionary } from "@/lib/dictionary";
import { localePath, toLocale } from "@/lib/locales";
import { pageMetadata } from "@/lib/metadata";
import { loc } from "@/lib/types";

const blackframeWalkthrough = [
  {
    src: "/work/blackframe/01-home-feed.png",
    title: {
      en: "01 / Visual Feed & Social Timeline",
      pt: "01 / Feed Visual & Linha do Tempo",
    },
    description: {
      en: "Monochrome-first social surface with real-time reaction counts, story rails, and clean metadata hierarchy.",
      pt: "Superfície social monocromática com contagens em tempo real, trilha de histórias e hierarquia limpa de metadados.",
    },
  },
  {
    src: "/work/blackframe/02-pulse-conversations.png",
    title: {
      en: "02 / Real-Time Pulse Conversations",
      pt: "02 / Conversas Pulse em Tempo Real",
    },
    description: {
      en: "Threaded audio-visual conversation flow with instant message delivery and tactile engagement states.",
      pt: "Fluxo de conversas áudio-visuais com entrega instantânea de mensagens e estados táteis de engajamento.",
    },
  },
  {
    src: "/work/blackframe/03-geek-shelf.png",
    title: {
      en: "03 / Geek Shelf Hardware Inventory",
      pt: "03 / Geek Shelf e Inventário de Hardware",
    },
    description: {
      en: "Catalog of mechanical keyboards, custom audio gear, and developer workstation rigs with spec sheets.",
      pt: "Catálogo de teclados mecânicos, equipamentos de áudio e setups com fichas técnicas detalhadas.",
    },
  },
  {
    src: "/work/blackframe/04-shelf-match.png",
    title: {
      en: "04 / Interactive Shelf Match",
      pt: "04 / Comparador e Match de Setup",
    },
    description: {
      en: "Algorithmic hardware pairing engine comparing audio, switch, and ergonomic setups across creators.",
      pt: "Mecanismo de pareamento algorítmico comparando áudio, switches e ergonomia entre criadores.",
    },
  },
  {
    src: "/work/blackframe/08-direct-messages.png",
    title: {
      en: "05 / Direct Messaging System",
      pt: "05 / Sistema de Mensagens Diretas",
    },
    description: {
      en: "Real-time chat with optimistic UI updates, presence indicators, and rich inline media attachments.",
      pt: "Chat em tempo real com atualizações otimistas de interface, indicadores de presença e anexos de mídia.",
    },
  },
  {
    src: "/work/blackframe/09-create-post.png",
    title: {
      en: "06 / Multi-Format Composer",
      pt: "06 / Compositor Multiformato",
    },
    description: {
      en: "Fluid creation drawer supporting photo aspect ratios, hardware tagging, and markdown captions.",
      pt: "Gaveta fluida de criação com suporte a aspect ratios fotográficos, marcação de hardware e legendas.",
    },
  },
];

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}) {
  const { locale: rawLocale, slug } = await params;
  const locale = toLocale(rawLocale);
  const project = projects.find((item) => item.slug === slug);

  if (!project) notFound();

  return pageMetadata({
    locale,
    path: `/work/${project.slug}`,
    title: project.name,
    description: loc(project.tagline, locale),
    type: "article",
    projectImage: true,
  });
}

export default async function ProjectPage({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}) {
  const { locale: rawLocale, slug } = await params;
  const locale = toLocale(rawLocale);
  const dict = getDictionary(locale);
  const project = projects.find((item) => item.slug === slug);

  if (!project) notFound();

  const { previous, next } = neighbours(project.slug);

  return (
    <article>
      <div className="container-page pt-12 sm:pt-14">
        <Rise>
          <Link
            href={localePath(locale, "/work")}
            className="inline-flex items-center gap-2 text-sm text-muted transition-colors hover:text-fg"
          >
            <ArrowLeftIcon className="h-4 w-4" />
            {dict.nav.work}
          </Link>
        </Rise>

        <Rise delay={60}>
          <div className="mt-12">
            <Label>{dict.labels.caseStudy}</Label>
          </div>

          <h1 className="display mt-5 text-[3rem] sm:text-6xl lg:text-7xl">{project.name}</h1>

          <p className="lede mt-6 max-w-[62ch] text-base sm:text-lg">
            {loc(project.tagline, locale)}
          </p>
        </Rise>

        <Rise delay={120}>
          <div className="mt-8 flex flex-wrap items-center gap-2">
            {project.sourceKind === "proprietary" ? (
              <span className="chip">{dict.project.proprietarySource}</span>
            ) : null}
            {project.sourceKind === "private" ? (
              <span className="chip">{dict.project.privateSource}</span>
            ) : null}
            {project.sourceKind === "local" ? (
              <span className="chip">{dict.project.localSource}</span>
            ) : null}
            {project.liveUrl ? (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noreferrer noopener"
                className="chip transition-colors hover:text-fg"
              >
                {dict.labels.live}
              </a>
            ) : null}
          </div>
        </Rise>
      </div>

      <div className="container-page mt-12">
        <div className="frame aspect-[16/9] sm:aspect-[21/9]">
          <ProjectVisual project={project} priority sizes="100vw" />
        </div>
      </div>

      <div className="container-page grid gap-12 pt-16 sm:pt-20 lg:grid-cols-[0.4fr_0.6fr] lg:gap-16">
        <dl className="space-y-7">
          <div>
            <dt className="label">{dict.labels.role}</dt>
            <dd className="mt-2.5 text-sm leading-relaxed text-fg/90">
              {loc(project.role, locale)}
            </dd>
          </div>
          <div>
            <dt className="label">{dict.labels.status}</dt>
            <dd className="mt-2.5 text-sm leading-relaxed text-fg/90">
              {loc(project.status, locale)}
            </dd>
          </div>
          <div>
            <dt className="label">{dict.labels.source}</dt>
            <dd className="mt-2.5 text-sm leading-relaxed text-fg/90">
              {project.sourceKind === "proprietary" ? dict.project.proprietaryNote : null}
              {project.sourceKind === "private" ? dict.project.privateNote : null}
              {project.sourceKind === "local" ? dict.project.localNote : null}
              {project.liveUrl ? dict.project.liveNote : null}
            </dd>
          </div>
        </dl>

        <div>
          <h2 className="display-tight text-2xl text-fg sm:text-3xl">{dict.project.brief}</h2>
          <p className="lede mt-6 text-[0.9375rem] sm:text-base">{loc(project.brief, locale)}</p>
        </div>
      </div>

      <Section className="py-16! sm:py-20!">
        <div className="container-page grid gap-10 lg:grid-cols-[0.4fr_0.6fr] lg:gap-16">
          <h2 className="display-tight text-2xl text-fg sm:text-3xl">{dict.project.build}</h2>

          <ol className="grid gap-7">
            {loc(project.build, locale).map((step, index) => (
              <li key={step} className="flex gap-5">
                <span className="pt-0.5 font-mono text-[0.6875rem] text-faint">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <p className="text-[0.9375rem] leading-relaxed text-fg/90">{step}</p>
              </li>
            ))}
          </ol>
        </div>
      </Section>

      {project.slug === "blackframe" ? (
        <Section className="border-t border-line py-16! sm:py-20!">
          <div className="container-page">
            <Reveal>
              <h2 className="display-tight text-2xl text-fg sm:text-3xl">
                {locale === "pt"
                  ? "Arquitetura de Interface & Fluxos Principais"
                  : "Interface Architecture & Key Flows"}
              </h2>
              <p className="lede mt-3 max-w-[64ch] text-sm sm:text-base">
                {locale === "pt"
                  ? "Capturas em alta resolução do produto rodando em ambiente local com dados reais, estados de interação e paleta de alto contraste."
                  : "High-resolution captures of the live application running in local development with real state, interaction details, and high-contrast styling."}
              </p>
            </Reveal>

            <div className="gallery-grid mt-12">
              {blackframeWalkthrough.map((item, index) => (
                <Reveal key={item.src} delay={(index % 2) * 60}>
                  <figure className="gallery-card">
                    <div className="gallery-image-wrap">
                      <Image
                        src={item.src}
                        alt={loc(item.title, locale)}
                        width={1280}
                        height={800}
                        sizes="(min-width: 1024px) 640px, 95vw"
                        loading="eager"
                        className="gallery-image"
                      />
                    </div>
                    <figcaption className="gallery-caption">
                      <h3 className="text-base font-medium text-fg">{loc(item.title, locale)}</h3>
                      <p className="mt-2 text-sm leading-relaxed text-muted">
                        {loc(item.description, locale)}
                      </p>
                    </figcaption>
                  </figure>
                </Reveal>
              ))}
            </div>
          </div>
        </Section>
      ) : null}

      <Section className="border-t border-line py-16! sm:py-20!">
        <div className="container-page">
          <h2 className="display-tight text-2xl text-fg sm:text-3xl">
            {dict.project.highlights}
          </h2>

          <div className="mt-12 grid gap-x-12 gap-y-10 sm:grid-cols-2">
            {loc(project.highlights, locale).map((highlight) => (
              <div key={highlight.title}>
                <h3 className="text-base font-medium text-fg">{highlight.title}</h3>
                <p className="mt-3 max-w-[52ch] text-sm leading-relaxed text-muted">
                  {highlight.body}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-20 grid gap-x-12 gap-y-12 border-t border-line pt-12 lg:grid-cols-[1.1fr_0.9fr]">
            <div>
              <h2 className="display-tight text-2xl text-fg sm:text-3xl">
                {dict.project.signals}
              </h2>
              <ul className="mt-7 grid gap-3.5">
                {loc(project.signals, locale).map((signal) => (
                  <li key={signal} className="flex items-start gap-3 text-sm text-fg/90">
                    <CheckIcon className="mt-0.5 h-4 w-4 shrink-0 text-ember" />
                    {signal}
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h2 className="display-tight text-2xl text-fg sm:text-3xl">{dict.project.stack}</h2>
              <div className="mt-7">
                <ChipList items={project.stack} />
              </div>
            </div>
          </div>
        </div>
      </Section>

      <Section className="border-t border-line py-14!">
        <div className="container-page grid gap-8 sm:grid-cols-2">
          {previous ? (
            <Link
              href={localePath(locale, `/work/${previous.slug}`)}
              className="group flex items-baseline gap-3"
            >
              <ArrowLeftIcon className="h-4 w-4 shrink-0 text-faint transition-transform duration-300 group-hover:-translate-x-0.5" />
              <span>
                <span className="label block">{dict.project.previous}</span>
                <span className="display-tight mt-2 block text-xl text-fg">{previous.name}</span>
              </span>
            </Link>
          ) : null}

          {next ? (
            <Link
              href={localePath(locale, `/work/${next.slug}`)}
              className="group flex items-baseline gap-3 sm:justify-end sm:text-right"
            >
              <span>
                <span className="label block">{dict.project.next}</span>
                <span className="display-tight mt-2 block text-xl text-fg">{next.name}</span>
              </span>
              <ArrowRightIcon className="h-4 w-4 shrink-0 text-faint transition-transform duration-300 group-hover:translate-x-0.5" />
            </Link>
          ) : null}
        </div>
      </Section>
    </article>
  );
}
