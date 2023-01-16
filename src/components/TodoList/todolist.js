import classNames from "classnames";
import React from "react";
import "./todolist.css";

import TodoItem from "../TodoItem/todoitem";

function TodoList({ theme, todos}) {
  let key = Math.floor(Math.random() * 101);

  return (
    <div className={classNames("list-block", `list-block_${theme}`)}>
      
      <ul className="list">
        {
        
        todos.map((todo) => (
          <TodoItem index={key} todo={todo} />
        ))}
      </ul>
    </div>
  );
}

export default TodoList;
