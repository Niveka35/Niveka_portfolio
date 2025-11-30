import React from "react";
import bg from "../assets/hero-bg.jpg";

function Skills() {
  // Hard skills with percentage
  const hardSkills = [
    { name: "HTML", level: 95 },
    { name: "CSS", level: 85 },
    { name: "JavaScript", level: 85 },
    { name: "React", level: 75 },
    { name: "Git & GitHub", level: 70 },
    { name: "UI/UX Basics", level: 60 },
    { name: "Power BI", level: 65 }
  ];

  // Soft skills (just listed, no percentage)
  const softSkills = ["Communication – Clearly expressing ideas and actively listening to others.", "Teamwork – Collaborating effectively with colleagues to achieve common goals.", "Problem Solving – Identifying challenges and finding practical solutions.", "Creativity – Thinking outside the box to generate innovative ideas.", "Time Management – Organizing and prioritizing tasks to meet deadlines efficiently."];

  return (
    <section className="skills" style={{backgroundImage: `url(${bg})`}} id="skills">
      <h2>My Skills</h2>
      <div className="underline"></div>
      <div className="hard-skills">
        {hardSkills.map(skill => (
          <div key={skill.name} className="skill-bar">
            <span className="skill-name">{skill.name}</span>
            <div className="progress-bar">
              <div 
                className="progress" 
                style={{ width: `${skill.level}%` }}
              ></div>
            </div>
          </div>
        ))}
      </div>
      <div className="soft-skills-grid">
        {softSkills.map(skill => (
          <div className="soft-skill-badge" key={skill}>{skill}</div>
        ))}
      </div>
    </section>
  );
}

export default Skills;
