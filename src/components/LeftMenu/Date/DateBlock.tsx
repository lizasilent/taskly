import React from 'react';
import { daysOfWeek, months } from 'components/constants/dates';
import back from '../../../images/back.png';
import forward from '../../../images/front.png';
import './DateBlock.css';

function DateBlock() {
  const current = new Date();

  const date = current.getDate();
  const weekDay = daysOfWeek[current.getDay()];
  const month = months[current.getMonth()];

  return (
    <div className="date__container">
      <h2 className="date__header">{`${month}, ${weekDay} ${date}`}</h2>
      <div className="date__arrow-block">
        <img src={back} alt="back" />
        <img src={forward} alt="next" />
      </div>
    </div>
  );
}

export default DateBlock;
