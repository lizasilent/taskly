import React from "react";

function RightMenu() {
  return (
    <div className="right">
      <div className="user">
        <div className="user__info">
          <p className="user__name">Lizaveta Silentova</p>
          <p className="user__settings yellow">My settings</p>
        </div>
        <div className="user__logo"></div>
      </div>

      <div className="music"></div>
      <div className="time">
        <div className="weather"></div>
      </div>


      <div className="ads-info">
    <div className="close-icon"></div>
    <div> 
        <p className="ads-info__header">Unsleash the freelance super power</p>
        <p  className="ads-info__text">Unlimited task, premium features and much more.</p>
        </div>
       
        <div className="ads-info__images">
            <div className="ads-info__img-left"></div>
            <button className="ads-info__button"></button>
        </div>
      </div>
    </div>
  );
}

export default RightMenu;
