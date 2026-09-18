# Celso Martins Portfolio

A bilingual (English / Português do Brasil) portfolio for **Celso Martins**, a full-stack developer in Belo Horizonte, Brazil. Five flagship case studies, a filterable archive of public repositories, and a dark editorial-grotesk visual language.

Built with Next.js 16 (App Router, React Server Components), React 19 and Tailwind CSS v4. No runtime dependencies, no external APIs: every content page is prerendered at build time.

## Routes

| Route             | What it is                                                            |
| ----------------- | --------------------------------------------------------------------- |
| `/`               | Redirects to `/en` or `/pt` based on the `Accept-Language` header     |
| `/en`, `/pt`      | Home: hero, proof band, featured work, about, toolkit, GitHub         |
| `/{locale}/work`  | Professional work and independent projects, plus a filterable repository archive |
| `/{locale}/work/[slug]` | Full case study: brief, build notes, highlights, stack, prev/next |
| `/{locale}/about` | How I work, what I build at work, principles, language breakdown          |
| `/{locale}/contact` | Availability, best route, location                                  |

Both locales are prerendered: 41 static pages, covering 14 systems (9 professional, 5 independent). Only the 404 catch-all renders on demand.

## Run it

```bash
npm install --include=dev
npm run dev          # http://localhost:3210
```

```bash
npm run build        # production build (prerenders every route)
npm run start        # serve the build
npm run lint         # ESLint
npx tsc --noEmit     # typecheck
```

The dev and start scripts pin port **3210**, chosen to avoid the usual defaults already taken on this machine (3000, 5173, 5175, 8080).

**Use `--include=dev` when installing.** If `NODE_ENV=production` is exported in your shell, npm also applies its `omit=dev` setting and silently skips every devDependency. Tailwind, TypeScript and ESLint vanish from `node_modules`, and the build then fails with `Cannot find module '@tailwindcss/postcss'`.

## Editing content

Everything the site says lives in `content/`. Nothing is hardcoded in the page components.

| File                   | Controls                                                                 |
| ---------------------- | ------------------------------------------------------------------------ |
| `content/profile.ts`   | Name, initials, location, timezone, email, social links, employer, toolkit groups, GitHub stats |
| `content/work.ts`      | The nine professional case studies                                       |
| `content/projects.ts`  | The five independent case studies, and the shared `Project` type        |
| `content/archive.ts`   | Combines both lists for the archive, case study pages and the sitemap    |
| `content/repos.ts`     | The public repository grid (name, language, live link, description)      |
| `content/i18n/en.ts`   | All interface copy in English, and the type contract (`Dictionary`)      |
| `content/i18n/pt.ts`   | The same copy in Brazilian Portuguese                                    |

Text that exists in two languages uses the `Localized<T>` type, which is just `{ en: T; pt: T }`. Read it with `loc(value, locale)`.

### Two things to fill in

1. **Social links.** In `content/profile.ts`, `linkedin` and `gitlab` are empty strings. Fill either one in and it appears automatically in the footer; empty entries are skipped, so nothing broken ships.
2. **Site URL.** Set `NEXT_PUBLIC_SITE_URL` (for example in `.env.local`) to get absolute canonical URLs, Open Graph URLs and sitemap entries. Without it, metadata falls back to relative URLs and the sitemap points at `localhost:3210`.

```bash
# .env.local
NEXT_PUBLIC_SITE_URL=https://your-domain.com
```

## Project covers

Each case study renders generative single-hue SVG artwork by default. To use a real screenshot instead, drop a file in:

```
public/work/<slug>/cover.png
```

Accepted names: `cover.png`, `cover.jpg`, `cover.jpeg`, `cover.webp`, `cover.avif`. Detection happens at build time in `lib/covers.ts`, so no code change is needed. The screenshot replaces the artwork on both the cards and the case study page.

Available slugs: `blackframe`, `blackfyre-editor`, `arena`, `jade-table`, `forme`.

## How the bilingual routing works

- `proxy.ts` runs before routing. If the path already starts with a supported locale it continues; otherwise it negotiates the locale from `Accept-Language` (falling back to English) and redirects, stripping unsupported locale prefixes such as `/fr/...`.
- `app/[locale]/layout.tsx` is the root layout: it sets `<html lang>`, loads fonts, and renders the header and footer.
- `lib/locales.ts` holds the locale list and path helpers; `lib/dictionary.ts` resolves a dictionary for a locale.
- Unsupported locales fall back to the default dictionary, and unknown paths render `app/[locale]/not-found.tsx`.

To add a language: add it to `LOCALES` in `lib/locales.ts`, add `LOCALE_LABEL` / `LOCALE_SHORT` / `LOCALE_TAG` entries, and add a dictionary file. TypeScript will list every missing key.

## Design system

The contract lives in `design-system/celso-martins-portfolio/MASTER.md`, including which suggestions were adopted and which were deliberately rejected. It was produced with the `ui-ux-pro-max` dataset (design-system query plus `typography`, `landing` and `ux` domain searches) and reviewed against the `design-taste-frontend` anti-slop rules.

`app/globals.css` implements it. Raw tokens are declared on `:root`, then mapped into Tailwind through `@theme inline`, so utilities (`bg-void`, `text-fg`, `border-line`) and the hand-written component classes (`.card`, `.chip`, `.btn`, `.display`, `.label`) resolve from the same values.

- **Type:** Space Grotesk (display, `-0.03em` tracking), Geist (body), Geist Mono (labels and metadata). All self-hosted through `next/font`.
- **Palette:** near-black canvas, warm off-white text, and exactly **one accent**: ember crimson `#e0446a`, taken from BlackFrame's own brand token. No second hue, no gradient text.
- **Shape:** one documented rule. Containers are 12px (`--radius-card`), interactive elements are full-pill (`--radius-pill`).
- **Motion:** a `Rise` wrapper animates page heroes on entry and a `Reveal` component flips a `data-visible` attribute through an `IntersectionObserver`. Both are CSS-driven, and `prefers-reduced-motion: reduce` renders final states immediately.
- **Contrast:** body text 8:1, labels and small text 5.3:1, button labels 18:1 against their own backgrounds.

## Publishing notes

`AI_CONTEXT.md` is a private working document. It maps an internal workspace, including client systems, internal URLs and colleague names. **Do not commit it to a public repository and do not deploy it.** Add it to `.gitignore` or keep it outside this folder if this repo ever becomes public.

Before publishing the professional section, check these:

- **Employer name.** `content/profile.ts` holds `professional.employer`. Set it to `""` and the company name disappears from the about page with no other edits.
- **Authorship wording.** Roles for Warden, Leitor AI, Automation, WeberScraping and markdown-converter could not be verified from local git history. Confirm the wording in `content/work.ts` matches what you actually did before this goes public.
- **Metrics.** Published figures (800 commits, 301 of 918 commits, about 930 tests, 1,000+ documents, about 1,881 reindexed records, about 40 test cases, about 25 endpoints) come from the context document. Re-validate any number before it appears on a resume.
- **Deliberately excluded.** Internal URLs, tenant and organisation identifiers, pipeline and branch names, and all colleague names are kept out of this repo. Shared team infrastructure (the AutoLISP drafting library) is not presented as personal work, and the time-clock userscript is left out. Say the word if either should be added.

## Deploying

Any Node host works, and Vercel needs no configuration beyond the `NEXT_PUBLIC_SITE_URL` environment variable. Because `proxy.ts` handles locale negotiation, static export (`output: "export"`) is not supported.
