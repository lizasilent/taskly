import React from "react";
import "./list.css"

function List({id, active}) {

return (
    <div className="list-block">
    <ul className="list">
      <li className="item" id={id}>
        <div className="item__icon" id={id}>
          ⏰
        </div>
        <div className="item__text-block" id={id}>
          <p className="item__text_big" id={id}>
            Call doctor for tests
          </p>
          <p className="item__text_small" id={id}>
            9:00 AM
          </p>
        </div>
      </li>
    </ul>
  </div>
)

}

export default List;