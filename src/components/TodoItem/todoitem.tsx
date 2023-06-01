import React from 'react';
import './todoitem.css';
import { Todo } from 'types/types';

interface Props {
  todo: Todo;
}

function TodoItem({ todo }: Props) {
  return (
    <li className="item">
      <div className="item__icon">⏰</div>
      <div className="item__text-block">
        <p className="item__text_big">{todo.text}</p>
        <p className="item__text_small">
          {todo.time} {todo.timeofday}
        </p>
      </div>
    </li>
  );
}

export default TodoItem;
