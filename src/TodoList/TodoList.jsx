import React from 'react';
import './TodoList.css';

import Header from '../Header/Header';
import SearchPanel from '../Seach-panel/SearchPanel';
import ItemStatusFilter from '../ItemStatusFilter/ItemStatusFilter';
import TodoItem from '../TodoItem/TodoItem';
import ItemAddForm from '../ItemAddForm/ItemAddForm';


function TodoList() {
  return (
    <>
      <Header/>
      <SearchPanel/>  
      <ItemStatusFilter/>
      <ul>
        <li>
        <TodoItem label='Прочитать Чистый код'/>
        </li>
        <li>
        <TodoItem label='Доделать TodoList на реакте'/>
        </li>
      </ul>
      <ItemAddForm/>
    </>
  );
}

export default TodoList;
