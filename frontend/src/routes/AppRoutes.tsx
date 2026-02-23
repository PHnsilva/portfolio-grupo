import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "../components/Layout/Layout";

import Home from "../pages/Home";
import NotFound from "../pages/NotFound";
import ProjectDetails from "../pages/ProjectDetails";
export default function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          {/* Single-page portfolio (sections) */}
          <Route path="/" element={<Home />} />
          {/* Project details */}
          <Route path="/projetos/:slug" element={<ProjectDetails />} />
          {/* 404 */}
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
