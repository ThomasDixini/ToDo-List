import { FormEvent, useState } from 'react'
import { CreateTasks } from './components/CreateTasks'
import { Header } from './components/Header'
import { TasksContainer } from './components/TasksContainer'
import './global.css'
import './styles.module.css'

export interface TaskProp {
  id: string;
  content: string;
}

function App() {

    const [tasks, setTasks] = useState<TaskProp[]>([]);
    const [taskInputValue, setTaskInputValue] = useState('');
    

    function handleCreateNewTask() {
        event?.preventDefault()
        setTasks([...tasks, {id: String(Math.random() * 10), content: taskInputValue}]);
        setTaskInputValue('');
    }

    function handleGetInputValue(e: FormEvent) {
        const target = e.target as HTMLInputElement;
        setTaskInputValue(target.value);
    }

    function handleDeleteTask(id: string) {
      const taskToBeDeleted = tasks.filter(task => {
          return task.id != id;
      })

      setTasks(taskToBeDeleted);
    }

  return (
    <div className="App">
      <Header />
      <main>
        <CreateTasks getInputValue={handleGetInputValue} createNewTask={handleCreateNewTask} taskInputValue={taskInputValue}/>
        <TasksContainer tasks={tasks} handleDeleteTask={handleDeleteTask}/>
      </main>
    </div>
  )
}

export default App
