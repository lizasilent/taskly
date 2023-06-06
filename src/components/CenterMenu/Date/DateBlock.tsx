import React from 'react';
import { daysOfWeek, months } from 'components/constants/dates';
import back from '../../../images/back.png';
import forward from '../../../images/front.png';
import './dateBlock.css';

function DateBlock() {
  const current = new Date();

  const date = current.getDate();

  const weekDay = daysOfWeek[current.getDay()];

  const month = months[current.getMonth()];

  return (
    <div className="middle__header-left">
      <p className="text yellow">{`${month}, ${weekDay} ${date}`}</p>
      <div className="arrow-block">
        <img src={back} alt="back" />
        <img src={forward} alt="next" />
      </div>
    </div>
  );
}

export default DateBlock;
