import React, { useEffect, useRef, useCallback } from 'react';
import { useSpring, animated } from 'react-spring';

const AnimatedList = ({ data, type }) => {
  const ref = useRef();

  const [animationProps, set] = useSpring(() => ({
    height: '100px',
    blur: 30,
  }));

  const handleScroll = useCallback(() => {
    const rect = ref.current.getBoundingClientRect();
    const scrollPosition = window.scrollY || window.pageYOffset;
    const viewportHeight = window.innerHeight;
    const fortyPercentPoint = viewportHeight * 0.4;
    const fiftyPercentPoint = viewportHeight * 0.5;

    const isInsideRange = scrollPosition >= rect.top + fortyPercentPoint && scrollPosition <= rect.top + fiftyPercentPoint;

    set({
      height: isInsideRange ? '200px' : '100px',
      blur: isInsideRange ? 0 : 30,
    });
  }, [set]);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [handleScroll]);

  return (
    <div>
      <h1>{type === 'projects' ? 'Projects' : 'Services'}</h1>
      <animated.ul ref={ref} >
        {data.map((item) => (
          <animated.li key={item.id} style={{ height: animationProps.height }} className= "animated-list-item">
            <h2>{item.name}</h2>
            <animated.img
              src={process.env.PUBLIC_URL + '/images/' + item.image1}
              alt={item.name}
              style={{
                height: '100px',
                filter: animationProps.blur.interpolate((b) => `blur(${b}px)`),
              }}
            />
            <p>{item.description}</p>
          </animated.li>
        ))}
      </animated.ul>
    </div>
  );
};

export default AnimatedList;
