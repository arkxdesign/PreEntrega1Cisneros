import React from 'react'
import ItemListContainer from '../ItemListContainer/ItemListContainer'

const Products = () => {

    const productos = [
        {
          "imagen": "images1.jpg",
          "descripcion": "Short MTB FOX-X1",
          "precio": 2100
        },
        {
          "imagen": "images2.jpg",
          "descripcion": "Short MTB FOX RANGER",
          "precio": 1800
        },
        {
          "imagen": "images3.jpg",
          "descripcion": "Short MTB FOX TRAZO0",
          "precio": 3000
        }    
      ]

  return (
    <>
    {
        productos.map((p) => {
            return(
                <ItemListContainer imagen={p.imagen} descripcion={p.descripcion} precio={p.precio}/>
            )
        })
    }
    </>
  )
}

export default Products


