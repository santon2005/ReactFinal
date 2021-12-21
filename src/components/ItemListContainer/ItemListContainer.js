//import Item from '../Item/Item'
import React, { useEffect, useState } from 'react'
import './ItemListContainer.css'
import ItemList from '../ItemList/ItemList'
import { Spinner } from 'react-bootstrap';

const ItemListContainer = () => {

    const [items, setItems] = useState([])
    useEffect(() => {
        setTimeout(() => {
        fetch('/productos.json')
        .then(response => response.json())
        .then(respJson => {console.log(respJson); setItems(respJson)})
        .catch(error => console.log('Error: ', error))
        }, 3000);
    }, [])

    return (
        <div className='ItemListContainer'>
            {
                items.length > 0 ? 
                <ItemList items={items}/>
                :
                <Spinner animation="border" role="status" className='Spinner'>
                 <span className="visually-hidden">Cargando Porductos...</span>
                </Spinner>
            }
            

        </div>
    )
}

export default ItemListContainer
