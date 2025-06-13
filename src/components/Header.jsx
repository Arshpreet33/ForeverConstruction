import React from "react";
import { Link } from "react-router-dom";
import { CloudinaryContext, Image } from "cloudinary-react";

const Header = () => {
  return (
    <header className="header">
      <div className="logo-container">
        {/* <CloudinaryContext cloudName="your-cloud-name"> */}
          {/* <Image
            publicId="fencegate/logo"
            className="logo"
            alt="FenceGate Logo"
          /> */}
        {/* </CloudinaryContext> */}
        <h1>Forever Construction</h1>
      </div>
      <nav>
        <ul className="nav-links">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/quote">Get a Quote</Link>
          </li>
          <li>
            <Link to="/gallery">Gallery</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
