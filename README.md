# 🏷️ Portfólio

---

## 🚧 Status do Projeto
![Vite](https://img.shields.io/badge/Vite-latest-007ec6?style=for-the-badge&logo=vite&logoColor=white)
![React](https://img.shields.io/badge/React-latest-007ec6?style=for-the-badge&logo=react&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-latest-007ec6?style=for-the-badge&logo=typescript&logoColor=white)
![TailwindCSS](https://img.shields.io/badge/TailwindCSS-latest-007ec6?style=for-the-badge&logo=tailwindcss&logoColor=white)
![License](https://img.shields.io/github/license/PHnsilva/portfolio-grupo?style=for-the-badge)

---

## 📚 Índice
- [Links Úteis](#-links-úteis)
- [Sobre o Projeto](#-sobre-o-projeto)
- [Funcionalidades](#-funcionalidades)
- [Tecnologias](#-tecnologias)
- [Arquitetura](#-arquitetura)
- [Como Rodar Localmente](#-como-rodar-localmente)
- [Build](#-build)
- [Deploy](#-deploy)
- [Estrutura de Pastas](#-estrutura-de-pastas)
- [Demonstração](#-demonstração)
- [Testes](#-testes)
- [Autores](#-autores)
- [Licença](#-licença)

---

## 🔗 Links Úteis
- 🐙 **Repositório:** https://github.com/PHnsilva/portfolio-grupo.git
- 🌐 **Demo (opcional):** <link-da-demo>
- 🧩 **Wireframe:** https://www.figma.com/design/cj6OHrQLX4ekdmerVQJfY4/Untitled?node-id=0-1&t=HXfjQX6N9eGa6xbW-1

---

## 📝 Sobre o Projeto
Este projeto é um **portfólio web** voltado para apresentação profissional, contendo seções como **Home**, **Sobre**, **Projetos**, **Habilidades** e **Contato**.  
A proposta visual pode incorporar uma temática relacionada a jogos, mantendo uma comunicação e estrutura adequadas para uso acadêmico e profissional.

---

## ✨ Funcionalidades
- Página inicial com apresentação geral
- Seção “Sobre” (resumo, objetivos, interesses)
- Seção “Projetos” (cards com título, descrição e links)
- Seção “Habilidades” (stack e competências)
- Seção “Contato” (links e formas de contato) *(a definir por integrante)*
- Minigames clicáveis *(em desenvolvimento / a definir)*

---

## 🛠 Tecnologias
- **React**
- **Vite**
- **TypeScript**
- **Tailwind CSS**

---

## 🏗 Arquitetura
Aplicação SPA com componentes React, roteamento (se necessário) e estilização via Tailwind.

```text
Visão (alto nível)

UI (React Components)
  ├─ Pages (Home, About, Projects, Skills, Contact)
  ├─ Components (Navbar, Cards, Sections)
  └─ Assets (SVGs, imagens, fontes)
```

---

## 🔧 Como Rodar Localmente

### Pré-requisitos
- Node.js (LTS)
- npm (ou yarn/pnpm)

### Instalação
```bash
# na raiz do repositório
cd frontend
npm install
```

### Ambiente de desenvolvimento
```bash
npm run dev
```

Acesse: `http://localhost:5173`

### Variáveis de ambiente

```env
# exemplo
VITE_SITE_NAME="Portfólio"
```

---

## 🧱 Build
```bash
cd frontend
npm run build
npm run preview
```

---

## 🚀 Deploy
Opções comuns:
- Vercel

---

## 📂 Estrutura de Pastas

```text
PORTFOLIO-GRUPO/
  ├─ frontend/
  │  ├─ public/
  │  ├─ src/
  │  │  ├─ assets/
  │  │  ├─ App.tsx
  │  │  ├─ main.tsx
  │  │  └─ index.css
  │  ├─ index.html
  │  ├─ package.json
  │  ├─ vite.config.ts
  │  └─ tsconfig*.json
  ├─ LICENSE
  └─ README.md
```

---

## 🎥 Demonstração
- (a definir) Prints/GIFs da aplicação rodando
- Sugestão: salvar imagens em `frontend/public/` ou `docs/` e referenciar aqui

---

## 🧪 Testes
Ainda não há testes automatizados.

Vitest + Testing Library.

---

## 👥 Autores
Projeto em grupo (3 integrantes).  


| Nome | GitHub | LinkedIn |
|------|--------|----------|
| Pedro .H.S | <link-github> | <link-linkedin> |
| Felipe .P | <link-github> | <link-linkedin> |
| Gabriel .P | <link-github> | <link-linkedin> |

---

## 📄 Licença
Este projeto está sob a licença **MIT**. Veja o arquivo `LICENSE`.
