import { useState, useEffect } from 'react'
import { saveTodos, loadTodos } from './storage'
import './App.css'

function App() {
  const [todos, setTodos] = useState(() => {
    const saved = loadTodos();
    if (saved.length > 0) {
      return saved;
    }
    return [
      { id: 1, text: 'Learn React' },
      { id: 2, text: 'Build a Todo App' },
      { id: 3, text: 'Master useState' }
    ];
  });

  const [newTodo, setNewTodo] = useState('');

  const deleteTodo = (id) => {
    setTodos(todos.filter(todo => todo.id !== id));
  };

  useEffect(() => {
    saveTodos(todos);
  }, [todos]);

  const handleSubmit = (e) => {
    e.preventDefault();
  
    if (newTodo.trim() === '') {
      return;
    }
  
    const todo = {
      id: Date.now(),
      text: newTodo
    };
  
    setTodos([...todos, todo]);
    setNewTodo('');
  };

  return (
    <div className="app">
      <header>
        <h1>My Todo List</h1>
      </header>
      <main>
        <form onSubmit={handleSubmit} className="add-form">
          <input 
            type="text"
            value={newTodo}
            onChange={(e) => setNewTodo(e.target.value)}
            placeholder="Add a new todo..."
            className="todo-input"
          />
          <button type="submit" className="add-btn">Add</button>
        </form>
        <ul className="todo-list">
          {todos.map(todo => (
            <li key={todo.id} className="todo-item">
              <span>{todo.text}</span>
              <button 
                className="delete-btn"
                onClick={() => deleteTodo(todo.id)}
              >
                Delete
              </button>
            </li>
          ))}
        </ul>
      </main>
      <footer>
        <p>&copy; 2024 Ace Coder</p>
      </footer>
    </div>
  );
}


export default App
