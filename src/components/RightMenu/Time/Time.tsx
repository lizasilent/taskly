import React, { useEffect, useState } from 'react';
import './Time.css';

function Time() {
  const [time, setTime] = useState(
    new Date().toLocaleTimeString('en-US', {
      hour: '2-digit',
      minute: '2-digit',
    }),
  );

  const updateTime = () => {
    setTime(
      new Date().toLocaleTimeString('en-US', {
        hour: '2-digit',
        minute: '2-digit',
      }),
    );
  };

  useEffect(() => {
    setInterval(updateTime, 40000);
  });

  return <div className="time">{time}</div>;
}

export default Time;
