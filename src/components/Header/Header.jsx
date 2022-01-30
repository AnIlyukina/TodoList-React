import React from "react";
import './Header.css'

function Header({done, toDo}){
  return(
    <header className="header">  
      <div className="header__block">
      <h1 className="header__title">Todo List</h1>
      <div className="header__status">
        <span className="status">{toDo} more to do</span>
        <span className="status">{done} done</span>
      </div>
      </div>
      <p className="header__subtitle">Get things done, one item at a time</p>
    </header>
  )
}

export default Header;