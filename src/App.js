import React, { useState } from 'react';
import { projectData } from "./data.js";
import './App.css';
import { ProjectList } from './components/list.jsx';
import { Navigation } from './components/nav.jsx';


const categories = ['All', 'Web', 'App', 'Design', 'Other']

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
      <div className='project-wrap' >
      <p className='bio show-mobile'>Harper Daniel is a freelance digital designer and developer who values accessibility and general goodness. <a href={process.env.PUBLIC_URL + '/pages/services.html'}>Learn more about what she offers.</a></p>
       <ProjectList projects={filteredProjects} />
      </div>
    </div>
  );
};

export default App;
