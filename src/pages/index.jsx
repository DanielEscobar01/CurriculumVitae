import React from 'react';
import { AcademicSection } from 'components/academicSection';
import { Certifications } from 'components/certifications';
import { Languages } from 'components/languages';
import { ProfileSection } from 'components/profileSection';
import { Projects } from 'components/projects';
import { Workexperience } from 'components/workexperience';

function IndexPage() {
  return (
    <div className='flex h-min-screen  '>
      <div className='bg-blue-800  border-black flex sm:w-1/2 md:w-1/2 lg:w-1/2 xl:w-4/12 flex-col'>
        <ProfileSection />
      </div>
      <div className='flex  bg-gray-400 '>
        <div className='flex-1   border-black bg-gray-400 sm:w-1/2 md:1/2 lg:w-1/2 '>
          <AcademicSection />
          <Certifications />
        </div>
        <div className='flex-1 w-full sm:hidden md:hidden'>
          <Workexperience />
          <Languages />
          <Projects />
        </div>
      </div>
    </div>
  );
}

export { IndexPage };
