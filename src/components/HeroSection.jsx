import React from "react";

const HeroSection = () => {
  return (
    <section className="hero section">
      <div className="hero-left">
        <p className="hero-tag">Frontend Developer • Java • Spring Boot</p>
        <h1 className="hero-title">
          Hi, I'm <span>Akanksha</span> 👋
        </h1>
        <p className="hero-subtitle">
          I craft clean, responsive web applications using modern technologies
          like React, Java, Spring Boot, Android, React Native and REST APIs. I
          love turning ideas into beautiful user experiences.
        </p>

        <div className="hero-actions">
          <a href="#projects" className="btn btn-primary">
            View Projects
          </a>

          <a
            href="/AkankshaResume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-outline"
          >
            Download Resume
          </a>

          <a href="#contact" className="btn btn-outline">
            Hire Me
          </a>
        </div>

        <div className="hero-pills">
          <span>React</span>
          <span>Java</span>
          <span>Spring Boot</span>
          <span>REST APIs</span>
          <span>Android</span>
          <span>React Native</span>
        </div>

        {/* Social links under hero */}
        <div className="social-links">
          <span className="social-label">Find me on</span>

          <a
            href="https://www.linkedin.com/in/akanksha-chinake-4714b1273"
            target="_blank"
            rel="noopener noreferrer"
            className="social-chip linkedin"
          >
            <span className="icon-badge">in</span>
            <span>LinkedIn</span>
          </a>

          <a
            href="https://github.com/Akanksha-Git123/AllProjects.git"
            target="_blank"
            rel="noopener noreferrer"
            className="social-chip github"
          >
            <span className="icon-badge">GH</span>
            <span>GitHub</span>
          </a>
        </div>

        {/* Phone line */}
        <div className="hero-contact-line">
          <span>📞</span>
          {/* 👉 Replace with your real number */}
          <a href="tel:8668876080">+91-8668876080</a>
        </div>
      </div>

      <div className="hero-right">
        <div className="hero-card">
          <div className="hero-badge">Available for opportunities</div>

          <div className="hero-avatar">
            {/* 👉 Put your photo at: public/akanksha-profile.jpg */}
            <img src="/Akanksha photo.jpeg" alt="Akanksha Chinake" />
          </div>

          <h3>Akanksha Chinake</h3>
          <p>Frontend / Full-Stack Developer</p>

          <div className="hero-stats">
            <div>
              <h4>2+ </h4>
              <p>Projects</p>
            </div>
            <div>
              <h4>∞</h4>
              <p>Curiosity</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
