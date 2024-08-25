import './AddTask.scss'
import { FC } from 'react'

export const AddTask:FC = () => {

    return (
<div className='addTask'>
    <h2 className='addTask__title'>Добавить задачу</h2>
    <input maxLength={200} className='addTask__input' placeholder='Текст задачи'></input>
    <button className='addTask__button'>
        <i><svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M10.7072 19.1923C10.5263 19.3732 10.2763 19.485 10.0001 19.485C9.44765 19.485 9.00019 19.0376 9.00019 18.4852V1.5146C9.00019 0.962163 9.44766 0.514699 10.0001 0.514706C10.5525 0.514713 11 0.962171 11 1.5146L11 18.4852C11 18.7614 10.8881 19.0113 10.7072 19.1923Z" fill="white"/>
<path d="M19.1925 10.707C19.0115 10.8879 18.7616 10.9998 18.4854 10.9998L1.5148 10.9998C0.962366 10.9998 0.514902 10.5523 0.514909 9.99988C0.514916 9.44745 0.962373 8.99998 1.5148 8.99998L18.4854 8.99999C19.0378 8.99999 19.4853 9.44745 19.4853 9.99988C19.4853 10.2761 19.3734 10.5261 19.1925 10.707Z" fill="white"/>
</svg>
</i>
        <span>Добавить задачу</span>
        </button>
</div>
    )
}