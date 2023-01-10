import React from "react";
import "./time.css";

function Time() {
  const current = new Date();
  const time = current.toLocaleTimeString("en-US", {
    hour: "2-digit",
    minute: "2-digit",
  });

  return (
    <div className="time">
      <div className="menu-icon"></div>
      <p className="time__description">{time}</p>
      <div className="weather">
        <div className="weather__icon"></div>
        <p className="weather__description">Now is almost Sunny</p>
      </div>
    </div>
  );
}

export default Time;
