import { useState } from "react";
import AddSites from "./components/AddSites";
import Auth from "./components/Auth";
//import Button from "./components/Button";
import Pomodoro from "./components/Pomodoro";
import Title from "./components/Title"
import SiteList from "./components/SiteList";
import ToDo from "./components/ToDo";

const App = () => {
  let pomoTime = 3800;
  //set states
  const [sites,setSites] = useState([["How To React","https://react.dev/learn/thinking-in-react"]]);

  // const handleAddSite = () => setSites([...sites, [siteName,siteURL]]);

  //test with dummy values
  //  const handleSetSN = (e) => setSiteName("SiteName");
  //  const handleSetSU = (e) => setSiteURL("Url");
  //  const handleSetSN = (e) => setSiteName(e.target.value);
  //  const handleSetSU = (e) => setSiteURL(e.target.value);
  //const butts = ["https://sentry.io/answers/how-do-i-create-an-html-button-that-acts-like-a-link/", "https://getbootstrap.com/docs/5.3/components/button-group/", "https://react.dev/reference/react/useEffect"];
  return (
    <>
    <div>
    <Title></Title>
    <Auth></Auth>
    <Pomodoro time={pomoTime}></Pomodoro>
    <AddSites onAddSite={setSites }></AddSites>
    <SiteList siteL={sites}></SiteList>
    <ToDo></ToDo>
    </div>
    </>
  )
}

export default App;
