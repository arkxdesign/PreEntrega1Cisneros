import { Button, Card } from 'react-bootstrap'
import './Item.css'
import { Link } from 'react-router-dom';

const Item = ({producto}) => {
    const {id, imagen, descripcion, precio} = producto;

  return (
    <>
    <div className='contenedor'>
      <div className='productos'>
        <div className='contenido'>
                <div className='row' key={id}>
                    <Card style={{ width: '18rem' }}>
                      <Link to={`/contenido/${id}`}>
                        <Card.Img className='imagenProducto' variant="top" src={`/${imagen}`} />
                      </Link>
                      <Card.Body>
                      <Card.Title>{descripcion}</Card.Title>
                      <Card.Title className='precio'>
                              $ {precio} MXN
                      </Card.Title>
                      <Link to={`/contenido/${id}`}>                    
                        <Button variant="dark">Comprar</Button>
                      </Link>
                    </Card.Body>
                    </Card>    
                </div>
        </div>
      </div>
    </div>

    </>
  )
}

export default Item
