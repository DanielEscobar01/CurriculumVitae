import React from 'react';
import { AcademicSection } from 'components/academicSection';
import { Certifications } from 'components/certifications';
import { Languages } from 'components/languages';
import { ProfileSection } from 'components/profileSection';
import { Projects } from 'components/projects';
import { Workexperience } from 'components/workexperience';

function IndexPage() {
  return (
    <main className='flex h-screen'>
      <aside className='bg-blue-900 hidden lg:flex w-4/12 flex-col'>
        <ProfileSection />
      </aside>
      <div className='w-full h-screen flex  bg-gray-400'>
        <div className='flex-1 w-full h-full border-r-4 border-r-black bg-gray-400'>
          <AcademicSection />
          <Certifications />
        </div>
        <div className='flex-1 w-full h-full'>
          <Workexperience />
          <Languages />
          <Projects />
        </div>
      </div>
    </main>
  );
}

export { IndexPage };
