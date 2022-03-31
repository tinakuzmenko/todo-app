import React, { useState } from "react";
import styled from "styled-components";
import Input from "../UI/Input";
import Button from "../UI/Button";

const EditTaskForm = ({ title, onFinishEdit, onTaskChange }) => {
  const [inputValue, setInputValue] = useState(title);

  const inputChangeHandler = (event) => {
    setInputValue(event.target.value);
  };

  const submitFormHandler = (event) => {
    event.preventDefault();

    onTaskChange(inputValue);

    setInputValue("");
    onFinishEdit();
  };

  const cancelButtonClickHandler = () => {
    onFinishEdit();
  };

  return (
    <StyledEditForm onSubmit={submitFormHandler}>
      <Input
        type="text"
        id="edit-t1"
        value={inputValue}
        onChange={inputChangeHandler}
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
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.3);
`;

export default EditTaskForm;
