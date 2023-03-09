import React, { useState } from "react";

import Button from "../../UI/Button/Button";
import "./TaskInput.css";

const TaskInput = (props) => {
  const [inputText, setInputText] = useState("");

  const taskInputChangeHandler = (event) => {
    setInputText(event.target.value);
  };

  const formSubmitHandler = (event) => {
    event.preventDefault();

    if (inputText.trim().length === 0) {
      return;
    }
    props.onAddTask(inputText);
  };

  return (
    <form onSubmit={formSubmitHandler}>
      <div className="form-control">
        <label>Завдання</label>
        <input type="text" onChange={taskInputChangeHandler} />
      </div>
      <Button type="submit">Додати завдання</Button>
    </form>
  );
};

export default TaskInput;
