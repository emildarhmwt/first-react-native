import React from "react";

function TodoItem(todo) {
  const getTodoTitleStyle = () => {
    if (todo.completed === true) {
      return { textDecoration: "line-through" };
    } else {
      return { textDecoration: "none" };
    }
  };

  return (
    <div style={style.todoItem}>
      <input
        type="checkbox"
        style={style.checkbox}
        onChange={() => todo.toggleCompleted(todo.id)}
      />
      <p style={getTodoTitleStyle()}>{todo.title}</p>
      <button style={style.button} onClick={() => todo.deleteTodo(todo.id)}>
        x
      </button>
    </div>
  );
}

const style = {
   todoItem: {
    border: '2px solid #f4f4f4',
    fontSize: '24px',
    // Tambahkan styles di bawah ini
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: '450px',
  },
  // Tambahkan styles di bawah ini
  checkbox: {
    marginRight: '10px',
    height: '18px',
    width: '18px',
  },
  button: {
    backgroundColor: "#BB0000",
    color: "#fff",
    height: "30px",
    width: "30px",
    borderRadius: "100%",
    border: "none",
    cursor: "pointer",
    fontSize: "10px",
    marginLeft: '30px',
  },
};

export default TodoItem;