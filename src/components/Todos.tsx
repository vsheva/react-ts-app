import React from 'react';
import Todo from '../models/todo';
import Deed from './Deed';

const Todos: React.FC<{ items: Todo[] }> = props => {
  return (
    <ul>
      {props.items.map(item => (
        <Deed key={item.id} item={item} />
      ))}
    </ul>
  );
};

export default Todos;
