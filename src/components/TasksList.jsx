import React, { useContext } from "react";
import styled from "styled-components";
import TaskItem from "./TaskItem";
import NoTasks from "./NoTasks";
import TasksContext from "../store/tasks-context";

const TasksList = () => {
  const tasksCtx = useContext(TasksContext);

  if (!tasksCtx.tasks.length) return <NoTasks />;

  const sortedTasks = [...tasksCtx.tasks].sort((prevTask, currTask) => {
    if (prevTask.isFinished === currTask.isFinished) return 0;

    return prevTask.isFinished ? 1 : -1;
  });

  return (
    <StyledTasksList>
      {sortedTasks.map((task) => (
        <TaskItem key={task.id} task={task} />
      ))}
    </StyledTasksList>
  );
};

const StyledTasksList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  display: grid;
  grid-row-gap: 5px;
`;

export default TasksList;
