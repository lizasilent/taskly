import React from 'react';
import './date.css';

function DateBlock() {
  const current = new Date();

  const date = current.getDate();

  const daysOfWeek = [
    'Sunday',
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
  ];

  const weekDay = daysOfWeek[current.getDay()];

  const months = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ];

  const month = months[current.getMonth()];

  return (
    <div className="middle__header-left">
      <p className="text yellow">{`${month}, ${weekDay} ${date}`}</p>
      <div className="arrow-block">
        <img src="images/back.png" alt="back" />
        <img src="images/front.png" alt="next" />
      </div>
    </div>
  );
}

export default DateBlock;
