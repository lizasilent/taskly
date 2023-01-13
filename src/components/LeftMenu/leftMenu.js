import React from "react";
import "./leftMenu.css";
import logo from "../../images/Logo2.png";

import CalendarLeft from "../Calendar/calendar";
import TodoList from "../TodoList/todolist";

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

        <TodoList theme={"weekly"} />
        
        <CalendarLeft />
      </div>
    </div>
  );
}

export default LeftMenu;
