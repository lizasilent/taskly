import React from "react";
import logo from "../images/Logo2.png";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import useState from "react";

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

        <div className="list-block">
        <ul className="list">
          <li className="item" id="weekly">
            <div className="item__icon" id="weekly">⏰</div>
            <div className="item__text-block" id="weekly">
              <p className="item__text_big" id="weekly">Call doctor for tests</p>
              <p className="item__text_small" id="weekly">9:00 AM</p>
            </div>
          </li>
          
        </ul>
      </div>


        <Calendar className="calendar" locale={"en-EN"} />

      </div>
    </div>
  );
}

export default LeftMenu;
