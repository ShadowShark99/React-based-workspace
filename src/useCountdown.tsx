import { useEffect, useState } from "react";

export default function useCountdown(){
  const [secondsLeft, setSecondsLeft] = useState(0);

  useEffect(() => {
    if(secondsLeft <= 0) return;

    // Set a timeout to decrease the secondsLeft by 1 after 1000 milliseconds (1 second)
    const timeout = setTimeout(() => {
      setSecondsLeft(secondsLeft - 1);
    }, 1000);
    
    // Return a cleanup function to clear the timeout if the component unmounts or secondsLeft changes
    return () => clearTimeout(timeout);
  }, [secondsLeft]);

  function start(seconds: number){
    setSecondsLeft(seconds);
  }

  return { secondsLeft, start };
}

