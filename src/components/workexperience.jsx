import React from 'react';
import UdeA from 'components/images/udea.png';

function Workexperience() {
  return (
    <div>
      <h1 className='text-black text-center text-4xl font-bold mt-6'>
        Work Experience
      </h1>
      <div className='information-image-right mt-6'>
        <div>
          <h1 className='information-large'>Teacher Assistant</h1>
          <h1 className='information-large'>University of Antioquia</h1>
          <h1 className='information-large'>June 2019 - Currently</h1>
        </div>
        <div className='center-image'>
          <img className='w-32' src={UdeA} alt='Logo' />
        </div>
      </div>
    </div>
  );
}

export { Workexperience };
