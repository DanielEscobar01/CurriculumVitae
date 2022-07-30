import React from 'react';

function Languages() {
  return (
    <div>
      <h1 className='titles'>Languages</h1>
      <div className='flex flex-col ml-2'>
        <div className='information-mobile sm:information-small md:information-medium lg:information-large xl:information-extralarge'>
          <h1 className='mt-2'>Spanish</h1>
          <h1>Native Language</h1>
        </div>
        <div className='information-mobile sm:information-small md:information-medium lg:information-large xl:information-extralarge'>
          <h1 className='mt-2'>English</h1>
          <h1>Professional Proficiency</h1>
        </div>
      </div>
    </div>
  );
}

export { Languages };
