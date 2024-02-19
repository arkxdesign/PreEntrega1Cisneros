import React,{useState} from 'react'
import { Button } from 'react-bootstrap'

const Contador = () => {

    const [contador, setContador] = useState(1)

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
        alert("AGREGASTE" + " " + contador + " " + "PRODUCTOS AL CARRITO")
    }

  return (
    <>
        <div>
        <Button variant="dark" onClick={decrementar}>-</Button>
        <Button variant="dark">{contador}</Button>
        <Button variant="dark" onClick={incrementar}>+</Button>
        <Button variant="dark" className='ml-3' onClick={agregarCarrito}>Agregar al carrito</Button>
        </div>
    </>
  )
}

export default Contador