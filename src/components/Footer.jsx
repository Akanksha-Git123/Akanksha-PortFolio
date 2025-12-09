import React from "react";

const Footer = () => {
  return (
    <footer className="footer">
      <span>
        © {new Date().getFullYear()} Akanksha Chinake. All rights reserved.
      </span>
      <span className="footer-made">
        Designed with ❤️ using React.
      </span>
    </footer>
  );
};

export default Footer;
