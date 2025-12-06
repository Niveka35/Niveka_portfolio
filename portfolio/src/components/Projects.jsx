import React, { useState } from "react";
import imggen from "../assets/projects/img-gen.png";
import imggenv from "../assets/projects/img-gen.mp4";
import music from "../assets/projects/music.png";
import musicv from "../assets/projects/music.mp4";
import bmi from "../assets/projects/bmi.png";
import bmiv from "../assets/projects/bmi.mp4";
import tic from "../assets/projects/tic.png";
import ticv from "../assets/projects/tic.mp4";
import weather from "../assets/projects/weather.png";
import weatherv from "../assets/projects/weather.mp4";
import bg from "../assets/hero-bg.jpg";
import note from "../assets/projects/note.png";
import notev from "../assets/projects/note.mp4";

const projects = [
  { 
    title: "Image Generator", 
    img:imggen,
    video: imggenv,
    github: "https://github.com/Niveka35/Image-generator", 
    desc: "Generates random images using API.",
    category: "HTML+CSS+React+JS"
  },
  { 
    title: "Music Player", 
    img: music,
    video:musicv, 
    github: "https://github.com/Niveka35/Music-player", 
    desc: "Custom music player with animations.",
    category: "HTML+CSS+JS"
  },
  { 
    title: "BMI Calculator", 
    img: bmi, 
    video: bmiv, 
    github: "https://github.com/Niveka35/BMI-Calculator", 
    desc: "Responsive BMI calculator with React.",
    category: "HTML+CSS+React+JS"
  },
  { 
    title: "Tic Tac Toe", 
    img: tic, 
    video: ticv, 
    github: "https://github.com/Niveka35/Tic-Tac-Toe", 
    desc: "Classic Tic-Tac-Toe game with React.",
    category: "HTML+CSS+React+JS"
  },
  { 
    title: "Weather",
    img: weather, 
    video: weatherv, 
    desc: "API based weather app with dynamic UI.",
    category: "HTML+CSS+JS"
  },
  { 
    title: "Note App",
    img: note, 
    video: notev, 
    desc: "Add important notes and delete likewise note manipulation.",
    category: "HTML+CSS+JS"
  },
];

// import images/videos as before

function Projects() {
  const [category, setCategory] = useState("All");
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const categories = ["All", "HTML+CSS+JS", "HTML+CSS+React+JS", "UI/UX"];

  // Filter projects based on category
  const filteredProjects = category === "All" 
    ? projects 
    : projects.filter(p => p.category === category);

  return (
    <section className="projects" style={{backgroundImage: `url(${bg})`}} id="projects">
      <h2>My Projects</h2>
      <div className="underline"></div>

      {/* Category Buttons */}
      <div className="project-categories">
        {categories.map(cat => (
          <button 
            key={cat} 
            onClick={() => setCategory(cat)} 
            className={category === cat ? "active" : ""}
          >
            {cat}
          </button>
        ))}
      </div>

      <div className="projects-grid">
        {filteredProjects.map((p, index) => (
          <div
            className="project-card"
            key={p.title}
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(null)}
          >
            <img src={p.img} alt={p.title} style={{ display: hoveredIndex === index ? "none" : "block" }} />
            <video
              src={p.video}
              autoPlay
              loop
              muted
              style={{ display: hoveredIndex === index ? "block" : "none" }}
            />
            <div className="project-card-content">
              <h3>{p.title}</h3>
              <p>{p.desc}</p>
              <a href={p.github} target="_blank">GitHub</a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;
