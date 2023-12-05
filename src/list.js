import React, { useEffect, useRef, useCallback } from 'react';
import { useSpring, animated } from 'react-spring';

const AnimatedListItem = ({ project }) => {
  const ref = useRef();

  const [animationProps, set] = useSpring(() => ({
    opacity: 0,
    height: '100px',
  }));

  const handleScroll = useCallback(() => {
    const rect = ref.current.getBoundingClientRect();
    const isVisible = rect.top < window.innerHeight / 2 && rect.bottom >= 0;

    set({
      opacity: isVisible ? 1 : 0,
      height: isVisible ? '200px' : '100px',
    });
  }, [set]);

  useEffect(() => {
    handleScroll(); // Initial check
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [handleScroll]);

  return (
    <animated.li ref={ref} style={animationProps} className="list-item">
      <h2>{project.name}</h2>
      <animated.img
        style={{
          filter: animationProps.opacity.interpolate((o) => `blur(${o * 5}px)`),
        }}
        src={process.env.PUBLIC_URL + '/images/' + project.image1}
        alt={project.name}
      />
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
