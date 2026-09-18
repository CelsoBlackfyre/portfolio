import type { Project } from "@/content/projects";

/*
  Professional work. Corporate codebases, so no repository links.
  Copy deliberately omits internal URLs, tenant identifiers and colleague names.
  See AI_CONTEXT.md §7 for the disclosure checklist before editing this file.
*/

export const workProjects: Project[] = [
  {
    slug: "jupiter",
    name: "Project Jupiter",
    art: "knowledge",
    sourceKind: "proprietary",
    stack: [
      "React 19",
      "TypeScript",
      "TanStack Router",
      "Zustand",
      "Tailwind CSS",
      ".NET 8",
      "Semantic Kernel",
      "Azure SQL",
      "Blob Storage",
      "Entra ID",
    ],
    kind: { en: "AI knowledge platform", pt: "Plataforma de conhecimento com IA" },
    tagline: {
      en: "An internal engineering knowledge platform with a streaming RAG assistant over 1,000+ documents.",
      pt: "Uma plataforma interna de conhecimento de engenharia com um assistente RAG em streaming sobre mais de 1.000 documentos.",
    },
    role: {
      en: "Sole developer. All 800 commits in the repository are mine, covering the React front end, the .NET API, the retrieval pipeline, the cloud migration and CI/CD.",
      pt: "Desenvolvedor único. Todos os 800 commits do repositório são meus, cobrindo o front-end em React, a API .NET, o pipeline de recuperação, a migração para a nuvem e o CI/CD.",
    },
    status: { en: "Live and actively developed", pt: "No ar e em desenvolvimento ativo" },
    brief: {
      en: "Company knowledge lived in scattered folders, wikis and per-state Fire Department norms. Jupiter puts the corpus in one place: over a thousand engineering documents in Azure SQL and Blob, served through a web app with an assistant that answers from those documents instead of guessing.",
      pt: "O conhecimento da empresa vivia espalhado em pastas, wikis e normas de Bombeiros de vários estados. O Jupiter reúne o acervo em um só lugar: mais de mil documentos de engenharia em Azure SQL e Blob, servidos por uma aplicação web com um assistente que responde a partir desses documentos em vez de adivinhar.",
    },
    build: {
      en: [
        "A pnpm and Turbo monorepo: React 19 single-page app, .NET 8 Minimal APIs, a shared markdown pipeline and 41 operational scripts.",
        "Document records, versioned markdown and HTML, and chunk embeddings in Azure SQL, with source files in Blob. Supabase handles authentication and permissions only.",
        "The assistant streams over server-sent events with an intent router that dispatches to per-discipline agents (mechanical, hydraulic, electrical, fire) plus operations agents, fanning out to four in parallel before synthesis.",
        "Retrieval runs before the model call and is injected as a plugin, which keeps answers grounded, faster and cheaper than model-orchestrated tools.",
        "Reindexing is a durable job queue with dry-run, staging and progress reporting. A clean full run processed about 1,881 document records.",
        "Entra ID and email sign-in issue tokens compatible with the auth layer, with viewer, editor and admin roles plus sector-level access control on every endpoint.",
      ],
      pt: [
        "Um monorepo com pnpm e Turbo: aplicação React 19, Minimal APIs em .NET 8, um pipeline de markdown compartilhado e 41 scripts operacionais.",
        "Registros de documentos, markdown e HTML versionados e embeddings por trecho em Azure SQL, com os arquivos originais em Blob. O Supabase cuida apenas de autenticação e permissões.",
        "O assistente transmite por server-sent events com um roteador de intenção que despacha para agentes por disciplina (mecânica, hidráulica, elétrica, incêndio) e agentes operacionais, abrindo até quatro em paralelo antes da síntese.",
        "A recuperação acontece antes da chamada ao modelo e é injetada como plugin, o que mantém as respostas ancoradas, além de mais rápidas e mais baratas do que ferramentas orquestradas pelo modelo.",
        "A reindexação é uma fila de jobs persistida, com simulação, estágios e relatório de progresso. Uma execução completa processou cerca de 1.881 registros.",
        "Login por Entra ID e por e-mail emite tokens compatíveis com a camada de autenticação, com papéis de leitor, editor e administrador e controle de acesso por setor em cada endpoint.",
      ],
    },
    highlights: {
      en: [
        {
          title: "Retrieval before generation",
          body: "Search runs before the model call instead of being delegated to tool use, so latency, cost and provenance stay predictable.",
        },
        {
          title: "One agent per discipline",
          body: "An intent router sends each question to a specialist agent for the relevant engineering discipline, then synthesises, rather than one prompt trying to cover everything.",
        },
        {
          title: "Operations-grade reindexing",
          body: "Reindex jobs are persisted and observable, with dry-run and progress reporting, because re-embedding a thousand documents is an operation, not a script.",
        },
      ],
      pt: [
        {
          title: "Recuperação antes da geração",
          body: "A busca acontece antes da chamada ao modelo em vez de ser delegada ao uso de ferramentas, então latência, custo e procedência continuam previsíveis.",
        },
        {
          title: "Um agente por disciplina",
          body: "Um roteador de intenção envia cada pergunta a um agente especialista da disciplina de engenharia correspondente e depois sintetiza, em vez de um único prompt tentar cobrir tudo.",
        },
        {
          title: "Reindexação de nível operacional",
          body: "Os jobs de reindexação são persistidos e observáveis, com simulação e relatório de progresso, porque re-embedar mil documentos é uma operação, não um script.",
        },
      ],
    },
    signals: {
      en: [
        "800 commits, all authored by me",
        "1,000+ documents indexed",
        "React 19, .NET 8, Azure SQL, Blob",
        "Streaming RAG with intent routing",
      ],
      pt: [
        "800 commits, todos de minha autoria",
        "Mais de 1.000 documentos indexados",
        "React 19, .NET 8, Azure SQL, Blob",
        "RAG em streaming com roteamento de intenção",
      ],
    },
  },
  {
    slug: "cucaforms",
    name: "CucaForms",
    art: "bim",
    sourceKind: "proprietary",
    stack: [
      "React 19",
      "TypeScript",
      "Vite",
      "TanStack",
      "Tailwind CSS",
      "SignalR",
      "IndexedDB",
      "ExcelJS",
      "That Open Components",
      "web-ifc",
      "Vitest",
      "Playwright",
    ],
    kind: { en: "BIM and project platform", pt: "Plataforma BIM e de projetos" },
    tagline: {
      en: "A production platform uniting project boards with BIM model coordination, in the browser and inside Revit and Navisworks.",
      pt: "Uma plataforma em produção que une quadros de projeto à coordenação de modelos BIM, no navegador e dentro do Revit e do Navisworks.",
    },
    role: {
      en: "Core contributor in a five-engineer team. I am the top author in the working checkout with 301 of 918 commits, working across board performance, collaboration, Excel export and the technical-responsibility registry.",
      pt: "Contribuidor principal em um time de cinco engenheiros. Sou o autor com mais commits no checkout de trabalho, 301 de 918, atuando em performance dos quadros, colaboração, exportação para Excel e o registro de responsabilidade técnica.",
    },
    status: { en: "In production", pt: "Em produção" },
    brief: {
      en: "Coordinating a large engineering project through spreadsheets and email does not scale. CucaForms replaces it with one workspace: dense Table, Kanban and Gantt boards over large datasets, IFC model viewing, issue tracking and rich comments, with the same interface embedded inside Revit and Navisworks for engineers who never leave their CAD host.",
      pt: "Coordenar um projeto de engenharia grande por planilhas e e-mail não escala. O CucaForms substitui isso por um único ambiente: quadros densos em Tabela, Kanban e Gantt sobre bases grandes, visualização de modelos IFC, gestão de issues e comentários ricos, com a mesma interface embutida no Revit e no Navisworks para quem não sai do CAD.",
    },
    build: {
      en: [
        "React 19 and TypeScript organised as feature slices: boards, analysis, issues, files, chat, feed and integrations, with generated file-based routes.",
        "One codebase produces five build targets. The Revit and Navisworks targets embed the issue module in a WebView2 host and exchange typed JSON against C# contracts generated from the same schema as the API client.",
        "Boards normalise thirteen canonical column types off the main thread, with constant-time single-cell patching and undo/redo that lives client-side while a server-side coordinator batches persistence.",
        "Excel round-trips in both directions: scoped board exports built in a Web Worker, and a blank-row creation template validated on the server.",
        "Real-time updates run over SignalR with two layers of echo suppression, so a user's own change does not bounce back and fight the query cache.",
        "Security work along the way: rich-text sanitisation, spreadsheet formula-injection neutralisation, ephemeral signed URLs and open-redirect protection.",
      ],
      pt: [
        "React 19 e TypeScript organizados em fatias de funcionalidade: quadros, análise, issues, arquivos, chat, feed e integrações, com rotas geradas a partir de arquivos.",
        "Uma única base gera cinco alvos de build. Os alvos de Revit e Navisworks embutem o módulo de issues em um host WebView2 e trocam JSON tipado contra contratos C# gerados do mesmo schema usado pelo cliente da API.",
        "Os quadros normalizam treze tipos canônicos de coluna fora da thread principal, com atualização de célula em tempo constante e desfazer/refazer no cliente enquanto um coordenador no servidor agrupa a persistência.",
        "A ida e volta para Excel funciona nos dois sentidos: exportações de quadro por escopo geradas em Web Worker e um modelo de criação por linhas em branco validado no servidor.",
        "As atualizações em tempo real passam por SignalR com duas camadas de supressão de eco, para que a mudança do próprio usuário não volte e dispute com o cache de consultas.",
        "Trabalho de segurança ao longo do caminho: sanitização de texto rico, neutralização de injeção de fórmula em planilhas, URLs assinadas efêmeras e proteção contra redirecionamento aberto.",
      ],
    },
    highlights: {
      en: [
        {
          title: "Thousands of rows without jank",
          body: "Off-thread normalisation, virtualisation, stable row identity and constant-time patching keep dense boards responsive.",
        },
        {
          title: "The same app inside CAD",
          body: "Versioned contracts generated from one schema let the web interface run inside Revit and Navisworks without brittle message strings.",
        },
        {
          title: "Types as the contract",
          body: "The API client is generated from OpenAPI and checked for drift in CI, and the desktop host contracts come from the same source of truth.",
        },
      ],
      pt: [
        {
          title: "Milhares de linhas sem travamento",
          body: "Normalização fora da thread principal, virtualização, identidade estável de linha e atualização em tempo constante mantêm quadros densos responsivos.",
        },
        {
          title: "O mesmo app dentro do CAD",
          body: "Contratos versionados gerados de um único schema permitem que a interface web rode dentro do Revit e do Navisworks sem mensagens frágeis em texto.",
        },
        {
          title: "Tipos como contrato",
          body: "O cliente da API é gerado a partir do OpenAPI e verificado contra divergências no CI, e os contratos do host desktop vêm da mesma fonte da verdade.",
        },
      ],
    },
    signals: {
      en: [
        "301 of 918 commits, top author",
        "About 930 unit tests",
        "Web, Revit and Navisworks from one codebase",
        "Running in production",
      ],
      pt: [
        "301 de 918 commits, autor com mais contribuições",
        "Cerca de 930 testes unitários",
        "Web, Revit e Navisworks a partir de uma base",
        "Rodando em produção",
      ],
    },
  },
  {
    slug: "warden",
    name: "Warden",
    art: "vault",
    sourceKind: "proprietary",
    stack: [
      ".NET 8",
      "ASP.NET Core",
      "Azure SQL",
      "Azure App Service",
      "Entra ID",
      "SCIM 2.0",
      "Angular 20",
      "Nx",
      "TypeScript",
    ],
    kind: { en: "Identity and credentials", pt: "Identidade e credenciais" },
    tagline: {
      en: "A self-hosted credential vault and access-governance platform wired into Microsoft Entra ID.",
      pt: "Uma plataforma de cofre de credenciais e governança de acessos integrada ao Microsoft Entra ID.",
    },
    role: {
      en: "Adapted and operated the platform: product branding, cloud deployment, identity provisioning and the complete operational documentation set.",
      pt: "Adaptei e operei a plataforma: identidade do produto, implantação na nuvem, provisionamento de identidade e o conjunto completo de documentação operacional.",
    },
    status: { en: "Operating in the company", pt: "Em operação na empresa" },
    brief: {
      en: "The company needed more than a password vault. It needed answers: who has access to what, whether that access came from a manual process or automated provisioning, who approved it, and whether it is still needed. Warden is a vault platform adapted for a Microsoft identity environment and turned into something auditable.",
      pt: "A empresa precisava de mais do que um cofre de senhas. Precisava de respostas: quem tem acesso a quê, se esse acesso veio de processo manual ou de provisionamento automatizado, quem aprovou e se ele ainda é necessário. O Warden é uma plataforma de cofre adaptada para um ambiente de identidade Microsoft e transformada em algo auditável.",
    },
    build: {
      en: [
        "A consolidated application host behind route prefixes for API, identity, admin, icons, single sign-on and provisioning, with a health probe.",
        "Entra ID single sign-on supporting OIDC and SAML2, resolving identities through SSO records, then provisioning external ids, then email as a fallback.",
        "SCIM v2 provisioning scoped per organisation with bearer key authentication, user and group operations, and DELETE mapped to revocation instead of destruction.",
        "A custom directory-to-provisioning synchroniser was designed as a serverless function after the vendor's native provisioner proved unreliable under concurrent writes.",
        "An Angular 20 Nx monorepo with four client applications (web, browser extension, desktop, command line) over roughly 38 shared libraries.",
        "Documentation as a deliverable: architecture, identity integration, provisioning and directory guides, a user manual, and extension rollout through Windows policy or device management.",
      ],
      pt: [
        "Um host de aplicação consolidado atrás de prefixos de rota para API, identidade, administração, ícones, login único e provisionamento, com sonda de saúde.",
        "Login único com Entra ID suportando OIDC e SAML2, resolvendo identidades por registros de SSO, depois por identificadores externos de provisionamento e, por fim, por e-mail.",
        "Provisionamento SCIM v2 por organização com autenticação por chave, operações de usuários e grupos, e DELETE mapeado para revogação em vez de exclusão.",
        "Um sincronizador entre diretório e provisionamento foi projetado como função serverless depois que o provisionador nativo do fornecedor se mostrou instável sob escritas concorrentes.",
        "Um monorepo Angular 20 com Nx e quatro aplicações cliente (web, extensão de navegador, desktop e linha de comando) sobre cerca de 38 bibliotecas compartilhadas.",
        "Documentação como entregável: arquitetura, integração de identidade, guias de provisionamento e diretório, manual do usuário e distribuição da extensão por política do Windows ou gestão de dispositivos.",
      ],
    },
    highlights: {
      en: [
        {
          title: "Revocation, not deletion",
          body: "A provisioning delete maps to deactivation, which preserves the audit trail and closes alternate access paths when single sign-on is mandatory.",
        },
        {
          title: "Least-privilege provisioning",
          body: "The synchroniser uses delta queries and scoped groups instead of granting broad directory access.",
        },
        {
          title: "Operable by other people",
          body: "Every integration ships with a written runbook, which is why the platform could be handed over and still be maintained.",
        },
      ],
      pt: [
        {
          title: "Revogação, não exclusão",
          body: "A exclusão no provisionamento vira desativação, o que preserva a trilha de auditoria e fecha caminhos alternativos de acesso quando o login único é obrigatório.",
        },
        {
          title: "Provisionamento com privilégio mínimo",
          body: "O sincronizador usa consultas delta e grupos com escopo em vez de conceder acesso amplo ao diretório.",
        },
        {
          title: "Operável por outras pessoas",
          body: "Cada integração vem com runbook escrito, e é por isso que a plataforma pôde ser entregue e continuou sendo mantida.",
        },
      ],
    },
    signals: {
      en: [
        "OIDC and SAML2 single sign-on",
        "SCIM 2.0 with revocation semantics",
        "Four client apps in one monorepo",
        "Complete operations documentation",
      ],
      pt: [
        "Login único com OIDC e SAML2",
        "SCIM 2.0 com semântica de revogação",
        "Quatro aplicações cliente em um monorepo",
        "Documentação operacional completa",
      ],
    },
  },
  {
    slug: "leitor-ai",
    name: "Leitor AI",
    art: "waveform",
    sourceKind: "proprietary",
    stack: [
      ".NET 10",
      "Minimal APIs",
      "EF Core 10",
      "SQL Server",
      "Hangfire",
      "Entra ID",
      "Deepgram",
      "Azure Blob",
      "React 19",
    ],
    kind: { en: "AI meeting assistant", pt: "Assistente de reuniões com IA" },
    tagline: {
      en: "A meeting assistant that decides which calendar event is worth recording, captures it, transcribes it and writes structured minutes.",
      pt: "Um assistente de reuniões que decide qual evento da agenda vale gravar, captura a reunião, transcreve e escreve atas estruturadas.",
    },
    role: {
      en: "Designed and built the solution end to end as an MVP: domain model, API, provider adapters, tests and web shell.",
      pt: "Projetei e construí a solução de ponta a ponta como MVP: modelo de domínio, API, adaptadores de provedores, testes e interface web.",
    },
    status: { en: "Foundation complete, integrations in progress", pt: "Base completa, integrações em andamento" },
    brief: {
      en: "Meeting outcomes get lost. Leitor AI scores the calendar to find the meeting actually worth recording, sends a bot to capture it, transcribes with speaker separation, and produces minutes with topics, decisions and action items. Private events and recording retention are handled as first-class concerns rather than afterthoughts.",
      pt: "Os resultados das reuniões se perdem. O Leitor AI pontua a agenda para encontrar a reunião que realmente vale gravar, envia um bot para capturá-la, transcreve com separação de falantes e produz atas com tópicos, decisões e itens de ação. Eventos privados e retenção das gravações são tratados como requisitos de primeira classe, não como detalhe posterior.",
    },
    build: {
      en: [
        "Ports and adapters from the first commit: a pure domain, application services that depend only on ports, and infrastructure adapters behind them.",
        "Every external service sits behind an interface, covering calendars, meeting bots, transcription, blob storage, email and minutes generation, so providers can be replaced without touching the use cases.",
        "A meeting state machine runs from detected through scheduled, recording, transcribing and summarised, with an explicit failed state.",
        "Around 25 API endpoints cover onboarding, calendar connection, recording rules, meetings, summaries, action items, search and a generic webhook receiver.",
        "The recommendation is a weighted score over video meetings, duration, recurrence and external attendees, minus private and all-day events, and it returns a human-readable reason.",
        "Unit tests cover the pure logic and an integration test asserts the persistence model, while the summarisation step stays an explicit seam instead of a convincing mock.",
      ],
      pt: [
        "Portas e adaptadores desde o primeiro commit: um domínio puro, serviços de aplicação que dependem apenas de portas e adaptadores de infraestrutura atrás deles.",
        "Todo serviço externo fica atrás de uma interface, cobrindo agendas, bots de reunião, transcrição, armazenamento de arquivos, e-mail e geração de atas, para que provedores possam ser trocados sem tocar nos casos de uso.",
        "Uma máquina de estados da reunião vai de detectada a agendada, gravando, transcrevendo e resumida, com um estado de falha explícito.",
        "Cerca de 25 endpoints cobrem integração inicial, conexão de agenda, regras de gravação, reuniões, resumos, itens de ação, busca e um receptor genérico de webhooks.",
        "A recomendação é uma pontuação ponderada sobre reuniões com vídeo, duração, recorrência e participantes externos, menos eventos privados e de dia inteiro, e devolve um motivo legível.",
        "Testes unitários cobrem a lógica pura e um teste de integração verifica o modelo de persistência, enquanto a etapa de resumo permanece um ponto explícito de extensão em vez de um mock convincente.",
      ],
    },
    highlights: {
      en: [
        {
          title: "Volatile providers, stable domain",
          body: "Calendar, bot and transcription APIs change often, so none of them is allowed to leak into the domain or the use cases.",
        },
        {
          title: "It explains its own choices",
          body: "The scorer says why it picked a meeting, because a black-box suggestion would never earn trust.",
        },
        {
          title: "Documented gaps",
          body: "The summariser is a placeholder seam with the gap written down, which is more useful than a demo that pretends to be finished.",
        },
      ],
      pt: [
        {
          title: "Provedores voláteis, domínio estável",
          body: "APIs de agenda, bot e transcrição mudam com frequência, então nenhuma delas pode vazar para o domínio ou para os casos de uso.",
        },
        {
          title: "A escolha é explicada",
          body: "O pontuador diz por que escolheu uma reunião, porque uma sugestão de caixa-preta nunca conquistaria confiança.",
        },
        {
          title: "Lacunas documentadas",
          body: "O resumidor é um ponto de extensão com a lacuna registrada por escrito, o que é mais útil do que uma demo que finge estar pronta.",
        },
      ],
    },
    signals: {
      en: [
        "Ports and adapters across four providers",
        "About 25 API endpoints",
        "Transcription webhooks with speaker separation",
        "Unit and integration tests",
      ],
      pt: [
        "Portas e adaptadores em quatro provedores",
        "Cerca de 25 endpoints de API",
        "Webhooks de transcrição com separação de falantes",
        "Testes unitários e de integração",
      ],
    },
  },
  {
    slug: "automation",
    name: "Automation",
    art: "flow",
    sourceKind: "proprietary",
    stack: [
      ".NET 10",
      "Worker Service",
      "MSAL",
      "Microsoft Graph",
      "OpenAI",
      "WhatsApp Cloud API",
      "SharePoint",
      "xUnit",
    ],
    kind: { en: "Intake automation", pt: "Automação de atendimento" },
    tagline: {
      en: "A worker service that turns email and WhatsApp messages into deduplicated, triaged, routed cases in a spreadsheet the team already uses.",
      pt: "Um serviço que transforma mensagens de e-mail e WhatsApp em casos deduplicados, triados e encaminhados em uma planilha que o time já usa.",
    },
    role: {
      en: "Designed and built the worker service end to end, including the classification taxonomy, the review policy, the persistence model and the tests.",
      pt: "Projetei e construí o serviço de ponta a ponta, incluindo a taxonomia de classificação, a política de revisão humana, o modelo de persistência e os testes.",
    },
    status: { en: "Operating in production", pt: "Em operação em produção" },
    brief: {
      en: "Support and ombudsman contacts arrived by email and WhatsApp and were triaged by hand, with no trace of who decided what. This service normalises both channels into one pipeline, classifies and prioritises each case, and writes it into the existing spreadsheet with a full audit trail, without asking the teams to change how they work.",
      pt: "Contatos de atendimento e ouvidoria chegavam por e-mail e WhatsApp e eram triados manualmente, sem registro de quem decidiu o quê. Este serviço normaliza os dois canais em um único pipeline, classifica e prioriza cada caso e grava tudo na planilha existente com trilha de auditoria completa, sem pedir que os times mudem a forma de trabalhar.",
    },
    build: {
      en: [
        "One orchestrator runs the whole pipeline: normalise, deduplicate, strip signatures, classify by rules, triage with a model, apply the review policy, route and persist.",
        "The directory and mail APIs are called as raw REST with client credentials rather than through a vendor SDK, for explicit control over delta queries and spreadsheet sessions.",
        "Two ingestion modes: unread polling by default, and delta sync with checkpoints that only advance after a page is fully persisted, so a partial failure cannot silently drop messages.",
        "The spreadsheet acts as a database, so writes are serialised through a single-writer coordinator, and a source message is marked processed only after persistence succeeds.",
        "Classification encodes the real taxonomy: origin, classification, engineering discipline, subclassification and priority, across nine engineering disciplines.",
        "The policy layer, not the prompt, forces human review for ombudsman cases, complaint platforms, legal topics, critical priority and low confidence.",
      ],
      pt: [
        "Um orquestrador executa todo o pipeline: normalizar, deduplicar, remover assinaturas, classificar por regras, triar com modelo, aplicar a política de revisão, encaminhar e persistir.",
        "As APIs de diretório e correio são chamadas como REST bruto com credenciais de cliente em vez de SDK do fornecedor, para controle explícito sobre consultas delta e sessões de planilha.",
        "Dois modos de ingestão: leitura de não lidas por padrão e sincronização delta com checkpoints que só avançam depois que a página é totalmente persistida, para que uma falha parcial não descarte mensagens em silêncio.",
        "A planilha funciona como banco de dados, então as escritas são serializadas por um coordenador de escrita única, e a mensagem só é marcada como processada depois que a persistência tem sucesso.",
        "A classificação codifica a taxonomia real: origem, classificação, disciplina de engenharia, subclassificação e prioridade, em nove disciplinas de engenharia.",
        "A camada de política, e não o prompt, força revisão humana para casos de ouvidoria, plataformas de reclamação, temas jurídicos, prioridade crítica e baixa confiança.",
      ],
    },
    highlights: {
      en: [
        {
          title: "Policy decides, the model suggests",
          body: "What needs human review is a testable rule, so automation never quietly resolves a legal or ombudsman case on its own.",
        },
        {
          title: "Idempotent by construction",
          body: "Delta checkpoints and single-writer coordination mean a retry cannot duplicate a case or lose one.",
        },
        {
          title: "Their spreadsheet, our audit",
          body: "AI and technical columns are appended to the same sheet, so every automated decision stays visible in place.",
        },
      ],
      pt: [
        {
          title: "A política decide, o modelo sugere",
          body: "O que precisa de revisão humana é uma regra testável, então a automação nunca resolve sozinha um caso jurídico ou de ouvidoria.",
        },
        {
          title: "Idempotente por construção",
          body: "Checkpoints delta e coordenação de escrita única garantem que uma nova tentativa não duplique nem perca um caso.",
        },
        {
          title: "A planilha deles, a nossa auditoria",
          body: "Colunas de IA e técnicas são adicionadas na mesma aba, então cada decisão automatizada continua visível no lugar.",
        },
      ],
    },
    signals: {
      en: [
        "Email and WhatsApp in one pipeline",
        "Model triage with confidence gates",
        "Delta sync with safe checkpoints",
        "Tests on the risky edges",
      ],
      pt: [
        "E-mail e WhatsApp em um pipeline",
        "Triagem por modelo com limites de confiança",
        "Sincronização delta com checkpoints seguros",
        "Testes nos pontos de risco",
      ],
    },
  },
  {
    slug: "scriptprj",
    name: "ScriptPRJ",
    art: "scan",
    sourceKind: "proprietary",
    stack: [
      "Python 3.12",
      "openpyxl",
      "PyMuPDF",
      "pytesseract",
      "Pillow",
      "python-docx",
      "reportlab",
      "pytest",
    ],
    kind: { en: "Document intelligence", pt: "Inteligência documental" },
    tagline: {
      en: "A toolkit that scans corporate project drives for project-opening documents and keeps a consolidated registry in sync.",
      pt: "Um conjunto de ferramentas que varre unidades de projeto em busca de documentos de abertura e mantém um registro consolidado sincronizado.",
    },
    role: {
      en: "Sole developer. All six commits in the repository are mine.",
      pt: "Desenvolvedor único. Os seis commits do repositório são meus.",
    },
    status: { en: "Active internal toolkit", pt: "Ferramenta interna ativa" },
    brief: {
      en: "Project-opening metadata lives in inconsistent folders and formats across a large network drive: charts, technical-responsibility registries and scanned forms. This toolkit walks the tree, extracts what matters, tracks what changed, and builds the consolidated registry the engineering teams work from.",
      pt: "Os metadados de abertura de projeto vivem em pastas e formatos inconsistentes em uma unidade de rede grande: termos de abertura, registros de responsabilidade técnica e formulários digitalizados. Este conjunto de ferramentas percorre a árvore, extrai o que importa, acompanha o que mudou e monta o registro consolidado usado pelos times de engenharia.",
    },
    build: {
      en: [
        "The scan is stateful and incremental: file signatures, history events, and new, changed, removed or restored detection, instead of rescanning a drive that is far too large.",
        "A fallback chain handles dirty documents: direct PDF text first, then OCR, then a heavier layout model, with per-field provenance and confidence-driven decisions.",
        "Records missing their number are recovered with targeted header OCR at four rotations and deduplicated by content hash.",
        "Conflicts merge at field level, preserving existing values and flagging what needs review, rather than letting the last write win.",
        "The master registry ships with a dashboard, signature-based incremental rebuild and cross-project duplicate detection.",
        "A batched sync pushes normalised JSON to the board API with field-quality scoring, dry-run and coverage reporting. Raw documents are never sent.",
      ],
      pt: [
        "A varredura é incremental e com estado: assinaturas de arquivo, eventos de histórico e detecção de itens novos, alterados, removidos ou restaurados, em vez de revarrer uma unidade grande demais.",
        "Uma cadeia de alternativas trata documentos sujos: primeiro texto direto do PDF, depois OCR e então um modelo de layout mais pesado, com procedência por campo e decisões guiadas por confiança.",
        "Registros sem número são recuperados com OCR direcionado no cabeçalho em quatro rotações e deduplicados por hash de conteúdo.",
        "Conflitos são mesclados no nível do campo, preservando valores existentes e sinalizando o que precisa de revisão, em vez de deixar a última escrita vencer.",
        "O registro mestre vem com painel, reconstrução incremental por assinatura e detecção de duplicatas entre projetos.",
        "Uma sincronização em lotes envia JSON normalizado para a API do quadro, com pontuação de qualidade de campo, simulação e relatório de cobertura. Documentos originais nunca são enviados.",
      ],
    },
    highlights: {
      en: [
        {
          title: "Incremental by necessity",
          body: "State files and file signatures make the scan viable on a drive nobody would rescan from scratch.",
        },
        {
          title: "Bad scans surface, they do not hide",
          body: "Rotated or noisy documents produce review flags with provenance instead of confident wrong data.",
        },
        {
          title: "Normalised data only",
          body: "The API receives clean JSON and never documents, which keeps payloads small and exposure at zero.",
        },
      ],
      pt: [
        {
          title: "Incremental por necessidade",
          body: "Arquivos de estado e assinaturas tornam a varredura viável em uma unidade que ninguém revarreria do zero.",
        },
        {
          title: "Leitura ruim aparece, não se esconde",
          body: "Documentos rotacionados ou ruidosos geram sinalização de revisão com procedência em vez de dados errados com aparência de certeza.",
        },
        {
          title: "Somente dados normalizados",
          body: "A API recebe JSON limpo e nunca documentos, o que mantém os payloads pequenos e a exposição em zero.",
        },
      ],
    },
    signals: {
      en: [
        "About 40 parsing and OCR test cases",
        "Four rotated header OCR passes",
        "Content-hash deduplication",
        "Batched API sync with dry-run",
      ],
      pt: [
        "Cerca de 40 casos de teste de parsing e OCR",
        "Quatro passagens de OCR no cabeçalho rotacionado",
        "Deduplicação por hash de conteúdo",
        "Sincronização em lotes com simulação",
      ],
    },
  },
  {
    slug: "tenda",
    name: "TendaSolution",
    art: "vision",
    sourceKind: "proprietary",
    stack: ["Python 3.11+", "NumPy", "OpenCV", "PyMuPDF", "pytest", "setuptools"],
    kind: { en: "Computer vision", pt: "Visão computacional" },
    tagline: {
      en: "An installable package that detects shaft openings in construction floor plans and hands the uncertain ones to a reviewer.",
      pt: "Um pacote instalável que detecta aberturas de shaft em plantas de construção e entrega as incertas para revisão humana.",
    },
    role: {
      en: "Sole developer. All 36 commits in the repository are mine.",
      pt: "Desenvolvedor único. Os 36 commits do repositório são meus.",
    },
    status: { en: "v0.1.0, used in client presentations", pt: "v0.1.0, usado em apresentações a clientes" },
    brief: {
      en: "Shaft openings used to be found by placing markers on drawings by hand. This package detects them straight from the PDF: render the sheet, separate structural walls from detail, propose candidates from the negative space, score them, and snap the results to real geometry.",
      pt: "Aberturas de shaft eram encontradas marcando desenhos à mão. Este pacote as detecta direto do PDF: renderiza a prancha, separa paredes estruturais de detalhes, propõe candidatos a partir do espaço negativo, pontua e ajusta os resultados à geometria real.",
    },
    build: {
      en: [
        "A staged pipeline: plan region detection that rejects frames, schedules and title blocks, wall-width estimation, resolution selection, then mask construction for walls, free space and detail.",
        "Candidates come from wall-negative topology, meaning pockets, enclosed areas and bridged gaps, rather than from template matching alone.",
        "Seven features score each candidate, including wall enclosure, rectangularity, template similarity across rotations, symmetry, and the absence of doors or detail.",
        "A conservative review band sits between confirmed and rejected, because a missed shaft costs far more than a review.",
        "Vector refinement snaps every surviving box to drawn geometry, so the output is usable in engineering work and not merely visually plausible.",
        "Ground-truth tooling ships with the package, so thresholds can be recalibrated against labelled reference sheets.",
      ],
      pt: [
        "Um pipeline em etapas: detecção da região da planta que rejeita molduras, quadros e selos, estimativa de espessura de parede, escolha de resolução e construção de máscaras de parede, espaço livre e detalhe.",
        "Os candidatos vêm da topologia do espaço negativo, ou seja, bolsões, áreas fechadas e vãos conectados, e não apenas de comparação com modelos.",
        "Sete características pontuam cada candidato, incluindo fechamento por paredes, retangularidade, similaridade de modelo em rotações, simetria e ausência de portas ou detalhes.",
        "Uma faixa conservadora de revisão fica entre confirmado e rejeitado, porque um shaft não detectado custa muito mais do que uma revisão.",
        "O refinamento vetorial ajusta cada caixa sobrevivente à geometria desenhada, então a saída serve para engenharia e não é apenas plausível visualmente.",
        "Ferramentas de verdade básica acompanham o pacote, permitindo recalibrar limites contra pranchas de referência anotadas.",
      ],
    },
    highlights: {
      en: [
        {
          title: "Topology first, templates second",
          body: "Template similarity is one feature among seven, which keeps detection stable across the varied sheet styles of real drawings.",
        },
        {
          title: "Built for a review loop",
          body: "Three-tier output puts uncertain detections in front of a person instead of quietly dropping them.",
        },
        {
          title: "Stable across scale",
          body: "Regression tests run the same drawings at different resolutions and compressions, because a detector that works at only one setting is useless.",
        },
      ],
      pt: [
        {
          title: "Topologia primeiro, modelos depois",
          body: "A similaridade de modelo é uma entre sete características, o que mantém a detecção estável nos estilos variados de prancha reais.",
        },
        {
          title: "Feito para revisão",
          body: "A saída em três níveis coloca as detecções incertas na frente de uma pessoa em vez de descartá-las em silêncio.",
        },
        {
          title: "Estável em qualquer escala",
          body: "Testes de regressão rodam os mesmos desenhos em resoluções e compressões diferentes, porque um detector que só funciona em uma configuração é inútil.",
        },
      ],
    },
    signals: {
      en: [
        "Regression tests on real reference sheets",
        "Detections snapped to drawn geometry",
        "Confirmed, review and rejected output",
        "Annotated PDF, PNG and JSON",
      ],
      pt: [
        "Testes de regressão em pranchas de referência reais",
        "Detecções ajustadas à geometria desenhada",
        "Saída em confirmado, revisão e rejeitado",
        "PDF, PNG e JSON anotados",
      ],
    },
  },
  {
    slug: "weber",
    name: "WeberScraping",
    art: "crawl",
    sourceKind: "proprietary",
    stack: [".NET 8", "AngleSharp", "SQLite", "HttpClient", "xUnit", "Python", "MinerU"],
    kind: { en: "Norm data pipeline", pt: "Pipeline de normas técnicas" },
    tagline: {
      en: "A crawler that tracks technical norms across ten Fire Department portals and converts them into clean Markdown.",
      pt: "Um crawler que acompanha normas técnicas em dez portais de Corpo de Bombeiros e as converte em Markdown limpo.",
    },
    role: {
      en: "Built the crawler and the conversion pipeline end to end, from the source abstraction to the conversion queue and its tests.",
      pt: "Construí o crawler e o pipeline de conversão de ponta a ponta, da abstração de fontes à fila de conversão e seus testes.",
    },
    status: { en: "Active, ten sources covered", pt: "Ativo, dez fontes cobertas" },
    brief: {
      en: "Fire-safety norms are published state by state, in portals that share nothing: different pagination, different document types, and one that serves files only through a JSON gateway. This crawler keeps a durable local catalogue of all of them and converts each document into Markdown for the knowledge pipeline downstream.",
      pt: "As normas de segurança contra incêndio são publicadas estado por estado, em portais que não compartilham nada: paginação diferente, tipos de documento diferentes e um que só entrega arquivos por um gateway JSON. Este crawler mantém um catálogo local durável de todos eles e converte cada documento em Markdown para o pipeline de conhecimento adiante.",
    },
    build: {
      en: [
        "Ten state sources sit behind one abstraction, covering HTML scraping, paginated listings and a reverse-engineered JSON API with base64 payload decoding and retry.",
        "Document identity is the source plus URL, with a content hash driving change detection and version history, so a repeated crawl never duplicates.",
        "A SQLite catalogue holds sources, documents, versions, runs and conversions, with unique constraints that make the pipeline idempotent.",
        "Conversion state lives in the database rather than in files, so a run is resumable and auditable, and already-converted content is skipped.",
        "A subprocess runner wraps the heavy conversion tooling with timeouts and process-tree kills, so a stuck job cannot hang the crawler.",
        "A classifier reads messy titles to determine document type, number and edition, and filters out material that is not a technical norm.",
      ],
      pt: [
        "Dez fontes estaduais ficam atrás de uma única abstração, cobrindo raspagem HTML, listagens paginadas e uma API JSON reversa com decodificação de payload em base64 e retentativas.",
        "A identidade do documento é a fonte mais a URL, com hash de conteúdo guiando a detecção de mudanças e o histórico de versões, então uma nova varredura nunca duplica.",
        "Um catálogo SQLite guarda fontes, documentos, versões, execuções e conversões, com restrições únicas que tornam o pipeline idempotente.",
        "O estado da conversão fica no banco e não em arquivos, então uma execução é retomável e auditável, e conteúdo já convertido é ignorado.",
        "Um executor de subprocessos envolve a ferramenta pesada de conversão com timeout e encerramento da árvore de processos, para que um job travado não bloqueie o crawler.",
        "Um classificador lê títulos bagunçados para determinar tipo, número e edição do documento e filtra o que não é norma técnica.",
      ],
    },
    highlights: {
      en: [
        {
          title: "One abstraction, ten portals",
          body: "Adding a state means implementing a single source, not touching the pipeline.",
        },
        {
          title: "Content hashes over timestamps",
          body: "Change detection follows what the document contains, which survives a portal rewriting its URLs.",
        },
        {
          title: "Resumable by design",
          body: "Conversion progress is persisted state, so a failed batch is a retry rather than a restart.",
        },
      ],
      pt: [
        {
          title: "Uma abstração, dez portais",
          body: "Adicionar um estado significa implementar uma única fonte, sem tocar no pipeline.",
        },
        {
          title: "Hash de conteúdo em vez de data",
          body: "A detecção de mudanças segue o que o documento contém, o que sobrevive a um portal que reescreve suas URLs.",
        },
        {
          title: "Retomável por construção",
          body: "O progresso da conversão é estado persistido, então um lote com falha é uma nova tentativa e não um recomeço.",
        },
      ],
    },
    signals: {
      en: [
        "Ten state sources, one abstraction",
        "Content-hash version history",
        "SQLite catalogue with idempotent writes",
        "Tests per source and per classifier",
      ],
      pt: [
        "Dez fontes estaduais, uma abstração",
        "Histórico de versões por hash de conteúdo",
        "Catálogo SQLite com escritas idempotentes",
        "Testes por fonte e por classificador",
      ],
    },
  },
  {
    slug: "markdown-converter",
    name: "Markdown Converter",
    art: "convert",
    sourceKind: "proprietary",
    stack: [".NET 8", "PdfPig", "PDFtoImage", "SkiaSharp", "Anthropic SDK", "OpenAI SDK"],
    kind: { en: "Document conversion", pt: "Conversão de documentos" },
    tagline: {
      en: "A CLI that routes each PDF page between fast local extraction and a vision model, so AI cost lands only where it changes the result.",
      pt: "Uma CLI que roteia cada página do PDF entre extração local rápida e um modelo de visão, para que o custo de IA caia só onde muda o resultado.",
    },
    role: {
      en: "Designed and built the converter end to end: the routing heuristic, the dual provider engines, the figure pipeline and the offline mode.",
      pt: "Projetei e construí o conversor de ponta a ponta: a heurística de roteamento, os dois motores de provedor, o pipeline de figuras e o modo offline.",
    },
    status: { en: "Working and documented, runs fully offline", pt: "Funcional e documentado, roda totalmente offline" },
    brief: {
      en: "Sending every page of every document to a vision model is expensive, and pure text extraction falls apart on scanned tables and figures. This CLI analyses each page first and escalates only the pages where a model will actually change the output.",
      pt: "Enviar cada página de cada documento para um modelo de visão é caro, e a extração puramente textual quebra em tabelas digitalizadas e figuras. Esta CLI analisa cada página primeiro e escala apenas as páginas em que um modelo realmente muda o resultado.",
    },
    build: {
      en: [
        "A page analyser measures ordered text, a table score from wide-gap line analysis, and figure presence, then a router chooses between native extraction and the vision path.",
        "Two engines sit behind one interface: native PDF document blocks for one provider, and rendered page images for OpenAI-compatible gateways, so a local model can be used.",
        "Heading levels are inferred from font-size ratios, paragraphs are grouped by spacing, and the assembled document goes through a post-processing pass.",
        "Embedded figures are cropped at render resolution and referenced from the Markdown, with their paths handed to the model so placement survives.",
        "Vision calls run in a second parallel pass behind a concurrency limit, and any failure falls back to native text rather than aborting the document.",
        "Offline is the default posture: with vision disabled no API key is needed at all, and credentials are never validated.",
      ],
      pt: [
        "Um analisador de página mede texto em ordem de leitura, uma pontuação de tabela a partir de análise de vãos largos e a presença de figuras; em seguida um roteador escolhe entre extração nativa e o caminho de visão.",
        "Dois motores ficam atrás de uma interface: blocos de documento PDF nativo para um provedor e imagens renderizadas de página para gateways compatíveis com OpenAI, permitindo usar um modelo local.",
        "Níveis de título são inferidos por proporção de tamanho de fonte, parágrafos são agrupados por espaçamento e o documento montado passa por uma etapa de pós-processamento.",
        "Figuras embutidas são recortadas na resolução de renderização e referenciadas no Markdown, com seus caminhos entregues ao modelo para que o posicionamento sobreviva.",
        "As chamadas de visão rodam em uma segunda passagem paralela com limite de concorrência, e qualquer falha volta para o texto nativo em vez de abortar o documento.",
        "Offline é o padrão: com a visão desativada nenhuma chave de API é necessária e as credenciais nem são validadas.",
      ],
    },
    highlights: {
      en: [
        {
          title: "Pay per page, not per document",
          body: "Routing per page means a mostly digital report costs a fraction of what a blanket vision pass would.",
        },
        {
          title: "Explainable table detection",
          body: "Tables are found with a geometric heuristic over line gaps, which can be tuned and reasoned about without training a model.",
        },
        {
          title: "Never fail a document",
          body: "Malformed streams, failed figure crops and API errors degrade to native extraction instead of producing nothing.",
        },
      ],
      pt: [
        {
          title: "Pague por página, não por documento",
          body: "O roteamento por página faz um relatório majoritariamente digital custar uma fração de uma passagem completa por visão.",
        },
        {
          title: "Detecção de tabela explicável",
          body: "Tabelas são encontradas com uma heurística geométrica sobre vãos de linha, que pode ser ajustada e compreendida sem treinar modelo.",
        },
        {
          title: "Nunca falhar um documento",
          body: "Streams malformados, recortes de figura com falha e erros de API degradam para extração nativa em vez de produzir nada.",
        },
      ],
    },
    signals: {
      en: [
        "Per-page routing between local and vision",
        "Two provider engines behind one interface",
        "Offline mode with no credentials",
        "Figures extracted and placed in Markdown",
      ],
      pt: [
        "Roteamento por página entre local e visão",
        "Dois motores de provedor atrás de uma interface",
        "Modo offline sem credenciais",
        "Figuras extraídas e posicionadas no Markdown",
      ],
    },
  },
];
