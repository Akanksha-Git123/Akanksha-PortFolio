import React from "react";

const projects = [
  {
    title: "PG Guest Booking ",
    tech: ["React", "Spring Boot", "JWT", "MySQL"],
    description:
      "Full-stack web app to list and book PG accommodations with role-based dashboards.",
    link: "#",
    github: "https://github.com/Akanksha-Git123/AllProjects.git",
  },
  {
    title: "Blog Management App",
    tech: ["React", "SpringBoot", "Mysql"],
    description:
      "Website where you can write blogs,edit blogs,delete blogs all cruds operarions can be done.",
    link: "#",
    github: "https://github.com/Akanksha-Git123/AllProjects.git",
  },
  {
    title: "Shop Application",
    tech: ["Android", "SpringBoot", "Mysql"],
    description:
      "Mobile app where customers can add products and buy everything by siting in home.",
    link: "#",
    github: "https://github.com/Akanksha-Git123/AllProjects.git",
  },
  {
    title: "Personal Portfolio",
    tech: ["React", "CSS","Springboot"],
    description:
      "This modern portfolio website showcasing my skills, projects and contact details.",
    link: "#home",
    github: "#",
  },
];

const ProjectsSection = () => {
  return (
    <section className="section">
      <div className="section-header">
        <h2>Projects</h2>
        <p>Some of the work I’ve been practicing and building.</p>
      </div>

      <div className="projects-grid">
        {projects.map((project) => (
          <article key={project.title} className="card project-card">
            <h3>{project.title}</h3>
            <p className="project-desc">{project.description}</p>
            <div className="project-tags">
              {project.tech.map((t) => (
                <span key={t}>{t}</span>
              ))}
            </div>
            <div className="project-links">
              <a href={project.github}>GitHub</a>
              <a href={project.link}>Live Demo</a>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default ProjectsSection;
