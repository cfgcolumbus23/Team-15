import React,{useState, useEffect} from 'react';
import { Nav } from '../components/Navbar/NavbarElements';
import { RewardBar } from '../components/Rewardbar/RewardbarElement';
import {Link } from "react-router-dom";
import './Assessment.css';

function Assessment() {

    {/* Read in JSON File */}

    const [data,setData]=useState([]);
    const getData=()=>{
        fetch('quiz.json'
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

    {/* Process Data into Content HTML blocks */}



    return (
        <div className="quiz-container">
            <h1>Initial Assessment</h1>
            <div className="quiz-questions">
                <form>
                    <ol>
                    {data.map((item, index)=><li key={`q${index}`} className="quiz-q" id={`q${index}`}>
                        <h3>{item[0]}</h3>
                        {item[1].map((option, optionIndex)=> (
                        <div key={`q${index}${optionIndex}`}>
                            <input type="radio" name={`question${index}`} id={`q${index}${optionIndex}`} value={option} onclick="alert('hello');"/>
                            <label htmlFor={`q${index}${optionIndex}`}>{option}</label>
                        </div>))}
                    </li>)}
                    </ol>
                    <Link to="/Score"><button class="button">Submit Answers</button></Link>
                </form>
            </div>
            <div id="quiz-results" className="quiz-results"></div>
            <div className="spacer"></div>
        </div>
    );
}

export default Assessment;
