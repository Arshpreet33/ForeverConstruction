import React from "react";
import { Link } from "react-router-dom";
// import { CloudinaryContext, Image } from "cloudinary-react";
import "../styles/global.css";
// import Image1 from '../assets/images/1'

const Home = () => {
  return (
    <div className="home-page">
      <section className="hero">
        <div className="hero-content">
          <h2>Quality Fences Built to Last</h2>
          <p>Professional fence installation and repair services</p>
          <p>Building fences for last 7 years</p>
          <Link to="/quote" className="cta-button">
            Get a Free Quote
          </Link>
        </div>
      </section>

      <section className="featured-work">
        <h3>Our Recent Work</h3>
        <div className="preview-gallery">
          {/* <CloudinaryContext cloudName="your-cloud-name"> */}
            {/* <div className="preview-image">
              <Image publicId="assets/1" alt="Fence example 1" />
            </div>
            <div className="preview-image">
              <Image publicId="assets/2" alt="Fence example 2" />
            </div>
            <div className="preview-image">
              <Image publicId="assets/3" alt="Fence example 3" />
            </div> */}
          {/* </CloudinaryContext> */}
          <div className="preview-image">
              <img src="images/1.jpeg" alt="Fence example 1" />
          </div>
          <div className="preview-image">
              <img src="images/2.jpeg" alt="Fence example 2" />
          </div>
          <div className="preview-image">
              <img src="images/3.jpeg" alt="Fence example 3" />
          </div>
        </div>
        <Link to="/gallery" className="secondary-button">
          View Full Gallery
        </Link>
      </section>

      <section className="services">
        <h3>Our Services</h3>
        <div className="service-cards">
          <div className="service-card">
            <h4>Residential Fencing</h4>
            <p>Privacy, picket, and decorative fences for your home.</p>
          </div>
          <div className="service-card">
            <h4>Commercial Fencing</h4>
            <p>Secure and durable solutions for businesses.</p>
          </div>
          <div className="service-card">
            <h4>Fence Repair</h4>
            <p>We fix damaged fences to extend their lifespan.</p>
          </div>
          <div className="service-card">
            <h4>Chain Link Fence</h4>
            <p>Cost-effective, durable, low-maintenance, versatile, and offer good visibility.</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
