import React from "react";

const skills = {
  "Frontend": ["React", "JavaScript (ES6+)", "HTML5", "CSS3", "Bootstrap","Android","React Native"],
  "Backend": ["Java", "Spring Boot", "REST APIs"],
  "Tools": ["Git & GitHub", "VS Code", "Postman"],
  "Other": ["Responsive Design", "Problem Solving", "Clean Code"],
};

const SkillsSection = () => {
  return (
    <section className="section">
      <div className="section-header">
        <h2>Skills</h2>
        <p>Technologies and tools I’m comfortable with.</p>
      </div>

      <div className="skills-grid">
        {Object.entries(skills).map(([category, list]) => (
          <div key={category} className="card skill-card">
            <h3>{category}</h3>
            <ul>
              {list.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
};

export default SkillsSection;
