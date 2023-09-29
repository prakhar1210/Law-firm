import React from "react";
import "./Searchbar.css";

const Searchbar = () => {
  return (
    <div className="search-bar">
      <span className="material-icons">email</span>
      <input type="text" placeholder="Enter your email address" />
      <button className="lets-talk-button">Let's Talk</button>
    </div>
  );
};

export default Searchbar;
