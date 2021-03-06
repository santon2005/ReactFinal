import React from 'react'
//import { Link } from "react-router-dom";
import {  Card } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Item.css'
import { Link } from "react-router-dom";
//import ItemCount from '../ItemCount/ItemCount'
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
    <Link to= {`/item/${item.id}`}>MORE DETAILS</Link>
  </Card.Body>
</Card>
        </div>
        
    )
}

export default Item
