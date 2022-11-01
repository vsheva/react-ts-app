import React, { useState } from 'react';
import './App.css';
import Todos from './components/Todos';
import Todo from './/models/todo';
import NewTodo from './components/NewTodo';

function App() {
  //const todos = [new Todo('Learn React'), new Todo('Learn TS')];

  const [todos, setTodos] = useState<Todo[]>([]);

  const addTaskHandler = (text: string) => {
    const newTodo = new Todo(text);
    setTodos(prev => prev.concat(newTodo));
  };

  const removeTaskHandler = (id: string) => {
    //const newTodo = new Todo(text);
    setTodos(todos.filter(item => item.id !== id));
  };

  return (
    <div>
      <NewTodo onAddTask={addTaskHandler} />
      <Todos onRemoveTask={removeTaskHandler} items={todos} />
    </div>
  );
}

export default App;

//['Learn React', 'Learn TS']
