// import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import './NavBar.css';
import { Link, NavLink } from 'react-router-dom';
import NavDropdown from 'react-bootstrap/NavDropdown';
import CartContext from '../Context/CartProvider';


const NavBar = () => {
  const {proximamente} = CartContext
  return (
    <>
      <Navbar collapseOnSelect expand="lg" data-bs-theme="dark">
        <Container>
          <Nav className="me-auto">
            <Link to={'/'}>
              <div className='divNav'>START</div>
            </Link>
            <div className='divNav' onClick={proximamente}>ROOTS</div>
            <div className='divNavDrop'>
              <NavDropdown title="PRODUCTS" id="basic-nav-dropdown">
                <NavDropdown.Item>
                  <Link to={'categoria/RANGER'}>
                    RANGER
                  </Link>
                </NavDropdown.Item>                
                <NavDropdown.Item>
                  <Link to={'categoria/FLOW LINE'}>
                    FLOW LINE
                  </Link>
                </NavDropdown.Item>
                <NavDropdown.Item>
                  <Link to={'categoria/RIDERX'}>
                    RIDERX
                  </Link>
                </NavDropdown.Item>
              </NavDropdown>          
            </div>  
            <div className='divNav' onClick={proximamente}>CONTACT US</div>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}

export default NavBar