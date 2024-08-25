import TaskItem from '../TaskItem/TaskItem'
import './TaskList.scss'
import { FC } from 'react'

export const TaskList:FC = () => {

    return (
<div className='taskList'>
<div className='taskList__titles'>
    <h2 className='taskList__titles-tasks'>Задачи</h2>
    <h2 className='taskList__titles-status'>Статус</h2>
    </div>
<TaskItem taskText='Сварить пельмени' status='Открыт' />
</div>
    )
}