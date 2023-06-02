import React from 'react';
import './rightMenu.css';

// import Music from "../Music/music";
import Time from '../Time';
import User from '../User';
import Ads from '../Ads';
import Weather from '../Weather';

function RightMenu() {
  return (
    <div className="right">
      <User />
      {/* <Music/>  */}
      <Time />
      <Weather />
      <Ads />
    </div>
  );
}

export default RightMenu;
