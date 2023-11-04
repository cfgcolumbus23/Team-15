import React from 'react';
import './Profile.css';

class Profile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: 'John',
      lastName: 'Doe',
      age: 30,
      email: 'john.doe@example.com',
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
