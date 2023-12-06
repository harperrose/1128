import React, { useEffect, useRef, useCallback } from 'react';
import { useSpring, animated } from 'react-spring';

const AnimatedListItem = ({ project }) => {
  const ref = useRef();

  const [animationProps, set] = useSpring(() => ({
    height: '100px',
    blur: 30,
  }));
  
  const handleScroll = useCallback(() => {
    const rect = ref.current.getBoundingClientRect();
    const scrollPosition = window.scrollY || window.pageYOffset;
    const viewportHeight = window.innerHeight;
    const fiftyPercentPoint = viewportHeight * 0.5;
    const seventyFivePercentPoint = viewportHeight * 0.75;
  
    const isInsideRange = scrollPosition >= rect.top + fiftyPercentPoint && scrollPosition <= rect.top + seventyFivePercentPoint;
  
    if (scrollPosition >= rect.top && scrollPosition <= rect.bottom) {
      set((prev) => ({
        height: isInsideRange ? '200px' : '100px',
        blur: isInsideRange ? 0 : 30,
      }));
    }
  }, [set]);
  

  useEffect(() => {
    handleScroll(); // Initial check
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [handleScroll]);

  return (
    <animated.li ref={ref} style={{ height: animationProps.height, overflow: 'hidden' }}>
      <a href= "{project.link}"  className="animated-list-item">
         <h2>{project.name}</h2>
        <animated.img
          className="animated-list-image"
          style={{
            filter: animationProps.blur.interpolate((b) => `blur(${b}px)`),
          }}
          src={process.env.PUBLIC_URL + '/images/' + project.image1}
          alt={project.name}
        />
      </a>
    </animated.li>
  );
};

const AnimatedList = ({ projects }) => {
  return (
    <ul className="animated-list">
      {projects.map((project) => (
        <AnimatedListItem key={project.id} project={project} />
      ))}
    </ul>
  );
};

export default AnimatedList;
