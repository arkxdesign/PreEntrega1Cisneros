import React from 'react'
import logoRoots from '/assets/logotipos/logoRoots.svg';
import './Logotipo.css'
import { NavLink } from 'react-router-dom';

const Logotipo = () => {
  return (

    <div>
        <NavLink to={'/'}>
          <img src={logoRoots} className='logoRoots' alt="logo ROOTS" />
        </NavLink>
    </div>
  )
}

export default Logotipo