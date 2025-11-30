import React from "react";
import MyPhoto from "../assets/N.jpeg";
import bg from "../assets/hero-bg.jpg";

function Hero() {
  return (
    <section className="hero-container" style={{backgroundImage: `url(${bg})`}}>
      <div className="hero-left">
        <img src={MyPhoto} className="hero-img" alt="Niveka" />
      </div>

      <div className="hero-right">
        <h1 className="hero-title">Niveka Kugathasan</h1>
        <h2 className="hero-subtitle">Front-End Developer | React & JavaScript</h2>
        <p className="hero-text">
          I build modern, intuitive, visually appealing web experiences using
          HTML, CSS, JavaScript & React.
        </p>

        <div className="hero-buttons">
         <button
  onClick={() => {
    document.querySelector("#projects")?.scrollIntoView({ behavior: "smooth" });
  }}
>
  View Projects
</button>

<button
  onClick={() => {
    document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" });
  }}
>
  Contact Me
</button>

        </div>
      </div>
    </section>
  );
}

export default Hero;
