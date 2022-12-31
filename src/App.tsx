import { CreateTasks } from './components/CreateTasks'
import { Header } from './components/Header'
import './global.css'
import './styles.module.css'

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <CreateTasks />
      </main>
    </div>
  )
}

export default App
