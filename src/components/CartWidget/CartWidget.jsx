import React from 'react'
import logoCart from '/cart.svg'
import './CartWidget.css'

const CartWidget = () => {
  return (
    <div className='cart'>
        <img src={logoCart} className='logoCart' alt="Cart" />
        <div className='bgContador'>
            <p>0</p>
        </div>
    </div>
  )
}
export default CartWidget