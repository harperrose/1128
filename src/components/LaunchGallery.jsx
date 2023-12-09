import React from 'react';

const LaunchGalleryItem = ({ project }) => {
  return (
    <div>
      {project.launchImages &&
        project.launchImages.map((launch, index) => (
          <div key={index}>
            <img
              src={process.env.PUBLIC_URL + '/images/' + launch.image}
              alt={`${project.launchImageAlt}${index + 1}`}
            />
          </div>
        ))}
    </div>
  );
};

export default LaunchGalleryItem;
