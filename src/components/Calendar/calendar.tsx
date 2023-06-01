import React from 'react';
import './calendar.css';
import Calendar from 'react-calendar';

function CalendarLeft() {
  return (
    <div>
      <Calendar
        className="calendar"
        showFixedNumberOfWeeks={false}
        locale={'en-EN'}
      />
    </div>
  );
}

export default CalendarLeft;
