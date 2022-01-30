import React, {Component} from "react";

import './ItemAddForm.css'

export default class ItemAddForm extends Component{


  state = {
    label: ''
  }
  onLabelChange = (e) =>{
    this.setState({
      label: e.target.value
    })
  };
  onSubmit = (e) =>{
    e.preventDefault();
    this.props.onAddItem(this.state.label)
    this.setState({
      label: ''
    })
  };

  render(){

    return(
      <section className="add-item">
        <p className="add-item__text">Add to the todo list</p>
        <form className="add-item__form" onSubmit={this.onSubmit}>
          <input className ='add-item__input' onChange= {this.onLabelChange} value ={this.state.label} type='text'/>
          <button className="add-item__button">Add item</button>
        </form>
      </section>
    )
  }
}



