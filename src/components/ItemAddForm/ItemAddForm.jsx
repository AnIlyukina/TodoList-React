import React, {Component} from "react";

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
      <section>
        <form className="add-form" onSubmit={this.onSubmit}>
          <input className ='input' onChange= {this.onLabelChange} value ={this.state.label} type='text' placeholder="Что изволите Госпожа"/>
          <button className="animation">Сохранить</button>
        </form>
      </section>
    )
  }
}



