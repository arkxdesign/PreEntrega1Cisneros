import React, { useContext } from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import './NavBar.css';
import { Link, NavLink } from 'react-router-dom';
import { NavDropdown } from 'react-bootstrap';
import CartContext from '../Context/CartProvider';


const NavBar = () => {
  const {proximamente} = useContext(CartContext)

  return (
    <>
      <Navbar data-bs-theme="dark">
        <Container>
          <Nav className="me-auto">
            <Link to='/'>
              <Nav.Link href="#home">START</Nav.Link>
            </Link>
            <Nav.Link onClick={proximamente}>ROOTS</Nav.Link>
            <NavDropdown title="PRODUCTS" id="basic-nav-dropdown">
              <NavDropdown.Item>
                <NavLink to={'categoria/RANGER'}>
                  RANGER
                </NavLink>
              </NavDropdown.Item>                
              <NavDropdown.Item>
                <NavLink to={'categoria/FLOW LINE'}>
                  FLOW LINE
                </NavLink>
              </NavDropdown.Item>
              <NavDropdown.Item>
                <NavLink to={'categoria/RIDERX'}>
                  RIDERX
                </NavLink>
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link onClick={proximamente}>CONTACT US</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  )
}

export default NavBar