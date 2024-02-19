import { createContext, useState } from "react";
import swal from "sweetalert";

const CartContext = createContext()

const CartProvider = ({children}) => {

    const [cart, setCart] = useState(0);
    const [shoppingCart, setShoppingCart] = useState([]);
    const proximamente = () => {
        swal("MODULO DISPONIBLE PROXIMAMENTE");
    }     
    return (
        <CartContext.Provider value={{cart, setCart, proximamente, shoppingCart, setShoppingCart}}>
            {children}
        </CartContext.Provider>
    )
}

export {
    CartProvider
}
export default CartContext