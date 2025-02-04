import React, { useState } from "react";

function Skills() {
  const [isFlipped, setIsFlipped] = useState(null);
  const skills = [
    { name: "HTML", imgsrc: "https://cdn-icons-png.flaticon.com/128/1051/1051277.png" },
    { name: "CSS", imgsrc: "https://cdn-icons-png.flaticon.com/128/732/732190.png" },
    { name: "JavaScript", imgsrc: "https://cdn-icons-png.flaticon.com/128/5968/5968292.png" },
    { name: "Python", imgsrc: "https://cdn-icons-png.flaticon.com/128/5968/5968350.png" },
    { name: "SQL", imgsrc: "https://cdn-icons-png.flaticon.com/128/4248/4248443.png" },
    { name: "ReactJs", imgsrc: "https://cdn-icons-png.flaticon.com/128/1126/1126012.png" }
  ];
  const click = (index) => {
    setIsFlipped(isFlipped === index ? null : index);
  };
  return (
    <div id="skills">
      {skills.map((skill, index) => (
        <div key={index} className="skills-card" onClick={() => click(index)}>
          <div className={`card ${isFlipped === index ? "flipped" : ""}`}>
            <div className="card-back">
              <img src={skill.imgsrc} className="i" alt={skill.name} />
              <h2 className="text1">{skill.name}</h2>
            </div>
            <div className="card-front"> click me!
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Skills;
