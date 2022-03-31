import React, { useContext, useState } from "react";
import EditTaskForm from "./EditTaskForm";
import Task from "./Task";
import TasksContext from "../store/tasks-context";
import styled from "styled-components";

const TaskItem = ({ task }) => {
  const tasksCtx = useContext(TasksContext);
  const [isEditMode, setIsEditMode] = useState(false);

  const changeEditModeHandler = (isActive) => {
    setIsEditMode(isActive);
  };

  const changeTaskTitleHandler = (newTaskTitle) => {
    tasksCtx.updateTask({
      ...task,
      title: newTaskTitle,
    });
  };

  const changeIsFinishedHandler = (isFinished) => {
    tasksCtx.updateTask({
      ...task,
      isFinished,
    });
  };

  return (
    <StyledTaskItem>
      {isEditMode ? (
        <EditTaskForm
          title={task.title}
          id={task.id}
          onChangeEditMode={changeEditModeHandler}
          onTaskTitleChange={changeTaskTitleHandler}
        />
      ) : (
        <Task
          task={task}
          onChangeEditMode={changeEditModeHandler}
          onChangeTaskFinished={changeIsFinishedHandler}
        />
      )}
    </StyledTaskItem>
  );
};

const StyledTaskItem = styled.li`
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.3);
`;

export default TaskItem;
