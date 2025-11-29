import React from "react";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";


function Footer() {
  return (
    <footer className="footer">
      <div className="icon-row">
        <a className="icon-circle"><FaGithub size={26} /></a>
        <a className="icon-circle"><FaLinkedin size={26} /></a>
        <a className="icon-circle"><FaEnvelope size={26} /></a>
      </div>

      <p className="credit">
        Designed & Built by 
        <span className="name-gradient"> Niveka Kugathasan</span>
      </p>

      <p className="copy">© 2025 All rights reserved.</p>
    </footer>
  );
}

export default Footer;
