import { useState, useEffect} from 'react';
import ItemDetail from '../ItemDetail/ItemDetail';
import { useParams } from 'react-router-dom';
import { doc, getDoc } from 'firebase/firestore';
import { db } from '../../firebase/config';

const ItemDetailContainer = () => {
    const [producto, setProducto] = useState([]);
    const {id} = useParams();

      useEffect(() => { 
       const productRef = doc(db, "item", id)
   
       getDoc(productRef)
       .then(res => { 
        const data = res.data()
        const newProduct = {id: res.id,...data}
        setProducto(newProduct)
       })
       .catch((error) => console.log(error))
     },[])
   
  
  return (
    <div>
        <ItemDetail producto={producto}/>
    </div>
  )
}

export default ItemDetailContainer