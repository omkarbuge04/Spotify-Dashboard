import React from "react";
import "./Navbar.css";

function Navbar() {
  return (
    <nav className="navbar">

      <div className="logo">
        🎵 Spotify Dashboard
      </div>

      <div className="nav-links">
        <a href="#dashboard">Dashboard</a>
        <a href="#about">About</a>
        <a href="#contact">Contact</a>
      </div>
      <div className="menu">
        ⋮
      </div>
    </nav>
  );
}

export default Navbar;