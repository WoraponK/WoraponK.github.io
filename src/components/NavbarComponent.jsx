import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

const NavbarComponent = () => {
  const [sticky, setSticky] = useState(false);
  
  const handleScroll = () => {
    if(window.scrollY >= 20) {
      setSticky(true);
    } else {
      setSticky(false);
    }
  }

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return window.addEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={
      sticky ? 
      'bg-base-100 shadow-lg z-50 fixed w-full flex justify-between px-24 py-2 max-lg:px-8 max-sm:flex-col max-sm:items-center max-sm:space-y-4 max-sm:static max-sm:shadow-none max-sm:py-6' 
      : 
      'flex justify-between px-24 py-6 max-lg:px-8 max-sm:flex-col max-sm:items-center max-sm:space-y-4'
      }>
        <h1 className='text-2xl font-bold text-primary'><Link to="/">WoraponK</Link></h1>
        <ul className='flex space-x-4 font-semibold translate-y-1'>
            <li className='transition-colors hover:text-primary'><Link to="/">Home</Link></li>
            <li className='transition-colors hover:text-primary'><Link to="/about">About</Link></li>
            <li className='transition-colors hover:text-primary'><Link to="/certificates">Certificates</Link></li>
        </ul>
    </nav>
  )
}

export default NavbarComponent