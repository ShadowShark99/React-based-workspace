import useCountdown from "../useCountdown"
import { useEffect} from "react";
import "./Timer.css";


interface Props{
  pMode: number;
  paused: boolean;
  cycle: number;
  setCycle: any;
  setPMode: any;
  setPaused: any;
}

const Timer = ({pMode,paused, cycle, setCycle,setPMode, setPaused}: Props) => {
  const { secondsLeft, start } = useCountdown({paused});
  //store time when paused

  // Call start when the component mounts and when pMode changes
  useEffect(() => {
    setPaused(true);
    console.log("Pomodoro mounted");
      //900
      let time = 900;
      if(pMode === 0)
        //1800
        time = 1800;
      else if(pMode ===1)
        //300
        time = 300;

    start(time);
    return () => {
      if(pMode !== 0)
      {
        setCycle(cycle + 1);
      }
      start(1); //prevent retriggering
    }
  }, [pMode]);

  useEffect(() => {
    if(secondsLeft <= 0)
    {
      if(pMode === 0)
        setPMode(((cycle) % 4 ===0)? 2 : 1);
      else
        setPMode(0);
      start(1); //prevent retriggering
    }
    return () => {
      
    }

  }, [pMode,secondsLeft]);

  
  
  //const displayTime = paused ? pauseTime : secondsLeft;
  const lessThan10Sec = secondsLeft%60<10;
  //(0{secondsLeft%60}):()
  return (
    <>
    <div className="curr-time">
      {Math.floor(secondsLeft/60)}:
      {lessThan10Sec && (0)}
      {secondsLeft%60} 
    </div>
    </>
  )
}

export default Timer