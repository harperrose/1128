import React from 'react';
import Case from './Case';

export const ProjectList = ({ projects }) => {
  return (
    <ul>
      {projects.map((project) => (
        <li key={project.id}>
          <>
            <img
              className="image1"
              src={process.env.PUBLIC_URL + '/images/' + project.image1}
              alt={project.name}
            />
            <div className="project-copy">
              <p className="project-description">{project.description}</p>
              <Case project={project} />
            </div>
          </>
        </li>
      ))}
    </ul>
  );
};
