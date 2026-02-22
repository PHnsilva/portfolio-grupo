import { useMemo, useState } from "react";
import SectionTitle from "../components/UI/SectionTitle";
import { profile } from "../data/profile";

type FormState = {
  name: string;
  email: string;
  message: string;
};

export default function Contact() {
  const [form, setForm] = useState<FormState>({ name: "", email: "", message: "" });

  const mailto = useMemo(() => {
    const subject = encodeURIComponent("Contato via Portfolio");
    const body = encodeURIComponent(
      `Nome: ${form.name}\nEmail: ${form.email}\n\nMensagem:\n${form.message}`
    );
    return `mailto:${profile.links.email}?subject=${subject}&body=${body}`;
  }, [form]);

  return (
    <div className="page">
      <SectionTitle title="Contato" subtitle="Vamos conversar? Escolha um canal ou envie uma mensagem." />

      <div className="grid-contact">
        <div className="card">
          <div className="contact-item">
            <div className="contact-icon" aria-hidden="true">✉</div>
            <div>
              <div className="contact-label">Email</div>
              <a href={`mailto:${profile.links.email}`}>{profile.links.email}</a>
            </div>
          </div>

          <div className="contact-item">
            <div className="contact-icon" aria-hidden="true">in</div>
            <div>
              <div className="contact-label">LinkedIn</div>
              <a href={profile.links.linkedin} target="_blank" rel="noreferrer">
                {profile.links.linkedin}
              </a>
            </div>
          </div>

          <div className="contact-item">
            <div className="contact-icon" aria-hidden="true">GH</div>
            <div>
              <div className="contact-label">GitHub</div>
              <a href={profile.links.github} target="_blank" rel="noreferrer">
                {profile.links.github}
              </a>
            </div>
          </div>
        </div>

        <div className="card">
          <h2 className="h2">Envie uma mensagem</h2>

          <form className="form" onSubmit={(e) => e.preventDefault()}>
            <label className="field">
              <span>Seu Nome</span>
              <input
                value={form.name}
                onChange={(e) => setForm((s) => ({ ...s, name: e.target.value }))}
                placeholder="Seu nome"
              />
            </label>

            <label className="field">
              <span>Seu Email</span>
              <input
                type="email"
                value={form.email}
                onChange={(e) => setForm((s) => ({ ...s, email: e.target.value }))}
                placeholder="seuemail@dominio.com"
              />
            </label>

            <label className="field">
              <span>Sua Mensagem</span>
              <textarea
                value={form.message}
                onChange={(e) => setForm((s) => ({ ...s, message: e.target.value }))}
                placeholder="Conte rapidamente o que você precisa..."
                rows={6}
              />
            </label>

            <div className="actions" style={{ justifyContent: "flex-end" }}>
              <a className="btn btn-primary" href={mailto}>
                Enviar
              </a>
            </div>

            <p className="muted" style={{ marginTop: 8, fontSize: 12 }}>
              * O botão abre seu cliente de email (não envia diretamente pelo site).
            </p>
          </form>
        </div>
      </div>
    </div>
  );
}
