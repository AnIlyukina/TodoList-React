import React from 'react';
import './TodoList.css';

import TodoListItem from '../TodoListItem/TodoListItem';




function TodoList({todos, onDeleted, onToggleImportant,onToggleDone}) {



  const elements = todos.map((element) =>{

    const { id, ...elementProps} = element

    return(
      <li key = {id}>
        <TodoListItem 
          onDeleted = {() => onDeleted(id)} 
          onToggleImportant = {() => onToggleImportant(id)} 
          onToggleDone = {() => onToggleDone(id)} 
          {...elementProps}/>
      </li>
    )
  })

  return (
    <>
      <ul>
       {elements}
      </ul>
    </>
  );
}

export default TodoList;
