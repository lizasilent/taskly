import React from "react";

function CenterMenu() {



    return (
       <div className="middle">

        <div className="middle__header">
        <p className="text">Today’s schedule</p>
        <p className="text yellow">Friday 28 oct</p>
        </div>

        <div className="middle__list-block">
        <ul className="middle__list">
            <li className="middle__item">
              <div className="middle__text-block">
                <p>Call doctor for tests</p>
                <p>9:00 AM</p>
              </div>
            </li>
            <li className="middle__item">
              <div className="middle__text-block">
                <p>Call doctor for tests</p>
                <p>9:00 AM</p>
              </div>
            </li>
            <li className="middle__item">
              <div className="middle__text-block">
                <p>Call doctor for tests</p>
                <p>9:00 AM</p>
              </div>
            </li>
            </ul>
        </div>

       </div>

    )
}


export default CenterMenu;