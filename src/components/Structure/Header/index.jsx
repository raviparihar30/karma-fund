import React, { useContext, useEffect, useState } from "react";
import { Nav, Navbar, NavDropdown, Dropdown } from "react-bootstrap";
import { Avatar } from "@mui/material";
import "./index.m.css"; // Import your custom CSS file
import { UserContext } from "../../../context/user";
import { Link } from "react-scroll";

export default function Header({ padding = "px-5 py-4", hide }) {
  const [isNavbarOpen, setIsNavbarOpen] = useState(false);
  const { loggedInUser, setLoggedInUser } = useContext(UserContext);
  const [scrollHeaderBg, setScrollHeaderBg] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  const handleNavbarToggle = () => {
    setIsNavbarOpen(!isNavbarOpen);
  };

  useEffect(() => {
    const handleResize = () => {
      const { innerWidth } = window;
      setIsMobile(innerWidth < 576 || innerWidth < 992);
      const navbarBgColor = isMobile ? "secondary" : "transparent";
      setScrollHeaderBg(navbarBgColor === "dark");
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [isMobile]);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const isScrolled = scrollY > 100;
      setScrollHeaderBg(isScrolled);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const capitalizeFirstLetter = (str) => {
    return str.charAt(0).toUpperCase() + str.slice(1);
  };

  return (
    <Navbar
      bg={
        !hide
          ? isNavbarOpen
            ? "secondary"
            : scrollHeaderBg
            ? "dark"
            : "transparent"
          : "dark"
      }
      variant="dark"
      expand="lg"
      onToggle={handleNavbarToggle}
      className={`w-100 ${padding} d-flex justify-content-between align-items-center z-1 header-wrapper ${
        scrollHeaderBg ? "scroll-header-bg" : ""
      }`}
    >
      <div className="container head">
        <Navbar.Brand href="/" className="fw-bold text-center">
          Karma Returns
          <br />
          <small className="logo-subtext">
            MARKET NEUTRAL DIGITALASSETS FUND
          </small>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />

        <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
          <div className="d-flex align-items-center">
            <Nav className="ml-auto gap-3 fw-bold align-items-center">
              <Nav.Link href="/">Home</Nav.Link>
              <NavDropdown title="Company" id="company-dropdown">
                <Link to="aboutSection" smooth={true} duration={500}>
                  <NavDropdown.Item>About</NavDropdown.Item>
                </Link>
                <Link to="philosophySection" smooth={true} duration={500}>
                  <NavDropdown.Item>Philosophy</NavDropdown.Item>
                </Link>
                <NavDropdown.Item href="/contact">Contact</NavDropdown.Item>
              </NavDropdown>
              <Nav.Link href="/blogs">Blogs</Nav.Link>
              {loggedInUser ? (
                <Dropdown align="end">
                  <Dropdown.Toggle
                    variant="link"
                    className="text-light d-flex align-items-center gap-2"
                    id="user-dropdown-toggle"
                  >
                    <Avatar
                      src={loggedInUser.avatarUrl}
                      alt={loggedInUser.name}
                      className="mr-2"
                    />
                    {loggedInUser.name &&
                      capitalizeFirstLetter(loggedInUser.name)}
                  </Dropdown.Toggle>
                  <Dropdown.Menu>
                    <Dropdown.Item href="#">My Account</Dropdown.Item>
                    <Dropdown.Divider />
                    <Dropdown.Item
                      href="#"
                      onClick={() => {
                        localStorage.removeItem("rn-user");
                        localStorage.removeItem("token");
                        setLoggedInUser(false);
                      }}
                    >
                      Log Out
                    </Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
              ) : (
                <Nav.Link href="/signin" className="text-light">
                  Sign In
                </Nav.Link>
              )}
            </Nav>
          </div>
        </Navbar.Collapse>
      </div>
    </Navbar>
  );
}
