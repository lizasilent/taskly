import { React } from "react";
import "./form.css";

function Form({onAddTodo}) {
 
  const textRef = React.useRef();
  const timeRef = React.useRef();
  const timeOfDayRef = React.useRef();


   function handleSubmit(e) {
    e.preventDefault();

    onAddTodo({
        name: textRef.current.value,
        time: timeRef.current.value,
        timeofday: timeOfDayRef.current.value,
    });
   }

  return (
    <form className="form" onSubmit={handleSubmit}>
      <input ref={textRef}
        className="form__input_text"
        type="text"
        name="name"
        placeholder="Your task"
      />
      <input ref={timeRef}
        className="form__input_time"
        type="text"
        name="time"
        placeholder="Time"
        maxLength="5"
      />
      <select ref={timeOfDayRef} className="form__input_time" name="timeofday">
        <option>AM</option>
        <option>PM</option>
      </select>
      <input className="form__input_submit" type="submit" value="Add" />
    </form>
  );
}

export default Form;
