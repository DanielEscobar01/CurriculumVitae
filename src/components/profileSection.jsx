import React from 'react';
import Picture from 'components/images/danielescobar.jpg';
import GitHub from 'components/images/github.png';
import LinkedIn from 'components/images/linkedin.png';

function ProfileSection() {
  return (
    <div className='xl:h-screen'>
      <div className='mt-2 mb-2'>
        <img
          className='object-contain rounded-full mx-auto w-2/3 '
          src={Picture}
          alt='Logo'
        />
        <h1 className='text-white text-center text-4xl  font-bold'>
          Daniel Escobar
        </h1>
        <h2 className='text-white text-center text-2xl  font-bold'>
          Software Engineer
        </h2>
        <h2 className='text-white text-center text-md xl:text-xl font-bold'>
          daniel.escobar5@udea.edu.co
        </h2>
        <h2 className='text-white text-center text-md md:text-base xl:text-xl  font-mono mt-6 mx-1'>
          Software engineer with three years of experience as a teacher
          assistant in the area of algorithms. I am a person with easy
          adaptability to change, always willing to train and learn new topics
          and technologies in order to perform much better in my work.
        </h2>
      </div>
      <div className='flex mt-6 justify-center gap-2'>
        <img className='w-1/12 rounded-lg ml-2' src={GitHub} alt='Logo' />
        <a
          href='https://github.com/DanielEscobar01'
          className='text-white text-center text-xl xl:text-2xl font-mono'
        >
          DanielEscobar01
        </a>
      </div>
      <div className='flex justify-center mt-6 gap-2'>
        <img
          className='w-1/12 rounded-lg mb-2 ml-2'
          src={LinkedIn}
          alt='Logo'
        />
        <a
          href='https://www.linkedin.com/in/daniel-escobar-b9a129191/'
          className='text-white mb-2 text-center text-xl xl:text-2xl font-mono'
        >
          Daniel Escobar
        </a>
      </div>
    </div>
  );
}

export { ProfileSection };
