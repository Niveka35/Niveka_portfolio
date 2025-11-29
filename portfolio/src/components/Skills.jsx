import React from "react";

function Skills() {
  const skills = ["HTML", "CSS", "JavaScript", "React", "Git & GitHub", "UI/UX Basics"];

  return (
    <section className="skills section-bg" id="skills">
      <h2>My Skills</h2>
      <div className="skill-badges">
        {skills.map(skill => (
          <div className="skill-badge" key={skill}>{skill}</div>
        ))}
      </div>
    </section>
  );
}

export default Skills;
