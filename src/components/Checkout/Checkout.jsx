/* eslint-disable no-unused-vars */
import React, { useContext, useState } from 'react'
import { getFirestore, collection, addDoc, updateDoc, doc, getDoc } from 'firebase/firestore'
import CartContext from '../Context/CartProvider'
import './Checkout.css'
import { Button } from 'react-bootstrap'
import Cart from '../Cart/Cart'
import { NavLink } from 'react-router-dom'
import { db } from '../../firebase/config';

const Checkout = () => {
    const {cart, setCart, shoppingCart, setShoppingCart, totalSum} = useContext(CartContext);
  
    const [nombre, setNombre] = useState("")
    const [apellido, setApellido] = useState("")
    const [telefono, setTelefono] = useState("")
    const [email, setEmail] = useState("")
    const [emailConfirmacion, setEmailConfirmacion] = useState("")
    const [error, setError] = useState("")
    const [ordenId, setOrdenId] = useState("")

    const formularioControl = (event) => {
        event.preventDefault()
        
        if(!nombre || !apellido || !telefono || !email || !emailConfirmacion){
            setError("Para procesar tu compra es necesario llenar todos los campos")
            return;
        }
        if(email !== emailConfirmacion){
            setError("El email no coincide");
            return;
        }
        const orden = {
            items: shoppingCart.map((producto) => ({
              id: producto.producto.id,
              nombre: producto.producto.descripcion,
              cantidad: producto.cantidad
            })),
            total: totalSum,
            fecha: new Date(),
            nombre,
            apellido,
            telefono,
            email
          }
          Promise.all(
            orden.items.map(async (productoOrden) => {
              const productoRef = doc(db,"item",productoOrden.id);
              const productoDoc = await getDoc(productoRef)
              const stockActual = productoDoc.data().stock
              
              await updateDoc(productoRef, {
               stock: stockActual - productoOrden.cantidad
               })
            })
            )
            .then(() => {
          addDoc(collection(db,"orders"),orden)
          .then((docRef) => {
            setError("")
            setOrdenId(docRef.id)
            setCart(0)
            setShoppingCart([]);
          })
          .catch((error) => {
            console.log("Error: "+ error)
            setError("Error: al crear la orden intentalo más tarde :( ");
          })
        })  
        .catch((error) => {
          console.log(error)
          setError("No se puede actualizar el stock")
        })
      }
      
      return (
    <div className='containerCheckout'>
      <div className='containerForm'>
        <div>  {cart <= 0 ? null :
                  <form onSubmit={formularioControl}>
                      <div>
                          <div>
                              <input className='formInput' name="nombre" type="text" onChange={(e) => setNombre(e.target.value)} placeholder='Escribe tu nombre' />
                          </div>
                          <div>
                              <input className='formInput' name="Apellido" type="text" onChange={(e) => setApellido(e.target.value)} placeholder='Escribe tu apellido' />
                          </div>
                          <div>
                              <input className='formInput' name="Telefono" type="text" onChange={(e) => setTelefono(e.target.value)} placeholder='Escribe tu telefono' />
                          </div>
                          <div>
                              <input className='formInput' name="Email" type="text" onChange={(e) => setEmail(e.target.value)} placeholder='Escribe tu Email' />
                          </div>
                          <div>
                              <input className='formInput' name="EmailConfirmacion" type="text" onChange={(e) => setEmailConfirmacion(e.target.value)} placeholder='Confirma tu email' />
                          </div>
                          <Button className='buttonCheckout' variant="dark" type='submit'>PROCESAR ORDEN DE COMPRA</Button>
                          {error && <p className='error'>{error}</p>}

                      </div>
                  </form>
                }          
        </div>
      {ordenId && (<div>
        
        <p>
        ¡Gracias por tu compra!
        </p> 
        <p className='ordenTxt'>
        {nombre} {apellido}
        </p>
        <p>
        Tu número de orden es:
        </p>
        <p className='ordenID'>
        {ordenId}
        </p>
        <p>
        se enviara una copia a tu correo:
        </p>
        <p className='ordenTxt'>
        {email}
        </p>
        <NavLink to={'/'}>
          <Button  variant="dark">FINALIZAR</Button>
        </NavLink>
        </div>)}
      </div>
      {cart <= 0 ? null :
        <div className='containerCart'>
          <Cart/>
        </div>
      }
    </div>          
  );
};
export default Checkout
