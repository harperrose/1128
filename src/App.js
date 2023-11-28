import React, { useState } from 'react';
import { projectData } from "./data.js";

const categories = ['All', 'Web', 'Mobile', 'Design', 'Other']; // Add more categories as needed

const ProjectList = ({ projects }) => {
  return (
    <ul>
      {projects.map((project) => (
        <li key={project.id}>{project.name}</li>
      ))}
    </ul>
  );
};

const FilterButton = ({ category, active, onClick }) => {
  const buttonStyle = {
    backgroundColor: active ? 'blue' : 'gray',
  };

  return (
    <button style={buttonStyle} onClick={() => onClick(category)}>
      {category}
    </button>
  );
};

const App = () => {
  const [selectedCategories, setSelectedCategories] = useState(['All']);

  const handleCategoryClick = (category) => {
    setSelectedCategories((prevCategories) => {
      if (category === 'All') {
        // Toggle 'All' category
        return prevCategories.includes('All') ? [] : ['All'];
      } else {
        // Toggle other categories
        const updatedCategories = prevCategories.includes(category)
          ? prevCategories.filter((c) => c !== category)
          : [...prevCategories, category];

        return updatedCategories.length === 0 ? ['All'] : updatedCategories;
      }
    });
  };

  const filteredProjects =
    selectedCategories.includes('All')
      ? projectData
      : projectData.filter((project) => {
          return project.categories.some((category) =>
            selectedCategories.includes(category)
          );
        });

  return (
    <div>
      <div>
        {categories.map((category) => (
          <FilterButton
            key={category}
            category={category}
            active={selectedCategories.includes(category)}
            onClick={handleCategoryClick}
          />
        ))}
      </div>
      <ProjectList projects={filteredProjects} />
    </div>
  );
};

export default App;






































