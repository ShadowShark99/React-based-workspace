
import { useState } from 'react';
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';

const AddSites = () => {
  const [sites, setSites] = useState([]);
  const [siteName, setSiteName] = useState("");
  const [siteURL, setSiteURL] = useState("");

  function addSite(e: any) {
    e.preventDefault();
    const siteName = e.target.siteName.value;
    const siteURL = e.target.siteURL.value;
    setSites([...sites, {siteName, siteURL}]);
  }
  
  return (
    <>
    <div>

    </div>
    <div>
      <Popup trigger={<button className="button"> Add Sites </button>} position="right center">
        <div>
          <h3> Add Sites </h3>
          <form>
            <label> Site Name: </label>
            <input type="text" name="siteName" onChange={(e) => setSiteName(e.target.value)} />
            <label> Site URL: </label>
            <input type="text" name="siteURL" onChange={(e) => setSiteURL(e.target.value)}/>
            <button type="submit"> Add Site </button>
          </form>
        </div>
      </Popup>
    </div>
    </>
  )
}

export default AddSites