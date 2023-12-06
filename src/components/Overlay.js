import React from 'react';

const ProjectOverlay = ({ project, onClose }) => {
  return (
    <div className="overlay">
      <div className="overlay-content">
        <button onClick={onClose} className="close-button">
          Close
        </button>
        <h2>{project.name}</h2>
        <p>{project.description}</p>
        {/* Add more details as needed */}
      </div>
    </div>
  );
};

export default ProjectOverlay;
