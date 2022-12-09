import React from "react";

function RightMenu() {

  const current = new Date();
  const time = current.toLocaleTimeString("en-US", {
    hour: "2-digit",
    minute: "2-digit",
  });


  return (
    <div className="right">
      <div className="user">
        <div className="user__info">
          <p className="user__name">Lizaveta Silent</p>
          <p className="user__settings yellow">My settings</p>
        </div>
        <div className="user__logo"></div>
      </div>

      <div className="music">
      <div className="menu-icon"></div>
      </div>

      <div className="time">
        <div className="menu-icon"></div>
        <p className="time__description">{time}</p>
        <div className="weather">
            <div className="weather__icon"></div>
            <p className="weather__description">Now is almost Sunny</p>
        </div>
      </div>


      <div className="ads-info">
    <div className="close-icon"></div>
    <div> 
        <p className="ads-info__header">Unleash the freelance super power</p>
        <p  className="ads-info__text">Unlimited task, premium features and much more.</p>
        </div>
       
        <div className="ads-info__images">
            <div className="ads-info__img-left"></div>
            <div className="ads-info__button"></div>
        </div>
      </div>
    </div>
  );
}

export default RightMenu;
