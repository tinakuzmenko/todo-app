import React, { useState } from "react";
import EditTaskForm from "./EditTaskForm";
import Task from "./Task";

const TaskItem = ({ task, onRemove, onChangeTask }) => {
  const [isEditMode, setIsEditMode] = useState(false);

  const editTaskHandler = () => {
    setIsEditMode(true);
  };

  const finishEditTaskHandler = () => {
    setIsEditMode(false);
  };

  const changeTaskHandler = (newTaskTitle) => {
    onChangeTask({
      ...task,
      title: newTaskTitle,
    });
  };

  const finishTaskHandler = (isFinished) => {
    onChangeTask({
      ...task,
      isFinished,
    });
  };

  return (
    <li>
      {isEditMode ? (
        <EditTaskForm
          title={task.title}
          onFinishEdit={finishEditTaskHandler}
          onTaskChange={changeTaskHandler}
        />
      ) : (
        <Task
          task={task}
          onEdit={editTaskHandler}
          onRemove={onRemove}
          onTaskFinished={finishTaskHandler}
        />
      )}
    </li>
  );
};

export default TaskItem;
