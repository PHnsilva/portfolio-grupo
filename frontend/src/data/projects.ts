import type { Project } from "../types/portfolio";

export const projects: Project[] = [
  {
    slug: "calendar-mate",
    title: "CalendarMate",
    description:
      "Backend Spring Boot para agendamentos integrado ao Google Calendar, com fluxo sem login e gerenciamento por token.",
    stack: [
      "Java",
      "Spring Boot",
      "REST APIs",
      "Google Calendar",
      "SQL"
    ],
    links: {
      repo: "https://github.com/PHnsilva/CalendarMate",
      live: ""
    }
  },

  {
    slug: "crud-usuarios-ef-inmemory",
    title: "CRUD Usuários EF InMemory",
    description:
      "API REST em C# (.NET 8) com Entity Framework Core e banco InMemory para cadastro e gerenciamento de usuários.",
    stack: [
      "C#",
      ".NET 8",
      "Entity Framework Core",
      "REST APIs",
      "Swagger"
    ],
    links: {
      repo: "https://github.com/PHnsilva/crud-usuarios-ef-inmemory",
      live: ""
    }
  }
];