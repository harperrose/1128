import React, { useState } from 'react';
import Case from './Case';
import AnimatedList from './AnimatedImageList';
import { projectData } from "../data.js";

const ProjectOverlay = ({ project, onClose }) => {
  return (
    <div className="overlay">
      <div className="overlay-content">
        <button onClick={onClose} className="close-button">
          Close
        </button>
        <div className="overlay-content-page">
         <h2>{project.name}</h2>
         <p>{project.description}</p>
         <p>{project.research1}</p>
         <p>{project.research2}</p>
        </div>
      </div>
      <AnimatedList projects={projectData} />
    </div>
  );
};

export const ProjectList = ({ projects }) => {
  const [selectedProject, setSelectedProject] = useState(null);

  const handleProjectClick = (project) => {
    if (project.casestudy) {
      setSelectedProject(project);
    }
  };

  const handleCloseOverlay = () => {
    setSelectedProject(null);
  };

  return (
    <ul>
      {projects.map((project) => (
        <li key={project.id} onClick={() => handleProjectClick(project)}>
          <>
            <img
              className="image1"
              src={process.env.PUBLIC_URL + '/images/' + project.image1}
              alt={project.name}
            />
            <div className="project-copy">
              <p className="project-description">{project.description}</p>
              <Case project={project} onCaseStudyClick={() => handleProjectClick(project)} />
            </div>
          </>
        </li>
      ))}
      {selectedProject && (
        <ProjectOverlay project={selectedProject} onClose={handleCloseOverlay} />
      )}
    </ul>
  );
};
