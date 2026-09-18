import type { Dictionary } from "@/content/i18n/en";

export const pt: Dictionary = {
  meta: {
    title: "Celso Martins, desenvolvedor full-stack",
    role: "Desenvolvedor full-stack",
    description:
      "Desenvolvedor full-stack em Belo Horizonte. Plataformas de conhecimento com IA, coordenação BIM, identidade e pipelines de documentos para times de engenharia, além de cinco produtos independentes.",
  },
  a11y: {
    skipToContent: "Ir para o conteúdo",
    openInNewTab: "abre em uma nova aba",
    emailHint: "abre seu aplicativo de e-mail",
    menu: "Abrir menu",
    closeMenu: "Fechar menu",
    language: "Idioma",
    primaryNav: "Navegação principal",
    filterRepos: "Filtrar repositórios por linguagem",
  },
  nav: {
    work: "Projetos",
    about: "Sobre",
    contact: "Contato",
  },
  actions: {
    viewWork: "Ver projetos",
    viewCaseStudy: "Ver estudo de caso",
    aboutMe: "Sobre mim",
    openGithub: "Abrir GitHub",
    getInTouch: "Falar comigo",
    backHome: "Voltar para o início",
  },
  labels: {
    role: "Papel",
    status: "Status",
    source: "Código",
    live: "No ar",
    caseStudy: "Estudo de caso",
    stack: "Stack",
    repositoryOne: "repositório",
    repositoryMany: "repositórios",
    professional: "Trabalho profissional",
    independent: "Projetos independentes",
    employer: "Empresa",
  },
  home: {
    availability: "Disponível para posições full-time",
    title: [
      [{ text: "Produtos completos," }],
      [{ text: "de ponta a ponta.", accent: true }],
    ],
    lede: "Sou Celso Martins. Eu desenho o schema, construo o servidor e a interface, e mantenho tudo funcionando.",
    proof: [
      { value: "14", label: "sistemas entregues" },
      { value: "9", label: "para times de engenharia" },
      { value: "30", label: "repositórios públicos" },
      { value: "2017", label: "no GitHub desde" },
    ],
    work: {
      title: "Sistemas que precisaram funcionar de verdade.",
      lede: "Nove plataformas construídas para times de engenharia e cinco projetos independentes, cada um com schema, servidor, interface e os testes por trás.",
    },
    about: {
      title: "Gosto da parte em que precisa funcionar de verdade.",
      body: [
        "Trabalho em toda a stack porque é onde os problemas interessantes moram: um merge com CRDT que sobrevive a uma conexão caindo, um snapshot via WebSocket que precisa chegar vinte vezes por segundo, uma constraint no Postgres que impede vender estoque que não existe, um layout que ainda faz sentido num celular de 380px.",
        "Na prática isso significa contratos tipados em cada borda, testes em que dá para confiar, migrations que nunca perdem dados e interfaces que se explicam sozinhas.",
      ],
      quote: "Just a guy trying to be a programmer.",
      quoteSource: "Minha bio no GitHub, inalterada desde 2017",
    },
    toolkit: {
      title: "O que eu uso no dia a dia",
      lede: "Montado a partir dos repositórios abaixo, não de uma lista de logotipos.",
    },
    github: {
      title: "Projetos menores, alcance maior",
      lede: "Trinta repositórios públicos entre TypeScript, Go, PHP, JavaScript, C# e Astro. Experimentos, desafios técnicos, aplicativo mobile e ferramentas que cresceram além do tutorial.",
    },
  },
  work: {
    title: "Tudo que eu construí e posso mostrar.",
    lede: "Nove plataformas construídas para times de engenharia e cinco projetos independentes, além dos repositórios públicos por trás deles, filtrados por linguagem.",
    professionalTitle: "Trabalho profissional",
    professionalLede:
      "Plataformas internas em uma empresa de engenharia: uma base de conhecimento com assistente de recuperação, coordenação BIM, identidade e acesso, pipelines de documentos e visão computacional. Os códigos são corporativos, então não há links de repositório, e tenho prazer em apresentar a arquitetura em uma conversa.",
    independentTitle: "Projetos independentes",
    independentLede:
      "Construídos no meu tempo: uma plataforma social, um editor colaborativo, um jogo multiplayer, uma mesa de Mahjong e uma loja.",
    reposTitle: "Repositórios públicos",
    reposLede: "Trinta repositórios, do mais recente ao mais antigo. Os que têm link estão publicados e clicáveis.",
    privateNote:
      "BlackFrame, Blackfyre Editor e arena são projetos privados ou apenas locais. Fico à disposição para apresentar o código em uma conversa.",
  },
  project: {
    brief: "O desafio",
    build: "Como foi construído",
    highlights: "O que se destaca",
    signals: "Detalhes concretos",
    stack: "Stack",
    previous: "Projeto anterior",
    next: "Próximo projeto",
    proprietarySource: "Código corporativo",
    privateSource: "Repositório privado",
    localSource: "Projeto local",
    proprietaryNote:
      "Repositório corporativo. Posso apresentar a arquitetura, as decisões e o código em uma conversa.",
    privateNote: "Não é público. Posso apresentar o código em uma conversa.",
    localNote: "Roda localmente com Docker ou npm. Não publicado em um remote público.",
    liveNote: "Publicado e aberto para visitas.",
  },
  about: {
    title: "Full-stack, porque os problemas interessantes não respeitam fronteiras.",
    lede: "Sou Celso Martins, desenvolvedor em Belo Horizonte. Construo produtos de ponta a ponta e os mantenho sustentáveis depois do primeiro deploy.",
    sections: [
      {
        title: "Como eu trabalho",
        body: [
          "O servidor é dono da verdade. Estado de multiplayer, contagem de estoque e permissões são decididos onde podem ser verificados, e depois renderizados por clientes que enviam intenção em vez de ordens.",
          "Os tipos chegam até a borda. Zod na rede, TypeScript na aplicação inteira, validação no limite em vez de confiança.",
          "Os dados sobrevivem ao deploy. Migrations aditivas, arquivamento que preserva histórico de pedidos e lixeira em vez de exclusão imediata.",
        ],
      },
      {
        title: "O que eu construo no trabalho",
        body: [
          "Times de engenharia são os usuários. As plataformas que construo sustentam uma base de mil documentos com assistente de recuperação, coordenam modelos BIM no navegador e dentro do Revit e do Navisworks, provisionam identidade e acesso via SCIM e transformam documentos digitalizados de projeto em registros em que as pessoas realmente confiam.",
          "A IA aparece onde se paga, em quatro formas diferentes: respostas ancoradas em recuperação, triagem por modelo atrás de uma política de revisão humana, conversão de documentos assistida por visão e transcrição de fala. Todas têm um caminho alternativo para quando o modelo erra.",
        ],
      },
      {
        title: "De onde vem essa variedade",
        body: [
          "Comecei no GitHub em 2017 com pequenos experimentos em JavaScript e não parei: serviços em Go com Clean Architecture, aplicações PHP e Laravel, uma loja em Rails com webhooks reais do Stripe, exercícios em Rust e C#, um app em Expo e um blog em Astro.",
          "Essa variedade é a parte útil. Escolher entre um loop de WebSocket, uma fila em background e uma requisição simples fica mais fácil depois de ter entregue os três.",
        ],
      },
      {
        title: "O que eu procuro",
        body: [
          "Um time de produto que entrega e espera que a pessoa engenheira cuide da feature do schema à interface. Estou aberto a posições full-time, remotas ou em Minas Gerais.",
          "Se isso parece o seu time, o melhor caminho é o GitHub.",
        ],
      },
    ],
    principlesTitle: "Princípios para os quais eu sempre volto",
    principles: [
      {
        title: "Contratos tipados nas bordas",
        body: "Toda mensagem que cruza uma fronteira é validada antes de ser confiada. Zod nos sockets, props tipadas na aplicação, uma única fonte da verdade para os formatos.",
      },
      {
        title: "O servidor decide",
        body: "Clientes renderizam snapshots e enviam intenção. A autoridade fica onde pode ser validada, e é isso que torna cheat e dessincronização problemas triviais.",
      },
      {
        title: "Persistência sem surpresa",
        body: "Migrations aditivas, lixeira reversível, histórico de versões. Ninguém deveria perder trabalho porque um deploy saiu.",
      },
      {
        title: "Interfaces que respeitam as pessoas",
        body: "Foco de teclado, suporte a movimento reduzido, estados de carregamento honestos e erros que dizem o que fazer em seguida.",
      },
    ],
    factsTitle: "Resumo",
    facts: [
      { label: "Baseado em", value: "Belo Horizonte, Brasil (UTC-3)" },
      { label: "Entrego em", value: "TypeScript, C#, Python, Go, PHP, Ruby, JavaScript" },
      { label: "No GitHub desde", value: "2017" },
      { label: "Situação", value: "Disponível para posições full-time" },
    ],
    languagesTitle: "Repositórios públicos por linguagem principal",
    languagesLede: "Trinta repositórios públicos, contados a partir do GitHub.",
    beyondTitle: "Além dos cinco principais",
    beyondBody:
      "O resto do arquivo é menor, mas mais amplo: um app mobile em Expo, um backend em Go estruturado como monólito modular, desafios técnicos, jogos e landing pages.",
  },
  contact: {
    title: "Disponível para posições full-time.",
    lede: "O e-mail é o caminho mais rápido, e o GitHub serve para qualquer assunto técnico.",
    facts: [
      {
        label: "Melhor caminho",
        value: "E-mail para oportunidades e contato formal, GitHub para qualquer assunto técnico.",
      },
      {
        label: "Onde eu estou",
        value: "Belo Horizonte, Brasil (UTC-3), estruturado para trabalho remoto e assíncrono.",
      },
      {
        label: "O que eu procuro",
        value: "Um time de produto que entrega, onde full-stack significa cuidar do schema e da interface.",
      },
    ],
    availabilityTitle: "Disponível agora",
    availabilityBody:
      "Aberto a posições full-time. Estudos de caso e código prontos para avaliação.",
  },
  footer: {
    tagline:
      "Desenvolvedor full-stack em Belo Horizonte. Construo produtos completos e os mantenho funcionando.",
    ctaTitle: "Tem algo que vale a pena construir?",
    ctaBody: "Estou aberto a posições full-time e sempre disponível para conversar sobre código.",
    navigate: "Navegação",
    elsewhere: "Outros lugares",
    language: "Idioma",
    builtWith:
      "Desenhado e desenvolvido por Celso Martins com Next.js, React e Tailwind CSS.",
  },
  notFound: {
    title: "Esta página saiu para caminhar.",
    body: "O link está quebrado ou a página mudou de lugar. Os projetos continuam onde estavam.",
  },
  repos: {
    all: "Todas",
    live: "No ar",
    empty: "Nada nessa linguagem por enquanto.",
  },
};
