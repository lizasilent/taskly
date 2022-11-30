import React from "react";
import logo from "../images/Logo2.png";


function LeftMenu() {
    return (
       <div className="left">
        <div className="logo">
            <img className="logo__img" src={logo} alt="logo"></img>
        </div>


        <div className="weekly">

            <div className="weekly__header">
                <p className="weekly__header-big">Weekly Pinned</p>
                <p className="weekly__header-small">View all</p>
            </div>


        </div>
        <div className="calendar"></div>
       </div>

    )
}


export default LeftMenu;