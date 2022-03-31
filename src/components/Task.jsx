import React, { useContext } from "react";
import Button from "../UI/Button";
import styled from "styled-components";
import TasksContext from "../store/tasks-context";

const Task = ({ task, onChangeEditMode, onChangeTaskFinished }) => {
  const tasksCtx = useContext(TasksContext);

  const editTaskClickHandler = () => {
    onChangeEditMode(true);
  };

  const checkboxChangeHandler = (event) => {
    onChangeTaskFinished(event.target.checked);
  };

  const removeButtonClickHandler = () => {
    tasksCtx.removeTaskItem(task.id);
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

  label {
    color: ${({ isFinished }) => (isFinished ? "#757575" : "inherit")};
    text-decoration: ${({ isFinished }) =>
      isFinished ? "line-through" : "none"};
  }
`;

export default Task;
