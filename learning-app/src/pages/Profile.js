import React, { useEffect, useState } from "react";
import "./Profile.css";
import { auth } from "./../Connection";
import { getDatabase, ref, child, get } from "firebase/database";

// const dbRef = ref(getDatabase());
// let userId = auth.currentUser?.email.substring(
//   0,
//   auth.currentUser.email.indexOf("@")
// );

function Profile() {
  const [user, setUser] = useState({});

  useEffect(() => {
    // get(child(dbRef, "users")).then((snapshot) => {
    //   if (snapshot.exists()) {
    //     console.log(snapshot);
    //     var user = snapshot[userId];

    //     setUser(...user, { firstName: user["firstName"] });
    //     setUser(...user, { lastName: user["lastName"] });
    //     setUser(...user, { age: user["age"] });
    //     setUser(...user, { email: user["email"] });
    //     setUser(...user, { phoneNumber: user["phoneNumber"] });
    //     setUser(...user, { points: 1500 });
    //   } else {

    const object = {
      firstName: "John",
      lastName: "Doe",
      age: 30,
      email: "user not found",
      phoneNumber: "123-456-7890",
      points: 1500,
    };

    setUser(object);
    // }
    // });
  }, []);

  return (
    <div className="profile-container">
      <h1>
        {user.firstName} {user.lastName}
      </h1>
      <p>Age: {user.age}</p>
      <p>Email: {user.email}</p>
      <p>Phone: {user.phoneNumber}</p>
      <p>Points: {user.points}</p>
    </div>
  );
}

export default Profile;
