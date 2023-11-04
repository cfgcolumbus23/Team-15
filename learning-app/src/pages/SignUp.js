import "./SignUp.css";
import React from "react";
import { useState } from "react";
// import DatePicker from "react-datepicker";
// import "react-datepicker/dist/react-datepicker.css";
//Call the backend to authenticate the login information
//have it return a success or failure
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

function ClearInputBoxes(setProfileData) {
  return setProfileData({
    firstName: "",
    lastName: "",
    username: "",
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
    username: "",
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
        {/* //add in the paramter call */}
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
