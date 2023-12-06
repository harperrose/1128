const Case = ({ project, onCaseStudyClick }) => {
  const handleCaseStudyClick = () => {
    if (project.casestudy) {
      onCaseStudyClick();
    }
  };

  return (
    <div>
      {project.casestudy ? (
        <span className="case-link" onClick={handleCaseStudyClick}>
          Case Study
        </span>
      ) : (
        <a href={project.link} className="site-link">
          Live Site
        </a>
      )}
    </div>
  );
};

export default Case;
