import { Typography } from "@mui/material";
import { Nav } from "react-bootstrap";
import "./index.m.css";

const Footer = () => (
  <div className="footer-section">
    <div className="container">
      {" "}
      <div className="d-flex flex-row justify-content-between">
        <Nav className="gap-2 fw-bold">
          <Nav.Link href="#about" className="text-light">
            About
          </Nav.Link>
          <Nav.Link href="#services" className="text-light">
            Get In Touch
          </Nav.Link>
          <Nav.Link href="#contact" className="text-light">
            Privacy & Terms
          </Nav.Link>
        </Nav>
        <div>
          <div className="w-full lg:w-6/12 px-4">
            <Typography variant="h4" className="fw-semibold">
              Let's keep in touch!
            </Typography>
            <h5 className="text-lg mt-0 mb-2 text-light">
              Find us on any of these platforms, we respond 1-2 business days.
            </h5>
            <div className="mt-3 lg:mb-0 mb-3 icons">
              <button
                className="bg-light border-0 text-primary shadow-lg align-items-center justify-content--center rounded-circle me-2"
                type="button"
              >
                <i className="fab fa-twitter"></i>
              </button>
              <button
                className="bg-white text-primary shadow-lg align-items-center justify-content--center rounded-circle me-2"
                type="button"
              >
                <i className="fab fa-facebook-square"></i>
              </button>
              <button
                className="bg-white text-danger shadow-lg align-items-center justify-content--center rounded-circle me-2"
                type="button"
              >
                <i className="fab fa-dribbble"></i>
              </button>
              <button
                className="bg-white text-dark shadow-lg align-items-center justify-content--center rounded-circle me-2"
                type="button"
              >
                <i className="fab fa-github"></i>
              </button>
            </div>
          </div>
        </div>
      </div>
      <div>
        <Typography variant="caption" className="text-light mt-3">
          Some of our post may contain affiliate links to partner brands. We
          earn a small commission if you click the link and make a purchase.
          There is no extra cost to you, so it's just a nice way to help support
          the site. All images, videos, and other content posted on the site is
          attributed to their creators and original sources. If you see
          something wrong here or you would like to have it removed, please
          contact us.
        </Typography>
      </div>
      <hr className="w-100 text-light my-5" />
      <div className="d-flex flex-wrap items-center text-center">
        <div className="w-full px-2 mx-auto text-center">
          <div className="text-sm text-light fw-semibold py-1">
            Copyright © {new Date().getFullYear()}{" "}
            <a href="/" className="text-light">
              Karma Returns
            </a>
            .
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default Footer;
