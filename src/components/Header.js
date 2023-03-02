import React,{useState,useEffect} from 'react';
import Console from './Console';
import './Header.css';

function Header() {

  const [showHeaderBar, setShowHeaderBar] = useState(true);

  const contactHandler = () => {
    setShowHeaderBar(!showHeaderBar);
  }

  return (
    <div className="header">
      <div id="header__bar" >
        <Console />
        {/* <h3 className="header__bar__title">Frontend Developer</h3> */}
        <div className="header__bar__icons">

        </div>
      </div>

      <div className="header-logo"><span>Artifact Algo Visualisation</span></div>
      <div className="header__options">
         <a href="/path">Path Finding</a>
      </div>
   </div>
  )
}

export default Header;