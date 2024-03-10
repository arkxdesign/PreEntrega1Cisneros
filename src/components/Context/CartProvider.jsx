import { createContext, useState } from "react";
import swal from "sweetalert";

const CartContext = createContext()

const CartProvider = ({children}) => {

    const [cart, setCart] = useState(0);
    const [shoppingCart, setShoppingCart] = useState([]);
    const proximamente = () => {
      swal("Esta web es DEMO del curso de React en CoderHouse")
    }
    
    
    const cartWithTotals = shoppingCart.reduce((cart, item) => {
        const existingProduct = cart.find((prod) => prod.producto.id === item.producto.id);
        if (existingProduct) {      
          existingProduct.cantidad += item.cantidad;
          existingProduct.total += item.cantidad * item.producto.precio;
        } else {
          cart.push({ ...item, total: item.cantidad * item.producto.precio})
        }
        return cart;
      }, []);
    
    const totalSum = cartWithTotals.reduce((sum, item) => sum + item.total,0);
      
    
    const deleteProductItem = (idProduct) => {
        const newCart = shoppingCart.filter(item => item.producto.id !== idProduct);
        const newCount = newCart.reduce((sum, item) => sum + item.cantidad,0);
        setShoppingCart(newCart)
        setCart(newCount)
    }
    
    return (
        <CartContext.Provider value={{cart, setCart, shoppingCart, setShoppingCart, totalSum, cartWithTotals, deleteProductItem, proximamente}}>
            {children}
        </CartContext.Provider>
    )
}

export {
    CartProvider
}
export default CartContext