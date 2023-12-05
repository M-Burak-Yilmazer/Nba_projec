import React, { useState } from "react";
import image from "../../assets/nba-logo.png";
import "./header.scss";

const Header = ({ onFilterChange }) => {
  const [deger, setInput] = useState("");

  const handleChange = (e) => {
    const value = e.target.value;
    setInput(value);
    onFilterChange(value); // Call the callback with the input value
  };

  return (
    <div className="header">
      <img src={image} alt="" />
      <h1>NBA LEGENDS</h1>
      <input
        onChange={handleChange}
        type="text"
        placeholder="search player..."
      />
    </div>
  );
};

export default Header;
