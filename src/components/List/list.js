import classNames from "classnames";
import React from "react";
import "./list.css"

function List({theme, active}) {

return (
    <div className={classNames("list-block", `list-block_${theme}`)}>
    <ul className="list">
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
    </ul>
  </div>
)

}

export default List;