import React from 'react';
import UdeA from 'components/images/udea.png';

function Projects() {
  return (
    <div>
      <h1 className='titles'>Projects</h1>
      <div className='information-image-right'>
        <div className='information-mobile sm:information-small md:information-medium lg:information-large xl:information-extralarge'>
          <h1 className=' mt-6'>Centralized Management System</h1>
          <h1>University of Antioquia</h1>
          <h1>Currently</h1>
        </div>
        <div className='center-image'>
          <img className='w-32' src={UdeA} alt='Logo' />
        </div>
      </div>
    </div>
  );
}

export { Projects };
