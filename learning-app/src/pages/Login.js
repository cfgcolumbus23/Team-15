import "./Login.css";
import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { auth } from "../Connection"; // Assuming Connection.js is in the src folder, outside of the pages folder.
import { signInWithEmailAndPassword } from "firebase/auth"; // Corrected the import statement.

//Call the backend to authenticate the login information
//have it return a success or failure
function AuthenticateLoginInformation(login) {
  return signInWithEmailAndPassword(auth, login.email, login.password);
}

function HandleResult(success) {
  if (success) {
    //switch to the new screen that says Success!
    console.log("Success");
  } else {
    //display an error message
    console.log("Failure");
  }
}

function EmailInput(login, setLogin) {
  return (
    <div className="formInput">
      {/*Center the box and email later*/}
      <label>
        Email:
        <input
          type="text"
          className="inputBox"
          value={login.email}
          onChange={(e) => setLogin({ ...login, email: e.target.value })}
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

//Store the email and password
function LoginForm() {
  const [login, setLogin] = useState({
    email: "",
    password: "",
  });

  //Saves the email and password
  //Authenticates it
  //Clears the input boxes
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(login);
    AuthenticateLoginInformation(login)
      .then((userCredential) => {
        // User is signed in
        HandleResult(true);
      })
      .catch((error) => {
        // Handle Errors here.
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode, errorMessage);
        HandleResult(false);
      });
    setLogin({ email: "", password: "" }); //clear Data
  };

  // clean up later into smaller functions
  return (
    <div className="login-Page">
      <form className="login-form" onSubmit={handleSubmit}>
        <h2>Login</h2>
        {EmailInput(login, setLogin)}
        {PasswordInput(login, setLogin)}
        <button type="submit">Login</button>
      </form>

      {/* //Might Change later */}
      <Link to="/SignUp">
        <button>Sign Up</button>
      </Link>
    </div>
  );
}

//Needs to add a submit button
//Needs to add a "dont have a account yet? sign up here button that directs to the sign up page"

function Login() {
  return (
    <div>
      <h1> {LoginForm()}</h1>
    </div>
  );
}

export default Login;
