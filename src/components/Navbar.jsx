import React from 'react';

import { Link as ScrollLink } from 'react-scroll';

export default function Navbar() {
  return (
    <nav className='navbar'>
        <div className="navbar-left">
        <ScrollLink to="homeSection" className="navbar-brand ">Chapter<span className='half-logo'>Zero</span></ScrollLink>
        </div>
        <div className="navbar-right">
      <ul >
        <li className="nav-item">
          <ScrollLink to="homeSection" smooth={true} duration={500} className="nav-link active"  >Home</ScrollLink>
        </li>
        <li className="nav-item">
          <ScrollLink to="Projects" smooth={true} duration={500} className="nav-link" >Projects</ScrollLink>
        </li>
        <li className="nav-item">
          <ScrollLink to="Experience" smooth={true} duration={500} className="nav-link" >Experience</ScrollLink>
        </li>
        <li className="nav-item">
          <ScrollLink to="Contact" smooth={true} duration={500} className="nav-link" >Contact</ScrollLink>
        </li>
      </ul>
  </div>


    </nav>
  )
}
