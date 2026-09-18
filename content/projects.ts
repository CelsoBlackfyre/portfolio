import type { Localized } from "@/lib/types";

export type ProjectArtKind =
  | "social"
  | "editor"
  | "arena"
  | "tiles"
  | "store"
  | "knowledge"
  | "bim"
  | "vault"
  | "waveform"
  | "flow"
  | "scan"
  | "vision"
  | "crawl"
  | "convert";

export type SourceKind = "public" | "private" | "local" | "proprietary";

export type Project = {
  slug: string;
  name: string;
  art: ProjectArtKind;
  stack: string[];
  sourceKind: SourceKind;
  repoUrl?: string;
  liveUrl?: string;
  kind: Localized<string>;
  tagline: Localized<string>;
  role: Localized<string>;
  status: Localized<string>;
  brief: Localized<string>;
  build: Localized<string[]>;
  highlights: Localized<{ title: string; body: string }[]>;
  signals: Localized<string[]>;
};

export const independentProjects: Project[] = [
  {
    slug: "blackframe",
    name: "BlackFrame",
    art: "social",
    sourceKind: "private",
    repoUrl: "https://github.com/CelsoBlackfyre/blackframe",
    stack: [
      "Laravel 12",
      "React 19",
      "Inertia",
      "TypeScript",
      "PostgreSQL 18",
      "Tailwind CSS",
      "Pest",
    ],
    kind: { en: "Social platform", pt: "Plataforma social" },
    tagline: {
      en: "A culture-aware social network where compatibility is explainable.",
      pt: "Uma rede social guiada por cultura, onde a compatibilidade é explicável.",
    },
    role: {
      en: "Sole developer, covering schema, backend, interface and tests",
      pt: "Desenvolvedor único, responsável por schema, backend, interface e testes",
    },
    status: { en: "In active development", pt: "Em desenvolvimento ativo" },
    brief: {
      en: "BlackFrame began as an Instagram-inspired Laravel project and grew into its own product: a visual Home timeline, conversation-first Pulse posts, a structured culture catalog, personal Geek Shelves, and a matching system that has to explain itself. The hard requirement was that compatibility never leans on demographics or follower counts. It has to be defensible from shared titles alone.",
      pt: "O BlackFrame começou como um projeto Laravel inspirado no Instagram e virou um produto próprio: uma timeline visual, posts em formato de conversa no Pulse, um catálogo cultural estruturado, Estantes pessoais e um sistema de match que precisa explicar a si mesmo. A exigência difícil era que a compatibilidade nunca dependesse de dados demográficos ou número de seguidores. Ela tem que ser justificável apenas por títulos em comum.",
    },
    build: {
      en: [
        "Laravel 12 with Inertia and React 19 in one codebase: server-rendered pages with typed props and no separate API to keep in sync.",
        "A PostgreSQL schema for catalog titles, shelves with status and progress, ratings, likes, follows and paginated comment threads.",
        "Shelf Match compares overlap, favourites, statuses and ratings, then states the reasoning in plain language.",
        "Direct conversations open only after both people choose Connect, carrying unread state and shared-title context.",
        "Pest covers 98 tests across authentication, follow approval, protected uploads, rate limiting and the matching rules.",
      ],
      pt: [
        "Laravel 12 com Inertia e React 19 em uma única base: páginas renderizadas no servidor, props tipadas e nenhuma API separada para manter sincronizada.",
        "Um schema PostgreSQL para títulos do catálogo, estantes com status e progresso, avaliações, curtidas, seguidores e comentários paginados.",
        "O Shelf Match compara títulos em comum, favoritos, status e notas, e depois explica o resultado em linguagem clara.",
        "Conversas diretas só abrem depois que as duas pessoas escolhem Conectar, com estado de não lidas e contexto de títulos compartilhados.",
        "O Pest cobre 98 testes entre autenticação, aprovação de seguidores, uploads protegidos, rate limiting e as regras de match.",
      ],
    },
    highlights: {
      en: [
        {
          title: "Matching you can argue with",
          body: "Shelf Match never scores people by who they are, only by what they share, and it shows the overlap that produced the result.",
        },
        {
          title: "A shelf, not a list",
          body: "Status, progress, ratings and favourites per title, with a catalog that searches local and external sources so nobody types their library twice.",
        },
        {
          title: "Privacy with teeth",
          body: "Follow approval for private profiles, protected image uploads, rate limiting and two complete interface languages.",
        },
      ],
      pt: [
        {
          title: "Um match que dá para discutir",
          body: "O Shelf Match nunca pontua pessoas pelo que elas são, apenas pelo que compartilham, e mostra a sobreposição que gerou o resultado.",
        },
        {
          title: "Uma estante, não uma lista",
          body: "Status, progresso, notas e favoritos por título, com um catálogo que busca em fontes locais e externas para ninguém digitar a biblioteca duas vezes.",
        },
        {
          title: "Privacidade a sério",
          body: "Aprovação de seguidores em perfis privados, uploads de imagem protegidos, rate limiting e duas interfaces completas de idioma.",
        },
      ],
    },
    signals: {
      en: [
        "98 automated tests passing",
        "Laravel 12, React 19, Inertia, TypeScript",
        "PostgreSQL 18 with protected uploads",
        "English and Brazilian Portuguese interfaces",
      ],
      pt: [
        "98 testes automatizados passando",
        "Laravel 12, React 19, Inertia, TypeScript",
        "PostgreSQL 18 com uploads protegidos",
        "Interfaces em inglês e português do Brasil",
      ],
    },
  },
  {
    slug: "blackfyre-editor",
    name: "Blackfyre Editor",
    art: "editor",
    sourceKind: "local",
    stack: [
      "React",
      "CodeMirror 6",
      "Fastify",
      "PostgreSQL",
      "Prisma",
      "Yjs",
      "TypeScript",
      "Docker",
    ],
    kind: { en: "Collaborative writing", pt: "Escrita colaborativa" },
    tagline: {
      en: "A Markdown workspace where several people edit the same document without stepping on each other.",
      pt: "Um espaço de escrita em Markdown onde várias pessoas editam o mesmo documento sem se atropelar.",
    },
    role: {
      en: "Sole developer, covering the realtime layer, editor, permissions and exports",
      pt: "Desenvolvedor único, responsável pela camada em tempo real, editor, permissões e exportação",
    },
    status: { en: "Running locally on Docker", pt: "Rodando localmente em Docker" },
    brief: {
      en: "Writing tools break in the same two places: when two people type at once, and when a save silently fails. Blackfyre Editor is built around those two problems, a React and CodeMirror front end over a Fastify and PostgreSQL back end, with Yjs handling merges and presence, and an autosave pipeline that assumes the network will drop.",
      pt: "Ferramentas de escrita quebram sempre nos mesmos dois lugares: quando duas pessoas digitam ao mesmo tempo e quando um salvamento falha em silêncio. O Blackfyre Editor foi construído em torno desses dois problemas: um front-end em React e CodeMirror sobre um back-end Fastify e PostgreSQL, com o Yjs cuidando de merge e presença, e um pipeline de autosave que assume que a rede vai cair.",
    },
    build: {
      en: [
        "Yjs merges simultaneous edits and reconnects, with presence showing who else is in the document.",
        "Debounced autosave with retries, plus account-scoped draft recovery in the browser when the server can't be reached.",
        "Owner, editor and viewer permissions per document, with shareable document URLs.",
        "Comments anchored to quoted selections, with resolve and reopen, and a version history you can preview and restore.",
        "Recoverable trash instead of hard deletes, and additive migrations so existing documents survive every upgrade.",
        "Exports to Markdown, standalone HTML, styled Word (.docx) and print-to-PDF, plus blank, meeting-notes, documentation and proposal templates.",
      ],
      pt: [
        "O Yjs faz merge de edições simultâneas e reconexões, com presença mostrando quem mais está no documento.",
        "Autosave com debounce e retentativas, além de recuperação de rascunho por conta no navegador quando o servidor está inacessível.",
        "Permissões de proprietário, editor e leitor por documento, com URLs compartilháveis.",
        "Comentários ancorados em trechos citados, com resolver e reabrir, e histórico de versões com pré-visualização e restauração.",
        "Lixeira recuperável em vez de exclusão definitiva, e migrations aditivas para que os documentos existentes sobrevivam a cada atualização.",
        "Exportação para Markdown, HTML independente, Word (.docx) estilizado e impressão em PDF, além de modelos em branco, ata de reunião, documentação e proposta.",
      ],
    },
    highlights: {
      en: [
        {
          title: "Nothing gets lost",
          body: "Drafts recover per account, retries back off instead of hammering, trash is reversible and every document keeps a version history with previews.",
        },
        {
          title: "Built for long sessions",
          body: "Adjustable split panes, synchronized scrolling, a heading outline, Markdown formatting shortcuts and a remembered cursor position.",
        },
        {
          title: "Accessible by default",
          body: "Responsive dark and light interfaces, keyboard focus throughout, modal dialogs that keep focus inside, and visible save feedback at every screen size.",
        },
      ],
      pt: [
        {
          title: "Nada se perde",
          body: "Rascunhos se recuperam por conta, as retentativas recuam em vez de insistir sem critério, a lixeira é reversível e cada documento mantém histórico de versões com pré-visualização.",
        },
        {
          title: "Feito para sessões longas",
          body: "Painéis divisíveis ajustáveis, rolagem sincronizada, sumário de títulos, atalhos de formatação Markdown e posição do cursor memorizada.",
        },
        {
          title: "Acessível por padrão",
          body: "Interfaces claras e escuras responsivas, foco de teclado em todo o fluxo, diálogos que mantêm o foco dentro de si e retorno visível de salvamento em qualquer tamanho de tela.",
        },
      ],
    },
    signals: {
      en: [
        "Yjs CRDT merge plus presence",
        "Fastify, PostgreSQL, Prisma",
        "React, CodeMirror 6, TypeScript",
        "One-command Docker stack",
      ],
      pt: [
        "Merge CRDT com Yjs e presença",
        "Fastify, PostgreSQL, Prisma",
        "React, CodeMirror 6, TypeScript",
        "Stack Docker com um comando",
      ],
    },
  },
  {
    slug: "arena",
    name: "arena",
    art: "arena",
    sourceKind: "local",
    stack: [
      "Fastify",
      "TypeScript",
      "WebSockets",
      "Zod",
      "PixiJS",
      "Zustand",
      "Vite",
    ],
    kind: { en: "Realtime multiplayer game", pt: "Jogo multiplayer em tempo real" },
    tagline: {
      en: "A Diep.io-style arena shooter where the server owns the simulation and the browser only sends intent.",
      pt: "Um shooter de arena no estilo Diep.io onde o servidor controla a simulação e o navegador só envia intenção.",
    },
    role: {
      en: "Sole developer, covering the game server, netcode, client rendering and AI opponents",
      pt: "Desenvolvedor único, responsável pelo servidor de jogo, netcode, renderização no cliente e oponentes com IA",
    },
    status: { en: "Playable local build", pt: "Build local jogável" },
    brief: {
      en: "arena is an authoritative multiplayer shooter: tanks fight over a ringed map where the outer zones pay better and hurt more. The browser never decides anything that matters. It sends intent to a Fastify game server that simulates, validates and broadcasts snapshots for the client to interpolate and draw.",
      pt: "arena é um shooter multiplayer autoritativo: tanques disputam um mapa em anéis onde as zonas externas pagam melhor e machucam mais. O navegador não decide nada que importe. Ele envia intenção para um servidor Fastify que simula, valida e transmite snapshots para o cliente interpolar e desenhar.",
    },
    build: {
      en: [
        "Fastify, TypeScript and @fastify/websocket running a fixed-tick simulation, with Zod validating every inbound message.",
        "A Zustand store and PixiJS renderer on the client, interpolating snapshots so movement stays smooth on imperfect connections.",
        "Tanks are assembled from parts: weapon at level 10, chassis at 20, active ability at 30, utility at 40. The tank name follows the build.",
        "Eight active abilities on long cooldowns: Dash, Shield, Cloak, Blink, Overcharge, Mine, Tractor and Reflection.",
        "A risk-shaped map: the Safe Core pays x1 XP, the Elite Ring x1.25, and the Outer Wilds x1.6 with elite spawns.",
        "Timed world events such as meteor showers, golden swarms, guardians, supply caches and contested zones, each announced to everyone with a countdown and a minimap marker.",
      ],
      pt: [
        "Fastify, TypeScript e @fastify/websocket rodando uma simulação de tick fixo, com Zod validando cada mensagem recebida.",
        "Uma store do Zustand e um renderizador PixiJS no cliente, interpolando snapshots para o movimento continuar suave em conexões imperfeitas.",
        "Os tanques são montados por partes: arma no nível 10, chassi no 20, habilidade ativa no 30, utilidade no 40. O nome acompanha a build.",
        "Oito habilidades ativas com cooldowns longos: Dash, Shield, Cloak, Blink, Overcharge, Mine, Tractor e Reflection.",
        "Um mapa desenhado por risco: o Núcleo Seguro rende x1 de XP, o Anel de Elite x1.25 e as Terras Externas x1.6, com spawns de elite.",
        "Eventos temporários como chuvas de meteoros, enxames dourados, guardiões, caixas de suprimento e zonas contestadas, cada um anunciado para todos com contagem regressiva e marcador no minimapa.",
      ],
    },
    highlights: {
      en: [
        {
          title: "The server decides",
          body: "Every hit, cooldown and pickup is resolved where it can be validated, which is what keeps six AI opponents and human players playing by the same rules.",
        },
        {
          title: "Rewards with teeth",
          body: "Five kills mark you as a bounty worth a share of your score, and dying scatters part of that score as contested orbs for anyone nearby.",
        },
        {
          title: "Bots that actually play",
          body: "AI opponents farm, retreat, pick their own builds, use abilities, hunt bounties, loot orbs and join events. They are not scripted targets.",
        },
        {
          title: "Finished, not merely working",
          body: "Animated lobby, saved nickname and personal best, run results that name your killer and their build, reduced-motion support and focus-trapped dialogs.",
        },
      ],
      pt: [
        {
          title: "O servidor decide",
          body: "Cada acerto, cooldown e coleta é resolvido onde pode ser validado, e é isso que mantém seis oponentes de IA e jogadores humanos sob as mesmas regras.",
        },
        {
          title: "Recompensas com consequência",
          body: "Cinco abates marcam você como recompensa valendo parte da sua pontuação, e morrer espalha parte dessa pontuação como orbes disputados por quem estiver perto.",
        },
        {
          title: "Bots que jogam de verdade",
          body: "Os oponentes farmam, recuam, escolhem as próprias builds, usam habilidades, caçam recompensas, pegam orbes e entram nos eventos. Não são alvos roteirizados.",
        },
        {
          title: "Terminado, não apenas funcionando",
          body: "Lobby animado, apelido e recorde pessoal salvos, resultado da partida nomeando quem te matou e a build dele, suporte a movimento reduzido e diálogos que prendem o foco.",
        },
      ],
    },
    signals: {
      en: [
        "Fastify, TypeScript, WebSockets, Zod",
        "PixiJS, Zustand, Vite",
        "6 AI opponents per arena",
        "8 active abilities on cooldown",
      ],
      pt: [
        "Fastify, TypeScript, WebSockets, Zod",
        "PixiJS, Zustand, Vite",
        "6 oponentes de IA por arena",
        "8 habilidades ativas com cooldown",
      ],
    },
  },
  {
    slug: "jade-table",
    name: "Jade Table",
    art: "tiles",
    sourceKind: "local",
    stack: [
      "React 19",
      "TypeScript",
      "Vite",
      "Fastify",
      "WebSockets",
      "Zod",
      "Node test runner",
    ],
    kind: { en: "Game collection", pt: "Coleção de jogos" },
    tagline: {
      en: "Mahjong solitaire with solvable deals by construction, plus four-player Mahjong over WebSockets.",
      pt: "Mahjong solitário com partidas solucionáveis por construção, além de Mahjong para quatro jogadores via WebSockets.",
    },
    role: {
      en: "Sole developer, covering the puzzle engine, multiplayer server, client and tests",
      pt: "Desenvolvedor único, responsável pelo motor do quebra-cabeça, servidor multiplayer, cliente e testes",
    },
    status: { en: "Playable local build", pt: "Build local jogável" },
    brief: {
      en: "Two games in one codebase: a Mahjong Solitaire board that opens instantly with no account and no connection, and a four-player Mahjong room for friends or bots. The interesting work was the solitaire engine. Every deal comes from a complete legal removal sequence, so a fresh puzzle is never unwinnable.",
      pt: "Dois jogos na mesma base de código: um tabuleiro de Mahjong Solitário que abre na hora, sem conta e sem conexão, e uma sala de Mahjong para quatro jogadores, com amigos ou bots. O trabalho interessante foi o motor do solitário: cada partida é gerada a partir de uma sequência completa de remoções legais, então um quebra-cabeça novo nunca é insolúvel.",
    },
    build: {
      en: [
        "A pure engine in shared/solitaire.ts, imported by both the React client and the test suite.",
        "144 tiles across five layers in the classic turtle layout, enforcing the free-tile rule: nothing covering the tile, and an open left or right edge.",
        "Shuffle re-stacks only the remaining tiles, assigns a solvable arrangement and preserves cleared progress while resetting undo history.",
        "Hints, undo, shuffle, pause and a zoom toggle, with the timer stopping while the tab is hidden or paused.",
        "Local storage keeps the board, removed pairs, undo history, elapsed time and assistance counts across reloads, and reports when storage is unavailable.",
        "Fastify and WebSockets for four-player rooms with invitation links, bots filling empty seats and same-network play.",
      ],
      pt: [
        "Um motor puro em shared/solitaire.ts, importado tanto pelo cliente React quanto pela suíte de testes.",
        "144 peças em cinco camadas no layout clássico de tartaruga, aplicando a regra da peça livre: nada cobrindo a peça e uma borda esquerda ou direita aberta.",
        "O embaralhar reempilha apenas as peças restantes, define um arranjo solucionável e preserva o progresso, zerando o histórico de desfazer.",
        "Dicas, desfazer, embaralhar, pausar e alternar zoom, com o cronômetro parando quando a aba fica oculta ou o jogo pausa.",
        "O armazenamento local mantém tabuleiro, pares removidos, histórico de desfazer, tempo decorrido e contagem de ajudas entre recarregamentos, e avisa quando o armazenamento não está disponível.",
        "Fastify e WebSockets para salas de quatro jogadores com links de convite, bots preenchendo vagas e partidas na mesma rede.",
      ],
    },
    highlights: {
      en: [
        {
          title: "Solvable by construction",
          body: "Deals are built by removing pairs from a full board, so every new puzzle has at least one legal solution, and the tests prove it across 100 seeded deals.",
        },
        {
          title: "State that survives a reload",
          body: "Close the tab mid-puzzle and come back to the same board, undo history and clock, with a notice when storage is unavailable.",
        },
        {
          title: "Two games, one engine",
          body: "The multiplayer room and the solitaire board share the same tile rules, so a fix in one place lands in both.",
        },
      ],
      pt: [
        {
          title: "Solucionável por construção",
          body: "As partidas nascem removendo pares de um tabuleiro completo, então todo quebra-cabeça novo tem pelo menos uma solução legal, e os testes provam isso em 100 partidas com semente fixa.",
        },
        {
          title: "Estado que sobrevive ao recarregamento",
          body: "Feche a aba no meio do jogo e volte para o mesmo tabuleiro, histórico de desfazer e cronômetro, com aviso quando o armazenamento não está disponível.",
        },
        {
          title: "Dois jogos, um motor",
          body: "A sala multiplayer e o tabuleiro solitário compartilham as mesmas regras de peças, então uma correção em um lugar vale para os dois.",
        },
      ],
    },
    signals: {
      en: [
        "144 tiles across 5 layers, turtle layout",
        "Tests across 100 seeded deals",
        "Fastify, WebSockets, Zod",
        "React 19, TypeScript, Vite",
      ],
      pt: [
        "144 peças em 5 camadas, layout tartaruga",
        "Testes sobre 100 partidas com semente",
        "Fastify, WebSockets, Zod",
        "React 19, TypeScript, Vite",
      ],
    },
  },
  {
    slug: "forme",
    name: "FORME",
    art: "store",
    sourceKind: "private",
    stack: [
      "Ruby on Rails 8.1",
      "Ruby 3.4",
      "PostgreSQL",
      "Hotwire",
      "Tailwind CSS",
      "Devise",
      "Stripe",
      "Solid Queue",
    ],
    kind: { en: "Commerce platform", pt: "Plataforma de e-commerce" },
    tagline: {
      en: "A Rails storefront where inventory, checkout and order history stay correct under real payments.",
      pt: "Uma loja em Rails onde estoque, checkout e histórico de pedidos continuam corretos com pagamentos reais.",
    },
    role: {
      en: "Sole developer, covering the data model, checkout flow, admin and background jobs",
      pt: "Desenvolvedor único, responsável pelo modelo de dados, fluxo de checkout, admin e jobs em background",
    },
    status: { en: "Complete build running on Docker", pt: "Build completo rodando em Docker" },
    brief: {
      en: "FORME is a storefront for considered home goods, built on Rails 8 with Stripe Checkout. The part worth building carefully was stock: reserved units, sold-out variants, archived products that must not break the orders referencing them, and webhooks that arrive out of order.",
      pt: "FORME é uma loja de objetos para casa, construída em Rails 8 com Stripe Checkout. A parte que valia a pena fazer com cuidado era o estoque: unidades reservadas, variações esgotadas, produtos arquivados que não podem quebrar os pedidos que os referenciam e webhooks que chegam fora de ordem.",
    },
    build: {
      en: [
        "Rails 8.1 on Ruby 3.4 with PostgreSQL, Hotwire and Tailwind CSS.",
        "Stripe Checkout in test mode, where live keys are rejected by configuration, with webhook events driving order state.",
        "Stock includes reserved units and can never be reduced below existing reservations.",
        "Archiving a product preserves purchased items and active checkout snapshots, and can be reversed from the admin.",
        "An admin dashboard reports paid revenue, order count and low-stock products, and moves orders from paid to shipped to completed.",
        "Solid Queue runs background work, and one Docker Compose command installs, migrates, builds and seeds the app.",
      ],
      pt: [
        "Rails 8.1 em Ruby 3.4 com PostgreSQL, Hotwire e Tailwind CSS.",
        "Stripe Checkout em modo de teste, onde chaves de produção são rejeitadas por configuração, com eventos de webhook comandando o estado do pedido.",
        "O estoque considera unidades reservadas e nunca pode ficar abaixo das reservas existentes.",
        "Arquivar um produto preserva os itens comprados e os snapshots de checkout ativos, e pode ser revertido pelo admin.",
        "Um painel administrativo mostra receita paga, número de pedidos e produtos com estoque baixo, e move pedidos de pago para enviado e concluído.",
        "O Solid Queue cuida do processamento em background, e um único comando Docker Compose instala, migra, compila e popula a aplicação.",
      ],
    },
    highlights: {
      en: [
        {
          title: "Inventory that can't be oversold",
          body: "Reservations are part of the stock arithmetic, and prices are stored as integer cents so nothing rounds a customer's money away.",
        },
        {
          title: "Payments treated as events",
          body: "Checkout completion, expiry and asynchronous success are handled as separate webhook events, so an interrupted payment still leaves a consistent order.",
        },
        {
          title: "Repeatable local setup",
          body: "One compose command installs gems, creates and migrates the database, builds Tailwind, seeds ten products and starts Rails.",
        },
      ],
      pt: [
        {
          title: "Estoque que não vende o que não tem",
          body: "As reservas fazem parte da conta do estoque, e os preços são gravados em centavos inteiros para nada arredondar o dinheiro do cliente.",
        },
        {
          title: "Pagamentos tratados como eventos",
          body: "Conclusão, expiração e sucesso assíncrono do checkout são tratados como eventos de webhook separados, então um pagamento interrompido ainda deixa um pedido consistente.",
        },
        {
          title: "Ambiente local repetível",
          body: "Um comando do compose instala as gems, cria e migra o banco, compila o Tailwind, popula dez produtos e inicia o Rails.",
        },
      ],
    },
    signals: {
      en: [
        "Rails 8.1, Ruby 3.4, PostgreSQL",
        "Stripe Checkout with webhooks",
        "Solid Queue background jobs",
        "10 seeded products, including sold-out",
      ],
      pt: [
        "Rails 8.1, Ruby 3.4, PostgreSQL",
        "Stripe Checkout com webhooks",
        "Jobs em background com Solid Queue",
        "10 produtos populados, incluindo esgotados",
      ],
    },
  },
];
