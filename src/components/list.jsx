import { CaseLink } from './case.jsx';

export const ProjectList = ({ projects }) => {
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
                <p className="project-description">{project.description}</p>
                <CaseLink/>
            </div>
          </>
        </li>
      ))}
    </ul>
  );
};