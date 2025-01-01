import useCountdown from "../useCountdown"
import { useEffect } from "react";

interface Props{
  time: number;
  cock?: boolean;
}

const Pomodoro = ({time,cock=true}: Props) => {
  const { secondsLeft, start } = useCountdown();
  // Call start only once when the component mounts
  if(cock){
  useEffect(() => {
    cock = false;
    console.log("Pomodoro mounted");
    start(time);
  }, []);
}

  return (
    <div>Seconds left: {secondsLeft}</div>
  )
}

export default Pomodoro