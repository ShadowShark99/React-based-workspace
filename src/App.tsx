import AddSites from "./components/AddSites";
import Auth from "./components/Auth";
import Button from "./components/Button";
import Pomodoro from "./components/Pomodoro";
import Title from "./components/Title"

export const App = () => {
  let pomoTime = 3800;
  const butts = ["https://sentry.io/answers/how-do-i-create-an-html-button-that-acts-like-a-link/", "https://getbootstrap.com/docs/5.3/components/button-group/", "https://react.dev/reference/react/useEffect"];
  return (
    <>
    <div>
    <Title></Title>
    <Auth></Auth>
    <Pomodoro time={pomoTime}></Pomodoro>
    {butts.map((item) => (
      <Button>{item}</Button>
    ))}
    <AddSites></AddSites>
    </div>
    </>
  )
}

export default App;
