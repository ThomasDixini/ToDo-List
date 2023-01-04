import './createTasks.module.css';
import { FormEvent, useState } from 'react'

interface CreateTasksProps {
    getInputValue: (e: FormEvent) => void;
    createNewTask: () => void;
}

export function CreateTasks({getInputValue, createNewTask}: CreateTasksProps ){

    return(
        <section>
            <form action="">
                <input type="text" placeholder="Adicione uma nova tarefa" onChange={getInputValue} />
                <button type="button"onClick={createNewTask}> Criar </button>
            </form>
        </section>
    );
}