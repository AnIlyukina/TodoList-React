import React, {Component} from "react";
import './ItemStatusFilter.css'

export default class ItemStatusFilter extends Component{

  button = [
    {name:'all', label:'Все'},
    {name:'active', label:'Надо Госпожа'},
    {name:'done', label:'Здесь закончили'}
  ]

  render(){

    const {filter, onFilterChange} = this.props
    

    const buttons = this.button.map (({name, label}) =>{
      const isActive = filter === name
      const classActive = isActive ? 'active' : ''
      return(
        <button onClick = {() => onFilterChange(name)}className={classActive} key = {name} type = 'button'> {label}</button>
      )
    });


    return(
      <section>
        {buttons}
      </section>
    )
  }
}
