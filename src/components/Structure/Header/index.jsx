import React, { useEffect, useState } from "react";
import { Nav, Navbar, Button } from "react-bootstrap";
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
        setNavbarBgColor("transperant");
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
            : "bg-transperant"
          : 'dark'
      }
      variant="dark"
      expand="lg"
      onToggle={handleNavbarToggle}
      className={`w-100 ${padding} d-flex justify-content-between align-items-center z-1`}
    >
      <div className="container">
        <Navbar.Brand href="/">Your Brand</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
          <div className="d-flex">
            <Nav className="ml-auto gap-5 fw-bold">
              <Nav.Link href="/">Home</Nav.Link>
              <Nav.Link href="/about">About</Nav.Link>
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
          </div>
        </Navbar.Collapse>
      </div>
    </Navbar>
  );
}
