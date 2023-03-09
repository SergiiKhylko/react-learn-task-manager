import React, { useState } from "react";

import Button from "../../UI/Button/Button";
import "./TaskInput.css";

const TaskInput = (props) => {
  const [inputText, setInputText] = useState("");
  const [isInputValid, setInputValid] = useState(true);

  const taskInputChangeHandler = (event) => {
    if (event.target.value.trim().length > 0) {
      setInputValid(true);
    }
    setInputText(event.target.value);
  };

  const formSubmitHandler = (event) => {
    event.preventDefault();

    if (inputText.trim().length === 0) {
      setInputValid(false);
      return;
    }
    props.onAddTask(inputText);
  };

  return (
    <form onSubmit={formSubmitHandler}>
      <div className={`form-control ${!isInputValid ? "invalid" : ""}`}>
        <label>
          Завдання
        </label>
        <input
          type="text"
          onChange={taskInputChangeHandler}
        />
      </div>
      <Button type="submit">Додати завдання</Button>
    </form>
  );
};

export default TaskInput;
