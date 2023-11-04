import React from 'react';
import './courses.css';
import { RewardBar } from '../components/Rewardbar/RewardbarElement';

const user = {
    name: 'Name',
    path: 1,
    progress: 50,
    rewards: 50,
    courses: ['IT Graduation Credits','CompTIA']
}
// Example Course List
const courses = new Map([
    ['CompTIA','https://www.youtube.com/channel/UC3kFmMxz3IdLdz4TxA9a4DQ'],
    ['Software and Gaming Development','https://www.youtube.com/watch?v=F3ztn4H6Ftg'],
    ['IT Graduation Credits','https://education.ohio.gov/Topics/Ohio-s-Graduation-Requirements/Contacts-and-Resources/Industry-Recognized-Credentials/Industry-Recognized-Credentials-by-Career-Field/Information-Technology'],
]);

function UserCourses() {
    let coursesList=[];
    courses.forEach((index, course) => {
      coursesList.push(<li key={index}><a href={index}>{course}</a></li>);
    });
    return (
      <div>
        <h2>My courses</h2>
        <ul>{coursesList}</ul>
      </div>
    );
  }

// function OtherCourses(){
//     let coursesList = [];
//     others.forEach((index, course) => {
//       coursesList.push(<li key={index}><a href={index}>{course}</a></li>);
//     });
  
//     return (
//       <div>
//         <ul>{coursesList}</ul>
//       </div>
//     );
// }

// Page
function Mycourses(){
    return (
        <div>
            <UserCourses />
            <RewardBar />
        </div>
    );
};

export default Mycourses;