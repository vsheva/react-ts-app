import React from 'react';
import classes from './Todos.module.css';
import Todo from '../models/todo';
import Deed from './Deed';

const Todos: React.FC<{ items: Todo[]; onRemoveTask: (id: string) => void }> = props => {
  return (
    <ul className={classes.todos}>
      {props.items.map(item => (
        <Deed
          onRemoveTask={props.onRemoveTask.bind(null, item.id)}
          key={item.id}
          text={item.text}
        />
      ))}
    </ul>
  );
};

export default Todos;
