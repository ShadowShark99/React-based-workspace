import { useState } from 'react';
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
import SubSite from './SubSite';

interface Props{
  // currSites: string[][];
  onAddSite: (sites) => void;
}

const AddSites = ({onAddSite} : Props) => {
  
  // function addSite(e: any) {
  //   e.preventDefault();
  //   const siteName = e.target.siteName.value;
  //   const siteURL = e.target.siteURL.value;
  //   setSites([...sites, {siteName, siteURL}]);
  // }

  const [siteName, setSiteName] = useState("");
  const [siteURL, setSiteURL] = useState("");
  
//const [pairs,setPairs] = useState([["poo","pee"],["theory","practice"],["biag", "blog"]]);

  return (
    <>
    <div>
      <Popup trigger={<button className="button"> Add Sites </button>} position="right center">
        <div>
          <h3> Add Sites </h3>
          
            <label> Site Name: </label>
            <input type="text" name="siteName" onChange={(e) => setSiteName(e.target.value)} />
            <label> Site URL: </label>
            <input type="text" name="siteURL" onChange={(e) => setSiteURL(e.target.value)}/>
            <SubSite onSub={() => onAddSite((sites) => [...sites, [siteName, siteURL]])}></SubSite>
          
        </div>
      </Popup>
    </div>
    </>
  )
}

export default AddSites