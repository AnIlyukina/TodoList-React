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
        <form onSubmit={this.onSubmit}>
          <input onChange= {this.onLabelChange} value ={this.state.label} type='text' placeholder="Что изволите Госпожа"/>
          <button>Сохранить</button>
        </form>
      </section>
    )
  }
}



