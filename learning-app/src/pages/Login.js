import "./Login.css";
import React from "react";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { auth } from "../Connection"; // Assuming Connection.js is in the src folder, outside of the pages folder.
import { signInWithEmailAndPassword } from "firebase/auth"; // Corrected the import statement.
import { useNavigate } from "react-router-dom";

//Call the backend to authenticate the login information
//have it return a success or failure
function AuthenticateLoginInformation(login) {
  return signInWithEmailAndPassword(auth, login.username, login.password);
}

const switchScreenToAssessement = () => {
  // const history = useHistory();

  // useEffect(() => {
  //   const delay = setTimeout(() => {
  //     history.push('/new-route');
  //   }, 3000); // Redirect after 3 seconds (3000 milliseconds)

  //   return () => clearTimeout(delay); // Clear timeout on unmount or re-render
  // }, [history]);

  return <div>{/* Your component's content */}</div>;
};

function HandleResult(success) {
  if (true) {
    //switch to the new screen that says Success!
    //Pull information regarding if the user completed the assessment
    //for now assume they did not:
  } else {
    //display an error message
    console.log("Failure");
  }
}

function EmailInput(login, setLogin) {
  return (
    <div className="formInput">
      {/*Center the box and username later*/}
      <label>
        Email:
        <input
          type="text"
          className="inputBoxLogin"
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
          className="inputBoxLogin"
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
    setLogin({ username: "", password: "" }); //clear Data
  };
  // clean up later into smaller functions
  return (
    <div className="login-Page">
      <form className="login-form" onSubmit={handleSubmit}>
        <h1>Login</h1>
        {/* {error && <p className="error-message">{error}</p>} Display error message */}
        {EmailInput(login, setLogin)}
        {PasswordInput(login, setLogin)}
        <button className="Button" type="submit">
          Login
        </button>
        <p className="subText">Don't have an account?</p>
        <Link to="/SignUp">
          <button className="Button">Sign up here</button>
        </Link>
      </form>
    </div>
  );
}

function Login() {
  return (
    <div>
      <h1> {LoginForm()}</h1>
    </div>
  );
}

export default Login;
