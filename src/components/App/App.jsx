import React, {Component} from 'react';
import './App.css';

import Header from '../Header/Header';
import SearchPanel from '../SeachPanel/SearchPanel';
import ItemStatusFilter from '../ItemStatusFilter/ItemStatusFilter';
import TodoList from '../TodoList/TodoList';
import ItemAddForm from '../ItemAddForm/ItemAddForm';



export default class App extends Component{

    maxId = 100;
    state = {
      todoData: [
        this.createTodoItem('Прочитать Чистый код'),
        this.createTodoItem('Доделать TodoList на реакте'),
        this.createTodoItem('Устроиться на работу')
      ],
      term: '',
      filter: 'all'
    };

    createTodoItem (label){
      return{
        label,
        important: false,
        done: false,
        id:this.maxId++
      }
    };

    deleteItem = (id) =>{
      console.log(id)
      this.setState(({todoData}) =>{
          const itemIndex = todoData.findIndex((el) => el.id === id)
  
          const newArray  = [
            ...todoData.slice(0, itemIndex), 
            ...todoData.slice (itemIndex + 1)
          ]
  
          return{
            todoData: newArray
          }
      })
    };

    addItem = (text) =>{

      const newItem = this.createTodoItem(text)
      this.setState(({todoData}) =>{
        const newArrayItem = [
          ...todoData,
          newItem
        ];
        return{
          todoData: newArrayItem
        }
      })
    };
    toggleProperty(arr,id,propName){
      const itemIndex = arr.findIndex((el) => el.id === id)

      const oldItem = arr[itemIndex]
      const newItem = {...oldItem, 
        [propName]:!oldItem[propName]}
      
        return [
        ...arr.slice(0, itemIndex), 
        newItem,
        ...arr.slice (itemIndex + 1)
      ]
    }
    onToggleImportant = (id) =>{
      this.setState(({todoData}) =>{
        return{
          todoData: this.toggleProperty(todoData, id, 'important')
        }
      })
    };
    onToggleDone = (id) =>{
      this.setState(({todoData}) =>{
        return{
          todoData: this.toggleProperty(todoData, id, 'done')
        }
      })
    };
    search(items, term){
      if (term.length === ''){
        return items
      }
     return items.filter((item) =>{
        return item.label.toUpperCase().indexOf(term.toUpperCase()) > -1
      })
    };
    onSearchChange = (term) =>{
      this.setState({term})
    };
    onFilterChange = (filter) =>{
      this.setState({filter})
    };
    filter(items, filter){
      switch(filter){
        case 'all':
          return items;
        case 'active':
          return items.filter((item) => !item.done);
        case 'done':
          return items.filter((item) => item.done);
        default:
          return items
      }
    }

  render(){

    const {todoData, term, filter} = this.state

    const visibleItems = this.filter(this.search(todoData, term), filter)
    const doneCount = todoData.filter(el => el.done ).length
    const todoCount = todoData.length - doneCount


    return (
      <div className='app'>
        <div>
          <Header done = {doneCount} toDo = {todoCount}/>
          <SearchPanel onSearchChange={this.onSearchChange}/>  
          <ItemStatusFilter 
            filter = {filter}
            onFilterChange ={this.onFilterChange}/>
          <TodoList 
            onDeleted= {this.deleteItem} 
            todos ={visibleItems}
            onToggleImportant = {this.onToggleImportant} 
            onToggleDone = {this.onToggleDone}
            />
        </div>
        <ItemAddForm onAddItem = {this.addItem}/>
      </div>
    );
  }
}

