import React from "react";
import "./rightMenu.css";

// import Music from "../Music/music";
import Time from "../Time/time";
import User from "../User/user";
import Ads from "../Ads/ads";
import Weather from "../Weather/weather";



function RightMenu() {


  return (
    <div className="right">
      
      <User/>
      {/* <Music/>  */}
      <Time/>
      <Weather />

      <Ads/>

    </div>
  );
}

export default RightMenu;
