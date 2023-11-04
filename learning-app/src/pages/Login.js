import "./Login.css";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { auth } from "../Connections";
import { signInWithEmailAndPassword } from "firebase/auth";

function AuthenticateLoginInformation(login) {
  return signInWithEmailAndPassword(auth, login.email, login.password);
}

function EmailInput({ login, setLogin }) {
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
