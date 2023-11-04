import "./Login.css";
import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { auth } from "../Connection"; // Assuming Connection.js is in the src folder, outside of the pages folder.
import { signInWithEmailAndPassword } from "firebase/auth"; // Corrected the import statement.
import { useNavigate } from 'react-router-dom';

//Call the backend to authenticate the login information
//have it return a success or failure
function AuthenticateLoginInformation(login) {
  return signInWithEmailAndPassword(auth, login.email, login.password);
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
  const [error, setError] = useState(""); // Add state for the error message
  const navigate = useNavigate(); // Hook for navigation
  
  function handleResult(success, errorMessage = "") {
    if (true) {
      // Navigate to the roadmap page
      navigate('/roadmap'); // Make sure to replace '/roadmap' with your actual route
    } else {
      console.log("Failure", errorMessage);
      setError(errorMessage); // Update the error state with the error message
    }
  }
  // Use this inside LoginForm to access the navigate function

  //Saves the email and password
  //Authenticates it
  //Clears the input boxes
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(login);
    AuthenticateLoginInformation(login)
      .then((userCredential) => {
        handleResult(true); // Call handleResult on success
      })
      .catch((error) => {
        // Handle Errors here.
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode, errorMessage);
        handleResult(false, errorMessage); // Pass the error message to handleResult
      });
    setLogin({ email: "", password: "" }); //clear Data
  };

  

  // clean up later into smaller functions
  return (
    <div className="login-Page">
    <form className="login-form" onSubmit={handleSubmit}>
      <h2>Login</h2>
      {error && <p className="error-message">{error}</p>} {/* Display error message */}
      {EmailInput(login, setLogin)}
      {PasswordInput(login, setLogin)}
      <button type="submit">Login</button>
    </form>
    <Link to="/SignUp">
      <button>Don't have an account? Sign up here</button>
    </Link>
  </div>
)};

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
