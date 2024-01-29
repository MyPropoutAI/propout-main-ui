import React, { useState } from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";
import { Link } from "react-router-dom";
import "./Navbar.Style.css";
import { navLinks } from "./constant";
import Button from "../Button/Button.jsx";
import Logo from "../../assets/icons/newLogo.jpg";
import { useLocation } from "react-router-dom";

const NavBar = () => {
  const [expand, updateExpanded] = useState(false);
  const [navColour, updateNavbar] = useState(false);

  function scrollHandler() {
    if (window.scrollY >= 20) {
      updateNavbar(true);
    } else {
      updateNavbar(false);
    }
  }
  const loaction = useLocation();

  const { pathname } = location;
  console.log(pathname);

  window.addEventListener("scroll", scrollHandler);

  return (
    <Navbar
      expanded={expand}
      fixed="top"
      expand="md"
      className={navColour ? "sticky" : "navbar"}
    >
      <Container>
        <Navbar.Brand href="/" className="d-flex">
          <img src={Logo} alt="logo" className="companyLogo" />
        </Navbar.Brand>
        {pathname !== "/dApp" && (
          <div className="navbar_connect">
            <Link
              to="/dApp"
              style={{
                textDecoration: "none",
                padding: "8px 20px",
                background: "#47A1FF",
                color: "white",
                borderRadius: "50px",
              }}
            >
              Launch App
            </Link>
          </div>
        )}
        <Navbar.Toggle
          aria-controls="responsive-navbar-nav"
          onClick={() => {
            updateExpanded(expand ? false : "expanded");
          }}
        ></Navbar.Toggle>
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ms-auto" defaultActiveKey="#home">
            {navLinks.map((link, index) => (
              <Nav.Link
                key={index}
                as={Link}
                to={link.path}
                onClick={() => updateExpanded(false)}
              >
                {link.text}
              </Nav.Link>
            ))}
          </Nav>
        </Navbar.Collapse>
        <Button title="Explore Propout" className="xporeBtn" />
      </Container>
    </Navbar>
  );
};

export default NavBar;
