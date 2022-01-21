import React from "react";
import './Header.css'
import fish from '../../images/header-icon.png'

function Header({done, toDo}){
  return(
    <header className="header">
      <img className="header__logo" src={fish}></img>
      <div className="header__block">
        <h1 className="header__title">Список дел</h1>
        <span className="header__status">Выполненные задачи: {done}</span>
        <span className="header__status">Оставшиеся задачи: {toDo}</span>
      </div>
    </header>
  )
}

export default Header;