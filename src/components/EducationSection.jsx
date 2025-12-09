import React from "react";

const EducationSection = () => {
  return (
    <section className="section">
      <div className="section-header">
        <h2>Education</h2>
        <p>My academic background and achievements.</p>
      </div>

      <div className="timeline">

        {/* CDAC PG-DMC */}
        <div className="timeline-item">
          <div className="timeline-dot" />
          <div className="timeline-content card">
            <h3>PG-DMC (Post Graduate Diploma in Mobile Computing)</h3>
            <span className="timeline-year">2025</span>
            <p>
              Specialized in Mobile Computing — Java, Spring Boot, Android,
              React Native, AI on mobile, Hybrid app development.
            </p>
          </div>
        </div>

        {/* BE */}
        <div className="timeline-item">
          <div className="timeline-dot" />
          <div className="timeline-content card">
            <h3>Bachelor of Engineering (Computer Engineering)</h3>
            <span className="timeline-year">2024</span>
            <p>
              Savitribai Phule Pune University — Scored <strong>73%</strong> 
              (First Class).
            </p>
          </div>
        </div>

        {/* Diploma */}
        <div className="timeline-item">
          <div className="timeline-dot" />
          <div className="timeline-content card">
            <h3>Diploma in Computer Engineering</h3>
            <span className="timeline-year">2021</span>
            <p>
              Maharashtra State Board of Technical Education — Scored
              <strong> 81.26%</strong> (First Class).
            </p>
          </div>
        </div>

        {/* HSC */}
        <div className="timeline-item">
          <div className="timeline-dot" />
          <div className="timeline-content card">
            <h3>Higher Secondary Certificate (HSC)</h3>
            <span className="timeline-year">2019</span>
            <p>
              Science Stream — Scored <strong>55.84%</strong>.
            </p>
          </div>
        </div>

        {/* SSC */}
        <div className="timeline-item">
          <div className="timeline-dot" />
          <div className="timeline-content card">
            <h3>Secondary School Certificate (SSC)</h3>
            <span className="timeline-year">2017</span>
            <p>
              Maharashtra Board — Scored <strong>74.20%</strong> (First Class).
            </p>
          </div>
        </div>

      </div>
    </section>
  );
};

export default EducationSection;
