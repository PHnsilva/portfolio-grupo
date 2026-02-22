import SectionTitle from "../components/UI/SectionTitle";
import ProjectCard from "../components/UI/ProjectCard";
import { projects } from "../data/projects";

export default function Projects() {
  return (
    <div className="page">
      <SectionTitle title="Projetos" subtitle="Seleção do que construí (stack, objetivos e resultados)." />

      <div className="grid-3">
        {projects.map((p) => (
          <ProjectCard key={p.slug} project={p} />
        ))}
      </div>
    </div>
  );
}
