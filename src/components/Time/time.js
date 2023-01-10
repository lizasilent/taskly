import React, { useEffect } from "react";

import "./time.css";



function Time() {

  const [time, setTime] = React.useState(new Date().toLocaleTimeString("en-US", {
    hour: "2-digit",
    minute: "2-digit",}));

  const updateTime = () => {
    setTime(new Date().toLocaleTimeString("en-US", {
      hour: "2-digit",
      minute: "2-digit",}))
      }
  
  useEffect(() => {
    setInterval(updateTime, "40000")
  });



  return (
    <div className="time">
      <div className="menu-icon"></div>
      <p className="time__description">{time}</p>

    </div>
  );
}

export default Time;
