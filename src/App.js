import Header from "./components/UI/Header";
import AddNewTaskForm from "./components/AddNewTaskForm";
import TasksList from "./components/TasksList";
import Footer from "./components/UI/Footer";
import { GlobalStyle } from "./GlobalStyles";
import Main from "./components/UI/Main";
import TasksProvider from "./store/TasksProvider";

const App = () => {
  return (
    <TasksProvider>
      <GlobalStyle />
      <Header />
      <Main>
        <AddNewTaskForm />
        <TasksList />
      </Main>
      <Footer />
    </TasksProvider>
  );
};

export default App;
