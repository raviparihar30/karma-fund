// WhyUs.js
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChartLine,
  faPuzzlePiece,
  faMedal,
} from "@fortawesome/free-solid-svg-icons";
import "./whyus.modules.css";

function WhyUs() {
  return (
    <section id="why-us" className="whyus-section">
      <div className="container">
        <h2 className="fw-bold">
          Why <span className="text-success">Us</span>
        </h2>
        <div className="whyus-points">
          <div className="whyus-point">
            <h3>Manager's Years of Experience</h3>
            <FontAwesomeIcon icon={faChartLine} className="icon" />
            <p>
              Experience in trading derivatives across multiple market regimes
              successfully in multiple regions in equities and indices.
            </p>
          </div>
          <div className="whyus-point">
            <h3>Managed Crisis Situations</h3>
            <FontAwesomeIcon icon={faPuzzlePiece} className="icon" />
            <p>
              Succesfully traded through Stress regimes such as LTCM, dotcom
              boom bust, EM crisis 2006, the GFC (Global Fin Crisis 2008), Sov
              credit crisis (2011- 2012) and Brexit as well as Volmageddon
            </p>
          </div>
          <div className="whyus-point">
            <h3>Excellent Track Record</h3>
            <FontAwesomeIcon icon={faMedal} className="icon" />
            <p>
              Manager's P&L in 9 figures across his career by negating open
              ended risk.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default WhyUs;
