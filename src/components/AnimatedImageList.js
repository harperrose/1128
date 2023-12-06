import React, { useEffect, useRef, useCallback } from 'react';
import { useSpring, animated } from 'react-spring';

const AnimatedListItem = ({ project }) => {
  const ref = useRef();

  const [animationProps, set] = useSpring(() => ({
    imageSize: 100,
    itemHeight: 100,
    blur: 20,
  }));

  const handleScroll = useCallback(() => {
    const rect = ref.current.getBoundingClientRect();
    const viewportHeight = window.innerHeight;
    const startAnimationPosition = rect.top + viewportHeight * 0.25;
    const endAnimationPosition = rect.top + viewportHeight * 0.75;
    const halfwayAnimationPosition = rect.top + viewportHeight * 0.5;

    const scrollPosition = window.scrollY || window.pageYOffset;

    if (scrollPosition >= startAnimationPosition && scrollPosition <= halfwayAnimationPosition) {
      // 0% - 25%
      set({
        imageSize: 100,
        itemHeight: 100,
        blur: 20,
      });
    } else if (scrollPosition > halfwayAnimationPosition && scrollPosition <= endAnimationPosition) {
      // 40% - 50%
      set({
        imageSize: 200,
        itemHeight: 200,
        blur: 0,
      });
    } else if (scrollPosition > endAnimationPosition) {
      // 54% - 75%
      set({
        imageSize: 100,
        itemHeight: 100,
        blur: 20,
      });
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
    <animated.li
      ref={ref}
      style={{
        height: animationProps.itemHeight.interpolate((h) => `${h}px`),
        overflow: 'hidden',
      }}
    >
      <a href={project.link} className="animated-list-item">
        <h3>{project.name}</h3>
        <animated.img
          className="animated-list-image"
          style={{
            filter: animationProps.blur.interpolate((b) => `blur(${b}px)`),
            height: animationProps.imageSize.interpolate((h) => `${h}px`),
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
