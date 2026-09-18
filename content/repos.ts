import type { Localized } from "@/lib/types";

export type Repo = {
  name: string;
  href: string;
  language: string;
  live?: string;
  description: Localized<string>;
};

export const repos: Repo[] = [
  {
    name: "Codex Blackfyre",
    href: "https://github.com/CelsoBlackfyre/minimal-blog",
    language: "Astro",
    live: "https://blackfyre-codex.vercel.app",
    description: {
      en: "Personal blog and review platform built with Astro, MDX, RSS and a generated sitemap.",
      pt: "Blog pessoal e plataforma de reviews em Astro, com MDX, RSS e sitemap gerado.",
    },
  },
  {
    name: "ThreadsClone",
    href: "https://github.com/CelsoBlackfyre/ThreadsClone",
    language: "TypeScript",
    live: "https://threads-clone-theta-three.vercel.app",
    description: {
      en: "Threads-style social feed with Next.js, Clerk authentication, UploadThing and Radix UI.",
      pt: "Feed social no estilo Threads com Next.js, autenticação Clerk, UploadThing e Radix UI.",
    },
  },
  {
    name: "Clinica_Vet",
    href: "https://github.com/CelsoBlackfyre/Clinica_Vet",
    language: "TypeScript",
    description: {
      en: "Veterinary clinic management: React 19 and Vite over a Go, Gin and MySQL API, with Vitest and Testing Library covering the front end.",
      pt: "Gestão de clínica veterinária: React 19 e Vite sobre uma API em Go, Gin e MySQL, com Vitest e Testing Library no front-end.",
    },
  },
  {
    name: "portfolio-modular-go",
    href: "https://github.com/CelsoBlackfyre/portfolio-modular-go",
    language: "Go",
    description: {
      en: "Portfolio API in Go laid out as a modular monolith inspired by Clean Architecture, with Fiber and PostgreSQL.",
      pt: "API de portfólio em Go organizada como monólito modular inspirado em Clean Architecture, com Fiber e PostgreSQL.",
    },
  },
  {
    name: "reviewplatform",
    href: "https://github.com/CelsoBlackfyre/reviewplatform",
    language: "TypeScript",
    description: {
      en: "Movie and TV review platform using the TMDB API, built on Next.js, NextAuth and Mongoose.",
      pt: "Plataforma de reviews de filmes e séries usando a API do TMDB, sobre Next.js, NextAuth e Mongoose.",
    },
  },
  {
    name: "jsm-aora",
    href: "https://github.com/CelsoBlackfyre/jsm-aora",
    language: "TypeScript",
    description: {
      en: "Mobile video-sharing app built with Expo Router and React Native.",
      pt: "Aplicativo mobile de compartilhamento de vídeos feito com Expo Router e React Native.",
    },
  },
  {
    name: "senai-flix",
    href: "https://github.com/CelsoBlackfyre/senai-flix",
    language: "TypeScript",
    description: {
      en: "Streaming catalog in Laravel with Inertia, React and DaisyUI.",
      pt: "Catálogo de streaming em Laravel com Inertia, React e DaisyUI.",
    },
  },
  {
    name: "desafio-frontend-azapfy",
    href: "https://github.com/CelsoBlackfyre/desafio-frontend-azapfy",
    language: "TypeScript",
    description: {
      en: "Frontend challenge solution on Next.js 14 with Material UI.",
      pt: "Solução de desafio frontend em Next.js 14 com Material UI.",
    },
  },
  {
    name: "SushiMan",
    href: "https://github.com/CelsoBlackfyre/SushiMan",
    language: "CSS",
    live: "https://sushi-man-lyart.vercel.app",
    description: {
      en: "Restaurant landing page with scroll-triggered animations, deployed on Vercel.",
      pt: "Landing page de restaurante com animações por scroll, publicada na Vercel.",
    },
  },
  {
    name: "atividade2",
    href: "https://github.com/CelsoBlackfyre/atividade2",
    language: "TypeScript",
    live: "https://atividade2-three.vercel.app",
    description: {
      en: "Course assignment shipped live: Next.js and TypeScript on Vercel.",
      pt: "Atividade de curso publicada ao vivo: Next.js e TypeScript na Vercel.",
    },
  },
  {
    name: "GoReactBlog",
    href: "https://github.com/CelsoBlackfyre/GoReactBlog",
    language: "TypeScript",
    description: {
      en: "Blog pairing a Go API with a React front end.",
      pt: "Blog que combina uma API em Go com um front-end em React.",
    },
  },
  {
    name: "ecommerce-go",
    href: "https://github.com/CelsoBlackfyre/ecommerce-go",
    language: "Go",
    description: {
      en: "Commerce API exercises in Go: routing, persistence and service layers.",
      pt: "Exercícios de API de e-commerce em Go: rotas, persistência e camadas de serviço.",
    },
  },
  {
    name: "ClinicaSaudeBemEstar",
    href: "https://github.com/CelsoBlackfyre/ClinicaSaudeBemEstar",
    language: "Go",
    description: {
      en: "Clinic management service written in Go.",
      pt: "Serviço de gestão de clínica escrito em Go.",
    },
  },
  {
    name: "crud-go",
    href: "https://github.com/CelsoBlackfyre/crud-go",
    language: "JavaScript",
    description: {
      en: "CRUD service with Go on the server and JavaScript on the client.",
      pt: "Serviço CRUD com Go no servidor e JavaScript no cliente.",
    },
  },
  {
    name: "magic-memory",
    href: "https://github.com/CelsoBlackfyre/magic-memory",
    language: "JavaScript",
    description: {
      en: "Memory matching game in vanilla JavaScript, the ancestor of Jade Table.",
      pt: "Jogo da memória em JavaScript puro, o ancestral do Jade Table.",
    },
  },
  {
    name: "CharacterRandomizer2",
    href: "https://github.com/CelsoBlackfyre/CharacterRandomizer2",
    language: "TypeScript",
    description: {
      en: "Character randomizer rebuilt in TypeScript.",
      pt: "Randomizador de personagens reescrito em TypeScript.",
    },
  },
];
