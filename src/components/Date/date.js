import React from "react";

import "./date.css";
import arrowback from "../../images/back.png";
import arrownext from "../../images/front.png";

function DateBlock() {
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
    <div className="middle__header-left">
      <p className="text yellow">
      {weekDay} {date}{" "}

      </p>
      <div className="arrow-block">
        <img src={arrowback} alt="back"></img>
        <img src={arrownext} alt="next"></img>
      </div>
    </div>
  );
}

export default DateBlock;
