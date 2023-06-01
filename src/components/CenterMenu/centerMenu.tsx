/* eslint-disable react/button-has-type */
import React, { useState } from 'react';
import './centerMenu.css';

import TodoList from '../TodoList';
import Form from '../Form/Form';
import DateBlock from '../Date/Date';

function CenterMenu() {
  const [active, setActive] = useState(true);

  function handleForm() {
    setActive(!active);
  }

  const [todo, setTodo] = useState({ text: '', time: '', timeofday: '' });
  const [todos, setTodos] = useState([]);

  function addTodo() {
    if (todo) {
      setTodos([...todos, todo]);
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
          <button onClick={handleForm}>
            <img className="plus" src="images/plus.png" alt="plus" />
          </button>
        </div>
      </div>
      {active && <Form todo={todo} setTodo={setTodo} addTodo={() => addTodo} />}

      <TodoList todo={todo} todos={todos} />
    </div>
  );
}

export default CenterMenu;
