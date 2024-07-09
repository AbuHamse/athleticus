// src/components/DropdownMenu.jsx
import React from 'react';
import { FaTimes } from 'react-icons/fa';
import { NavLink } from 'react-router-dom';

const DropdownMenu = ({ menuOpen, toggleMenu }) => {
  return (
    <div
      className={`fixed top-0 right-0 h-full bg-[#1C1C1C] text-white flex flex-col gap-4 px-4 transform transition-transform duration-300 ease-in-out ${
        menuOpen ? 'translate-x-0' : 'translate-x-full'
      }`}
      style={{ width: '250px' }}
    >
      <button className="self-end p-4 text-white" onClick={toggleMenu}>
        <FaTimes />
      </button>
      <NavLink className="text-sm font-medium hover:underline underline-offset-4 hover:text-red-400" to="/" onClick={toggleMenu}>Home</NavLink>
      <NavLink className="text-sm font-medium hover:underline underline-offset-4 hover:text-red-400" to="/about" onClick={toggleMenu}>About</NavLink>
      <NavLink className="text-sm font-medium hover:underline underline-offset-4 hover:text-red-400" to="/programs" onClick={toggleMenu}>Programs/Membership</NavLink>
      <NavLink className="text-sm font-medium hover:underline underline-offset-4 hover:text-red-400" to="/contact" onClick={toggleMenu}>Contact</NavLink>
    </div>
  );
};

export default DropdownMenu;
