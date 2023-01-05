import styles from './tasksContainer.module.css';
import listLogo from '../assets/listLogo.svg'

import { TaskProp } from '../App';
import { Task } from './Task';


interface TasksContainerProps {
    tasks: TaskProp[];
    handleDeleteTask: (id: string) => void;
}

export function TasksContainer({tasks, handleDeleteTask}: TasksContainerProps) {

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
                            <div> 
                                <strong>Você ainda não tem tarefas cadastradas</strong> 
                                <p>Crie tarefas e organize seus itens a fazer</p>
                            </div>
                        </>
                    ) : (
                        tasks.map((task) => {
                            return (
                                <Task key={task.id} content={task.content} id={task.id} deleteTask={handleDeleteTask}/>
                            );
                        })
                    )
                }
            </div>
        </div>
    );
}