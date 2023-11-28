export function List({ project }) {
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
  