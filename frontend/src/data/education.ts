import type { EducationItem } from "../types/portfolio";

export const education: (EducationItem & { id: string })[] = [
  {
    id: "puc",
    institution: "PUC Minas",
    course: "Engenharia de Software",
    period: "2024 — em andamento",
    details: [],
  },
  {
    id: "senai",
    institution: "SENAI Itabirito",
    course: "Técnico em Eletroeletrônica",
    period: "2022 — 2023",
    details: [],
  },
];