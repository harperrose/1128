import React, { useState } from 'react';
import { projectData } from "./data.js";
import './styles/App.css';
import './styles/Overlay.css';
import './styles/AnimatedList.css';
import NavPanel from './components/NavPanel';
import AnimatedList from './components/AnimatedList.js';
import Introduction from './components/Introduction';
import { ProjectList } from './components/ProjectList';
import Contact from './components/contact.jsx';

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
        <ProjectList projects={filteredProjects} />
        <AnimatedList data={filteredProjects} type="projects" />

        <Contact />
      </div>
    </div>
  );
};

export default App;
