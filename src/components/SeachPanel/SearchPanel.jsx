import React, {Component} from "react";

import './SearchPanel.css'

export default class SearchPanel extends Component{
  state = {
    term:''
  };
  onSearchChange = (e) =>{
    const term = e.target.value
    this.setState({term})
    this.props.onSearchChange(term)
  }

  render(){
    return(
      <section>
        <input type = 'text'  value ={this.state.term} onChange ={this.onSearchChange} placeholder="Тут поиск госпожа"/>
      </section>
    )
  }
}

