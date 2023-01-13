import { React, useState } from "react";

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

  const [list, setList] = useState([]);

function addTodoItem (item) {
    setList((prevList) => [...prevList, item]);
    };

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
      {active && <Form onAddTodo={addTodoItem} />}

      <TodoList theme={"middle"} active={"active"} list={list} />
    </div>
  );
}

export default CenterMenu;
