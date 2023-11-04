import "./Login.css";
import React from "react";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { auth } from "../Connection"; // Assuming Connection.js is in the src folder, outside of the pages folder.
import { signInWithEmailAndPassword } from "firebase/auth"; // Corrected the import statement.
import { useNavigate } from 'react-router-dom';

//Call the backend to authenticate the login information
//have it return a success or failure
function AuthenticateLoginInformation(login) {
  return signInWithEmailAndPassword(auth, login.email, login.password);
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
      <Login />
    </div>
  );
}

export default Login;
