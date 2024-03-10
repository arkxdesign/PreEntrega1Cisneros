/* eslint-disable no-unused-vars */
import React,{ useState, useEffect } from 'react';
import ItemListContainer from '../ItemListContainer/ItemListContainer';
import { useParams } from 'react-router-dom';
import { collection, getDocs, query, where } from 'firebase/firestore';
import { db } from '../../firebase/config';


const Products = () => {

  const [productos, setProductos] = useState([]);
  const {categoriaId} = useParams();
  
  useEffect(() => {
    //FILTRAR ITEMS
    const getProducts = categoriaId ? query(collection(db, 'item'),where('categoria', '==', categoriaId)) : collection(db,'item')
    //LISTAR ITEMS
    getDocs(getProducts).then((res) => {
        const newProducts = res.docs.map((doc) => {
            const data = doc.data()
            return {id: doc.id,...data}
        })
        setProductos(newProducts)
    })
  }, [categoriaId])
  
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


