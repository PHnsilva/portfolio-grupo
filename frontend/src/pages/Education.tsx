import SectionTitle from "../components/UI/SectionTitle";
import { education } from "../data/education";

export default function Education() {
  return (
    <div className="page">
      <SectionTitle title="Formação" subtitle="Minha base acadêmica e aprendizado contínuo." />

      <div className="stack">
        {education.map((e) => (
          <article key={`${e.institution}-${e.course}`} className="card">
            <div className="row-between">
              <div>
                <div className="exp-company">{e.institution}</div>
                <div className="exp-role">{e.course}</div>
              </div>
              <div className="muted">{e.period}</div>
            </div>

            {e.details?.length ? (
              <ul className="exp-list" style={{ marginTop: 10 }}>
                {e.details.map((d) => (
                  <li key={d}>{d}</li>
                ))}
              </ul>
            ) : null}
          </article>
        ))}
      </div>
    </div>
  );
}
