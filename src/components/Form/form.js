import React from "react";
import "./form.css";

function Form() {


  return (
    <form className="form">
      <input className="form__input_text" type="text" name="name" placeholder="Your task"/>
      <input className="form__input_time" type="text" name="name" placeholder="Time"/>
      <input className="form__input_submit" type="submit" value="Add" />
    </form>
  );
}

export default Form;
