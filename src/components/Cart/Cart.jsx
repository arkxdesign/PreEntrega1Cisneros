import { useContext } from 'react'
import CartContext from '../Context/CartProvider'
import TrashSvg from '/trash-solid.svg'

const Cart = () => {
    const {totalSum, cartWithTotals, deleteProductItem} = useContext(CartContext)
  return (
    <div className="item3">
        <div className='containerCarrito'>
            <div className='productDescription'>CARRITO DE COMPRA</div>
             <div>
                <table>
                {cartWithTotals.map((item, index) => (
                <tbody key={index}>
                    <tr>
                    <th scope='col'>
                        <img className='thImg' src={`/${item.producto.imagen}`} alt="" />
                    </th>
                    <th scope='col' className='thCol'>
                        {item.producto.descripcion} 
                    </th>
                    <th scope='col' className='thCol'>
                        {item.producto.precio} x {item.cantidad}
                        
                    </th>
                    <th scope='col' className='thColTotal'>
                        ${item.total}
                    </th>
                    </tr>                      
                    <tr>
                    <th scope='col'></th>
                    <th scope='col' className='thCol'>
                    {item.producto.stock-item.cantidad >= 0 ? <div className='conStock'>SI COMPRAS 2 O MÁS PRODUCTOS EL ENVIO ES GRATIS!</div> : <div className='sinStock'>YA NO HAY EXISTENCIAS DISPONIBLE, SI REALIZA LA COMPRA ENTRARA A PRODUCCION Y EL FALTANTE SE ENTREGARA EN 30 DIAS.</div>}
                        Disponibles: {item.producto.stock - item.cantidad}
                    </th>
                    <th scope='col'>
                        <img className='trashIcon' src={TrashSvg} onClick={() => deleteProductItem(item.producto.id)}/>
                    </th>
                    </tr>
                </tbody>
                ))}
                </table>
            </div>
            <div className='productTotal'>
            $ {totalSum.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })} MXN
            </div>
        </div>
    </div>
  )
}
export default Cart