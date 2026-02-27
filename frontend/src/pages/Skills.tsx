import SectionTitle from "../components/UI/SectionTitle";
import Tag from "../components/UI/Tag";
import { skillGroups } from "../data/skills";
import { useI18n } from "../i18n/I18nProvider";

function IconRow({ items }: { items: string[] }) {
  return (
    <div className="icon-row">
      {items.slice(0, 8).map((it) => (
        <div key={it} className="icon-pill" title={it} aria-label={it}>
          {it.slice(0, 2).toUpperCase()}
        </div>
      ))}
    </div>
  );
}

export default function Skills() {
  const { t } = useI18n();

  const tech = skillGroups.find((g) => g.title === "Habilidades Técnicas");
  const tools = skillGroups.find((g) => g.title === "Frameworks / Ferramentas");
  const soft = skillGroups.find((g) => g.title === "Habilidades Interpessoais");

  return (
    <div className="page">
      <SectionTitle title={t("home.skillsTitle")} subtitle={t("home.skillsSubtitle")} />

      <div className="card">
        <h2 className="h2">{t("home.skillsTitle")}</h2>
        <IconRow items={tech?.items ?? []} />

        <div className="tag-row" style={{ marginTop: 12 }}>
          {(tech?.items ?? []).map((s) => (
            <Tag key={s}>{s}</Tag>
          ))}
        </div>

        <hr className="divider" />

        <h2 className="h2">{t("home.toolsTitle")}</h2>
        <div className="tag-row">
          {(tools?.items ?? []).map((s) => (
            <Tag key={s}>{s}</Tag>
          ))}
        </div>

        <hr className="divider" />

        <h2 className="h2">{t("home.softTitle")}</h2>
        <div className="tag-row">
          {(soft?.items ?? []).map((s) => (
            <Tag key={s}>{s}</Tag>
          ))}
        </div>
      </div>
    </div>
  );
}
