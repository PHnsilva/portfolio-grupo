import SectionTitle from "../components/UI/SectionTitle";
import { education } from "../data/education";
import { useI18n } from "../i18n/I18nProvider";
import styles from "../styles/Education.module.css";

export default function Education() {
  const { t } = useI18n();

  return (
    <div className="page">
      <SectionTitle
        title={t("home.educationTitle")}
        subtitle={t("home.educationSubtitle")}
      />

      <div className={styles.eduTerminal}>

        <div className={styles.eduTerminalTop}>
          <span className={styles.eduDot} />
          <span className={styles.eduTitle}>SYSTEM_LOG::EDUCATION_HISTORY</span>
        </div>

        <div className={styles.eduTerminalBody}>

          {education.map((e, i) => (
            <div key={`${e.institution}-${e.course}`} className={styles.eduLog}>

              <div className={styles.eduLogHead}>
                <span className={styles.eduTime}>{e.period}</span>
                <span className={styles.eduArrow}>{">>"}</span>
                <span className={styles.eduInst}>{e.institution}</span>
              </div>

              <div className={styles.eduCourse}>{e.course}</div>

              {e.details?.length ? (
                <ul className={styles.eduDetails}>
                  {e.details.map((d) => (
                    <li key={d}>{d}</li>
                  ))}
                </ul>
              ) : null}

            </div>
          ))}

          <div className={styles.eduCursor} />

        </div>

      </div>
    </div>
  );
}