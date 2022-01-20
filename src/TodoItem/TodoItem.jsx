import React from "react";

function TodoItem({label}){
  return(
    <section>
      <span>{label}</span>
      <button> Важно</button>
      <button> Удалить</button>
    </section>
  )
}

export default TodoItem;