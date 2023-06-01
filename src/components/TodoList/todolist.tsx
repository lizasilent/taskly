import React from 'react';
import './todolist.css';

import TodoItem from '../TodoItem/todoitem';

function TodoList({ todos }) {
  // let key = Math.floor(Math.random() * 101);

  return (
    <div className="list-block">
      <ul className="list">
        {todos.map(todo => (
          <TodoItem index={todos.length} todo={todo} />
        ))}
      </ul>
    </div>
  );
}

export default TodoList;
