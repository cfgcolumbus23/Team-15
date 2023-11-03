import React,{useState,useEffect} from 'react';
import { Nav } from '../components/Navbar/NavbarElements';
import './Roadmap.css';
import ProgressBar from 'react-bootstrap/ProgressBar';
// User information 
const user = {
    name: 'Name',
    path: 1,
    progress: 50,
    rewards: 50,
}

const isLoggedIn = true;

// Page
function Roadmap() {
    {/* Read in JSON File */}
    const [data,setData]=useState([]);
    const getData=()=>{
        fetch('mock.json'
        ,{
          headers : { 
            'Content-Type': 'application/json',
            'Accept': 'application/json'
           }
        }
        )
          .then(function(response){
            {/* Console log */}
            console.log(response)
            return response.json();
          })
          .then(function(mockJson) {
            setData(mockJson);
          });
      }
      useEffect(()=>{
        getData()
      },[])

    {/* Everything Else */}
    
    let content;
    // Display different information if user is not logged in
    if (isLoggedIn){
        content = <Main_Roadmap />
    } else {
        // Add login form component
    }
    return(
        <div>
            {data.Path1?.map((item, index)=><div class="module" id={`module-${index}`}>{item.moduleName}</div>)}
        </div>
    );
}

function Main_Roadmap(){
    <div className="Roadmap">
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