import React from 'react';
import Todo from '../models/todo';

const Deed: React.FC<{ item: Todo }> = props => {
  return (
    <div>
      <li key={props.item.id}>{props.item.text}</li>
    </div>
  );
};

export default Deed;
