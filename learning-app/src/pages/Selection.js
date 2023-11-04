import React,{useState,useEffect} from 'react';
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
                <div className='selection-column-title'>
                    <h3>IT Helpdesk Path</h3>
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
            </div>
            <div id='selection-column-2' className='selection-column'>
                <div className='selection-column-title'>
                    <h3>Cybersecurity Path</h3>
                </div>
                <div className='selection-column-desc'>
                    <p>
                        The IT Security Path is designed to equip learners with a
                        robust understanding of information technology security
                        principles. This path covers a broad spectrum of IT
                        security aspects, including network security, data
                        protection, and compliance standards.  
                    </p>
                </div>
            </div>
            <div id='selection-column-3' className='selection-column'>
                <div className='selection-column-title'>
                    <h3>Web Development Path</h3>
                </div>
                <div className='selection-column-desc'>
                    <p>
                    The Web Development Path is a comprehensive journey through
                    the world of building and maintaining web applications. From
                    frontend to backend, this path teaches the essential skills
                    needed to develop dynamic and responsive websites.
                    </p>
                </div>
            </div>
        </div>
        </>
    );
}
export default Selection;