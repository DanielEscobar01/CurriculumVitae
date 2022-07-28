import React from 'react';

function Languages() {
  return (
    <div>
      <h1 className='text-black text-center text-4xl font-bold mt-6'>
        Languages
      </h1>
      <div className='flex flex-col'>
        <div>
          <h1 className='information-large mt-6'>Spanish</h1>
          <h1 className='information-large'>Native Language</h1>
        </div>
        <div>
          <h1 className='information-large mt-6'>English</h1>
          <h1 className='information-large'>Professional Proficiency</h1>
        </div>
      </div>
    </div>
  );
}

export { Languages };
