import React from 'react'
import logoRoots from '/logoRoots.svg';
import './Logotipo.css'
import { Link } from 'react-router-dom';

const Logotipo = () => {
  return (

    <div>
      <Link to={'/'}>
        <img src={logoRoots} className='logoRoots' alt="logo ROOTS" />
      </Link>
    </div>
  )
}

export default Logotipo