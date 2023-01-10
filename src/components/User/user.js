import React from "react";
import "./user.css";

function User() {
  return (
    <div className="user">
      <div className="user__info">
        <p className="user__name">Lizaveta Silent</p>
        <p className="user__settings yellow">My settings</p>
      </div>
      <div className="user__logo"></div>
    </div>
  );
}

export default User;
