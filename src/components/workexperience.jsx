import React from 'react';
import UdeA from 'components/images/udea.png';

function Workexperience() {
  return (
    <div>
      <h1 className='titles'>Work Experience</h1>
      <div className='information-image-right mt-6'>
        <div className='information-mobile sm:information-small md:information-medium lg:information-large xl:information-extralarge'>
          <h1>Teacher Assistant</h1>
          <h1>University of Antioquia</h1>
          <h1>June 2019 - Currently</h1>
        </div>
        <div className='center-image'>
          <img className='w-32' src={UdeA} alt='Logo' />
        </div>
      </div>
    </div>
  );
}

export { Workexperience };
