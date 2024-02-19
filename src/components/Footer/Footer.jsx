import instagram from '/Instagram.png'
import twitter from '/Twitter.png'
import facebook from '/Facebook.png'
import bullet from '/logo-ICO.png'
import bulletSucursal from '/bulletSucursal.png'
import './Footer.css'
import { useContext } from 'react'
import CartContext from '../Context/CartProvider'


const Footer = () => {

    const {proximamente} = useContext(CartContext)

  return (      
            <footer>
                
            <div className="row">
                <div className="col-md-3 footerColumna1">
                    
                    <h3>TE PODEMOS AYUDAR?</h3>
                    <ul>
                        <li onClick={proximamente}><img src={bullet} alt="" /><a> ESTADO DEL PEDIDO</a></li>
                        <li onClick={proximamente}><img src={bullet} alt="" /><a> DEVOLUCIONES</a></li>
                        <li onClick={proximamente}><img src={bullet} alt="" /><a> OPCIONES DE PAGO</a></li>
                        <li onClick={proximamente}><img src={bullet} alt="" /><a> COMUNICATE CON NOSOTROS</a></li>
                    </ul>
                </div>
                <div className="col-md-3 footerColumna2">
                    <h3>SUCURSALES</h3>
                    <ul>
                    <li onClick={proximamente}><img src={bulletSucursal} alt="" /><a> BUCERÍAS</a></li>
                    <li onClick={proximamente}><img src={bulletSucursal} alt="" /><a> PTO. VALLARTA</a></li>
                    <li onClick={proximamente}><img src={bulletSucursal} alt="" /><a> PUNTA DE MITA</a></li>
                    <li onClick={proximamente}><img src={bulletSucursal} alt="" /><a> SAYULITA</a></li>
                    </ul>  
                </div>
                
                <div className="col-md-6 footerColumna3">
                    <a onClick={proximamente}>
                        <img src={instagram} alt="" />
                    </a>
                    <a onClick={proximamente}>
                        <img src={facebook} alt="" />
                    </a>
                    <a onClick={proximamente}>
                        <img src={twitter} alt="" />
                    </a>
                    <p>
                    <a onClick={proximamente}>TERMINOS Y CONDICIONES</a>
                    </p>
                </div>
                </div>
            </footer>
  )
}

export default Footer
