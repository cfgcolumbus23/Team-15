import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import "./Homepage.css";


const navigation = [
  { name: 'Homepage', href: './', current: true },
  { name: 'Roadmap', href: './Roadmap', current: false },
];


const user = {
  name: 'Tom Cook',
  email: 'tom@example.com',
  imageUrl:
    'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
};


const userNavigation = [
  { name: 'Your Profile', href: '#' },
  { name: 'Settings', href: '#' },
  { name: 'Sign out', href: '#' },
];


export default function Home() {
  const [isUserLoggedIn, setUserLoggedIn] = useState(true);


  return (
    <>
      <Navbar navigation={navigation} user={user} userNavigation={userNavigation} isUserLoggedIn={isUserLoggedIn} />
      <div className='selection'>
        <h1>Select a Path</h1>
      </div>
      <div className='selection-container'>
        <div id='selection-column-1' className='selection-column'>
          <div className='selection-column-title'>
            <h2>IT Helpdesk Path</h2>
          </div>
          <div className='selection-column-desc'>
            <p>
              The IT Helpdesk Path is designed to prepare learners for
              roles that involve providing technical support and
              troubleshooting services to end-users. This path combines
              customer service skills with technical expertise to address
              computer software, hardware, and network issues.
            </p>
          </div>
          <div className='selection-column-career'>
            <h3>Career Info:</h3>
            <p>Helpdesk Technicians - $50k</p>
            <p>Support Analysts - $60k</p>
          </div>
          <button className='selection-column-button'>Start Path</button>
        </div>
        <div id='selection-column-2' className='selection-column'>
          <div className='selection-column-title'>
            <h2>Cybersecurity Path</h2>
          </div>
          <div className='selection-column-desc'>
            <p>
              The Cybersecurity Path is designed to equip learners with a
              robust understanding of information technology security
              principles. This path covers a broad spectrum of IT
              security aspects, including network security, data
              protection, and compliance standards.
            </p>
          </div>
          <div className='selection-column-career'>
            <h3>Career Info:</h3>
            <p>Security Analyst - $70k</p>
            <p>Penetration Tester - $80k</p>
          </div>
          <button className='selection-column-button'>Start Path</button>
        </div>
        <div id='selection-column-3' className='selection-column'>
          <div className='selection-column-title'>
            <h2>Web Development Path</h2>
          </div>
          <div className='selection-column-desc'>
            <p>
              The Web Development Path is a comprehensive journey through
              the world of building and maintaining web applications. From
              frontend to backend, this path teaches the essential skills
              needed to develop dynamic and responsive websites.
            </p>
          </div>
          <div className='selection-column-career'>
            <h3>Career Info:</h3>
            <p>Front-End Developer - $80k</p>
            <p>Back-End Developer - $80k</p>
          </div>
          <button className='selection-column-button'>Start Path</button>
        </div>
      </div>
    </>
  );
}


