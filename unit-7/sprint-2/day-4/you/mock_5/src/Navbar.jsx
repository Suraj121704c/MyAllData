import React from "react";
import {
  Box,
} from "@chakra-ui/react";
import { NavLink } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";

const Navbar = () => {
  const [click, setClick] = React.useState(false);

  const handleClick = () => setClick(!click);
  const Close = () => setClick(false);

  return (
    <Box>
      <Box className={click ? "main-container" : ""} onClick={() => Close()} />
      <nav className="navbar" onClick={(e) => e.stopPropagation()}>
        <div className="nav-container">
          <NavLink exact to="/" className="nav-logo">
            <img src="https://preview.colorlib.com/theme/kindergarten/assets/img/logo/logo.png.webp" alt="nav" />
          </NavLink>
          <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li className="nav-item">
              <NavLink
                exact
                to="/"
                activeClassName="active"
                className="nav-links"
                onClick={click ? handleClick : null}>
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                exact
                to="/"
                activeClassName="active"
                className="nav-links"
                onClick={click ? handleClick : null}>
                About
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                exact
                to="/"
                activeClassName="active"
                className="nav-links"
                onClick={click ? handleClick : null}>
                Blog
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                exact
                to="/"
                activeClassName="active"
                className="nav-links"
                onClick={click ? handleClick : null}>
                Contact Us
              </NavLink>
            </li>
            <li className="nav-item" style={{background : "blue" , borderRadius : "20px"}} id="enroll">
              <NavLink
              style={{color : "white"}}
                exact
                to="/"
                activeClassName="active"
                className="nav-links"
                onClick={click ? handleClick : null}>
                Enroll Now 
              </NavLink>
            </li>
          </ul>
          <Box className="nav-icon" onClick={handleClick}>
            <GiHamburgerMenu />
          </Box>
        </div>
      </nav>
    </Box>
  );
};

export default Navbar;
