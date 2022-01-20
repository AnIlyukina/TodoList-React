import React from "react";
import ItemStatusFilter from "../ItemStatusFilter/ItemStatusFilter";

function ItemAddForm(){
  return(
    <section>
      <form>
        <input placeholder="Новая задача"/>
        <button>Сохранить</button>
      </form>
    </section>
  )
}

export default ItemAddForm;