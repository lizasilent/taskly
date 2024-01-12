import React from 'react';
import './Todolist.css';

import { Todos } from 'types/types';
import TodoItem from '../TodoItem';

function TodoList({ todos }: Todos) {
  const key = Math.floor(Math.random() * 101);

  return (
    <div className="list-block">
      <ul className="list">
        {todos.map(todo => (
          <TodoItem key={key} todo={todo} />
        ))}
      </ul>
    </div>
  );
}

export default TodoList;
