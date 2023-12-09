import React, { useEffect } from 'react';
import { animated } from 'react-spring';
import AnimatedList from './AnimatedList.js';
import { projectData } from "../data.js";
import PrototypeGalleryItem from './PrototypeGalleryItem.jsx';
import FinalGalleryItem from '../FinalGallery.jsx';
import LaunchGalleryItem from './LaunchGallery.jsx';
import Contact from './contact.jsx';
import '../styles/AnimatedList.css';

const ProjectOverlay = ({ project, onClose }) => {
  useEffect(() => {
    // Disable scrolling on the main page when the overlay is open
    document.body.style.overflow = 'hidden';

    return () => {
      // Enable scrolling when the overlay is closed
      document.body.style.overflow = 'visible';
    };
  }, []);

  return (
    <animated.div className="overlay">
      <div className="overlay-content slide-in">
        <button onClick={onClose} className="close-button">
          Close
        </button>
        <div className="overlay-content-page">
          <img
            className="image2"
            src={process.env.PUBLIC_URL + '/images/' + project.image2}
            alt={project.image2alt}
          />
          <h2>{project.name}</h2>
          <section>
            <h3>Background</h3>
            <p>{project.background}</p>
          </section>
          <section>
            <h3>Research and Considerations</h3>
            <p>{project.research1}</p>
            <p>{project.research2}</p>
          </section>
          <section>
            <h3>Prototypes</h3>
              <PrototypeGalleryItem project={project} />
          </section>
          <section>
            <h3>Documentation</h3>
            <FinalGalleryItem project={project} />
          </section>
          <section>
            <h3>Launch</h3>
            <LaunchGalleryItem project={project} />
          </section>
          <section>
            <h3>View more projects</h3>
            <AnimatedList project={projectData} />
          </section>
          <Contact />
        </div>
      </div>
    </animated.div>
  );
};

export default ProjectOverlay;
