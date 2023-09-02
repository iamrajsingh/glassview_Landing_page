import React from "react";

const ProjectCard = ({ image, heading, icon }) => {
  return (
    <div className="column">
      <img
        src={image}
        style={{ Width: "100%", height: "100vh", objectFit: "cover" }}
      />
      <h1 className="ProjectTitle" data-aos="fade-up">
        {heading}
      </h1>
      <h3 className="ViewProject" data-aos="fade-up">
        View project <img className="btn" src={icon} />
      </h3>
    </div>
  );
};

export default ProjectCard;
