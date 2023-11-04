import "./Homepage.css";
import React from "react";
import { Link } from "react-router-dom";
const Home = () => {
  return (
    <div>
      <h1>Ctrl+R</h1>
      <a href="./RoadMap.js">
        <button class="button">Get Started</button>
        <Link to="/SignUp">Temp Sign Up screen</Link>
      </a>
    </div>
  );
};

export default Home;
