import React, { useState, useRef } from 'react';


function App() {
  const [todos, setTodos] = useState([]);
  const [inputValue, setInputValue] = useState('');
  const todoId = useRef(1);
  const [searchId, setSearchId] = useState('');
  
  const addTodo = () => {
    setTodos([...todos, { id: todoId.current, text: inputValue }]);
    todoId.current++;
    setInputValue('');
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter(todo => todo.id !== id));
  };

  const editTodo = (id, newText) => {
    setTodos(
      todos.map(todo => (todo.id === id ? { id: todo.id, text: newText } : todo))
    );
  };

  const searchTodo = () => {
    const foundTodo = todos.find(todo => todo.id === parseInt(searchId));
    if (foundTodo) {
      alert(`Found todo: ${foundTodo.text}`);
    } else {
      alert('Todo not found');
    }
  };

  return (
    <div className="App">
      <h1>Todo List</h1>
      <div>
        <input
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
        <button onClick={addTodo}>Add</button>
      </div>
      <br />
      <div>
        <input
          type="text"
          value={searchId}
          onChange={(e) => setSearchId(e.target.value)}
          placeholder="Search by ID"
        />
        <button onClick={searchTodo}>Search</button>
      </div>
      <br />
      <ul>
        {todos.map(todo => (
          <li key={todo.id}>
            {todo.text}
            <button onClick={() => deleteTodo(todo.id)}>Delete</button>
            <input
              type="text"
              onChange={(e) => editTodo(todo.id, e.target.value)}
            />
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;