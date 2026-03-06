import { useEffect, useState } from "react";
import About from "./About";
import Experience from "./Experience";
import Education from "./Education";
import Projects from "./Projects";
import Skills from "./Skills";
import Contact from "./Contact";

import { profile } from "../data/profile";
import { useI18n } from "../i18n/I18nProvider";

type HomeProps = {
  introFinished: boolean;
};

export default function Home({ introFinished }: HomeProps) {
  const { t } = useI18n();
  const [imageReady, setImageReady] = useState(false);

  useEffect(() => {
    if (!introFinished) {
      setImageReady(false);
      return;
    }

    const timer = setTimeout(() => setImageReady(true), 1800);
    return () => clearTimeout(timer);
  }, [introFinished]);

  return (
    <div className="app-shell">
      <main className="page">
        <section id="inicio" className="section">
          <div className="container">
            <div className="card heroCard">
              <div className="hero">
                <div className="heroLeft">
                  <div className="heroEyebrow">{t("home.hero.eyebrow")}</div>

                  <div className="hero-title">
                    <h1>{profile.name}</h1>
                  </div>

                  <p className="hero-role">{profile.role}</p>

                  <p className="heroDescription">
                    {t("home.hero.description")}
                  </p>

                  <div className="actions">
                    <a className="btn btn-primary" href="#projetos">
                      {t("home.hero.ctaProjects")}
                    </a>

                    <a className="btn btn-ghost" href="#contato">
                      {t("home.hero.ctaContact")}
                    </a>
                  </div>
                </div>

                <div className="heroRight">
                  <div className="heroImageFrame">
                    <img
                      src="/images/felipe-hero.jpeg"
                      alt={profile.name}
                      className="heroImage"
                    />

                    {introFinished && !imageReady && (
                      <div className="heroScanner">
                        <div className="heroScannerBar" />
                        <div className="heroScannerLabel">
                          {t("home.hero.scanner")}
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </div>

              <hr className="divider" />

              <div className="grid-3">
                <div className="mini-card mini-card-matrix">
                  <h3>{t("home.cards.focusTitle")}</h3>
                  <p className="muted">{t("home.cards.focusText")}</p>
                </div>

                <div className="mini-card mini-card-matrix">
                  <h3>{t("home.cards.stackTitle")}</h3>
                  <p className="muted">{t("home.cards.stackText")}</p>
                </div>

                <div className="mini-card mini-card-matrix">
                  <h3>{t("home.cards.goalTitle")}</h3>
                  <p className="muted">{t("home.cards.goalText")}</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="sobre" className="section">
          <div className="container">
            <About />
          </div>
        </section>

        <section id="experiencias" className="section">
          <div className="container">
            <Experience />
          </div>
        </section>

        <section id="educacao" className="section">
          <div className="container">
            <Education />
          </div>
        </section>

        <section id="projetos" className="section">
          <div className="container">
            <Projects />
          </div>
        </section>

        <section id="competencias" className="section">
          <div className="container">
            <Skills />
          </div>
        </section>

        <section id="contato" className="section">
          <div className="container">
            <Contact />
          </div>
        </section>
      </main>
    </div>
  );
}