import React from 'react';
import Picture from 'components/images/danielescobar.jpg';
import GitHub from 'components/images/github.png';
import LinkedIn from 'components/images/linkedin.png';

function ProfileSection() {
  return (
    <>
      <div>
        <img
          className='object-contain rounded-full mx-auto w-2/3 '
          src={Picture}
          alt='Logo'
        />
        <h1 className='text-white text-center text-5xl font-bold'>
          Daniel Escobar
        </h1>
        <h2 className='text-white text-center text-3xl font-bold'>
          Software Engineer
        </h2>
        <h3 className='text-white text-center text-xl font-bold'>
          daniel.escobar5@udea.edu.co
        </h3>
        <h2 className='text-white text-center text-2xl font-mono mt-6 mx-1'>
          Software engineer with three years of experience as a monitor in the
          area of algorithms. I am a person with easy adaptability to change,
          always willing to train and learn new topics and technologies in order
          to perform much better in my work.
        </h2>
      </div>
      <div className='flex mt-6'>
        <img className='object-left  ml-20 w-1/12' src={GitHub} alt='Logo' />
        <h1 className='text-white text-center text-3xl font-mono ml-6 mt-6'>
          DanielEscobar01
        </h1>
      </div>
      <div className='flex mt-6'>
        <img className='object-left  ml-20 w-1/12' src={LinkedIn} alt='Logo' />
        <h1 className='text-white text-center text-3xl font-mono ml-6 mt-6'>
          Daniel Escobar
        </h1>
      </div>
    </>
  );
}

export { ProfileSection };
