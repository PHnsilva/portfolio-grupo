import { useParams, Link } from "react-router-dom";
import SectionTitle from "../components/UI/SectionTitle";
import Tag from "../components/UI/Tag";
import { projects } from "../data/projects";

export default function ProjectDetails() {
  const { slug } = useParams<{ slug: string }>();
  const project = projects.find((p) => p.slug === slug);

  if (!project) {
    return (
      <div className="page">
        <SectionTitle title="Projeto não encontrado" />
        <Link className="btn btn-ghost" to="/projetos">Voltar</Link>
      </div>
    );
  }

  return (
    <div className="page">
      <SectionTitle title={project.name} subtitle={project.description} />

      <div className="card">
        <h2 className="h2">Stack</h2>
        <div className="tag-row" style={{ marginBottom: 14 }}>
          {project.stack.map((s) => (
            <Tag key={s}>{s}</Tag>
          ))}
        </div>

        <h2 className="h2">Destaques</h2>
        <ul className="exp-list">
          {project.highlights.map((h) => (
            <li key={h}>{h}</li>
          ))}
        </ul>

        <div className="actions" style={{ marginTop: 14 }}>
          <Link className="btn btn-ghost" to="/projetos">
            ← Voltar para projetos
          </Link>
          {project.links.repo ? (
            <a className="btn btn-primary" href={project.links.repo} target="_blank" rel="noreferrer">
              Ver no GitHub
            </a>
          ) : null}
        </div>
      </div>
    </div>
  );
}
