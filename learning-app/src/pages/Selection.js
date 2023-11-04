import React,{useState,useEffect} from 'react';
import { Nav } from '../components/Navbar/NavbarElements';
import './Roadmap.css';

function Selection() {

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


    return (
        <>
        <div className='selection'>
            <h2>Selection Page: 3 columns of paths</h2>
        </div>
        </>
    );
}
export default Selection;