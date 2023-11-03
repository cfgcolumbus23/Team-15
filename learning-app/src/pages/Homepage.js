import React from "react";
import { Link } from "react-router-dom";
const Home = () => {
  return (
    <div>
      <h1>Sign Up Successful</h1>

      <h1>Home Screen</h1>

      {/*this will be fixed in the location */}
      <Link to="Login">
        <button>Login</button>
      </Link>
    </div>
  );
};

export default Home;
