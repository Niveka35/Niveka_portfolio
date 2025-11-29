import React from "react";


function Header() {
  return (
    <header className="header">
      <nav className="nav-bar">
        <h1 className="logo">NK</h1>

        <ul className="nav-links">
          <li><a href="#about">About</a></li>
          <li><a href="#skills">Skills</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>

        <button className="theme-btn">🌙</button>
      </nav>
    </header>
  );
}

export default Header;
