import React from 'react';
import { useRef } from 'react';

const NewTodo: React.FC<{ onAddTask: (enteredText: string) => void }> = props => {
  const inputRef = useRef<HTMLInputElement>(null);

  const formSubmitHandler = (event: React.FormEvent) => {
    event.preventDefault();
    const enteredText = inputRef.current!.value;
    if (inputRef.current!.value.trim().length === 0) {
      return;
    }
    props.onAddTask(enteredText);
  };

  return (
    <form onSubmit={formSubmitHandler}>
      <label htmlFor="text">Todo text</label>
      <input type="text" id="text" ref={inputRef} />
      <button>Add Todo</button>
    </form>
  );
};

export default NewTodo;
