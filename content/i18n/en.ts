export type RichText = { text: string; accent?: boolean }[];

export const en = {
  meta: {
    title: "Celso Martins, full-stack developer",
    role: "Full-stack developer",
    description:
      "Full-stack developer in Belo Horizonte, Brazil. AI knowledge platforms, BIM coordination, identity and document pipelines for engineering teams, plus five independent products.",
  },
  a11y: {
    skipToContent: "Skip to content",
    openInNewTab: "opens in a new tab",
    emailHint: "opens your email app",
    menu: "Open menu",
    closeMenu: "Close menu",
    language: "Language",
    primaryNav: "Primary",
    filterRepos: "Filter repositories by language",
  },
  nav: {
    work: "Work",
    about: "About",
    contact: "Contact",
  },
  actions: {
    viewWork: "View work",
    viewCaseStudy: "View case study",
    aboutMe: "About me",
    openGithub: "Open GitHub",
    getInTouch: "Get in touch",
    backHome: "Back to home",
  },
  labels: {
    role: "Role",
    status: "Status",
    source: "Source",
    live: "Live",
    caseStudy: "Case study",
    stack: "Stack",
    repositoryOne: "repository",
    repositoryMany: "repositories",
    professional: "Professional work",
    independent: "Independent projects",
    employer: "Employer",
  },
  home: {
    availability: "Open to full-time roles",
    title: [
      [{ text: "Complete products," }],
      [{ text: "end to end.", accent: true }],
    ] as RichText[],
    lede: "I'm Celso Martins. I design the schema, build the server and the interface, then keep them running.",
    proof: [
      { value: "14", label: "systems shipped" },
      { value: "9", label: "built for engineering teams" },
      { value: "30", label: "public repositories" },
      { value: "2017", label: "on GitHub since" },
    ],
    work: {
      title: "Systems that had to work for real.",
      lede: "Nine platforms built for engineering teams and five independent projects, each with a schema, a server, an interface and the tests behind it.",
    },
    about: {
      title: "I care about the part where it has to actually work.",
      body: [
        "I work across the whole stack because that is where the interesting problems live: a CRDT merge that survives a dropped connection, a WebSocket snapshot that has to arrive twenty times a second, a Postgres constraint that stops you overselling inventory, a layout that still makes sense on a 380px phone.",
        "In practice that means typed contracts at every edge, tests worth trusting, migrations that never lose data, and interfaces that explain themselves without a manual.",
      ],
      quote: "Just a guy trying to be a programmer.",
      quoteSource: "My GitHub bio, unchanged since 2017",
    },
    toolkit: {
      title: "What I reach for",
      lede: "Pulled from the repositories below, not from a list of logos.",
    },
    github: {
      title: "Smaller builds, wider range",
      lede: "Thirty public repositories across TypeScript, Go, PHP, JavaScript, C# and Astro. Experiments, interview challenges, mobile apps and tools that outgrew their tutorials.",
    },
  },
  work: {
    title: "Everything I've built and can show you.",
    lede: "Nine platforms built for engineering teams and five independent projects, plus the public repositories behind them, filtered by language.",
    professionalTitle: "Professional work",
    professionalLede:
      "Internal platforms at an engineering firm: a knowledge base with a retrieval assistant, BIM coordination, identity and access, document pipelines and computer vision. The codebases are corporate, so there are no repository links, and I am glad to walk through the architecture on a call.",
    independentTitle: "Independent projects",
    independentLede:
      "Built on my own time: a social platform, a collaborative editor, a multiplayer game, a Mahjong table and a storefront.",
    reposTitle: "Public repositories",
    reposLede: "Thirty repositories, newest first. The ones with a live link are deployed and clickable.",
    privateNote:
      "BlackFrame, Blackfyre Editor and arena are private or local-only projects. I am happy to walk through the code on a call.",
  },
  project: {
    brief: "The brief",
    build: "How it's built",
    highlights: "What stands out",
    signals: "Concrete details",
    stack: "Stack",
    previous: "Previous project",
    next: "Next project",
    proprietarySource: "Corporate codebase",
    privateSource: "Private repository",
    localSource: "Local project",
    proprietaryNote:
      "Corporate repository. I can walk through the architecture, the decisions and the code on a call.",
    privateNote: "Not public. Happy to walk through the code on a call.",
    localNote: "Runs locally with Docker or npm. Not published to a public remote.",
    liveNote: "Deployed and open to visitors.",
  },
  about: {
    title: "Full-stack, because the interesting problems don't respect boundaries.",
    lede: "I'm Celso Martins, a developer in Belo Horizonte, Brazil. I build products end to end and keep them maintainable after the first deploy.",
    sections: [
      {
        title: "How I work",
        body: [
          "The server owns the truth. Multiplayer state, inventory counts and permissions are decided where they can be verified, then rendered by clients that send intent instead of commands.",
          "Types go all the way to the edge. Zod on the wire, TypeScript across the app, validation at the boundary instead of trust.",
          "Data outlives the deploy. Additive migrations, archiving that preserves order history, and trash instead of immediate deletion.",
        ],
      },
      {
        title: "What I build at work",
        body: [
          "Engineering teams are the users. The platforms I build hold a thousand-document knowledge base with a retrieval assistant, coordinate BIM models in the browser and inside Revit and Navisworks, provision identity and access through SCIM, and turn scanned project documents into registries people actually trust.",
          "AI appears where it earns its place, in four different shapes: retrieval-grounded answers, model triage behind a human-review policy, vision-assisted document conversion and speech transcription. Each one has a fallback path for when the model is wrong.",
        ],
      },
      {
        title: "Where the range comes from",
        body: [
          "I started on GitHub in 2017 with small JavaScript experiments and kept going: Go services with Clean Architecture, PHP and Laravel applications, a Rails storefront with real Stripe webhooks, Rust and C# exercises, an Expo app, an Astro blog.",
          "That range is the useful part. Choosing between a WebSocket loop, a background queue and a plain request is easier once you have shipped all three.",
        ],
      },
      {
        title: "What I'm looking for",
        body: [
          "A product team that ships and expects engineers to own a feature from the schema to the interface. I am open to full-time roles, remote or in Minas Gerais.",
          "If that sounds like your team, the best way in is GitHub.",
        ],
      },
    ],
    principlesTitle: "Principles I keep coming back to",
    principles: [
      {
        title: "Typed contracts at the edges",
        body: "Every message that crosses a boundary gets parsed before it is trusted. Zod on sockets, typed props in the app, one source of truth for shapes.",
      },
      {
        title: "The server decides",
        body: "Clients render snapshots and send intent. Authority lives where it can be validated, which makes cheating and desync boring problems.",
      },
      {
        title: "Boring persistence is a feature",
        body: "Additive migrations, reversible trash, version history. Nobody should lose work because a deploy went out.",
      },
      {
        title: "Interfaces that respect people",
        body: "Keyboard focus, reduced motion support, honest loading states, and error messages that say what to do next.",
      },
    ],
    factsTitle: "Quick facts",
    facts: [
      { label: "Based in", value: "Belo Horizonte, Brazil (UTC-3)" },
      { label: "Ships in", value: "TypeScript, C#, Python, Go, PHP, Ruby, JavaScript" },
      { label: "On GitHub since", value: "2017" },
      { label: "Status", value: "Open to full-time roles" },
    ],
    languagesTitle: "Public repositories by primary language",
    languagesLede: "Thirty public repositories, counted from GitHub.",
    beyondTitle: "Beyond the flagship five",
    beyondBody:
      "The rest of the archive is smaller but wider: an Expo mobile app, a Go backend structured as a modular monolith, interview challenges, games and landing pages.",
  },
  contact: {
    title: "Open to full-time roles.",
    lede: "Email is the fastest route, and GitHub works for anything technical.",
    facts: [
      {
        label: "Best route",
        value: "Email for opportunities and formal contact, GitHub for anything technical.",
      },
      {
        label: "Where I am",
        value: "Belo Horizonte, Brazil (UTC-3), set up for remote and async work.",
      },
      {
        label: "What I'm looking for",
        value: "A product team that ships, where full-stack means owning the schema and the interface.",
      },
    ],
    availabilityTitle: "Available now",
    availabilityBody: "Open to full-time roles. Case studies and source are ready to review.",
  },
  footer: {
    tagline:
      "Full-stack developer in Belo Horizonte. I build complete products and keep them running.",
    ctaTitle: "Got something worth building?",
    ctaBody: "I am open to full-time roles and always up for talking shop.",
    navigate: "Navigate",
    elsewhere: "Elsewhere",
    language: "Language",
    builtWith:
      "Designed and built by Celso Martins with Next.js, React and Tailwind CSS.",
  },
  notFound: {
    title: "This page went for a walk.",
    body: "The link is broken or the page moved. The work is still where you left it.",
  },
  repos: {
    all: "All",
    live: "Live",
    empty: "Nothing in that language yet.",
  },
};

export type Dictionary = typeof en;
