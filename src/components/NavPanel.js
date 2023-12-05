// NavPanel.js
import React from 'react';
import FilterButton from './FilterButton';

const categories = ['All', 'Web', 'App', 'Design', 'Other'];

const NavPanel = ({ setSelectedCategory, selectedCategory }) => { // Add selectedCategory prop
  return (
    <div className='nav-panel'>
      {/* ... (other content) */}
      <div className='button-wrap'>
        {categories.map((category) => (
          <FilterButton
            key={category}
            category={category}
            active={category === selectedCategory}
            onClick={setSelectedCategory}
          />
        ))}
      </div>
    </div>
  );
};

export default NavPanel;
