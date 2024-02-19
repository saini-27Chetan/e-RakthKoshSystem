import React from 'react';
import {Link} from 'react-router-dom';

export default function Navbar({currentPage, onPageChange, navLinks}){
  const handleLinkClick = (page) => {
    onPageChange(page);
  };

    return(
        <nav className='flex bg-gradient-to-br from-red-800 to-red-400 text-white font-bold p-4 justify-between w-full z-10'>
        <Link to="/" className='font-bold text-2xl cursor-pointer' onClick={() => handleLinkClick('/')}>
          E-RakthKosh System
        </Link>

        <ul className='flex space-x-10 mr-10'>
          {navLinks.map((link, index) => (
            <li className='mr-2 font-semibold text-lg cursor-pointer hover:underline' 
              key={index}>
              <Link
                to={link.to} 
                className={currentPage === link.to ? 'no-underline text-lg' : ''}
                onClick={() => handleLinkClick(link.to)}
              >
                {link.text}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    );
}