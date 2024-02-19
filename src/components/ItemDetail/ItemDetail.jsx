import './itemDetail.css';
import Counter from '../Counter/Counter';
import { useContext } from 'react';
import CartContext from '../Context/CartProvider';

const ItemDetail = ({producto}) => {
  const {shoppingCart, cart} = useContext(CartContext);
  const cartWithTotals = shoppingCart.reduce((cart, item) => {
    const existingProduct = cart.find((prod) => prod.producto.id === item.producto.id);
    if (existingProduct) {      
      existingProduct.cantidad += item.cantidad;
      existingProduct.total += item.cantidad * item.producto.precio;
      //existingProduct.stock -= item.producto.stock - item.cantidad;
    } else {
      cart.push({ ...item, total: item.cantidad * item.producto.precio});
      localStorage.setItem("cart", JSON.stringify(cart));      
    }
    console.log(cart)
    return cart;
  }, []);
  const totalSum = cartWithTotals.reduce((sum, item) => sum + item.total,0);
  
  return (
    <>  
    <div className='cardProductDetail'>
      <div className="flex-container">  
        <div className="item1">
              <img  width={300} src={`/${producto.imagen}`} alt={`Modelo ${producto.descripcion}`} />
        </div>
        <div className="item2">      
              <div className='productDescription'>
                <div>{producto.descripcion}</div>            
                <div className='productPrice'>
                ${producto.precio}MXN
                </div>
              </div>
              <Counter producto={producto} />
        </div>
        {cart >= 1 
        ?
        <div className="item3">      
              <div>
                <div className='productDescription'>CARRITO DE COMPRA</div>
                <div>
                <h3></h3>
                </div>
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
                        <th scope='col'></th>
                      </tr>
                    </tbody>
                  ))}
                  </table>
                </div>
                <div className='productTotal'>
                ${totalSum.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })} MXN
                </div>
              </div>
      
        </div>
        : null}
      </div>          
    </div>
    </>
  );
};

export default ItemDetail