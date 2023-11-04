import "./Login.css";
import React from "react";
import { useState } from "react";

//Call the backend to authenticate the login information
//have it return a success or failure
function AuthenticateLoginInformation() {
  console.log("Submitted");
  return true;
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

function UsernameInput(login, setLogin) {
  return (
    <div className="formInput">
      {/*Center the box and username later*/}
      <label>
        Username:
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

  //Saves the username and password
  //Authenticates it
  //Clears the input boxes
  const handleSubmit = (e) => {
    e.preventDefault();
    //login([...login, { username: login.username, password: login.password }]); //store the information
    console.log(login);
    const success = AuthenticateLoginInformation();
    HandleResult(success);
    setLogin({ username: "", password: "" }); //clear Data
  };

  // clean up later into smaller functions
  return (
    <div className="login-Page">
      <form className="login-form" onSubmit={handleSubmit}>
        <h2>Login</h2>
        {UsernameInput(login, setLogin)}
        {PasswordInput(login, setLogin)}
        <button type="submit">Login</button>
      </form>
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
