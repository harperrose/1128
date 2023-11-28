import React, { useState } from "react";
import { project, buttons } from './data.js';
import './App.css';
import { getProject, filterProject } from "./services";

function List({ project }) {
  return (
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
  );
}

function App() {
  const [filteredProject, setFilteredProject] = useState([]);

  function handleProject(e) {
    let typeProject = e.target.value;
    typeProject !== "all"
      ? setFilteredProject(filterProject(typeProject))
      : setFilteredProject(getProject());
  }

  return (
    <>
      <div className="button-wrap">
        {buttons &&
          buttons.map((type, index) => (
            <button key={index} value={type.value} onClick={handleProject}>
              {type.name}
            </button>
          ))}
      </div>
      <div className="project-wrap">
        {filteredProject &&
          filteredProject.map((type) => (
            <ul key={type.id}>
              <List project={type} />
            </ul>
          ))}
      </div>
    </>
  );
}

export default App;
