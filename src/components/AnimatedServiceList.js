import React, { useEffect, useRef, useCallback } from 'react';
import { useSpring, animated } from 'react-spring';
import { servicesData } from '../ServicesData';

const AnimatedListItem = ({ service }) => {
  const ref = useRef();

  const [animationProps, set] = useSpring(() => ({
    itemHeight: 100,
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
        itemHeight: 100,
      });
    } else if (scrollPosition > halfwayAnimationPosition && scrollPosition <= endAnimationPosition) {
      // 40% - 50%
      set({
        itemHeight: 200,
      });
    } else if (scrollPosition > endAnimationPosition) {
      // 54% - 75%
      set({
        itemHeight: 100,
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
      <a href={`/services/${service.id}`} className="animated-list-item">
        <h3>{service.name}</h3>
        <p>{service.description}</p>
      </a>
    </animated.li>
  );
};

const AnimatedServiceList = () => {
  return (
    <ul className="animated-list">
      {servicesData.map((service) => (
        <AnimatedListItem key={service.id} service={service} />
      ))}
    </ul>
  );
};

export default AnimatedServiceList;
