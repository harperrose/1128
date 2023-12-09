import React from 'react';

const FinalGalleryItem = ({ project }) => {
  return (
    <div>
      {project.finalImages &&
        project.finalImages.map((final, index) => (
          <div key={index}>
            <img
              src={process.env.PUBLIC_URL + '/images/' + final.image}
              alt={`${project.finalImageAlt}${index + 1}`}
            />
          </div>
        ))}
    </div>
  );
};

export default FinalGalleryItem;
