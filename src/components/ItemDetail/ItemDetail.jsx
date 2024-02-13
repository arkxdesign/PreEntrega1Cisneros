import React from 'react';
import Contador from '../Contador/Contador';
import Card from 'react-bootstrap/Card';
import './itemDetail.css';

const ItemDetail = ({producto}) => {
  console.log(producto)
  const {id, imagen, descripcion, stock, precio} = producto;

  return (
    <>  
    <Card className='cardProductDetail'>
      <div class="flex-container">  
        <div class="item1">
              <Card.Img  variant="top" width={300} src={`/${imagen}`} alt={`Modelo ${descripcion}`} />
        </div>
        <div class="item2">      
              <Card.Body>
                <Card.Title>{descripcion}</Card.Title>
                <Card.Text>
                Disponibles: {stock}
                </Card.Text>
                <Card.Title className='productPrice'>{`$ ${precio} MXN `}</Card.Title>
              </Card.Body>
              <Contador/>
        </div>
      </div>      
    </Card>
    </>
  );
};

export default ItemDetail