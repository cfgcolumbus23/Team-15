import React,{useState,useEffect} from 'react';
import { Nav } from '../components/Navbar/NavbarElements';
import './selection.css';

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
            <h2>Select a Path</h2>
        </div>
        <div className='selection-container'>
            <div id='selection-column-1' className='selection-column'>
            </div>
            <div id='selection-column-2' className='selection-column'>
            </div>
            <div id='selection-column-3' className='selection-column'>
            </div>
        </div>
        </>
    );
}
export default Selection;