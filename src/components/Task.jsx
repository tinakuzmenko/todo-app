import React from "react";
import Button from "../UI/Button";
import styled from "styled-components";

const Task = ({ task, onEdit, onRemove, onTaskFinished }) => {
  const editTaskClickHandler = () => {
    onEdit();
  };

  const checkboxChangeHandler = (event) => {
    onTaskFinished(event.target.checked);
  };

  const removeButtonClickHandler = () => {
    onRemove(task.id);
  };

  return (
    <StyledTask isFinished={task.isFinished}>
      <input
        type="checkbox"
        id={task.id}
        defaultChecked={task.isFinished}
        onChange={checkboxChangeHandler}
      />
      <label htmlFor={task.id}>{task.title}</label>
      <Button type="button" onClick={editTaskClickHandler}>
        Edit task
      </Button>
      <Button type="button" onClick={removeButtonClickHandler}>
        Remove task
      </Button>
    </StyledTask>
  );
};

const StyledTask = styled.div`
  display: grid;
  grid-template-columns: auto 1fr auto auto;
  grid-column-gap: 5px;
  align-items: center;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.3);

  label {
    color: ${({ isFinished }) => (isFinished ? "#757575" : "inherit")};
    text-decoration: ${({ isFinished }) =>
      isFinished ? "line-through" : "none"};
  }
`;

export default Task;
