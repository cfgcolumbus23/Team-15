import React from 'react';
import './Score.js';

function Score(props) {
    return (
        <div>
            <h1>Score: {props.score}</h1>
        </div>
    );
}

export default Score;
