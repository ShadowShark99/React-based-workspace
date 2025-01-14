import { useState } from "react";
import Pomomode from "./Pomomode"
import Timer from "./Timer"
import Pause from "./Pause";

interface Props{
  time0: any;
}
const Pomodoro = ({time0}:Props) => {
  const[pMode,setPMode] = useState(0);
  const[paused,setPaused] = useState(false);
  return (
    <div>
      <Pomomode setPM={setPMode}></Pomomode>
      <Timer time={time0} pMode={pMode} paused={paused}></Timer>
      <Pause setP={setPaused} p={paused}></Pause>
    </div>
  )
}

export default Pomodoro