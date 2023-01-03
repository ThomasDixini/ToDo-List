import { BsTrash } from 'react-icons/bs'
import styles from './task.module.css'

interface TaskProps {
    content: string;
    id: string;
}

export function Task({content, id}: TaskProps) {
    return(
        <article className={styles.task}>
            <label htmlFor={id} className={styles.checkboxContainer}> 
                <input type="checkbox" className={styles.checkInput} id={id} />
                <span className={styles.checkmark}></span>
            </label>
            
            <p> {content} </p>
            <BsTrash size={20} />
        </article>
    );
}