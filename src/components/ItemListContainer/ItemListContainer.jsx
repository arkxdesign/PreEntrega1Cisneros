import React from 'react'
import { Button, Card } from 'react-bootstrap'
import './IntemListContainer.css'

const ItemListContainer = ({imagen, descripcion, precio}) => {
  console.log(imagen)
  return (
    <>
    <div className='contenedor'>
      <div className='productos'>
        <div className='contenido'>
          <div className='row'>
            <Card style={{ width: '18rem' }}>
              <Card.Img variant="top" src={imagen} />
                <Card.Body>
                <Card.Title>{descripcion}</Card.Title>
                <Card.Title className='precio'>
                          $ {precio} MXN
                </Card.Title>
                <Button variant="dark">Comprar</Button>
              </Card.Body>
            </Card>    
          </div>
        </div>
      </div>
    </div>

    </>
  )
}

export default ItemListContainer
