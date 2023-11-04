import React,{useState, useEffect} from 'react';
import { Nav } from '../components/Navbar/NavbarElements';
import { RewardBar } from '../components/Rewardbar/RewardbarElement';
import './Assessment.css';

function checkAnswers() {
    console.log("HEllo!");
}

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
                        <div>
                            <input type="radio" name="question1" id={`q${index}a`} value="a" />
                            <label htmlFor={`q${index}a`}>{item[1][0]}</label>
                        </div>
                        <div>
                            <input type="radio" name="question1" id={`q${index}b`} value="b" />
                            <label htmlFor={`q${index}a`}>{item[1][1]}</label>
                        </div>
                        <div>
                            <input type="radio" name="question1" id={`q${index}c`} value="c" />
                            <label htmlFor={`q${index}a`}>{item[1][2]}</label>
                        </div>
                        <div>
                            <input type="radio" name="question1" id={`q${index}d`} value="d" />
                            <label htmlFor={`q${index}a`}>{item[1][3]}</label>
                        </div>
                    </li>)}
                    </ol>
                    <button type="check" onClick={checkAnswers}>Check Answers</button>
                </form>
            </div>
            <div className="quiz-results"></div>
            <div className="spacer"></div>
        </div>
    );
}

export default Assessment;
