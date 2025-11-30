import React from "react";
import bg from "../assets/hero-bg.jpg";

function Education() {
  const educationData = [
    {
      level: "O/L (Ordinary Level)",
      details: [
        {
          year: "Year Completed: 2018",
          indexNo: "86527274",
          results: "5A, 3B, C",
          notes: "Good academic performance in all subjects"
        }
      ]
    },
    {
      level: "A/L (Advanced Level) - Bio Systems Technology",
      details: [
        { year: "Year Completed: 2022(2021)",
          indexNo: "8436126",
          stream: "District 3, Island 159",
          results: [
            { subject: "ICT", grade: "A" },
            { subject: "Science For Technology", grade: "A" },
            { subject: "BioSystems technology", grade: "B" }
          ]
        }
      ]
    }
  ];

  return (
    <section className="education" id="education" style={{backgroundImage: `url(${bg})`}} >
      <h2>My Education</h2>
      <div className="underline"></div>

      {educationData.map((edu, index) => (
        <div key={index} className="education-level">
          <h3>{edu.level}</h3>
          {edu.details.map((detail, i) => (
            <div key={i} className="education-card">
              {detail.year && <p><strong>{detail.year}</strong></p>}
              {detail.indexNo && <p>Index No: {detail.indexNo}</p>}
              {detail.results && !Array.isArray(detail.results) && <p>Results: {detail.results}</p>}
              {detail.stream && <p>Stream: {detail.stream}</p>}
              {Array.isArray(detail.results) && (
                <ul>
                  {detail.results.map((sub, idx) => (
                    <li key={idx}>{sub.subject}: {sub.grade}</li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </div>
      ))}
    </section>
  );
}

export default Education;
