import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./index.css";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import About from "./pages/About";
import Project from "./pages/Project";
import SmellAndMachineLearning from "./pages/SmellAndMachineLearning";
import Flywheel from "./pages/Flywheel";
import RedTeamingClinicalLLMs from "./pages/RedTeamingClinicalLLMs";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter basename={import.meta.env.BASE_URL}>
      <Routes>
        <Route element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="project/echoes-of-italy" element={<Project />} />
          <Route
            path="project/smell-and-machine-learning"
            element={<SmellAndMachineLearning />}
          />
          <Route
            path="project/building-products-at-flywheel"
            element={<Flywheel />}
          />
          <Route
            path="project/red-teaming-clinical-llms"
            element={<RedTeamingClinicalLLMs />}
          />
        </Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>,
);
