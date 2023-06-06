import React from 'react';
import './form.css';
import { Todo, Todos } from 'types/types';

interface Props {
  todo: Todo;
  addTodo: (todo: Todo) => Todos;
}

function Form({ todo, addTodo }: Props) {
  const handleSubmit = (e: Event) => {
    e.preventDefault();
    console.log(todo);

    addTodo({
      text: todo.text,
      time: todo.time,
      timeofday: todo.timeofday,
    });
  };

  return (
    <form className="form" onSubmit={() => handleSubmit}>
      <input
        className="form__input_text"
        type="text"
        name="text"
        placeholder="Your task"
        required
      />
      <input
        className="form__input_time"
        type="text"
        name="time"
        placeholder="Time"
        required
        maxLength={5}
      />
      <select className="form__input_time" name="timeofday">
        <option>AM</option>
        <option>PM</option>
      </select>
      <input className="form__input_submit" type="submit" value="Add" />
    </form>
  );
}

export default Form;
