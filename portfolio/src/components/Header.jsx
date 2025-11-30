import React from "react";

function Header() {


  return (
    <header className="header">
      <nav className="nav-bar">

        <h1 className="logo">KS</h1>

        <ul className="nav-links">
          <li><a href="#about">About</a></li>
          <li><a href="#education">Education</a></li>
          <li><a href="#skills">Skills</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>

  
      </nav>
    </header>
  );
}

export default Header;
