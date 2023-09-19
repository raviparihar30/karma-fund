// contact.js
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChartLine,
  faPuzzlePiece,
  faMedal,
} from "@fortawesome/free-solid-svg-icons";
import "./contact.modules.css";
import ContactForm from "../../ContactPage";

function Contact() {
  return (
    <section id="why-us" className="contact-section">
      <div className="container">
        <h2 className="fw-bold heading">
          Talk to <span className="text-success">Us</span>
        </h2>
        <ContactForm />
      </div>
    </section>
  );
}

export default Contact;
