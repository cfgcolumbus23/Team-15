import React, { useState, useEffect } from "react";
import { Nav, NavLink, NavMenu, Bars, DropdownContainer } from "./NavbarElements";
import Logo from "./logo"; 
import { FaClock } from 'react-icons/fa';

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(window.innerWidth > 768);
  const [showDropdown, setShowDropdown] = useState(false);

  const toggleMenu = () => {
    if (window.innerWidth <= 768) {
      setShowMenu(!showMenu);
    }
  };

  const handleDropdownEnter = () => {
    setShowDropdown(true);
  };

  const handleDropdownLeave = () => {
    setShowDropdown(false);
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
        <DropdownContainer 
          onMouseEnter={handleDropdownEnter} 
          onMouseLeave={handleDropdownLeave}
        >
          <FaClock data-tip="Live certification test 10am 11/4/23" style={{ cursor: 'pointer', marginRight: '1rem' }} size={30} color="white" />
          {showDropdown && (
            <div className="dropdown-content">
              <p>SMARTNet - CERTIPORT Digital Literacy 11/4 9AM-2PM</p>
              <p>SMARTNet - CompTIA IT Fundamental 11/11 9AM - 2PM</p>
            </div>
          )}
        </DropdownContainer>
        <Bars onClick={toggleMenu} />
        {showMenu && (
          <NavMenu>
            <NavLink onClick={toggleMenu} to="/Homepage" activeStyle={{ color: "#4d4dff" }}>
              Homepage
            </NavLink>
            <NavLink onClick={toggleMenu} to="/Roadmap" activeStyle={{ color: "#4d4dff" }}>
              Roadmap
            </NavLink>
            <NavLink onClick={toggleMenu} to="/Login" activeStyle={{ color: "#4d4dff" }}>
              Login
            </NavLink>
          </NavMenu>
        )}
      </Nav>
    </>
  );
};

export default Navbar;
