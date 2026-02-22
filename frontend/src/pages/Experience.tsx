import SectionTitle from "../components/UI/SectionTitle";
import ExperienceCard from "../components/UI/ExperienceCard";
import { experience } from "../data/experience";

export default function Experience() {
  return (
    <div className="page">
      <SectionTitle title="Experiências" subtitle="Onde atuei e o tipo de impacto que gerei." />

      <div className="stack">
        {experience.map((item, idx) => (
          <ExperienceCard key={`${item.company}-${item.role}`} item={item} index={idx} />
        ))}
      </div>
    </div>
  );
}
