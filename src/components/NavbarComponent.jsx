import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

const NavbarComponent = () => {
  const [stickyNav, setStickyNav] = useState(false);
  const [stickyTop, setStickyTop] = useState(false);

  const handleScrollNav = () => {
    if(window.scrollY >= 50) {
      setStickyNav(true);
    } else {
      setStickyNav(false);
    }
  }

  const handleScrollToTop = () => {
    if(window.scrollY > 300) {
      setStickyTop(true);
    } else {
      setStickyTop(false);
    }
  }

  const scrollToTop = () => {
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
  }

  useEffect(() => {
    window.addEventListener('scroll', handleScrollNav);
    window.addEventListener('scroll', handleScrollToTop);

    return () => {
      window.addEventListener('scroll', handleScrollNav);
      window.addEventListener('scroll', handleScrollToTop);
    }
  }, []);

  return (
    <>
      <nav className={
        stickyNav ? 
        'bg-base-100 shadow-lg z-50 fixed w-full flex justify-between px-24 py-2 max-lg:px-8 max-sm:flex-col max-sm:items-center max-sm:space-y-4 max-sm:static max-sm:shadow-none max-sm:py-6' 
        : 'flex justify-between px-24 py-6 max-lg:px-8 max-sm:flex-col max-sm:items-center max-sm:space-y-4'
        }>
          <h1 className='text-2xl font-bold text-primary'><Link to="/">WoraponK</Link></h1>
          <ul className='flex space-x-4 font-semibold translate-y-1'>
              <li className='transition-colors hover:text-primary'><Link to="/">Home</Link></li>
              <li className='transition-colors hover:text-primary'><Link to="/about">About</Link></li>
              <li className='transition-colors hover:text-primary'><Link to="/portfolio">Portfolio</Link></li>
              <li className='transition-colors hover:text-primary'><Link to="/certificates">Certificates</Link></li>
          </ul>
      </nav>
      <button 
        onClick={scrollToTop} 
        title='Scroll to Top' 
        className={
          stickyTop ? 
          'animate-bounce w-[60px] aspect-square rounded-full fixed z-50 bg-base-100 drop-shadow-lg bottom-6 right-6 hover:animate-none max-sm:animate-none grid place-items-center' 
          : 'hidden'
          }>
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" class="bi bi-caret-up-fill" viewBox="0 0 16 16">
          <path d="m7.247 4.86-4.796 5.481c-.566.647-.106 1.659.753 1.659h9.592a1 1 0 0 0 .753-1.659l-4.796-5.48a1 1 0 0 0-1.506 0z"/>
        </svg>
      </button>
    </>
  )
}

export default NavbarComponent