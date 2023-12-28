import React, { useEffect } from 'react'

import WorkComponent from '../components/WorkComponent';

const HomePage = () => {
  useEffect(() => {
    document.title = 'Home - WoraponK';
  }, []);

  return (
    <>
      <section className='grid place-items-center max-sm:mt-8'>
        <div className='flex justify-center items-center w-3/4 max-xl:w-full max-xl:px-8 max-lg:px-4 max-sm:flex-col max-sm:space-y-4'>
          <div className='text-3xl font-semibold max-lg:text-2xl max-sm:text-center max-sm:text-xl'>
            <h2 className='text-4xl font-bold text-primary mb-2 max-lg:text-3xl max-sm:text-2xl'>Hi! I'm Worapon Klabsri</h2>
            <p className='indent-6 max-sm:indent-0'>I'm an undergraduate student majoring in Software Engineering at University of Phayao.</p>
            <p className='indent-6 max-sm:indent-0'>Ready to learn new things about software development, and excited to join your team.</p>
          </div>
          <img src="images/woraponk-nobg.png" alt="woraponk-profile" className='w-[480px] grayscale max-lg:w-[360px]' />
        </div>
      </section>
      <WorkComponent />
    </>
  )
}

export default HomePage