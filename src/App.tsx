import React from 'react';
import './App.css';
import Todos from './components/Todos';
import Todo from './/models/todo';
import NewTodo from './components/NewTodo';

function App() {
  const todos = [new Todo('Learn React'), new Todo('Learn TS')];
  const addTaskHandler = (text: string) => {};

  return (
    <div>
      <NewTodo onAddTask={addTaskHandler} />
      <Todos items={todos} />
    </div>
  );
}

export default App;

//['Learn React', 'Learn TS']
