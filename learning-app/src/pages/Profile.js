import React from 'react';
import './Profile.css';
import { auth } from "./../Connection";
import { getDatabase, ref, child, get } from "firebase/database";

// const dbRef = ref(getDatabase());

// let userId = auth.currentUser.email;
// console.log(userId);
// get(child(dbRef, "users")).then((snapshot) => {
//   if (snapshot.exists()) {
//     for (var user in snapshot) {
//       if (user["email"] == userId) {
//         class Profile extends React.Component {
//           constructor(props) {
//             super(props);
//             this.state = {
//               firstName: user["firstName"],
//               lastName: user["lastName"],
//               age: user["age"],
//               email: user["email"],
//               phoneNumber: user["phoneNumber"],
//               points: 1500, // hard-coded points
//             };
//           }

//           render() {
//             return (
//               <div className="profile-container">
//                 <h1>{this.state.firstName} {this.state.lastName}</h1>
//                 <p>Age: {this.state.age}</p>
//                 <p>Email: {this.state.email}</p>
//                 <p>Phone: {this.state.phoneNumber}</p>
//                 <p>Points: {this.state.points}</p>
//               </div>
//             );
//           }
//         }
//       } else {
//         class Profile extends React.Component {
//           constructor(props) {
//             super(props);
//             this.state = {
//               firstName: 'John',
//               lastName: 'Doe',
//               age: 30,
//               email: 'user not found',
//               phoneNumber: '123-456-7890',
//               points: 1500, // hard-coded points
//             };
//           }

//           render() {
//             return (
//               <div className="profile-container">
//                 <h1>{this.state.firstName} {this.state.lastName}</h1>
//                 <p>Age: {this.state.age}</p>
//                 <p>Email: {this.state.email}</p>
//                 <p>Phone: {this.state.phoneNumber}</p>
//                 <p>Points: {this.state.points}</p>
//               </div>
//             );
//           }
//         }
//       }
//     }
//     console.log(snapshot.val());
//   } else {
//     console.log("No data available");
//   }
// }).catch((error) => {
//   console.error(error);
// });
class Profile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: 'John',
      lastName: 'Doe',
      age: 30,
      email: 'user not found',
      phoneNumber: '123-456-7890',
      points: 1500, // hard-coded points
    };
  }

  render() {
    return (
      <div className="profile-container">
        <h1>{this.state.firstName} {this.state.lastName}</h1>
        <p>Age: {this.state.age}</p>
        <p>Email: {this.state.email}</p>
        <p>Phone: {this.state.phoneNumber}</p>
        <p>Points: {this.state.points}</p>
      </div>
    );
  }
}

export default Profile;
