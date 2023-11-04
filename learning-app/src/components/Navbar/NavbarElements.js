import { FaBars } from "react-icons/fa";
import { NavLink as Link } from "react-router-dom";
import styled from "styled-components";

export const Nav = styled.nav`
  background: #689ee3;
  height: 60px; /* Reduced height */
  display: flex;
  justify-content: space-between;
  padding: 0.2rem calc((100vw - 1000px) / 2);
  z-index: 12;
`;

export const NavLink = styled(Link)`
  color: #000000;
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0 0.5rem; /* Reduced padding */
  height: 100%;
  cursor: pointer;
  font-size: 1.25rem; /* Reduced font size */
  &.active {
    color: #404040;
  }
`;

export const Bars = styled(FaBars)`
  display: none;
  color: #808080;
  @media screen and (max-width: 768px) {
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-100%, 75%);
    font-size: 1.8rem;
    cursor: pointer;
    
  }
`;

export const NavMenu = styled.div`
  display: flex;
  align-items: center; /* Changed alignment */
  margin-right: -24px;
  z-index: 100;
  @media screen and (max-width: 768px) {
    display: flex;
    flex-direction: column;
    position: absolute;
    background: #689ee3;
    top: 65px; /* Adjusted top position */
    right: 0;
    width: 50%;
    text-align: center;
  }
`;

export const DifferentNavLink = styled(Link)`
  color: #111212;
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0.5rem; /* Reduced padding */
  cursor: pointer;
  font-size: 0.9rem; /* Reduced font size */
  &.active {
    color: #4d4dff;
  }
`;