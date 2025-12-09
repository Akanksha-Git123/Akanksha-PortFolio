import React, { useState } from "react";

const Header = () => {
  const [open, setOpen] = useState(false);

  return (
    <header className="navbar">
      <div className="navbar-inner">
        <div className="logo">
          Akanksha<span>Portfolio</span>
        </div>

        <nav className={`nav-links ${open ? "open" : ""}`}>
          <a href="#home" onClick={() => setOpen(false)}>Home</a>
          <a href="#skills" onClick={() => setOpen(false)}>Skills</a>
          <a href="#projects" onClick={() => setOpen(false)}>Projects</a>
          <a href="#education" onClick={() => setOpen(false)}>Education</a>
          <a href="#contact" onClick={() => setOpen(false)}>Contact</a>
        </nav>

        <button
          className="nav-toggle"
          onClick={() => setOpen((prev) => !prev)}
        >
          <span />
          <span />
          <span />
        </button>
      </div>
    </header>
  );
};

export default Header;
