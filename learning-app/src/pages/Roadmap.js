import React,{useState,useEffect} from 'react';
import { Nav } from '../components/Navbar/NavbarElements';
import './Roadmap.css';

// User information 
const user = {
    name: 'Name',
    path: 1,
    progress: 50,
    rewards: 50,
}
// Path information

// Temporary 
const isLoggedIn= true;
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
        content = <Main_Roadmap />;
    } else {
        // Add login form component
        content = <Main_Roadmap />;
    }
    return(
        <div>
            {content}
            {data.Path1?.map((item)=><p>{item.moduleName}</p>)}
            <RewardBar />
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
    </div>
    );   
};

export default Roadmap;