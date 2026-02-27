import { useMemo, useState } from "react";
import SectionTitle from "../components/UI/SectionTitle";
import { profile } from "../data/profile";
import { useI18n } from "../i18n/I18nProvider";

type FormState = {
  name: string;
  email: string;
  message: string;
};

function buildMailto(params: {
  to: string;
  subject: string;
  body: string;
}) {
  const subject = encodeURIComponent(params.subject);
  const body = encodeURIComponent(params.body);
  return `mailto:${params.to}?subject=${subject}&body=${body}`;
}

export default function Contact() {
  const { t } = useI18n();
  const [form, setForm] = useState<FormState>({
    name: "",
    email: "",
    message: "",
  });

  // Mailto do formulário (personalizado)
  const mailtoForm = useMemo(() => {
    const subject = t("contact.subject");
    const body =
      `Nome: ${form.name}\n` +
      `Email: ${form.email}\n\n` +
      `Mensagem:\n${form.message}`;

    return buildMailto({
      to: profile.links.email,
      subject,
      body,
    });
  }, [form]);

  // Mailto padrão para os contatos (com o link no corpo)
  const mailtoEmail = useMemo(() => {
    return buildMailto({
      to: profile.links.email,
      subject: t("contact.subject"),
      body: t("contact.bodyEmail", { email: profile.links.email }),
    });
  }, [t]);

  const mailtoLinkedin = useMemo(() => {
    return buildMailto({
      to: profile.links.email,
      subject: t("contact.subjectLinkedin"),
      body: t("contact.bodyLinkedin", { url: profile.links.linkedin }),
    });
  }, [t]);

  const mailtoGithub = useMemo(() => {
    return buildMailto({
      to: profile.links.email,
      subject: t("contact.subjectGithub"),
      body: t("contact.bodyGithub", { url: profile.links.github }),
    });
  }, [t]);

  return (
    <div className="page">
      <SectionTitle
        title={t("contact.title")}
        subtitle={t("contact.subtitle")}
      />

      <div className="grid-contact">
        <div className="card">
          <div className="contact-item">
            <div className="contact-icon" aria-hidden="true">
              ✉
            </div>
            <div>
              <div className="contact-label">Email</div>
              <a href={mailtoEmail}>{profile.links.email}</a>
            </div>
          </div>

          <div className="contact-item">
            <div className="contact-icon" aria-hidden="true">
              in
            </div>
            <div>
              <div className="contact-label">LinkedIn</div>
              <a href={mailtoLinkedin}>
                {profile.links.linkedin}
              </a>
            </div>
          </div>

          <div className="contact-item">
            <div className="contact-icon" aria-hidden="true">
              GH
            </div>
            <div>
              <div className="contact-label">GitHub</div>
              <a href={mailtoGithub}>
                {profile.links.github}
              </a>
            </div>
          </div>
        </div>

        <div className="card">
          <h2 className="h2">{t("contact.sendMessage")}</h2>

          <form className="form" onSubmit={(e) => e.preventDefault()}>
            <label className="field">
              <span>{t("contact.yourName")}</span>
              <input
                value={form.name}
                onChange={(e) =>
                  setForm((s) => ({ ...s, name: e.target.value }))
                }
                placeholder={t("contact.placeholderName")}
              />
            </label>

            <label className="field">
              <span>{t("contact.yourEmail")}</span>
              <input
                type="email"
                value={form.email}
                onChange={(e) =>
                  setForm((s) => ({ ...s, email: e.target.value }))
                }
                placeholder={t("contact.placeholderEmail")}
              />
            </label>

            <label className="field">
              <span>{t("contact.yourMessage")}</span>
              <textarea
                value={form.message}
                onChange={(e) =>
                  setForm((s) => ({ ...s, message: e.target.value }))
                }
                placeholder={t("contact.placeholderMessage")}
                rows={6}
              />
            </label>

            <div className="actions" style={{ justifyContent: "flex-end" }}>
              <a className="btn btn-primary" href={mailtoForm}>
                {t("contact.send")}
              </a>
            </div>

            <p className="muted" style={{ marginTop: 8, fontSize: 12 }}>
              {t("contact.note")}
            </p>
          </form>
        </div>
      </div>
    </div>
  );
}