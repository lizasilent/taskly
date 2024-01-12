import React from 'react';
import './LeftMenu.css';
import './Calendar/Calendar.css';
import Calendar from 'react-calendar';
import DateBlock from 'components/LeftMenu/Date';
import Time from 'components/RightMenu/Time';
import Weather from 'components/RightMenu/Weather';

function LeftMenu() {
  return (
    <div className="left">
      <DateBlock />
      <div className="locales">
        <Time />
        <Weather />
      </div>

      <div className="weekly">
        <div className="weekly__header">
          <p className="weekly__header_big">Weekly Pinned</p>
          <p className="weekly__header_small">View all</p>
        </div>
        <ul className="list">
          <li className="item">
            <div className="item__icon">⏰</div>
            <div className="item__text-block">
              <p className="item__text_big">Something to do</p>
              <p className="item__text_small">11:11 AM</p>
            </div>
          </li>
        </ul>
        <Calendar
          className="calendar"
          showFixedNumberOfWeeks={false}
          locale="en-EN"
        />
      </div>
    </div>
  );
}

export default LeftMenu;
