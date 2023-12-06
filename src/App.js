import React, { useState } from 'react';
import { projectData } from "./data.js";
import './App.css';
import AnimatedList from "./components/AnimatedList";
import NavPanel from './components/NavPanel';
import Introduction from './components/Introduction';
import { ProjectList } from './components/ProjectList';

const App = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');

  const filteredProjects =
    selectedCategory === 'All'
      ? projectData
      : projectData.filter((project) => project.category === selectedCategory.toLowerCase());

  return (
    <div>
      <NavPanel setSelectedCategory={setSelectedCategory} selectedCategory={selectedCategory} />
      <Introduction />
      <div className='project-wrap'>
        <p className='bio show-mobile'>Harper Daniel is a freelance digital designer and developer who values accessibility and general goodness. <a href={process.env.PUBLIC_URL + '/pages/services.html'}>Learn more about what she offers.</a></p>
        <AnimatedList projects={projectData} />
        <ProjectList projects={filteredProjects} />
      </div>
    </div>
  );
};

export default App;
