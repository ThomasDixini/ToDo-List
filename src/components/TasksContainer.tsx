import styles from './tasksContainer.module.css';
import listLogo from '../assets/listLogo.svg'

export function TasksContainer() {
    return(
        <div className={styles.tasksBox}>
            <header>
                <div>
                    <strong> Tarefas Criads </strong>
                    <span> 0 </span>
                </div>
                <div>
                    <strong> Concluídas </strong>
                    <span> 0 </span>
                </div>
            </header>
            <div className={styles.content}>
                <img src={listLogo} alt="Logo de Lista" />
                <p> 
                    <strong>Você ainda não tem tarefas cadastradas</strong> 
                    <p>Crie tarefas e organize seus itens a fazer</p>
                </p>
            </div>
        </div>
    );
}