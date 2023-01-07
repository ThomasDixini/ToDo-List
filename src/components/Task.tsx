import { BsTrash as TrashIcon } from 'react-icons/bs'

import styles from './task.module.css'
interface TaskProps {
    content: string;
    id: string;
    deleteTask: (id: string) => void;
    handleChangeStatus: () => void
}

export function Task({content, id, deleteTask, handleChangeStatus}: TaskProps) {

    function handleOnDeleteTask(id: string) {
        deleteTask(id);
    }

    return(
        <article className={styles.task} >
            <label  htmlFor={id} className={styles.checkboxContainer} > 
                <input 
                    type="checkbox" 
                    className={styles.checkInput} 
                    id={id} 
                    onClick={handleChangeStatus}
                />
                <span className={styles.checkmark}></span>
            </label>
            <p> {content} </p>
            <TrashIcon
                size={20} 
                onClick={() => handleOnDeleteTask(id)}
            />
        </article>
    );
}