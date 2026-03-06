import { useState } from "react";
import RareProfessionalIntro from "./components/UI/RareProfessionalIntro";
import Router from "./routes/AppRoutes";
import FlappyWidget from "./components/Flappy/FlappyWidget";

export default function App() {
  const [showIntro, setShowIntro] = useState(true);
  const [introDone, setIntroDone] = useState(false);

  return (
    <div className={`${showIntro ? "siteBehind" : ""} ${introDone ? "introDone" : ""}`}>
      <Router />
      {showIntro && (
        <RareProfessionalIntro
          onFinish={() => {
            setShowIntro(false);
            setIntroDone(true);
          }}
        />
      )}
      <FlappyWidget />
    </div>
  );
}