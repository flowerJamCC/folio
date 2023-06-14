import React from 'react';
import './navbar.css';

const Navbar = () => {
  return (
    <nav className='top-nav' aria-description='navigational-aid'>
        <div className="nav-left">
            <span className='nav-title'>Portfolio</span>
        </div>
        <div className="nav-right">
            {/* <a href='#top'>Top</a> */}
            <a href='#about'>About</a>
            <a href='#projects'>Projects</a>
            <a href='#contact'>Contact</a>
        </div>
    </nav>
  )
}

export default Navbar;