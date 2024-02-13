import React from 'react'
import './IntemListContainer.css'
import Item from '../Item/Item'

const ItemListContainer = ({productos}) => {
  return (
    <div>
      {
        productos.map((producto) => {
          return(
            <Item key={producto.id} producto={producto}/>
          )
        })
      }
    </div>
  )
}

export default ItemListContainer
