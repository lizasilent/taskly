import { React } from "react";
import "./form.css";

function Form({ todo, setTodo, addTodo }) {

  function handleSubmit(e) {
    e.preventDefault();
    addTodo({
      text: todo.text,
      time: todo.time,
      timeofday: todo.timeofday,
    });
  }




  return (
    <form className="form" onSubmit={handleSubmit}>
      <input
        className="form__input_text"
        type="text"
        name="text"
        placeholder="Your task"
        onChange={(e) => {
          setTodo({text:e.target.value});
        }}
      />
      <input
        className="form__input_time"
        type="text"
        name="time"
        placeholder="Time"
        maxLength="5"
        onChange={(e) => {
          setTodo({time: e.target.value});
        }}
      />
      <select
        className="form__input_time"
        name="timeofday"
        onChange={(e) => {
          setTodo({timeofday:e.target.value});
        }}
      >
        <option>AM</option>
        <option>PM</option>
      </select>
      <input className="form__input_submit" type="submit" value="Add" />
    </form>
  );
}

export default Form;
