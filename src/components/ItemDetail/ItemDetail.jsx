import './itemDetail.css';
import Counter from '../Counter/Counter';
import { useContext} from 'react';
import CartContext from '../Context/CartProvider';
import Cart from '../Cart/Cart';

const ItemDetail = ({producto}) => {
  const { cart } = useContext(CartContext);
  

  return (
    <>  
    <div className='cardProductDetail'>
      <div className="flex-container">  
        <div className="item1">
              <img  width={300} src={`/${producto.imagen}`} alt={`Modelo ${producto.descripcion}`} />
        </div>
        <div className="item2">      
              <div className='productDescription'>
                <div>{producto.descripcion}</div>            
                <div className='productPrice'>
                ${producto.precio}MXN
                </div>
              </div>
              <Counter producto={producto} />
        </div>
        {cart >= 1 
        ?
          <Cart/>
        : null}
      </div>          
    </div>
    </>
  );
};

export default ItemDetail