import type { Project } from "../types/portfolio";

export const projects: Project[] = [
  {
    slug: "frifasfood",
    name: "FrifasFood",
    description: "Sistema full-stack para pedidos e gestão de produtos.",
    stack: ["React", "Vite", "Spring Boot", "PostgreSQL"],
    highlights: ["Autenticação e fluxo de pedidos", "Dashboard administrativo", "API REST + validações"],
    links: {
      repo: "https://github.com/seuusuario/frifasfood",
      live: "",
    },
  },
];