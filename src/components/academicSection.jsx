import React from 'react';
import UdeA from 'components/images/udea.png';

function AcademicSection() {
  return (
    <div>
      <h1 className='text-black text-center text-4xl font-bold mt-6'>
        Academic Information
      </h1>
      <div className='flex flex-row  information-image-right'>
        <div>
          <h1 className='information-large mt-4'>Software Engineer</h1>
          <h1 className='information-large'>University of Antioquia</h1>
          <h1 className='information-large'>January 2017 - Currently</h1>
        </div>
        <div className='center-image' style={{ width: '25%' }}>
          <img src={UdeA} alt='Logo' />
        </div>
      </div>
    </div>
  );
}

export { AcademicSection };
