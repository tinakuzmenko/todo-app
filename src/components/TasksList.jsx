import React from "react";
import styled from "styled-components";
import TaskItem from "./TaskItem";
import NoTasks from "./NoTasks";

const TasksList = ({ tasks, onRemove, onChangeTask }) => {
  if (!tasks.length) return <NoTasks />;

  const sortedTasks = [...tasks].sort(
    (prevTask, currTask) => prevTask.isFinished > currTask.isFinished
  );

  return (
    <StyledTasksList>
      {sortedTasks.map((task) => (
        <TaskItem
          key={task.id}
          task={task}
          onRemove={onRemove}
          onChangeTask={onChangeTask}
        />
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
