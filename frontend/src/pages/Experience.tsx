import SectionTitle from "../components/UI/SectionTitle";
import ExperienceCard from "../components/UI/ExperienceCard";
import { experience } from "../data/experience";
import { useI18n } from "../i18n/I18nProvider";

export default function Experience() {
  const { t } = useI18n();

  return (
    <div className="page">
      <SectionTitle title={t("home.experienceTitle")} subtitle={t("home.experienceSubtitle")} />

      <div className="stack">
        {experience.map((item, idx) => (
          <ExperienceCard key={`${item.company}-${item.role}`} item={item} index={idx} />
        ))}
      </div>
    </div>
  );
}
