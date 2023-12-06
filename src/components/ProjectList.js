import React, { useState } from 'react';
import Case from './Case';
import ProjectOverlay from './Overlay';

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
