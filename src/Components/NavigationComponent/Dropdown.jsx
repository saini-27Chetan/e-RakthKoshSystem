import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Dropdown = ({ text, toggleDropdown, options, showDropdown }) => {
  const [mouseInside, setMouseInside] = useState(false);
  const navigate = useNavigate();

  const handleOptionClick = (option) => {
    toggleDropdown();
    navigate(`/${text.toLowerCase()}/${option.toLowerCase()}`);
  };

  return (
    <div
      className="relative"
      onClick={toggleDropdown}
      onMouseEnter={() => setMouseInside(true)}
      onMouseLeave={() => setMouseInside(false)}
    >
      {text}
      {showDropdown && mouseInside && (
        <div
          className="absolute bg-white rounded shadow-md mt-0 p-2 z-50 uppercase"
          style={{
            maxHeight: "200px",
            fontSize: "13px",
            color: "#666",
            minWidth: "150px",
          }}
        >
          <ul>
            {options.map((option, index) => (
              <li key={index}>
                <span onClick={() => handleOptionClick(option)}>{option}</span>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default Dropdown;
