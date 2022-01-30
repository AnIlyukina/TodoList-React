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
      <section className="form-add">
        <p className="form-add__text">Add to the todo list</p>
        <form onSubmit={this.onSubmit}>
          <input className ='input' onChange= {this.onLabelChange} value ={this.state.label} type='text' placeholder="Что изволите Госпожа"/>
          <button className="animation">Add item</button>
        </form>
      </section>
    )
  }
}



