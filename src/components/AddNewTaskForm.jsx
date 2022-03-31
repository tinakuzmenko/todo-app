import React, { useContext, useState } from "react";
import styled from "styled-components";
import Input from "../UI/Input";
import Button from "../UI/Button";
import TasksContext from "../store/tasks-context";

const AddNewTaskForm = () => {
  const [inputValue, setInputValue] = useState("");
  const tasksCtx = useContext(TasksContext);

  const inputChangeHandler = (event) => {
    setInputValue(event.target.value);
  };

  const submitFormHandler = (event) => {
    event.preventDefault();

    if (!inputValue) return;

    tasksCtx.addNewTask(inputValue);
    setInputValue("");
  };

  return (
    <StyledNewTaskForm onSubmit={submitFormHandler}>
      <Input
        type="text"
        id="new-task"
        name="new-task"
        placeholder="New task"
        value={inputValue}
        onChange={inputChangeHandler}
        ariaLabel="Create new task"
        required={true}
      />
      <Button type="submit" variant="primary">
        + Add
      </Button>
    </StyledNewTaskForm>
  );
};

const StyledNewTaskForm = styled.form`
  margin: 0 auto 30px;
  display: grid;
  grid-template-columns: auto auto;
  grid-column-gap: 5px;
  justify-content: center;
`;

export default AddNewTaskForm;
