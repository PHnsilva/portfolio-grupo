import { useEffect } from "react";
import { useLocation } from "react-router-dom";

import SectionTitle from "../components/UI/SectionTitle";
import Tag from "../components/UI/Tag";
import ExperienceCard from "../components/UI/ExperienceCard";
import ProjectCard from "../components/UI/ProjectCard";

import { profile } from "../data/profile";
import { experience } from "../data/experience";
import { projects } from "../data/projects";
import { skillGroups } from "../data/skills";

function scrollToHash(hash: string) {
  if (!hash) return;
  const id = hash.replace("#", "");
  const el = document.getElementById(id);
  if (!el) return;
  el.scrollIntoView({ behavior: "smooth", block: "start" });
}

export default function Home() {
  const location = useLocation();

  useEffect(() => {
    const t = window.setTimeout(() => scrollToHash(location.hash), 0);
    return () => window.clearTimeout(t);
  }, [location.hash]);

  return (
    <div>
      {/* HERO */}
      <section id="inicio" className="section">
        <div className="hero">
          <div className="hero-left">
            <SectionTitle title={profile.name} subtitle={profile.role} />
            <p className="muted">{profile.headline}</p>
            <div className="actions">
              <a className="btn btn-primary" href="#projetos">Ver Projetos</a>
              <a className="btn btn-ghost" href="#contato">Contato</a>
            </div>
          </div>

          <div className="hero-right" aria-hidden="true">
            <div className="avatar" />
          </div>
        </div>

        <div className="card" style={{ marginTop: 18 }}>
          <h2 style={{ marginTop: 0 }}>Resumo</h2>
          <ul className="checklist">
            {[
              "Desenvolvimento front-end e back-end com foco em qualidade e entrega.",
              "Integração entre sistemas e automações em ambiente real de negócio.",
              "Trabalho em equipe com boas práticas e entregas incrementais.",
            ].map((t) => (
              <li key={t} className="check-item">
                <span className="check" aria-hidden="true">✓</span>
                <span>{t}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* SOBRE */}
      <section id="sobre" className="section">
        <SectionTitle title="Sobre Mim" subtitle="Breve apresentação (PT/EN)" />

        <div className="grid">
          <div className="card">
            <h3 style={{ marginTop: 0 }}>Quem Sou Eu</h3>
            {profile.about.map((p) => (
              <p key={p} style={{ margin: "10px 0" }}>{p}</p>
            ))}
          </div>
        </div>

        <div className="card" style={{ marginTop: 14 }}>
          <h3 style={{ marginTop: 0 }}>O que eu faço</h3>
          <div className="grid-2" style={{ marginTop: 10 }}>
            <div>
              <strong>Desenvolvimento Web</strong>
              <p className="muted">
                Interfaces com React/TypeScript, foco em UX, consistência visual e performance.
              </p>
            </div>
            <div>
              <strong>APIs e Back-end</strong>
              <p className="muted">
                Integrações, modelagem de dados e serviços com atenção a estabilidade e boas práticas.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* EXPERIÊNCIAS */}
      <section id="experiencias" className="section">
        <SectionTitle title="Experiências" subtitle="Atuação profissional, estágios, freelas e projetos" />
        <div className="stack">
          {experience.map((e) => (
            <ExperienceCard key={`${e.company}-${e.role}`} item={e} />
          ))}
        </div>
      </section>

      {/* PROJETOS */}
      <section id="projetos" className="section">
        <SectionTitle title="Projetos" subtitle="Linha do tempo (do mais antigo ao mais recente)" />

        <div className="timeline">
          {projects.map((p, idx) => (
            <div className="timeline-item" key={p.slug}>
              <div className="timeline-dot" aria-hidden="true">{idx + 1}</div>
              <div className="timeline-content">
                <ProjectCard project={p} />
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* COMPETÊNCIAS */}
      <section id="competencias" className="section">
        <SectionTitle title="Competências" subtitle="Habilidades técnicas, ferramentas e interpessoais" />

        <div className="stack">
          {skillGroups.map((group) => (
            <div className="card" key={group.title}>
              <h3 style={{ marginTop: 0 }}>{group.title}</h3>
              <div className="tags">
                {group.items.map((s) => <Tag key={s}>{s}</Tag>)}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CONTATO */}
      <section id="contato" className="section">
        <SectionTitle title="Contato" subtitle="Links e formulário (envio via e-mail)" />

        <div className="grid-contact">
          <div className="card">
            <div>
              <a className="contact-item" href={`mailto:${profile.links.email}`}>
                <span className="contact-icon" aria-hidden="true">✉️</span>
                <div>
                  <div className="contact-label">Email</div>
                  <div className="muted">{profile.links.email}</div>
                </div>
              </a>

              <a className="contact-item" href={profile.links.linkedin} target="_blank" rel="noreferrer">
                <span className="contact-icon" aria-hidden="true">in</span>
                <div>
                  <div className="contact-label">LinkedIn</div>
                  <div className="muted">Abrir perfil</div>
                </div>
              </a>

              <a className="contact-item" href={profile.links.github} target="_blank" rel="noreferrer">
                <span className="contact-icon" aria-hidden="true">⌂</span>
                <div>
                  <div className="contact-label">GitHub</div>
                  <div className="muted">Ver repositórios</div>
                </div>
              </a>
            </div>
          </div>

          <div className="card">
            <ContactForm />
          </div>
        </div>
      </section>
    </div>
  );
}

function ContactForm() {
  function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    const fd = new FormData(e.currentTarget);
    const name = String(fd.get("name") ?? "").trim();
    const email = String(fd.get("email") ?? "").trim();
    const message = String(fd.get("message") ?? "").trim();

    const subject = encodeURIComponent(`Contato via Portfólio — ${name || "(sem nome)"}`);
    const body = encodeURIComponent(`Nome: ${name}\nEmail: ${email}\n\nMensagem:\n${message}`);

    window.location.href = `mailto:${profile.links.email}?subject=${subject}&body=${body}`;
  }

  return (
    <form onSubmit={onSubmit} className="form">
      <h3 style={{ marginTop: 0 }}>Envie uma mensagem</h3>

      <label className="field">
        <span>Seu nome</span>
        <input name="name" type="text" placeholder="Seu Nome" required />
      </label>

      <label className="field">
        <span>Seu e-mail</span>
        <input name="email" type="email" placeholder="Seu Email" required />
      </label>

      <label className="field">
        <span>Sua mensagem</span>
        <textarea name="message" placeholder="Sua Mensagem" rows={5} required />
      </label>

      <div style={{ display: "flex", justifyContent: "flex-end", marginTop: 10 }}>
        <button className="btn btn-primary" type="submit">Enviar</button>
      </div>
    </form>
  );
}