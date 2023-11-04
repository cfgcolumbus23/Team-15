import React from "react";
import "./mycourses.css";
import { RewardBar } from "../components/Rewardbar/RewardbarElement";

const user = {
    name: 'Name',
    path: 1,
    progress: 50,
    rewards: 50,
    courses: ['IT Graduation Credits','CompTIA IT Fundamentals']
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

// function UserCourses() {
//     let coursesList=[];
//     courses.forEach((index, course) => {
//       coursesList.push(<p key={index}><a href={index} className="text-sm font-semibold leading-6 text-gray-900">{course}</a></p>);
//     });
  
//     return (
//     <div className="min-w-0 flex-auto">
//         <h2>My courses</h2>
//         <ul>{coursesList}</ul>
//     </div>
//     );
//   }

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
