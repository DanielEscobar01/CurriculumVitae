import React from 'react';

function Languages() {
  return (
    <div>
      <h1 className='text-black text-center text-4xl font-bold mt-6'>
        Languages
      </h1>
      <div className='flex flex-col'>
        <div>
          <h1 className='text-black  sm:text-md md:text-lg lg:text-xl text-xl font-mono ml-14 mt-6'>
            Spanish
          </h1>
          <h1 className='text-black  sm:text-md md:text-lg lg:text-xl text-xl font-mono ml-14'>
            Native Language
          </h1>
        </div>
        <div>
          <h1 className='text-black sm:text-md md:text-lg lg:text-xl text-xl font-mono ml-14 mt-6'>
            English
          </h1>
          <h1 className='text-black sm:text-md md:text-lg lg:text-xl text-xl font-mono ml-14'>
            Professional Proficiency
          </h1>
        </div>
      </div>
    </div>
  );
}

export { Languages };
