import React from 'react';
import { NavLink } from 'react-router-dom';

import './Navbar.css';

export default function Navbar() {
  return (
    <nav className='navbar fixed-top navbar-expand-lg navbar-light bg-light'>
      <NavLink id='branding-link' className='navbar-brand' to='/'>
        BRANDING
      </NavLink>

      <button
        className='navbar-toggler'
        type='button'
        data-toggle='collapse'
        data-target='#navbarSupportedContent'
      >
        <span className='navbar-toggler-icon'></span>
      </button>

      <div className='collapse navbar-collapse' id='navbarSupportedContent'>
        <ul className='navbar-nav ml-auto'>
          <li className='nav-item'>
            <NavLink className='nav-link' to='/'>
              Home
            </NavLink>
          </li>
          <li className='nav-item'>
            <NavLink className='nav-link' to='/projects'>
              Projects
            </NavLink>
          </li>
          <li className='nav-item'>
            <NavLink className='nav-link' to='/about'>
              About Me
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
}
