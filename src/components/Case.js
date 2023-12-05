import React from 'react';

const Case = ({ project }) => {
  return (
    <div>
      {project.casestudy ? (
        <a href={project.link} className="case-link">
          Case Study
        </a>
      ) : (
        <a href={project.link} className="site-link">
          Live Site
        </a>
      )}
    </div>
  );
};

export default Case;
