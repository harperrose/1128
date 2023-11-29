import React, { useState } from 'react';
import { projectData } from "./data.js";
import './App.css';

const categories = ['All', 'Web', 'App', 'Design', 'Other'];

const ProjectList = ({ projects }) => {
  return (
    <ul>
      {projects.map((project) => (
        <li key={project.id}>
          <>
            <img
              className="image1"
              src={process.env.PUBLIC_URL + '/images/' +project.image1 }
              alt={project.name}
            />
            <div className="project-copy">
                <h1>{project.name}</h1>
                <a href={project.link} className="link">
                  Visit the live site
                </a>
              <p className="project-description">{project.description}</p>
            </div>
          </>
        </li>
      ))}
    </ul>
  );
};


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

const App = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');

  const filteredProjects =
    selectedCategory === 'All'
      ? projectData
      : projectData.filter((project) => project.category === selectedCategory.toLowerCase());

  return (
    <div>
      <div className='nav-panel'>
        <p className='bio'>Harper Daniel is a freelance digital designer and developer who values accessibility and general goodness. <a href={process.env.PUBLIC_URL + '/pages/services.html'}>Learn more about what she offers.</a></p>
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
      <div className='project-wrap' >
        <div className='introduction'>
            <img
               className="introduction-hd"
               src={process.env.PUBLIC_URL + '/images/logo.png'}
               alt='Harper Daniel'
             />
             <img
              className="introduction-dd"
              src={process.env.PUBLIC_URL + '/images/D_D.svg'}
              alt='Digital Designer'
            />
        </div>
         <ProjectList projects={filteredProjects} />
      </div>
    </div>
  );
};

export default App;
