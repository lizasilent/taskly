import React from 'react';
import './form.css';
import { Todo, Todos } from 'types/types';

interface Props {
  todo: Todo;
  setTodo: (e: Event) => Todo;
  addTodo: (todo: Todo) => Todos;
}

function Form({ todo, setTodo, addTodo }: Props) {
  function handleSubmit(e: Event) {
    e.preventDefault();
    console.log(todo);

    addTodo({
      text: todo.text,
      time: todo.time,
      timeofday: todo.timeofday,
    });
  }

  return (
    <form className="form" onSubmit={() => handleSubmit}>
      <input
        className="form__input_text"
        type="text"
        name="text"
        placeholder="Your task"
        required
        onChange={e => {
          setTodo({ text: e.target.value });
        }}
      />
      <input
        className="form__input_time"
        type="text"
        name="time"
        placeholder="Time"
        required
        maxLength={5}
        onChange={e => {
          setTodo({ time: e.target.value });
        }}
      />
      <select
        className="form__input_time"
        name="timeofday"
        onChange={e => {
          setTodo({ timeofday: e.target.value });
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
