import styles from './tasksContainer.module.css';
import listLogo from '../assets/listLogo.svg'
import { BsTrash } from 'react-icons/bs'

export function TasksContainer() {

    interface Task {
        id: number;
        content: string;
    }

    const tasks: Task[] = [
        {
            id: 1,
            content: 'Limpar e organizar o quarto asfsa jofajiosfjk ajklfjksajk~fajk~kfjajk~sfjkoajiofjiosajiosafji sakfkjsankfaknnkfsank' 
        },
        {
            id: 2,
            content: 'Limpar e organizar o quarto'
        },
    ];

    const taskListIsEmpty = tasks.length == 0;

    return(
        <div className={styles.tasksBox}>
            <header>
                <div >
                    <strong> Tarefas Criads </strong>
                    <span> 0 </span>
                </div>
                <div>
                    <strong> Concluídas </strong>
                    <span> 0 </span>
                </div>
            </header>
            <div className={styles.content}>
                {
                    taskListIsEmpty ? (
                        <>
                            <img src={listLogo} alt="Logo de Lista" />
                            <p> 
                                <strong>Você ainda não tem tarefas cadastradas</strong> 
                                <p>Crie tarefas e organize seus itens a fazer</p>
                            </p>
                        </>
                    ) : (
                        tasks.map((task) => {
                            return (
                                <article className={styles.task}>
                                    <label htmlFor="checkbox" className={styles.checkboxContainer}> 
                                        <input type="checkbox" className={styles.checkInput} id="checkbox" />
                                        <span className={styles.checkmark}></span>
                                    </label>
                                    
                                    <p> {task.content} </p>
                                    <BsTrash size={20} />
                                </article>
                            );
                        })
                    )
                }
            </div>
        </div>
    );
}