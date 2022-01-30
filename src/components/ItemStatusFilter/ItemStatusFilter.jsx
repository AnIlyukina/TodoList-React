import React, {Component} from "react";
import './ItemStatusFilter.css'

export default class ItemStatusFilter extends Component{

  button = [
    {name:'all', label:'All'},
    {name:'active', label:'Active'},
    {name:'done', label:'Done'}
  ]

  render(){

    const {filter, onFilterChange} = this.props
    

    const buttons = this.button.map (({name, label}) =>{
      const isActive = filter === name
      const classActive = isActive ? 'active' : ''
      return(
        <button 
          onClick = {() => onFilterChange(name)} 
          className = {`item-filter__button ${classActive}` } 
          key = {name} 
          type = 'button'> 
            {label}
        </button>
      )
    });


    return(
      <section className="item-filter">
        {buttons}
      </section>
    )
  }
}
