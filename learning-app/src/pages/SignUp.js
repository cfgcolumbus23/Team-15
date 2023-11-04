import "./SignUp.css";
import React from "react";
import { useState } from "react";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
// import DatePicker from "react-datepicker";
// import "react-datepicker/dist/react-datepicker.css";
//Call the backend to authenticate the login information
//have it return a success or failure
const auth = getAuth();
createUserWithEmailAndPassword(auth, profileData.email, profileData.password)
  .then((userCredential) => {
    // Signed up 
    const user = userCredential.user;
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    // ..
  });
function SendProfileDataToDataBase() {
  console.log("Sent");
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

//double verify password
function CreatePassword(profileData, setProfileData) {
  return (
    <div>
      <label>
        Password:
        <input
          type="password"
          className="inputBox"
          value={profileData.password}
          onChange={(e) =>
            setProfileData({ ...profileData, password: e.target.value })
          }
        />
      </label>
    </div>
  );
}

function VerifyValidPassword(profileData, setProfileData) {
  return (
    <div>
      <label>
        Re-enter Password:
        <input
          type="password"
          className="inputBox"
          value={profileData.verifyPassword}
          onChange={(e) =>
            setProfileData({ ...profileData, verifyPassword: e.target.value })
          }
        />
      </label>
    </div>
  );
}

function EnterFirstName(profileData, setProfileData) {
  return (
    <div>
      <label>
        First Name:
        <input
          type="text"
          className="inputBox"
          value={profileData.firstName}
          onChange={(e) =>
            setProfileData({ ...profileData, firstName: e.target.value })
          }
        />
      </label>
    </div>
  );
}

function EnterLastName(profileData, setProfileData) {
  return (
    <div>
      <label>
        Last Name:
        <input
          type="text"
          className="inputBox"
          value={profileData.lastName}
          onChange={(e) =>
            setProfileData({ ...profileData, lastName: e.target.value })
          }
        />
      </label>
    </div>
  );
}

// function EnterAge(profileData, setProfileData) {}

function EnterDateOfBirth(profileData, setProfileData) {
  return (
    <div>
      <label>
        Date of Borth:
        <input
          type="text"
          className="inputBox"
          value={profileData.dateOfBirth}
          onChange={(e) =>
            setProfileData({ ...profileData, dateOfBirth: e.target.value })
          }
        />
      </label>
    </div>
  );
}

function EnterEmail(profileData, setProfileData) {
  return (
    <div>
      <label>
        Email:
        <input
          type="text"
          className="inputBox"
          value={profileData.email}
          onChange={(e) =>
            setProfileData({ ...profileData, email: e.target.value })
          }
        />
      </label>
    </div>
  );
}

function EnterPhoneNumber(profileData, setProfileData) {
  return (
    <div>
      <label>
        Phone Number:
        <input
          type="text"
          className="inputBox"
          value={profileData.phoneNumber}
          onChange={(e) =>
            setProfileData({ ...profileData, phoneNumber: e.target.value })
          }
        />
      </label>
    </div>
  );
}

function CreateValidPassword(profileData, setProfileData) {
  return (
    <div>
      {CreatePassword(profileData, setProfileData)}
      {VerifyValidPassword(profileData, setProfileData)}
    </div>
  );
}

function ClearInputBoxes(setProfileData) {
  return setProfileData({
    firstName: "",
    lastName: "",
    password: "",
    verifyPassword: "",
    age: "",
    dateOfBirth: "",
    email: "",
    phoneNumber: "",
  });
}

//Store the username and password
function SignUpForm() {
  const [profileData, setProfileData] = useState({
    firstName: "",
    lastName: "",
    password: "",
    verifyPassword: "",
    age: "",
    dateOfBirth: "",
    email: "",
    phoneNumber: "",
  });

  //Saves the username and password
  //Authenticates it
  //Clears the input boxes
  const handleSubmit = (e) => {
    e.preventDefault();
    const success = SendProfileDataToDataBase();
    HandleResult(success);
    ClearInputBoxes(setProfileData);
  };

  // clean up later into smaller functions
  return (
    <div className="signup-Page">
      <form className="signUp-Form" onSubmit={handleSubmit}>
        <h2>Create your profile</h2>
        {EnterLastName(profileData, setProfileData)}
        {EnterEmail(profileData, setProfileData)}
        {EnterPhoneNumber(profileData, setProfileData)}
        {EnterDateOfBirth(profileData, setProfileData)}
        {CreateValidPassword(profileData, setProfileData)}
        <button type="submit">Create Account</button>
      </form>
    </div>
  );
}

//Needs to add a submit button
//Needs to add a "dont have a account yet? sign up here button that directs to the sign up page"

function SignUp() {
  return (
    <div>
      <h1> {SignUpForm()}</h1>
    </div>
  );
}

export default SignUp;
