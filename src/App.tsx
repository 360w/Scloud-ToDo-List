import { AddTask } from "./components/AddTask/AddTask";
import { CurrentTasks } from "./components/CurrentTasks/CurentTasks";
import TaskItem from "./components/TaskItem/TaskItem"
import './App.scss';
import { TaskList } from "./components/TaskList/TaskList";

const App = () => {

  return (
    <div className="App">
      <h1 className='mainTitle'>ToDo List Scloud</h1>
      <CurrentTasks isClosedCounter={2} isOpenCounter={2} atWorkCounter={2} />
      <AddTask />
      <TaskList />
      <footer />
    </div >
  );
};

export default App;