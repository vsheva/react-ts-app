import React from 'react';
import Todo from '../models/todo';

const Deed: React.FC<{ item: Todo }> = props => {
  return (
    <div>
      <li>{props.item.text}</li>
    </div>
  );
};

export default Deed;
