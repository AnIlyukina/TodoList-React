import React, {Component} from "react";
import './ItemStatusFilter.css'

export default class ItemStatusFilter extends Component{

  button = [
    {name:'all', label:'Все задачи'},
    {name:'active', label:'Оставшиеся'},
    {name:'done', label:'Выполнено'}
  ]

  render(){

    const {filter, onFilterChange} = this.props
    

    const buttons = this.button.map (({name, label}) =>{
      const isActive = filter === name
      const classActive = isActive ? 'active' : ''
      return(
        <button onClick = {() => onFilterChange(name)} className = {`animation ${classActive}` } key = {name} type = 'button'> {label}</button>
      )
    });


    return(
      <section className="item-filter">
        {buttons}
      </section>
    )
  }
}
