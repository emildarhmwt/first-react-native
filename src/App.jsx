import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import Todos from './components/Todos';  // Lalukan Import
import './App.css'

const DUMMY = [
  {
      id: 1,
      title: 'Finish Progate React Course',
      completed: false,
    },
    {
      id: 2,
      title: 'Have lunch with Guru Domba',
      completed: false,
    },
    {
      id: 3,
      title: 'Study React with Ninja Ken',
      completed: false,
    },
]

function App() {
const [todos, setTodos] = useState(DUMMY);

console.log(todos);

// Definisikan toggleCompleted di sini
 const toggleCompleted = (todoId) => {
  const updatedTodos = todos.map((todo) => {
    if (todo.id === todoId) {
      todo.completed = !todo.completed
    }
    return todo
  })
  setTodos(updatedTodos)
}

  return (
    <div style={styles.container}>
      <h1 style={styles.title}>My Todo List</h1>
       <Todos todos={todos} toggleCompleted={toggleCompleted} />
    </div>
  )
}

const styles = {
  container: {
    textAlign: 'center',
    padding: '12px',
    width: '1000px',
  },
  title: {
    fontSize: '36px',
  },
}

export default App
