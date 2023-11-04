import React from "react";
import "./Profile.css";
import { auth } from "./../Connection";
import { getDatabase, ref, child, get } from "firebase/database";

const dbRef = ref(getDatabase());
let userId = auth.currentUser.email.substring(
  0,
  auth.currentUser.email.indexOf("@")
);

console.log(userId);
get(child(dbRef, "users")).then((snapshot) => {
  class Profile extends React.Component {
    constructor(props) {
      super(props);
      if (snapshot.exists()) {
        var user = snapshot[userId];

        this.state = {
          firstName: user["firstName"],
          lastName: user["lastName"],
          age: user["age"],
          email: user["email"],
          phoneNumber: user["phoneNumber"],
          points: 1500, // hard-coded points
        };
      }

      return (
        <div className="profile-container">
          <h1>
            {this.state.firstName} {this.state.lastName}
          </h1>
          <p>Age: {this.state.age}</p>
          <p>Email: {this.state.email}</p>
          <p>Phone: {this.state.phoneNumber}</p>
          <p>Points: {this.state.points}</p>
        </div>
      );
    }
    // render() {

    // }
  }
});
//       } else {
//         class Profile extends React.Component {
//           constructor(props) {
//             super(props);
//             this.state = {
//               firstName: "John",
//               lastName: "Doe",
//               age: 30,
//               email: "user not found",
//               phoneNumber: "123-456-7890",
//               points: 1500, // hard-coded points
//             };
//           }

//           render() {
//             return (
//               <div className="profile-container">
//                 <h1>
//                   {this.state.firstName} {this.state.lastName}
//                 </h1>
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
// })
// .catch((error) => {
//   console.error(error);
// });

// //----------Uncomment later if not working
// class Profile extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       firstName: "John",
//       lastName: "Doe",
//       age: 30,
//       email: "user not found",
//       phoneNumber: "123-456-7890",
//       points: 1500, // hard-coded points
//     };
//   }

//   render() {
//     return (
//       <div className="profile-container">
//         <h1>
//           {this.state.firstName} {this.state.lastName}
//         </h1>
//         <p>Age: {this.state.age}</p>
//         <p>Email: {this.state.email}</p>
//         <p>Phone: {this.state.phoneNumber}</p>
//         <p>Points: {this.state.points}</p>
//       </div>
//     );
//   }
// }

export default Profile;
