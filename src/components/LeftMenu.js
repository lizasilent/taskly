import React from "react";
import logo from "../images/Logo2.png";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";

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

        <div className="weekly__list-block">
          <ul className="weekly__list">
            <li className="weekly__item">
              <div className="item__text-block">
                <p>Call doctor for tests</p>
                <p>15 Mar 2022 - 9:00 AM</p>
              </div>
            </li>

            <li className="weekly__item">
              <div className="item__text-block">
                <p>Masmas’s bday</p>
                <p>15 Mar 2022 - 9:00 AM</p>
              </div>
            </li>

            <li className="weekly__item add">
              <div className="item__text-block">
                <p>Add new weekly pin</p>
                <p></p>
              </div>
            </li>
          </ul>
        </div>
        <Calendar />
      </div>
    </div>
  );
}

export default LeftMenu;
