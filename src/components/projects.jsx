import React from 'react';
import UdeA from 'components/images/udea.png';

function Projects() {
  return (
    <div>
      <h1 className='text-black text-center text-4xl font-bold mt-6'>
        Projects
      </h1>
      <div className='information-image-right'>
        <div>
          <h1 className='information-large mt-6'>
            Centralized Management System
          </h1>
          <h1 className='information-large'>University of Antioquia</h1>
          <h1 className='information-large'>Currently</h1>
        </div>
        <div className='center-image'>
          <img className='w-32' src={UdeA} alt='Logo' />
        </div>
      </div>
    </div>
  );
}

export { Projects };
