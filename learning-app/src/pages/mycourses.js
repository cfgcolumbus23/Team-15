import React from 'react';
import './courses.css';
import { RewardBar } from '../components/Rewardbar/RewardbarElement';

const user = {
    name: 'Name',
    path: 1,
    progress: 50,
    rewards: 50,
    courses: ['IT Graduation Credits','CompTIA IT Fundamentals']
}
// Example Course List
const courses = new Map([
    ['CompTIA IT Fundamentals','https://www.youtube.com/channel/UC3kFmMxz3IdLdz4TxA9a4DQ'],
    ['CompTIA A+ Certifications','https://www.comptia.org/certifications/a'],
    ['Certiport IC3 Digital Literacy','https://certiport.pearsonvue.com/Certifications/IC3/Digital-Literacy-Certification/Overview.aspx'],
    ['Certiport Entrpreneurship and Small Business','https://certiport.pearsonvue.com/Certifications/ESB/Certification/Overview.aspx'],
    ['Microsoft Office Specialist','https://support.microsoft.com/en-gb/topic/earn-a-microsoft-office-specialist-mos-certification-0885c944-167c-51ea-1cdc-8f65952bd1b8'],
    ['HTML Software Development Bootcamp','https://www.youtube.com/watch?v=F3ztn4H6Ftg'],
    ['JavaScript Software Development Bootcamp','https://www.youtube.com/watch?v=F3ztn4H6Ftg'],
    ['CSS Software Development Bootcamp','https://www.youtube.com/watch?v=F3ztn4H6Ftg'],
    ['Python Software Development Bootcamp','https://www.youtube.com/watch?v=F3ztn4H6Ftg'],
    ['eSports IT Specialist certification','https://pyramidcdc.org/smartnet'],
    ['eSports UNITY (esports gaming)','https://pyramidcdc.org/smartnet'],
    ['Software and Gaming Development','https://www.youtube.com/watch?v=F3ztn4H6Ftg'],
    ['IT Graduation Credits','https://education.ohio.gov/Topics/Ohio-s-Graduation-Requirements/Contacts-and-Resources/Industry-Recognized-Credentials/Industry-Recognized-Credentials-by-Career-Field/Information-Technology'],
]);

function FilterCourses(){
    let enrolled = new Map();
    let notenrolled = new Map();
    courses.forEach((key,value) =>{
        if(user.courses.includes(key)){
            enrolled.set(value,key);
        } else {
            notenrolled.set(value,key);
        }
    });
    let coursesList=[];
    enrolled.forEach((index,course)=>{
        coursesList.push(<p key={index}><a href={index} className="text-sm font-semibold leading-6 text-gray-900">{course}</a></p>);
    });
    let othersList=[];
    notenrolled.forEach((index,course)=>{
        othersList.push(<p key={index}><a href={index} className="text-sm font-semibold leading-6 text-gray-900">{course}</a></p>);
    });
    return(
        <div>
            <h2>My courses</h2>
            <ul>{coursesList}</ul>
            <h2>Other courses</h2>
            <ul>{othersList}</ul>
        </div>
    );   
};

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
            <FilterCourses />
            <RewardBar />
        </div>
    );
};

export default Mycourses;