import classNames from "classnames";
import React from "react";
import "./todoitem.css"


function TodoItem({theme, active}) {


return(

    <li className="item">
    <div className="item__icon">
      ⏰
    </div>
    <div className="item__text-block">
      <p className="item__text_big">
        Call doctor for tests
      </p>
      <p className="item__text_small">
        9:00 AM
      </p>
    </div>
  </li>
)

}

export default TodoItem;