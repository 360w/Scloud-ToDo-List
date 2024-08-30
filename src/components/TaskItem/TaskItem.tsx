import { FC, useState } from 'react';
import "./TaskItem.scss";
import { Modal } from '../Modal/Modal';
import { Link, useNavigate } from 'react-router-dom';
import { ITask } from '../../models/models';


export interface TaskItemProps {
    task: ITask;
}


const TaskItem = ({ task }: TaskItemProps) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className='taskItem'>
            <p className='taskItem__taskText'>{task.taskName}</p>
            <button className='taskItem__statusBtn' onClick={() => setIsOpen(true)}>{task.status}</button>
            <Modal isOpen={isOpen} onClose={() => setIsOpen(false)}><div className='Modal'></div></Modal>
        </div>

    );
};

export default TaskItem;