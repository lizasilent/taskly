import React, { useState } from 'react';
import './CenterMenu.css';
import { Todo } from 'types/types';
import plus from '../../images/plus.png';
import TodoList from '../TodoList';
import Form from './Form/Form';

function CenterMenu() {
  const [active, setActive] = useState(true);
  const [todo, setTodo] = useState({ text: '', time: '', timeofday: '' });
  const [todos, setTodos] = useState<any>([]);

  const handleForm = () => {
    setActive(!active);
  };

  const addTodo = (newTodo: Todo) => {
    if (newTodo) {
      setTodos([todos, newTodo]);
      setTodo({ text: '', time: '', timeofday: '' });
    }
  };

  return (
    <div className="middle">
      <div className="middle__header">
        <p className="text">Today’s schedule</p>
        <div>
          <button type="submit" className="plus" onClick={handleForm}>
            <img src={plus} alt="plus" />
          </button>
        </div>
      </div>
      {active && <Form todo={todo} setTodo={setTodo} addTodo={addTodo} />}

      <TodoList todos={todos} />
    </div>
  );
}

export default CenterMenu;
