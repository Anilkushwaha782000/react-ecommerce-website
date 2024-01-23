// MobileMenu.js
import React from 'react';
import { NavLink } from 'react-router-dom';

function MobileMenu({ isOpen, closeMenu }) {
  return (
    <div className={`fixed top-0 left-0 w-screen h-screen bg-gray-800 z-50 ${isOpen ? 'block' : 'hidden'}`}>
      <div className="flex flex-col h-full justify-center items-center">
        <NavLink to="/" onClick={closeMenu} className="text-white text-2xl mb-4">Home</NavLink>
        <NavLink to="/about" onClick={closeMenu} className="text-white text-2xl mb-4">About</NavLink>
        <NavLink to="/products" onClick={closeMenu} className="text-white text-2xl mb-4">Products</NavLink>
        <NavLink to="/contact" onClick={closeMenu} className="text-white text-2xl mb-4">Contact</NavLink>
        <a
                    href="https://www.linkedin.com/"
                    className="text-black  hover:text-blue rounded-md px-3 py-2 text-2xl font-medium hover:translate-y-[-5px] transition-transform duration-200"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ fontWeight: "600",color:"white" }}
                  >
                    Linkedin
                  </a>
        {/* Add more links as needed */}
      </div>
    </div>
  );
}

export default MobileMenu;
