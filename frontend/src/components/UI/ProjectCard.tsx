import { Link } from "react-router-dom";
import Tag from "./Tag";
import type { Project } from "../../types/portfolio";

type Props = {
  project: Project;
};

export default function ProjectCard({ project }: Props) {
  return (
    <article className="card project-card">
      <div className="project-thumb" aria-hidden="true" />

      <div className="project-body">
        <h3 className="card-title">{project.name}</h3>
        <p className="muted">{project.description}</p>

        <div className="tag-row">
          {project.stack.map((s) => (
            <Tag key={s}>{s}</Tag>
          ))}
        </div>

        <div className="actions">
          <Link className="btn btn-primary" to={`/projetos/${project.slug}`}>
            Detalhes
          </Link>
          {project.links.repo ? (
            <a className="btn btn-ghost" href={project.links.repo} target="_blank" rel="noreferrer">
              GitHub
            </a>
          ) : null}
          {project.links.live ? (
            <a className="btn btn-ghost" href={project.links.live} target="_blank" rel="noreferrer">
              Live
            </a>
          ) : null}
        </div>
      </div>
    </article>
  );
}
