import React from 'react';
import './Score.js';
import {Link } from "react-router-dom";

function Score(props) {
    return (
        <div id="score-container">
            <h1>Score: 8/10{props.score}</h1>
            <h2>You passed!</h2>
            <Link to="/Roadmap">
                <button class="button">Continue to Roadmap</button>
            </Link>
        </div>
    );
}

export default Score;
