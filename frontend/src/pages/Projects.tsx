import SectionTitle from "../components/UI/SectionTitle";
import ProjectCard from "../components/UI/ProjectCard";
import { projects } from "../data/projects";
import { useI18n } from "../i18n/I18nProvider";

export default function Projects() {
  const { t } = useI18n();

  return (
    <div className="page">
      <SectionTitle title={t("home.projectsTitle")} subtitle={t("home.projectsSubtitle")} />

      <div className="grid-3">
        {projects.map((p) => (
          <ProjectCard key={p.slug} project={p} />
        ))}
      </div>
    </div>
  );
}
