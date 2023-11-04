import React, { useState, useEffect } from "react";
import { Nav, NavLink, NavMenu, Bars } from "./NavbarElements";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(window.innerWidth > 768);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
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
        <Bars onClick={toggleMenu} />
        {showMenu && (
          <NavMenu>
            <NavLink to="/" activeStyle={{ color: "#4d4dff" }}>
              Homepage
            </NavLink>
            <NavLink to="/Roadmap" activeStyle={{ color: "#4d4dff" }}>
              Roadmap
            </NavLink>
            <NavLink to="/Login" activeStyle={{ color: "#4d4dff" }}>
              Login
            </NavLink>
          </NavMenu>
        )}
      </Nav>
    </>
  );
};

export default Navbar;