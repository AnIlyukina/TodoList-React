import React, {Component} from "react";

import './TodoListItem.css'

export default class TodoListItem extends Component{


  render(){
    const {label, onDeleted, onToggleImportant, onToggleDone, done, important} = this.props
  

    let className = ''
    if(done){
      className += 'done'
    }
    if(important){
      className+= ' important'
    }

    return(
      <section>
        <span 
        onClick ={onToggleDone}
        className={className}
        >{label}</span>
        <button className="button" onClick ={onToggleImportant}> Важно</button>
        <button className="button"  onClick ={onDeleted}> Удалить</button>
      </section>
    )
  }
}

