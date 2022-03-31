import React, { useState } from "react";
import styled from "styled-components";
import Input from "../UI/Input";
import Button from "../UI/Button";

const AddNewTaskForm = ({ onAddNewTask }) => {
  const [inputValue, setInputValue] = useState("");

  const inputChangeHandler = (event) => {
    setInputValue(event.target.value);
  };

  const submitFormHandler = (event) => {
    event.preventDefault();
    onAddNewTask(inputValue);
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
