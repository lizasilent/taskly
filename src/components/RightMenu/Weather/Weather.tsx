import React from 'react';
import './Weather.css';

function Weather() {
  const city = 'Belgrade';

  return (
    <div className="weather">
      <div className="weather__icon" />
      <p className="weather__description">Now is almost Sunny in {city}</p>
    </div>
  );
}

export default Weather;
