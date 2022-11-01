import React from 'react';
import classes from './Deed.module.css';
import Todo from '../models/todo';

const Deed: React.FC<{ text: string; onRemoveTask: () => void }> = props => {
  return (
    <li onClick={props.onRemoveTask} className={classes.item}>
      {props.text}
    </li>
  );
};

export default Deed;
