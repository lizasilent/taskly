import React from "react";
import "./rightMenu.css";

// import Music from "../Music/music";
import Time from "../Time/time";
import User from "../User/user";
import Ads from "../Ads/ads";




function RightMenu() {
  

  return (
    <div className="right">
      
      <User/>
      {/* <Music/>  */}
      <Time/>
      <Ads/>

    </div>
  );
}

export default RightMenu;
