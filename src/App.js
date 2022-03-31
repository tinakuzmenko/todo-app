import Header from "./UI/Header";
import AddNewTaskForm from "./components/AddNewTaskForm";
import TasksList from "./components/TasksList";
import Footer from "./UI/Footer";
import { GlobalStyle } from "./GlobalStyles";
import Main from "./UI/Main";
import { useEffect, useState } from "react";
import { getFromStorage, setToStorage } from "./utilities/localStorage";

const App = () => {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    const storageTasks = getFromStorage("tasks") ?? [];
    setTasks(storageTasks);
  }, []);

  useEffect(() => {
    setToStorage("tasks", tasks);
  }, [tasks]);

  const removeClickHandler = (removedTaskId) => {
    setTasks((prevTasks) =>
      prevTasks.filter((task) => task.id !== removedTaskId)
    );
  };

  const addNewTaskHandler = (taskTitle) => {
    setTasks((prevTasks) => [
      ...prevTasks,
      {
        id: (Math.random() * 100).toString(),
        title: taskTitle,
        isFinished: false,
      },
    ]);
  };

  const changeTaskHandler = (changedTask) => {
    const currentTask = tasks.find((task) => task.id === changedTask.id);
    const currentTaskIndex = tasks.indexOf(currentTask);

    return setTasks((prevTasks) => [
      ...prevTasks.slice(0, currentTaskIndex),
      changedTask,
      ...prevTasks.slice(currentTaskIndex + 1, prevTasks.length),
    ]);
  };

  return (
    <>
      <GlobalStyle />
      <Header />
      <Main>
        <AddNewTaskForm onAddNewTask={addNewTaskHandler} />
        <TasksList
          tasks={tasks}
          onRemove={removeClickHandler}
          onChangeTask={changeTaskHandler}
        />
      </Main>
      <Footer />
    </>
  );
};

export default App;
