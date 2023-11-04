import React,{useState, useEffect} from 'react';
import { Nav } from '../components/Navbar/NavbarElements';
import { RewardBar } from '../components/Rewardbar/RewardbarElement';
import './Assessment.css';

function Assessment() {

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

    {/* Process Data into Content HTML blocks */}
    
    return (
        <div class="quiz-container">
            <h1>Quiz Title</h1>
            <div class="quiz-questions">
                <form>
                    <ol>
                        <li>
                            <h3>Question 1</h3>
                            <div>
                                <input type="radio" name="question1" id="q1a" value="a" />
                                <label for="q1a">Option A</label>
                            </div>
                            <div>
                                <input type="radio" name="question1" id="q1b" value="b" />
                                <label for="q1b">Option B</label>
                            </div>
                            <div>
                                <input type="radio" name="question1" id="q1c" value="c" />
                                <label for="q1c">Option C</label>
                            </div>
                        </li>
                        <li>
                            <h3>Question 2</h3>
                            <div>
                                <input type="radio" name="question2" id="q2a" value="a" />
                                <label for="q2a">Option A</label>
                            </div>
                            <div>
                                <input type="radio" name="question2" id="q2b" value="b" />
                                <label for="q2b">Option B</label>
                            </div>
                            <div>
                                <input type="radio" name="question2" id="q2c" value="c" />
                                <label for="q2c">Option C</label>
                            </div>
                        </li>
                    </ol>
                    <button type="submit">Submit Answers</button>
                </form>
            </div>
        </div>
    );
}

export default Assessment;
