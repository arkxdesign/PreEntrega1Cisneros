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
        <div className='buttonContainer'>
        <Button className="buttonL" variant="dark" onClick={decrementar}>-</Button>
        <Button className="contador" variant="dark">{contador}</Button>
        <Button className="buttonR" variant="dark" onClick={incrementar}>+</Button>
        </div> 
        <div className='buttonContainer'>
        <Button className='buttonAgregar' variant="dark" onClick={agregarCarrito}>Agregar al carrito</Button>
        </div>
    </>
  )
}

export default Contador