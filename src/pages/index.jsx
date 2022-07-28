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
      <aside className='bg-blue-800  border-black flex w-4/12 flex-col'>
        <ProfileSection />
      </aside>
      <div className='flex  bg-gray-400'>
        <div className='flex-1   border-black bg-gray-400'>
          <AcademicSection />
          <Certifications />
        </div>
        <div className='flex-1 w-full '>
          <Workexperience />
          <Languages />
          <Projects />
        </div>
      </div>
    </div>
  );
}

export { IndexPage };
