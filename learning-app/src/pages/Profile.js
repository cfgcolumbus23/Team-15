import React from 'react';

class Profile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: 'John',
      lastName: 'Doe',
      age: 30,
      email: 'john.doe@example.com',
      phoneNumber: '123-456-7890'
    };
  }

  render() {
    return (
      <div>
        <h1>Profile</h1>
        <h1>{this.state.firstName} {this.state.lastName}</h1>
        <p>Age: {this.state.age}</p>
        <p>Email: {this.state.email}</p>
        <p>Phone: {this.state.phoneNumber}</p>
      </div>
    );
  }
}

export default Profile;