import React from 'react';
import { Nav } from '../components/Navbar/NavbarElements';
import './Roadmap.css';
import ProgressBar from 'react-bootstrap/ProgressBar';

// User information 
const user = {
    name: 'Name',
    path: 1,
    progress: 50,
    rewards: 50,
};
// Temporary 
const isLoggedIn= true;
// Page
function Roadmap() {
    let content;
    // Display different information if user is not logged in
    if (isLoggedIn){
        content = <Main_Roadmap />;
    } else {
        // Add login form component
    }
    return(
        <div>
            content
        </div>
    );
};

function Main_Roadmap(){
    return(
    <div className="Roadmap">
        <Nav />
        <h2>Welcome to Path {user.path}</h2>
        <p>
            Roadmap Page
        </p>
        <ProgressBar now={user.progress} label={`${user.progress}%`} class="rewardbar" />
    </div>
    );   
};

export default Roadmap;