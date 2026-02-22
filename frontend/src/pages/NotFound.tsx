import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <div className="page">
      <div className="card">
        <h1>Página não encontrada</h1>
        <p className="muted">O link pode estar incorreto ou a página foi movida.</p>
        <Link className="btn btn-primary" to="/">Voltar para o início</Link>
      </div>
    </div>
  );
}
