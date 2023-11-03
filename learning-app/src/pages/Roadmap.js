import './Roadmap.css';
import ProgressBar from 'react-bootstrap/ProgressBar';
// User information 
const user = {
    name: 'Name',
    path: 1,
    progress: 50,
    rewards: 50,
}
// Page
function Roadmap() {
    let content;
    // Display different information if user is not logged in
    if (isLoggedIn){
        content = <Main_Roadmap />
    } else {
        // Add login form component
    }
    return(
        <div>
            content
        </div>
    );
}

function Main_Roadmap(){
    <div className="Roadmap">
        <img src={logo} className="App-logo" alt="logo" />
        <h2>Welcome to Path {user.path}</h2>
        <p>
            ROADMAP PAGE.
        </p>
    </div>
}

// Progress bar
function RewardBar(){
    return <ProgressBar now={user.progress} label={`${user.progress}%`} />;
}

export default Roadmap;