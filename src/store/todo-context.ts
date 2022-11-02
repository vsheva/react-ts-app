import React, { useState } from 'react';
import Todo from '../models/todo';

//type
type ContextObj = {
  items: Todo[];
  addTodo: (text: string) => void;
  removeTodo: (id: string) => void;
};

//1.createContext
export const TodoContext = React.createContext<ContextObj>({
  items: [],
  addTodo: () => {},
  removeTodo: (id: string) => {},
});

//2.ContextProvider
const ContextProvider: React.FC = props => {
  const [todos, setTodos] = useState<Todo[]>([]);

  const addTaskHandler = (text: string) => {
    const newTodo = new Todo(text);
    setTodos(prev => prev.concat(newTodo));
  };

  const removeTaskHandler = (id: string) => {
    setTodos(prev => prev.filter(item => item.id !== id));
  };

  //ContextObj
  let contextValue: ContextObj = {
    items: todos,
    addTodo: addTaskHandler,
    removeTodo: removeTaskHandler,
  };

  return <TodoContext.Provider value={contextValue}>{props.children}</TodoContext.Provider>;
};

export default ContextProvider;
