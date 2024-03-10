import { useContext } from 'react';
import logoCart from '/cart.svg';
import './CartWidget.css';
import CartContext from '../Context/CartProvider';
import { NavLink } from 'react-router-dom';

const CartWidget = () => {
  const {cart} = useContext(CartContext);
  

  return (  
      <div className='cart'>
        <NavLink to={'/checkout'}>
          <img src={logoCart} className='logoCart' alt="Cart" />
          <div className='bgContador'>
              <p>{cart}</p>
          </div>
        </NavLink>
      </div>
  )
}
export default CartWidget