import React, { useEffect, useReducer } from "react";
import TasksContext from "./tasks-context";
import { getFromStorage, setToStorage } from "../utilities/localStorage";

const defaultTasksState = { tasks: getFromStorage("tasks") || [] };

const tasksReducer = (state, action) => {
  if (action.type === "ADD_NEW_TASK") {
    return {
      tasks: [
        ...state.tasks,
        {
          id: (Math.random() * 100).toString(),
          title: action.task,
          isFinished: false,
        },
      ],
    };
  }

  if (action.type === "REMOVE_TASK") {
    return {
      tasks: state.tasks.filter((task) => task.id !== action.id),
    };
  }

  if (action.type === "UPDATE_TASK") {
    const currentTask = state.tasks.find(
      (task) => task.id === action.updatedTask.id
    );
    const currentTaskIndex = state.tasks.indexOf(currentTask);

    return {
      tasks: [
        ...state.tasks.slice(0, currentTaskIndex),
        action.updatedTask,
        ...state.tasks.slice(currentTaskIndex + 1, state.tasks.length),
      ],
    };
  }
};

const TasksProvider = (props) => {
  const [tasksState, dispatchTaskAction] = useReducer(
    tasksReducer,
    defaultTasksState
  );

  useEffect(() => {
    setToStorage("tasks", tasksState.tasks);
  }, [tasksState]);

  const addNewTaskHandler = (task) => {
    dispatchTaskAction({
      type: "ADD_NEW_TASK",
      task,
    });
  };

  const removeTaskHandler = (id) => {
    dispatchTaskAction({
      type: "REMOVE_TASK",
      id,
    });
  };

  const updateTaskHandler = (updatedTask) => {
    dispatchTaskAction({
      type: "UPDATE_TASK",
      updatedTask,
    });
  };

  const tasksContext = {
    tasks: tasksState.tasks,
    addNewTask: addNewTaskHandler,
    removeTaskItem: removeTaskHandler,
    updateTask: updateTaskHandler,
  };

  return (
    <TasksContext.Provider value={tasksContext}>
      {props.children}
    </TasksContext.Provider>
  );
};

export default TasksProvider;
