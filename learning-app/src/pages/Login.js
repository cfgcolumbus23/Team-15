import "./Login.css";
import React from "react";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { auth } from "../Connection"; // Assuming Connection.js is in the src folder, outside of the pages folder.
import { signInWithEmailAndPassword } from "firebase/auth"; // Corrected the import statement.
import { useNavigate } from 'react-router-dom';

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

function PasswordInput({ login, setLogin }) {
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

function LoginForm() {
  const [login, setLogin] = useState({
    email: "",
    password: "",
  });
  const [error, setError] = useState("");
  const navigate = useNavigate();

  function handleResult(success, errorMessage = "") {
    if (true) {
      navigate('/roadmap'); // Navigate to the roadmap page if login is successful
    } else {
      console.log("Failure", errorMessage);
      setError(errorMessage); // Set the error message state to display the error
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    AuthenticateLoginInformation(login)
      .then(() => {
        handleResult(true);
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        handleResult(false, errorMessage);
      });
    setLogin({ email: "", password: "" }); // Clear login state
  };

  return (
    <div className="login-Page">
      <form className="login-form" onSubmit={handleSubmit}>
        <h2>Login</h2>
        {error && <p className="error-message">{error}</p>}
        <EmailInput login={login} setLogin={setLogin} />
        <PasswordInput login={login} setLogin={setLogin} />
        <button type="submit">Login</button>
        <Link to="/SignUp">
          <button type="button">Don't have an account? Sign up here</button>
        </Link>
      </form>
    </div>
  );
}

function Login() {
  return (
    <div>
      <h1><LoginForm /></h1>
    </div>
  );
}

export default Login;
