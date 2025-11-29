
import React from "react";
import HeroBg from "../assets/hero-bg.jpg"; 
function Hero() {
  return (
    <section 
      className="hero" 
      style={{ 
        backgroundImage: `url(${HeroBg})`, 
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat"
      }}
    >
      <h1>Niveka Kugathasan</h1>
      <h2>Front-End Developer | JavaScript & React Enthusiast</h2>
      <p>
        I am a passionate front-end developer building modern, intuitive,
        visually appealing websites with HTML, CSS, JavaScript & React.
      </p>
      <div className="cta">
        <button onClick={() => document.getElementById("projects").scrollIntoView({behavior: 'smooth'})}>View Projects</button>
        <button onClick={() => document.getElementById("contact").scrollIntoView({behavior: 'smooth'})}>Contact Me</button>
      </div>
    </section>
  );
}

export default Hero;
