import { React, useState } from "react";

import add from "../../images/plus.png";
import "./centerMenu.css";

import TodoList from "../TodoList/todolist";
import Form from "../Form/form";
import DateBlock from "../Date/date";

function CenterMenu() {
  const [active, setActive] = useState(true);

  function handleForm() {
    setActive(!active);
  }

  const [todo, setTodo] = useState({ text: "", time: "", timeofday: "" });
  const [todos, setTodos] = useState([]);

  function addTodo() {
    if (todo) {
      setTodos([...todos, todo]);
      setTodo({ text: "", time: "", timeofday: "" });
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
          <img className="plus" src={add} alt="plus" onClick={handleForm}></img>
        </div>
      </div>
      {active && <Form todo={todo} setTodo={setTodo} addTodo={addTodo} />}

      <TodoList todo={todo} todos={todos} />
    </div>
  );
}

export default CenterMenu;
