import React from 'react'
//import { Link } from "react-router-dom";
import { Button, Card } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Item.css'
import { Link } from "react-router-dom";

const Item = ({ item }) => {
    return (
      
      <div className='Item'>
            <Card style={{ width: '18rem' }}>
  <Card.Img src={ item.Imagen } />
  <Card.Body>
    <Card.Title>{ item.Nombre }</Card.Title>
    <Card.Text>
      { item.Precio }
    </Card.Text>
    <Button variant="primary">BUY</Button>
    <br/>
    <br/>
    <Link to="/DetailProduct"  className='a'>MORE DETAILS</Link>
  </Card.Body>
</Card>
        </div>
        
    )
}

export default Item
