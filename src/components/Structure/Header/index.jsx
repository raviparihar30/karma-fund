import React from "react";
import { Nav, Navbar, Button } from "react-bootstrap";
import "./index.m.css";
import { useNavigate } from "react-router-dom";

export default function Header({ padding = "px-5 py-4" }) {
  const navigate = useNavigate();
  return (
    <Navbar
      bg={padding === "px-5 py-4" ? "dark" : "transperant"}
      variant="dark"
      expand="lg"
      className={`w-100 ${padding} d-flex justify-content-between z-1`}
    >
      <div className="container">
        <Navbar.Brand href="/">Your Brand</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse
          id="basic-navbar-nav"
          className="d-flex justify-content-end"
        >
          <Nav className="ml-auto gap-5 fw-bold">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/about">About</Nav.Link>
            <Nav.Link href="/services">Services</Nav.Link>
            <Nav.Link href="/contact">Contact</Nav.Link>

            <Nav.Link href="/signin" className="text-light">
              Sign In
            </Nav.Link>
            <Button
              variant="outline-light"
              className="px-5 rounded-pill fw-bold"
              onClick={() => navigate("/register")}
            >
              Join The Community
            </Button>
          </Nav>
        </Navbar.Collapse>
      </div>
    </Navbar>
  );
}
