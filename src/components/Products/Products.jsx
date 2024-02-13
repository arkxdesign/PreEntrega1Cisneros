/* eslint-disable no-unused-vars */
import React,{ useState, useEffect } from 'react';
import ItemListContainer from '../ItemListContainer/ItemListContainer';
import { useParams } from 'react-router-dom';

const Products = () => {

  const [productos, setProductos] = useState([]);
  const {categoriaId} = useParams()

  useEffect(() => {

      const fecthData = async () => {
          try {
              const response = await fetch("/productos.json");
              const data = await response.json()

              if(categoriaId){
                const filtraProductos = data.filter((p) => p.categoria == categoriaId)
                setProductos(filtraProductos)

              }else{
                  setProductos(data)        
              }

          } catch (error) {
              console.log("Error en el fetch" + " " + error)
          }
      }
      fecthData()
  }, [categoriaId]);

  return (
        <div className='itemListContainer'>
            {productos.length == 0
            ?
            <p>CARGANDO...</p>
            :
            <ItemListContainer productos={productos}/>
            }
        </div>
    )
}

export default Products


