import { useState } from "react";
import Todos from "./components/Todos";
import TodoForm from './components/TodoForm'

const DUMMY = [
  {
    id: 1,
    title: "Finish Progate React Course",
    completed: false,
  },
  {
    id: 2,
    title: "Have lunch with Guru Domba",
    completed: false,
  },
  {
    id: 3,
    title: "Study React with Ninja Ken",
    completed: false,
  },
];

function App() {
  const [todos, setTodos] = useState(DUMMY);

  const toggleCompleted = (id) => {
    const updateTodos = todos.map((todo) => {
      if (todo.id === id) {
        todo.completed = !todo.completed;
      }
      return todo;
    });

    setTodos(updateTodos);
  };

  const deleteTodo = (id) => {
    const filterDeleted = todos.filter((todo) => {
      return todo.id !== id;
    });

    setTodos(filterDeleted);
  };


   const addTodo = (title) => {
    const newTodo = {
      id: todos.length + 1,
      title: title,
      completed: false,
    };
    setTodos([...todos, newTodo]);
  };

 return (
    <div style={styles.container}>
      <h1 style={styles.title}>My Todo List</h1>
      {/* Menampilkan component TodoForm */}
       <TodoForm addTodo={addTodo} />
      <Todos
        todos={todos}
        toggleCompleted={toggleCompleted}
        deleteTodo={deleteTodo}
      />
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
};

export default App;