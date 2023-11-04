import "./Login.css";
var loggedIn = false;
import React from "react";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { auth } from "../Connection"; // Assuming Connection.js is in the src folder, outside of the pages folder.
import { signInWithEmailAndPassword } from "firebase/auth"; // Corrected the import statement.
import { useNavigate } from 'react-router-dom';

//Call the backend to authenticate the login information
//have it return a success or failure
function AuthenticateLoginInformation(login) {
  return signInWithEmailAndPassword(auth, login.username, login.password);
}

function EmailInput(login, setLogin) {
  return (
    <div className="formInput">
      {/*Center the box and username later*/}
      <label>
        Email:
        <input
          type="text"
          className="inputBox"
          value={login.username}
          onChange={(e) => setLogin({ ...login, username: e.target.value })}
        />
      </label>
    </div>
  );
}

function PasswordInput(login, setLogin) {
  return (
    <div className="formInput">
      <label>
        Password:
        <input
          type="password"
          className="inputBox"
          value={login.password}
          onChange={(e) => setLogin({ ...login, password: e.target.value })}
        />
      </label>
    </div>
  );
}

//Store the username and password
function LoginForm() {
  const [login, setLogin] = useState({
    username: "",
    password: "",
  });
  const navigate = useNavigate();
  function HandleResult(success, navigate) {
    if (true) {
      navigate("/roadmap");

      //switch to the new screen that says Success!
      //Pull information regarding if the user completed the assessment
      //for now assume they did not:
    } else {
      //display an error message
      console.log("Failure");
    }
  }

  //Saves the username and password
  //Authenticates it
  //Clears the input boxes
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(login);
    AuthenticateLoginInformation(login)
      .then((userCredential) => {
        // User is signed in
        HandleResult(true, navigate);
      })
      .catch((error) => {
        // Handle Errors here.
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode, errorMessage);
        HandleResult(false, navigate);
      });
    setLogin({ username: "", password: "" }); //clear Data
  };

  // clean up later into smaller functions
  return (
    <div className="login-Page">
    <form className="login-form" onSubmit={handleSubmit}>
      <h2>Login</h2>
      {/* {error && <p className="error-message">{error}</p>}  */}
      {EmailInput(login, setLogin)}
      {PasswordInput(login, setLogin)}
      <button type="submit" id="loginbutton">Login</button>
    </form>
    <Link to="/SignUp" id="signup">
      <p class="subtext">Don't have an account?</p>
      <button id="signupbutton">Sign up here</button>
    </Link>
  </div>
)};

function Login() {

  return <img src="https://i.imgur.com/MK3eW3As.jpg" alt="Katherine Johnson" />;
}

export default Login;
