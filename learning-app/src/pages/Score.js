import React from 'react';
import './Score.js';
import {Link } from "react-router-dom";

function Score(props) {
    return (
        <div>
            <h1>Score: {props.score}</h1>
            <Link to="/Roadmap">
                <button class="button">Continue to Roadmap</button>
            </Link>
        </div>
    );
}

export default Score;
