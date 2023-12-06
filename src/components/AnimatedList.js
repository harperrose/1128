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
    const centerPoint = viewportHeight / 2;
    const fiftyPercentPoint = viewportHeight * 0.5;
    const seventyFivePercentPoint = viewportHeight * 0.75;

    if (scrollPosition >= rect.top && scrollPosition <= rect.bottom) {
      const isInCenter = rect.top + rect.height / 2 >= centerPoint;

      set({
        height: isInCenter ? '200px' : '100px',
        blur: isInCenter ? 0 : 30,
      });

      if (scrollPosition >= rect.top + fiftyPercentPoint && scrollPosition <= rect.top + seventyFivePercentPoint) {
        set({
          height:'200px',
          blur:0,
        });
      } else if (scrollPosition > rect.top + seventyFivePercentPoint) {
        set({
          height: '100px',
          blur:30,
        });
      }
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
      <h2>{project.name}</h2>
      <animated.img
        className="animated-list-image"
        style={{
          filter: animationProps.blur.interpolate((b) => `blur(${b}px)`),
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
