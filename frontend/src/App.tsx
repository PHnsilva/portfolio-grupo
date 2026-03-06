import { useState } from "react";
import RareProfessionalIntro from "./components/UI/RareProfessionalIntro";
import AppRoutes from "./routes/AppRoutes";
import FlappyWidget from "./components/Flappy/FlappyWidget";

export default function App() {
  const [showIntro, setShowIntro] = useState(true);
  const [introFinished, setIntroFinished] = useState(false);

  return (
    <div className={`${showIntro ? "siteBehind" : ""} ${introFinished ? "introDone" : ""}`}>
      {showIntro && (
        <RareProfessionalIntro
          onFinish={() => {
            setShowIntro(false);
            setIntroFinished(true);
          }}
        />
      )}

      <AppRoutes introFinished={introFinished} />
      <FlappyWidget />
    </div>
  );
}