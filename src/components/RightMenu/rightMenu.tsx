import React from 'react';
import './RightMenu.css';

// import Music from "../Music/music";

import User from './User';
import Ads from './Ads';

function RightMenu() {
  return (
    <div className="right">
      <User />
      {/* <Music/>  */}

      <Ads />
    </div>
  );
}

export default RightMenu;
