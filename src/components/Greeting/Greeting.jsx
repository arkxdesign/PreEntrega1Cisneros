import React from 'react'
import './Greeting.css'

const Greeting = ({greeting}) => {

  return (
    <h1 className='greeting'>{greeting}</h1>
  )
}

export default Greeting