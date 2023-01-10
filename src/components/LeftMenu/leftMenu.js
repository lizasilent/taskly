import React from "react";
import "./leftMenu.css";
import logo from "../../images/Logo2.png";

import List from "../List/list";
import CalendarLeft from "../Calendar/calendar";

function LeftMenu() {
  return (
    <div className="left">
      <div className="logo">
        <img className="logo__img" src={logo} alt="logo"></img>
      </div>

      <div className="weekly">
        <div className="weekly__header">
          <p className="weekly__header_big">Weekly Pinned</p>
          <p className="weekly__header_small">View all</p>
        </div>

        <List theme={"weekly"} />
        
        <CalendarLeft />
      </div>
    </div>
  );
}

export default LeftMenu;
