import Auth from "./components/Auth";
import Pomodoro from "./components/Pomodoro";
import Title from "./components/Title"

export const App = () => {
  let pomoTime = 3600;
  return (
    <>
    <div>
    <Title></Title>
    <Auth></Auth>
    <Pomodoro time={pomoTime}></Pomodoro>
    </div>
    </>
  )
}

export default App;
