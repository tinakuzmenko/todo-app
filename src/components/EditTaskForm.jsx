import React, { useState } from "react";
import styled from "styled-components";
import Input from "../UI/Input";
import Button from "../UI/Button";

const EditTaskForm = ({ id, title, onChangeEditMode, onTaskTitleChange }) => {
  const [inputValue, setInputValue] = useState(title);

  const inputChangeHandler = (event) => {
    setInputValue(event.target.value);
  };

  const submitFormHandler = (event) => {
    event.preventDefault();

    onTaskTitleChange(inputValue);

    setInputValue("");
    onChangeEditMode(false);
  };

  const cancelButtonClickHandler = () => {
    onChangeEditMode(false);
  };

  return (
    <StyledEditForm onSubmit={submitFormHandler}>
      <Input
        type="text"
        id={id}
        value={inputValue}
        onChange={inputChangeHandler}
        ariaLabel="task title input"
      />
      <Button type="submit" variant="primary">
        Edit
      </Button>
      <Button onClick={cancelButtonClickHandler} type="button">
        Cancel
      </Button>
    </StyledEditForm>
  );
};

const StyledEditForm = styled.form`
  display: grid;
  grid-template-columns: 1fr auto auto;
  grid-column-gap: 5px;
  align-items: center;
`;

export default EditTaskForm;
