import './App.scss';
import TaskItem, { TaskItemProps } from './components/TaskItem/TaskItem';
import { ITask } from "./models/models";
import { ChangeEvent, FC, useState } from 'react';

interface statusCounter {
  opened: number;
  atWork: number;
  closed: number;
}

const App = () => {
  const [status, setStatus] = useState<string>("Открыто");
  const [task, setTask] = useState<string>("");
  const [todoList, setTodoList] = useState<ITask[]>([]);
  const [statusCounter, setStatusCounter] = useState<number>(0);


  const handleChange = (event: ChangeEvent<HTMLInputElement>): void => {
    event.preventDefault()
    setTask(event.target.value)
  }


  const addTask = (): void => {
    const newTask = { taskName: task, status: status, statusCounter: statusCounter }
    setTodoList([...todoList, newTask]);
    setTask('')
    setStatusCounter(statusCounter + 1)
    setStatus('Открыто')
  }

  const countDuplicates = (arr: ITask[]) => {
    const countMap: Record<string, number> = {};

    arr.forEach(todoList => {
      countMap[todoList.statusCounter] = (countMap[todoList.status] || 0) + 1;
    });

    return countMap;
  };
  const duplicatesCount = countDuplicates(todoList);
  console.log(duplicatesCount)

  return (
    <div className="App">
      <div className="content">
        <h1 className='mainTitle'>ToDo List Scloud</h1>
        <div className="topBlock">
          <div className='currentTasksTable'>
            <h2 className='currentTasksTable__title'>Текущие задачи</h2>
            <div className='currentTasksTable__tasksContainer'>
              <div className='tasksContainer__isOpen task'>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12.167 22.333C6.56054 22.333 2 17.7724 2 12.1665C2 6.56055 6.56054 2 12.167 2C17.7734 2 22.334 6.56054 22.334 12.1665C22.334 17.7725 17.7734 22.333 12.167 22.333ZM12.167 4C7.66406 4 4 7.66357 4 12.1665C4 16.6694 7.66406 20.333 12.167 20.333C16.6699 20.333 20.334 16.6694 20.334 12.1665C20.334 7.66357 16.6699 4 12.167 4Z" fill="#26A1DE" />
                  <path d="M12.167 16.833C11.6143 16.833 11.167 16.3853 11.167 15.833V12.1665C11.167 11.6143 11.6143 11.1665 12.167 11.1665C12.7197 11.1665 13.167 11.6143 13.167 12.1665V15.833C13.167 16.3853 12.7197 16.833 12.167 16.833Z" fill="#26A1DE" />
                  <path d="M12.1768 9.5C11.624 9.5 11.1719 9.05225 11.1719 8.5C11.1719 7.94775 11.6143 7.5 12.167 7.5H12.1768C12.7295 7.5 13.1768 7.94775 13.1768 8.5C13.1768 9.05225 12.7295 9.5 12.1768 9.5Z" fill="#26A1DE" />
                </svg>
                <p className='tasksContainer__text'>Открыто - {statusCounter}</p>
              </div>
              <div className='tasksContainer__atWork task'>
                <svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12.667 22.333C7.06054 22.333 2.5 17.7724 2.5 12.1665C2.5 6.56055 7.06054 2 12.667 2C18.2734 2 22.834 6.56054 22.834 12.1665C22.834 17.7725 18.2734 22.333 12.667 22.333ZM12.667 4C8.16406 4 4.5 7.66357 4.5 12.1665C4.5 16.6694 8.16406 20.333 12.667 20.333C17.1699 20.333 20.834 16.6694 20.834 12.1665C20.834 7.66357 17.1699 4 12.667 4Z" fill="#FF6600" />
                  <path d="M12.667 16.833C12.1143 16.833 11.667 16.3853 11.667 15.833V12.1665C11.667 11.6143 12.1143 11.1665 12.667 11.1665C13.2197 11.1665 13.667 11.6143 13.667 12.1665V15.833C13.667 16.3853 13.2197 16.833 12.667 16.833Z" fill="#FF6600" />
                  <path d="M12.6768 9.5C12.124 9.5 11.6719 9.05225 11.6719 8.5C11.6719 7.94775 12.1143 7.5 12.667 7.5H12.6768C13.2295 7.5 13.6768 7.94775 13.6768 8.5C13.6768 9.05225 13.2295 9.5 12.6768 9.5Z" fill="#FF6600" />
                </svg>
                <p className='tasksContainer__text'>В работе - 0</p>
              </div>
              <div className='tasksContainer__isClosed task'>
                <svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12.667 22.333C7.06054 22.333 2.5 17.7724 2.5 12.1665C2.5 6.56055 7.06054 2 12.667 2C18.2734 2 22.834 6.56054 22.834 12.1665C22.834 17.7725 18.2734 22.333 12.667 22.333ZM12.667 4C8.16406 4 4.5 7.66357 4.5 12.1665C4.5 16.6694 8.16406 20.333 12.667 20.333C17.1699 20.333 20.834 16.6694 20.834 12.1665C20.834 7.66357 17.1699 4 12.667 4Z" fill="#4DB849" />
                  <path d="M12.667 16.833C12.1143 16.833 11.667 16.3853 11.667 15.833V12.1665C11.667 11.6143 12.1143 11.1665 12.667 11.1665C13.2197 11.1665 13.667 11.6143 13.667 12.1665V15.833C13.667 16.3853 13.2197 16.833 12.667 16.833Z" fill="#4DB849" />
                  <path d="M12.6768 9.5C12.124 9.5 11.6719 9.05225 11.6719 8.5C11.6719 7.94775 12.1143 7.5 12.667 7.5H12.6768C13.2295 7.5 13.6768 7.94775 13.6768 8.5C13.6768 9.05225 13.2295 9.5 12.6768 9.5Z" fill="#4DB849" />
                </svg>
                <p className='tasksContainer__text'>Закрыто - 0</p>
              </div>
            </div>
          </div>
          <form className='addTask'
          >
            <h2 className='addTask__title'>Добавить задачу</h2>
            <div className='inputContainer'>
              <input required type='text' onChange={handleChange} value={task} className='addTask__input' placeholder='Текст задачи'></input>
              <button type='button' className='addTask__clearButton' onClick={() => setTask('')}>
                <i><svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M5.41683 15.4167C5.20362 15.4167 4.9904 15.3353 4.82764 15.1726C4.50211 14.847 4.50211 14.3197 4.82764 13.9942L13.9943 4.82752C14.3198 4.50199 14.8472 4.50199 15.1727 4.82752C15.4982 5.15304 15.4982 5.68039 15.1727 6.0059L6.00603 15.1726C5.84327 15.3353 5.63005 15.4167 5.41683 15.4167Z" fill="#FF6600" />
                  <path d="M14.5835 15.4167C14.3703 15.4167 14.1571 15.3353 13.9943 15.1726L4.82764 6.0059C4.50211 5.68038 4.50211 5.15303 4.82764 4.82751C5.15316 4.502 5.68051 4.50199 6.00603 4.82751L15.1727 13.9942C15.4982 14.3197 15.4982 14.8471 15.1727 15.1726C15.0099 15.3353 14.7967 15.4167 14.5835 15.4167Z" fill="#FF6600" />
                </svg>
                </i>
              </button></div>
            <button type='button' className='addTask__button' onClick={addTask}>
              <i><svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M10.7072 19.1923C10.5263 19.3732 10.2763 19.485 10.0001 19.485C9.44765 19.485 9.00019 19.0376 9.00019 18.4852V1.5146C9.00019 0.962163 9.44766 0.514699 10.0001 0.514706C10.5525 0.514713 11 0.962171 11 1.5146L11 18.4852C11 18.7614 10.8881 19.0113 10.7072 19.1923Z" fill="white" />
                <path d="M19.1925 10.707C19.0115 10.8879 18.7616 10.9998 18.4854 10.9998L1.5148 10.9998C0.962366 10.9998 0.514902 10.5523 0.514909 9.99988C0.514916 9.44745 0.962373 8.99998 1.5148 8.99998L18.4854 8.99999C19.0378 8.99999 19.4853 9.44745 19.4853 9.99988C19.4853 10.2761 19.3734 10.5261 19.1925 10.707Z" fill="white" />
              </svg>
              </i>
              <span>Добавить задачу</span>
            </button>
          </form>
          <div className='taskList'>
            <div className='taskList__titles'>
              <h2 className='taskList__titles-tasks'>Задачи</h2>
              <h2 className='taskList__titles-status'>Статус</h2>
            </div>
            {todoList.map((task: ITask, key: number) => {
              return <TaskItem key={key} task={task} />;
            })}
          </div>
        </div>
        <div className="bottomBlock">
          <div className='taskBoard'>
            <div className='taskBoard__container'>
              <h2 className='taskBoard__title'>Доска задач</h2>
              <form className='taskBoard__statuses'>
                <div className='statuses__open'>
                  <div className='open__title statusTitle'>Открыто</div>
                  <div className='open__taskArea taskArea'></div>
                </div>
                <div className='statuses__atWork'>
                  <div className='atWork__title statusTitle'>В работе</div>
                  <div className='atWork__taskArea taskArea'></div>
                </div>
                <div className='statuses__closed'>
                  <div className='closed__title statusTitle'>Закрто</div>
                  <div className='closed__taskArea taskArea'></div>
                </div>
              </form>
            </div>
          </div>
        </div>

      </div>
      <footer />
    </div >
  );
};

export default App;