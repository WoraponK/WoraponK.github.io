import React from 'react'
import { Link } from 'react-router-dom'

const NavbarComponent = () => {
  return (
    <nav>
        <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/certificates">Certificates</Link></li>
        </ul>
    </nav>
  )
}

export default NavbarComponent