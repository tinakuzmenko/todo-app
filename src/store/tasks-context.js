import React from "react";

const TasksContext = React.createContext({
  tasks: [],
  addNewTask: (task) => {},
  removeTaskItem: (id) => {},
  updateTask: (updatedTask) => {},
});

export default TasksContext;
