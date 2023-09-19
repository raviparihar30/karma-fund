// About.js
import React from "react";
import "./about.modules.css";
import { Slide } from "react-awesome-reveal";

function About() {
  return (
    <section id="about" className="about-section">
      <div className="container">
        <div className="about-content">
          <Slide direction="left">
            <div className="about-text">
              <h2>
                <span className="text-success">About</span> Us
              </h2>
              <p>
                We provide timely and insightful research and commentary on the
                crypto markets to provide you context and understanding of this
                new asset class. In crypto, we apply principles honed in varied
                market regimes through the 90’s to the present day across
                multiple assets such as Equities, Commodities, Fixed-Income &
                Global Macro.
              </p>
              <p>
                Our deep and broad expertise in portfolio construction is
                applicable to many use cases including treasury management for
                yield enhancement and protection, non correlated market
                solutions, hedging optimization and arbitrage based strategies
              </p>
            </div>
          </Slide>
          <Slide direction="right">
            <div className="about-image">
              <img
                src="/images/teamwork-3213924_1280.jpg"
                alt="Teamwork and Collaboration"
              />
            </div>
          </Slide>
        </div>
      </div>
    </section>
  );
}

export default About;
