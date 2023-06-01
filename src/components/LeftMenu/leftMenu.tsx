import React from 'react';
import './leftMenu.css';

import CalendarLeft from '../Calendar/Calendar';
// import TodoList from "../TodoList/todolist";

function LeftMenu() {
  return (
    <div className="left">
      <div className="logo">
        <img className="logo__img" src="images/Logo2.png" alt="logo" />
      </div>

      <div className="weekly">
        <div className="weekly__header">
          <p className="weekly__header_big">Weekly Pinned</p>
          <p className="weekly__header_small">View all</p>
        </div>

        <div className="list-block list-block_weekly">
          <ul className="list">
            <li className="item">
              <div className="item__icon">⏰</div>
              <div className="item__text-block">
                <p className="item__text_big">Something to do</p>
                <p className="item__text_small">11:11 AM</p>
              </div>
            </li>
          </ul>
        </div>

        {/* <TodoList theme={"weekly"} /> */}

        <CalendarLeft />
      </div>
    </div>
  );
}

export default LeftMenu;
