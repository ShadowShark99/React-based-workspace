import useCountdown from "../useCountdown"
import { useEffect, useState } from "react";
import "./Timer.css";


interface Props{
  time: number;
  pMode: number;
  paused: boolean;
}

const Timer = ({time,pMode,paused}: Props) => {
  const { secondsLeft, start } = useCountdown();
  //store time when paused
  const [pauseTime, setPauseTime] = useState(0);
  
  // Call start only once when the component mounts
  useEffect(() => {
    console.log("Pomodoro mounted");
      time = 900;
      if(pMode === 0)
        time = 1800;
      else if(pMode ===1)
        time = 300;

      

    start(time);
  }, [pMode]);

  useEffect(() => {
    if(paused)
    {
      setPauseTime(secondsLeft); 
    }
    else{
      start(pauseTime);
    }
  },[paused]);
  
  const displayTime = paused ? pauseTime : secondsLeft;
  const lessThan10Sec = displayTime%60<10;
  //(0{secondsLeft%60}):()
  return (
    <div className="curr-time">
      {Math.floor(displayTime/60)}:
      {lessThan10Sec && (0)}
      {displayTime%60} 
    </div>
  )
}

export default Timer