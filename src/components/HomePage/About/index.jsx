// About.js
import React from "react";
import "./about.modules.css";

function About() {
  return (
    <section id="about" className="about-section">
      <div className="container">
        <div className="about-content">
          <div className="about-text">
            <h2>About Karma Returns</h2>
            <p>
              Welcome to Karma Returns, your trusted source for insightful and
              informative investment blogs. We are dedicated to providing you
              with the latest trends, analysis, and advice in the world of
              investments.
            </p>
            <p>
              Our team of experts is passionate about helping both beginners and
              seasoned investors make informed decisions. We believe that
              knowledge is the key to successful investing, and our blogs are
              designed to empower you with the information you need.
            </p>
            <p>
              Whether you're interested in stocks, real estate,
              cryptocurrencies, or any other investment vehicle, we've got you
              covered. Our commitment is to deliver high-quality content that
              adds value to your investment journey.
            </p>
          </div>
          <div className="about-image">
            <img
              src="/images/teamwork-3213924_1280.jpg"
              alt="Teamwork and Collaboration"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
