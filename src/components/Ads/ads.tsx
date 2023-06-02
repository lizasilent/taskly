/* eslint-disable react/button-has-type */
/* eslint-disable jsx-a11y/control-has-associated-label */
import React from 'react';
import './ads.css';

function Ads() {
  const [activity, setActivity] = React.useState(true);

  function handlePopup() {
    setActivity(false);
  }

  return (
    <div>
      {activity && (
        <div className="ads-info">
          <button className="close-icon" onClick={handlePopup} />
          <div>
            <p className="ads-info__header">
              Unleash the freelance super power
            </p>
            <p className="ads-info__text">
              Unlimited task, premium features and much more.
            </p>
          </div>

          <div className="ads-info__images">
            <div className="ads-info__img-left" />
            <div className="ads-info__button" />
          </div>
        </div>
      )}
    </div>
  );
}

export default Ads;
