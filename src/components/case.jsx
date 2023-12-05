import React from 'react';
import { projectData } from "../data";

const CaseLink = () => {
  return (
    <div>
      {projectData.map((project) => (
        <div key={project.id}>
          {project.casestudy ? (
            <a href={project.link} className="case-link">
              Case Study
            </a>
          ) : (
            <a href={project.link} className="link">
              Live Site
            </a>
          )}
        </div>
      ))}
    </div>
  );
};

export default CaseLink;
