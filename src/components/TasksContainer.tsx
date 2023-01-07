import { useState } from 'react';

import { TaskProp } from '../App';
import { Task } from './Task';

import styles from './tasksContainer.module.css';
import listLogo from '../assets/listLogo.svg'
interface TasksContainerProps {
    tasks: TaskProp[];
    handleDeleteTask: (id: string) => void;
}

export function TasksContainer({tasks, handleDeleteTask}: TasksContainerProps) {

    const [listCompleteTasks, setListCompleteTasks] = useState(0);
    const taskListIsEmpty = tasks.length == 0;
    
    function defineListOfTasksConcluded() {
        const taskConcluded = tasks.reduce((acc = 0, task) => {
            if(task != null && task.status == true){
                return acc += 1;
            } else return acc;
        },0)
        setListCompleteTasks(taskConcluded);
    }

    function handleChangeStatus(identifier: string){
        tasks.map(task => {
            if(identifier == task.id){
                return task.status = !task.status
            }
        })
        defineListOfTasksConcluded();
    }

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
                            <img 
                                src={listLogo} 
                                alt="Logo de Lista" 
                            />
                            <div> 
                                <strong>Você ainda não tem tarefas cadastradas</strong> 
                                <p>Crie tarefas e organize seus itens a fazer</p>
                            </div>
                        </>
                    ) : (
                        tasks.map((task) => {
                            return (
                                <Task 
                                    key={task.id} 
                                    content={task.content} 
                                    id={task.id} 
                                    deleteTask={handleDeleteTask} 
                                    handleChangeStatus={() => 
                                    handleChangeStatus(task.id)}
                                />    
                            );
                        })
                    )
                }
            </div>
        </div>
    );
}