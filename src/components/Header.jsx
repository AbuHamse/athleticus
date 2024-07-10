// src/components/Header.jsx
import React, { useState } from 'react';
import logo from '../images/new-logo.png';
import { FaBars } from 'react-icons/fa';
import DropdownMenu from './DropdownMenu';
import { NavLink } from 'react-router-dom';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [logoText, setLogoText] = useState('アスレチックス');

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const handleMouseOver = () => {
    setLogoText('ATHLETICUS');
  };

  const handleMouseOut = () => {
    setLogoText('アスレチックス');
  };

  return (
    <>
      <header className="flex px-6 items-center bg-black-400 lg:px-6">
        <div className="logo-container flex items-center px-6 space-x-5">
          <NavLink to="/"><img className='w-12 h-12' src={logo} alt="LOGO" /></NavLink>
          <p
            className="logo-font text-xl font-semibold text-white"
            onMouseOver={handleMouseOver}
            onMouseOut={handleMouseOut}
          >
            {logoText}
          </p>
        </div>

        <nav className="ml-auto hidden gap-6 text-primary-500 md:flex sm:gap-6">
          <NavLink className="text-sm font-semibold underline-offset-6 text-white hover:underline hover:text-red-400" to="/">Home</NavLink>
          <NavLink className="text-sm font-semibold underline-offset-6 text-white hover:underline hover:text-red-400" to="/about">About</NavLink>
          <NavLink className="text-sm font-semibold underline-offset-6 text-white hover:underline hover:text-red-400" to="/programs">Programs/Memberships</NavLink>
          <NavLink className="text-sm font-semibold underline-offset-6 text-white hover:underline hover:text-red-400" to="/contact">Contact</NavLink>
        </nav>

        <button
          id="menu-btn"
          className="md:hidden ml-auto flex items-center text-white"
          onClick={toggleMenu}
        >
          <FaBars />
        </button>
      </header>

      <DropdownMenu menuOpen={menuOpen} toggleMenu={toggleMenu} />
    </>
  );
};

export default Header;
