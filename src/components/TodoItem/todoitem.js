// import classNames from "classnames";
import React from "react";
import "./todoitem.css"


function TodoItem({index, todo}) {


return(
<>
<li className="item" id={index}>
    <div className="item__icon">
      ⏰
    </div>
    <div className="item__text-block">
      <p className="item__text_big">
        {todo.text}
      </p>
      <p className="item__text_small">
        {todo.time} {todo.timeofday}
      </p>
    </div>
  </li>
  <li className="item">
  <div className="item__icon">
    ⏰
  </div>
  <div className="item__text-block">
    <p className="item__text_big">
     Текст
    </p>
    <p className="item__text_small">
      11:11 AM
    </p>
  </div>
</li>
</>
   

)

}

export default TodoItem;