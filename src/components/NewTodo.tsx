import React, { useContext } from 'react';
import { useRef } from 'react';
import classes from './NewTodo.module.css';
import { TodoContext } from '../store/todo-context';

const NewTodo: React.FC = () => {
  const todoCtx = useContext(TodoContext);
  const inputRef = useRef<HTMLInputElement>(null);

  const formSubmitHandler = (event: React.FormEvent) => {
    event.preventDefault();
    const enteredText = inputRef.current!.value;
    if (enteredText.trim().length === 0) {
      return;
    }

    todoCtx.addTodo(enteredText);
  };

  return (
    <form onSubmit={formSubmitHandler} className={classes.form}>
      <label htmlFor="text">Todo text</label>
      <input type="text" id="text" ref={inputRef} />
      <button>Add Todo</button>
    </form>
  );
};

export default NewTodo;
