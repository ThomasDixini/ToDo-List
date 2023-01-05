import './createTasks.module.css';
import { FormEvent, useState } from 'react'

interface CreateTasksProps {
    getInputValue: (e: FormEvent) => void;
    createNewTask: () => void;
    taskInputValue: string;
}

export function CreateTasks({getInputValue, createNewTask, taskInputValue}: CreateTasksProps ){

    return(
        <section>
            <form action="" onSubmit={createNewTask}>
                <input type="text" placeholder="Adicione uma nova tarefa" onChange={getInputValue} value={taskInputValue} required/>
                <button type="submit" disabled={taskInputValue == '' ? true : false}> Criar </button>
            </form>
        </section>
    );
}