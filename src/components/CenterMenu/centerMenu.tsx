/* eslint-disable react/button-has-type */
import React, { useState } from 'react';
import './centerMenu.css';
import { Todo, Todos } from 'types/types';
import plus from '../../images/plus.png';
import TodoList from '../TodoList';
import Form from './Form/Form';
import DateBlock from './Date/DateBlock';

function CenterMenu() {
  const [active, setActive] = useState(true);

  function handleForm() {
    setActive(!active);
  }

  const [todo, setTodo] = useState({ text: '', time: '', timeofday: '' });
  const [todos, setTodos] = useState<Todos>([]);

  function addTodo(newTodo: Todo) {
    if (newTodo) {
      setTodos([...todos, newTodo]);
      setTodo({ text: '', time: '', timeofday: '' });
    }
  }

  return (
    <div className="middle">
      <div className="middle__header">
        <div>
          <p className="text">Today’s schedule</p>
          <DateBlock />
        </div>

        <div>
          <button className="plus" onClick={handleForm}>
            <img src={plus} alt="plus" />
          </button>
        </div>
      </div>
      {active && <Form todo={todo} setTodo={setTodo} addTodo={() => addTodo} />}

      <TodoList todos={todos} />
    </div>
  );
}

export default CenterMenu;
