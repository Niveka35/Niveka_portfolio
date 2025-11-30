import React from "react";
import bg from "../assets/hero-bg.jpg";
function About() {
  return (
    <section id="about" className="about-section" style={{backgroundImage: `url(${bg})`}}>
      <h2 className="about-title">About Me</h2>

      <div className="underline"></div>

      <div className="about-card">
        <p>
          I am a passionate front-end developer who enjoys building modern,
          intuitive, and visually appealing websites. With a foundation in HTML,
          CSS, JavaScript, and React, I focus on creating clean interfaces and
          smooth user experiences.
        </p>
        <p>
          I enjoy exploring UI/UX concepts, improving designs, and writing
          maintainable code. As I grow in this field, I'm committed to learning
          continuously and working on real-world projects that inspire me.
        </p>
      </div>
    </section>
  );
}

export default About;
