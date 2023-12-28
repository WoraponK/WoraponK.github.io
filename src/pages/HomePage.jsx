import React, { useEffect } from 'react'

const HomePage = () => {
  useEffect(() => {
    document.title = 'Home - WoraponK';
  }, []);

  return (
    <section className='flex justify-center items-center'>
      <div className='flex justify-center items-center w-3/4'>
        <div className='text-3xl font-semibold'>
          <h2 className='text-4xl font-bold text-primary mb-2'>Hi! I'm Worapon Klabsri</h2>
          <p className='indent-6'>I'm an undergraduate student majoring in Software Engineering at University of Phayao.</p>
          <p className='indent-6'>Ready to learn new things about software development, and excited to join your team.</p>
        </div>
        <img src="images/woraponk-nobg.png" alt="woraponk-profile" className='w-[480px] grayscale' />
      </div>
    </section>
  )
}

export default HomePage