import { useEffect, useMemo, useState } from "react";

type NavItem = { id: string; label: string };

/**
 * Navbar para SPA de uma única página:
 * - Links para âncoras (#sobre, #projetos, ...)
 * - Destaque automático da seção atual via IntersectionObserver
 */
export default function Navbar() {
  const items: NavItem[] = useMemo(
    () => [
      { id: "inicio", label: "Início" },
      { id: "sobre", label: "Sobre" },
      { id: "experiencias", label: "Experiências" },
      { id: "projetos", label: "Projetos" },
      { id: "competencias", label: "Competências" },
    ],
    []
  );

  const [activeId, setActiveId] = useState<string>("inicio");

  useEffect(() => {
    const sections = items
      .map((i) => document.getElementById(i.id))
      .filter(Boolean) as HTMLElement[];

    if (sections.length === 0) return;

    const obs = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => (b.intersectionRatio ?? 0) - (a.intersectionRatio ?? 0));

        const id = visible[0]?.target?.id;
        if (id) setActiveId(id);
      },
      {
        root: null,
        // navbar é fixa; "empurra" a área visível para baixo
        rootMargin: "-72px 0px -55% 0px",
        threshold: [0.15, 0.25, 0.35, 0.5, 0.65],
      }
    );

    sections.forEach((s) => obs.observe(s));
    return () => obs.disconnect();
  }, [items]);

  return (
    <header className="navbar">
      <nav className="navbar-inner">
        <div className="navbar-brand">
          <span className="brand-dot" aria-hidden="true" />
          <strong>Felipe Luiz Parreiras Lima</strong>
        </div>

        <div className="navbar-links">
          {items.map((i) => (
            <a
              key={i.id}
              href={`#${i.id}`}
              className={activeId === i.id ? "navlink active" : "navlink"}
            >
              {i.label}
            </a>
          ))}
        </div>

        <div className="navbar-right">
          <a className="nav-cta" href="#contato">
            Contato
          </a>
        </div>
      </nav>
    </header>
  );
}
