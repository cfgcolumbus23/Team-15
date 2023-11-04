import React,{useState,useEffect} from 'react';
import ProgressBar from 'react-bootstrap/ProgressBar';
import 'bootstrap/dist/css/bootstrap.min.css';
import './RewardbarElement.css';

const now = 11;
export const RewardBar=() =>{
    return (
        <div>
            <RewardBarClosing />
        </div>
    );
};

function RewardBarClosing() {
    const [isShown, setIsShown] = useState(true);

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
                    {data.Path1?.map((item, index)=><p>{item.moduleName}</p>)}
                </container>
                <ProgressBar now={now} label={`${now}%`} class="rewardbar" striped="true"/>
            </div>
          )}
        </div>
      );
    };

export default RewardBar;