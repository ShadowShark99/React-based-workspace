import { useEffect, useState } from "react";

interface Props{
  paused: boolean
}
export default function useCountdown({paused}: Props){
  //start with initial time of 1
  const [secondsLeft, setSecondsLeft] = useState(1);

  useEffect(() => {
    if(secondsLeft <= 0 || paused) return;

    // Set a timeout to decrease the secondsLeft by 1 after 1000 milliseconds (1 second)
    const timeout = setTimeout(() => {
      setSecondsLeft(secondsLeft - 1);
    }, 1000);
    
    // Return a cleanup function to clear the timeout if the component unmounts or secondsLeft changes
    return () => clearTimeout(timeout);
  }, [secondsLeft, paused]);

  function start(seconds: number){
    setSecondsLeft(seconds);
  }

  return { secondsLeft, start };
}

