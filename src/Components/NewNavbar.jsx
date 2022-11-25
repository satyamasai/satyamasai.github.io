import React, { useState } from "react";

import "./newNavbar.css";
import "../mediaQuery/small.css";

const NewNavbar = () => {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);
  return (
    <>
      <nav className="navbar">
        <div className="nav-container">
          <a href="#home" className="nav-logo">
            SG
            <i className="fas fa-code"></i>
          </a>

          <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li className="nav-item">
              <a
                href="#home"
                activeClassName="active"
                className="nav-links"
                onClick={handleClick}
              >
                Home
              </a>
            </li>
            <li className="nav-item">
              <a
                href="#about"
                activeClassName="active"
                className="nav-links"
                onClick={handleClick}
              >
                About Me
              </a>
            </li>
            <li className="nav-item">
              <a
                href="#skill"
                activeClassName="active"
                className="nav-links"
                onClick={handleClick}
              >
                Skills
              </a>
            </li>
            <li className="nav-item">
              <a
                href="#projectDiv"
                activeClassName="active"
                className="nav-links"
                onClick={handleClick}
              >
                Projects
              </a>
            </li>
            <li className="nav-item">
              <a
                href="#contacts"
                activeClassName="active"
                className="nav-links"
                onClick={handleClick}
              >
                Contact Us
              </a>
            </li>

            <li className="nav-item">
              <a
                href="Satyam_Gupta_Resume.pdf"
                download
                activeClassName="active"
                className="nav-links"
                onClick={handleClick}
              >
                Resume
              </a>
            </li>
          </ul>
          <div className="nav-icon" onClick={handleClick}>
            <i className={click ? "fas fa-times" : "fas fa-bars"}></i>
          </div>
        </div>
      </nav>
    </>
  );
};

export default NewNavbar;
