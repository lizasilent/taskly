import classNames from "classnames";
import React from "react";
import "./todolist.css";

import TodoItem from "../TodoItem/todoitem";

function TodoList({ theme, active, list }) {
  return (
    <div className={classNames("list-block", `list-block_${theme}`)}>
      <ul className="list">
        list.map(function(item){<TodoItem />})
      </ul>
    </div>
  );
}

export default TodoList;
