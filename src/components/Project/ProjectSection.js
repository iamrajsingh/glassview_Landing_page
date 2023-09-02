import React from "react";
import delHero from "./images/del-hero-section.webp";
import ss from "./images/screen-shot.webp";
import right from "./images/right-btn.webp";
import "./ProjectSection.css";
import WorkPage from "./workPage/WorkPage";

import ProjectCard from "./ProjectCard";

const ProjectSection = () => {
  return (
    <section id="project">
       <div className="row">
      <WorkPage />
      <ProjectCard image={delHero} heading="Beats by Dr.Dre" icon={right} />
      <ProjectCard image={ss} heading="SalesForce" icon={right} />
    </div>
    </section>
   
  );
};

export default ProjectSection;