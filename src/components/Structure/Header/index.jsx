import React, { useContext, useEffect, useState } from "react";
import { Nav, Navbar, NavDropdown, Button, Dropdown } from "react-bootstrap";
import { Avatar } from "@mui/material";
import "./index.m.css";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../../../context/user";

export default function Header({ padding = "px-5 py-4" }) {
  const [navbarBgColor, setNavbarBgColor] = useState("");
  const [isNavbarOpen, setIsNavbarOpen] = useState(false);
  const { loggedInUser, setLoggedInUser } = useContext(UserContext);
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
          <div className="d-flex align-items-center">
            <Nav className="ml-auto gap-3 fw-bold align-items-center">
              <Nav.Link href="/">Home</Nav.Link>
              <NavDropdown title="Company" id="company-dropdown">
                <NavDropdown.Item href="/about">About</NavDropdown.Item>
                <NavDropdown.Item href="/contact">Contact</NavDropdown.Item>
                {/* Add more submenu items here if needed */}
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
                        setLoggedInUser(null);
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

// Function to capitalize the first letter of a string
const capitalizeFirstLetter = (str) => {
  return str.charAt(0).toUpperCase() + str.slice(1);
};
