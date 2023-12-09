import React from 'react';

const PrototypeGalleryItem = ({ project }) => {
  return (
    <div className='horizontal-scroll-gallery'>
      {project.prototypeImages &&
        project.prototypeImages.map((prototype, index) => (
          <div key={index}>
            <img
              src={process.env.PUBLIC_URL + '/images/' + prototype.image}
              alt={`${project.prototypeImageAlt}${index + 1}`}
              className='prototype-gallery-images'
            />
            <p>{`${prototype.title}: ${prototype.description}`}</p>
          </div>
        ))}
    </div>
  );
};

export default PrototypeGalleryItem;
