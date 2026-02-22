import SectionTitle from "../components/UI/SectionTitle";
import { profile } from "../data/profile";

export default function About() {
  return (
    <div className="page">
      <SectionTitle title="Sobre Mim" />

      <div className="card">
        <div className="prose">
          {profile.about.map((p) => (
            <p key={p}>{p}</p>
          ))}
        </div>

        <hr className="divider" />

        <h2 className="h2">O Que Eu Faço</h2>

        <div className="grid-2">
          <div className="mini-card">
            <h3>Desenvolvimento Web</h3>
            <p className="muted">
              Interfaces responsivas, componentes reutilizáveis e foco em experiência do usuário.
            </p>
          </div>

          <div className="mini-card">
            <h3>APIs e Backend</h3>
            <p className="muted">
              Integrações, regras de negócio, validações e performance para aplicações em produção.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
