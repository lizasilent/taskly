import { React, useState, useEffect } from "react";

import add from "../../images/plus.png";
import "./centerMenu.css";

import TodoList from "../TodoList/todolist";
import Form from "../Form/form";
import DateBlock from "../Date/date";

function CenterMenu() {
  const [active, setActive] = useState(false);

  function handleForm() {
    setActive(!active);
  }

  const [todo, setTodo] = useState({text:"", time:"", timeofday:""});
  const [todos, setTodos] = useState([]);

  function addTodo() {
  setTodos([...todos, todo])
  setTodo({})
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
      {/* {active && <Form/>} */}

      <Form todo={todo} setTodo={setTodo} addTodo={addTodo}  />
      <TodoList />
      

    </div>
  );
}

export default CenterMenu;
