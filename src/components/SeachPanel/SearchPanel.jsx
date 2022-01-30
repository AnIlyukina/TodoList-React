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
      <section className="search">
        <input 
          className="search__input" 
          type = 'text'  
          value ={this.state.term} 
          onChange ={this.onSearchChange} 
          placeholder="Search..."/>
      </section>
    )
  }
}

