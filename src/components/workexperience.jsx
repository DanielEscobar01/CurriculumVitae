import React from 'react';
import UdeA from 'components/images/udea.png';

function Workexperience() {
  return (
    <div>
      <h1 className='text-black text-center text-4xl font-bold mt-6'>
        Work Experience
      </h1>
      <div className='flex flex-row'>
        <div>
          <h1 className='text-black sm:text-md md:text-lg lg:text-xl text-xl font-mono ml-14 mt-6'>
            Teacher Assistant
          </h1>
          <h1 className='text-black sm:text-md md:text-lg lg:text-xl text-xl font-mono ml-14'>
            University of Antioquia
          </h1>
          <h1 className='text-black sm:text-md md:text-lg lg:text-xl text-xl font-mono ml-14'>
            June 2019 - Currently
          </h1>
        </div>
        <img className='scale-50 object-center m-auto ' src={UdeA} alt='Logo' />
      </div>
    </div>
  );
}

export { Workexperience };
