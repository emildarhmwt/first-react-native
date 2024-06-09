import React, { useState } from 'react';


const TodoForm = ({ addTodo }) => {
  const [title, setTitle] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (title) {
      addTodo(title);
      setTitle('');
    }
  };


  return (
    <div style={styles.container}>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Add your Todo"
           value={title}
            onChange={(e) => setTitle(e.target.value)}
          style={styles.formInput}
        />
        <button style={styles.button}>Add Todo</button>
      </form>
    </div>
  );
};

const styles = {
  container: {
    marginBottom: '32px',
  },
  formInput: {
    height: '66px',
    width: '40%',
    fontSize: '16px',
    padding: '0 16px',
  },
  button: {
    height: '72px',
    fontSize: '16px',
  },
}

export default TodoForm