import React from "react";
import arrowback from "../images/back.png";
import arrownext from "../images/front.png";
import add from "../images/plus.png";

function CenterMenu() {
  return (
    <div className="middle">
      <div className="middle__header">

        <div>
        <p className="text">Today’s schedule</p>

        <div className="">
          <p className="text yellow">Friday 28 oct</p>
          <div className ="arrow-block">
            <img src={arrowback} alt="back"></img>
            <img src={arrownext} alt="next"></img>
          </div>
        </div>

        </div>
        
        <div>
          <img src={add} alt="plus"></img>
        </div>


       
      </div>

      <div className="middle__list-block">
        <ul className="middle__list">
          <li className="middle__item">
            <div className="middle__icon">⏰</div>
            <div className="middle__text-block">
              <p>Call doctor for tests</p>
              <p>9:00 AM</p>
            </div>
          </li>
          <li className="middle__item">
            <div className="middle__icon">⏰</div>
            <div className="middle__text-block">
              <p>Call doctor for tests</p>
              <p>9:00 AM</p>
            </div>
          </li>
          <li className="middle__item">
            <div className="middle__icon">⏰</div>
            <div className="middle__text-block">
              <p>Call doctor for tests</p>
              <p>9:00 AM</p>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default CenterMenu;
