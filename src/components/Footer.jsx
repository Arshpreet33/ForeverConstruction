import React from "react";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <p>
          © {new Date().getFullYear()} Forever Construction Ltd. - Professional Fence Building
        </p>
        <div className="contact-info">
          <p>Phone: (604) 729-6456</p>
          <p>Email: foreverconstruction94@gmail.com</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
