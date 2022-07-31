import React from 'react';
import UdeA from 'components/images/udea.png';

function AcademicSection() {
  return (
    <div className='mt-2'>
      <h1 className='titles'>Academic Information</h1>
      <div className='flex flex-row  information-image-right'>
        <div className='information-mobile xl:information-extralarge'>
          <h1 className='mt-4'>Software Engineer</h1>
          <h1>University of Antioquia</h1>
          <h1>January 2017 - Currently</h1>
        </div>
        <div className='center-image' style={{ width: '30%' }}>
          <img src={UdeA} alt='Logo' />
        </div>
      </div>
    </div>
  );
}

export { AcademicSection };
