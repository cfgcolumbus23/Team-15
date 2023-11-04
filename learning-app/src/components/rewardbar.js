import ProgressBar from 'react-bootstrap/ProgressBar';
import 'bootstrap/dist/css/bootstrap.min.css';

const RewardBar=() =>{
    return (
        <div>
        <container class="barlabel">
            <p></p>
        </container>
        <ProgressBar now={now} label={`${now}%`} class="rewardbar"/>
        </div>
    );
};
export default RewardBar;