import React,{useState,useEffect} from 'react';
import ProgressBar from 'react-bootstrap/ProgressBar';
import 'bootstrap/dist/css/bootstrap.min.css';
import './RewardbarElement.css';

const now = 50;
export const RewardBar=() =>{
    return (
        <div>
            <RewardBarClosing />
        </div>
    );
};

function RewardBarClosing() {
    const [isShown, setIsShown] = useState(true);

    const handleClick = event => {
    // toggle shown state when clicked
    setIsShown(current => !current);
    };
    return (
        <div>
    
          {/* Show elements on click*/}
          {isShown && (
            <div class="rewarddiv">
                <container class="barlabel">
                    <p>Module 1</p>
                    <p>Module 2</p>
                    <p>Module 3</p>
                    <p>Module 4</p>
                    <p>Prize</p>
                </container>
                <ProgressBar now={now} label={`${now}%`} class="rewardbar" striped="true"/>
                <button onClick={handleClick} class="xbutton">x</button>
            </div>
          )}
        </div>
      );
    };

export default RewardBar;