import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "../components/Layout/Layout";

import Home from "../pages/Home";
import NotFound from "../pages/NotFound";
import ProjectDetails from "../pages/ProjectDetails";

type AppRoutesProps = {
  introFinished: boolean;
};

export default function AppRoutes({ introFinished }: AppRoutesProps) {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home introFinished={introFinished} />} />
          <Route path="/projetos/:slug" element={<ProjectDetails />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}