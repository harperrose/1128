import React, { useState } from 'react';
import { projectData } from "./data.js";

const categories = ['All', 'Web', 'Mobile', 'Design', 'Other']; // Add more categories as needel'])tegories

const ProjectList = ({ projects }) => {
  return (
    <ul>
      {projects.map((project) => (
        <li key={project.id}>
        {project.featured ? (
          <>
            <img
              className="image1"
              src={project.image1}
              alt={project.name}
            />
            <div className="featuredcopy">
              <div className="featuredstat">
                <h1>{project.name}</h1>
                <a href={project.link} className="greenlink">
                  Visit the live site
                </a>
              </div>
              <p className="description">{project.description}</p>
            </div>
          </>
        ) : (
          <div className="">
            <h1>{project.name}</h1>
            <a href={project.link} className="greenlink">Visit the live site</a>
          </div>
        )}
      </li>
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
  const [selectedCategory, setSelectedCategory] = useState('All');

  const filteredProjects =
    selectedCategory === 'All'
      ? projectData
      : projectData.filter((project) => project.category === selectedCategory.toLowerCase());

  return (
    <div>
      <div>
        {categories.map((category) => (
          <FilterButton
            key={category}
            category={category}
            active={category === selectedCategory}
            onClick={setSelectedCategory}
          />
        ))}
      </div>
      <ProjectList projects={filteredProjects} />
    </div>
  );
};

export default App;
