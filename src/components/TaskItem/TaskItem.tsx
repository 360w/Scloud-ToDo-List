import { FC } from 'react';
import "./TaskItem.scss";

interface TaskItemProps {
    taskText: string;
    status: string;
}

const TaskItem: FC<TaskItemProps> = ({status, taskText}) => {
    return (
<div className='taskItem'>
    <p className='taskItem__taskText'>{taskText}</p>
    <button className='taskItem__statusBtn'>{status}</button>
    <div className='taskItem__underLine'></div>
</div>
    );
};

export default TaskItem;