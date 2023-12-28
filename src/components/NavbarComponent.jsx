import React from 'react'
import { Link } from 'react-router-dom'

const NavbarComponent = () => {
  return (
    <nav className='flex justify-between px-24 py-6 max-lg:px-8 max-sm:flex-col max-sm:items-center max-sm:space-y-4'>
        <h1 className='text-2xl font-bold text-primary'><Link to="/">WoraponK</Link></h1>
        <ul className='flex space-x-4 font-semibold'>
            <li className='transition-colors hover:text-primary'><Link to="/">Home</Link></li>
            <li className='transition-colors hover:text-primary'><Link to="/about">About</Link></li>
            <li className='transition-colors hover:text-primary'><Link to="/certificates">Certificates</Link></li>
        </ul>
    </nav>
  )
}

export default NavbarComponent