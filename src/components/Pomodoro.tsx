import { useState } from "react";
import Pomomode from "./Pomomode"
import Timer from "./Timer"
import Pause from "./Pause";

const Pomodoro = () => {
  const[pMode,setPMode] = useState(0);
  const[paused,setPaused] = useState(false);
  const[cycle,setCycle] = useState(1);
  return (
    <div>
      <Pomomode setPM={setPMode} pMode={pMode}></Pomomode>
      <Timer pMode={pMode} paused={paused} cycle={cycle} setCycle={setCycle} setPMode={setPMode} setPaused={setPaused}></Timer>
      <Pause setP={setPaused} p={paused}></Pause>
      <div>#{cycle}</div>
      <div>Time to focus!</div>
    </div>
  )
}

export default Pomodoro