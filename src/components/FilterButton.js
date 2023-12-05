import React from 'react';

const FilterButton = ({ category, active, onClick }) => {
  const buttonStyle = {
    backgroundColor: active ? '#1f0' : '#e2e2e2',
  };

  return (
    <div>
        <button style={buttonStyle} onClick={() => onClick(category)}>
          {category}
        </button>
    </div>
  );
};

export default FilterButton;
