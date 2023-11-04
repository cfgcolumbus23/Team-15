import React, { useState, useEffect } from "react";
import { Nav, NavLink, NavMenu, Bars } from "./NavbarElements";
import { Link } from "react-router-dom";
import Logo from "./logo"; // Import the Logo component

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(window.innerWidth > 768);

  const toggleMenu = () => {
    if (window.innerWidth <= 768) {
      setShowMenu(!showMenu);
    }
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 768) {
        setShowMenu(true);
      } else {
        setShowMenu(false);
      }
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <>
      <Nav>
        <Logo />
        <Bars onClick={toggleMenu} />
        {showMenu && (
          <NavMenu>
            <NavLink
              onClick={toggleMenu}
              to="/Homepage"
              activeStyle={{ color: "#4d4dff" }}
            >
              Homepage
            </NavLink>
            <NavLink
              onClick={toggleMenu}
              to="/Roadmap"
              activeStyle={{ color: "#4d4dff" }}
            >
              Roadmap
            </NavLink>
            <NavLink
              onClick={toggleMenu}
              to="/Login"
              activeStyle={{ color: "#4d4dff" }}
            >
              Login
            </NavLink>
          </NavMenu>
        )}
      </Nav>
    </>
  );
};

export default Navbar;
