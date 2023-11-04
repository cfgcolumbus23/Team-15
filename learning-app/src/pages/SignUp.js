import "./SignUp.css";
import React from "react";
import { useState, useCallback, Link } from "react";
// import DatePicker from "react-datepicker";
// import "react-datepicker/dist/react-datepicker.css";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { database } from "../Connection";
// import { auth } from "../Connection"; // Assuming Connection.js is in the src folder, outside of the pages folder.
import { ref, set } from "firebase/database";
//Call the backend to authenticate the login information
//have it return a success or failure
function SendProfileDataToDataBase(profileData) {
  set(ref(database, "users/" + profileData.email), {
    firstName: profileData.firstName,
    lastName: profileData.lastName,
    password: profileData.password,
    age: profileData.age,
    birthDate: profileData.dateOfBirth,
    email: profileData.email,
    phoneNumber: profileData.phoneNumber,
  })
    .then(() => {
      console.log("Data has been successfully stored in the database");
    })
    .catch((error) => {
      console.log("Error storing data:", error);
    });
}
// const auth = getAuth();
function SendUserDataToDataBase(profileData) {
  createUserWithEmailAndPassword(
    database,
    profileData.email,
    profileData.password
  )
    .then((userCredential) => {
      // Signed up
      const user = userCredential.user;
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
    });
  console.log("Sent");
  return true;
}

function HandleResult(success) {
  if (success) {
  } else {
    //display an error message
    console.log("Failure");
  }
}

//double verify password
function CreatePassword(profileData, setProfileData) {
  return (
    <div className="form-group">
      <label className="labelPassword">
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

function EnterFirstName(profileData, setProfileData) {
  return (
    <div className="form-group">
      <label className="labelNameFirst">
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
    <div className="form-group">
      <label className="labelNameLast">
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

function AgeCalculator(dateOfBirth, setProfileData, profileData) {
  var today = new Date();
  var birthDate = new Date(dateOfBirth);
  var userAge = today.getFullYear() - birthDate.getFullYear();
  var monthDifference = today.getMonth() - birthDate.getMonth();
  //if the month is less than 0 then the birthday has not happened yet
  //if the month is 0 then check if the day has happened yet
  //if the day is less than 0 then the birthday has not happened yet
  //if the day is 0 then the birthday is today
  //if the day is greater than 0 then the birthday has happened
  if (
    monthDifference < 0 ||
    (monthDifference === 0 && today.getDate() < birthDate.getDate())
  ) {
    userAge--;
  }
  return userAge;
}

// function EnterAge(profileData, setProfileData) {}

// function EnterDateOfBirth(profileData, setProfileData) {
//   const [startDate, setStartDate] = useState(new Date());

//   return (
//     // <div>
//     //   <label>
//     //     Date of Birth:
//     //     <DatePicker
//     //       selected={startDate}
//     //       onChange={(date) => setStartDate(date)}
//     //       dateFormat="MM/dd/yyyy"
//     //       value={profileData.dateOfBirth}
//           // onChange={(e) =>
//           //   setProfileData({ ...profileData, dateOfBirth: e.target.value })
//           // }
//         // />
//         // {/* /= {AgeCalculator(startDate, setProfileData, profileData)} */}
//         // {/* <input
//     //       type="text"
//     //       className="inputBox"
//     //       value={profileData.dateOfBirth}
//     //       onChange={(e) =>
//     //         setProfileData({ ...profileData, dateOfBirth: e.target.value })
//     //       }
//     //     /> */}
//     //   </label>
//     // </div>
//   );
// }

function EnterEmail(profileData, setProfileData) {
  return (
    <div className="form-group">
      <label className="labelEmail">
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
    <div className="form-group">
      <label className="labelPhoneNumber">
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

function ClearInputBoxes(setProfileData) {
  return setProfileData({
    firstName: "",
    lastName: "",
    password: "",
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
    SendUserDataToDataBase(profileData);
    const success = SendProfileDataToDataBase(profileData);
    HandleResult(success);
    ClearInputBoxes(setProfileData);
  };

  // clean up later into smaller functions
  return (
    <div className="signUp-body">
      <form className="signUp-Form" onSubmit={handleSubmit}>
        <h1 className="form-title">Create your profile</h1>
        {EnterFirstName(profileData, setProfileData)}
        {EnterLastName(profileData, setProfileData)}
        {EnterEmail(profileData, setProfileData)}
        {EnterPhoneNumber(profileData, setProfileData)}
        {/* {EnterDateOfBirth(profileData, setProfileData)} */}
        {/* {CreateUsername(profileData, setProfileData)} */}
        {CreatePassword(profileData, setProfileData)}
        <button type="submit" className="AccountButton">
          Create Account
        </button>
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
