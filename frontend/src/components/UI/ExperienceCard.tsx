import type { ExperienceItem } from "../../types/portfolio";

type Props = {
  item: ExperienceItem;
  index?: number;
};

const iconColors = ["#1f6feb", "#2ea043", "#d29922", "#a371f7"]; // used only for small accent blocks

export default function ExperienceCard({ item, index = 0 }: Props) {
  const accent = iconColors[index % iconColors.length];

  return (
    <article className="card exp-card">
      <div className="exp-left">
        <div className="exp-icon" style={{ background: accent }} aria-hidden="true" />
      </div>

      <div className="exp-body">
        <div className="exp-head">
          <div>
            <div className="exp-company">{item.company}</div>
            <div className="exp-role">{item.role}</div>
          </div>

          <div className="exp-meta">
            <span className="muted">{item.period}</span>
            {item.badge ? <span className="badge">{item.badge}</span> : null}
          </div>
        </div>

        <ul className="exp-list">
          {item.bullets.map((b) => (
            <li key={b}>{b}</li>
          ))}
        </ul>
      </div>
    </article>
  );
}
