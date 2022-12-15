import React from "react";
import arrowback from "../../images/back.png";
import arrownext from "../../images/front.png";
import add from "../../images/plus.png";
import "./centerMenu.css";

function CenterMenu() {
  const current = new Date();

  const date = current.getDate();
  const daysOfWeek = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  const weekDay = daysOfWeek[current.getDay()];

  return (
    <div className="middle">
      <div className="middle__header">
        <div>
          <p className="text">Today’s schedule</p>

          <div className="middle__header-left">
            <p className="text yellow">
              {weekDay} {date}{" "}
            </p>
            <div className="arrow-block">
              <img src={arrowback} alt="back"></img>
              <img src={arrownext} alt="next"></img>
            </div>
          </div>
        </div>

        <div>
          <img src={add} alt="plus"></img>
        </div>
      </div>

      <div className="list-block">
        <ul className="list">
          <li className="item active" id="middle">
            <div className="item__icon" id="middle">
              ⏰
            </div>
            <div className="item__text-block" id="middle">
              <p className="item__text_big" id="middle">
                Call doctor for tests
              </p>
              <p className="item__text_small" id="middle">
                9:00 AM
              </p>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default CenterMenu;
