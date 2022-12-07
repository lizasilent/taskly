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
          <p className="weekly__header-big">Weekly Pinned</p>
          <p className="weekly__header-small">View all</p>
        </div>

        <div className="list-block">
        <ul className="list">
          <li className="item">
            <div className="item__icon item__icon_weekly">⏰</div>
            <div className="weekly__item item__text-block">
              <p className="weekly__text text_big">Call doctor for tests</p>
              <p className="weekly__text text_small">9:00 AM</p>
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
