import React, {Component} from "react";

import './TodoListItem.css'

export default class TodoListItem extends Component{


  render(){
    const {label, onDeleted, onToggleImportant, onToggleDone, done, important} = this.props
  

    let className = ''
    if(done){
      className += ' done'
    }
    if(important){
      className += ' important'
    }

    return(
      <section className="item">
        <p 
        onClick ={onToggleDone}
        className={`item__text ${className}`}
        >{label}</p>
        <div className="item__buttons">
          <button 
            className="item__button item__button_type_important" 
            onClick ={onToggleImportant}></button>
          <button 
            className="item__button item__button_type_delete"  
            onClick ={onDeleted}></button>
        </div>
      </section>
    )
  }
}

