import React, { useEffect, useState } from "react";
import { Nav, Navbar, Button, NavDropdown } from "react-bootstrap";
import "./index.m.css";
import { useNavigate } from "react-router-dom";

export default function Header({ padding = "px-5 py-4" }) {
  const navigate = useNavigate();
  const [navbarBgColor, setNavbarBgColor] = useState("");
  const [isNavbarOpen, setIsNavbarOpen] = useState(false);

  const handleNavbarToggle = () => {
    setIsNavbarOpen(!isNavbarOpen);
  };

  useEffect(() => {
    const handleResize = () => {
      const { innerWidth } = window;
      if (innerWidth < 576) {
        setNavbarBgColor("dark");
      } else if (innerWidth < 992) {
        setNavbarBgColor("dark");
      } else {
        setNavbarBgColor("transparent");
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <Navbar
      bg={
        padding !== "px-5 py-4"
          ? isNavbarOpen
            ? navbarBgColor
            : "bg-transparent"
          : "dark"
      }
      variant="dark"
      expand="lg"
      onToggle={handleNavbarToggle}
      className={`w-100 ${padding} d-flex justify-content-between align-items-center z-1`}
    >
      <div className="container">
        <Navbar.Brand href="/" className="fw-bold">
          Karma Returns
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
          <div className="d-flex">
            <Nav className="ml-auto gap-5 fw-bold">
              <Nav.Link href="/">Home</Nav.Link>
              <NavDropdown title="Company" id="company-dropdown">
                <NavDropdown.Item href="/about">About</NavDropdown.Item>
                <NavDropdown.Item href="/contact">Contact</NavDropdown.Item>
                {/* Add more submenu items here if needed */}
              </NavDropdown>
              <Nav.Link href="/blogs">Blogs</Nav.Link>
              <Nav.Link href="/signin" className="text-light">
                Sign In
              </Nav.Link>
              {/* <Button
                variant="outline-light"
                className="px-5 rounded-pill fw-bold"
                onClick={() => navigate("/register")}
              >
                Join The Community
              </Button> */}
            </Nav>
          </div>
        </Navbar.Collapse>
      </div>
    </Navbar>
  );
}
