import React from 'react';
import Cisco from 'components/images/cisco.png';
import IBM from 'components/images/ibm.png';
import EF from 'components/images/EF.png';

function Certifications() {
  return (
    <div className='mr-3'>
      <h1 className='text-black text-center text-4xl font-bold mt-4 mr-0'>
        Certifications
      </h1>
      <div className='flex justify-between '>
        <div>
          <h1 className='information-large mt-4'>CCNA Routing and Switching</h1>
          <h1 className='information-large'>CISCO</h1>
          <h1 className='information-large'>February 2021</h1>
        </div>
        <img className='w-28 ' src={Cisco} alt='Logo' />
      </div>
      <div className='flex justify-between'>
        <div>
          <h1 className='information-large mt-4'>
            Introduction to Cybersecurity Tools
          </h1>
          <h1 className='information-large'>IBM</h1>
          <h1 className='information-large'>August 2021</h1>
        </div>
        <img className='w-28 ' src={IBM} alt='Logo' />
      </div>
      <div className='flex  justify-between '>
        <div>
          <h1 className='information-large mt-4'>
            English Certificate C2 - Proficient
          </h1>
          <h1 className='information-large'>EDUCATION FIRST</h1>
          <h1 className='information-large'>August 2021</h1>
        </div>
        <img className='w-28' src={EF} alt='Logo' />
      </div>
      <div className='flex  justify-between'>
        <div>
          <h1 className='information-large mt-4'>
            Cybersecurity Processes and Operating System
          </h1>
          <h1 className='information-large'>CISCO</h1>
          <h1 className='information-large'>October 2021</h1>
        </div>
        <img className='w-28' src={IBM} alt='Logo' />
      </div>
    </div>
  );
}

export { Certifications };
