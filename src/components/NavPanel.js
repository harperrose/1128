import React, { useRef } from 'react';
import FilterButton from './FilterButton';

const categories = ['All', 'Web', 'App', 'Design', 'Other'];

const NavPanel = ({ setSelectedCategory, selectedCategory }) => {
  const projectWrapRef = useRef();

  const scrollToTop = () => {
    if (projectWrapRef.current) {
      projectWrapRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
    scrollToTop();
  };

  return (
    <div className='nav-panel'>
      <div className='button-wrap'>
        {categories.map((category) => (
          <FilterButton
            key={category}
            category={category}
            active={category === selectedCategory}
            onClick={() => handleCategoryClick(category)}
          />
        ))}
      </div>
      <div ref={projectWrapRef} />
    </div>
  );
};

export default NavPanel;
