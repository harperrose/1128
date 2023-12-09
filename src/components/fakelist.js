import React, { useEffect } from 'react';
import { useSpring, animated } from 'react-spring';
import AnimatedList from './AnimatedImageList.js';
import { projectData } from "../../data.js";
import PrototypeGalleryItem from './PrototypeGalleryItem.jsx';
import FinalGalleryItem from './FinalGallery.jsx';
import LaunchGalleryItem from './LaunchGallery.jsx';
import Contact from '../contact.jsx';
import './AnimatedImageList.css';

const ProjectOverlay = ({ project, onClose }) => {
  const overlayAnimation = useSpring({
    from: { right: '-100%' },
    to: { right: '0%' },
  });

  useEffect(() => {
    // Disable scrolling on the main page when the overlay is open
    document.body.style.overflow = 'hidden';

    return () => {
      // Enable scrolling when the overlay is closed
      document.body.style.overflow = 'visible';
    };
  }, []);

  return (
    <animated.div style={overlayAnimation} className="overlay">
      <div className="overlay-content">
        <button onClick={onClose} className="close-button">
          Close
        </button>
        <div className="overlay-content-page">
          {/* ... rest of your content ... */}
          <AnimatedList projects={projectData} />
          <Contact />
        </div>
      </div>
    </animated.div>
  );
};

export default ProjectOverlay;
