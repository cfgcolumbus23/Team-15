import React,{useState,useEffect} from 'react';
import './Roadmap.css';
import { RewardBar } from '../components/Rewardbar/RewardbarElement';

// User information 
const user = {
  name: 'Name',
  path: 1,
  progress: 50,
  rewards: 50,
  courses: ['IT','Microsoft Excel']
}

// Path information

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
        content = <Main_Roadmap />;
    }
    return(
        <div>
          {content}
        </div>
    );
};

function Main_Roadmap(){
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
    return(
    <div className="Roadmap">
        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@24,400,0,0" />
        <div class="module-title"><h2>Welcome to Path {user.path}</h2></div>
            <div class="module-container">
            {data.Path1?.map((item, index)=><div class="module-card" id={`module-${index}`}>
                <div class="module-card-text">
                    <h3>{item.moduleName}</h3>
                    <p>Reward: ${item.reward}</p>
                </div>
                <div class="module-card-icon">
                    <span id={(item.complete=='True') ? 'module-card-icon-check' : 'module-card-icon-box'} class="material-symbols-outlined">{(item.complete == 'True') ? 'check_box' :'play_circle'}</span>
                    {(item.complete=='True') ? <p>Complete</p> : <p>Start</p>}
                </div>
                </div>)}
        </div>
        <RewardBar />
    </div>
    );   
};

export default Roadmap;