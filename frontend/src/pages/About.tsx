import SectionTitle from "../components/UI/SectionTitle";
import { useI18n } from "../i18n/I18nProvider";

export default function About() {
  const { t, ta } = useI18n();

  return (
    <div className="page">
      <SectionTitle title={t("profile.aboutTitle")} />

      <div className="card">
        <div className="prose">
          {ta("profile.about").map((p) => (
            <p key={p}>{p}</p>
          ))}
        </div>

        <hr className="divider" />

        <h2 className="h2">{t("profile.doTitle")}</h2>

        <div className="grid-2">
          <div className="mini-card">
            <h3>{t("profile.webTitle")}</h3>
            <p className="muted">{t("profile.webDesc")}</p>
          </div>

          <div className="mini-card">
            <h3>{t("profile.apiTitle")}</h3>
            <p className="muted">{t("profile.apiDesc")}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
