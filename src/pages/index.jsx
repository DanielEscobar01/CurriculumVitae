import React from 'react';
import { AcademicSection } from 'components/academicSection';
import { Certifications } from 'components/certifications';
import { Languages } from 'components/languages';
import { ProfileSection } from 'components/profileSection';
import { Projects } from 'components/projects';
import { Workexperience } from 'components/workexperience';

function IndexPage() {
  return (
    <div className='flex flex-col xl:flex-row h-min-screen p-2 bg-black '>
      <div className='bg-blue-800  xl:border-black flex  xl:w-4/12 flex-col'>
        <ProfileSection />
      </div>
      <div className='flex  bg-gray-400  xl:w-2/3'>
        <div className='flex-1   xl:border-black  bg-gray-400  '>
          <AcademicSection />
          <Certifications />
          <div className='flex-1  xl:hidden '>
            <Workexperience />
            <Languages />
            <Projects />
          </div>
        </div>
        <div className='hidden flex-1 w-full border-l-8 border-l-black xl:block'>
          <Workexperience />
          <Languages />
          <Projects />
        </div>
      </div>
    </div>
  );
}

export { IndexPage };
