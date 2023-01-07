import styles from './tasksContainer.module.css';
import listLogo from '../assets/listLogo.svg'

import { TaskProp } from '../App';
import { Task } from './Task';
import { useState } from 'react';

interface TasksContainerProps {
    tasks: TaskProp[];
    handleDeleteTask: (id: string) => void;
}

export function TasksContainer({tasks, handleDeleteTask}: TasksContainerProps) {

    const [listCompleteTasks, setListCompleteTasks] = useState(0);

        
        

    function handleChange(identifier: string){
        tasks.map(task => {
            if(identifier == task.id){
                return task.status = !task.status
            }
        })
        const taskConcluded = tasks.reduce((acc = 0, task) => {
            if(task.status == true){
                return acc += 1;
            } else return acc;
        },0)
        setListCompleteTasks(taskConcluded)
    }

    const taskListIsEmpty = tasks.length == 0;

    return(
        <div className={styles.tasksBox}>
            <header>
                <div >
                    <strong> Tarefas Criadas </strong>
                    <span> {tasks.length} </span>
                </div>
                <div>
                    <strong> Concluídas </strong>
                    <span> {listCompleteTasks} de {tasks.length} </span>
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
                                <Task key={task.id} content={task.content} id={task.id} deleteTask={handleDeleteTask} handleChange={() => handleChange(task.id)}/>    
                            );
                        })
                    )
                }
            </div>
        </div>
    );
}