import { React, useState } from "react";

import add from "../../images/plus.png";
import "./centerMenu.css";

import List from "../List/list";
import Form from "../Form/form";
import DateBlock from "../Date/date";

function CenterMenu() {
  const [active, setActive] = useState(false);

  function handleForm() {
    setActive(!active);
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
      {active && <Form />}

      <List theme={"middle"} active={"active"} />
    </div>
  );
}

export default CenterMenu;
