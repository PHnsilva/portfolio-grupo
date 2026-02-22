import SectionTitle from "../components/UI/SectionTitle";
import Tag from "../components/UI/Tag";
import { skillGroups } from "../data/skills";

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
  const tech = skillGroups.find((g) => g.title === "Habilidades Técnicas");
  const tools = skillGroups.find((g) => g.title === "Frameworks / Ferramentas");
  const soft = skillGroups.find((g) => g.title === "Habilidades Interpessoais");

  return (
    <div className="page">
      <SectionTitle title="Competências" subtitle="Tecnologias, ferramentas e habilidades que aplico no dia a dia." />

      <div className="card">
        <h2 className="h2">Habilidades Técnicas</h2>
        <IconRow items={tech?.items ?? []} />

        <div className="tag-row" style={{ marginTop: 12 }}>
          {(tech?.items ?? []).map((s) => (
            <Tag key={s}>{s}</Tag>
          ))}
        </div>

        <hr className="divider" />

        <h2 className="h2">Ferramentas</h2>
        <div className="tag-row">
          {(tools?.items ?? []).map((s) => (
            <Tag key={s}>{s}</Tag>
          ))}
        </div>

        <hr className="divider" />

        <h2 className="h2">Habilidades Interpessoais</h2>
        <div className="tag-row">
          {(soft?.items ?? []).map((s) => (
            <Tag key={s}>{s}</Tag>
          ))}
        </div>
      </div>
    </div>
  );
}
