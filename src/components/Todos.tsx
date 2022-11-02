import React, { useContext } from 'react';

import classes from './Todos.module.css';
import Deed from './Deed';
import { TodoContext } from '../store/todo-context';

const Todos: React.FC = () => {
  const todoCtx = useContext(TodoContext);

  return (
    <ul className={classes.todos}>
      {todoCtx.items.map(item => (
        <Deed
          onRemoveTask={todoCtx.removeTodo.bind(null, item.id)}
          key={item.id}
          text={item.text}
        />
      ))}
    </ul>
  );
};

export default Todos;
