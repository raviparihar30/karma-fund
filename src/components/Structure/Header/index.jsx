import React, { useContext, useEffect, useState } from "react";
import { Nav, Navbar, NavDropdown, Dropdown } from "react-bootstrap";
import { Avatar } from "@mui/material";
import { Link } from "react-scroll";
import { useNavigate } from "react-router-dom";

import "./index.m.css"; // Import your custom CSS file

import { UserContext } from "../../../context/user";

export default function Header({ padding = "p-3", hide }) {
  const [isNavbarOpen, setIsNavbarOpen] = useState(false);
  const { loggedInUser, setLoggedInUser } = useContext(UserContext);
  const [scrollHeaderBg, setScrollHeaderBg] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const navigate = useNavigate();
  const isHomePage = window.location.pathname === "/"; // Adjust the condition for your specific router setup

  const scrollToSection = (sectionId) => {
    if (isHomePage) {
      // If it's the home page, scroll to the section directly
      document.getElementById(sectionId).scrollIntoView({ behavior: "smooth" });
    } else {
      // If it's not the home page, redirect to the home page and then scroll
      navigate("/");
      setTimeout(() => {
        document
          .getElementById(sectionId)
          .scrollIntoView({ behavior: "smooth" });
      }, 1000); // Adjust the delay as needed
    }
  };
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
    <>
      <Navbar
        bg={
          !hide
            ? isNavbarOpen
              ? "secondary"
              : scrollHeaderBg
              ? "light"
              : "transparent"
            : "light"
        }
        variant="light"
        expand="lg"
        onToggle={handleNavbarToggle}
        className={`w-100 ${padding} d-flex justify-content-between align-items-center z-1 header-wrapper ${
          scrollHeaderBg ? "scroll-header-bg" : ""
        }`}
      >
        <div className="container head">
          <Navbar.Toggle aria-controls="basic-navbar-nav" />

          <Navbar.Collapse
            className="justify-content-end"
            id="basic-navbar-nav"
          >
            <div className="d-flex align-items-center text-dark">
              <Nav className="ml-auto gap-3 fw-bold align-items-center">
                <Nav.Link href="/" className="text-dark">
                  Home
                </Nav.Link>
                <Nav.Link href="/fund" className="text-dark">
                  Fund
                </Nav.Link>
                <NavDropdown
                  title="Company"
                  className="text-dark"
                  id="company-dropdown"
                >
                  {isHomePage ? (
                    <Link
                      to="aboutSection"
                      className="text-dark"
                      smooth={true}
                      duration={500}
                    >
                      <NavDropdown.Item className="text-dark">
                        About
                      </NavDropdown.Item>
                    </Link>
                  ) : (
                    <NavDropdown.Item
                      href="#"
                      onClick={(e) => {
                        e.preventDefault();
                        scrollToSection("about");
                      }}
                    >
                      About
                    </NavDropdown.Item>
                  )}
                  {isHomePage ? (
                    <Link to="philosophySection" smooth={true} duration={500}>
                      <NavDropdown.Item>Philosophy</NavDropdown.Item>
                    </Link>
                  ) : (
                    <NavDropdown.Item
                      href="#"
                      onClick={(e) => {
                        e.preventDefault();
                        scrollToSection("philosophy");
                      }}
                    >
                      Philosophy
                    </NavDropdown.Item>
                  )}

                  {isHomePage ? (
                    <Link to="contactSection" smooth={true} duration={500}>
                      <NavDropdown.Item>Contact</NavDropdown.Item>
                    </Link>
                  ) : (
                    <NavDropdown.Item
                      href="#"
                      onClick={(e) => {
                        e.preventDefault();
                        scrollToSection("contact");
                      }}
                    >
                      Contact
                    </NavDropdown.Item>
                  )}
                </NavDropdown>
                {isHomePage ? (
                  <Link to="blogsSection" smooth={true} duration={500}>
                    <Nav.Link href="/blogs">Blogs</Nav.Link>
                  </Link>
                ) : (
                  <NavDropdown.Item
                    href="#"
                    onClick={(e) => {
                      e.preventDefault();
                      scrollToSection("blogs");
                    }}
                    className="fw-bold"
                  >
                    Blogs
                  </NavDropdown.Item>
                )}

                {loggedInUser ? (
                  <Dropdown align="end">
                    <Dropdown.Toggle
                      variant="link"
                      className="text-dark d-flex align-items-center gap-2"
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
                  <>
                    <Nav.Link href="/signin" className="text-dark w-25">
                      Signin
                    </Nav.Link>
                    <Nav.Link href="/register" className="text-dark">
                      Register
                    </Nav.Link>
                  </>
                )}
              </Nav>
            </div>
          </Navbar.Collapse>
        </div>
      </Navbar>
      <Navbar.Brand
        href="/"
        className="fw-bold text-center d-flex w-100 align-items-center justify-content-center"
      >
        <img
          src="/images/logo.png"
          style={{
            width: "400px",
            height: "220px",
            paddingTop: "48px",
          }}
        />
      </Navbar.Brand>
    </>
  );
}
