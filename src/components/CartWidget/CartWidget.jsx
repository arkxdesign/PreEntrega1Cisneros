import { useContext } from 'react';
import logoCart from '/cart.svg';
import './CartWidget.css';
import CartContext from '../Context/CartProvider';

const CartWidget = () => {
  const {cart} = useContext(CartContext);
  

  return (  
      <div className='cart'>
          <img src={logoCart} className='logoCart' alt="Cart" />
          <div className='bgContador'>
              <p>{cart}</p>
          </div>
      </div>
  )
}
export default CartWidget