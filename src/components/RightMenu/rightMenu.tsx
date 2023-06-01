import React from "react";
import "./rightMenu.css";

// import Music from "../Music/music";
import Time from "../Time/Time";
import User from "../User/User";
import Ads from "../Ads/Ads";
import Weather from "../Weather/Weather";

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
