import React,{useContext, useState} from 'react'
import { Button } from 'react-bootstrap'
import CartContext from '../Context/CartProvider'
import swal from 'sweetalert'

const Counter = ({producto}) => {        

    
    const {cart, setCart, shoppingCart, setShoppingCart} = useContext(CartContext);
    const [contador, setContador] = useState(1);
    
    const decrementar = () => {
        if(contador > 1) {
            setContador(contador - 1)
        }
    }
    
    const incrementar = () => {
        if(contador < 10) {
            setContador(contador + 1)
        }
    }
    
    const agregarCarrito = () => {
        if(cart.lenght == 0){            
            setCart(contador);
            setContador(1)
            
        } else {
            const updateCart = cart + contador;
            const cantidad =  contador;
            setCart(updateCart)
            setShoppingCart([...shoppingCart, { producto, cantidad }]);
            setContador(1)
        }
    }
    
    const pagarCarrito = () => {
        setCart(0)
        setContador(1)
        setShoppingCart([]);
        swal("Tú pago se proceso con exito, gracias por tu compra!!")
    }
    
  return (
    <>
        <div className='buttonContainer'>
        <Button className="buttonL" variant="dark" onClick={decrementar}>-</Button>
        <Button className="contador" variant="dark">{contador}</Button>
        <Button className="buttonR" variant="dark" onClick={incrementar}>+</Button>
        </div> 
        <div className='buttonContainer'>
        <Button className='buttonAgregar' variant="dark" onClick={agregarCarrito}>Agregar al carrito</Button>        
        </div>
        {cart >= 1 ? 
        <div className='buttonContainer'>
        <Button className='buttonPagar' variant="dark" onClick={(pagarCarrito)}>Pagar ahora</Button>
        </div>
        : 
        null
        }        
    </>
  )
}

export default Counter