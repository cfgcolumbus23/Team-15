import React, { useState } from "react";
import Navbar from "../components/Navbar";
import { Link } from "react-router-dom";
import "./Homepage.css";

const navigation = [
  { name: "Homepage", href: "./", current: true },
  { name: "Roadmap", href: "./Roadmap", current: false },
];

const user = {
  name: "Tom Cook",
  email: "tom@example.com",
  imageUrl:
    "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
};

const userNavigation = [
  { name: "Your Profile", href: "#" },
  { name: "Settings", href: "#" },
  { name: "Sign out", href: "#" },
];

export default function Home() {
  const [isUserLoggedIn, setUserLoggedIn] = useState(true);

  return (
    <>
      <div className="homepage">
        <h1>Welcome to CTRL-R!</h1>
        <div className="homepage-container">
          <div id="selection-column-1" className="homepage-column">
            <div className="selection-column-title">
              <h2>Our Goals</h2>
            </div>
            <div className="selection-column-desc">
              <p>
                CTRL-R is an online learning management system (LMS) focused on
                connecting you with the resources and opportunities you deserve.
              </p>
            </div>
          </div>
          <div id="selection-column-2" className="homepage-column">
            <div className="selection-column-title">
              <h2>Our Mission</h2>
            </div>
            <div className="selection-column-desc">
              <p>
                Pyramid CDC&apos;s mission is to empower individuals and
                communities to embrace Computer Technology and Entrepreneurship
                Readiness programming to overcome economic barriers.
              </p>
            </div>
          </div>
        </div>
        <Link to="/Signup">
          <div id="button-wrapper" className="flex justify-center items-center">
            <button id="Button-home">
              <h3>Get Started</h3>
            </button>
          </div>
        </Link>
      </div>
    </>
  );
}
