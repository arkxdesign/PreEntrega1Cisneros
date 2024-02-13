import React from 'react'
import instagram from '/Instagram.png'
import twitter from '/Twitter.png'
import facebook from '/Facebook.png'
import bullet from '/logo-ICO.png'
import bulletSucursal from '/bulletSucursal.png'
import './Footer.css'
 
const Footer = () => {
  return (      
            <footer>
            <div className="row">
                <div className="col-md-3 footerColumna1">
                    <h3>TE PODEMOS AYUDAR?</h3>
                    <ul>
                        <li><img src={bullet} alt="" /><a href="#"> ESTADO DEL PEDIDO</a></li>
                        <li><img src={bullet} alt="" /><a href="#"> DEVOLUCIONES</a></li>
                        <li><img src={bullet} alt="" /><a href="#"> OPCIONES DE PAGO</a></li>
                        <li><img src={bullet} alt="" /><a href="#"> COMUNICATE CON NOSOTROS</a></li>
                    </ul>
                </div>
                <div className="col-md-3 footerColumna2">
                    <h3>SUCURSALES</h3>
                    <ul>
                    <li><img src={bulletSucursal} alt="" /><a href="../pages/sucursales.html#sucursalBucerias"> BUCERÍAS</a></li>
                    <li><img src={bulletSucursal} alt="" /><a href="../pages/sucursales.html#sucursalVallarta"> PTO. VALLARTA</a></li>
                    <li><img src={bulletSucursal} alt="" /><a href="../pages/sucursales.html#sucursalPuntaDeMita"> PUNTA DE MITA</a></li>
                    <li><img src={bulletSucursal} alt="" /><a href="../pages/sucursales.html#sucursalSayulita"> SAYULITA</a></li>
                    </ul>  
                </div>
                
                <div className="col-md-6 footerColumna3">
                    <a href="#">
                        <img src={instagram} alt="" />
                    </a>
                    <a href="#">
                        <img src={facebook} alt="" />
                    </a>
                    <a href="#">
                        <img src={twitter} alt="" />
                    </a>
                    <p>
                    <a href="#">TERMINOS Y CONDICIONES</a>
                    </p>
                </div>
                </div>
            </footer>
  )
}

export default Footer
