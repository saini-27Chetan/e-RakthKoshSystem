import React, { useState } from "react";
import { Link } from "react-router-dom";
import Dropdown from "./Dropdown";

export default function Navbar({ currentPage, onPageChange, navLinks }) {
  const [showSearchDropdown, setShowSearchDropdown] = useState(false);
  const [showRequestDropdown, setShowRequestDropdown] = useState(false);

  const handleLinkClick = (page) => {
    onPageChange(page);
    setShowSearchDropdown(false);
    setShowRequestDropdown(false);
  };

  const toggleSearchDropdown = () => {
    setShowSearchDropdown(!showSearchDropdown);
    setShowRequestDropdown(false);
  };

  const toggleRequestDropdown = () => {
    setShowRequestDropdown(!showRequestDropdown);
    setShowSearchDropdown(false);
  };

  const closeDropdowns = () => {
    setShowSearchDropdown(false);
    setShowRequestDropdown(false);
  };

  const SearchMenuItem = ["Hospitals", "Blood Banks", "Blood Inventories"];
  const RequestMenuItem = ["Want to Donate", "Need Blood"];

  return (
    <nav className="flex bg-gradient-to-br from-red-800 to-red-400 text-white font-bold p-4 justify-between w-full z-10">
      <Link
        to="/"
        className="font-bold text-2xl cursor-pointer"
        onClick={() => handleLinkClick("/")}
      >
        E-RakthKosh System
      </Link>

      <ul className="flex space-x-10 mr-10">
        {navLinks.map((link, index) => (
          <li
            className="mr-2 font-semibold text-lg cursor-pointer hover:underline"
            key={index}
            onMouseLeave={closeDropdowns}
          >
            {link.to === "/search" && (
              <>
                <Dropdown
                  text={link.text}
                  toggleDropdown={toggleSearchDropdown}
                  showDropdown={showSearchDropdown}
                  options={SearchMenuItem}
                />
              </>
            )}

            {link.to === "/request" && (
              <Dropdown
                text={link.text}
                toggleDropdown={toggleRequestDropdown}
                showDropdown={showRequestDropdown}
                options={RequestMenuItem}
              />
            )}

            {link.to !== "/search" && link.to !== "/request" && (
              <Link to={link.to} onClick={() => handleLinkClick(link.to)}>
                {link.text}
              </Link>
            )}
          </li>
        ))}
      </ul>
    </nav>
  );
}
