import React from "react";

const ContactSection = () => {
  return (
    <section className="section contact-section">
      <div className="section-header">
        <h2>Contact</h2>
        <p>Let’s work together or talk about opportunities.</p>
      </div>

      <div className="contact-grid">
        <div className="card contact-info">
          <h3>Let’s Connect</h3>
          <p>
            I’m open to frontend / full-stack roles and internships.
            Feel free to reach out through this form or directly via
            email or phone.
          </p>
          <ul>
            <li>
              <strong>Email:</strong> akankshachinake19@gmail.com
            </li>
            <li>
              <strong>Phone:</strong> +91-8668876080
            </li>
            <li>
              <strong>Location:</strong> Pune, India
            </li>
          </ul>
        </div>

        <form
          className="card contact-form"
          onSubmit={(e) => e.preventDefault()}
        >
          <div className="form-group">
            <label>Name</label>
            <input type="text" placeholder="Your name" />
          </div>

          <div className="form-group">
            <label>Email</label>
            <input type="email" placeholder="Your email" />
          </div>

          <div className="form-group">
            <label>Message</label>
            <textarea rows="4" placeholder="Tell me about your project..." />
          </div>

          <button type="submit" className="btn btn-primary">
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default ContactSection;
