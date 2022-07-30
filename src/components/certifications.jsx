import React from 'react';
import Cisco from 'components/images/cisco.png';
import IBM from 'components/images/ibm.png';
import EF from 'components/images/EF.png';

function Certifications() {
  return (
    <div className='mr-3'>
      <h1 className='titles mr-0'>Certifications</h1>
      <div className='information-image-right'>
        <div className='information-mobile sm:information-small md:information-medium lg:information-large xl:information-extralarge'>
          <h1 className='mt-4'>CCNA Routing and Switching</h1>
          <h1>CISCO</h1>
          <h1>February 2021</h1>
        </div>
        <div className='center-image'>
          <img className='w-28' src={Cisco} alt='Logo' />
        </div>
      </div>
      <div className='information-image-right'>
        <div className='information-mobile '>
          <h1 className='mt-4'>Introduction to Cybersecurity Tools</h1>
          <h1>IBM</h1>
          <h1>August 2021</h1>
        </div>
        <div className='center-image'>
          <img className='w-28 ' src={IBM} alt='Logo' />
        </div>
      </div>
      <div className='information-image-right'>
        <div className='information-mobile '>
          <h1 className='mt-4'>English Certificate C2 - Proficient</h1>
          <h1>EDUCATION FIRST</h1>
          <h1>August 2021</h1>
        </div>
        <div className='center-image'>
          <img className='w-28' src={EF} alt='Logo' />
        </div>
      </div>
      <div className='information-image-right'>
        <div className='information-mobile '>
          <h1 className=' mt-4'>
            Cybersecurity Processes and Operating System
          </h1>
          <h1>CISCO</h1>
          <h1>October 2021</h1>
        </div>
        <div className='center-image'>
          <img className='w-32' src={Cisco} alt='Logo' />
        </div>
      </div>
    </div>
  );
}

export { Certifications };
