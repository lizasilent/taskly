import React from "react";

function CenterMenu() {

const date = new Date();
const dayOfWeek = date.toString();


    return (
       <div className="middle">

        <div className="middle__header">
        <p className="text">Today’s schedule</p>
        <p className="yellow">{dayOfWeek}</p>
        </div>
        <div></div>

       </div>

    )
}


export default CenterMenu;