import React from "react";

function Header({done, toDo}){
  return(
    <header>
      <h1>Госпожа???</h1>
      <span>Сделано Госпожой: {done}, еще сделать {toDo}</span>
    </header>
  )
}

export default Header;