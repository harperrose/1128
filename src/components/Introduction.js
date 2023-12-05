import React from 'react';

const Introduction = () => {
  return (
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
  );
};

export default Introduction;
