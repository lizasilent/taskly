import React from 'react';
import './Form.css';
import { Todo } from 'types/types';

interface Props {
  todo: Todo;
  addTodo: any;
  // eslint-disable-next-line react/no-unused-prop-types
  setTodo: any;
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
